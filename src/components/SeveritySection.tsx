import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const levels = [
  {
    color: '#FF3B30',
    badge: 'MAJOR',
    action: 'REVIEW BEFORE CONTINUING',
    pair: 'Warfarin + Amiodarone',
    mechanism:
      'Amiodarone inhibits CYP2C9. Warfarin exposure increases significantly, raising the risk of serious bleeding.',
    chip: 'Dose adjustment · Close INR monitoring',
  },
  {
    color: '#FF9500',
    badge: 'MODERATE',
    action: 'MODIFY / MONITOR',
    pair: 'Amiodarone + Ibuprofen',
    mechanism:
      'Combined renal impairment risk. NSAIDs reduce renal perfusion, a heightened concern in cardiac patients.',
    chip: 'Review NSAID exposure · Monitor renal function',
  },
  {
    color: '#34C759',
    badge: 'MINOR',
    action: 'MONITOR CLOSELY',
    pair: 'Aspirin + Antacids',
    mechanism:
      'Antacids may reduce aspirin absorption in some formulations. Low clinical significance in most patients.',
    chip: 'Routine monitoring · No dose change required',
  },
]

export default function SeveritySection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="severity" className="bg-[#0A0A0A] px-5 md:px-8 pt-24 pb-28" ref={ref}>
      <div className="max-w-[1080px] mx-auto">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.15em] text-[#555] mb-5">
            Clinical Severity Levels
          </span>
          <h2 className="font-display font-medium text-white leading-[1.05] tracking-[-0.02em] text-[36px] md:text-[52px] lg:text-[62px]">
            Three levels of urgency.
            <br className="hidden md:block" /> Every one actionable.
          </h2>
        </motion.div>

        <motion.p
          className="text-center text-[15px] text-[#888] leading-6 mb-16 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          MedCheck doesn&apos;t just flag interactions. It gives you a clear clinical action category.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {levels.map((level, i) => (
            <motion.div
              key={level.badge}
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: '#141414',
                boxShadow: `0 0 0 1px rgba(255,255,255,0.07), 0 24px 64px ${level.color}20`,
              }}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
            >
              {/* Top gradient glow line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{
                  background: `linear-gradient(90deg, transparent, ${level.color}, transparent)`,
                }}
              />
              {/* Corner ambient glow */}
              <div
                className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at top right, ${level.color}, transparent 70%)`,
                }}
              />

              <div className="p-6 pt-7">
                <div className="flex items-center gap-2 mb-5">
                  <span
                    className="text-[10px] font-bold text-white px-2.5 py-1 rounded-full"
                    style={{ background: level.color }}
                  >
                    {level.badge}
                  </span>
                  <span
                    className="text-[10px] font-semibold uppercase tracking-[0.08em]"
                    style={{ color: level.color }}
                  >
                    {level.action}
                  </span>
                </div>

                <p className="font-display font-bold text-white leading-tight mb-3 text-[20px]">
                  {level.pair}
                </p>

                <p className="text-[13px] text-[#888] leading-[1.6] mb-6">{level.mechanism}</p>

                <div
                  className="text-[11px] font-semibold px-3 py-2.5 rounded-xl border"
                  style={{
                    background: `${level.color}10`,
                    color: level.color,
                    borderColor: `${level.color}25`,
                  }}
                >
                  {level.chip}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-[10px] text-[#444] uppercase tracking-[0.12em] text-center mt-14"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          5 drugs = 10 pairs · 10 drugs = 45 pairs · MedCheck checks all of them simultaneously
        </motion.p>
      </div>
    </section>
  )
}
