'use client'

import { Code2, Coins, Server } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import ThemeToggle from './components/ThemeToggle'
import LogoLoop from './components/LogoLoop'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiEthereum, SiPolygon, SiOpenai, SiSolidity } from 'react-icons/si'
import dynamic from 'next/dynamic'

const Beams = dynamic(() => import('./components/Beams'), { ssr: false })
const PixelCard = dynamic(() => import('./components/PixelCard'), { ssr: false })

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center" suppressHydrationWarning>
        <div className="text-gray-400" suppressHydrationWarning>Loading...</div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 relative overflow-hidden">
        {/* Background Beams - Light Mode (White with Black Accents) */}
        <div className="fixed inset-0 opacity-15 pointer-events-none dark:hidden">
          <Beams
            beamWidth={1.5}
            beamHeight={15}
            beamNumber={24}
            lightColor="#f0f0f0"
            speed={1.5}
            noiseIntensity={1.5}
            scale={0.25}
            rotation={25}
          />
        </div>
        
        {/* Background Beams - Dark Mode (White/Grey) */}
        <div className="fixed inset-0 opacity-30 pointer-events-none hidden dark:block">
          <Beams
            beamWidth={1.5}
            beamHeight={15}
            beamNumber={24}
            lightColor="#ffffff"
            speed={1.5}
            noiseIntensity={1.5}
            scale={0.25}
            rotation={25}
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
        {/* Header */}
        <header className="">
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
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-32">
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
      <section className="bg-gray-50/40 dark:bg-gray-900/60 backdrop-blur-lg border-y border-gray-200/30 dark:border-gray-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <PixelCard variant="blue">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-4">Create</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Describe your dApp in plain language. Our AI-powered vibe coding interface turns your vision into reality.
                </p>
              </div>
            </PixelCard>
            
            <PixelCard variant="yellow">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-4">Tokenize</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Launch your own token through our factory to monetize and grow your project.
                </p>
              </div>
            </PixelCard>
            
            <PixelCard variant="pink">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-4">Scale</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Access MCP servers from our marketplace to supercharge your development capabilities.
                </p>
              </div>
            </PixelCard>
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
      <footer className="border-t border-gray-200/30 dark:border-gray-800/50 bg-white/40 dark:bg-gray-950/60 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col items-center gap-4 text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-6">
              <span>Built on Polygon</span>
              <span className="text-gray-300 dark:text-gray-700">•</span>
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

      {/* Technology Logos */}
      <section className="py-8 bg-gray-50/40 dark:bg-gray-900/60 backdrop-blur-lg">
        <div className="text-black dark:text-white">
          <LogoLoop
            logos={[
              { node: <SiReact />, title: "React", href: "https://react.dev" },
              { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
              { node: <SiTypescript />, title: "TypeScript", href: "https://typescriptlang.org" },
              { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
              { node: <SiPolygon />, title: "Polygon", href: "https://polygon.technology" },
              { node: <SiEthereum />, title: "Ethereum", href: "https://ethereum.org" },
              { node: <SiSolidity />, title: "Solidity", href: "https://soliditylang.org" },
              { node: <SiOpenai />, title: "OpenAI", href: "https://openai.com" },
            ]}
            speed={60}
            direction="left"
            logoHeight={32}
            gap={48}
            pauseOnHover={false}
            scaleOnHover={false}
            fadeOut={false}
            ariaLabel="Technology stack"
          />
        </div>
      </section>
        </div>
      </main>
  )
}

