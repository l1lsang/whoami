type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  titleId: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  titleId,
  align = 'left',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'

  return (
    <div className={alignment}>
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-web">{eyebrow}</p>
      <h2 id={titleId} className="mt-4 font-display text-4xl font-medium leading-[1.12] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? <p className="mt-6 max-w-2xl text-base leading-8 text-muted">{description}</p> : null}
    </div>
  )
}
