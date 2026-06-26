import Link from "next/link";

export default function BedtimeGenieHome() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Bedtime Genie</h1>
        <p className="text-xl text-gray-600">
          AI-powered bedtime stories for every child
        </p>
      </div>

      <div className="grid gap-6">
        <Link
          href="/bedtimegenie/privacy-policy"
          className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition border border-gray-200"
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Privacy Policy
          </h2>
          <p className="text-gray-600">
            Learn how we collect and protect your personal information.
          </p>
        </Link>

        <Link
          href="/bedtimegenie/terms"
          className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition border border-gray-200"
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Terms of Service
          </h2>
          <p className="text-gray-600">
            Our terms of use, plans, and service conditions.
          </p>
        </Link>

        <Link
          href="/bedtimegenie/cookie-policy"
          className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition border border-gray-200"
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Cookie Policy
          </h2>
          <p className="text-gray-600">
            Information about how we use cookies and device identifiers.
          </p>
        </Link>

        <Link
          href="/bedtimegenie/refund-policy"
          className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition border border-gray-200"
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Refund Policy
          </h2>
          <p className="text-gray-600">
            How to request refunds for purchases through app stores.
          </p>
        </Link>
      </div>

      <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm text-gray-700">
          Questions? Contact us at{" "}
          <a
            href="mailto:bedtimegenie@gmail.com"
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            bedtimegenie@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
