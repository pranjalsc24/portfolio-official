import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
]

const NAV_OFFSET = 90

function smoothScroll(e, href) {
  e.preventDefault()
  const target = document.querySelector(href)
  if (!target) return
  gsap.killTweensOf(window)
  gsap.to(window, {
    duration: 0.7,
    ease: 'power2.out',
    scrollTo: { y: target, offsetY: NAV_OFFSET, autoKill: true },
  })
  history.replaceState(null, '', href)
}

export default function Navbar() {
  const ref = useRef(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    gsap.fromTo(ref.current, { y: -40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 })
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const onClick = (e, href) => { setOpen(false); smoothScroll(e, href) }

  return (
    <>
      <nav
        ref={ref}
        className="fixed top-3 md:top-5 left-1/2 -translate-x-1/2 z-50 glass rounded-full pl-4 pr-2 md:px-6 py-2 md:py-3 flex items-center gap-4 md:gap-8 w-[calc(100%-1.5rem)] md:w-auto justify-between"
      >
        <a href="#home" onClick={(e) => onClick(e, '#home')} className="flex items-center gap-2 font-bold">
          <span className="h-6 w-6 rounded-full" style={{ background: 'conic-gradient(from 90deg, #6c5cff, #ffb86b, #a78bff, #6c5cff)' }} />
          <span>Pranjal</span>
        </a>

        <ul className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={(e) => onClick(e, l.href)} className="opacity-80 hover:opacity-100 transition">{l.label}</a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={(e) => onClick(e, '#contact')}
          className="hidden md:inline-flex text-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition"
        >
          Contact me
        </a>

        <button
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden h-9 w-9 grid place-items-center rounded-full border border-white/15"
          data-hover
        >
          <span className="relative block w-4 h-3">
            <span className={`absolute left-0 top-0 h-[2px] w-full bg-white transition ${open ? 'translate-y-1.5 rotate-45' : ''}`} />
            <span className={`absolute left-0 top-1.5 h-[2px] w-full bg-white transition ${open ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 bottom-0 h-[2px] w-full bg-white transition ${open ? '-translate-y-1.5 -rotate-45' : ''}`} />
          </span>
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'rgba(11,10,20,0.85)', backdropFilter: 'blur(14px)' }}
        onClick={() => setOpen(false)}
      >
        <div className="absolute inset-0 grid place-items-center" onClick={(e) => e.stopPropagation()}>
          <ul className="text-center space-y-6">
            {[...links, { label: 'Contact', href: '#contact' }].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => onClick(e, l.href)}
                  className="text-3xl font-bold opacity-90 hover:opacity-100"
                  style={{ background: 'linear-gradient(90deg,#a78bff,#ffb86b)', WebkitBackgroundClip: 'text', color: 'transparent' }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
