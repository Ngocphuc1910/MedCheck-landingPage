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
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-[#F5F5F5] px-8 pt-32 pb-16" ref={ref}>
      <div className="max-w-[860px] mx-auto">
        {/* Centered heading */}
        <motion.h2
          className="font-display font-bold text-[#171717] text-center leading-[1.05] tracking-[-0.02em] mb-4"
          style={{ fontSize: 72 }}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          Designed to fit the way you already work.
        </motion.h2>

        <motion.p
          className="text-center text-[15px] font-medium text-[#737373] leading-6 mb-12 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Mindoo doesn't replace staff. It takes on the repeat work around care. And your team can get back to
          what they came into healthcare for.
        </motion.p>

        {/* Gray card */}
        <motion.div
          className="bg-white/60 rounded-3xl relative overflow-hidden"
          style={{ minHeight: 500 }}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Characters left/right inside the card */}
          <img
            src="/images/char-purple.png"
            alt=""
            className="absolute bottom-24 left-6 object-contain"
            style={{ width: 80 }}
          />
          <img
            src="/images/char-green.png"
            alt=""
            className="absolute bottom-24 right-6 object-contain"
            style={{ width: 80 }}
          />

          {/* Center UI mockup */}
          <div className="flex flex-col items-center pt-16 pb-6 px-8">
            <img
              src="/images/char-blue.png"
              alt=""
              className="object-contain mb-0"
              style={{ width: 100 }}
            />

            {/* Chat bubble mockup */}
            <div className="bg-white rounded-2xl border border-[#E5E5E5] shadow-sm p-5 mt-2 text-center" style={{ maxWidth: 320 }}>
              <div className="flex items-center gap-2 justify-center mb-2">
                <img src="/images/char-blue-chat.png" alt="" className="w-4 h-4 rounded-full" />
                <span className="text-[11px] font-medium text-[#737373]">Max, the Intake Agent</span>
              </div>
              <p className="text-[13px] font-medium text-[#171717] leading-5">
                I'll help you prepare for your appointment today. What's the main reason for your visit today?
              </p>
            </div>

            {/* Pill tags */}
            <div className="flex flex-wrap justify-center gap-2 mt-10 mb-4">
              {pills.map((pill, i) => (
                <motion.span
                  key={pill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
                  className="bg-white border border-[#E5E5E5] text-[#171717] text-[12px] font-medium px-4 py-1.5 rounded-full shadow-sm"
                >
                  {pill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        <p className="text-center text-[9px] font-medium text-[#737373] uppercase tracking-[0.1em] mt-6">
          Patients feel heard. Staff feel supported. Time is used where it matters most.
        </p>
      </div>
    </section>
  )
}
