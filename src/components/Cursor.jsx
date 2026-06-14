import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    const xTo = gsap.quickTo(dot.current, 'x', { duration: 0.15, ease: 'power3' })
    const yTo = gsap.quickTo(dot.current, 'y', { duration: 0.15, ease: 'power3' })
    const xRing = gsap.quickTo(ring.current, 'x', { duration: 0.5, ease: 'power3' })
    const yRing = gsap.quickTo(ring.current, 'y', { duration: 0.5, ease: 'power3' })

    const move = (e) => {
      xTo(e.clientX); yTo(e.clientY)
      xRing(e.clientX); yRing(e.clientY)
    }
    const enter = () => gsap.to(ring.current, { scale: 1.8, borderColor: '#ffb86b', duration: 0.3 })
    const leave = () => gsap.to(ring.current, { scale: 1, borderColor: '#a78bff', duration: 0.3 })
    const press = () => gsap.to(ring.current, { scale: 0.6, duration: 0.15 })
    const release = () => gsap.to(ring.current, { scale: 1, duration: 0.2 })

    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', press)
    window.addEventListener('mouseup', release)
    document.querySelectorAll('a, button, [data-hover]').forEach((el) => {
      el.addEventListener('mouseenter', enter)
      el.addEventListener('mouseleave', leave)
    })

    const obs = new MutationObserver(() => {
      document.querySelectorAll('a, button, [data-hover]').forEach((el) => {
        el.addEventListener('mouseenter', enter)
        el.addEventListener('mouseleave', leave)
      })
    })
    obs.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', press)
      window.removeEventListener('mouseup', release)
      obs.disconnect()
    }
  }, [])

  return (
    <>
      <div
        ref={ring}
        className="pointer-events-none fixed top-0 left-0 z-[9999] -ml-5 -mt-5 h-10 w-10 rounded-full border-2 mix-blend-difference"
        style={{ borderColor: '#a78bff' }}
      />
      <div
        ref={dot}
        className="pointer-events-none fixed top-0 left-0 z-[9999] -ml-1 -mt-1 h-2 w-2 rounded-full bg-white mix-blend-difference"
      />
    </>
  )
}
