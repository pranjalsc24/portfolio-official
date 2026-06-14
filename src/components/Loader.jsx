import { useEffect, useRef, useState } from 'react'
import { useProgress } from '@react-three/drei'
import gsap from 'gsap'

export default function Loader({ onDone }) {
  const { progress, active } = useProgress()
  const [imgReady, setImgReady] = useState(false)
  const [winReady, setWinReady] = useState(false)
  const [displayPct, setDisplayPct] = useState(0)
  const [hidden, setHidden] = useState(false)
  const root = useRef(null)
  const startedAt = useRef(performance.now())

  useEffect(() => {
    const img = new Image()
    img.onload = () => setImgReady(true)
    img.onerror = () => setImgReady(true)
    img.src = '/pranjal-photo.jpg'

    if (document.readyState === 'complete') setWinReady(true)
    else {
      const f = () => setWinReady(true)
      window.addEventListener('load', f)
      return () => window.removeEventListener('load', f)
    }
  }, [])

  const realPct = Math.min(100, Math.round(
    progress * 0.6 + (imgReady ? 20 : 0) + (winReady ? 20 : 0)
  ))

  useEffect(() => {
    const obj = { v: displayPct }
    gsap.to(obj, {
      v: realPct,
      duration: 0.6,
      ease: 'power2.out',
      onUpdate: () => setDisplayPct(Math.round(obj.v)),
    })
  }, [realPct])

  useEffect(() => {
    const elapsed = performance.now() - startedAt.current
    const minDuration = 1400
    const allReady = realPct >= 100 && !active && imgReady && winReady
    if (!allReady) return
    const wait = Math.max(0, minDuration - elapsed)
    const t = setTimeout(() => {
      gsap.to(root.current, {
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
        onComplete: () => {
          setHidden(true)
          onDone?.()
        },
      })
      gsap.to('.loader-curtain', {
        scaleY: 0,
        duration: 0.9,
        ease: 'expo.inOut',
        stagger: 0.05,
        transformOrigin: 'top center',
      })
    }, wait)
    return () => clearTimeout(t)
  }, [realPct, active, imgReady, winReady, onDone])

  if (hidden) return null

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[10000] pointer-events-auto"
      style={{ background: 'transparent' }}
      aria-hidden={hidden}
    >
      <div className="absolute inset-0 flex">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="loader-curtain flex-1 h-full"
            style={{ background: i % 2 === 0 ? '#0b0a14' : '#13112a' }}
          />
        ))}
      </div>

      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span
              className="h-10 w-10 rounded-full animate-spin"
              style={{
                background: 'conic-gradient(from 0deg, #6c5cff, #ffb86b, #a78bff, #6c5cff)',
                animationDuration: '2s',
              }}
            />
            <span className="font-bold text-2xl tracking-tight">Pranjal</span>
          </div>

          <div className="font-mono text-xs uppercase tracking-[0.3em] text-white/50 mb-4">
            Loading experience
          </div>

          <div className="text-6xl sm:text-7xl md:text-8xl font-bold tabular-nums">
            <span style={{ background: 'linear-gradient(90deg,#a78bff,#ffb86b)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              {String(displayPct).padStart(3, '0')}
            </span>
            <span className="text-white/30 text-4xl align-top ml-1">%</span>
          </div>

          <div className="mt-8 w-48 sm:w-64 mx-auto h-[2px] bg-white/10 overflow-hidden rounded-full">
            <div
              className="h-full transition-[width] duration-300"
              style={{
                width: `${displayPct}%`,
                background: 'linear-gradient(90deg,#6c5cff,#ffb86b)',
                boxShadow: '0 0 20px rgba(167,139,255,0.7)',
              }}
            />
          </div>

          <div className="mt-6 font-mono text-[10px] uppercase tracking-widest text-white/40">
            {realPct < 60 ? 'Booting 3D scene' : realPct < 90 ? 'Compiling shaders' : 'Almost ready'}
          </div>
        </div>
      </div>
    </div>
  )
}
