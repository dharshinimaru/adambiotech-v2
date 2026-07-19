'use client'
import { useState } from 'react'

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', org: '', role: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main style={{ background: '#0a0a0a', color: '#e8e8e8', fontFamily: "'Inter', 'Helvetica Neue', sans-serif", minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, borderBottom: '1px solid #1a1a1a', background: 'rgba(10,10,10,0.92)', backdropFilter: 'blur(12px)', padding: '0 5%' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60 }}>
          <span style={{ fontSize: 15, fontWeight: 600, letterSpacing: '0.02em', color: '#fff' }}>Adam Biotech</span>
          <div style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
            <a href="#problem" style={{ fontSize: 13, color: '#888', textDecoration: 'none' }}>Problem</a>
            <a href="#approach" style={{ fontSize: 13, color: '#888', textDecoration: 'none' }}>Approach</a>
            <a href="#product" style={{ fontSize: 13, color: '#888', textDecoration: 'none' }}>Product</a>
            <a href="#team" style={{ fontSize: 13, color: '#888', textDecoration: 'none' }}>Team</a>
            <a href="#contact" style={{ fontSize: 13, color: '#fff', textDecoration: 'underline', textUnderlineOffset: 3 }}>Partner with us →</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '120px 5% 80px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', width: 600, height: 600, background: 'radial-gradient(circle, rgba(80,40,120,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 780, position: 'relative' }}>
          <p style={{ fontSize: 12, letterSpacing: '0.15em', color: '#555', textTransform: 'uppercase', marginBottom: 32 }}>Adam Biotech</p>
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: 300, lineHeight: 1.1, color: '#fff', margin: '0 0 28px', letterSpacing: '-0.02em' }}>
            The quality standard<br />for human tumor models.
          </h1>
          <p style={{ fontSize: 18, color: '#777', lineHeight: 1.7, maxWidth: 540, margin: '0 auto 48px' }}>
            We make tumor models labs can actually trust. Every model is certified before it ships — so your experiments start on solid ground.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 56 }}>
            <a href="#contact" style={{ fontSize: 14, color: '#fff', textDecoration: 'underline', textUnderlineOffset: 4 }}>Request early access →</a>
            <a href="#approach" style={{ fontSize: 14, color: '#555', textDecoration: 'underline', textUnderlineOffset: 4 }}>How it works →</a>
          </div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['YC W27', 'NSF I-Corps', 'Dempsey Innovation', 'Founders Inc'].map(b => (
              <span key={b} style={{ fontSize: 11, color: '#444', border: '1px solid #222', borderRadius: 4, padding: '4px 12px', letterSpacing: '0.05em' }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', padding: '0 5%' }}>
          {[
            { value: '$128K', label: 'wasted per lab per year\nfrom failed models' },
            { value: '90%', label: 'accuracy detecting\na bad model before use' },
            { value: '$4.9B', label: 'pre-clinical testing\nmarket size' },
            { value: '11/13', label: 'major pharma buyers\nexpressed purchase intent' },
          ].map((s, i) => (
            <div key={i} style={{ padding: '40px 24px', borderRight: i < 3 ? '1px solid #1a1a1a' : 'none' }}>
              <div style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 300, color: '#fff', marginBottom: 8, letterSpacing: '-0.02em' }}>{s.value}</div>
              <div style={{ fontSize: 13, color: '#555', lineHeight: 1.5, whiteSpace: 'pre-line' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 01 - THE PROBLEM */}
      <section id="problem" style={{ padding: '100px 5%', borderBottom: '1px solid #1a1a1a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
            <div>
              <p style={{ fontSize: 12, letterSpacing: '0.12em', color: '#444', textTransform: 'uppercase', marginBottom: 20 }}>01 · The Problem</p>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 300, color: '#fff', lineHeight: 1.2, letterSpacing: '-0.02em', margin: 0 }}>
                Most tumor models fail — and nobody knows until it's too late.
              </h2>
            </div>
            <div style={{ paddingTop: 48 }}>
              <p style={{ fontSize: 16, color: '#666', lineHeight: 1.8, marginBottom: 20 }}>
                Drug companies run experiments on tissue models that look fine but produce misleading results. The failure is invisible: no error message, just bad data — discovered months later, after the compound and the budget are gone.
              </p>
              <p style={{ fontSize: 16, color: '#666', lineHeight: 1.8 }}>
                A single failed batch can cost a lab over $128,000 and push a research program back by months. The industry has no quality standard for the models it relies on most.
              </p>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, marginTop: 60 }}>
            {[
              { n: '01', title: 'Silent failures', body: 'Models that pass visual inspection still produce unreliable drug-response data — with no warning.' },
              { n: '02', title: 'Wasted resources', body: 'Labs spend months and hundreds of thousands of dollars on experiments built on unqualified models.' },
              { n: '03', title: 'No quality layer', body: 'The $4.9B pre-clinical testing market has no standard for certifying whether a model is actually fit for use.' },
            ].map(c => (
              <div key={c.n} style={{ padding: '32px', border: '1px solid #1a1a1a' }}>
                <p style={{ fontSize: 12, color: '#444', marginBottom: 16, letterSpacing: '0.08em' }}>{c.n}</p>
                <h3 style={{ fontSize: 16, fontWeight: 500, color: '#fff', marginBottom: 12 }}>{c.title}</h3>
                <p style={{ fontSize: 14, color: '#555', lineHeight: 1.7 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 - OUR APPROACH */}
      <section id="approach" style={{ padding: '100px 5%', borderBottom: '1px solid #1a1a1a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start', marginBottom: 60 }}>
            <div>
              <p style={{ fontSize: 12, letterSpacing: '0.12em', color: '#444', textTransform: 'uppercase', marginBottom: 20 }}>02 · Our Approach</p>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 300, color: '#fff', lineHeight: 1.2, letterSpacing: '-0.02em', margin: 0 }}>
                We certify every model before it ships.
              </h2>
            </div>
            <div style={{ paddingTop: 48 }}>
              <p style={{ fontSize: 16, color: '#666', lineHeight: 1.8, marginBottom: 20 }}>
                Before any Adam model reaches a lab, we run a full quality assessment — checking that it will produce reliable results for the specific experiment it's being used for. Not just a visual inspection. A real certification.
              </p>
              <p style={{ fontSize: 16, color: '#666', lineHeight: 1.8 }}>
                Think of it like a quality certificate for your experiment. Models that pass, ship. Models that don't, get rebuilt. Every shipment comes with documented evidence that it's ready to use.
              </p>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
            {[
              { n: '01', step: 'Build', body: 'We manufacture a human tumor model to precise specifications using advanced tissue engineering.' },
              { n: '02', step: 'Measure', body: 'We collect data throughout the manufacturing process — tracking every variable that affects quality.' },
              { n: '03', step: 'Qualify', body: 'We run a biological assessment to confirm the model will produce reliable drug-response data.' },
              { n: '04', step: 'Ship', body: 'Only certified models leave our facility — each accompanied by a quality certificate.' },
            ].map(s => (
              <div key={s.n} style={{ padding: '32px', border: '1px solid #1a1a1a' }}>
                <p style={{ fontSize: 12, color: '#444', marginBottom: 16, letterSpacing: '0.08em' }}>{s.n}</p>
                <h3 style={{ fontSize: 16, fontWeight: 500, color: '#fff', marginBottom: 12 }}>{s.step}</h3>
                <p style={{ fontSize: 14, color: '#555', lineHeight: 1.7 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 - PRODUCT */}
      <section id="product" style={{ padding: '100px 5%', borderBottom: '1px solid #1a1a1a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
            <div>
              <p style={{ fontSize: 12, letterSpacing: '0.12em', color: '#444', textTransform: 'uppercase', marginBottom: 20 }}>03 · OvaMatrix-R</p>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 300, color: '#fff', lineHeight: 1.2, letterSpacing: '-0.02em', margin: '0 0 24px' }}>
                A certified human ovarian tumor model, ready to use.
              </h2>
              <p style={{ fontSize: 16, color: '#666', lineHeight: 1.8, marginBottom: 32 }}>
                OvaMatrix-R is our first product — a human ovarian cancer model built for pharmaceutical drug testing. It comes certified, documented, and ready to run your assay from day one.
              </p>
              <p style={{ fontSize: 16, color: '#666', lineHeight: 1.8, marginBottom: 32 }}>
                No rebuilding from scratch. No uncertainty about whether the model is valid. Just a reliable starting point for your research.
              </p>
              <a href="#contact" style={{ fontSize: 14, color: '#fff', textDecoration: 'underline', textUnderlineOffset: 4 }}>Request a sample →</a>
            </div>
            <div>
              <div style={{ border: '1px solid #1a1a1a' }}>
                {[
                  { label: 'Model type', value: 'Human ovarian cancer (HGSOC)' },
                  { label: 'Format', value: '96-well plate — standard lab equipment' },
                  { label: 'Quality guarantee', value: 'Certificate of assay validity with every order' },
                  { label: 'Ready to use', value: 'Within 24 hours of arrival' },
                  { label: 'Pricing', value: '$4,000 setup · $2,300/month' },
                  { label: 'Application', value: 'Pre-clinical drug testing, oncology research' },
                ].map((row, i, arr) => (
                  <div key={row.label} style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', padding: '18px 24px', borderBottom: i < arr.length - 1 ? '1px solid #1a1a1a' : 'none' }}>
                    <span style={{ fontSize: 13, color: '#444' }}>{row.label}</span>
                    <span style={{ fontSize: 13, color: '#ccc' }}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 - WHY NOW */}
      <section id="why" style={{ padding: '100px 5%', borderBottom: '1px solid #1a1a1a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start', marginBottom: 60 }}>
            <div>
              <p style={{ fontSize: 12, letterSpacing: '0.12em', color: '#444', textTransform: 'uppercase', marginBottom: 20 }}>04 · Why Now</p>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 300, color: '#fff', lineHeight: 1.2, letterSpacing: '-0.02em', margin: 0 }}>
                The industry is ready for a quality standard. No one has built it yet.
              </h2>
            </div>
            <div style={{ paddingTop: 48 }}>
              <p style={{ fontSize: 16, color: '#666', lineHeight: 1.8 }}>
                Regulators are shifting away from animal models. Pharma companies are actively looking for better human tissue options. The market is large — and the gap is clear.
              </p>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
            {[
              { n: '01', title: 'FDA backing', body: 'The FDA now formally accepts advanced human tissue models for drug safety testing — replacing animal requirements.' },
              { n: '02', title: '$4.9B market gap', body: 'The pre-clinical testing market is nearly $5 billion — with no established quality standard for the models used.' },
              { n: '03', title: 'Pharma demand', body: '11 out of 13 major pharmaceutical companies we spoke with said they would buy certified human tumor models.' },
              { n: '04', title: 'Ovarian cancer urgency', body: 'Ovarian cancer has one of the lowest survival rates of any cancer — and one of the fewest research tools.' },
            ].map(s => (
              <div key={s.n} style={{ padding: '32px', border: '1px solid #1a1a1a' }}>
                <p style={{ fontSize: 12, color: '#444', marginBottom: 16, letterSpacing: '0.08em' }}>{s.n}</p>
                <h3 style={{ fontSize: 16, fontWeight: 500, color: '#fff', marginBottom: 12 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: '#555', lineHeight: 1.7 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 - TEAM */}
      <section id="team" style={{ padding: '100px 5%', borderBottom: '1px solid #1a1a1a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start', marginBottom: 60 }}>
            <div>
              <p style={{ fontSize: 12, letterSpacing: '0.12em', color: '#444', textTransform: 'uppercase', marginBottom: 20 }}>05 · Team</p>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 300, color: '#fff', lineHeight: 1.2, letterSpacing: '-0.02em', margin: 0 }}>
                Built by scientists and engineers who've worked in the lab.
              </h2>
            </div>
            <div style={{ paddingTop: 48 }}>
              <p style={{ fontSize: 16, color: '#666', lineHeight: 1.8 }}>
                We understand the frustration of building research on unreliable models. That's why we're building the standard the field has needed for years.
              </p>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2, marginBottom: 40 }}>
            {[
              { name: 'Dharshini Maru', role: 'CEO & Co-founder', bio: 'Biomedical engineer with deep expertise in tissue engineering and cancer biology. Led foundational work in advanced tumor model design.' },
              { name: 'Vitaliy Zagorodnov', role: 'CTO/CSO & Co-founder', bio: 'Engineer and scientist with a background in bioprinting systems, machine learning, and quality assurance for complex biological manufacturing.' },
            ].map(p => (
              <div key={p.name} style={{ padding: '40px', border: '1px solid #1a1a1a' }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#1a1a1a', marginBottom: 20 }} />
                <h3 style={{ fontSize: 18, fontWeight: 500, color: '#fff', marginBottom: 6 }}>{p.name}</h3>
                <p style={{ fontSize: 13, color: '#444', marginBottom: 16, letterSpacing: '0.05em' }}>{p.role}</p>
                <p style={{ fontSize: 14, color: '#555', lineHeight: 1.7 }}>{p.bio}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {['YC W27', 'NSF I-Corps', 'Dempsey Innovation', 'Founders Inc'].map(b => (
              <span key={b} style={{ fontSize: 12, color: '#444', border: '1px solid #222', borderRadius: 4, padding: '6px 14px' }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 06 - CONTACT */}
      <section id="contact" style={{ padding: '100px 5%' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
            <div>
              <p style={{ fontSize: 12, letterSpacing: '0.12em', color: '#444', textTransform: 'uppercase', marginBottom: 20 }}>06 · Contact</p>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 300, color: '#fff', lineHeight: 1.2, letterSpacing: '-0.02em', margin: '0 0 24px' }}>
                Work with us.
              </h2>
              <p style={{ fontSize: 16, color: '#666', lineHeight: 1.8, marginBottom: 32 }}>
                We're looking for research partners, early customers, and investors who want to help set the quality standard for human tumor models.
              </p>
              <p style={{ fontSize: 14, color: '#444' }}>founders@adambiotech.com</p>
            </div>
            <div>
              {submitted ? (
                <div style={{ padding: 40, border: '1px solid #1a1a1a', textAlign: 'center' }}>
                  <p style={{ fontSize: 16, color: '#fff', marginBottom: 8 }}>Message sent.</p>
                  <p style={{ fontSize: 14, color: '#555' }}>We'll be in touch within 48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {[
                    { key: 'name', label: 'Name', placeholder: 'Your name' },
                    { key: 'email', label: 'Email', placeholder: 'you@company.com' },
                    { key: 'org', label: 'Organization', placeholder: 'Company or institution' },
                    { key: 'role', label: 'Role', placeholder: 'e.g. Research Lead, VP BD, Investor' },
                  ].map(f => (
                    <div key={f.key} style={{ marginBottom: 28 }}>
                      <label style={{ display: 'block', fontSize: 11, letterSpacing: '0.1em', color: '#444', textTransform: 'uppercase', marginBottom: 8 }}>{f.label}</label>
                      <input
                        type={f.key === 'email' ? 'email' : 'text'}
                        placeholder={f.placeholder}
                        required
                        value={(form as Record<string, string>)[f.key]}
                        onChange={e => setForm(prev => ({ ...prev, [f.key]: e.target.value }))}
                        style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid #2a2a2a', padding: '8px 0', fontSize: 15, color: '#ccc', outline: 'none', boxSizing: 'border-box' }}
                      />
                    </div>
                  ))}
                  <div style={{ marginBottom: 36 }}>
                    <label style={{ display: 'block', fontSize: 11, letterSpacing: '0.1em', color: '#444', textTransform: 'uppercase', marginBottom: 8 }}>Message</label>
                    <textarea
                      placeholder="Tell us what you're working on..."
                      rows={4}
                      value={form.message}
                      onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                      style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid #2a2a2a', padding: '8px 0', fontSize: 15, color: '#ccc', outline: 'none', resize: 'none', boxSizing: 'border-box' }}
                    />
                  </div>
                  <button type="submit" style={{ fontSize: 14, color: '#fff', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: 4, padding: 0 }}>
                    Send message →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid #1a1a1a', padding: '32px 5%' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 13, color: '#333' }}>Adam Biotech © 2026</span>
          <span style={{ fontSize: 13, color: '#333' }}>founders@adambiotech.com</span>
        </div>
      </footer>

    </main>
  )
}
