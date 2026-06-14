import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const wrap = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.hero-eyebrow', { y: 20, opacity: 0, duration: 0.6, delay: 0.4 })
        .from('.hero-title .line', { y: 60, opacity: 0, duration: 1, stagger: 0.12 }, '-=0.2')
        .from('.hero-sub', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
        .from('.hero-cta', { y: 20, opacity: 0, duration: 0.5 }, '-=0.3')
        .from('.hero-photo', { scale: 0.85, opacity: 0, rotate: -8, duration: 1.2, ease: 'expo.out' }, '-=1')
        .from('.hero-deco', { opacity: 0, scale: 0.6, duration: 0.6, stagger: 0.1 }, '-=0.6')
    }, wrap)
    return () => ctx.revert()
  }, [])

  return (
    <section id="home" ref={wrap} className="section pt-32 md:pt-44 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <div className="hero-eyebrow inline-flex items-center gap-2 tag mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for new opportunities
          </div>
          <h1 className="hero-title headline text-4xl sm:text-5xl md:text-7xl">
            <div className="line overflow-hidden"><div>Build Reliable</div></div>
            <div className="line overflow-hidden"><div>Backends That</div></div>
            <div className="line overflow-hidden">
              <div>
                <span style={{ background: 'linear-gradient(90deg,#a78bff,#ffb86b)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                  Scale.
                </span>
              </div>
            </div>
          </h1>
          <p className="hero-sub mt-5 max-w-md text-white/70 text-base md:text-lg">
            I'm <b className="text-white">Pranjal Choudhari</b> — a software developer crafting fast, fault-tolerant APIs,
            real-time systems and distributed services with Python, Django, FastAPI and Java.
          </p>
          <div className="hero-cta mt-8 flex items-center gap-4">
            <a href="#projects" className="btn" data-hover>
              View my work
              <span aria-hidden>↗</span>
            </a>
            <a href="#contact" className="text-sm underline-offset-4 hover:underline opacity-80" data-hover>
              Get in touch
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="hero-photo relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[440px] mx-auto" style={{ aspectRatio: '4 / 5' }}>
            <div
              className="absolute -inset-2 rounded-[2rem] rotate-[6deg]"
              style={{
                background: 'linear-gradient(135deg, #6c5cff 0%, #a78bff 60%, #ffb86b 100%)',
                boxShadow: '0 30px 80px -20px rgba(108,92,255,0.55)',
              }}
            />
            <div className="absolute -inset-2 rounded-[2rem] rotate-[6deg] border-2 border-white/30" />
            <div className="absolute inset-0 rounded-[1.75rem] overflow-hidden -rotate-[3deg] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)]">
              <img
                src="/pranjal-photo.jpg"
                alt="Pranjal Choudhari"
                className="w-full h-full object-cover"
                style={{ objectPosition: '50% 18%' }}
                draggable="false"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(11,10,20,0) 50%, rgba(11,10,20,0.55) 100%), radial-gradient(circle at 50% 30%, transparent 55%, rgba(11,10,20,0.45) 100%)',
                }}
              />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-white/80">
                <span>Pranjal Choudhari</span>
                <span>// 2026</span>
              </div>
            </div>
          </div>

          <svg className="hero-deco absolute -top-2 -left-6 text-white/40" width="80" height="30" viewBox="0 0 80 30" fill="none">
            <path d="M2 15 L12 5 L22 25 L32 5 L42 25 L52 5 L62 25 L72 5" stroke="currentColor" strokeWidth="2" />
          </svg>
          <svg className="hero-deco absolute -bottom-4 left-10 text-white/40" width="40" height="40" viewBox="0 0 40 40">
            <polygon points="6,4 36,20 6,36" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
          <div className="hero-deco absolute -top-4 right-2 flex gap-1 opacity-70">
            <span className="h-6 w-6 rounded-full border border-white/40" />
            <span className="h-6 w-6 rounded-full border border-white/40 -ml-3" />
          </div>
          <div className="hero-deco absolute bottom-2 right-6 text-white/40 text-3xl">+</div>
        </div>
      </div>
    </section>
  )
}
