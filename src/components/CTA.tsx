import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-white relative overflow-hidden min-h-screen flex items-center pb-40" ref={ref}>
      {/* Elegant multi-color waves — modelled on make10000hours reference */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveFadeMask" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="18%" stopColor="white" stopOpacity="1" />
            <stop offset="32%" stopColor="white" stopOpacity="0" />
            <stop offset="68%" stopColor="white" stopOpacity="0" />
            <stop offset="82%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="1" />
          </linearGradient>
          <mask id="fadeCenter">
            <rect width="1440" height="800" fill="url(#waveFadeMask)" />
          </mask>
        </defs>

        <g mask="url(#fadeCenter)">
          <path
            d="M -100,270 C 180,170 420,370 720,270 C 1020,170 1260,330 1540,250"
            stroke="#3B82F6"
            strokeWidth="2.5"
            opacity="0.7"
          />
          <path
            d="M -100,305 C 200,180 480,440 760,305 C 1040,170 1280,430 1540,305"
            stroke="#F472B6"
            strokeWidth="2.5"
            opacity="0.6"
          />
          <path
            d="M -100,340 C 240,450 560,220 840,340 C 1120,460 1320,300 1540,360"
            stroke="#22C55E"
            strokeWidth="2.5"
            opacity="0.65"
          />
          <path
            d="M -100,375 C 160,280 400,470 660,375 C 920,280 1180,440 1440,355"
            stroke="#7DD3FC"
            strokeWidth="2"
            opacity="0.55"
          />
          <path
            d="M -100,410 C 300,280 600,540 960,410 C 1200,320 1360,450 1540,410"
            stroke="#818CF8"
            strokeWidth="2"
            opacity="0.5"
          />
        </g>
      </svg>

      <div className="relative z-10 max-w-[860px] mx-auto px-8 text-center">
        {/* Mascot replaces character cluster — same positioning */}
        {/* MASCOT v2: replace with waving pose when commissioned */}
        <motion.div
          className="flex justify-center items-end gap-0 mb-10"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <img src="/mascot/Logo.png" alt="Phario" className="object-contain" style={{ width: 200, mixBlendMode: 'multiply' }} />
        </motion.div>

        <motion.h2
          className="font-display font-medium text-[#171717] leading-[1.05] tracking-[-0.02em] mb-4"
          style={{ fontSize: 52 }}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Check interactions<br />before you prescribe,<br />not after something goes wrong.
        </motion.h2>

        <motion.p
          className="text-[15px] font-medium text-[#737373] leading-6 mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Join early, free during beta.<br />
          Built for the pace of clinical work.
        </motion.p>

        {/* TODO: replace href with real CTA URL before launch */}
        <motion.a
          href="mailto:hello@phario.app"
          className="inline-block text-[13px] font-medium text-white bg-[#0D0D0D] rounded-xl px-7 py-3 hover:bg-[#404040] transition-colors"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Get early access
        </motion.a>
        <motion.p
          className="text-[11px] text-[#737373] mt-3"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          No credit card required · $10/month after beta
        </motion.p>
      </div>
    </section>
  )
}
