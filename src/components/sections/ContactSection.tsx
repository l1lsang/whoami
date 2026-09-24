import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Check, Copy, Download } from 'lucide-react'
import { portfolioConfig } from '../../config/portfolio'
import { Reveal } from '../ui/Reveal'

export function ContactSection() {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>(
    'idle',
  )
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  useEffect(() => () => clearTimeout(timer.current), [])
  async function copyEmail() {
    clearTimeout(timer.current)
    try {
      await navigator.clipboard.writeText(portfolioConfig.email)
      setCopyState('copied')
    } catch {
      setCopyState('error')
    }
    timer.current = setTimeout(() => setCopyState('idle'), 3000)
  }
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="section-container contact-section section-rule"
    >
      <Reveal className="section-grid section-heading">
        <p className="eyebrow">04 / CONTACT</p>
        <h2 id="contact-title">
          Let’s build
          <br className="mobile-break" /> something useful
          <span className="accent-dot">.</span>
        </h2>
      </Reveal>
      <Reveal className="contact-grid">
        <div>
          <h3>
            장경민
            <span className="status-dot" />
          </h3>
          <p>Frontend Developer</p>
          <p className="contact-message">
            사용자에게 필요한 다음 경험,
            <br />
            함께 이야기해요.
          </p>
        </div>
        <div className="contact-links">
          <a
            className="text-link"
            href={portfolioConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            github.com/l1lsang <ArrowUpRight size={16} />
          </a>
          <div className="email-row">
            <a
              className="text-link contact-email"
              href={'mailto:' + portfolioConfig.email}
            >
              {portfolioConfig.email} <ArrowUpRight size={16} />
            </a>
            <button
              type="button"
              className="copy-button"
              onClick={copyEmail}
              aria-label="이메일 주소 복사"
            >
              {copyState === 'copied' ? (
                <Check size={15} />
              ) : (
                <Copy size={15} />
              )}
            </button>
          </div>
          <div className="contact-download">
            <a
              className="text-link"
              href={portfolioConfig.resumePath}
              download={portfolioConfig.resumeFilename}
            >
              <Download size={14} /> 이력서 다운로드{' '}
              <span className="meta-label">PDF</span>
            </a>
            <span className="copy-feedback" role="status">
              {copyState === 'copied'
                ? '이메일을 복사했어요.'
                : copyState === 'error'
                  ? '이메일 주소를 직접 선택해 복사해 주세요.'
                  : ''}
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
