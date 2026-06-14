export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 flex flex-wrap items-center justify-between gap-3 text-sm text-white/60">
        <div>© {new Date().getFullYear()} Pranjal Choudhari</div>
        <div className="font-mono">Built with React · Three.js · GSAP</div>
      </div>
    </footer>
  )
}
