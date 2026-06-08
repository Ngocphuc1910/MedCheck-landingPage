export default function AnnouncementBar() {
  return (
    <div>
      <div className="h-1 bg-gradient-to-r from-[#0059FF] via-[#4AC957] to-[#E595C4]" />
      <div className="bg-[#F5F5F5] px-4 py-3 flex justify-center items-center gap-2">
        <p className="text-[11px] font-medium text-[#404040]">
          Mindoo raises €5M to build AI agents that handle intake, patient access and follow-up for healthcare teams.
        </p>
        <a
          href="#"
          className="text-[11px] font-medium text-[#737373] flex items-center gap-1 hover:underline whitespace-nowrap"
        >
          Read more
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="inline-block">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="#737373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  )
}
