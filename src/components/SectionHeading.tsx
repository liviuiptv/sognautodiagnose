export function SectionHeading({
  eyebrow,
  title,
  intro,
  center = false,
}: {
  eyebrow: string
  title: string
  intro?: string
  center?: boolean
}) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-volt-bright">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-mist sm:text-lg">{intro}</p>}
    </div>
  )
}
