export default function Nav() {
  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="w-full max-w-[880px] bg-white border border-[#E5E5E5] rounded-2xl h-[50px] flex items-center justify-between px-4 shadow-[0px_2px_8px_rgba(99,99,99,0.1)]">
        <img
          src="/images/logo-nav.svg"
          alt="Mindoo"
          className="h-6 w-[124px] object-contain object-left"
        />

        <div className="flex items-center gap-4">
          {(['Problem', 'Solution', 'Agents', 'Safety'] as const).map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[13px] font-medium text-[#171717] hover:text-[#737373] transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <button className="text-[13px] font-medium text-[#0D0D0D] border border-[#E5E5E5] rounded-xl px-4 py-1.5 hover:bg-[#F5F5F5] transition-colors">
            Sign in
          </button>
          <button className="text-[13px] font-medium text-white bg-[#0D0D0D] rounded-xl px-4 py-1.5 hover:bg-[#404040] transition-colors">
            Book a demo
          </button>
        </div>
      </nav>
    </div>
  )
}
