'use client'

import { useEffect, useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

// Email verification page - processes magic links from Supabase Auth
export const dynamic = 'force-dynamic'

function VerifyEmailContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        // Get email from URL params
        const email = searchParams.get('email')

        console.log('📧 Email verification:', { email })

        if (!email) {
          setStatus('error')
          setMessage('No email found. Invalid link.')
          return
        }

        // Call backend to verify email by email address
        const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://duemora-production.up.railway.app'
        const verifyRes = await fetch(`${apiBaseUrl}/auth/verify-email`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        })

        if (!verifyRes.ok) {
          const error = await verifyRes.json()
          console.error('❌ Verification failed:', error)
          setStatus('error')
          setMessage(error.details || 'Email verification failed. Please try again.')
          return
        }

        console.log('✅ Email verified successfully')
        setStatus('success')
        setMessage('Email verified! Redirecting to app...')

        // Redirect to app after 2 seconds
        setTimeout(() => {
          window.location.href = 'duemora://home'
        }, 2000)
      } catch (err) {
        console.error('❌ Verification failed:', err)
        setStatus('error')
        setMessage('Email verification failed. Please try again.')
      }
    }

    verifyEmail()
  }, [searchParams])

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto"',
      padding: '20px',
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '40px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        maxWidth: '400px',
        textAlign: 'center',
      }}>
        {status === 'loading' && (
          <>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>📧</div>
            <h1 style={{ margin: '16px 0', color: '#333' }}>Verifying Email</h1>
            <p style={{ color: '#666', marginBottom: '24px' }}>Please wait...</p>
            <div style={{
              width: '40px',
              height: '40px',
              border: '3px solid #e0e0e0',
              borderTop: '3px solid #6366f1',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto',
            }} />
            <style>{`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}</style>
          </>
        )}

        {status === 'success' && (
          <>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
            <h1 style={{ margin: '16px 0', color: '#333' }}>Email Verified!</h1>
            <p style={{ color: '#666' }}>
              {message}
            </p>
            <p style={{ color: '#999', fontSize: '14px', marginTop: '20px' }}>
              Redirecting to Duemora app...
            </p>
          </>
        )}

        {status === 'error' && (
          <>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>❌</div>
            <h1 style={{ margin: '16px 0', color: '#d32f2f' }}>Verification Failed</h1>
            <p style={{ color: '#666', marginBottom: '20px' }}>
              {message}
            </p>
            <button
              onClick={() => window.location.href = 'duemora://verify-email'}
              style={{
                backgroundColor: '#6366f1',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '6px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                marginTop: '20px',
              }}
            >
              Go Back to App
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>Loading...</div>}>
      <VerifyEmailContent />
    </Suspense>
  )
}
