export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-purple-600">Duemora</div>
          <a
            href="https://testflight.apple.com/join/YOUR_TESTFLIGHT_CODE"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition"
          >
            Download App
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Manage Your Family's Life in One Place
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Duemora helps families organize tasks, share documents, and stay connected.
            Keep bills, insurance, warranties, and household documents secure and accessible.
          </p>
          <a
            href="https://testflight.apple.com/join/YOUR_TESTFLIGHT_CODE"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition"
          >
            Get Started Free
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Task Management</h3>
              <p className="text-gray-600">Create and track household tasks, set reminders, and never miss important deadlines.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Vault</h3>
              <p className="text-gray-600">Store sensitive documents with AES-256 encryption for maximum security.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Family Sharing</h3>
              <p className="text-gray-600">Invite family members and collaborate on shared household items.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-purple-600 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <a
            href="https://testflight.apple.com/join/YOUR_TESTFLIGHT_CODE"
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-bold transition hover:bg-gray-100"
          >
            Download Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2026 Duemora. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
