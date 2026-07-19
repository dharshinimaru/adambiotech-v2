export default function Home() {
  return (
    <main style={{ background: '#0a0a0a', color: '#f0f0f0', fontFamily: "'Inter', 'Helvetica Neue', sans-serif", minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, borderBottom: '1px solid #1a1a1a', background: 'rgba(10,10,10,0.95)', backdropFilter: 'blur(8px)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px' }}>
          <span style={{ fontSize: '1rem', fontWeight: 700, letterSpacing: '-0.02em', color: '#fff' }}>Adam Biotech</span>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="#approach" style={{ color: '#888', textDecoration: 'none', fontSize: '0.85rem' }}>Our Approach</a>
            <a href="#product" style={{ color: '#888', textDecoration: 'none', fontSize: '0.85rem' }}>Product</a>
            <a href="#team" style={{ color: '#888', textDecoration: 'none', fontSize: '0.85rem' }}>Team</a>
            <a href="#contact" style={{ color: '#f0f0f0', textDecoration: 'underline', fontSize: '0.85rem' }}>Work with us →</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ paddingTop: '120px', paddingBottom: '80px', maxWidth: '1100px', margin: '0 auto', padding: '120px 2rem 80px' }}>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          {['YC W27', 'NSF', 'Dempsey Innovation', 'Founders Inc'].map(badge => (
            <span key={badge} style={{ fontSize: '0.7rem', color: '#666', border: '1px solid #2a2a2a', padding: '0.25rem 0.6rem', borderRadius: '4px', letterSpacing: '0.05em' }}>{badge}</span>
          ))}
        </div>
        <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, margin: '0 0 1.5rem', color: '#fff', maxWidth: '700px' }}>
          The quality standard for human tumor models.
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#888', maxWidth: '540px', lineHeight: 1.7, margin: '0 0 2.5rem' }}>
          Most lab tumor models fail silently — giving researchers false results they don&apos;t catch until it&apos;s too late. Adam Biotech builds human tumor models that are verified to work before they ever leave our lab.
        </p>
        <a href="#contact" style={{ color: '#f0f0f0', textDecoration: 'underline', fontSize: '1rem' }}>Request a sample →</a>
      </section>

      {/* STATS */}
      <section style={{ borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {[
            { value: '$128K', label: 'wasted per lab each year on failed models' },
            { value: '90%', label: 'accuracy catching problems before they reach you' },
            { value: '$4.9B', label: 'drug-testing market we are entering' },
            { value: '11 of 13', label: 'pharma buyers said they would purchase' },
          ].map((stat, i) => (
            <div key={i} style={{ padding: '2.5rem 1.5rem', borderRight: i < 3 ? '1px solid #1a1a1a' : 'none' }}>
              <div style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: '-0.03em', color: '#fff', marginBottom: '0.4rem' }}>{stat.value}</div>
              <div style={{ fontSize: '0.8rem', color: '#666', lineHeight: 1.5 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 01 THE PROBLEM */}
      <section id="problem" style={{ maxWidth: '1100px', margin: '0 auto', padding: '6rem 2rem', borderBottom: '1px solid #1a1a1a' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <div style={{ fontSize: '0.7rem', color: '#555', letterSpacing: '0.1em', marginBottom: '1rem' }}>01 · THE PROBLEM</div>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: '-0.03em', color: '#fff', margin: 0, lineHeight: 1.2 }}>Lab tumor models fail — and nobody notices until it&apos;s too late.</h2>
          </div>
          <div>
            <p style={{ color: '#888', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.95rem' }}>
              When a pharmaceutical company tests a drug, it uses lab-grown tumor samples to see if the drug works. But most of those samples are unreliable — they behave differently batch to batch, and there&apos;s no way to know until a study is already ruined.
            </p>
            <p style={{ color: '#888', lineHeight: 1.8, marginBottom: '2.5rem', fontSize: '0.95rem' }}>
              That silent failure costs labs an average of $128,000 per year in wasted time, compounds, and effort. Across the industry, it&apos;s one of the biggest hidden drains on drug development.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
              {[
                { num: '01', title: 'Silent failures', desc: 'Models look fine but produce misleading results' },
                { num: '02', title: 'Wasted cycles', desc: '$128K lost per lab per year on bad data' },
                { num: '03', title: 'No standard', desc: 'The field has no agreed quality bar — yet' },
              ].map(card => (
                <div key={card.num} style={{ padding: '1.2rem', border: '1px solid #1a1a1a' }}>
                  <div style={{ fontSize: '0.65rem', color: '#444', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{card.num}</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#ddd', marginBottom: '0.4rem' }}>{card.title}</div>
                  <div style={{ fontSize: '0.75rem', color: '#666', lineHeight: 1.5 }}>{card.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02 OUR APPROACH */}
      <section id="approach" style={{ maxWidth: '1100px', margin: '0 auto', padding: '6rem 2rem', borderBottom: '1px solid #1a1a1a' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <div style={{ fontSize: '0.7rem', color: '#555', letterSpacing: '0.1em', marginBottom: '1rem' }}>02 · OUR APPROACH</div>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: '-0.03em', color: '#fff', margin: 0, lineHeight: 1.2 }}>We certify every model before it ships.</h2>
          </div>
          <div>
            <p style={{ color: '#888', lineHeight: 1.8, marginBottom: '2.5rem', fontSize: '0.95rem' }}>
              Adam Biotech builds human ovarian tumor models using an advanced 3D bioprinting process — and then runs every single model through a rigorous quality check before it leaves our lab. If a model doesn&apos;t meet our standards, it doesn&apos;t ship. Simple as that.
            </p>
            <p style={{ color: '#888', lineHeight: 1.8, marginBottom: '2.5rem', fontSize: '0.95rem' }}>
              This is the quality layer the drug-testing field has been missing. Researchers can finally trust their models — and stop losing months of work to results that can&apos;t be replicated.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0' }}>
              {[
                { step: '01', label: 'Build', desc: 'We construct a 3D human tumor model to your spec' },
                { step: '02', label: 'Measure', desc: 'Our system monitors how the model forms and behaves' },
                { step: '03', label: 'Qualify', desc: 'Each model is scored against strict release criteria' },
                { step: '04', label: 'Ship', desc: 'Only certified models reach your lab' },
              ].map((s, i) => (
                <div key={s.step} style={{ padding: '1.5rem 1rem', borderLeft: i > 0 ? '1px solid #1a1a1a' : 'none', borderTop: '1px solid #1a1a1a' }}>
                  <div style={{ fontSize: '0.65rem', color: '#444', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{s.step}</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#ddd', marginBottom: '0.4rem' }}>{s.label}</div>
                  <div style={{ fontSize: '0.72rem', color: '#666', lineHeight: 1.5 }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 03 OVAMATRIX-R */}
      <section id="product" style={{ maxWidth: '1100px', margin: '0 auto', padding: '6rem 2rem', borderBottom: '1px solid #1a1a1a' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <div style={{ fontSize: '0.7rem', color: '#555', letterSpacing: '0.1em', marginBottom: '1rem' }}>03 · PRODUCT</div>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: '-0.03em', color: '#fff', margin: '0 0 1.5rem', lineHeight: 1.2 }}>OvaMatrix-R</h2>
            <p style={{ color: '#888', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              Our first product is a certified ovarian cancer model built for drug response testing. Ovarian cancer is one of the deadliest cancers with some of the fewest treatment options — it urgently needs better lab models, and researchers know it.
            </p>
            <p style={{ color: '#888', lineHeight: 1.8, fontSize: '0.95rem' }}>
              OvaMatrix-R ships ready to use, quality-certified, and accompanied by documentation so researchers know exactly what they&apos;re working with.
            </p>
          </div>
          <div style={{ border: '1px solid #1a1a1a' }}>
            {[
              { label: 'Cancer type', value: 'High-grade serous ovarian cancer' },
              { label: 'Format', value: '96-well plate (standard lab compatible)' },
              { label: 'Quality certification', value: 'Included — every model batch tested' },
              { label: 'Hardware', value: '$4,000 one-time setup' },
              { label: 'Monthly subscription', value: '$2,300/month (models + support)' },
              { label: 'Lead time', value: 'Contact us for availability' },
            ].map((row, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 1.5rem', borderBottom: i < 5 ? '1px solid #1a1a1a' : 'none', gap: '1rem' }}>
                <span style={{ fontSize: '0.78rem', color: '#555' }}>{row.label}</span>
                <span style={{ fontSize: '0.78rem', color: '#ccc', textAlign: 'right' }}>{row.value}</span>
              </div>
            ))}
            <div style={{ padding: '1.5rem' }}>
              <a href="#contact" style={{ color: '#f0f0f0', textDecoration: 'underline', fontSize: '0.85rem' }}>Request a sample →</a>
            </div>
          </div>
        </div>
      </section>

      {/* 04 WHY NOW */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '6rem 2rem', borderBottom: '1px solid #1a1a1a' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <div style={{ fontSize: '0.7rem', color: '#555', letterSpacing: '0.1em', marginBottom: '1rem' }}>04 · WHY NOW</div>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: '-0.03em', color: '#fff', margin: 0, lineHeight: 1.2 }}>The drug-testing industry is changing — fast.</h2>
          </div>
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
              {[
                { num: '01', title: 'Regulators are pushing for human models', desc: 'The FDA is actively encouraging a shift away from animal testing toward human-based lab models. Demand is growing by policy, not just preference.' },
                { num: '02', title: 'A $4.9B market with no quality standard', desc: 'The preclinical drug-testing market is nearly $5 billion — and no one has set the quality bar for tumor models yet. That gap is Adam\'s opportunity.' },
                { num: '03', title: 'Strong buyer intent already confirmed', desc: '11 out of 13 pharma buyers we spoke with said they\'d purchase a certified tumor model. The demand is real and waiting.' },
                { num: '04', title: 'Ovarian cancer is underserved', desc: 'Ovarian cancer has a 50% mortality rate and fewer treatment options than almost any other cancer. It\'s a disease where better lab models can directly save lives.' },
              ].map((item, i) => (
                <div key={item.num} style={{ padding: '1.5rem', border: '1px solid #1a1a1a', marginTop: '-1px', marginLeft: i % 2 !== 0 ? '-1px' : '0' }}>
                  <div style={{ fontSize: '0.65rem', color: '#444', letterSpacing: '0.1em', marginBottom: '0.6rem' }}>{item.num}</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#ddd', marginBottom: '0.5rem', lineHeight: 1.4 }}>{item.title}</div>
                  <div style={{ fontSize: '0.75rem', color: '#666', lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05 TEAM */}
      <section id="team" style={{ maxWidth: '1100px', margin: '0 auto', padding: '6rem 2rem', borderBottom: '1px solid #1a1a1a' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <div style={{ fontSize: '0.7rem', color: '#555', letterSpacing: '0.1em', marginBottom: '1rem' }}>05 · TEAM</div>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: '-0.03em', color: '#fff', margin: '0 0 1.5rem', lineHeight: 1.2 }}>Built by researchers who know the problem firsthand.</h2>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              {['YC W27', 'NSF Supported', 'Dempsey Innovation', 'Founders Inc'].map(b => (
                <span key={b} style={{ fontSize: '0.65rem', color: '#555', border: '1px solid #2a2a2a', padding: '0.2rem 0.5rem', borderRadius: '3px' }}>{b}</span>
              ))}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {[
              { name: 'Dharshini Marimuthu', role: 'CEO & Co-founder', bio: 'Bioengineering researcher with deep expertise in tumor biology and preclinical drug testing.' },
              { name: 'Vitaliy Yurkiv', role: 'CTO & Co-founder', bio: 'Bioprinting engineer with experience in advanced manufacturing and quality systems.' },
            ].map(person => (
              <div key={person.name} style={{ padding: '1.5rem', border: '1px solid #1a1a1a' }}>
                <div style={{ width: '40px', height: '40px', background: '#1a1a1a', borderRadius: '50%', marginBottom: '1rem' }} />
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#ddd', marginBottom: '0.3rem' }}>{person.name}</div>
                <div style={{ fontSize: '0.72rem', color: '#555', marginBottom: '0.8rem' }}>{person.role}</div>
                <div style={{ fontSize: '0.75rem', color: '#666', lineHeight: 1.6 }}>{person.bio}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 CONTACT */}
      <section id="contact" style={{ maxWidth: '1100px', margin: '0 auto', padding: '6rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <div style={{ fontSize: '0.7rem', color: '#555', letterSpacing: '0.1em', marginBottom: '1rem' }}>06 · CONTACT</div>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: '-0.03em', color: '#fff', margin: '0 0 1.5rem', lineHeight: 1.2 }}>Let&apos;s talk about what you&apos;re working on.</h2>
            <p style={{ color: '#888', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1rem' }}>
              Whether you&apos;re a pharma partner, research lab, or investor — we want to hear from you.
            </p>
            <p style={{ color: '#555', fontSize: '0.85rem' }}>founders@adambiotech.com</p>
          </div>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
            {[
              { label: 'NAME', placeholder: 'Your name', type: 'text' },
              { label: 'EMAIL', placeholder: 'you@company.com', type: 'email' },
              { label: 'ORGANIZATION', placeholder: 'Lab or company name', type: 'text' },
              { label: 'ROLE', placeholder: 'e.g. Research Director, Investor', type: 'text' },
            ].map(field => (
              <div key={field.label}>
                <label style={{ display: 'block', fontSize: '0.65rem', color: '#555', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid #2a2a2a', padding: '0.5rem 0', color: '#f0f0f0', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }}
                />
              </div>
            ))}
            <div>
              <label style={{ display: 'block', fontSize: '0.65rem', color: '#555', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>MESSAGE</label>
              <textarea
                placeholder="What are you working on? How can we help?"
                rows={4}
                style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid #2a2a2a', padding: '0.5rem 0', color: '#f0f0f0', fontSize: '0.9rem', outline: 'none', resize: 'none', boxSizing: 'border-box' }}
              />
            </div>
            <button type="submit" style={{ background: 'transparent', border: 'none', color: '#f0f0f0', fontSize: '0.9rem', textDecoration: 'underline', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
              Send message →
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid #1a1a1a', padding: '2rem', maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '0.75rem', color: '#444' }}>© 2025 Adam Biotech Inc.</span>
        <span style={{ fontSize: '0.75rem', color: '#444' }}>founders@adambiotech.com</span>
      </footer>

    </main>
  );
}
