export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-gray-500 mb-8">Last updated: July 17, 2026 (Critical liability protections added)</p>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Duemora application (mobile app and website), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree with any part of these terms, you may not use Duemora.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Service Description</h2>
            <p>
              Duemora is a digital life organizer designed to help users track tasks, reminders, bills, subscriptions, warranties, and important documents. The Service includes:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Task and reminder management</li>
              <li>Encrypted document vault storage</li>
              <li>Warranty tracking and management</li>
              <li>Family/household item sharing (PRO feature)</li>
              <li>Email and push notifications</li>
              <li>Calendar export and reporting</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. Use License</h2>
            <p>
              Permission is granted to use Duemora for personal, non-commercial purposes only. You may not:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Modify, copy, or distribute the Duemora software or materials</li>
              <li>Use the Service for commercial purposes or public display</li>
              <li>Attempt to reverse engineer, decompile, or decrypt any component</li>
              <li>Scrape, automate, or extract data without authorization</li>
              <li>Resell or redistribute the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Item Tracking Disclaimer</h2>
            <p>
              Duemora provides tools to track items, tasks, and due dates. However:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Duemora is not responsible for missed reminders or notifications</li>
              <li>Users retain full responsibility for tracking their own important dates and documents</li>
              <li>Duemora does not replace professional advice for legal, financial, or medical matters</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4A. Warranty Information Disclaimer</h2>
            <p>
              Duemora provides a tool to track and store warranty information. Important:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>All warranty information is entered and maintained by you, the user</li>
              <li>Duemora does not verify the accuracy or completeness of warranty information</li>
              <li>You are responsible for verifying warranty details with product manufacturers</li>
              <li>Duemora is not liable for warranty claim rejections, missed warranties, or coverage disputes</li>
              <li>Warranty claims and disputes must be resolved directly with manufacturers or retailers</li>
              <li>Duemora is not responsible for warranty expiration due to missed reminders</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. User Account</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials. You agree to:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Provide accurate, current information during registration</li>
              <li>Immediately notify us of unauthorized access to your account</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Use strong passwords and enable security features</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Limitation of Liability</h2>
            <p>
              In no event shall Duemora or its suppliers be liable for:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Loss of data, documents, or personal information</li>
              <li>Business interruption or lost revenue</li>
              <li>Missed deadlines or reminders</li>
              <li>Indirect, incidental, or consequential damages</li>
            </ul>
            <p className="mt-2">
              Duemora's total liability shall not exceed the amount you paid for the Service in the past 12 months. For free tier users who have paid nothing, Duemora liability is limited to zero dollars.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Data Storage and Encryption</h2>
            <p>
              Duemora uses Supabase (enterprise-grade PostgreSQL) for data storage. Vault documents are encrypted end-to-end using AES-256 and XSalsa20-Poly1305 encryption. Despite security measures:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>No system is 100% secure</li>
              <li>Users should maintain their own backups of critical documents</li>
              <li>Duemora is not responsible for data loss due to user error or device failure</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">8. Third-Party Services</h2>
            <p>
              Duemora integrates with third-party services including Supabase, Google OAuth, Apple Sign-in, RevenueCat (subscriptions), and Resend (email). Your use of these services is subject to their own terms and privacy policies, which we do not control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">9. Notifications</h2>
            <p>
              Duemora sends email reminders (typically at 9 AM AEST) and push notifications for upcoming items and reminders. You can:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Disable email notifications in Settings > Notifications</li>
              <li>Disable push notifications in Settings > Notifications</li>
              <li>Customize quiet hours to mute notifications during specific times</li>
              <li>Manage notification preferences per notification type</li>
            </ul>
            <p className="mt-2">
              Important: Email delivery is not guaranteed. Emails may be delayed, blocked by spam filters, or lost due to ISP issues and third-party email service failures. You should not rely solely on Duemora notifications for critical deadlines or time-sensitive matters. You are responsible for independently verifying important dates and deadlines.
            </p>
            <p className="mt-2">
              By using Duemora, you consent to receive notifications unless you disable them in settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">10. Subscriptions and Billing</h2>
            <p>
              PRO subscriptions auto-renew monthly or annually based on your selected plan. You agree to:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Keep your payment information current</li>
              <li>Accept responsibility for all charges</li>
              <li>Cancel subscriptions before renewal to avoid charges</li>
            </ul>
            <p className="mt-2">
              See our Refund Policy for details on refund eligibility.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">11. Modifications to Service</h2>
            <p>
              Duemora may modify, suspend, or discontinue the Service at any time. We will provide notice of material changes when possible. Continued use after modifications constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">12. Termination</h2>
            <p>
              We may terminate or suspend your account for violations of these Terms or for any illegal activity. Before permanent termination:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>We will attempt to notify you of the reason for termination</li>
              <li>You have 30 days to appeal the termination decision by contacting support@duemora.app</li>
              <li>During the appeal period, you retain access to download your data</li>
              <li>We will review your appeal and respond within 7 business days</li>
            </ul>
            <p className="mt-2">
              If your appeal is denied or the 30-day period expires, your account will be permanently deleted and all data will be destroyed. You may also delete your account anytime through the app settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">13. Force Majeure</h2>
            <p>
              Duemora shall not be held liable for failure to perform its obligations under these Terms due to causes beyond its reasonable control, including but not limited to:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Natural disasters (earthquakes, floods, storms, pandemics)</li>
              <li>War, terrorism, civil unrest, or government actions</li>
              <li>Strikes, labor disputes, or supply chain disruptions</li>
              <li>Third-party service failures (Supabase outages, AWS failures, ISP outages, email service failures)</li>
              <li>Cyber attacks, hacking, or security breaches beyond industry-standard protection</li>
              <li>Internet infrastructure failures or widespread network outages</li>
            </ul>
            <p className="mt-2">
              During force majeure events, Duemora will use reasonable efforts to resume service but is not liable for service interruptions, data loss, or failures to deliver notifications or perform other obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">19. Governing Law</h2>
            <p>
              These terms are governed by the laws of Australia. Any disputes shall be subject to the exclusive jurisdiction of Australian courts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">14. Service Warranty Disclaimer</h2>
            <p>
              DUEMORA IS PROVIDED ON AN "AS-IS" AND "AS-AVAILABLE" BASIS WITHOUT ANY WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. TO THE MAXIMUM EXTENT PERMITTED BY LAW, DUEMORA DISCLAIMS ALL WARRANTIES, INCLUDING:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Implied warranty of merchantability</li>
              <li>Implied warranty of fitness for a particular purpose</li>
              <li>Warranty of non-infringement</li>
              <li>Warranty that the Service will be uninterrupted, error-free, or secure</li>
              <li>Warranty that any errors or defects will be corrected</li>
            </ul>
            <p className="mt-2">
              Duemora makes no warranty that the Service will meet your requirements, or that the Service will be available at all times.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">15. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Duemora and its directors, officers, employees, agents, and successors from any and all claims, losses, liabilities, damages, and expenses (including legal fees) arising from or related to:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Your use of Duemora or violation of these Terms</li>
              <li>Your violation of any applicable law or regulation</li>
              <li>Your violation of any third-party rights, including intellectual property, privacy, or publicity rights</li>
              <li>Any content you upload, store, or share through Duemora, including copyrighted or illegal materials</li>
              <li>Your actions or omissions using the Service</li>
              <li>Disputes between you and other household members regarding shared data or access</li>
            </ul>
            <p className="mt-2">
              This indemnification applies even if Duemora has been advised of the possibility of such liability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">16. Household Sharing Liability</h2>
            <p>
              When you share items or data with household members through Duemora:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Household members you invite receive full access to shared items, including the ability to modify, delete, or export them</li>
              <li>You are responsible for managing who you invite and what access levels they have</li>
              <li>Duemora is not responsible for actions taken by household members, including accidental or intentional deletion, modification, or misuse of shared data</li>
              <li>Any disputes regarding shared data, permissions, or access between you and household members are your responsibility to resolve</li>
              <li>Duemora provides no guarantees about the integrity or availability of shared data once another person has access to it</li>
            </ul>
            <p className="mt-2">
              By inviting household members, you acknowledge these risks and absolve Duemora of liability for their actions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">17. Severability</h2>
            <p>
              If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court or arbitrator, that provision shall be severed or modified to the minimum extent necessary to make it valid and enforceable. All other provisions shall remain in full force and effect.
            </p>
            <p className="mt-2">
              If a provision cannot be modified to be valid, it shall be struck entirely, and these Terms shall be enforced as if that provision had never existed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">18. Contact</h2>
            <p>
              For questions about these Terms of Service, contact us at support@duemora.app
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
