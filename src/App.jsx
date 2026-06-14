import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Cursor from './components/Cursor.jsx'
import Loader from './components/Loader.jsx'
import Navbar from './components/Navbar.jsx'
import BackgroundScene from './components/BackgroundScene.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const root = useRef(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!loaded) {
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = '' }
    }
    document.body.style.overflow = ''
  }, [loaded])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-reveal]').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%' },
          },
        )
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={root} className="bg-grid min-h-screen relative">
      <Loader onDone={() => setLoaded(true)} />
      <BackgroundScene />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
