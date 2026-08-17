import { Braces, Gamepad2, Globe2, MapPin, MousePointer2 } from 'lucide-react'

const codeLines = [
  { key: 'public', value: 'public void BuildExperience() {' },
  { key: 'game', value: '  game.Interact(player);' },
  { key: 'web', value: '  web.Render(service);' },
  { key: 'end', value: '}' },
]

export function HeroVisual() {
  return (
    <div className="border border-ink/20 bg-panel" aria-hidden="true">
      <div className="flex h-12 items-center justify-between border-b border-ink/15 px-4">
        <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.12em] text-muted">
          <span className="size-2 bg-unity" />
          Live workspace
        </div>
        <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted">Game / Web / Product</span>
      </div>

      <div className="grid min-h-[360px] md:grid-cols-[1.2fr_0.8fr] lg:min-h-[448px]">
        <div className="relative overflow-hidden border-b border-ink/15 bg-surface md:border-b-0 md:border-r">
          <div className="visual-grid absolute inset-0 opacity-60" />
          <div className="absolute inset-x-4 top-4 flex h-10 items-center justify-between border border-ink/20 bg-panel px-3 font-mono text-[9px] text-muted sm:inset-x-8 sm:top-8">
            <span className="flex items-center gap-2 text-ink"><Gamepad2 size={16} className="text-unity" /> Game View</span>
            <span>RUNNING / 60 FPS</span>
          </div>
          <div className="absolute inset-x-4 bottom-4 top-16 overflow-hidden border border-ink/20 bg-[#20231f] sm:inset-x-8 sm:bottom-8 sm:top-20">
            <div className="absolute inset-x-0 bottom-0 h-[36%] border-t border-white/20 bg-[#30352f]" />
            <div className="absolute bottom-[16%] left-[12%] size-12 border border-unity bg-unity/20" />
            <div className="absolute bottom-[20%] right-[12%] flex gap-2">
              <span className="h-10 w-6 border border-white/30 bg-white/10" />
              <span className="h-12 w-6 border border-unity/80 bg-unity/20" />
              <span className="h-8 w-6 border border-white/30 bg-white/10" />
            </div>
            <span className="absolute left-[28%] top-[32%] h-px w-[40%] -rotate-6 bg-unity" />
            <span className="absolute left-[64%] top-[28%] size-2 bg-unity" />
            <div className="absolute left-4 top-4 border border-white/20 bg-black/30 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-white/70">
              Playing
            </div>
          </div>
        </div>

        <div className="grid min-h-[320px] grid-rows-[1.1fr_0.9fr] bg-panel">
          <div className="border-b border-ink/15 p-4 sm:p-8">
            <div className="flex h-8 items-center gap-2 border-b border-ink/15 font-mono text-[8px] text-muted">
              <Globe2 size={12} /> jang.dev/experience
            </div>
            <div className="grid h-[calc(100%-2rem)] grid-cols-[0.4fr_0.6fr] gap-4 pt-4">
              <div>
                <span className="block h-2 w-12 bg-web" />
                <span className="mt-4 block h-1 w-full bg-ink/20" />
                <span className="mt-2 block h-1 w-3/4 bg-ink/10" />
                <span className="mt-6 block h-8 w-16 border border-ink/30" />
              </div>
              <div className="relative overflow-hidden border border-ink/20 bg-surface">
                <div className="map-grid absolute inset-0" />
                <MapPin className="absolute left-[56%] top-[24%] text-web" size={24} fill="rgba(31,81,63,.12)" />
                <span className="absolute left-[20%] top-[64%] size-2 bg-unity" />
                <MousePointer2 className="absolute bottom-4 right-4 text-ink" size={16} />
              </div>
            </div>
          </div>

          <div className="bg-ink p-4 text-panel sm:p-8">
            <div className="flex items-center justify-between border-b border-white/20 pb-3 font-mono text-[9px] text-white/60">
              <span className="flex items-center gap-2"><Braces size={12} /> Experience.cs</span>
              <span>UTF-8</span>
            </div>
            <div className="mt-4 space-y-2 font-mono text-[9px] sm:text-[10px]">
              {codeLines.map((line, index) => (
                <p key={line.key} className="flex gap-4">
                  <span className="w-4 text-right text-white/40">{index + 1}</span>
                  <span className={index === 1 ? 'text-unity' : index === 2 ? 'text-[#8ab8a4]' : 'text-white/70'}>{line.value}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
