import { Code2, Coins, Server } from 'lucide-react'
import Image from 'next/image'
import ThemeToggle from './components/ThemeToggle'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image 
              src="/images/polyvibe-logo-black.svg" 
              alt="PolyVibe" 
              width={40} 
              height={40}
              className="dark:hidden"
            />
            <Image 
              src="/images/polyvibe-logo-white.svg" 
              alt="PolyVibe" 
              width={40} 
              height={40}
              className="hidden dark:block"
            />
            <span className="hidden md:inline text-2xl font-bold text-black dark:text-white">PolyVibe</span>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors rounded-lg">
              Launch App
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative max-w-6xl mx-auto px-6 pt-24 pb-32">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold text-black dark:text-white mb-6 leading-tight">
            Build dApps<br />Like a Pro
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Tired of gambling on stupid events? Bet on yourself and build the future.<br />
            Create dApps, websites, and tokens on Polygon without the complexity.
          </p>
          <button className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors rounded-lg">
            Start Building
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div>
            <div className="w-12 h-12 bg-black dark:bg-white flex items-center justify-center mb-6 rounded-lg">
              <Code2 className="w-6 h-6 text-white dark:text-black" />
            </div>
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">PolyVibe App</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Describe what you want to build in natural language, and watch AI transform your ideas into working dApps. No blockchain expertise required.
            </p>
          </div>

          {/* Feature 2 */}
          <div>
            <div className="w-12 h-12 bg-black dark:bg-white flex items-center justify-center mb-6 rounded-lg">
              <Coins className="w-6 h-6 text-white dark:text-black" />
            </div>
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">Token Factory</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Launch your own tokens instantly. Monetize your apps and websites with custom tokens on Polygon.
            </p>
          </div>

          {/* Feature 3 */}
          <div>
            <div className="w-12 h-12 bg-black dark:bg-white flex items-center justify-center mb-6 rounded-lg">
              <Server className="w-6 h-6 text-white dark:text-black" />
            </div>
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">MCP Marketplace</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Buy, sell, and use tokenized MCP servers. Access powerful development tools through our decentralized marketplace.
            </p>
          </div>
        </div>
      </section>

      {/* What is Vibe Coding */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black dark:text-white mb-8">What is Vibe Coding?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            Vibe coding is an emerging development practice that uses AI to generate functional code from natural language prompts. Instead of writing code line-by-line, you describe what you want to build, and AI handles the implementation.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            This approach accelerates development and makes blockchain app creation accessible to everyone—whether you're an experienced developer or just getting started. Focus on your vision, not syntax.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-32">
          <h2 className="text-4xl font-bold text-black dark:text-white mb-16">How It Works</h2>
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="text-4xl font-bold text-gray-300 dark:text-gray-700">01</div>
              <div>
                <h3 className="text-2xl font-bold text-black dark:text-white mb-2">Create</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Describe your dApp in plain language. Our AI-powered vibe coding interface turns your vision into reality.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-4xl font-bold text-gray-300 dark:text-gray-700">02</div>
              <div>
                <h3 className="text-2xl font-bold text-black dark:text-white mb-2">Tokenize</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Launch your own token through our factory to monetize and grow your project.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-4xl font-bold text-gray-300 dark:text-gray-700">03</div>
              <div>
                <h3 className="text-2xl font-bold text-black dark:text-white mb-2">Scale</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Access MCP servers from our marketplace to supercharge your development capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-black dark:text-white mb-6">
            Ready to Build Your Future?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Stop gambling. Start building. Join PolyVibe today.
          </p>
          <button className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors rounded-lg">
            Get Started
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Image 
                src="/images/polyvibe-logo-black.svg" 
                alt="PolyVibe" 
                width={28} 
                height={28}
                className="dark:hidden"
              />
              <Image 
                src="/images/polyvibe-logo-white.svg" 
                alt="PolyVibe" 
                width={28} 
                height={28}
                className="hidden dark:block"
              />
              <span className="hidden md:inline text-xl font-bold text-black dark:text-white">PolyVibe</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-gray-600 dark:text-gray-400">
              <div>Built on Polygon</div>
              <a 
                href="https://aipowergrid.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors"
              >
                <Image 
                  src="/images/aipg-logo.webp" 
                  alt="AIPG" 
                  width={24} 
                  height={24}
                />
                <span>Powered by the Grid</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

