import { skillIcons } from '../data/skillIcons.js'
import { TbApi } from 'react-icons/tb'

function StackChip({ name }) {
  const meta = skillIcons[name] || { icon: TbApi, color: '#a78bff' }
  const Icon = meta.icon
  return (
    <span
      className="inline-flex items-center gap-1.5 pl-1.5 pr-2.5 py-1 rounded-lg border text-xs font-medium"
      style={{
        background: `${meta.color}18`,
        borderColor: `${meta.color}44`,
        color: '#ece9ff',
      }}
    >
      <span
        className="grid place-items-center h-5 w-5 rounded-md"
        style={{ background: `${meta.color}22` }}
      >
        <Icon size={13} style={{ color: meta.color }} />
      </span>
      {name}
    </span>
  )
}

const xp = [
  {
    company: 'Vector Consulting Group',
    role: 'Software Developer',
    period: 'Apr 2025 – Present',
    stack: ['Python', 'Django', 'DRF', 'FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'WebSockets', 'Docker'],
    bullets: [
      'Designed scalable REST APIs for Vector Flow 2.0 (SaaS) ensuring high availability and concurrency.',
      'Built modular microservices using Redis Pub/Sub and API Gateway patterns for event-driven systems.',
      'Implemented async task processing with Celery + Redis for background workloads.',
      'Shipped real-time bidirectional comms via Django Channels & WebSockets with sub-second latency.',
      'Designed secure cookie-based auth with sessions, CSRF protection and role-based access.',
    ],
  },
  {
    company: 'Global PayEx',
    role: 'Trainee Software Developer',
    period: 'Jun 2024 – Mar 2025',
    stack: ['Java', 'Python', 'Vert.x', 'Spring Boot', 'MongoDB', 'Apache NiFi', 'TDD'],
    bullets: [
      'Modularized services + queueing reduced inter-service dependencies by 30%.',
      'Built 10+ Apache NiFi ETL pipelines, improving reporting efficiency by 40%.',
      'Designed complex MongoDB aggregation pipelines on high-volume payment data.',
      'Python automation scripts for validation, log analysis, batch reconciliation.',
      'Practiced TDD across payment-critical code paths.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="mb-12" data-reveal>
        <div className="tag mb-3">Experience</div>
        <h2 className="headline text-3xl sm:text-4xl md:text-5xl">Where I've shipped</h2>
      </div>
      <div className="space-y-6">
        {xp.map((j) => (
          <article key={j.company} className="glass rounded-3xl p-6 md:p-8" data-reveal data-hover>
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-2xl font-semibold">{j.company}</h3>
              <span className="font-mono text-xs text-white/60">{j.period}</span>
            </div>
            <div className="text-white/70 mt-1">{j.role}</div>
            <div className="flex flex-wrap gap-2 mt-4">
              {j.stack.map((s) => <StackChip key={s} name={s} />)}
            </div>
            <ul className="mt-5 space-y-2 text-white/80">
              {j.bullets.map((b, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full flex-none" style={{ background: '#ffb86b' }} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
