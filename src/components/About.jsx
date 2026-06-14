export default function About() {
  return (
    <section id="about" className="section">
      <div className="grid md:grid-cols-3 gap-10">
        <div data-reveal>
          <div className="tag mb-4">About</div>
          <h2 className="headline text-3xl sm:text-4xl md:text-5xl">Engineer focused on <span style={{ color: '#ffb86b' }}>scalable systems</span>.</h2>
        </div>
        <div className="md:col-span-2 space-y-5 text-white/75 leading-relaxed text-base md:text-lg" data-reveal>
          <p>
            I'm a Software Developer at <b className="text-white">Vector Consulting Group</b>, currently building Vector Flow 2.0 —
            a SaaS product where I design REST APIs, build modular microservices, and ship real-time features powered by
            Django Channels, Redis and Celery.
          </p>
          <p>
            Previously at <b className="text-white">Global PayEx</b>, I worked on payment-critical Java/Vert.x services,
            shipped 10+ Apache NiFi ETL pipelines and practiced TDD across high-volume financial datasets.
          </p>
          <div className="grid grid-cols-3 gap-4 pt-4">
            <Stat k="2+" v="Years building" />
            <Stat k="9.4" v="CGPA / 10" />
            <Stat k="10k+" v="Records processed" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ k, v }) {
  return (
    <div className="glass rounded-2xl p-4">
      <div className="text-3xl font-bold" style={{ background: 'linear-gradient(90deg,#a78bff,#ffb86b)', WebkitBackgroundClip: 'text', color: 'transparent' }}>{k}</div>
      <div className="text-xs text-white/60 mt-1">{v}</div>
    </div>
  )
}
