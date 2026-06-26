import Link from "next/link";

export default function CookiePolicy() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Cookie Policy</h1>
      <p className="text-sm text-gray-600 mb-8">
        Bedtime Genie · Last updated: May 2026
      </p>

      <div className="prose prose-sm max-w-none">
        <div className="bg-purple-50 border-l-4 border-purple-600 p-4 mb-8">
          <p className="font-semibold text-gray-900 mb-2">Short version:</p>
          <p className="text-gray-700">
            Bedtime Genie is a mobile app. It does not use browser cookies. We use only the essential device identifiers required by Firebase for authentication and data sync.
          </p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-200">
          1. What Are Cookies?
        </h2>
        <p className="text-gray-700 mb-6">
          Cookies are small text files stored by websites in your browser. As a mobile app, Bedtime Genie does not use browser cookies.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-200">
          2. What We Use Instead
        </h2>
        <p className="text-gray-700 mb-4">
          To operate the app, we use the following technologies that serve a similar purpose to cookies:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Firebase Authentication tokens</strong> — stored securely on your device via AsyncStorage to keep you signed in between sessions.
          </li>
          <li>
            <strong>Firebase device identifiers</strong> — used by Google Firebase to manage your session and sync your story library across devices.
          </li>
          <li>
            <strong>RevenueCat device identifiers</strong> — used to associate your subscription status with your account.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          These are strictly necessary for the app to function. They are not used for advertising or cross-app tracking.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-200">
          3. Third-Party SDKs
        </h2>
        <p className="text-gray-700 mb-4">
          The following third-party services are embedded in the app and may collect device-level data as described in their own privacy policies:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>
            Google Firebase —{" "}
            <a
              href="https://firebase.google.com/support/privacy"
              target="_blank"
              className="text-blue-600 hover:text-blue-700"
            >
              firebase.google.com/support/privacy
            </a>
          </li>
          <li>
            RevenueCat —{" "}
            <a
              href="https://www.revenuecat.com/privacy"
              target="_blank"
              className="text-blue-600 hover:text-blue-700"
            >
              revenuecat.com/privacy
            </a>
          </li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-200">
          4. Your Choices
        </h2>
        <p className="text-gray-700 mb-6">
          You can clear locally stored app data by uninstalling Bedtime Genie from your device. To request deletion of your account data from our servers, email{" "}
          <a href="mailto:bedtimegenie@gmail.com" className="text-blue-600 hover:text-blue-700">
            bedtimegenie@gmail.com
          </a>.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-200">
          5. Contact
        </h2>
        <p className="text-gray-700 mb-6">
          Questions? Email us at{" "}
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
