export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: July 17, 2026 (Critical data protection enhancements added)</p>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
            <p>
              Duemora ("we", "us", "our") operates the Duemora mobile application and website (the "Service"). We are committed to protecting your privacy and being transparent about how we handle your data.
            </p>
            <p className="mt-2">
              This Privacy Policy explains what information we collect, how we use it, with whom we share it, and what rights you have regarding your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Information We Collect</h2>
            <p>We collect different types of information for various purposes:</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>
                <strong>Account Information:</strong> Name, email address, phone number (optional), password, and profile picture when you create an account
              </li>
              <li>
                <strong>Item Data:</strong> Tasks, due dates, reminders, categories, costs, notes, and recurring schedules you create
              </li>
              <li>
                <strong>Vault Documents:</strong> Files and images you upload to your encrypted vault (invoices, certificates, ID documents, etc.)
              </li>
              <li>
                <strong>Warranty Information:</strong> Warranty details, purchase information, expiry dates, and associated documents
              </li>
              <li>
                <strong>Household Data:</strong> Family member information, shared items, and collaboration history
              </li>
              <li>
                <strong>Device Information:</strong> Device model, OS version, app version, unique device identifier
              </li>
              <li>
                <strong>Usage Data:</strong> Features used, frequency of use, crashes, and performance metrics
              </li>
              <li>
                <strong>Authentication Data:</strong> OAuth provider information when using Google Sign-in or Apple Sign-in
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. How We Use Your Data</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Provide, maintain, and improve the Service</li>
              <li>Create and manage your account</li>
              <li>Send notifications and reminders</li>
              <li>Enable family/household sharing features</li>
              <li>Process subscriptions and payments</li>
              <li>Send important service updates or policy changes</li>
              <li>Diagnose technical issues and improve performance</li>
              <li>Protect against fraud and enforce our Terms of Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Data Security and Encryption</h2>
            <p>Your data security is a top priority:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <strong>Vault Documents:</strong> Encrypted end-to-end using AES-256 encryption. Only you can decrypt your files.
              </li>
              <li>
                <strong>Warranty Documents:</strong> Encrypted end-to-end using XSalsa20-Poly1305 encryption with IV storage
              </li>
              <li>
                <strong>Authentication:</strong> Uses industry-standard JWT tokens with Supabase auth
              </li>
              <li>
                <strong>Transport Security:</strong> All connections use HTTPS/TLS encryption
              </li>
              <li>
                <strong>Database:</strong> Data stored on Supabase (enterprise-grade PostgreSQL) with row-level security policies
              </li>
            </ul>
            <p className="mt-2">
              However, no online storage system is 100% secure. You should maintain your own backups of critical documents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Third-Party Services</h2>
            <p>Duemora uses the following third-party services:</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>
                <strong>Supabase:</strong> Database and authentication provider. See their privacy policy for details.
              </li>
              <li>
                <strong>Google OAuth / Apple Sign-in:</strong> For authentication. Duemora only receives your email address and name. Google and Apple may collect additional data per their own privacy policies, which you should review.
              </li>
              <li>
                <strong>Resend:</strong> Email service for sending reminders and notifications
              </li>
              <li>
                <strong>RevenueCat:</strong> Subscription management. Does not receive access to your personal data.
              </li>
            </ul>
            <p className="mt-2">
              Each service has its own privacy policy. Duemora is not responsible for third-party data handling. We recommend reviewing the privacy policies of Google and Apple before using their sign-in options.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Data Retention and Deletion</h2>
            <p>
              We retain your data as long as your account is active. When you delete your account:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>All personal data, items, documents, and vault files are immediately marked for deletion</li>
              <li>You have 30 days to recover your account (account can be restored within this window)</li>
              <li>After 30 days, all data is permanently deleted from the primary database</li>
              <li>Encrypted backups are retained for up to 90 days for disaster recovery purposes</li>
              <li>After 90 days, all backups are permanently destroyed</li>
              <li>We cannot guarantee immediate deletion from all systems and third-party services</li>
            </ul>
            <p className="mt-2">
              If Duemora discontinues service, we will provide 30 days notice and allow you to export your data before permanent deletion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Your Privacy Rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>Right to Access:</strong> Request a copy of your personal data</li>
              <li><strong>Right to Correct:</strong> Update inaccurate information</li>
              <li><strong>Right to Delete:</strong> Request deletion of your account and data</li>
              <li><strong>Right to Export:</strong> Download your data in CSV or JSON format within 30 days of request. Note: Encrypted vault documents can only be accessed through the app and are not included in data exports.</li>
              <li><strong>Right to Opt-Out:</strong> Disable email/push notifications</li>
            </ul>
            <p className="mt-2">
              To exercise any of these rights, contact us at privacy@duemora.app. Data export requests will be processed within 30 business days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">8. Data Breach Notification</h2>
            <p>
              In the unlikely event that we discover unauthorized access to your personal data or vault documents:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>We will investigate the breach immediately</li>
              <li>We will notify affected users within 30 days of discovery</li>
              <li>Notification will include the nature of the data accessed and steps you should take</li>
              <li>We will provide information about our response and preventive measures</li>
              <li>If required by law (GDPR, CCPA), we will also notify relevant authorities</li>
            </ul>
            <p className="mt-2">
              If you suspect unauthorized access to your account, contact us immediately at security@duemora.app
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">9. Children's Privacy</h2>
            <p>
              Duemora is not intended for children under 13 (or the legal age in your jurisdiction). We do not knowingly collect data from children. If we discover a child's data has been collected, we will delete it immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">10. Household Sharing</h2>
            <p>
              When you share items with family members:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Shared items are visible to invited household members only</li>
              <li>Each member can only see items shared with them</li>
              <li>We do not share more data than necessary for the sharing feature to work</li>
              <li>You can unshare items or remove members at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. We will notify you of material changes by:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Posting the new policy on this page with an updated date</li>
              <li>Sending you an email notification (if the change is significant)</li>
            </ul>
            <p className="mt-2">
              Your continued use of Duemora after changes indicates acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">12. User Ratings and Analytics</h2>
            <p>
              Duemora collects user ratings (1-5 stars) for engagement analytics and app improvement. When you submit a rating:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Your rating is stored with your user ID and timestamp</li>
              <li>Ratings are used only for analytics and app improvement</li>
              <li>Ratings are not used for marketing or third-party sharing</li>
              <li>Individual ratings cannot be deleted (only via full account deletion)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">13. Feedback and Support Communications</h2>
            <p>
              When you contact our support team or submit feedback:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Your communications are not confidential</li>
              <li>Support emails are logged for service improvement purposes</li>
              <li>Feedback may be used to improve the Duemora service</li>
              <li>We may quote or reference feedback publicly (without identifying you) to improve the app</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">14. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, contact us at:
            </p>
            <p className="mt-2">
              Email: privacy@duemora.app<br/>
              Website: duemora.com
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
