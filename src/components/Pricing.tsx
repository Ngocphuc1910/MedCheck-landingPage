import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

// Layout cloned from make10000hours PricingSection.tsx — same card structure, Phario content
const freeFeatures = [
  'Drug interaction checking (all pairs)',
  '3,000+ drugs indexed',
  'Major · Moderate · Minor severity',
  'Patient context personalization',
  'Prescription image scanning',
  'Results in under 10 seconds',
]

const proFeatures = [
  'Everything in early access',
  'Prescription Appropriateness Checker',
  'Priority clinical support',
  'Hospital B2B licensing',
]

function CheckIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#34C759' }}>
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  )
}

export default function Pricing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="pricing" className="bg-white px-8 pt-24 pb-24" ref={ref}>
      <div className="max-w-[1080px] mx-auto">
        <h2
          className="font-display font-medium text-[#171717] text-center leading-[1.05] tracking-[-0.02em] mb-4"
          style={{ fontSize: 72 }}
        >
          {['Simple', 'pricing.'].map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12, ease: 'easeOut' }}
              style={{ display: 'inline-block', marginRight: '0.25em' }}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        <motion.p
          className="text-center text-[15px] font-medium text-[#737373] leading-6 mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.18 }}
        >
          Designed to be accessible for individual clinicians.
        </motion.p>

        {/* Cards — same 2-col grid as make10000hours PricingSection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[860px] mx-auto">

          {/* Free card — white border (matches make10000hours Standard card) */}
          <motion.div
            className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col"
            style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold mb-4 w-fit" style={{ background: '#EBF5FF', color: '#4DA8FF' }}>
              FREE BETA
            </div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-display font-bold text-[#171717]" style={{ fontSize: 40 }}>$0</span>
              <span className="text-[#737373] text-sm">per month</span>
            </div>
            <p className="text-[#737373] text-sm mb-6">During early access</p>

            <motion.div
              className="space-y-3 mb-8"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {freeFeatures.map((f) => (
                <div key={f} className="flex items-start gap-2">
                  <CheckIcon />
                  <span className="text-[#404040] text-sm">{f}</span>
                </div>
              ))}
            </motion.div>

            <a
              href="https://app.phario.app/"
              className="w-full py-3 px-6 bg-white border border-gray-200 text-[#171717] font-semibold rounded-full hover:bg-gray-50 transition-colors mt-auto text-center text-sm"
            >
              Get early access →
            </a>
          </motion.div>

          {/* Pro card — Figma exact: white→#EFF6FF gradient, prominent shadow, gradient title, dark CTA */}
          <motion.div
            className="rounded-2xl p-6 md:p-8 flex flex-col border border-gray-200"
            style={{
              background: 'linear-gradient(180deg, #FFFFFF 0%, #EFF6FF 100%)',
              boxShadow: '0px 4px 6px -4px rgba(0,0,0,0.1), 0px 10px 15px -3px rgba(0,0,0,0.1)',
            }}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            {/* Gradient "Pro" heading — adapted from make10000hours */}
            <span
              className="font-bold text-2xl mb-4 block"
              style={{
                background: 'linear-gradient(90deg, #4DA8FF 0%, #2563EB 40%, #7C3AED 75%, #C026D3 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Pro
            </span>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-display font-bold text-[#111827]" style={{ fontSize: 40 }}>$10</span>
              <span className="text-[#4B5563] text-sm">per month</span>
            </div>
            <p className="text-[#4B5563] text-sm mb-6">Hospital licensing available</p>

            <motion.div
              className="space-y-3 mb-8"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {proFeatures.map((f) => (
                <div key={f} className="flex items-start gap-2">
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#34C759' }}>
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#374151] text-sm">{f}</span>
                </div>
              ))}
            </motion.div>

            {/* Solid dark CTA — inverse of Standard's ghost button */}
            <a
              href="https://app.phario.app/"
              className="w-full py-3 px-6 bg-[#111827] text-white font-semibold rounded-full hover:bg-[#1f2937] transition-colors mt-auto text-center text-sm"
            >
              Notify me when Pro launches →
            </a>
            <p className="text-center text-[11px] text-[#6B7280] mt-3">Hospital pricing: contact us</p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
