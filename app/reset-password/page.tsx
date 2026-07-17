'use client'

import { useState, Suspense, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export const dynamic = 'force-dynamic'

function ResetPasswordContent() {
  const searchParams = useSearchParams()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'form' | 'success' | 'error'>('form')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<{ password?: string; confirm?: string }>({})

  useEffect(() => {
    const emailParam = searchParams.get('email')
    if (emailParam) {
      setEmail(decodeURIComponent(emailParam))
    }
  }, [searchParams])

  const validateForm = () => {
    const newErrors: { password?: string; confirm?: string } = {}

    if (!password) {
      newErrors.password = 'Password is required'
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    }

    if (!confirmPassword) {
      newErrors.confirm = 'Please confirm your password'
    } else if (password !== confirmPassword) {
      newErrors.confirm = 'Passwords do not match'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)
    try {
      console.log('🔐 Resetting password for:', email)

      const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://duemora-production.up.railway.app'
      const resetRes = await fetch(`${apiBaseUrl}/auth/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      if (!resetRes.ok) {
        const error = await resetRes.json()
        console.error('❌ Reset failed:', error)
        setStatus('error')
        setMessage(error.details || 'Failed to reset password. Please try again.')
        setLoading(false)
        return
      }

      console.log('✅ Password reset successfully')
      setStatus('success')
      setMessage('Password reset successfully! Redirecting to login...')

      // Redirect to app login after 2 seconds
      setTimeout(() => {
        window.location.href = 'duemora://login'
      }, 2000)
    } catch (err) {
      console.error('❌ Reset error:', err)
      setStatus('error')
      setMessage('An error occurred. Please try again.')
      setLoading(false)
    }
  }

  if (!email) {
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
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>❌</div>
          <h1 style={{ margin: '16px 0', color: '#d32f2f' }}>Invalid Link</h1>
          <p style={{ color: '#666', marginBottom: '20px' }}>
            No email found. Please request a new password reset.
          </p>
          <button
            onClick={() => window.location.href = 'duemora://forgot-password'}
            style={{
              backgroundColor: '#6366f1',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '6px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
            }}
          >
            Request Reset Link
          </button>
        </div>
      </div>
    )
  }

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
        width: '100%',
      }}>
        {status === 'form' && (
          <>
            <div style={{ fontSize: '48px', marginBottom: '16px', textAlign: 'center' }}>🔐</div>
            <h1 style={{ margin: '16px 0 8px 0', color: '#333', textAlign: 'center', fontSize: '24px' }}>
              Reset Password
            </h1>
            <p style={{ color: '#666', marginBottom: '24px', textAlign: 'center', fontSize: '14px' }}>
              Enter your new password below
            </p>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#333', marginBottom: '8px' }}>
                  New Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    if (errors.password) setErrors({ ...errors, password: '' })
                  }}
                  placeholder="At least 8 characters"
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '6px',
                    border: `1px solid ${errors.password ? '#FF4757' : '#ddd'}`,
                    fontSize: '14px',
                    boxSizing: 'border-box',
                    fontFamily: 'inherit',
                  }}
                  disabled={loading}
                />
                {errors.password && (
                  <p style={{ color: '#FF4757', fontSize: '12px', marginTop: '4px', margin: '4px 0 0 0' }}>
                    {errors.password}
                  </p>
                )}
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#333', marginBottom: '8px' }}>
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value)
                    if (errors.confirm) setErrors({ ...errors, confirm: '' })
                  }}
                  placeholder="Re-enter your password"
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '6px',
                    border: `1px solid ${errors.confirm ? '#FF4757' : '#ddd'}`,
                    fontSize: '14px',
                    boxSizing: 'border-box',
                    fontFamily: 'inherit',
                  }}
                  disabled={loading}
                />
                {errors.confirm && (
                  <p style={{ color: '#FF4757', fontSize: '12px', marginTop: '4px', margin: '4px 0 0 0' }}>
                    {errors.confirm}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading || !password || !confirmPassword}
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: loading || !password || !confirmPassword ? '#ccc' : '#6366f1',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: loading || !password || !confirmPassword ? 'not-allowed' : 'pointer',
                }}
              >
                {loading ? 'Resetting...' : 'Reset Password'}
              </button>
            </form>
          </>
        )}

        {status === 'success' && (
          <>
            <div style={{ fontSize: '48px', marginBottom: '16px', textAlign: 'center' }}>✅</div>
            <h1 style={{ margin: '16px 0', color: '#333', textAlign: 'center' }}>Password Reset</h1>
            <p style={{ color: '#666', textAlign: 'center', marginBottom: '20px' }}>
              Your password has been reset successfully. Redirecting to login...
            </p>
          </>
        )}

        {status === 'error' && (
          <>
            <div style={{ fontSize: '48px', marginBottom: '16px', textAlign: 'center' }}>❌</div>
            <h1 style={{ margin: '16px 0', color: '#d32f2f', textAlign: 'center' }}>Reset Failed</h1>
            <p style={{ color: '#666', marginBottom: '20px', textAlign: 'center' }}>
              {message}
            </p>
            <button
              onClick={() => setStatus('form')}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#6366f1',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
              }}
            >
              Try Again
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>Loading...</div>}>
      <ResetPasswordContent />
    </Suspense>
  )
}
