import { useState } from 'react'
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  CheckCheck,
  Image,
  MapPin,
  MessageSquare,
  Plus,
  Search,
  Sparkles,
} from 'lucide-react'

const places = [
  {
    name: '오후의 서울숲',
    area: '성수동, 서울',
    note: '잠깐 멈춰도 좋은 곳.',
    x: '64%',
    y: '48%',
    kind: 'forest',
  },
  {
    name: '작은 카페의 발견',
    area: '연남동, 서울',
    note: '다시 오고 싶은 오후.',
    x: '28%',
    y: '20%',
    kind: 'cafe',
  },
  {
    name: '한강을 걷는 시간',
    area: '여의도, 서울',
    note: '오늘의 노을을 기록하다.',
    x: '82%',
    y: '72%',
    kind: 'river',
  },
]

export function SpotitPreview() {
  const [selected, setSelected] = useState(0)
  const place = places[selected]
  return (
    <div className="product-preview spotit-preview">
      <div className="preview-toolbar">
        <div className="window-dots">
          <i />
          <i />
          <i />
        </div>
        <span>spotit / places & memories</span>
        <span className="preview-live">
          <i /> INTERACTIVE
        </span>
      </div>
      <div className="spotit-app">
        <div className="spotit-appbar">
          <strong>
            spotit<span>↗</span>
          </strong>
          <span>
            <Search size={12} /> 나만의 장소를 발견하세요
          </span>
          <div className="preview-avatar">J</div>
        </div>
        <div className="map-surface">
          <svg
            className="city-map"
            viewBox="0 0 700 410"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <rect width="700" height="410" fill="#e9eee4" />
            <g fill="#dce5d6" stroke="#f8faf5" strokeWidth="8">
              <path d="M-20 20h160v100H-20zM160-20h135v140H160zM320-20h155v140H320zM500-20h180v140H500zM0 148h140v90H0zM165 148h130v90H165zM320 148h155v90H320zM500 145h195v93H500zM0 290h140v135H0zM165 290h130v140H165zM320 290h155v140H320zM500 290h200v140H500z" />
            </g>
            <path
              d="M-50 268C115 190 188 306 329 253S531 206 750 300"
              fill="none"
              stroke="#c3d7d5"
              strokeWidth="42"
            />
            <path
              d="M100-30 380 450M470-30 230 450"
              stroke="#fafbf7"
              strokeWidth="13"
            />
            <path
              d="M100-30 380 450M470-30 230 450"
              stroke="#d4dccf"
              strokeWidth="1"
              strokeDasharray="4 6"
            />
            <ellipse cx="466" cy="157" rx="65" ry="48" fill="#cbdcbe" />
            <g fill="#b9cda9">
              <circle cx="451" cy="143" r="17" />
              <circle cx="478" cy="164" r="22" />
              <circle cx="437" cy="170" r="13" />
            </g>
            <path
              className="map-route"
              d="M230 130Q360 70 448 200T315 298"
              fill="none"
              stroke="#668363"
              strokeWidth="2"
              strokeDasharray="5 6"
            />
          </svg>
          <div className="map-label label-seoul">SEOUL</div>
          <div className="map-label label-river">한강</div>
          {places.map((item, index) => (
            <button
              key={item.name}
              type="button"
              className={'map-pin ' + (selected === index ? 'is-selected' : '')}
              style={{ left: item.x, top: item.y }}
              aria-label={item.name + ' 기록 보기'}
              aria-pressed={selected === index}
              onClick={() => setSelected(index)}
            >
              <MapPin size={19} fill="currentColor" />
              <span>{index + 1}</span>
            </button>
          ))}
          <div className="place-card" key={place.name} aria-live="polite">
            <div className={'place-art ' + place.kind} aria-hidden="true">
              <span />
              <i />
              <b />
            </div>
            <div className="place-card-copy">
              <span>
                <MapPin size={10} /> {place.area}
              </span>
              <strong>{place.name}</strong>
              <p>{place.note}</p>
            </div>
          </div>
          <div className="map-counter">
            <span className="status-dot" /> 3 places, countless memories.
          </div>
          <div className="map-zoom" aria-hidden="true">
            <Plus size={17} />
            <span>−</span>
          </div>
        </div>
      </div>
      <div className="preview-caption">
        <span>MAKE EVERY PLACE A MEMORY.</span>
        <span>
          핀을 눌러 탐색해 보세요 <ArrowUpRight size={12} />
        </span>
      </div>
    </div>
  )
}

export function GwichanaPreview() {
  const [done, setDone] = useState(false)
  return (
    <div className="product-preview gwichana-preview">
      <div className="preview-toolbar">
        <div className="window-dots">
          <i />
          <i />
          <i />
        </div>
        <span>귀차나 / less effort, more life</span>
        <span className="preview-live">
          <i /> INTERACTIVE
        </span>
      </div>
      <div className="ai-scene">
        <div className="ai-orbit" aria-hidden="true" />
        <div className="floating-input input-text">
          <MessageSquare size={15} />
          <span>문자 한 통</span>
        </div>
        <div className="floating-input input-image">
          <Image size={15} />
          <span>이미지 한 장</span>
        </div>
        <div className="floating-input input-link">
          <ArrowUpRight size={15} />
          <span>링크 하나</span>
        </div>
        <div className="ai-phone">
          <div className="phone-status">
            <span>9:41</span>
            <span>● ▰</span>
          </div>
          <div className="ai-greeting">
            <span>일상은 조금 더 가볍게</span>
            <strong>
              오늘도, 귀차나
              <Sparkles size={18} />
            </strong>
          </div>
          <div className="ai-message">
            <Sparkles size={16} />
            <p>
              보내주신 정보를 정리했어요.
              <br />
              이제 하나씩 해볼까요?
            </p>
          </div>
          <div className={'action-card ' + (done ? 'is-done' : '')}>
            <div className="action-type">
              <CalendarDays size={13} /> 일정<span>AI가 정리했어요</span>
            </div>
            <strong>프로젝트 미팅 준비하기</strong>
            <p>내일 오후 2:00 · 온라인</p>
            <button
              type="button"
              aria-pressed={done}
              onClick={() => setDone((value) => !value)}
            >
              {done ? <CheckCheck size={15} /> : <Check size={15} />}
              {done ? '완료했어요! 다시 보기' : '준비 완료하기'}
            </button>
          </div>
          <p className="ai-complete" aria-live="polite">
            {done
              ? '하나 끝! 오늘의 일상이 더 가벼워졌어요.'
              : '정리보다 중요한 일에 집중하세요.'}
          </p>
          <div className="ai-input">
            <span>무엇이든 보내주세요</span>
            <Plus size={15} />
          </div>
        </div>
        <div
          className={'completion-badge ' + (done ? 'show' : '')}
          aria-hidden="true"
        >
          <CheckCheck size={20} /> All done!
        </div>
      </div>
      <div className="preview-caption">
        <span>INBOX → AI → ACTION → DONE.</span>
        <span>
          행동 카드를 완료해 보세요 <ArrowUpRight size={12} />
        </span>
      </div>
    </div>
  )
}
