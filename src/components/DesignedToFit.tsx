import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const pills = [
  'No new systems to learn',
  'Minor workflow changes',
  'No tech expertise needed',
  'Built for real-world patient conversations',
  'Fully auditable, MDR, EU AI Act compliant, GDPR-native',
  'Creates capacity without increasing headcount',
]

export default function DesignedToFit() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-[#F5F5F5] px-20 pt-48 pb-16" ref={ref}>
      <div className="max-w-[1280px] mx-auto">
        <motion.h2
          className="text-[58px] font-medium text-[#171717] leading-[64px] tracking-[-0.044em] mb-4"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          Designed to fit the way you already work.
        </motion.h2>

        <motion.p
          className="text-[15px] font-medium text-[#737373] leading-6 mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Mindoo doesn't replace staff. It takes on the repeat work around care. And your team can get back to
          what they came into healthcare for.
        </motion.p>

        {/* Background image with floating pill tags */}
        <motion.div
          className="relative w-full rounded-2xl overflow-hidden"
          style={{ height: 480 }}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img
            src="/images/fit-background.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-3 p-16">
            {pills.map((pill, i) => (
              <motion.span
                key={pill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                className="bg-white/95 text-[#171717] text-[13px] font-medium px-4 py-2 rounded-full border border-white/50 shadow-sm"
              >
                {pill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <p className="text-[9px] font-medium text-[#737373] uppercase tracking-[0.054em] mt-6">
          Patients feel heard. Staff feel supported. Time is used where it matters most.
        </p>
      </div>
    </section>
  )
}
