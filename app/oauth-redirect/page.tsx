'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function OAuthRedirectContent() {
  const searchParams = useSearchParams()
  const accessToken = searchParams.get('access_token')
  const refreshToken = searchParams.get('refresh_token')

  useEffect(() => {
    if (accessToken && refreshToken) {
      // Redirect to the app's deep link with OAuth tokens
      const deepLink = `duemora://oauth-redirect?access_token=${encodeURIComponent(accessToken)}&refresh_token=${encodeURIComponent(refreshToken)}`
      window.location.href = deepLink
    }
  }, [accessToken, refreshToken])

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      flexDirection: 'column',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1>Signing you in...</h1>
      <p>If the app doesn't open automatically, please install Duemora from the App Store.</p>
      {(!accessToken || !refreshToken) && <p style={{ color: '#ff6b6b', marginTop: '1rem' }}>Error: Missing OAuth tokens</p>}
    </div>
  )
}

export default function OAuthRedirectPage() {
  return (
    <Suspense fallback={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>Loading...</div>}>
      <OAuthRedirectContent />
    </Suspense>
  )
}
