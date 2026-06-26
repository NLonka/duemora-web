import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bedtime Genie - Legal & Policies",
  description: "Privacy Policy, Terms of Service, and other legal documents for Bedtime Genie",
};

export default function BedtimeGenieLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
            ← Back to Duemora
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-2xl mx-auto px-4 py-8 text-center text-sm text-gray-600">
          <p>&copy; 2026 Bedtime Genie</p>
        </div>
      </footer>
    </div>
  );
}
