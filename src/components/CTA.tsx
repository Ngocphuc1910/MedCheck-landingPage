import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-white py-16 pb-12" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-20 text-center">
        {/* Character decorations */}
        <motion.div
          className="flex justify-center items-end gap-4 mb-12"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <img src="/images/cta-char-green.png" alt="" className="w-20 object-contain" />
          <img src="/images/cta-char-purple.png" alt="" className="w-16 object-contain mb-4" />
          <img src="/images/cta-char-blue.png" alt="" className="w-28 object-contain" />
          <img src="/images/cta-char-orange.png" alt="" className="w-16 object-contain mb-4" />
          <img src="/images/cta-char-pink.png" alt="" className="w-20 object-contain" />
        </motion.div>

        <motion.h2
          className="text-[58px] font-medium text-[#171717] leading-[64px] tracking-[-0.044em] mb-4"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Because healthcare is already stressful enough.
        </motion.h2>

        <motion.p
          className="text-[15px] font-medium text-[#737373] leading-6 mb-8"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Create breathing room for your team, without hiring more people to do boring admin work.
        </motion.p>

        <motion.button
          className="text-[13px] font-medium text-white bg-[#0D0D0D] rounded-xl px-6 py-3 hover:bg-[#404040] transition-colors"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Book a demo
        </motion.button>
      </div>
    </section>
  )
}
