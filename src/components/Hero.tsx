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

export default function Hero() {
  return (
    /* Outer wrapper mirrors footer: bg-white + padding around the card */
    <section id="hero" className="bg-white px-6 pb-3 pt-[40px]">
      {/* Inner card — rounded, fills remaining viewport height */}
      <div
        className="rounded-3xl relative overflow-hidden flex flex-col items-center justify-center"
        style={{ height: 'calc(100dvh - 55px)' }}
      >
        {/* Background image */}
        <picture className="absolute inset-0 w-full h-full">
          <source srcSet="/mascot/hero3.webp" type="image/webp" />
          <img
            src="/mascot/hero3.png"
            alt=""
            className="w-full h-full object-cover object-center"
            fetchPriority="high"
            decoding="async"
          />
        </picture>

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
              href="mailto:hello@phario.app"
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
