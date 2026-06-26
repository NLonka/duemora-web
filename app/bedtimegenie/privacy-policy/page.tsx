import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-600 mb-8">
        Bedtime Genie · Last updated: May 2026 · Effective: May 2026
      </p>

      <div className="prose prose-sm max-w-none">
        <p className="mb-6 text-gray-700">
          Bedtime Genie ("we", "our", or "us") is committed to protecting the privacy of you and your
          children. This Privacy Policy explains what information we collect, how we use it, and your
          rights under the Australian Privacy Act 1988.
        </p>

        <div className="bg-purple-50 border-l-4 border-purple-600 p-4 mb-8">
          <p className="font-semibold text-gray-900 mb-2">Short version:</p>
          <p className="text-gray-700">
            We only collect what is needed to generate and save personalised bedtime stories. We never sell your data. Child profile information is minimal by design — a nickname and age group only.
          </p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-200">
          1. Who We Are
        </h2>
        <p className="text-gray-700 mb-6">
          Bedtime Genie is an independent mobile application developed and operated by an individual
          developer based in Australia. If you have any questions about this policy, please contact us at{" "}
          <a href="mailto:bedtimegenie@gmail.com" className="text-blue-600 hover:text-blue-700">
            bedtimegenie@gmail.com
          </a>.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-200">
          2. Information We Collect
        </h2>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">Account information (when you sign in)</h3>
        <p className="text-gray-700 mb-6">
          When you sign in with Google or Apple, we receive your name and email address from that
          provider. This is used solely to identify your account and sync your story library across devices.
          We do not receive your password.
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">Child profile information</h3>
        <p className="text-gray-700 mb-4">When you create a child profile inside the app, you provide:</p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>A first name or nickname (e.g. "Aria")</li>
          <li>An age group (e.g. "Sprout – 3–4 years")</li>
          <li>An emoji avatar (chosen from a preset list)</li>
        </ul>
        <p className="text-gray-700 mb-6">
          We do not collect a child's full name, date of birth, photo, or any other personally identifying information.
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">Story content</h3>
        <p className="text-gray-700 mb-6">
          When you generate a story, we collect the inputs you provide — character name, setting, tone,
          and length — and the resulting story text, title, and illustration. This content is stored in
          your private account and used to build your story library.
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">Subscription and payment information</h3>
        <p className="text-gray-700 mb-6">
          Purchases are processed by Apple App Store or Google Play. We never see or store your payment
          card details. We use RevenueCat (a third-party service) to manage subscription status.
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">Usage data</h3>
        <p className="text-gray-700 mb-6">
          We do not currently use analytics or advertising SDKs. Basic error logging may occur through
          Firebase to help us diagnose technical issues.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-200">
          3. How We Use Your Information
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm text-gray-700 border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-3 font-semibold border-b">Purpose</th>
                <th className="text-left p-3 font-semibold border-b">Information used</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3">Authenticate your account</td>
                <td className="p-3">Name, email (from Google/Apple Sign-In)</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Generate personalised stories</td>
                <td className="p-3">Child nickname, age group, story inputs (character, setting, tone)</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Save and sync your story library</td>
                <td className="p-3">Story content, illustrations, narration audio</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Manage your subscription</td>
                <td className="p-3">Subscription status via RevenueCat</td>
              </tr>
              <tr>
                <td className="p-3">Improve the app</td>
                <td className="p-3">Anonymous error logs only</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mb-6">
          We do not use your information for advertising, profiling, or any purpose not listed above.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-200">
          4. Third-Party Services
        </h2>
        <p className="text-gray-700 mb-4">We use the following third-party services to operate the app:</p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm text-gray-700 border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-3 font-semibold border-b">Service</th>
                <th className="text-left p-3 font-semibold border-b">Provider</th>
                <th className="text-left p-3 font-semibold border-b">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3">Firebase Authentication</td>
                <td className="p-3">Google LLC</td>
                <td className="p-3">Sign-in and account management</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Cloud Firestore</td>
                <td className="p-3">Google LLC</td>
                <td className="p-3">Storing your story library</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Firebase Storage</td>
                <td className="p-3">Google LLC</td>
                <td className="p-3">Hosting generated illustrations and narration audio</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Groq API</td>
                <td className="p-3">Groq, Inc.</td>
                <td className="p-3">AI story text generation</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">OpenAI Moderation API</td>
                <td className="p-3">OpenAI, LLC</td>
                <td className="p-3">Content safety moderation (story inputs are checked before generation)</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Together AI</td>
                <td className="p-3">Together Computer, Inc.</td>
                <td className="p-3">AI illustration generation</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Gemini API</td>
                <td className="p-3">Google LLC</td>
                <td className="p-3">Narration audio generation</td>
              </tr>
              <tr>
                <td className="p-3">RevenueCat</td>
                <td className="p-3">RevenueCat, Inc.</td>
                <td className="p-3">Subscription and purchase management</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mb-6">
          Each provider has their own privacy policy. When we send story content to Groq, OpenAI, or
          Google for generation, it is processed to produce the requested output and is subject to those
          providers' data processing terms.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-200">
          5. Children's Privacy
        </h2>
        <p className="text-gray-700 mb-4">
          Bedtime Genie is designed to be used by <strong>parents and guardians</strong> on behalf
          of their children. The app is not directed at children and does not knowingly solicit
          information directly from children.
        </p>
        <p className="text-gray-700 mb-4">
          Child profiles contain only a nickname and age group. We strongly encourage parents not to use
          a child's full legal name. You can delete any child profile and all associated stories at any
          time from within the app.
        </p>
        <p className="text-gray-700 mb-6">
          If you believe we have inadvertently collected personal information from a child without
          parental consent, please contact us at{" "}
          <a href="mailto:bedtimegenie@gmail.com" className="text-blue-600 hover:text-blue-700">
            bedtimegenie@gmail.com
          </a>{" "}
          and we will delete it promptly.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-200">
          6. Data Storage and Security
        </h2>
        <p className="text-gray-700 mb-4">
          Your data is stored on Google Firebase servers. Firebase uses industry-standard encryption in
          transit (TLS) and at rest. Access is restricted by security rules so that only your account can
          read or write your data.
        </p>
        <p className="text-gray-700 mb-6">
          Stories downloaded for offline use are stored locally on your device and are not accessible to
          other apps.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-200">
          7. Data Retention
        </h2>
        <p className="text-gray-700 mb-4">
          Your stories remain in your account until you delete them. If you delete a child profile, all
          stories associated with that profile are removed from our servers.
        </p>
        <p className="text-gray-700 mb-6">
          If you wish to delete your entire account and all associated data, please contact us at{" "}
          <a href="mailto:bedtimegenie@gmail.com" className="text-blue-600 hover:text-blue-700">
            bedtimegenie@gmail.com
          </a>{" "}
          with the subject line "Delete My Account" and we will process the request within 30 days.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-200">
          8. Your Privacy Rights
        </h2>
        <p className="text-gray-700 mb-4">Under the Australian Privacy Act 1988 you have the right to:</p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li><strong>Access</strong> — request a copy of the personal information we hold about you</li>
          <li><strong>Correction</strong> — ask us to correct inaccurate or incomplete information</li>
          <li><strong>Deletion</strong> — request that we delete your personal information</li>
          <li>
            <strong>Complaint</strong> — lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at{" "}
            <a href="https://www.oaic.gov.au" target="_blank" className="text-blue-600 hover:text-blue-700">
              oaic.gov.au
            </a>
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          To exercise any of these rights, contact us at{" "}
          <a href="mailto:bedtimegenie@gmail.com" className="text-blue-600 hover:text-blue-700">
            bedtimegenie@gmail.com
          </a>.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-200">
          9. Changes to This Policy
        </h2>
        <p className="text-gray-700 mb-6">
          We may update this Privacy Policy from time to time. When we do, we will update the
          "Last updated" date at the top of this page. We encourage you to review this policy
          periodically. Continued use of the app after changes constitutes acceptance of the updated policy.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-200">
          10. Contact Us
        </h2>
        <p className="text-gray-700 mb-4">
          If you have any questions or concerns about this Privacy Policy, please contact:
        </p>
        <p className="text-gray-700 mb-8">
          <strong>Bedtime Genie</strong>
          <br />
          Email:{" "}
          <a href="mailto:bedtimegenie@gmail.com" className="text-blue-600 hover:text-blue-700">
            bedtimegenie@gmail.com
          </a>
          <br />
          Location: Australia
        </p>

        <div className="text-center text-sm text-gray-600 pt-6 border-t border-gray-200 mt-12">
          <p>&copy; 2026 Bedtime Genie</p>
          <div className="mt-4 space-x-6">
            <Link href="/bedtimegenie/terms" className="text-blue-600 hover:text-blue-700">
              Terms of Service
            </Link>
            <span className="text-gray-400">·</span>
            <a href="mailto:bedtimegenie@gmail.com" className="text-blue-600 hover:text-blue-700">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
