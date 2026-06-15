'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

export default function InvitePage() {
  const params = useParams()
  const inviteId = params.id as string
  const [status, setStatus] = useState<'loading' | 'opened' | 'download' | 'error'>('loading')

  useEffect(() => {
    if (!inviteId) {
      setStatus('error')
      return
    }

    // Try to open the deep link
    const deepLinkUrl = `duemora://invite/${inviteId}`

    // Create a hidden iframe to trigger the deep link
    const iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.src = deepLinkUrl
    document.body.appendChild(iframe)

    // If app is installed, it will open automatically
    // If not, we'll show download after timeout
    const timeout = setTimeout(() => {
      setStatus('download')
    }, 2500) // Wait 2.5 seconds for app to open

    return () => {
      clearTimeout(timeout)
      document.body.removeChild(iframe)
    }
  }, [inviteId])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
        {status === 'loading' && (
          <>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Opening Duemora...</h1>
            <p className="text-gray-600">If the app doesn't open, click the button below to download it.</p>
          </>
        )}

        {status === 'download' && (
          <>
            <div className="mb-4">
              <svg className="w-16 h-16 mx-auto text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Download Duemora</h1>
            <p className="text-gray-600 mb-6">
              Get the app to accept this household invitation and start managing your family's tasks and documents.
            </p>
            <a
              href="https://testflight.apple.com/join/YOUR_TESTFLIGHT_CODE"
              className="inline-block w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg mb-3 transition"
            >
              Download from TestFlight
            </a>
            <p className="text-sm text-gray-500">
              After installing, open the app and your invitation will be automatically accepted.
            </p>
          </>
        )}

        {status === 'error' && (
          <>
            <div className="mb-4">
              <svg className="w-16 h-16 mx-auto text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Invalid Invite Link</h1>
            <p className="text-gray-600 mb-6">This invitation link is invalid or has expired.</p>
            <a
              href="https://testflight.apple.com/join/YOUR_TESTFLIGHT_CODE"
              className="inline-block w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition"
            >
              Download Duemora
            </a>
          </>
        )}
      </div>
    </div>
  )
}
