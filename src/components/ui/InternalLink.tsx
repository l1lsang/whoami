import type { MouseEvent, ReactNode } from 'react'
import { navigateTo } from '../../lib/navigation'

type InternalLinkProps = {
  href: string
  children: ReactNode
  className?: string
  ariaLabel?: string
  ariaCurrent?: 'page' | 'location'
  onNavigate?: () => void
}

export function InternalLink({ href, children, className, ariaLabel, ariaCurrent, onNavigate }: InternalLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const opensElsewhere = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey

    if (event.button !== 0 || opensElsewhere) {
      return
    }

    event.preventDefault()
    navigateTo(href)
    onNavigate?.()
  }

  return (
    <a href={href} className={className} aria-label={ariaLabel} aria-current={ariaCurrent} onClick={handleClick}>
      {children}
    </a>
  )
}
