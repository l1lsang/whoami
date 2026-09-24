import { ArrowUp } from 'lucide-react'
import { portfolioConfig } from '../../config/portfolio'
import { InternalLink } from '../ui/InternalLink'

export function Footer() {
  return (
    <footer className="section-container site-footer">
      <p>{portfolioConfig.name}</p>
      <InternalLink
        href="/#home"
        className="back-to-top"
        ariaLabel="맨 위로 이동"
      >
        <ArrowUp size={17} />
      </InternalLink>
    </footer>
  )
}
