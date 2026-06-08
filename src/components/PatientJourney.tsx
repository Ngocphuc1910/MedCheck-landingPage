import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const phases = [
  {
    label: 'Before the visit.',
    body: 'Mindoo asks the key questions: symptoms, history, medications. Patients answer in their own language. Clinicians walk in prepared. Front desks skip the morning intake rush.',
    photo: '/images/journey-before-photo.png',
    ui: null,
  },
  {
    label: 'During the day.',
    body: 'Mindoo handles routine calls, simple questions, and scheduling. Patients get answers faster. Staff stay focused on the people in front of them.',
    photo: '/images/journey-during-photo.png',
    ui: '/images/journey-during-ui.png',
  },
  {
    label: 'After the visit.',
    body: 'Mindoo checks in on recovery, medication, and follow-ups. It flags anything that needs attention. Care continues without gaps.',
    photo: '/images/journey-after-photo.png',
    ui: '/images/journey-after-ui.png',
  },
]

function PhaseRow({ phase, index }: { phase: (typeof phases)[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reversed = index % 2 === 1

  return (
    <div
      ref={ref}
      className={`flex gap-16 items-center ${reversed ? 'flex-row-reverse' : ''}`}
    >
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: reversed ? 32 : -32 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h3 className="text-[36px] font-medium text-[#171717] leading-[42px] tracking-[-0.044em] mb-4">
          {phase.label}
        </h3>
        <p className="text-[15px] font-medium text-[#737373] leading-6">{phase.body}</p>
      </motion.div>

      <motion.div
        className="flex-1 relative rounded-2xl overflow-hidden"
        style={{ height: 380 }}
        initial={{ opacity: 0, x: reversed ? -32 : 32 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <img
          src={phase.photo}
          alt=""
          className="w-full h-full object-cover"
        />
        {phase.ui && (
          <img
            src={phase.ui}
            alt=""
            className="absolute bottom-4 right-4 w-44 rounded-xl shadow-xl border border-white/20"
          />
        )}
      </motion.div>
    </div>
  )
}

export default function PatientJourney() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-gradient-to-b from-[#F5F5F5] to-white px-20 py-32">
      <div className="max-w-[1280px] mx-auto">
        <motion.h2
          ref={ref}
          className="text-[58px] font-medium leading-[64px] tracking-[-0.044em] mb-24 max-w-2xl"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[#737373]">From start to finish. </span>
          <span className="text-[#171717]">A calmer, more predictable day.</span>
        </motion.h2>

        <div className="space-y-28">
          {phases.map((phase, i) => (
            <PhaseRow key={i} phase={phase} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
