import Link from "next/link";

export default function RefundPolicy() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Refund Policy</h1>
      <p className="text-sm text-gray-600 mb-8">
        Bedtime Genie · Last updated: May 2026
      </p>

      <div className="prose prose-sm max-w-none">
        <div className="bg-purple-50 border-l-4 border-purple-600 p-4 mb-8">
          <p className="font-semibold text-gray-900 mb-2">Short version:</p>
          <p className="text-gray-700">
            All purchases are processed by Apple App Store or Google Play. Refunds are handled directly by those platforms — we do not process payments ourselves.
          </p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-200">
          1. How Purchases Work
        </h2>
        <p className="text-gray-700 mb-4">
          Bedtime Genie offers subscriptions (Monthly and Annual). All transactions are processed securely through:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li><strong>Apple App Store</strong> — for iOS and iPadOS users</li>
          <li><strong>Google Play Store</strong> — for Android users</li>
        </ul>
        <p className="text-gray-700 mb-6">
          We do not directly handle payment information. Billing is managed entirely by Apple or Google.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-200">
          2. How to Request a Refund
        </h2>

        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">🍎 Apple App Store</h3>
          <p className="text-gray-700">
            Visit{" "}
            <a
              href="https://reportaproblem.apple.com"
              target="_blank"
              className="text-blue-600 hover:text-blue-700"
            >
              reportaproblem.apple.com
            </a>, sign in with your Apple ID, find the Bedtime Genie purchase, and select "Request a Refund". Apple typically responds within a few days.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">🤖 Google Play Store</h3>
          <p className="text-gray-700">
            Open the Google Play Store app → tap your profile icon → Payments &amp; subscriptions → Budget &amp; history → find the purchase and tap "Refund". Alternatively visit{" "}
            <a
              href="https://play.google.com/store/account/subscriptions"
              target="_blank"
              className="text-blue-600 hover:text-blue-700"
            >
              play.google.com/store/account/subscriptions
            </a>.
          </p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-200">
          3. Subscriptions
        </h2>
        <p className="text-gray-700 mb-4">
          Subscriptions auto-renew unless cancelled at least 24 hours before the renewal date. To cancel:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li><strong>iOS:</strong> Settings → [Your Name] → Subscriptions → Bedtime Genie → Cancel</li>
          <li><strong>Android:</strong> Google Play → Subscriptions → Bedtime Genie → Cancel</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Cancelling stops future charges but does not automatically generate a refund for the current billing period. Contact Apple or Google for refund requests.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-200">
          4. Contact Us
        </h2>
        <p className="text-gray-700 mb-6">
          If you have a billing question we can help with, email us at{" "}
          <a href="mailto:bedtimegenie@gmail.com" className="text-blue-600 hover:text-blue-700">
            bedtimegenie@gmail.com
          </a>.
        </p>

        <div className="text-center text-sm text-gray-600 pt-6 border-t border-gray-200 mt-12">
          <p>&copy; 2026 Bedtime Genie</p>
          <div className="mt-4 space-x-6">
            <Link href="/bedtimegenie/privacy-policy" className="text-blue-600 hover:text-blue-700">
              Privacy Policy
            </Link>
            <span className="text-gray-400">·</span>
            <Link href="/bedtimegenie/terms" className="text-blue-600 hover:text-blue-700">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
