export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
            <p>
              Duemora ("we" or "us" or "our") operates the Duemora mobile application (the "Service").
            </p>
            <p className="mt-2">
              This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Information Collection and Use</h2>
            <p>We collect several different types of information for various purposes to provide and improve our Service to you:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>Personal Data:</strong> When you register for an account, we collect your name, email address, and phone number (optional)</li>
              <li><strong>Usage Data:</strong> We automatically collect information about how you interact with our Service</li>
              <li><strong>Device Information:</strong> We may collect information about your device, including hardware model and operating system</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Security of Data</h2>
            <p>
              The security of your data is important to us, but remember that no method of transmission over the Internet is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at privacy@duemora.app
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
