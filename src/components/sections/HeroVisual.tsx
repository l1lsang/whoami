import { useRef, type PointerEvent } from 'react'

export function HeroVisual() {
  const artRef = useRef<SVGSVGElement>(null)

  function followPointer(event: PointerEvent<SVGSVGElement>) {
    if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const bounds = event.currentTarget.getBoundingClientRect()
    artRef.current?.style.setProperty('--eye-x', ((event.clientX - bounds.left) / bounds.width - 0.5) * 14 + 'px')
    artRef.current?.style.setProperty('--eye-y', ((event.clientY - bounds.top) / bounds.height - 0.5) * 10 + 'px')
  }

  function resetEyes() {
    artRef.current?.style.setProperty('--eye-x', '0px')
    artRef.current?.style.setProperty('--eye-y', '0px')
  }

  return (
    <svg ref={artRef} viewBox="0 0 560 570" className="studio-mascot" aria-hidden="true"
      onPointerMove={followPointer} onPointerLeave={resetEyes}>
      <ellipse className="mascot-shadow" cx="282" cy="516" rx="161" ry="19" fill="#25231f" opacity=".12" />
      <g className="mascot-body" stroke="#25231f" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M207 369c-7 42-20 69-51 99m187-95c-2 49 13 72 40 94" fill="none" strokeWidth="17" />
        <path d="M172 453c-13-8-30-4-42 8l-27 25c-14 14-4 26 11 26h77c12 0 15-9 10-22z" fill="#f6f2e8" />
        <path d="M357 457c14-7 29-3 40 9l27 21c16 13 7 26-7 26h-76c-13 0-17-10-12-21z" fill="#f6f2e8" />
        <path d="M105 501h96m130 1h97M144 474l18 12m-7-24 18 12m197-3-15 12m26-3-15 12" fill="none" strokeWidth="3" />
        <path d="M130 245c-43-1-65 37-48 65 8 15 24 19 41 12m286-81c33-31 59-44 70-63" fill="none" strokeWidth="16" />
        <g className="mascot-hand" fill="#f6f2e8">
          <path d="M461 193c-11-9-13-25-9-36l10-30c3-10 14-7 13 3l-2 18 10-42c3-11 14-7 12 3l-5 31 13-25c5-8 14-2 10 7l-12 35c18-20 30-8 17 8l-24 29c-9 8-24 8-33-1z" />
          <path d="m472 158 16 10m-21-20 11 9" fill="none" strokeWidth="3" />
        </g>
        <g transform="rotate(-8 275 270)">
          <rect x="127" y="139" width="289" height="250" rx="39" fill="#ffaacb" />
          <path d="M152 151h236" stroke="#ffdaea" strokeWidth="6" />
          <rect x="150" y="166" width="242" height="175" rx="23" fill="#3155ed" />
          <g fill="#fffdf5">
            <ellipse cx="235" cy="239" rx="26" ry="39" />
            <ellipse cx="306" cy="239" rx="26" ry="39" />
          </g>
          <g className="mascot-pupils" fill="#25231f" stroke="none">
            <ellipse cx="244" cy="246" rx="12" ry="23" />
            <ellipse cx="315" cy="246" rx="12" ry="23" />
          </g>
          <path d="M252 295q24 25 47-2" fill="none" stroke="#fffdf5" strokeWidth="5" />
          <path d="m171 363 22 0m8 0h9" fill="none" strokeWidth="5" />
          <circle cx="365" cy="363" r="7" fill="#e9ef74" strokeWidth="3" />
        </g>
      </g>
      <g className="mascot-spark" fill="#ee654a" stroke="#25231f" strokeWidth="3" strokeLinejoin="round">
        <path d="m95 62 12 34 32-17-16 33 34 12-35 9 17 32-32-17-11 35-10-35-32 17 17-33-34-11 35-10-17-32 33 17z" />
      </g>
      <path d="m431 371 8 22 23 8-23 8-8 23-8-23-23-8 23-8z" fill="#3155ed" />
    </svg>
  )
}
