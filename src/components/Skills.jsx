import {
  SiPython, SiJavascript, SiDjango, SiFastapi, SiSpringboot, SiNodedotjs,
  SiPostgresql, SiMongodb, SiMysql, SiSqlite, SiRedis,
  SiCelery, SiApachekafka, SiApachenifi,
  SiSocketdotio, SiDocker, SiGit, SiPostman, SiJira,
} from 'react-icons/si'
import { FaJava, FaAws } from 'react-icons/fa'
import { TbApi, TbWebhook } from 'react-icons/tb'

const groups = [
  {
    title: 'Languages',
    items: [
      { name: 'Python', icon: SiPython, color: '#ffd24a' },
      { name: 'Java', icon: FaJava, color: '#e76f00' },
      { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { name: 'Django', icon: SiDjango, color: '#0bb678' },
      { name: 'DRF', icon: SiDjango, color: '#a01c20' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6db33f' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#5fa04e' },
      { name: 'Vert.x', icon: TbApi, color: '#8c6cff' },
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169e1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
      { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
      { name: 'SQLite', icon: SiSqlite, color: '#5fb8e6' },
      { name: 'Redis', icon: SiRedis, color: '#ff4438' },
    ],
  },
  {
    title: 'Async & Messaging',
    items: [
      { name: 'Celery', icon: SiCelery, color: '#a9cc54' },
      { name: 'Redis Pub/Sub', icon: SiRedis, color: '#ff4438' },
      { name: 'Kafka', icon: SiApachekafka, color: '#cfcfcf' },
      { name: 'Apache NiFi', icon: SiApachenifi, color: '#728e9b' },
    ],
  },
  {
    title: 'Real-time & APIs',
    items: [
      { name: 'WebSockets', icon: SiSocketdotio, color: '#a78bff' },
      { name: 'Django Channels', icon: TbWebhook, color: '#0bb678' },
      { name: 'REST', icon: TbApi, color: '#ffb86b' },
      { name: 'API Gateway', icon: TbApi, color: '#6c5cff' },
    ],
  },
  {
    title: 'DevOps & Cloud',
    items: [
      { name: 'Docker', icon: SiDocker, color: '#2496ed' },
      { name: 'Git', icon: SiGit, color: '#f05032' },
      { name: 'AWS', icon: FaAws, color: '#ff9900' },
      { name: 'Postman', icon: SiPostman, color: '#ff6c37' },
      { name: 'JIRA', icon: SiJira, color: '#0052cc' },
    ],
  },
]

const marqueeItems = groups.flatMap((g) => g.items)

function SkillChip({ name, icon: Icon, color }) {
  return (
    <div
      className="group relative flex items-center gap-2 pl-2 pr-3 py-2 rounded-xl border border-white/10 bg-white/[0.03] hover:border-white/30 transition-all"
      data-hover
    >
      <span
        className="grid place-items-center h-8 w-8 rounded-lg transition-transform group-hover:scale-110"
        style={{ background: `${color}22`, boxShadow: `inset 0 0 0 1px ${color}55` }}
      >
        <Icon size={18} style={{ color }} />
      </span>
      <span className="text-sm font-medium">{name}</span>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-12" data-reveal>
        <div>
          <div className="tag mb-3">Toolbox</div>
          <h2 className="headline text-3xl sm:text-4xl md:text-5xl">What I work with</h2>
        </div>
        <p className="max-w-md text-white/60">
          A pragmatic stack picked for backend velocity, reliability and observability.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((g, idx) => (
          <div
            key={g.title}
            className="glass rounded-3xl p-6 relative overflow-hidden group"
            data-reveal
            data-hover
          >
            <div
              className="absolute -top-16 -right-16 h-40 w-40 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition"
              style={{ background: g.items[0].color }}
            />
            <div className="flex items-center justify-between mb-5">
              <div className="text-sm uppercase tracking-widest text-white/50">{g.title}</div>
              <div className="font-mono text-xs text-white/30">0{idx + 1}</div>
            </div>
            <div className="flex flex-wrap gap-2 relative">
              {g.items.map((it) => <SkillChip key={it.name} {...it} />)}
            </div>
          </div>
        ))}
      </div>

      <div
        className="mt-14 relative overflow-hidden py-5 border-y border-white/10"
        data-reveal
        style={{
          maskImage: 'linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)',
        }}
      >
        <div className="flex gap-10 marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((it, i) => {
            const Icon = it.icon
            return (
              <div key={i} className="flex items-center gap-3 text-white/70">
                <Icon size={22} style={{ color: it.color }} />
                <span className="font-mono text-sm uppercase tracking-wider">{it.name}</span>
                <span className="text-white/20">•</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
