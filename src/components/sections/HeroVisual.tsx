import { Box, Braces, Gamepad2, Globe2, MapPin, MousePointer2 } from 'lucide-react'

const codeLines = [
  { key: 'public', value: 'public void BuildExperience() {' },
  { key: 'game', value: '  game.Interact(player);' },
  { key: 'web', value: '  web.Render(service);' },
  { key: 'end', value: '}' },
]

export function HeroVisual() {
  return (
    <div className="relative mx-auto min-h-[440px] w-full max-w-[620px] lg:min-h-[540px]" aria-hidden="true">
      <div className="absolute inset-x-[7%] top-[10%] h-[76%] border border-white/[0.06] bg-white/[0.015]" />
      <div className="absolute left-[12%] top-[18%] h-px w-[70%] bg-gradient-to-r from-unity/60 via-white/10 to-web/60" />
      <div className="absolute left-[49%] top-[18%] h-[64%] w-px bg-white/[0.06]" />

      <div className="hero-drift absolute left-0 top-[4%] z-20 w-[68%] border border-unity/35 bg-[#11141c] shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
        <div className="flex h-9 items-center justify-between border-b border-white/8 px-3">
          <div className="flex items-center gap-2 text-[10px] text-muted">
            <Gamepad2 size={13} className="text-unity" />
            Game View
          </div>
          <div className="flex gap-1.5">
            <span className="size-1.5 rounded-full bg-white/15" />
            <span className="size-1.5 rounded-full bg-white/15" />
            <span className="size-1.5 rounded-full bg-unity/70" />
          </div>
        </div>
        <div className="relative aspect-[16/9] overflow-hidden bg-[#171428]">
          <div className="absolute inset-x-0 bottom-0 h-[42%] bg-[#20233a]" />
          <div className="absolute inset-x-0 bottom-[42%] h-px bg-unity/25" />
          <div className="absolute bottom-[18%] left-[12%] grid size-11 place-items-center border border-unity/55 bg-unity/15">
            <Box size={20} className="text-unity" />
          </div>
          <div className="absolute bottom-[21%] right-[13%] flex gap-2">
            {[0, 1, 2].map((item) => (
              <span key={item} className="block h-8 w-5 border border-[#f07178]/50 bg-[#f07178]/15" />
            ))}
          </div>
          <span className="absolute left-[27%] top-[28%] h-px w-[49%] -rotate-6 bg-unity/45" />
          <span className="absolute left-[56%] top-[24%] size-2 rounded-full bg-unity" />
          <div className="absolute left-3 top-3 flex items-center gap-1.5 border border-white/10 bg-black/30 px-2 py-1 font-mono text-[9px] text-muted">
            PLAYING <span className="size-1 rounded-full bg-web" />
          </div>
        </div>
      </div>

      <div className="hero-drift-delay absolute right-0 top-[28%] z-30 w-[62%] border border-web/35 bg-[#111820] shadow-[0_24px_70px_rgba(0,0,0,0.4)]">
        <div className="flex h-9 items-center gap-2 border-b border-white/8 px-3">
          <div className="flex gap-1">
            <span className="size-1.5 rounded-full bg-white/15" />
            <span className="size-1.5 rounded-full bg-white/15" />
            <span className="size-1.5 rounded-full bg-web/70" />
          </div>
          <div className="ml-2 flex h-5 flex-1 items-center gap-1.5 bg-white/[0.04] px-2 font-mono text-[8px] text-muted">
            <Globe2 size={9} /> jang.dev/experience
          </div>
        </div>
        <div className="grid aspect-[16/10] grid-cols-[0.38fr_0.62fr] gap-3 p-3">
          <div className="space-y-2 border-r border-white/8 pr-3">
            <span className="block h-2 w-10 bg-web/50" />
            <span className="block h-1.5 w-full bg-white/8" />
            <span className="block h-1.5 w-4/5 bg-white/8" />
            <div className="mt-4 border border-web/20 bg-web/[0.06] p-2">
              <span className="block h-1.5 w-2/3 bg-web/35" />
              <span className="mt-2 block h-1 w-full bg-white/8" />
            </div>
          </div>
          <div className="relative overflow-hidden border border-white/8 bg-[#0e1618]">
            <div className="visual-grid absolute inset-0 opacity-30" />
            <MapPin className="absolute left-[56%] top-[28%] text-web" size={22} fill="rgba(69,214,168,.14)" />
            <span className="absolute left-[18%] top-[62%] size-2 rounded-full bg-web/60" />
            <span className="absolute right-[18%] top-[68%] size-1.5 rounded-full bg-unity/70" />
            <MousePointer2 className="absolute bottom-4 right-5 text-muted" size={15} />
          </div>
        </div>
      </div>

      <div className="absolute bottom-[2%] left-[7%] z-40 w-[64%] border border-white/12 bg-[#0d1016] shadow-[0_18px_50px_rgba(0,0,0,0.45)]">
        <div className="flex h-8 items-center justify-between border-b border-white/8 px-3 text-[9px] text-muted">
          <span className="flex items-center gap-1.5"><Braces size={11} className="text-web" /> Experience.cs</span>
          <span>UTF-8</span>
        </div>
        <div className="space-y-1.5 p-3 font-mono text-[9px] sm:text-[10px]">
          {codeLines.map((line, index) => (
            <p key={line.key} className="flex gap-3">
              <span className="w-3 text-right text-muted">{index + 1}</span>
              <span className={index === 1 ? 'text-unity' : index === 2 ? 'text-web' : 'text-muted'}>{line.value}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
