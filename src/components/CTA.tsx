import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-white relative overflow-hidden py-24" ref={ref}>
      {/* Sine wave decorations */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 400"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-100,200 C160,80 320,320 580,200 C840,80 1000,320 1260,200 C1380,140 1420,160 1540,200"
          stroke="#0059FF"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M-100,220 C160,340 320,100 580,220 C840,340 1000,100 1260,220 C1380,280 1420,260 1540,220"
          stroke="#4AC957"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M-100,190 C160,310 320,70 580,190 C840,310 1000,70 1260,190 C1380,250 1420,230 1540,190"
          stroke="#E595C4"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
        />
      </svg>

      <div className="relative z-10 max-w-[860px] mx-auto px-8 text-center">
        {/* Grouped characters */}
        <motion.div
          className="flex justify-center items-end gap-0 mb-10"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <img src="/images/cta-char-purple.png" alt="" className="object-contain" style={{ width: 64, marginRight: -10 }} />
          <img src="/images/cta-char-pink.png"   alt="" className="object-contain mb-4" style={{ width: 76, marginRight: -12 }} />
          <img src="/images/cta-char-blue.png"   alt="" className="object-contain" style={{ width: 120 }} />
          <img src="/images/cta-char-orange.png" alt="" className="object-contain mb-4" style={{ width: 76, marginLeft: -12 }} />
          <img src="/images/cta-char-green.png"  alt="" className="object-contain" style={{ width: 64, marginLeft: -10 }} />
        </motion.div>

        <motion.h2
          className="font-display font-bold text-[#171717] leading-[1.05] tracking-[-0.02em] mb-4"
          style={{ fontSize: 72 }}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Because healthcare is<br />already stressful enough.
        </motion.h2>

        <motion.p
          className="text-[15px] font-medium text-[#737373] leading-6 mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Create breathing room for your team,<br />
          without hiring more people to do boring admin work.
        </motion.p>

        <motion.button
          className="text-[13px] font-medium text-white bg-[#0D0D0D] rounded-xl px-7 py-3 hover:bg-[#404040] transition-colors"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Book a demo
        </motion.button>
      </div>
    </section>
  )
}
