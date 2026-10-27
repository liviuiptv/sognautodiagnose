export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0" aria-hidden="true">
        <rect width="32" height="32" rx="7" fill="#1a1d23" stroke="#2c313a" />
        <path
          d="M6 19h5l2.5-7 4 11 2.5-6H26"
          fill="none"
          stroke="#2f8cff"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-display text-[1.05rem] font-semibold tracking-tight">
        Sogn <span className="text-volt-bright">AutoDiagnose</span>
      </span>
    </span>
  )
}
