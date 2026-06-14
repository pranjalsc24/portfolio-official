const projects = [
  {
    name: 'BlogWorld',
    stack: 'MongoDB · Express · React · Node',
    desc: 'Full-stack blog platform supporting 100+ concurrent users with auth, posts, real-time comments and likes. MongoDB stores 10k+ records.',
    highlights: ['Rate limiting (500 req/min)', 'JWT sessions', 'Protected routes'],
    accent: '#6c5cff',
  },
  {
    name: 'StudyApp',
    stack: 'Python · Django · SQLite',
    desc: 'Collaborative Django app connecting 2,000+ students with study partners based on enrolled courses and subject interests.',
    highlights: ['Course-based matching', 'Session auth', 'Efficient data models'],
    accent: '#ffb86b',
  },
  {
    name: 'Vector Flow 2.0',
    stack: 'Django · Redis · Celery · WebSockets',
    desc: 'SaaS product modules I contribute to — modular microservices, real-time updates and secure auth at scale.',
    highlights: ['Pub/Sub channels', 'Sub-second latency', 'Role-based access'],
    accent: '#a78bff',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-12" data-reveal>
        <div>
          <div className="tag mb-3">Selected Work</div>
          <h2 className="headline text-3xl sm:text-4xl md:text-5xl">Projects & products</h2>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {projects.map((p) => (
          <article key={p.name} className="glass rounded-3xl p-6 group relative overflow-hidden" data-reveal data-hover>
            <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition" style={{ background: p.accent }} />
            <div className="font-mono text-xs text-white/60">{p.stack}</div>
            <h3 className="text-2xl font-semibold mt-2">{p.name}</h3>
            <p className="text-white/70 mt-3">{p.desc}</p>
            <ul className="mt-5 space-y-1.5 text-sm text-white/70">
              {p.highlights.map((h) => <li key={h}>— {h}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
