'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export default function ResetPasswordPage() {
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  useEffect(() => {
    if (token) {
      // Redirect to the app's deep link with the token
      const deepLink = `duemora://reset-password?token=${encodeURIComponent(token)}`
      window.location.href = deepLink
    }
  }, [token])

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      flexDirection: 'column',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1>Redirecting to Duemora...</h1>
      <p>If the app doesn't open automatically, please install Duemora from the App Store.</p>
      {!token && <p style={{ color: '#ff6b6b', marginTop: '1rem' }}>Error: No reset token found</p>}
    </div>
  )
}
