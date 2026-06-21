import { motion, useInView } from 'framer-motion'
import { Pill, Languages, UserRound, Zap, ShieldAlert, Stethoscope } from 'lucide-react'
import { useRef } from 'react'

const features = [
  { label: 'Works with any drug list', color: '#3B82F6', Icon: Pill },
  { label: 'Vietnamese prescription support', color: '#8B5CF6', Icon: Languages },
  { label: 'Patient-aware recommendations', color: '#10B981', Icon: UserRound },
  { label: 'Results in under 10 seconds', color: '#F59E0B', Icon: Zap },
  { label: 'Major · Moderate · Minor severity', color: '#EF4444', Icon: ShieldAlert },
  { label: 'Supports clinical judgment', color: '#06B6D4', Icon: Stethoscope },
]

const interactions = [
  { pair: 'Warfarin + Amiodarone', level: 'MAJOR', color: '#FF3B30' },
  { pair: 'Lisinopril + Spironolactone', level: 'MAJOR', color: '#FF3B30' },
  { pair: 'Amiodarone + Ibuprofen', level: 'MOD', color: '#FF9500' },
  { pair: 'Atorvastatin + Clarithromycin', level: 'MOD', color: '#FF9500' },
  { pair: 'Aspirin + Antacids', level: 'MINOR', color: '#34C759' },
]

export default function DesignedToFit() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-white px-5 md:px-8 pt-24 pb-28" ref={ref}>
      <div className="max-w-[1080px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: copy + feature checklist */}
          <div>
            <motion.h2
              className="font-display font-medium text-[#0A0A0A] leading-[1.05] tracking-[-0.02em] mb-5 text-[36px] md:text-[48px] lg:text-[54px]"
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.05 }}
            >
              Built for the way you actually prescribe.
            </motion.h2>

            <motion.p
              className="text-[15px] text-[#737373] leading-7 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.12 }}
            >
              Fast enough to use on every prescription, every time. Supports clinical judgment without replacing it.
            </motion.p>

            {/* Single wrapper animation instead of per-item motion */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              {features.map((f) => (
                <div key={f.label} className="flex items-center gap-3">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: `${f.color}15`, border: `1.5px solid ${f.color}30` }}
                  >
                    <f.Icon size={14} color={f.color} strokeWidth={2} />
                  </div>
                  <span className="text-[14px] font-medium text-[#2A2A2A]">{f.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: app preview card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              className="bg-white rounded-3xl p-6 border border-[#EBEBEB]"
              style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.07), 0 4px 16px rgba(0,0,0,0.04)' }}
            >
              {/* Window chrome dots */}
              <div className="flex items-center gap-1.5 mb-5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                <span className="ml-auto text-[10px] text-[#BBBBBB] font-medium">
                  Phario · Interaction Check
                </span>
              </div>

              {/* Alert header */}
              <div
                className="rounded-xl px-4 py-3 mb-4 flex items-center justify-between"
                style={{ background: 'rgba(255, 59, 48, 0.05)', border: '1px solid rgba(255, 59, 48, 0.15)' }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FF3B30]" />
                  <span className="text-[12px] font-bold text-[#FF3B30]">HIGH ALERT</span>
                </div>
                <span className="text-[11px] text-[#BBBBBB]">5 interactions found</span>
              </div>

              {/* Interaction rows — single wrapper instead of per-row motion */}
              <motion.div
                className="space-y-2.5 mb-5"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                {interactions.map((row) => (
                  <div
                    key={row.pair}
                    className="flex items-center justify-between gap-3 bg-[#F7F7F7] rounded-xl px-4 py-3 border border-[#EFEFEF]"
                  >
                    <span className="text-[13px] font-medium text-[#0A0A0A] leading-4">{row.pair}</span>
                    <span
                      className="flex-shrink-0 text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
                      style={{ background: row.color }}
                    >
                      {row.level}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* Summary bar */}
              <div className="bg-[#F7F7F7] rounded-xl px-4 py-3 border border-[#EFEFEF]">
                <p className="text-[11px] text-[#BBBBBB] text-center tracking-wide">
                  All 45 drug pairs checked in{' '}
                  <span className="text-[#34C759] font-semibold">4.2 seconds</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
