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
    <main style={{ background: '#0a0a0a', color: '#f5f5f5', fontFamily: 'system-ui, -apple-system, sans-serif', minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, borderBottom: '1px solid #1a1a1a', background: 'rgba(10,10,10,0.95)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 48px', height: 64 }}>
        <span style={{ fontWeight: 600, letterSpacing: '0.05em', fontSize: 15 }}>Adam Biotech</span>
        <div style={{ display: 'flex', gap: 40, fontSize: 14 }}>
          <a href="#problem" style={{ color: '#999', textDecoration: 'none' }}>Problem</a>
          <a href="#approach" style={{ color: '#999', textDecoration: 'none' }}>Our Approach</a>
          <a href="#product" style={{ color: '#999', textDecoration: 'none' }}>Product</a>
          <a href="#team" style={{ color: '#999', textDecoration: 'none' }}>Team</a>
        </div>
        <a href="#contact" style={{ fontSize: 14, color: '#f5f5f5', textDecoration: 'underline', textUnderlineOffset: 4 }}>Partner with us →</a>
      </nav>

      {/* HERO */}
      <section style={{ paddingTop: 160, paddingBottom: 120, paddingLeft: 48, paddingRight: 48, maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 16, marginBottom: 40, flexWrap: 'wrap' }}>
          {['YC W27', 'NSF', 'Dempsey Center', 'Founders Inc'].map(b => (
            <span key={b} style={{ fontSize: 11, letterSpacing: '0.1em', border: '1px solid #2a2a2a', padding: '4px 12px', color: '#777', textTransform: 'uppercase' as const }}>{b}</span>
          ))}
        </div>
        <h1 style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.1, maxWidth: 800, marginBottom: 32 }}>
          Tumor models that<br />actually work.
        </h1>
        <p style={{ fontSize: 18, color: '#888', maxWidth: 560, lineHeight: 1.7, marginBottom: 48 }}>
          Adam Biotech builds human tumor models that are verified before they ship — so your drug-testing results are trustworthy, every time.
        </p>
        <div style={{ display: 'flex', gap: 24 }}>
          <a href="#contact" style={{ color: '#f5f5f5', textDecoration: 'underline', textUnderlineOffset: 4, fontSize: 15 }}>Partner with us →</a>
          <a href="#approach" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: 4, fontSize: 15 }}>Learn how it works →</a>
        </div>
      </section>

      {/* STATS */}
      <section style={{ borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 48px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {[
            { val: '$128K', label: 'wasted per lab per year on failed models' },
            { val: '90%', label: 'accuracy predicting whether a model will give reliable results' },
            { val: '$4.9B', label: 'preclinical drug testing market' },
            { val: '11 / 13', label: 'pharma buyers indicated purchase interest' },
          ].map((s, i) => (
            <div key={i} style={{ padding: '48px 0', borderRight: i < 3 ? '1px solid #1a1a1a' : 'none', paddingRight: i < 3 ? 40 : 0, paddingLeft: i > 0 ? 40 : 0 }}>
              <div style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: 8 }}>{s.val}</div>
              <div style={{ fontSize: 13, color: '#666', lineHeight: 1.5 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 01: PROBLEM */}
      <section id="problem" style={{ padding: '120px 48px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.15em', color: '#555', textTransform: 'uppercase' as const, marginBottom: 24 }}>01 · The Problem</div>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              Drug testing starts with the wrong tools.
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 16, color: '#888', lineHeight: 1.8, marginBottom: 24 }}>
              When a pharma lab tests a new drug, they start by running it against a tumor model — a lab-grown replica of a tumor. The problem? Most tumor models fail silently. They look fine, but they do not behave like real tumors.
            </p>
            <p style={{ fontSize: 16, color: '#888', lineHeight: 1.8, marginBottom: 24 }}>
              That means the drug-testing data is unreliable. Labs do not find out until months later — after spending hundreds of thousands of dollars. On average, a lab wastes <strong style={{ color: '#f5f5f5' }}>$128,000 per year</strong> from model failures alone.
            </p>
            <p style={{ fontSize: 16, color: '#888', lineHeight: 1.8 }}>
              There is no quality standard today. Models ship without verification. Adam Biotech is changing that.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 02: APPROACH */}
      <section id="approach" style={{ padding: '120px 48px', borderTop: '1px solid #1a1a1a', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start', marginBottom: 80 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.15em', color: '#555', textTransform: 'uppercase' as const, marginBottom: 24 }}>02 · Our Approach</div>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              We certify every model before it ships.
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 16, color: '#888', lineHeight: 1.8 }}>
              Adam Biotech built the first quality certification layer for human tumor models. Each model we manufacture is measured against biological acceptance criteria — before it ever reaches a lab. If it does not pass, it does not ship. Every model that leaves our facility comes with a certificate.
            </p>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: '#1a1a1a' }}>
          {[
            { n: '01', title: 'Build', desc: 'We grow a human tumor model layer by layer, using patient-relevant cell types and structure.' },
            { n: '02', title: 'Measure', desc: 'We collect data throughout manufacturing — cell health, physical structure, and biological activity.' },
            { n: '03', title: 'Qualify', desc: 'Our system uses that data to predict whether the model will produce trustworthy drug-testing results.' },
            { n: '04', title: 'Ship', desc: 'Only certified models leave our lab — each with a complete record of how it was built and verified.' },
          ].map((step) => (
            <div key={step.n} style={{ background: '#0a0a0a', padding: 40 }}>
              <div style={{ fontSize: 11, color: '#444', letterSpacing: '0.1em', marginBottom: 20 }}>{step.n}</div>
              <div style={{ fontSize: 18, fontWeight: 400, marginBottom: 16 }}>{step.title}</div>
              <div style={{ fontSize: 14, color: '#666', lineHeight: 1.7 }}>{step.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 03: PRODUCT */}
      <section id="product" style={{ padding: '120px 48px', borderTop: '1px solid #1a1a1a', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.15em', color: '#555', textTransform: 'uppercase' as const, marginBottom: 24 }}>03 · Product</div>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 24 }}>
              OvaMatrix&#8209;R
            </h2>
            <p style={{ fontSize: 16, color: '#888', lineHeight: 1.8, marginBottom: 24 }}>
              Our first certified model. OvaMatrix-R is a human ovarian cancer model built for drug response testing. It is designed for pharma and biotech teams running preclinical studies — and it comes with a quality certificate, every time.
            </p>
            <p style={{ fontSize: 14, color: '#666', lineHeight: 1.7 }}>
              Ovarian cancer is notoriously hard to treat. Most patients do not respond to standard chemotherapy, and there is still no reliable way to predict who will. OvaMatrix-R gives drug developers a better tool to answer that question — and the confidence that the data they get back is real.
            </p>
          </div>
          <div>
            {[
              ['Model type', 'Human ovarian cancer (HGSOC)'],
              ['Format', '96-well plate, ready to use'],
              ['Certification', 'Biological QC certificate included'],
              ['Assay readout', 'Drug response, cell viability, invasion'],
              ['Hardware (one-time)', '$4,000'],
              ['Subscription', '$2,300 / month'],
              ['Lead time', '3–5 business days'],
              ['Inquiries', 'founders@adambiotech.com'],
            ].map(([label, val]) => (
              <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0', borderBottom: '1px solid #1a1a1a' }}>
                <span style={{ fontSize: 12, color: '#555', textTransform: 'uppercase' as const, letterSpacing: '0.08em' }}>{label}</span>
                <span style={{ fontSize: 14, color: '#ccc', textAlign: 'right' as const, maxWidth: '55%' }}>{val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04: WHY NOW */}
      <section style={{ padding: '120px 48px', borderTop: '1px solid #1a1a1a', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start', marginBottom: 80 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.15em', color: '#555', textTransform: 'uppercase' as const, marginBottom: 24 }}>04 · Why Now</div>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              The market is ready for a quality standard.
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 16, color: '#888', lineHeight: 1.8 }}>
              Three things are converging: regulators are moving away from animal testing, the preclinical drug market is growing fast, and labs are actively looking for more reliable tumor models. The window to set the standard is now.
            </p>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderTop: '1px solid #1a1a1a', borderLeft: '1px solid #1a1a1a' }}>
          {[
            { n: '01', title: 'FDA is shifting away from animal models', desc: 'New federal policy is accelerating the move toward human-relevant testing. Labs need better alternatives — fast.' },
            { n: '02', title: '$4.9B preclinical drug testing market', desc: 'The market for outsourced preclinical testing is large and growing. Quality-certified models are the next step forward.' },
            { n: '03', title: '11 of 13 pharma buyers said yes', desc: 'In early conversations with pharma teams, 11 out of 13 indicated they would pay for a certified ovarian cancer model.' },
            { n: '04', title: 'No quality layer exists yet', desc: 'Every tumor model on the market today ships without biological certification. Adam is building the standard from scratch.' },
          ].map((item) => (
            <div key={item.n} style={{ padding: 40, borderRight: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a' }}>
              <div style={{ fontSize: 11, color: '#444', letterSpacing: '0.1em', marginBottom: 20 }}>{item.n}</div>
              <div style={{ fontSize: 16, fontWeight: 400, marginBottom: 16, lineHeight: 1.4 }}>{item.title}</div>
              <div style={{ fontSize: 14, color: '#666', lineHeight: 1.7 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 05: TEAM */}
      <section id="team" style={{ padding: '120px 48px', borderTop: '1px solid #1a1a1a', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start', marginBottom: 80 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.15em', color: '#555', textTransform: 'uppercase' as const, marginBottom: 24 }}>05 · Team</div>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              Built by scientists<br />and engineers.
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 16, color: '#888', lineHeight: 1.8 }}>
              Adam Biotech was founded by researchers who studied why bioprinted tumor models fail — and built the system to fix it. We are backed by Y Combinator, the National Science Foundation, and leading biotech accelerators.
            </p>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1, background: '#1a1a1a', marginBottom: 48 }}>
          {[
            { name: 'Dharshini Maruthamuthu', role: 'Co-founder & CEO', bio: 'Biomedical engineer focused on tissue fabrication and quality systems. Former researcher at the intersection of bioprinting and drug testing.' },
            { name: 'Vitaliy Zadorozhnyy', role: 'Co-founder & CTO', bio: 'Engineer building the sensor and data systems that power Adam\'s certification layer. Background in real-time biological measurement and machine learning.' },
          ].map((p) => (
            <div key={p.name} style={{ background: '#0a0a0a', padding: 48 }}>
              <div style={{ fontSize: 18, fontWeight: 400, marginBottom: 8 }}>{p.name}</div>
              <div style={{ fontSize: 12, color: '#555', letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: 20 }}>{p.role}</div>
              <div style={{ fontSize: 14, color: '#666', lineHeight: 1.7 }}>{p.bio}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' as const }}>
          {['Y Combinator W27', 'NSF Award', 'Dempsey Center', 'Founders Inc'].map(b => (
            <span key={b} style={{ fontSize: 12, letterSpacing: '0.08em', border: '1px solid #2a2a2a', padding: '6px 16px', color: '#666', textTransform: 'uppercase' as const }}>{b}</span>
          ))}
        </div>
      </section>

      {/* SECTION 06: CONTACT */}
      <section id="contact" style={{ padding: '120px 48px', borderTop: '1px solid #1a1a1a', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.15em', color: '#555', textTransform: 'uppercase' as const, marginBottom: 24 }}>06 · Contact</div>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 24 }}>
              Let's work together.
            </h2>
            <p style={{ fontSize: 16, color: '#666', lineHeight: 1.8, marginBottom: 32 }}>
              Whether you're a pharma team looking for better tumor models, an investor, or a potential partner — we would love to hear from you.
            </p>
            <a href="mailto:founders@adambiotech.com" style={{ color: '#888', fontSize: 14, textDecoration: 'underline', textUnderlineOffset: 4 }}>founders@adambiotech.com</a>
          </div>
          <div>
            {submitted ? (
              <div style={{ padding: 48, border: '1px solid #1a1a1a', textAlign: 'center' as const }}>
                <div style={{ fontSize: 18, marginBottom: 12 }}>Message sent.</div>
                <div style={{ fontSize: 14, color: '#666' }}>We will be in touch within 48 hours.</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' as const, gap: 32 }}>
                {[
                  { id: 'name', label: 'Full name', type: 'text', placeholder: 'Jane Smith' },
                  { id: 'email', label: 'Email', type: 'email', placeholder: 'jane@company.com' },
                  { id: 'org', label: 'Organization', type: 'text', placeholder: 'Company or institution' },
                  { id: 'role', label: 'I am a', type: 'text', placeholder: 'Investor, pharma partner, researcher, other' },
                ].map(f => (
                  <div key={f.id}>
                    <div style={{ fontSize: 11, letterSpacing: '0.12em', color: '#555', textTransform: 'uppercase' as const, marginBottom: 8 }}>{f.label}</div>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      value={form[f.id as keyof typeof form]}
                      onChange={e => setForm({...form, [f.id]: e.target.value})}
                      style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid #2a2a2a', padding: '8px 0', color: '#f5f5f5', fontSize: 15, outline: 'none', boxSizing: 'border-box' as const }}
                    />
                  </div>
                ))}
                <div>
                  <div style={{ fontSize: 11, letterSpacing: '0.12em', color: '#555', textTransform: 'uppercase' as const, marginBottom: 8 }}>Message</div>
                  <textarea
                    placeholder="Tell us what you are working on..."
                    rows={4}
                    value={form.message}
                    onChange={e => setForm({...form, message: e.target.value})}
                    style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid #2a2a2a', padding: '8px 0', color: '#f5f5f5', fontSize: 15, outline: 'none', resize: 'none' as const, boxSizing: 'border-box' as const }}
                  />
                </div>
                <button type="submit" style={{ background: 'none', border: 'none', padding: 0, color: '#f5f5f5', fontSize: 15, textDecoration: 'underline', textUnderlineOffset: 4, cursor: 'pointer', textAlign: 'left' as const }}>
                  Send message →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid #1a1a1a', padding: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 14, color: '#444' }}>© 2025 Adam Biotech, Inc.</span>
        <span style={{ fontSize: 13, color: '#444' }}>founders@adambiotech.com</span>
      </footer>

    </main>
  )
}
