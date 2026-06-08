import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' as const },
})

const h1Container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
}

const wordVariant = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
}

const H1_TEXT = 'Check interactions before you prescribe.'

const cardSlide = (x: number, delay: number) => ({
  initial: { opacity: 0, x, y: 16 },
  animate: { opacity: 1, x: 0, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' as const },
})

export default function Hero() {
  return (
    /* Outer wrapper mirrors footer: bg-white + padding around the card */
    <section id="hero" className="bg-white px-6 pb-3 pt-[40px]">
      {/* Inner card — rounded, fills remaining viewport height */}
      <div
        className="rounded-3xl relative overflow-hidden flex flex-col items-center justify-center"
        style={{ height: 'calc(100dvh - 55px)' }}
      >
        {/* Background image — same technique as footer */}
        <img
          src="/mascot/hero3.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Subtle dark overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.50) 55%, rgba(0,0,0,0.15) 100%)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center px-4 w-full pb-20">
          {/* H1 — word-by-word reveal */}
          <motion.h1
            variants={h1Container}
            initial="hidden"
            animate="visible"
            className="font-display text-[88px] font-medium text-white text-center leading-[1.0] tracking-[-0.02em] mb-6 max-w-3xl"
            style={{ textShadow: '0 2px 24px rgba(0,0,0,0.35), 0 1px 4px rgba(0,0,0,0.25)' }}
          >
            {H1_TEXT.split(' ').map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariant}
                style={{ display: 'inline-block', marginRight: '0.28em' }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            {...fadeUp(0.65)}
            className="text-[16px] font-medium text-white/85 text-center leading-7 mb-10 max-w-md"
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.4)' }}
          >
            Scan a prescription or search drug names. Add patient context. Get severity-graded
            interaction alerts in under 10 seconds, built on FDA data.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div {...fadeUp(0.3)} className="flex items-center gap-2">
            <a
              href="mailto:hello@medcheck.app"
              className="text-[13px] font-medium text-white bg-[#0D0D0D]/80 backdrop-blur-sm rounded-xl px-5 py-2.5 hover:bg-[#0D0D0D] transition-colors"
            >
              Get early access
            </a>
            <a
              href="#how-it-works"
              className="text-[13px] font-medium text-[#171717] bg-white/90 backdrop-blur-sm border border-white/30 rounded-xl px-5 py-2.5 hover:bg-white transition-colors"
            >
              See how it works
            </a>
          </motion.div>
        </div>

        {/* Three floating cards — hidden for now */}
        <div className="w-full max-w-6xl grid grid-cols-3 gap-4 items-start hidden">

          {/* Left — MAJOR */}
          <motion.div {...cardSlide(-40, 0.45)}>
            <div
              className="bg-white/95 backdrop-blur-md rounded-3xl p-6"
              style={{
                boxShadow: '0 8px 40px rgba(0,0,0,0.15), 0 1px 4px rgba(0,0,0,0.08)',
                border: '1px solid rgba(255,255,255,0.6)',
              }}
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-7 h-7 rounded-full bg-[#FF3B30] flex items-center justify-center flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 2v4M6 8.5v.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-[#171717] leading-none">Drug Interaction Found</p>
                  <p className="text-[11px] text-[#999] mt-0.5">MedCheck · Just now</p>
                </div>
              </div>
              <p className="text-[18px] font-bold text-[#171717] leading-tight mb-2">Warfarin + Amiodarone</p>
              <p className="text-[13px] text-[#737373] leading-[1.6] mb-5">
                Amiodarone inhibits CYP2C9 — warfarin exposure increases significantly. Serious bleeding risk in anticoagulated patients.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-white bg-[#FF3B30] px-3 py-1 rounded-full">MAJOR</span>
                <span className="text-[12px] font-semibold text-[#FF3B30]">Dose adjustment required</span>
              </div>
            </div>
          </motion.div>

          {/* Center — MODERATE */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: 'easeOut' }}
            className="mt-10"
          >
            <div
              className="bg-white/95 backdrop-blur-md rounded-3xl p-6"
              style={{
                boxShadow: '0 8px 40px rgba(0,0,0,0.15), 0 1px 4px rgba(0,0,0,0.08)',
                border: '1px solid rgba(255,255,255,0.6)',
              }}
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-7 h-7 rounded-full bg-[#FF9500] flex items-center justify-center flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 3v3.5M6 8.5v.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-[#171717] leading-none">Caution Advised</p>
                  <p className="text-[11px] text-[#999] mt-0.5">MedCheck · 2.1 seconds</p>
                </div>
              </div>
              <p className="text-[18px] font-bold text-[#171717] leading-tight mb-2">Metformin + Contrast Media</p>
              <p className="text-[13px] text-[#737373] leading-[1.6] mb-5">
                Concurrent use may increase lactic acidosis risk in patients with renal impairment. Temporary hold recommended.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-white bg-[#FF9500] px-3 py-1 rounded-full">MODERATE</span>
                <span className="text-[12px] font-semibold text-[#FF9500]">Monitor renal function</span>
              </div>
            </div>
          </motion.div>

          {/* Right — ALL CLEAR */}
          <motion.div {...cardSlide(40, 0.65)}>
            <div
              className="bg-white/95 backdrop-blur-md rounded-3xl p-6"
              style={{
                boxShadow: '0 8px 40px rgba(0,0,0,0.15), 0 1px 4px rgba(0,0,0,0.08)',
                border: '1px solid rgba(255,255,255,0.6)',
              }}
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-7 h-7 rounded-full bg-[#34C759] flex items-center justify-center flex-shrink-0">
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                    <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-[#171717] leading-none">Prescription Cleared</p>
                  <p className="text-[11px] text-[#999] mt-0.5">MedCheck · 4.2 seconds</p>
                </div>
              </div>
              <p className="text-[18px] font-bold text-[#171717] leading-tight mb-2">Aspirin + Atorvastatin</p>
              <p className="text-[13px] text-[#737373] leading-[1.6] mb-5">
                No clinically significant interactions detected for this patient profile. Safe to proceed.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-white bg-[#34C759] px-3 py-1 rounded-full">ALL CLEAR</span>
                <span className="text-[12px] font-semibold text-[#34C759]">Safe to prescribe</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Trust bar — pinned to bottom of card */}
        <div
          className="absolute bottom-0 left-0 right-0 z-10 pb-5 pt-8 flex flex-col items-center"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.22))' }}
        >
          <p className="text-[11px] font-medium text-white/60 uppercase tracking-[0.1em] mb-3">
            Trusted data from
          </p>
          <div className="flex items-center gap-4">
            <img src="/assets/openfda-wordmark.svg" alt="OpenFDA" className="h-12 object-contain" style={{ width: 88, filter: 'brightness(0) invert(1)', opacity: 0.65 }} />
            <img src="/assets/dailymed-logo.png" alt="DailyMed" className="h-7 w-auto object-contain" style={{ filter: 'brightness(0) invert(1)', opacity: 0.65 }} />
            <img src="/assets/rxnorm-logo.svg" alt="RxNorm" className="h-7 w-auto object-contain" style={{ filter: 'brightness(0) invert(1)', opacity: 0.65 }} />
          </div>
        </div>
      </div>
    </section>
  )
}
