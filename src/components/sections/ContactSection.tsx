import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Check, Copy, Download } from 'lucide-react'
import { portfolioConfig } from '../../config/portfolio'
import { Reveal } from '../ui/Reveal'

export function ContactSection() {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>('idle')
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
    <section id="contact" aria-labelledby="contact-title" className="contact-section">
      <Reveal className="section-container">
        <div className="contact-top">
          <h2 id="contact-title">LET’S<br />MAKE IT.</h2>
          <span className="contact-spark" aria-hidden="true">✳</span>
        </div>
        <p className="contact-message">좋은 아이디어가 있나요?<br />함께 다음 경험을 만들어봐요.</p>
        <div className="contact-bottom">
          <div className="email-row">
            <a className="text-link contact-email" href={'mailto:' + portfolioConfig.email}>
              {portfolioConfig.email} <ArrowUpRight size={25} aria-hidden="true" />
            </a>
            <button type="button" className="copy-button" onClick={copyEmail} aria-label="이메일 주소 복사">
              {copyState === 'copied' ? <Check size={19} aria-hidden="true" /> : <Copy size={19} aria-hidden="true" />}
            </button>
          </div>
          <div className="contact-links">
            <a className="text-link" href={portfolioConfig.githubUrl} target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight size={20} aria-hidden="true" />
            </a>
            <a className="text-link" href={portfolioConfig.resumePath} download={portfolioConfig.resumeFilename}>
              이력서 <Download size={19} aria-hidden="true" />
            </a>
          </div>
        </div>
        <p className="copy-feedback" role="status">
          {copyState === 'copied' ? '이메일을 복사했어요.' : copyState === 'error' ? '이메일 주소를 직접 선택해 복사해 주세요.' : ''}
        </p>
      </Reveal>
    </section>
  )
}
