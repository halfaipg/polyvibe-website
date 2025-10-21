'use client'

import { Code2, Coins, Server } from 'lucide-react'
import Image from 'next/image'
import ThemeToggle from './components/ThemeToggle'
import LogoLoop from './components/LogoLoop'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiEthereum, SiPolygon, SiOpenai, SiSolidity, SiVercel, SiCloudflare, SiNodedotjs, SiGit, SiGithub } from 'react-icons/si'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'

const Beams = dynamic(() => import('./components/Beams'), { ssr: false })
const PixelCard = dynamic(() => import('./components/PixelCard'), { ssr: false })
const Dither = dynamic(() => import('./components/Dither'), { ssr: false })

export default function Home() {
  const [isDark, setIsDark] = useState(false)
  const [reactBitsEnabled, setReactBitsEnabled] = useState(true)

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }
    
    checkTheme()
    
    // Watch for theme changes
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
    
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    // Load React Bits preference from localStorage
    const saved = localStorage.getItem('reactBitsEnabled')
    if (saved !== null) {
      setReactBitsEnabled(saved === 'true')
    }
  }, [])

  const toggleReactBits = () => {
    const newValue = !reactBitsEnabled
    setReactBitsEnabled(newValue)
    localStorage.setItem('reactBitsEnabled', String(newValue))
  }
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 relative overflow-hidden">
        {/* Dither Wave Background - Light Mode Only */}
        {!isDark && reactBitsEnabled && (
          <div className="fixed inset-0 opacity-30 pointer-events-none">
            <Dither
              waveColor={[0.5, 0.2, 0.8]}
              disableAnimation={false}
              enableMouseInteraction={true}
              mouseRadius={0.5}
              colorNum={4}
              waveAmplitude={0.5}
              waveFrequency={2}
              waveSpeed={0.02}
              baseColor={1.0}
            />
            {/* Polygon Logo in Center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/polygon-matic-logo.svg"
                alt="Polygon"
                width={200}
                height={200}
                className="opacity-70"
              />
            </div>
          </div>
        )}
        
        {/* Dither Wave Background - Dark Mode */}
        {isDark && reactBitsEnabled && (
          <div className="fixed inset-0 opacity-30 pointer-events-none">
            <Dither
              waveColor={[0.3, 0.1, 0.5]}
              disableAnimation={false}
              enableMouseInteraction={true}
              mouseRadius={0.5}
              colorNum={4}
              waveAmplitude={0.5}
              waveFrequency={2}
              waveSpeed={0.02}
              baseColor={0.0}
            />
            {/* Polygon Logo in Center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/polygon-matic-logo.svg"
                alt="Polygon"
                width={200}
                height={200}
                className="opacity-70"
              />
            </div>
          </div>
        )}

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
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-black dark:text-white mb-6 leading-tight">
            Build dApps<br />Like a Pro
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Stop gambling on randomness. Bet on yourself and build the future.<br />
            Create dApps, websites, and tokens on Polygon without the complexity.
          </p>
          <button className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors rounded-lg">
            Start Building
          </button>
        </div>
      </section>

      {/* AI Prompt Section */}
      <section className="max-w-4xl mx-auto px-6 pb-32">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
            What do you want to build?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Describe your idea and let AI bring it to life
          </p>
        </div>
        
        <div className="relative">
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-2xl">
            <div className="space-y-4">
              <div className="text-center mb-4">
                <button className="inline-flex items-center gap-3 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-colors font-medium text-lg shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Talk to PolyVibe AI Agent
                </button>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Or type your idea below</p>
              </div>
              
              <textarea
                placeholder="I want to create a landing page for my web3 startup that showcases our DeFi protocol with a modern design, tokenomics section, and community features..."
                className="w-full bg-transparent text-lg text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border-none outline-none resize-none min-h-[80px] leading-relaxed"
                rows={3}
              />
              
              <div className="flex items-center justify-center pt-2">
                <button className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors font-medium text-lg">
                  Build It
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {/* Feature 1 */}
          <div className="text-center p-8 border border-gray-200 dark:border-gray-800 rounded-lg bg-white/40 dark:bg-gray-950/40 backdrop-blur-sm h-full flex flex-col">
            <div className="w-12 h-12 bg-black dark:bg-white flex items-center justify-center mb-6 rounded-lg mx-auto">
              <Code2 className="w-6 h-6 text-white dark:text-black" />
            </div>
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">PolyVibe App</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Describe what you want to build in natural language, and watch AI transform your ideas into working dApps. No blockchain expertise required.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center p-8 border border-gray-200 dark:border-gray-800 rounded-lg bg-white/40 dark:bg-gray-950/40 backdrop-blur-sm h-full flex flex-col">
            <div className="w-12 h-12 bg-black dark:bg-white flex items-center justify-center mb-6 rounded-lg mx-auto">
              <Coins className="w-6 h-6 text-white dark:text-black" />
            </div>
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">Token Factory</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Launch your own tokens instantly with zero coding required. Monetize your apps and websites with custom tokens on Polygon. Set up tokenomics and deploy directly to mainnet.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center p-8 border border-gray-200 dark:border-gray-800 rounded-lg bg-white/40 dark:bg-gray-950/40 backdrop-blur-sm h-full flex flex-col">
            <div className="w-12 h-12 bg-black dark:bg-white flex items-center justify-center mb-6 rounded-lg mx-auto">
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
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-12">
            This approach accelerates development and makes blockchain app creation accessible to everyone—whether you're an experienced developer or just getting started. Focus on your vision, not syntax.
          </p>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
            <video 
              controls 
              className="w-full h-full"
              preload="metadata"
            >
              <source src="/videos/vibe-coding.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50/40 dark:bg-gray-900/60 backdrop-blur-lg border-y border-gray-200/30 dark:border-gray-800/50 py-16" suppressHydrationWarning>
        <div className="max-w-6xl mx-auto px-6" suppressHydrationWarning>
          <div className="grid md:grid-cols-3 gap-8 items-stretch" suppressHydrationWarning>
            {reactBitsEnabled ? (
              <>
                <PixelCard variant="blue" className="h-full">
                  <div className="p-8 text-center h-full flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-4">Create</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Describe your dApp in plain language. Our AI-powered vibe coding interface turns your vision into reality.
                    </p>
                  </div>
                </PixelCard>
                
                <PixelCard variant="yellow" className="h-full">
                  <div className="p-8 text-center h-full flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-4">Tokenize</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Launch your own token through our factory to monetize and grow your project.
                    </p>
                  </div>
                </PixelCard>
                
                <PixelCard variant="pink" className="h-full">
                  <div className="p-8 text-center h-full flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-4">Scale</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Access MCP servers from our marketplace to supercharge your development capabilities.
                    </p>
                  </div>
                </PixelCard>
              </>
            ) : (
              <>
                <div className="p-8 text-center border border-gray-200 dark:border-gray-800 rounded-lg bg-white/40 dark:bg-gray-950/40 backdrop-blur-sm h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-4">Create</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Describe your dApp in plain language. Our AI-powered vibe coding interface turns your vision into reality.
                  </p>
                </div>
                
                <div className="p-8 text-center border border-gray-200 dark:border-gray-800 rounded-lg bg-white/40 dark:bg-gray-950/40 backdrop-blur-sm h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-4">Tokenize</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Launch your own token through our factory to monetize and grow your project.
                  </p>
                </div>
                
                <div className="p-8 text-center border border-gray-200 dark:border-gray-800 rounded-lg bg-white/40 dark:bg-gray-950/40 backdrop-blur-sm h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-4">Scale</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Access MCP servers from our marketplace to supercharge your development capabilities.
                  </p>
                </div>
              </>
            )}
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
            <a 
              href="https://aipowergrid.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors"
            >
              <span>Built on Polygon</span>
              <SiPolygon className="w-4 h-4" />
              <span>Powered by the Grid</span>
              <Image 
                src="/images/aipg-logo.webp" 
                alt="AIPG" 
                width={20} 
                height={20}
                className="-ml-1"
              />
            </a>
            <button
              onClick={toggleReactBits}
              className="text-sm px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {reactBitsEnabled ? 'Disable' : 'Enable'} React Bits Effects
            </button>
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
              { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
              { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
              { node: <SiCloudflare />, title: "Cloudflare", href: "https://cloudflare.com" },
              { node: <SiPolygon />, title: "Polygon", href: "https://polygon.technology" },
              { node: <SiEthereum />, title: "Ethereum", href: "https://ethereum.org" },
              { node: <SiSolidity />, title: "Solidity", href: "https://soliditylang.org" },
              { node: <SiOpenai />, title: "OpenAI", href: "https://openai.com" },
              { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
              { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
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

