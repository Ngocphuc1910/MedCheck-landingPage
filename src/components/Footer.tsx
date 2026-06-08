import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Footer() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const navLinks = [
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ]
  const legalLinks = ['Privacy Policy', 'Terms of Service']

  return (
    <footer className="bg-white px-6 pb-6" ref={ref}>
      <motion.div
        className="rounded-3xl relative overflow-hidden"
        style={{ height: 480 }}
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <img
          src="/mascot/footer.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: '30% center' }}
        />

        <motion.div
          className="absolute top-8 right-10 z-10 flex gap-16"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] mb-4" style={{ color: '#4DA8FF' }}>Navigation</p>
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-[13px] font-medium text-[#171717] hover:text-[#737373] transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] mb-4" style={{ color: '#4DA8FF' }}>Legal</p>
            <ul className="space-y-3">
              {legalLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="text-[13px] font-medium text-[#737373] hover:text-[#171717] transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}
