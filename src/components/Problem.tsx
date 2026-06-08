import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Problem() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="problem" className="bg-[#F5F5F5] relative overflow-hidden" style={{ minHeight: 880 }} ref={ref}>
      {/* Scattered photos */}
      <motion.img
        src="/images/photo-doctor.png"
        alt=""
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="absolute top-16 right-12 rounded-2xl object-cover shadow-sm"
        style={{ width: 200, height: 240 }}
      />
      <motion.img
        src="/images/photo-stretcher.png"
        alt=""
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="absolute top-40 left-16 rounded-2xl object-cover shadow-sm"
        style={{ width: 160, height: 190, filter: 'blur(2px)' }}
      />
      <motion.img
        src="/images/photo-surgeon.png"
        alt=""
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="absolute rounded-2xl object-cover shadow-sm"
        style={{ width: 160, height: 192, bottom: 140, left: 80, filter: 'blur(1px)' }}
      />
      <motion.img
        src="/images/photo-gloves.png"
        alt=""
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="absolute rounded-xl object-cover shadow-sm"
        style={{ width: 72, height: 86, bottom: 160, right: 80, filter: 'blur(3px)' }}
      />

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-8 pt-40 pb-48">
        <motion.h2
          className="font-display font-bold leading-[1.05] tracking-[-0.02em] mb-10 max-w-3xl"
          style={{ fontSize: 76 }}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[#737373]">The real pressure isn't the care. </span>
          <span className="text-[#171717]">It's everything around it.</span>
        </motion.h2>

        <motion.div
          className="max-w-md space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p className="text-[16px] font-medium text-[#737373] leading-7">
            The day breaks under intake, calls, symptom logs, and coordination long before the clinical work starts.
          </p>
          <p className="text-[16px] font-medium text-[#737373] leading-7">
            More demand from hospitals. Tighter budgets. Fewer people to handle all that.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
