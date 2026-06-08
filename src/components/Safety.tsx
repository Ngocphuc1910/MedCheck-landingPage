import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const cards = [
  {
    title: 'Transparent by design.',
    body: 'No black boxes. No hidden processing. No surprises for your governance teams.',
    img: '/images/safety-card-1.png',
  },
  {
    title: 'Proven in real hospitals.',
    body: 'We test every agent in real clinical workflows to make sure Mindoo behaves safely and reliably. Predictable, stable, reviewable.',
    img: '/images/safety-card-2.png',
  },
  {
    title: 'Built for strict healthcare governance.',
    body: 'Full audit trails, clear consent handling, and region-specific data protections.',
    img: '/images/safety-card-3.png',
  },
]

export default function Safety() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="safety" className="bg-[#F5F5F5] px-8 pt-24 pb-24" ref={ref}>
      <div className="max-w-[1080px] mx-auto">
        <motion.h2
          className="font-display font-bold text-[#171717] text-center leading-[1.05] tracking-[-0.02em] mb-16"
          style={{ fontSize: 72 }}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          Highest safety standards,<br />through and through.
        </motion.h2>

        <div className="grid grid-cols-3 gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="bg-[#EFEFEF] rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
            >
              <div style={{ height: 220 }} className="overflow-hidden">
                <img src={card.img} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3
                  className="font-display font-bold text-[#171717] leading-tight tracking-[-0.01em] mb-3"
                  style={{ fontSize: 20 }}
                >
                  {card.title}
                </h3>
                <p className="text-[13px] font-medium text-[#737373] leading-5">{card.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
