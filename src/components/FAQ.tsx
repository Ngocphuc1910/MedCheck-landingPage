import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// Layout cloned from make10000hours FAQSection.tsx — border-bottom dividers, chevron icon
const faqData = [
  {
    question: 'What does MedCheck actually check?',
    answer: 'Every pair combination across your selected drug list, returned as Major (avoid), Moderate (monitor), or Minor (routine monitoring) with a specific action step. Up to 10 drugs simultaneously. Results in under 10 seconds.',
  },
  {
    question: 'What data sources does it use?',
    answer: 'Interaction logic draws from OpenFDA drug labeling, DailyMed, and RxNorm. All official government sources, combined with curated clinical interaction records.',
  },
  {
    question: 'Does it support Vietnamese drug names?',
    answer: 'Yes. MedCheck maps Vietnamese INN variants and generic names to standardized identifiers (esomeprazol to esomeprazole, paracetamol to acetaminophen). Prescription image parsing handles Vietnamese and English handwriting.',
  },
  {
    question: 'Does it replace clinical judgment?',
    answer: 'No. MedCheck is clinical decision support. It surfaces interaction information and personalized context so you can decide. It does not decide for you. You remain the clinician.',
  },
  {
    question: 'What happens to patient data I enter?',
    answer: "Patient context fields (age, renal function, conditions) are used for the current check session only and not retained. Prescription images processed via AI are subject to the AI provider's data handling policy. Avoid entering unnecessary patient identifiers.",
  },
  {
    question: 'Is there a hospital or department license?',
    answer: 'Yes. Hospital and department B2B licensing is available. Contact us for volume pricing and clinical pharmacy integration options.',
  },
]

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set())

  const handleClick = (index: number) => {
    setOpenIndexes((current) => {
      const next = new Set(current)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  return (
    <section id="faq" className="bg-white px-8 pt-24 pb-24" ref={ref}>
      <div className="max-w-[1040px] mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="font-display font-medium text-[#171717] leading-[1.05] tracking-[-0.02em]"
            style={{ fontSize: 72 }}
          >
            Questions clinicians ask.
          </h2>
          <p className="text-[#737373] mt-4 text-[15px] font-medium leading-6">
            About the data, the safety, and how it works in practice.
          </p>
        </motion.div>

        {/* FAQ items — border-bottom divider pattern from make10000hours */}
        <motion.div
          className="border-t border-[#E5E5E5]"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-[#E5E5E5]">
              <button
                className="w-full py-5 md:py-6 flex items-center justify-between text-left hover:bg-[#FAFAFA] transition-colors duration-200 px-1"
                onClick={() => handleClick(index)}
              >
                <span className="font-display font-bold text-[#171717] pr-4 text-[16px] md:text-[18px] leading-snug">
                  {item.question}
                </span>
                <span className="flex-shrink-0 text-[#737373]">
                  <ChevronIcon isOpen={openIndexes.has(index)} />
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndexes.has(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-[#737373] pb-5 md:pb-6 px-1 text-[14px] md:text-[15px] leading-6 font-medium">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
