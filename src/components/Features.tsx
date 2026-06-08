import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { useRef } from 'react'

function Word({
  children,
  progress,
  start,
  end,
  mr = '0.28em',
}: {
  children: string
  progress: MotionValue<number>
  start: number
  end: number
  mr?: string | number
}) {
  const y = useTransform(progress, [start, end], ['110%', '0%'])
  return (
    <span style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom', marginRight: mr }}>
      <motion.span style={{ display: 'inline-block', y }}>
        {children}
      </motion.span>
    </span>
  )
}

export default function HowItWorks() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'start 0.3'],
  })

  const phoneOpacity = useTransform(scrollYProgress, [0.08, 0.35], [0, 1])
  const phoneY      = useTransform(scrollYProgress, [0.08, 0.35], [40, 0])

  const leftH3Opacity = useTransform(scrollYProgress, [0.42, 0.62], [0, 1])
  const leftH3Y       = useTransform(scrollYProgress, [0.42, 0.62], [24, 0])
  const leftPOpacity  = useTransform(scrollYProgress, [0.50, 0.70], [0, 1])
  const leftPY        = useTransform(scrollYProgress, [0.50, 0.70], [16, 0])

  const rightH3Opacity = useTransform(scrollYProgress, [0.58, 0.78], [0, 1])
  const rightH3Y       = useTransform(scrollYProgress, [0.58, 0.78], [24, 0])
  const rightPOpacity  = useTransform(scrollYProgress, [0.66, 0.86], [0, 1])
  const rightPY        = useTransform(scrollYProgress, [0.66, 0.86], [16, 0])

  return (
    <section id="how-it-works" className="bg-white overflow-hidden" ref={ref}>
      {/* Heading — scroll-driven word reveal */}
      <div className="text-center pt-24 pb-16 px-8">
        <h2 className="font-display font-medium leading-[1.0] tracking-[-0.02em]" style={{ fontSize: 64 }}>
          <span className="block text-[#171717]">
            <Word progress={scrollYProgress} start={0.00} end={0.22}>From</Word>
            <Word progress={scrollYProgress} start={0.06} end={0.28} mr={0}>scan</Word>
          </span>
          <span className="block text-[#737373]">
            <Word progress={scrollYProgress} start={0.12} end={0.34}>to</Word>
            <Word progress={scrollYProgress} start={0.17} end={0.39}>result</Word>
            <Word progress={scrollYProgress} start={0.22} end={0.44}>in</Word>
            <Word progress={scrollYProgress} start={0.27} end={0.49} mr={0}>seconds.</Word>
          </span>
        </h2>
      </div>

      {/* 3-column layout */}
      <div className="flex items-start" style={{ minHeight: 700 }}>

        {/* Left text */}
        <div className="flex-1 flex justify-center px-16 pt-32 pb-8">
          <div style={{ maxWidth: 320 }}>
            <motion.h3
              className="font-display font-bold text-[#171717] leading-tight tracking-[-0.02em] mb-4"
              style={{ fontSize: 32, opacity: leftH3Opacity, y: leftH3Y }}
            >
              Scan or type your prescription.
            </motion.h3>
            <motion.p
              className="text-[15px] font-medium text-[#737373] leading-6"
              style={{ opacity: leftPOpacity, y: leftPY }}
            >
              Photograph a handwritten prescription or search drug names directly. MedCheck handles Vietnamese and English, extracting every medication automatically.
            </motion.p>
          </div>
        </div>

        {/* Center — phone mockup */}
        <motion.div
          className="flex-none flex justify-center"
          style={{ width: 509, opacity: phoneOpacity, y: phoneY }}
        >
          <div className="relative" style={{ width: 509, height: 660 }}>
            <img
              src="/images/phone-mockup.png"
              alt="MedCheck app"
              style={{ width: 509, height: 660, display: 'block' }}
            />
            {/* Screen overlay: coords pixel-measured from phone-mockup.png (1152×1494 → 509×660) */}
            <div
              className="absolute overflow-hidden"
              style={{ top: 10, left: 153, width: 199, height: 417, borderRadius: 22 }}
            >
              <img
                src="/screenshots/demo.png"
                alt=""
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
              style={{ fontSize: 32, opacity: rightH3Opacity, y: rightH3Y }}
            >
              Get results in under 10 seconds.
            </motion.h3>
            <motion.p
              className="text-[15px] font-medium text-[#737373] leading-6"
              style={{ opacity: rightPOpacity, y: rightPY }}
            >
              Every drug pair checked simultaneously. Add patient context (age, renal function, INR level) and every alert personalizes to that specific patient.
            </motion.p>
          </div>
        </div>

      </div>
    </section>
  )
}
