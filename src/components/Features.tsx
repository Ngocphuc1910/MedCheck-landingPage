import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="how-it-works" className="bg-white overflow-hidden" ref={ref}>
      {/* Heading */}
      <div className="text-center pt-24 pb-16 px-8">
        <motion.h2
          className="font-display font-medium leading-[1.0] tracking-[-0.02em]"
          style={{ fontSize: 64 }}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="block text-[#171717]">From scan</span>
          <span className="block text-[#737373]">to result in seconds.</span>
        </motion.h2>
      </div>

      {/* 3-column layout */}
      <div className="flex items-start" style={{ minHeight: 700 }}>
        {/* Left text */}
        <div className="flex-1 flex justify-center px-16 pt-32 pb-8">
          <div style={{ maxWidth: 320 }}>
            <motion.h3
              className="font-display font-bold text-[#171717] leading-tight tracking-[-0.02em] mb-4"
              style={{ fontSize: 32 }}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Scan or type your prescription.
            </motion.h3>
            <motion.p
              className="text-[15px] font-medium text-[#737373] leading-6"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.32 }}
            >
              Photograph a handwritten prescription or search drug names directly. MedCheck handles Vietnamese and English, extracting every medication automatically.
            </motion.p>
          </div>
        </div>

        {/* Center — phone mockup */}
        <motion.div
          className="flex-none flex justify-center"
          style={{ width: 509 }}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="relative" style={{ width: 509, height: 660 }}>
            <img
              src="/images/phone-mockup.webp"
              alt="MedCheck app"
              loading="lazy"
              decoding="async"
              width={509}
              height={660}
              style={{ width: 509, height: 660, display: 'block' }}
            />
            <div
              className="absolute overflow-hidden"
              style={{ top: 10, left: 153, width: 199, height: 417, borderRadius: 22 }}
            >
              <img
                src="/screenshots/demo.webp"
                alt=""
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </motion.div>

        {/* Right text */}
        <div className="flex-1 flex justify-center px-16 pt-32 pb-8">
          <div style={{ maxWidth: 320 }}>
            <motion.h3
              className="font-display font-bold text-[#171717] leading-tight tracking-[-0.02em] mb-4"
              style={{ fontSize: 32 }}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Get results in under 10 seconds.
            </motion.h3>
            <motion.p
              className="text-[15px] font-medium text-[#737373] leading-6"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.42 }}
            >
              Every drug pair checked simultaneously. Add patient context (age, renal function, INR level) and every alert personalizes to that specific patient.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
