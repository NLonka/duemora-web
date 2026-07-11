import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get('token')

  if (!token) {
    return new Response(
      `<!DOCTYPE html>
<html>
  <head><title>Error</title></head>
  <body>
    <h1>Error: No reset token found</h1>
    <p>Please request a new password reset email.</p>
  </body>
</html>`,
      { status: 400, headers: { 'content-type': 'text/html' } }
    )
  }

  // Redirect to the app's deep link
  const deepLink = `duemora://reset-password?token=${encodeURIComponent(token)}`

  return new Response(
    `<!DOCTYPE html>
<html>
  <head>
    <title>Redirecting...</title>
    <script>
      window.location.href = '${deepLink}';
      // Fallback: show redirect message
      setTimeout(() => {
        document.body.innerHTML = '<h1>Redirecting to Duemora...</h1><p>If the app doesn\\'t open, please install Duemora from the App Store.</p>';
      }, 100);
    </script>
  </head>
  <body>
    <h1>Redirecting to Duemora...</h1>
    <p>If the app doesn't open automatically, please install Duemora from the App Store.</p>
  </body>
</html>`,
    { status: 200, headers: { 'content-type': 'text/html' } }
  )
}
