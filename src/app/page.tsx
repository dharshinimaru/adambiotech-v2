'use client';

import { useState } from 'react';

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', org: '', role: '', message: '' });
  const [sent, setSent] = useState(false);

  return (
    <div style={{ background: '#0a0a0a', color: '#e0e0e0', fontFamily: 'Inter, system-ui, sans-serif', minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(10,10,10,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #1c1c1c' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', height: 58, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 15, fontWeight: 600, letterSpacing: '-0.3px', color: '#fff' }}>Adam Biotech</span>
          <div style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
            {(['Product', 'Science', 'Team', 'Contact'] as const).map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} style={{ fontSize: 13, color: '#777', textDecoration: 'none' }}>{l}</a>
            ))}
          </div>
          <a href="#contact" style={{ fontSize: 13, color: '#e0e0e0', textDecoration: 'underline', textUnderlineOffset: 3 }}>Book a call →</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '152px 32px 112px' }}>
        <div style={{ display: 'flex', gap: 10, marginBottom: 48, flexWrap: 'wrap' }}>
          {['YC W27', 'NSF Grant', 'Dempsey Challenge', 'Founders Inc'].map(b => (
            <span key={b} style={{ fontSize: 11, padding: '4px 10px', border: '1px solid #242424', borderRadius: 20, color: '#555', letterSpacing: '0.05em' }}>{b}</span>
          ))}
        </div>
        <h1 style={{ fontSize: 'clamp(40px, 6vw, 76px)', fontWeight: 300, lineHeight: 1.08, letterSpacing: '-2.5px', color: '#fff', maxWidth: 820, marginBottom: 28 }}>
          The quality standard<br />for human tumor models.
        </h1>
        <p style={{ fontSize: 18, color: '#777', maxWidth: 500, lineHeight: 1.75, marginBottom: 48 }}>
          We build certified ovarian cancer models that research teams can trust for real drug development decisions.
        </p>
        <div style={{ display: 'flex', gap: 32 }}>
          <a href="#contact" style={{ fontSize: 14, color: '#e0e0e0', textDecoration: 'underline', textUnderlineOffset: 4 }}>Request a sample →</a>
          <a href="#science" style={{ fontSize: 14, color: '#555', textDecoration: 'underline', textUnderlineOffset: 4 }}>How it works</a>
        </div>
      </section>

      {/* STATS */}
      <div style={{ borderTop: '1px solid #1c1c1c', borderBottom: '1px solid #1c1c1c' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
          {[
            { v: '$128K', l: 'wasted per lab per year on failed experiments' },
            { v: '90%', l: 'accuracy detecting a model that will fail' },
            { v: '$4.9B', l: 'preclinical CRO market size' },
            { v: '11 / 13', l: 'pharma buyers ready to switch to certified models' },
          ].map((s, i) => (
            <div key={i} style={{ padding: '36px 24px', borderRight: i < 3 ? '1px solid #1c1c1c' : 'none' }}>
              <div style={{ fontSize: 34, fontWeight: 300, letterSpacing: '-1px', color: '#fff', marginBottom: 8 }}>{s.v}</div>
              <div style={{ fontSize: 12, color: '#4a4a4a', lineHeight: 1.5, maxWidth: 160 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 01 PROBLEM */}
      <section id="science" style={{ borderBottom: '1px solid #1c1c1c' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '96px 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: 11, color: '#444', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 24 }}>01 · The Problem</p>
            <h2 style={{ fontSize: 'clamp(26px, 2.8vw, 40px)', fontWeight: 300, letterSpacing: '-1px', color: '#fff', lineHeight: 1.2 }}>
              Most lab tumor models fail — and you don&apos;t find out until it&apos;s too late.
            </h2>
          </div>
          <div style={{ paddingTop: 52 }}>
            <p style={{ fontSize: 15, color: '#777', lineHeight: 1.8, marginBottom: 24 }}>
              Research teams spend months running experiments on tumor models that silently don&apos;t work. The models look fine on the outside — but the biology is off, the results are misleading, and promising drugs get abandoned for the wrong reasons.
            </p>
            <p style={{ fontSize: 15, color: '#777', lineHeight: 1.8, marginBottom: 40 }}>
              The result: <strong style={{ color: '#ccc' }}>$128K wasted per lab, per year</strong> — and cancer drugs failing in clinical trials that shouldn&apos;t have.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1, background: '#1c1c1c' }}>
              {[
                { n: '01', t: 'No quality checks', b: 'Models ship with no verification that they\'ll produce reliable data.' },
                { n: '02', t: 'Silent failures', b: 'A model can look healthy and still give completely wrong drug-response results.' },
                { n: '03', t: 'Wasted resources', b: 'Labs often only discover the problem after months of experiments.' },
              ].map(c => (
                <div key={cnn} style={{ background: '#0a0a0a', padding: '24px 18px' }}>
                  <p style={{ fontSize: 11, color: '#333', marginBottom: 10 }}>{c.n}</p>
                  <p style={{ fontSize: 13, color: '#bbb', fontWeight: 500, marginBottom: 6 }}>{c.t}</p>
                  <p style={{ fontSize: 12, color: '#555', lineHeight: 1.6 }}>{c.b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02 APPROACH */}
      <section style={{ borderBottom: '1px solid #1c1c1c' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '96px 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: 11, color: '#444', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 24 }}>02 · Our Approach</p>
            <h2 style={{ fontSize: 'clamp(26px, 2.8vw, 40px)', fontWeight: 300, letterSpacing: '-1px', color: '#fff', lineHeight: 1.2 }}>
              We certify every model before it ships.
            </h2>
          </div>
          <div style={{ paddingTop: 52 }}>
            <p style={{ fontSize: 15, color: '#777', lineHeight: 1.8, marginBottom: 24 }}>
              Adam builds 3D human tumor models that closely mimic real cancer biology. But our core innovation is what happens before the model reaches you: a qualification process that confirms every single construct will give reliable results.
            </p>
            <p style={{ fontSize: 15, color: '#777', lineHeight: 1.8, marginBottom: 40 }}>
              Think of it like a certificate of analysis for your tumor model — you know exactly what you&apos;re working with before your experiment starts.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: '#1c1c1c' }}>
              {[
                { n: '01', t: 'Build', b: '3D human tumor model constructed with precise cell ratios and structure.' },
                { n: '02', t: 'Measure', b: 'We collect biological readings throughout manufacturing — not just a snapshot.' },
                { n: '03', t: 'Qualify', b: 'Our system determines whether the model will give reliable results for your assay.' },
                { n: '04', t: 'Ship', b: 'Only models that pass qualification leave our lab — with a data certificate attached.' },
              ].map(c => (
                <div key={c.n} style={{ background: '#0a0a0a', padding: '24px 18px' }}>
                  <p style={{ fontSize: 11, color: '#333', marginBottom: 10 }}>{c.n}</p>
                  <p style={{ fontSize: 13, color: '#bbb', fontWeight: 500, marginBottom: 6 }}>{c.t}</p>
                  <p style={{ fontSize: 12, color: '#555', lineHeight: 1.6 }}>{c.b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 03 PRODUCT */}
      <section id="product" style={{ borderBottom: '1px solid #1c1c1c' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '96px 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: 11, color: '#444', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 24 }}>03 · Product</p>
            <h2 style={{ fontSize: 'clamp(26px, 2.8vw, 40px)', fontWeight: 300, letterSpacing: '-1px', color: '#fff', lineHeight: 1.2 }}>OvaMatrix-R</h2>
            <p style={{ fontSize: 15, color: '#777', lineHeight: 1.75, marginTop: 16, marginBottom: 28 }}>
              Our first certified tumor model — built for ovarian cancer drug testing. Ships ready to use, with a qualification certificate included.
            </p>
            <a href="#contact" style={{ fontSize: 13, color: '#e0e0e0', textDecoration: 'underline', textUnderlineOffset: 4 }}>Request access →</a>
          </div>
          <div style={{ paddingTop: 52 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                {[
                  ['Model type', 'Human ovarian cancer · 3D construct'],
                  ['Format', 'Multi-well plate, ready to use'],
                  ['Qualification', 'Certificate of assay-readiness included'],
                  ['Cell lines', 'Ovarian cancer + peritoneal stroma'],
                  ['Compatible assays', 'Drug response, invasion, co-culture'],
                  ['Hardware', '$4,000 one-time setup'],
                  ['Service', '$2,300 / month'],
                  ['Lead time', '2–3 weeks from order'],
                ].map(([label, value], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #1c1c1c' }}>
                    <td style={{ padding: '14px 0', fontSize: 12, color: '#444', width: '44%' }}>{label}</td>
                    <td style={{ padding: '14px 0', fontSize: 13, color: '#bbb' }}>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 04 WHY NOW */}
      <section style={{ borderBottom: '1px solid #1c1c1c' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '96px 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: 11, color: '#444', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 24 }}>04 · Why Now</p>
            <h2 style={{ fontSize: 'clamp(26px, 2.8vw, 40px)', fontWeight: 300, letterSpacing: '-1px', color: '#fff', lineHeight: 1.2 }}>
              The market is ready.<br />The quality layer doesn&apos;t exist yet.
            </h2>
          </div>
          <div style={{ paddingTop: 52 }}>
            {[
              { n: '01', t: 'FDA is moving away from animal testing', b: 'New FDA guidance encourages human-relevant models for drug development — creating real urgency for better 3D tumor assays.' },
              { n: '02', t: 'A $4.9B market with no quality standard', b: 'The preclinical CRO space is massive and growing. Nobody yet offers certified, verified tumor models at scale.' },
              { n: '03', t: '11 of 13 pharma buyers said they\'d switch', b: 'In early conversations, 11 out of 13 pharma and biotech teams said they would use Adam if the quality guarantee existed.' },
              { n: '04', t: 'Ovarian cancer needs better tools', b: 'It\'s one of the most lethal cancers. Survival rates haven\'t improved much in decades — largely because preclinical models don\'t reliably predict treatment response.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '36px 1fr', gap: 16, padding: '24px 0', borderBottom: i < 3 ? '1px solid #1c1c1c' : 'none' }}>
                <span style={{ fontSize: 11, color: '#333', paddingTop: 2 }}>{item.n}</span>
                <div>
                  <p style={{ fontSize: 13, color: '#bbb', fontWeight: 500, marginBottom: 6 }}>{item.t}</p>
                  <p style={{ fontSize: 12, color: '#555', lineHeight: 1.65 }}>{item.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 TEAM */}
      <section id="team" style={{ borderBottom: '1px solid #1c1c1c' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '96px 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: 11, color: '#444', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 24 }}>05 · Team</p>
            <h2 style={{ fontSize: 'clamp(26px, 2.8vw, 40px)', fontWeight: 300, letterSpacing: '-1px', color: '#fff', lineHeight: 1.2 }}>
              Scientists who understand both the biology and the business.
            </h2>
          </div>
          <div style={{ paddingTop: 52 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: '#1c1c1c', marginBottom: 32 }}>
              {[
                { name: 'Dharshini Maru', role: 'CEO & Co-Founder', bio: 'Biomedical engineer with expertise in bioprinting and cancer biology. Focused on commercializing advanced human tissue models.' },
                { name: 'Vitaliy', role: 'CTO & Co-Founder', bio: 'Engineer specializing in biosensor systems, manufacturing automation, and real-time biological monitoring.' },
              ].map(p => (
                <div key={p.name} style={{ background: '#0a0a0a', padding: '24px 18px' }}>
                  <p style={{ fontSize: 13, color: '#ccc', fontWeight: 500, marginBottom: 4 }}>{p.name}</p>
                  <p style={{ fontSize: 11, color: '#444', marginBottom: 10, letterSpacing: '0.04em' }}>{p.role}</p>
                  <p style={{ fontSize: 12, color: '#555', lineHeight: 1.6 }}>{p.bio}</p>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['YC W27', 'NSF Grant', 'Dempsey Innovation Challenge', 'Founders Inc'].map(b => (
                <span key={b} style={{ fontSize: 11, padding: '4px 10px', border: '1px solid #222', borderRadius: 20, color: '#444', letterSpacing: '0.05em' }}>{b}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 06 CONTACT */}
      <section id="contact" style={{ borderBottom: '1px solid #1c1c1c' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '96px 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: 11, color: '#444', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 24 }}>06 · Contact</p>
            <h2 style={{ fontSize: 'clamp(26px, 2.8vw, 40px)', fontWeight: 300, letterSpacing: '-1px', color: '#fff', lineHeight: 1.2 }}>Let&apos;s talk.</h2>
            <p style={{ fontSize: 15, color: '#777', lineHeight: 1.75, marginTop: 16 }}>
              Whether you&apos;re a pharma partner, an investor, or a lab looking for better models — we&apos;d love to hear from you.
            </p>
            <p style={{ fontSize: 13, color: '#444', marginTop: 28 }}>founders@adambiotech.com</p>
          </div>
          <div style={{ paddingTop: 52 }}>
            {sent ? (
              <p style={{ fontSize: 15, color: '#bbb' }}>Thanks — we&apos;ll be in touch shortly.</p>
            ) : (
              <form
                onSubmit={e => { e.preventDefault(); setSent(true); }}
                style={{ display: 'flex', flexDirection: 'column', gap: 28 }}
              >
                {[
                  { k: 'name', label: 'Full name', type: 'text', ph: 'Jane Smith' },
                  { k: 'email', label: 'Email', type: 'email', ph: 'jane@company.com' },
                  { k: 'org', label: 'Organisation', type: 'text', ph: 'Pharma / Biotech / Academic lab' },
                  { k: 'role', label: 'Role', type: 'text', ph: 'e.g. VP Drug Discovery' },
                ].map(f => (
                  <div key={f.k}>
                    <label style={{ display: 'block', fontSize: 11, color: '#444', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>{f.label}</label>
                    <input
                      type={f.type}
                      placeholder={f.ph}
                      value={form[f.k as keyof typeof form]}
                      onChange={e => setForm({ ...form, [f.k]: e.target.value })}
                      style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid #222', color: '#e0e0e0', fontSize: 14, padding: '6px 0', outline: 'none', boxSizing: 'border-box' }}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', fontSize: 11, color: '#444', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>Message</label>
                  <textarea
                    placeholder="Tell us about your research or what you're looking for..."
                    rows={4}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid #222', color: '#e0e0e0', fontSize: 14, padding: '6px 0', outline: 'none', resize: 'none', boxSizing: 'border-box' }}
                  />
                </div>
                <button type="submit" style={{ alignSelf: 'flex-start', fontSize: 13, color: '#e0e0e0', textDecoration: 'underline', textUnderlineOffset: 4, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                  Send message →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '28px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 12, color: '#333' }}>© 2025 Adam Biotech, Inc.</span>
          <span style={{ fontSize: 12, color: '#333' }}>founders@adambiotech.com</span>
        </div>
      </footer>
    </div>
  );
}
