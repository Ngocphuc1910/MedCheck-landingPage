import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const cards = [
  {
    title: 'OpenFDA',
    subtitle: 'US Food & Drug Administration',
    body: 'Drug labeling, pharmacology data, interaction signals, adverse reactions, and contraindications. All sourced from official FDA records.',
  },
  {
    title: 'DailyMed',
    subtitle: 'US National Library of Medicine',
    body: 'Authoritative drug label repository. The definitive source for prescribing information used in clinical practice.',
  },
  {
    title: 'RxNorm',
    subtitle: 'NIH Unified Drug Naming',
    body: 'Standardized drug names and identifiers that map brand names, generics, and INN variants to a single clinical record.',
  },
]

const chips = ['OpenFDA', 'DailyMed', 'RxNorm']

export default function Safety() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="safety" className="bg-[#F5F5F5] px-8 pt-24 pb-24" ref={ref}>
      <div className="max-w-[1080px] mx-auto">
        <motion.h2
          className="font-display font-medium text-[#171717] text-center leading-[1.05] tracking-[-0.02em] mb-16"
          style={{ fontSize: 72 }}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          Built on sources clinicians<br />already trust.
        </motion.h2>

        {/* Same grid layout as original Safety.tsx — image block replaced with text */}
        <div className="grid grid-cols-3 gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="bg-white rounded-2xl overflow-hidden border border-[#E5E5E5] shadow-sm"
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
            >
              <div className="p-5 pt-8">
                <h3
                  className="font-display font-bold leading-tight tracking-[-0.01em] mb-1"
                  style={{ fontSize: 28, color: '#4DA8FF' }}
                >
                  {card.title}
                </h3>
                <p className="text-[10px] font-semibold text-[#737373] uppercase tracking-[0.08em] mb-4">
                  {card.subtitle}
                </p>
                <p className="text-[13px] font-medium text-[#737373] leading-5">{card.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Chip strip */}
        <motion.div
          className="flex justify-center gap-2 mt-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {chips.map((chip) => (
            <span
              key={chip}
              className="text-[11px] font-medium text-[#737373] bg-white border border-[#E5E5E5] px-4 py-1.5 rounded-full"
            >
              {chip}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
