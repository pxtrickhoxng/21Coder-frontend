import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white">
      {/* Subtle card pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 text-4xl text-gray-500">♠</div>
        <div className="absolute top-40 right-32 text-3xl text-gray-500">♣</div>
        <div className="absolute bottom-32 left-32 text-3xl text-gray-500">
          ♦
        </div>
        <div className="absolute bottom-20 right-20 text-4xl text-gray-500">
          ♥
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative flex justify-between items-center p-6 max-w-7xl mx-auto border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-mono text-2xl px-4 py-2 rounded-lg shadow-lg">
            21
          </div>
          <span className="text-2xl font-semibold">Coder</span>
          <div className="text-gray-400 text-sm font-mono ml-2">{`// Hit or Stay`}</div>
        </div>
        <div className="space-x-8 flex items-center">
          <Link href="/daily" className="hover:text-blue-400 transition-colors">
            Daily
          </Link>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  rootBox: "shadow-xl",
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
                  userButtonPopoverFooter:
                    "bg-gray-900 border-t border-gray-700",
                },
              }}
            />
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-2 rounded-lg font-medium transition-all">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
            Hit or Stay?
          </h1>
          <div className="flex justify-center items-center space-x-4 mb-6">
            <div className="bg-gray-800 border border-gray-600 px-4 py-2 rounded-lg">
              <div className="font-mono text-sm text-gray-300">
                Points: <span className="text-blue-400 font-bold">0/21</span>
              </div>
            </div>
            <div className="text-gray-500 text-2xl">♠</div>
            <div className="bg-gray-800 border border-gray-600 px-4 py-2 rounded-lg">
              <div className="font-mono text-sm text-gray-300">
                Status: <span className="text-green-400 font-bold">Ready</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto leading-relaxed">
          LeetCode with a{" "}
          <span className="text-blue-400 font-semibold">blackjack twist</span>.
          <br />
          Pick your level, risk your points. The closer to zero, the stronger
          your hand
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link
            className="
  bg-gradient-to-r from-blue-600 to-purple-600
  hover:from-blue-700 hover:to-purple-700
  px-8 py-4 rounded-lg font-semibold text-lg
  transform scale-100 hover:scale-105
  transition-transform duration-200 ease-in-out
  shadow-lg
"
            href="/play"
          >
            Play Now
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-center hover:border-green-500 transition-all">
            <div className="text-sm text-gray-400">Small Hint</div>
            <div className="text-lg font-bold text-green-400">1-3</div>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-center hover:border-yellow-500 transition-all">
            <div className="text-sm text-gray-400">Medium Hint</div>
            <div className="text-lg font-bold text-yellow-400">4-7</div>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-center hover:border-red-500 transition-all">
            <div className="text-sm text-gray-400">Big Hint</div>
            <div className="text-lg font-bold text-red-400">8-11</div>
          </div>
        </div>
      </section>

      {/* Strategic Hint System */}
      <section className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Hint System</h2>
            <p className="text-xl text-gray-300">
              Blackjack-style hints that make learning fun.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Small Hint */}
            <div className="bg-gray-800 border border-gray-600 rounded-xl p-6 hover:border-green-500 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div className="text-green-400 text-2xl">♠</div>
                <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono">
                  1-3 PTS
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Small Hint</h3>
              <p className="text-gray-400 text-sm mb-4">
                Gentle guidance without spoiling the approach. Like drawing an
                Ace - low risk, strategic value.
              </p>
              <div className="bg-gray-900 border border-gray-600 rounded p-3 font-mono text-sm text-gray-300">
                <div className="text-green-400">{`// Example:`}</div>
                <div>{`"Palindromes are symmetric. Think about how you could use that property to explore a string."`}</div>
              </div>
            </div>

            {/* Medium Hint */}
            <div className="bg-gray-800 border border-gray-600 rounded-xl p-6 hover:border-yellow-500 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div className="text-yellow-400 text-2xl">♦</div>
                <div className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-mono">
                  4-7 PTS
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Medium Hint</h3>
              <p className="text-gray-400 text-sm mb-4">
                Key insight about the optimal approach. Like a face card -
                calculated risk with good returns.
              </p>
              <div className="bg-gray-900 border border-gray-600 rounded p-3 font-mono text-sm text-gray-300">
                <div className="text-green-400">{`// Example:`}</div>
                <div>{`"You can expand around potential centers in the string to check for palindromes. Each character could be a center."`}</div>
              </div>
            </div>

            {/* Big Hint */}
            <div className="bg-gray-800 border border-gray-600 rounded-xl p-6 hover:border-red-500 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div className="text-red-400 text-2xl">♥</div>
                <div className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-mono">
                  8-11 PTS
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Big Hint</h3>
              <p className="text-gray-400 text-sm mb-4">
                Major algorithmic insight or pattern
              </p>
              <div className="bg-gray-900 border border-gray-600 rounded p-3 font-mono text-sm text-gray-300">
                <div className="text-green-400">{`// Example:`}</div>
                <div>{`"Use each character as a center and expand outward with two pointers to find all palindromes. Remember to handle both odd and even length palindromes."`}</div>
              </div>
            </div>
          </div>

          {/* Rules */}
          <div className="bg-gray-800/50 border border-gray-600 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4 text-center">
              Game Rules
            </h3>
            <div className="flex justify-between items-center px-16">
              <div className="flex items-center space-x-3">
                <div className="bg-red-500/20 text-red-400 rounded p-2 text-sm">
                  21+
                </div>
                <div>
                  <div className="font-semibold text-red-400">Bust Limit</div>
                  <div className="text-sm text-gray-400">
                    Max 21 points per problem
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-500/20 text-green-400 rounded p-2 text-sm">
                  -3
                </div>
                <div>
                  <div className="font-semibold text-green-400">Stay Bonus</div>
                  <div className="text-sm text-gray-400">
                    Solve without hints for bonus
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose 21Coder?</h2>
          <p className="text-xl text-gray-300">
            Strategic learning designed for developers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-blue-500/50 transition-all">
            <div className="bg-blue-600/20 text-blue-400 w-12 h-12 rounded-lg flex items-center justify-center mr-4 mb-6">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Context-Aware AI</h3>
            <p className="text-gray-400 leading-relaxed">
              Smart hints that analyze your current code and adapt to your skill
              level. No generic solutions. Every hint is personalized to your
              approach.
            </p>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-purple-500/50 transition-all">
            <div className="bg-purple-600/20 text-purple-400 w-12 h-12 rounded-lg flex items-center justify-center mr-4 mb-6">
              <div className="text-2xl">♠</div>
            </div>
            <h3 className="text-xl font-semibold mb-4">
              Strategic Decision Making
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Learn to balance help vs. independence. Each hint choice builds
              better problem-solving judgment and coding confidence over time.
            </p>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-red-500/50 transition-all">
            <div className="bg-red-600/20 text-red-400 w-12 h-12 rounded-lg flex items-center justify-center mr-4 mb-6">
              <div className="text-2xl">♥</div>
            </div>
            <h3 className="text-xl font-semibold mb-4">Enjoyment</h3>
            <p className="text-gray-400 leading-relaxed">
              Preparing for interviews shouldn't be a chore. It should be
              something you want to do. Our gamified hint system turns study
              sessions into an enjoyable experience.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-mono text-2xl px-4 py-2 rounded-lg shadow-lg">
                21
              </div>
              <span className="text-2xl font-semibold">Coder</span>
              <div className="text-gray-400 text-sm font-mono ml-2">{`// Strategic Learning`}</div>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Strategic LeetCode hints with blackjack-inspired mechanics. Built
              by developers, for developers who want to learn efficiently.
            </p>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              © 2025 21Coder • Strategic learning through gamified hints
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
