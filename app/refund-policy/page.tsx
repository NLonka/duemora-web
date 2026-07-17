export default function RefundPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Refund Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: July 17, 2026 (Warranty and service failure clarifications added)</p>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Overview</h2>
            <p>
              Duemora offers a 30-day money-back guarantee for PRO subscriptions. If you're not satisfied with your subscription, we'll provide a full refund within 30 days of your purchase.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. PRO Subscription Refunds</h2>
            <p>
              <strong>Eligible for Refund:</strong>
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Monthly PRO subscriptions purchased within the last 30 days</li>
              <li>Annual PRO subscriptions purchased within the last 30 days</li>
              <li>Subscriptions that have not been previously refunded</li>
            </ul>
            <p className="mt-3">
              <strong>Not Eligible for Refund:</strong>
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Free trial periods (you're not charged)</li>
              <li>Subscriptions after 30 days from purchase</li>
              <li>Multiple refunds for the same subscription</li>
              <li>Refunds for individual features or functionality issues (we fix those instead)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. How to Request a Refund</h2>
            <p>
              To request a refund, follow these steps:
            </p>
            <ol className="list-decimal list-inside mt-2 space-y-2">
              <li>
                <strong>In-App Refund Request:</strong> Go to Profile tab → Settings → Subscription, tap "Request Refund", and follow the prompts.
              </li>
              <li>
                <strong>Email Support:</strong> Contact support@duemora.app with your email address and reason for the refund request.
              </li>
              <li>
                <strong>App Store/Play Store:</strong> Request a refund directly through Apple App Store (Settings → Media & Purchases → Account → Refund Requests) or Google Play Store (Settings → Subscriptions → Select subscription → Manage → Report a problem).
              </li>
            </ol>
            <p className="mt-3">
              We will review your request and process refunds within 5-10 business days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Refund Processing</h2>
            <p>
              Once your refund is approved:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Refunds will be issued to your original payment method</li>
              <li>Processing time is typically 5-10 business days</li>
              <li>Bank transfers may take 1-3 business days to appear in your account</li>
              <li>Your PRO access will be immediately terminated</li>
              <li>You'll receive a confirmation email</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Chargeback Policy</h2>
            <p>
              If you request a chargeback or dispute with your bank/payment provider instead of requesting a refund from Duemora:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Your account will be flagged as disputed</li>
              <li>You will not be eligible for future Duemora subscriptions</li>
              <li>We may take legal action to recover chargeback fees</li>
            </ul>
            <p className="mt-2">
              Please always request a refund through Duemora first rather than disputing with your payment provider.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Non-Refundable Items</h2>
            <p>
              The following are NOT refundable:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Free trial periods (no charge)</li>
              <li>One-time purchases or app upgrades (if implemented)</li>
              <li>Subscriptions purchased more than 30 days ago</li>
              <li>Subscriptions with multiple prior refunds</li>
              <li>Subscriptions cancelled due to ToS violations</li>
              <li>Missed warranty claims or warranty-related losses (Duemora does not verify, monitor, or guarantee warranty information. User is solely responsible for warranty claim submission and deadlines.)</li>
              <li>Data loss due to user error, device failure, or Duemora service failures (see Terms of Service Section 6 for limitation of liability)</li>
              <li>Missed reminders, delayed notifications, or email delivery failures (Email delivery is not guaranteed and depends on third-party services beyond Duemora control)</li>
              <li>Service interruptions, outages, or unavailability (unless caused by Duemora negligence)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Subscription Auto-Renewal</h2>
            <p>
              PRO subscriptions auto-renew at the end of each billing period (monthly or annually) based on your plan. To prevent unwanted charges:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Cancel your subscription before the renewal date</li>
              <li>You'll still have access until the end of your current billing period</li>
              <li>Cancel through the app (Profile → Settings → Subscription) or through your payment provider</li>
              <li>Cancellation happens immediately (no refund for already-paid period)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">8. Platform-Specific Refunds</h2>
            <p>
              <strong>iOS (App Store):</strong>
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Apple handles all subscription refunds through the App Store</li>
              <li>You can request a refund through your Apple Account → Media & Purchases → Refund Requests</li>
              <li>Apple may approve or deny refund requests</li>
              <li>Duemora automatically processes refunds when Apple notifies us</li>
            </ul>
            <p className="mt-3">
              <strong>Android (Google Play):</strong>
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Google Play handles subscription refunds</li>
              <li>Request a refund through Google Play → Settings → Subscriptions</li>
              <li>Google has a standard 48-hour refund window</li>
              <li>Duemora automatically processes refunds when Google notifies us</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">9. Special Circumstances</h2>
            <p>
              <strong>Billing Errors:</strong> If you were charged incorrectly, contact support@duemora.app immediately with proof, and we'll refund the difference.
            </p>
            <p className="mt-2">
              <strong>Duplicate Charges:</strong> If you were charged twice, contact us immediately. We'll investigate and issue a refund for the duplicate charge.
            </p>
            <p className="mt-2">
              <strong>Unauthorized Charges:</strong> If your account was compromised, report it immediately. We'll cancel the subscription and may issue a refund depending on the circumstances.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">10. Changes to This Policy</h2>
            <p>
              Duemora may update this Refund Policy periodically. Changes will be posted on this page with an updated date. Your continued subscription after changes indicates acceptance of the new policy.
            </p>
            <p className="mt-2">
              If a change is material, we'll notify you before it takes effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">11. Contact & Support</h2>
            <p>
              If you have questions about refunds or need assistance:
            </p>
            <p className="mt-2">
              Email: support@duemora.app<br/>
              Website: duemora.com<br/>
              Available: Monday-Friday, 9 AM - 5 PM AEST
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">12. Dispute Resolution</h2>
            <p>
              If you have a dispute regarding a refund decision, you can:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Email support@duemora.app with details of your dispute</li>
              <li>We will review your case and respond within 7 business days</li>
              <li>We maintain records of all refund requests and decisions</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}
