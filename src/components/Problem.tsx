import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Problem() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="problem" className="bg-[#F5F5F5] px-20 py-32" ref={ref}>
      <div className="max-w-[1280px] mx-auto flex items-center gap-20">
        {/* Left */}
        <motion.div
          className="flex-1 max-w-lg"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-[58px] font-medium text-[#171717] leading-[64px] tracking-[-0.044em] mb-8">
            The real pressure isn't the care. It's everything around it.
          </h2>
          <p className="text-[15px] font-medium text-[#737373] leading-6 mb-4">
            The day breaks under intake, calls, symptom logs, and coordination long before the clinical work starts.
          </p>
          <p className="text-[15px] font-medium text-[#737373] leading-6">
            More demand from hospitals. Tighter budgets. Fewer people to handle all that.
          </p>
        </motion.div>

        {/* Right — photo collage */}
        <motion.div
          className="flex-1 relative"
          style={{ height: 480 }}
          initial={{ opacity: 0, x: 32 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <img
            src="/images/photo-gloves.png"
            alt=""
            className="absolute top-0 left-8 w-28 rounded-2xl object-cover shadow-sm"
            style={{ height: 'auto' }}
          />
          <img
            src="/images/photo-surgeon.png"
            alt=""
            className="absolute top-4 left-44 w-44 rounded-2xl object-cover shadow-sm"
          />
          <img
            src="/images/photo-stretcher.png"
            alt=""
            className="absolute top-56 left-2 w-36 rounded-2xl object-cover shadow-sm"
          />
          <img
            src="/images/photo-doctor.png"
            alt=""
            className="absolute top-24 right-0 w-52 rounded-2xl object-cover shadow-sm"
          />
        </motion.div>
      </div>
    </section>
  )
}
