type SectionHeaderProps = {
  eyebrow: string
  title: string
  description?: string
  titleId?: string
}

export function SectionHeader({ eyebrow, title, description, titleId }: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
      <p className="text-sm font-semibold text-cyan-700">{eyebrow}</p>
      <h2 id={titleId} className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
      ) : null}
    </div>
  )
}
