import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

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

export default function PatientJourney() {
  const [activePhase, setActivePhase] = useState(0)
  const photoRefs = useRef<(HTMLDivElement | null)[]>([])
  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-80px' })

  useEffect(() => {
    const observers = photoRefs.current.map((el, i) => {
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActivePhase(i) },
        { threshold: 0.4 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((obs) => obs?.disconnect())
  }, [])

  return (
    <section className="bg-[#F5F5F5] flex items-start">
      {/* Left — sticky */}
      <div className="sticky top-0 h-screen flex flex-col justify-center pl-20 pr-8 py-16" style={{ width: '42%' }}>
        <motion.h2
          ref={headingRef}
          className="font-display font-bold leading-[1.05] tracking-[-0.02em] mb-12"
          style={{ fontSize: 50 }}
          initial={{ opacity: 0, y: 32 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[#737373]">From start to finish. </span>
          <span className="text-[#171717]">A calmer, more predictable day.</span>
        </motion.h2>

        <div key={activePhase} className="transition-all duration-300">
          <h3 className="font-display font-bold text-[#171717] mb-3 tracking-[-0.01em]" style={{ fontSize: 28 }}>
            {phases[activePhase].label}
          </h3>
          <p className="text-[15px] font-medium text-[#737373] leading-6">
            {phases[activePhase].body}
          </p>
        </div>
      </div>

      {/* Right — stacked full-height photos */}
      <div style={{ width: '58%' }}>
        {phases.map((phase, i) => (
          <div
            key={i}
            ref={(el) => { photoRefs.current[i] = el }}
            className="relative overflow-hidden"
            style={{ height: '100vh' }}
          >
            <img
              src={phase.photo}
              alt=""
              className="w-full h-full object-cover"
            />
            {phase.ui && (
              <motion.img
                src={phase.ui}
                alt=""
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute rounded-2xl shadow-2xl"
                style={{ bottom: 40, right: 40, width: 220 }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
