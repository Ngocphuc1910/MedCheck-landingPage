import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <motion.div
      className="fixed left-0 right-0 z-50 flex justify-center px-4"
      animate={{ top: scrolled ? 16 : 52 }}
      initial={{ top: 52 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <nav className="w-full max-w-[880px] bg-white border border-[#E5E5E5] rounded-2xl h-[50px] flex items-center justify-between px-4 shadow-[0px_2px_8px_rgba(99,99,99,0.1)]">
        <img
          src="/medcheck_logo.png"
          alt="MedCheck"
          className="h-6 w-auto object-contain object-left"
        />

        <div className="flex items-center gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-medium text-[#171717] hover:text-[#737373] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1">
          {/* TODO: replace href with real CTA URL before launch */}
          <a
            href="mailto:hello@medcheck.app"
            className="text-[13px] font-medium text-white bg-[#0D0D0D] rounded-xl px-4 py-1.5 hover:bg-[#404040] transition-colors"
          >
            Get early access
          </a>
        </div>
      </nav>
    </motion.div>
  )
}
