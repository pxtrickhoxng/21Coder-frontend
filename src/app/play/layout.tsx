import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function PlayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black">
      {/* Navigation */}
      <nav className="relative flex justify-between items-center p-6 max-w-7xl mx-auto border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-mono text-2xl px-4 py-2 rounded-lg shadow-lg">
              21
            </div>
            <span className="text-2xl font-semibold text-white">Coder</span>
          </Link>
          <div className="text-gray-400 text-sm font-mono ml-2">{`// Play Mode`}</div>
        </div>

        {/* Right side - User profile */}
        <div className="flex items-center space-x-8">
          <Link href="/daily" className="hover:text-blue-400 transition-colors">
            Daily
          </Link>

          <UserButton
            appearance={{
              elements: {
                avatarBox: "w-8 h-8 rounded-full",
                card: "bg-gray-900 border border-gray-700",
                headerTitle: "text-gray-200",
                headerSubtitle: "text-gray-400",
                profileSection: "bg-gray-900",
                profileSectionTitle: "text-gray-400",
                userPreviewMainIdentifier: "text-gray-200",
                userPreviewSecondaryIdentifier: "text-gray-400",
                userButtonPopoverActionButton:
                  "hover:bg-gray-800 text-gray-200",
                userButtonPopoverActionButtonIcon: "text-gray-400",
                userButtonPopoverFooter: "bg-gray-900 border-t border-gray-700",
              },
            }}
          />
        </div>
      </nav>

      {/* Main content */}
      <main>{children}</main>
    </div>
  );
}
