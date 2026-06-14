export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="glass rounded-[2rem] p-6 sm:p-10 md:p-16 text-center relative overflow-hidden" data-reveal>
        <div className="absolute inset-0 pointer-events-none opacity-50" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(108,92,255,0.4), transparent 50%), radial-gradient(circle at 70% 70%, rgba(255,184,107,0.3), transparent 50%)' }} />
        <div className="relative">
          <div className="tag mb-4 inline-block">Let's talk</div>
          <h2 className="headline text-3xl sm:text-4xl md:text-6xl max-w-3xl mx-auto">
            Got a backend challenge? <span style={{ background: 'linear-gradient(90deg,#a78bff,#ffb86b)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Let's build it.</span>
          </h2>
          <p className="mt-5 text-white/70 max-w-xl mx-auto">
            Reach out — I'm open to full-time roles, contract work and interesting problems.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a className="btn" href="mailto:pranjalsc24@gmail.com" data-hover>
              pranjalsc24@gmail.com ↗
            </a>
            <a className="text-sm px-5 py-3 rounded-full border border-white/20 hover:bg-white/10" href="tel:+917506342004" data-hover>
              +91 75063 42004
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center gap-5 text-sm text-white/70">
            <a href="https://github.com/" data-hover className="hover:text-white">GitHub</a>
            <span>·</span>
            <a href="https://linkedin.com/" data-hover className="hover:text-white">LinkedIn</a>
            <span>·</span>
            <span>Chembur, Mumbai</span>
          </div>
        </div>
      </div>
    </section>
  )
}
