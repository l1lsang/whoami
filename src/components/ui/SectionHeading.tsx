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
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-web">{eyebrow}</p>
      <h2 id={titleId} className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] text-ink sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-5 text-base leading-8 text-muted sm:text-lg">{description}</p> : null}
    </div>
  )
}
