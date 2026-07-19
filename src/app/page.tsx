'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:founders@adambiotech.com?subject=Partnership inquiry from ${formData.name}&body=Name: ${formData.name}%0AEmail: ${formData.email}%0AOrganization: ${formData.organization}%0ARole: ${formData.role}%0A%0A${formData.message}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid #2a2a2a',
    padding: '8px 0',
    color: '#f0f0f0',
    fontSize: '14px',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '10px',
    color: '#555',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    marginBottom: '8px',
  };

  return (
    <main style={{ background: '#0a0a0a', color: '#f0f0f0', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", minHeight: '100vh' }}>

      {/* ── Nav ── */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(10,10,10,0.92)', backdropFilter: 'blur(16px)', borderBottom: '1px solid #1a1a1a', padding: '0 48px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontWeight: 600, fontSize: '15px', letterSpacing: '-0.02em' }}>Adam Biotech</span>
        <div style={{ display: 'flex', gap: '40px', fontSize: '13px', color: '#666' }}>
          {[['#problem', 'Problem'], ['#approach', 'Approach'], ['#product', 'Product'], ['#team', 'Team']].map(([href, label]) => (
            <a key={href} href={href} style={{ color: '#666', textDecoration: 'none' }}>{label}</a>
          ))}
        </div>
        <a href="#contact" style={{ fontSize: '13px', color: '#f0f0f0', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
          Partner with us →
        </a>
      </nav>

      {/* ── Hero ── */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '120px 48px 80px', maxWidth: '960px', margin: '0 auto' }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#444', textTransform: 'uppercase', marginBottom: '40px' }}>
          YC W27 · Founders Inc · NSF I-Corps · Dempsey Sweet 16
        </div>
        <h1 style={{ fontSize: 'clamp(36px, 5.5vw, 68px)', fontWeight: 300, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '36px', maxWidth: '820px' }}>
          Tumor models that work.
          <br />
          <span style={{ color: '#555' }}>Certified before they reach your lab.</span>
        </h1>
        <p style={{ fontSize: '17px', color: '#777', lineHeight: 1.8, maxWidth: '520px', marginBottom: '52px' }}>
          Adam Biotech builds human tumor models for cancer drug testing — and we verify that every single one is ready to use before it ships.
        </p>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <a href="#contact" style={{ fontSize: '14px', color: '#f0f0f0', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            Request access →
          </a>
          <a href="#problem" style={{ fontSize: '14px', color: '#555', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            Learn more →
          </a>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section style={{ borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {[
            { value: '$128K', label: 'wasted per lab each year on failed experiments' },
            { value: '90%', label: 'accuracy catching failed models before they ship' },
            { value: '$4.9B', label: 'preclinical testing market' },
            { value: '$1.5B', label: 'bioprinting market by 2032' },
          ].map((s, i) => (
            <div key={i} style={{ padding: '44px 36px', borderRight: i < 3 ? '1px solid #1a1a1a' : 'none' }}>
              <div style={{ fontSize: '38px', fontWeight: 300, letterSpacing: '-0.03em', marginBottom: '10px' }}>{s.value}</div>
              <div style={{ fontSize: '12px', color: '#444', lineHeight: 1.6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 01 Problem ── */}
      <section id="problem" style={{ maxWidth: '960px', margin: '0 auto', padding: '120px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.1em', color: '#444', textTransform: 'uppercase', marginBottom: '28px' }}>01 · The Problem</div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 300, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
              Drug testing starts with lab models that routinely let researchers down.
            </h2>
          </div>
          <div style={{ paddingTop: '52px' }}>
            <p style={{ fontSize: '15px', color: '#777', lineHeight: 1.85, marginBottom: '28px' }}>
              When a drug candidate enters the lab, it gets tested on tumor models — small 3D constructs meant to mimic real cancer tissue. The problem? Most of these models fail silently. They look fine, but the data they produce doesn't reflect how the drug would actually behave in a patient.
            </p>
            <p style={{ fontSize: '15px', color: '#777', lineHeight: 1.85 }}>
              Labs spend months — and an average of $128,000 per year — running experiments they can't trust. By the time the failure shows up, the damage is done: wasted resources, misleading results, and drugs that looked promising in the lab but failed in the clinic.
            </p>
            <div style={{ marginTop: '52px' }}>
              {[
                ['01', 'No way to know if a model will work before you use it'],
                ['02', 'Results vary batch to batch — hard to compare studies'],
                ['03', 'Failures surface after months of wasted work'],
              ].map(([n, t]) => (
                <div key={n} style={{ padding: '20px 0', borderTop: '1px solid #1a1a1a', display: 'flex', gap: '24px' }}>
                  <span style={{ fontSize: '11px', color: '#333', letterSpacing: '0.05em', flexShrink: 0, paddingTop: '2px' }}>{n}</span>
                  <span style={{ fontSize: '14px', color: '#bbb', lineHeight: 1.65 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 02 Approach ── */}
      <section id="approach" style={{ borderTop: '1px solid #1a1a1a', background: '#0d0d0d' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '120px 48px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: '11px', letterSpacing: '0.1em', color: '#444', textTransform: 'uppercase', marginBottom: '28px' }}>02 · Our Approach</div>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 300, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                We certify every model before it leaves our lab.
              </h2>
            </div>
            <div style={{ paddingTop: '52px' }}>
              <p style={{ fontSize: '15px', color: '#777', lineHeight: 1.85, marginBottom: '28px' }}>
                Adam Biotech doesn't just manufacture tumor models — we qualify them. Every model we build goes through a rigorous certification process: we track manufacturing data throughout production, then take early biological measurements, and combine both into a clear pass/fail decision.
              </p>
              <p style={{ fontSize: '15px', color: '#777', lineHeight: 1.85, marginBottom: '40px' }}>
                If a model doesn't pass certification, it doesn't ship. Labs receive only models that are verified, traceable, and ready to generate results you can actually act on.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: '#1a1a1a' }}>
                {[
                  ['Track production', 'Every step of manufacturing is logged and measured'],
                  ['Measure biology early', 'Cell behavior is assessed against defined benchmarks'],
                  ['Certify or reject', 'Each model gets a clear pass/fail before it ships'],
                  ['Full traceability', 'Every result is tied back to exactly how the model was made'],
                ].map(([title, desc]) => (
                  <div key={title} style={{ background: '#0d0d0d', padding: '28px 24px' }}>
                    <div style={{ fontSize: '13px', fontWeight: 500, color: '#e0e0e0', marginBottom: '10px' }}>{title}</div>
                    <div style={{ fontSize: '12px', color: '#444', lineHeight: 1.6 }}>{desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 Product ── */}
      <section id="product" style={{ borderTop: '1px solid #1a1a1a' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '120px 48px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: '11px', letterSpacing: '0.1em', color: '#444', textTransform: 'uppercase', marginBottom: '28px' }}>03 · Product</div>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 300, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                OvaMatrix-R
              </h2>
              <p style={{ fontSize: '15px', color: '#777', lineHeight: 1.85, marginTop: '24px' }}>
                Our first certified tumor model. Purpose-built for ovarian cancer drug testing — designed to produce reliable, comparable results study after study.
              </p>
              <p style={{ fontSize: '15px', color: '#777', lineHeight: 1.85, marginTop: '16px' }}>
                Every OvaMatrix-R model ships with a certification record. You know exactly how it was made and that it passed quality before it reached you.
              </p>
              <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#f0f0f0', textDecoration: 'underline', textUnderlineOffset: '4px', marginTop: '36px' }}>
                Request a sample →
              </a>
            </div>
            <div style={{ paddingTop: '52px' }}>
              <div>
                {[
                  ['Cancer type', 'Ovarian cancer'],
                  ['Designed for', 'Drug response & treatment sensitivity testing'],
                  ['Quality', 'Every model individually certified'],
                  ['Consistency', 'Batch-to-batch comparable results'],
                  ['Records', 'Full manufacturing history included'],
                  ['Platform', 'Expandable to additional cancer types'],
                  ['Contact', 'founders@adambiotech.com'],
                ].map(([label, value], i) => (
                  <div key={label} style={{ padding: '18px 0', borderBottom: i < 6 ? '1px solid #1a1a1a' : 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '24px' }}>
                    <span style={{ fontSize: '11px', color: '#444', textTransform: 'uppercase', letterSpacing: '0.06em', flexShrink: 0 }}>{label}</span>
                    <span style={{ fontSize: '13px', color: '#bbb', textAlign: 'right' }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04 Why Now ── */}
      <section style={{ borderTop: '1px solid #1a1a1a', background: '#0d0d0d' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '120px 48px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: '11px', letterSpacing: '0.1em', color: '#444', textTransform: 'uppercase', marginBottom: '28px' }}>04 · Why Now</div>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 300, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                The market is large. The quality standard doesn't exist yet.
              </h2>
            </div>
            <div style={{ paddingTop: '52px' }}>
              {[
                ['01', 'Regulators want better preclinical methods', 'The FDA is actively pushing drug developers to move beyond animal testing toward human tissue models. Demand for reliable alternatives is growing.'],
                ['02', '$4.9B market with no certification layer', 'The preclinical CRO market is large and growing. Labs are already spending heavily on tumor models — but there\'s no quality standard for what they\'re buying.'],
                ['03', 'Labs are ready to switch', 'In direct conversations with potential customers, 11 out of 13 indicated they\'d purchase a certified model if one were available. The demand is there.'],
                ['04', 'Nobody has built what Adam is building', 'Others are making models. Nobody has built the certification system that makes them trustworthy. That\'s where Adam is positioned.'],
              ].map(([n, title, desc]) => (
                <div key={n} style={{ padding: '28px 0', borderTop: '1px solid #1a1a1a' }}>
                  <div style={{ display: 'flex', gap: '20px', marginBottom: '10px' }}>
                    <span style={{ fontSize: '11px', color: '#333', letterSpacing: '0.05em', flexShrink: 0, paddingTop: '2px' }}>{n}</span>
                    <span style={{ fontSize: '14px', fontWeight: 500, color: '#e8e8e8' }}>{title}</span>
                  </div>
                  <div style={{ fontSize: '13px', color: '#555', lineHeight: 1.7, paddingLeft: '31px' }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 05 Team ── */}
      <section id="team" style={{ borderTop: '1px solid #1a1a1a' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '120px 48px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: '11px', letterSpacing: '0.1em', color: '#444', textTransform: 'uppercase', marginBottom: '28px' }}>05 · Team</div>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 300, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                Built by founders who understand both the biology and the build.
              </h2>
            </div>
            <div style={{ paddingTop: '52px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
                {[
                  {
                    name: 'Dharshini Hariharan',
                    role: 'CEO & Co-Founder',
                    bio: 'Biomedical engineer with deep expertise in 3D tissue modeling and cancer biology. Leads product strategy, customer development, and the science of what makes a good tumor model.',
                  },
                  {
                    name: 'Vitaliy Bondarenko',
                    role: 'CTO & Co-Founder',
                    bio: 'Systems engineer specializing in manufacturing quality and process control. Architecting the certification platform that makes every Adam model traceable and verifiable.',
                  },
                ].map((p) => (
                  <div key={p.name}>
                    <div style={{ fontSize: '15px', fontWeight: 500, color: '#f0f0f0', marginBottom: '4px' }}>{p.name}</div>
                    <div style={{ fontSize: '11px', color: '#444', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.07em' }}>{p.role}</div>
                    <div style={{ fontSize: '13px', color: '#5a5a5a', lineHeight: 1.75 }}>{p.bio}</div>
                  </div>
                ))}
                <div style={{ paddingTop: '8px', borderTop: '1px solid #1a1a1a' }}>
                  <div style={{ fontSize: '11px', color: '#333', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '18px' }}>Backed by</div>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {['YC W27', 'Founders Inc', 'NSF I-Corps', 'Dempsey Sweet 16'].map((b) => (
                      <span key={b} style={{ fontSize: '11px', color: '#444', border: '1px solid #222', padding: '5px 12px', letterSpacing: '0.05em' }}>{b}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 06 Contact ── */}
      <section id="contact" style={{ borderTop: '1px solid #1a1a1a', background: '#0d0d0d' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '120px 48px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: '11px', letterSpacing: '0.1em', color: '#444', textTransform: 'uppercase', marginBottom: '28px' }}>06 · Contact</div>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 300, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                Let's work together.
              </h2>
              <p style={{ fontSize: '15px', color: '#777', lineHeight: 1.85, marginTop: '24px' }}>
                We're actively partnering with pharma companies, biotech labs, and CROs who want to move to certified tumor models. If you're running drug development work and want models you can trust, let's talk.
              </p>
              <div style={{ marginTop: '36px' }}>
                <a href="mailto:founders@adambiotech.com" style={{ fontSize: '14px', color: '#f0f0f0', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                  founders@adambiotech.com →
                </a>
              </div>
            </div>
            <div style={{ paddingTop: '52px' }}>
              {submitted ? (
                <div style={{ padding: '40px 0' }}>
                  <p style={{ fontSize: '14px', color: '#777', lineHeight: 1.8 }}>Thanks — we'll be in touch shortly at <span style={{ color: '#f0f0f0' }}>{formData.email}</span>.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
                  {[
                    { id: 'name', label: 'Your name', type: 'text' },
                    { id: 'email', label: 'Email address', type: 'email' },
                    { id: 'organization', label: 'Organization', type: 'text' },
                    { id: 'role', label: 'Your role', type: 'text' },
                  ].map((f) => (
                    <div key={f.id}>
                      <label style={labelStyle}>{f.label}</label>
                      <input
                        type={f.type}
                        value={formData[f.id as keyof typeof formData]}
                        onChange={(e) => setFormData({ ...formData, [f.id]: e.target.value })}
                        required
                        style={inputStyle}
                      />
                    </div>
                  ))}
                  <div>
                    <label style={labelStyle}>How can we help</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      style={{ ...inputStyle, resize: 'none' }}
                    />
                  </div>
                  <button
                    type="submit"
                    style={{ alignSelf: 'flex-start', background: 'transparent', border: 'none', color: '#f0f0f0', fontSize: '14px', cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: '4px', padding: 0, fontFamily: 'inherit' }}
                  >
                    Send message →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ borderTop: '1px solid #1a1a1a' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '32px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '12px', color: '#333' }}>© 2026 Adam Biotech</span>
          <a href="mailto:founders@adambiotech.com" style={{ fontSize: '12px', color: '#333', textDecoration: 'none' }}>founders@adambiotech.com</a>
        </div>
      </footer>

    </main>
  );
}
