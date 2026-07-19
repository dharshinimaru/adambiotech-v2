'use client';
import { useState } from 'react';

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', org: '', role: '', message: '' });
  const [sent, setSent] = useState(false);

  const navLinks = [
    { href: '#problem', label: 'Problem' },
    { href: '#solution', label: 'Solution' },
    { href: '#product', label: 'Product' },
    { href: '#team', label: 'Team' },
  ];

  const stats = [
    { value: '$128K', label: 'wasted per lab per year on experiments with flawed tumor models' },
    { value: '90%', label: 'accuracy in predicting whether a model will generate reliable data' },
    { value: '$4.9B', label: 'preclinical contract research market Adam serves' },
    { value: '$1.5B', label: 'bioprinted tissue market projected by 2032' },
  ];

  const problems = [
    { n: '01', title: 'Models fail silently', desc: 'A flawed tumor model looks normal. You find out something was wrong only after the experiment is over.' },
    { n: '02', title: 'Results mislead', desc: 'Inconsistent models produce inconsistent data — leading research teams to wrong conclusions about a drug.' },
    { n: '03', title: 'The cost adds up', desc: 'Labs waste $128K per year on failed experiments. More importantly, they lose time that could have gone to better leads.' },
  ];

  const approach = [
    { title: 'Built to spec', desc: 'We manufacture each tumor model to a defined standard — not "close enough." The structure, the cell placement, the maturation — all tracked.' },
    { title: 'Verified before it ships', desc: 'Every model goes through our qualification check before it leaves our lab. If it doesn\'t pass, we catch it. Not you.' },
    { title: 'Traceable record', desc: 'Each model ships with a quality record connecting how it was made to what you can expect from it in a test.' },
    { title: 'A platform, not a one-off', desc: 'Ovarian cancer is our first application. The same qualification system will apply to every tumor type we add.' },
  ];

  const productSpecs = [
    { label: 'Application', value: 'Cancer drug testing (preclinical)' },
    { label: 'Cancer type', value: 'Ovarian cancer — expanding to others' },
    { label: 'What you receive', value: 'Certified tumor model + quality certificate' },
    { label: 'Hardware', value: '$4,000 one-time' },
    { label: 'Subscription', value: '$2,300 / month' },
    { label: 'Delivery', value: 'Individually verified, ready to run' },
    { label: 'Traceability', value: 'Full record: manufacture → verification → expected response' },
  ];

  const whyNow = [
    { n: '01', title: 'Regulatory shift', desc: 'The FDA is actively pushing for better lab-based alternatives to animal testing. The timing has never been better.' },
    { n: '02', title: 'Growing market', desc: 'The bioprinted tissue market is projected to reach $1.5B by 2032. The preclinical research market is $4.9B today.' },
    { n: '03', title: 'Proven demand', desc: '11 out of 13 potential customers confirmed interest in early conversations. The need is real and immediate.' },
    { n: '04', title: 'The quality layer is missing', desc: 'Bioprinted tumor models are becoming a recognized category. The standard for verifying them doesn\'t exist yet. That\'s Adam.' },
  ];

  const team = [
    { name: 'Dharshini Marudhamuthu', role: 'Co-founder & CEO', bio: 'Biomedical engineer with deep experience in tissue engineering and preclinical drug testing systems.' },
    { name: 'Vitaliy Peresypkin', role: 'Co-founder & CTO', bio: 'Engineer building the systems that monitor, verify, and certify each model before it ships.' },
  ];

  const badges = ['YC W27', 'NSF', 'Dempsey Center', 'Founders Inc'];

  const formFields = [
    { key: 'name', label: 'NAME', type: 'text', placeholder: 'Your name' },
    { key: 'email', label: 'EMAIL', type: 'email', placeholder: 'your@email.com' },
    { key: 'org', label: 'ORGANIZATION', type: 'text', placeholder: 'Company or institution' },
    { key: 'role', label: 'ROLE', type: 'text', placeholder: 'Your title' },
  ];

  const s = {
    page: { fontFamily: 'inherit', background: '#0a0a0a', color: '#f0f0f0', minHeight: '100vh' } as React.CSSProperties,
    nav: { position: 'fixed' as const, top: 0, left: 0, right: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 48px', borderBottom: '1px solid #1a1a1a', background: 'rgba(10,10,10,0.96)', backdropFilter: 'blur(8px)' } as React.CSSProperties,
    navLogo: { fontSize: '15px', fontWeight: 500, letterSpacing: '0.02em' } as React.CSSProperties,
    navLinks: { display: 'flex', gap: '36px' } as React.CSSProperties,
    navLink: { fontSize: '13px', color: '#666', textDecoration: 'none' } as React.CSSProperties,
    navCta: { fontSize: '13px', color: '#f0f0f0', textDecoration: 'underline', textUnderlineOffset: '3px' } as React.CSSProperties,
    hero: { minHeight: '100vh', display: 'flex', flexDirection: 'column' as const, justifyContent: 'flex-end', padding: '160px 48px 80px' } as React.CSSProperties,
    eyebrow: { fontSize: '11px', color: '#555', letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: '32px' } as React.CSSProperties,
    h1: { fontSize: 'clamp(52px, 8vw, 96px)', fontWeight: 300, lineHeight: 1.05, letterSpacing: '-0.03em', margin: '0 0 36px', maxWidth: '900px' } as React.CSSProperties,
    heroSub: { fontSize: '18px', color: '#777', maxWidth: '520px', lineHeight: 1.75, marginBottom: '48px' } as React.CSSProperties,
    textLink: { fontSize: '14px', color: '#f0f0f0', textDecoration: 'underline', textUnderlineOffset: '4px' } as React.CSSProperties,
    statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a' } as React.CSSProperties,
    statCell: (last: boolean) => ({ padding: '48px 36px', borderRight: last ? 'none' : '1px solid #1a1a1a' } as React.CSSProperties),
    statVal: { fontSize: '36px', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '12px' } as React.CSSProperties,
    statLabel: { fontSize: '13px', color: '#555', lineHeight: 1.55 } as React.CSSProperties,
    section: { padding: '120px 48px', borderBottom: '1px solid #1a1a1a' } as React.CSSProperties,
    sectionLast: { padding: '120px 48px' } as React.CSSProperties,
    secLabel: { fontSize: '11px', color: '#555', letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: '64px' } as React.CSSProperties,
    twoCol: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' } as React.CSSProperties,
    h2: { fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 300, lineHeight: 1.2, letterSpacing: '-0.02em' } as React.CSSProperties,
    body: { fontSize: '15px', color: '#777', lineHeight: 1.8, marginBottom: '24px' } as React.CSSProperties,
    cardGrid3: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1px', background: '#1a1a1a' } as React.CSSProperties,
    cardGrid2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: '#1a1a1a' } as React.CSSProperties,
    card: { padding: '32px 28px', background: '#0a0a0a' } as React.CSSProperties,
    cardNum: { fontSize: '11px', color: '#333', marginBottom: '16px' } as React.CSSProperties,
    cardTitle: { fontSize: '14px', fontWeight: 500, marginBottom: '12px' } as React.CSSProperties,
    cardDesc: { fontSize: '13px', color: '#555', lineHeight: 1.65 } as React.CSSProperties,
    specTable: { border: '1px solid #1a1a1a' } as React.CSSProperties,
    specRow: (last: boolean) => ({ display: 'grid', gridTemplateColumns: '1fr 1.4fr', padding: '16px 24px', borderBottom: last ? 'none' : '1px solid #1a1a1a' } as React.CSSProperties),
    specLabel: { fontSize: '12px', color: '#444', letterSpacing: '0.04em' } as React.CSSProperties,
    specVal: { fontSize: '13px', color: '#e0e0e0' } as React.CSSProperties,
    badgeRow: { display: 'flex', gap: '12px', flexWrap: 'wrap' as const, marginTop: '40px' } as React.CSSProperties,
    badge: { fontSize: '11px', letterSpacing: '0.1em', padding: '6px 14px', border: '1px solid #222', color: '#555' } as React.CSSProperties,
    formField: { display: 'flex', flexDirection: 'column' as const } as React.CSSProperties,
    formLabel: { fontSize: '10px', letterSpacing: '0.15em', color: '#444', marginBottom: '10px' } as React.CSSProperties,
    input: { background: 'transparent', border: 'none', borderBottom: '1px solid #222', color: '#f0f0f0', fontSize: '14px', padding: '8px 0', outline: 'none', width: '100%' } as React.CSSProperties,
    submitBtn: { background: 'transparent', border: 'none', padding: 0, color: '#f0f0f0', fontSize: '14px', cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: '4px', textAlign: 'left' as const } as React.CSSProperties,
    footer: { borderTop: '1px solid #1a1a1a', padding: '28px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' } as React.CSSProperties,
    footerText: { fontSize: '12px', color: '#333' } as React.CSSProperties,
  };

  return (
    <main style={s.page}>
      {/* NAV */}
      <nav style={s.nav}>
        <span style={s.navLogo}>Adam Biotech</span>
        <div style={s.navLinks}>
          {navLinks.map(l => (
            <a key={l.href} href={l.href} style={s.navLink}>{l.label}</a>
          ))}
        </div>
        <a href="#contact" style={s.navCta}>Partner with us →</a>
      </nav>

      {/* HERO */}
      <section style={s.hero}>
        <p style={s.eyebrow}>YC W27 · NSF · Dempsey Center · Founders Inc</p>
        <h1 style={s.h1}>Tumor models<br />that actually work.</h1>
        <p style={s.heroSub}>
          Adam Biotech builds certified human tumor models for cancer drug testing —
          and verifies every single one is ready before it reaches your lab.
        </p>
        <a href="#problem" style={s.textLink}>See how it works ↓</a>
      </section>

      {/* STATS */}
      <div style={s.statsGrid}>
        {stats.map((st, i) => (
          <div key={i} style={s.statCell(i === stats.length - 1)}>
            <div style={s.statVal}>{st.value}</div>
            <div style={s.statLabel}>{st.label}</div>
          </div>
        ))}
      </div>

      {/* 01 PROBLEM */}
      <section id="problem" style={s.section}>
        <p style={s.secLabel}>01 · The Problem</p>
        <div style={s.twoCol}>
          <h2 style={s.h2}>Most tumor models used in drug testing are unreliable.</h2>
          <div>
            <p style={s.body}>
              When a pharmaceutical company tests a new cancer drug, they use lab-grown tumor models — small human tissue constructs
              that mimic a real tumor. The goal is to find out if the drug works before spending millions on clinical trials.
            </p>
            <p style={s.body}>
              The problem: these models are inconsistent. They behave differently batch-to-batch, and no one catches it until
              after the experiment — wasting compounds, time, and critical go/no-go decisions.
            </p>
            <div style={s.cardGrid3}>
              {problems.map(c => (
                <div key={c.n} style={s.card}>
                  <p style={s.cardNum}>{c.n}</p>
                  <p style={s.cardTitle}>{c.title}</p>
                  <p style={s.cardDesc}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02 SOLUTION */}
      <section id="solution" style={s.section}>
        <p style={s.secLabel}>02 · Our Approach</p>
        <div style={s.twoCol}>
          <h2 style={s.h2}>We certify every model before it leaves our lab.</h2>
          <div>
            <p style={s.body}>
              Adam Biotech has built a quality system for tumor models. We monitor how each model is made —
              from how cells are placed to how the construct matures — and verify it will perform correctly
              in a drug test before we ship it.
            </p>
            <p style={{ ...s.body, marginBottom: '40px' }}>
              Think of it as the quality standard the field has been missing.
              Adam isn&apos;t building just another tumor model — we&apos;re building the infrastructure
              that makes human tumor models trustworthy for drug-development decisions.
            </p>
            <div style={s.cardGrid2}>
              {approach.map((c, i) => (
                <div key={i} style={s.card}>
                  <p style={s.cardTitle}>{c.title}</p>
                  <p style={s.cardDesc}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 03 PRODUCT */}
      <section id="product" style={s.section}>
        <p style={s.secLabel}>03 · Product</p>
        <div style={s.twoCol}>
          <div>
            <h2 style={{ ...s.h2, marginBottom: '20px' }}>OvaMatrix-R</h2>
            <p style={{ fontSize: '15px', color: '#555', marginBottom: '28px', lineHeight: 1.6 }}>A certified ovarian cancer model for drug testing.</p>
            <p style={s.body}>
              OvaMatrix-R is our first product — a human tumor model purpose-built for testing cancer drugs against ovarian cancer.
              It&apos;s not just a tissue construct. It&apos;s a verified assay.
            </p>
            <p style={s.body}>
              You get reliable results from day one, with a traceable record connecting how the model was made
              to what you can expect from it in a test. Use it to evaluate whether a compound is effective
              before committing to expensive downstream studies.
            </p>
            <a href="#contact" style={{ ...s.textLink, display: 'inline-block', marginTop: '16px' }}>Request early access →</a>
          </div>
          <div style={s.specTable}>
            {productSpecs.map((r, i) => (
              <div key={i} style={s.specRow(i === productSpecs.length - 1)}>
                <span style={s.specLabel}>{r.label}</span>
                <span style={s.specVal}>{r.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 WHY NOW */}
      <section style={s.section}>
        <p style={s.secLabel}>04 · Why Now</p>
        <div style={s.twoCol}>
          <h2 style={s.h2}>The field is ready for a quality standard. No one has built it yet.</h2>
          <div style={s.cardGrid2}>
            {whyNow.map(c => (
              <div key={c.n} style={s.card}>
                <p style={s.cardNum}>{c.n}</p>
                <p style={s.cardTitle}>{c.title}</p>
                <p style={s.cardDesc}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 TEAM */}
      <section id="team" style={s.section}>
        <p style={s.secLabel}>05 · Team</p>
        <div style={s.twoCol}>
          <h2 style={s.h2}>Built by scientists who understand how hard this problem is.</h2>
          <div>
            <div style={s.cardGrid2}>
              {team.map((m, i) => (
                <div key={i} style={s.card}>
                  <p style={s.cardTitle}>{m.name}</p>
                  <p style={{ fontSize: '12px', color: '#444', letterSpacing: '0.05em', marginBottom: '14px' }}>{m.role}</p>
                  <p style={s.cardDesc}>{m.bio}</p>
                </div>
              ))}
            </div>
            <div style={s.badgeRow}>
              {badges.map(b => (
                <span key={b} style={s.badge}>{b}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 06 CONTACT */}
      <section id="contact" style={s.sectionLast}>
        <p style={s.secLabel}>06 · Contact</p>
        <div style={s.twoCol}>
          <div>
            <h2 style={{ ...s.h2, marginBottom: '24px' }}>Partner with us.</h2>
            <p style={s.body}>
              We&apos;re working with early partners — pharma research teams, CROs, and investors
              who see the gap in tumor model quality and want to be part of closing it.
            </p>
            <p style={{ fontSize: '14px', color: '#555', marginTop: '16px' }}>
              founders@adambiotech.com
            </p>
          </div>
          {!sent ? (
            <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {formFields.map(f => (
                <div key={f.key} style={s.formField}>
                  <label style={s.formLabel}>{f.label}</label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    value={form[f.key as keyof typeof form]}
                    onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                    style={s.input}
                  />
                </div>
              ))}
              <div style={s.formField}>
                <label style={s.formLabel}>MESSAGE</label>
                <textarea
                  placeholder="What are you working on?"
                  rows={4}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  style={{ ...s.input, resize: 'none' }}
                />
              </div>
              <button type="submit" style={s.submitBtn}>Send message →</button>
            </form>
          ) : (
            <div style={{ paddingTop: '40px' }}>
              <p style={{ fontSize: '20px', fontWeight: 300, marginBottom: '12px' }}>Thank you — we&apos;ll be in touch.</p>
              <p style={{ fontSize: '14px', color: '#555' }}>Expect a reply from the founders within 24 hours.</p>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={s.footer}>
        <span style={s.footerText}>Adam Biotech · adambiotech.com</span>
        <span style={s.footerText}>© 2026</span>
      </footer>
    </main>
  );
}
