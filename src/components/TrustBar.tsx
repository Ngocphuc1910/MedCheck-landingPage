const logos = [
  { src: '/assets/openfda-logo.png', alt: 'OpenFDA', className: 'h-9 w-auto object-contain' },
  { src: '/assets/dailymed-logo.png', alt: 'DailyMed', className: 'h-7 w-auto object-contain' },
  { src: '/assets/rxnorm-logo.svg', alt: 'RxNorm', className: 'h-6 w-auto object-contain' },
]

export default function TrustBar() {
  return (
    <section className="w-full pb-6 bg-white border-b border-[#F0F0F0]">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-center text-[15px] font-medium text-[#737373] mb-6">
          Trusted data from leading clinical sources
        </p>
        <div className="flex flex-wrap justify-center items-end gap-8 md:gap-14">
          {logos.map((logo) => (
            <div key={logo.alt} className="h-8 flex items-center">
              <img src={logo.src} alt={logo.alt} className={logo.className} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
