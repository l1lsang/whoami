import { useEffect, useRef, useState } from 'react'
import { InlineStage } from '../components/shapes/InlineStage'
import { profile } from '../data/profile'

type CopyState = 'idle' | 'copied' | 'error'

const NOTE: Record<CopyState, string> = {
  idle: '',
  copied: '이메일 주소를 복사했어요.',
  error: '복사하지 못했어요. 주소를 직접 선택해 복사해 주세요.',
}

function Contact() {
  const [copyState, setCopyState] = useState<CopyState>('idle')
  const timer = useRef<number | undefined>(undefined)
  useEffect(() => () => window.clearTimeout(timer.current), [])

  async function copyEmail() {
    window.clearTimeout(timer.current)
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopyState('copied')
    } catch {
      setCopyState('error')
    }
    timer.current = window.setTimeout(() => setCopyState('idle'), 3000)
  }

  return (
    <section id="contact" data-step="contact" className="step contact" aria-labelledby="contact-title">
      <h2 id="contact-title">같이 만들어요</h2>
      <InlineStage formation="contact" />
      <p className="lead">좋은 아이디어가 있다면, 흩어진 조각부터 함께 맞춰 봐요.</p>

      <div className="email-field">
        <a className="email-link" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <button type="button" className="copy-button" onClick={copyEmail}>
          {copyState === 'copied' ? '복사됨' : '복사'}
        </button>
      </div>
      <p className="field-note" role="status">
        {NOTE[copyState]}
      </p>

      <dl className="contact-rows">
        <div>
          <dt>GitHub</dt>
          <dd>
            <a className="text-link" href={profile.githubUrl} target="_blank" rel="noreferrer">
              github.com/l1lsang
            </a>
          </dd>
        </div>
        <div>
          <dt>이력서</dt>
          <dd>
            <a className="text-link" href={profile.resumePath} download={profile.resumeFilename}>
              PDF 내려받기
            </a>
          </dd>
        </div>
      </dl>
    </section>
  )
}

export default Contact
