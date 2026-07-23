import { useEffect, useState, type FormEvent, type ReactNode } from 'react';
import { caseStudies, contact, experience, metrics, nav, skillGroups } from './content';

const pageMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Ecommerce & Digital Operations Leader | Bryton C. Kober',
    description: 'Bryton C. Kober turns complex digital operations, product data, and marketplace processes into organized, scalable systems.',
  },
  '/case-studies': {
    title: 'Case Studies | Bryton C. Kober',
    description: 'Marketplace growth, PIM implementation, product-data governance, analytics, accessibility, and ecommerce operations case studies.',
  },
  '/experience': {
    title: 'Experience | Bryton C. Kober',
    description: 'Experience across marketplace operations, ecommerce, systems implementation, entrepreneurship, and web delivery.',
  },
  '/about': {
    title: 'About | Bryton C. Kober',
    description: 'Ecommerce and digital-operations leader with a background in physics, web development, analytics, and entrepreneurship.',
  },
  '/resume': {
    title: 'Resume | Bryton C. Kober',
    description: 'HTML and downloadable resumes for ecommerce, omnichannel, implementation, project, and digital-operations opportunities.',
  },
  '/contact': {
    title: 'Contact | Bryton C. Kober',
    description: 'Contact Bryton Kober about ecommerce, marketplace, implementation, product-data, and digital-operations opportunities.',
  },
};

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="monogram" href="/" aria-label="Bryton C. Kober home">
          <span className="monogram-mark" aria-hidden="true">B</span>
          <span>Bryton C. Kober</span>
        </a>
        <nav aria-label="Main navigation">
          <ul className="nav-list">
            {nav.map((item) => <li key={item.href}><a href={item.href}>{item.label}</a></li>)}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="eyebrow">The next chapter</p>
          <h2>Let’s build something that scales.</h2>
          <p>Based in Boise and relocating to Philadelphia. Open to ecommerce, implementation, product-data, and digital-operations roles.</p>
        </div>
        <div className="footer-actions">
          <a className="button primary" href="/contact">Start a conversation <span aria-hidden="true">↗</span></a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
      </div>
      <div className="shell footer-base">
        <span>© {new Date().getFullYear()} Bryton C. Kober</span>
        <span>Turning complexity into structure.</span>
      </div>
    </footer>
  );
}

function PageIntro({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <section className="page-intro shell">
      <div className="intro-orbit" aria-hidden="true"><span>✦</span></div>
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="lede">{body}</p>
    </section>
  );
}

function CardGlyph({ numeral, compact = false }: { numeral: string; compact?: boolean }) {
  return (
    <div className={`card-glyph ${compact ? 'compact' : ''}`} aria-hidden="true">
      <span className="corner top">{numeral}</span>
      <span className="glyph-star">✦</span>
      <span className="glyph-path" />
      <span className="glyph-moon">◐</span>
      <span className="corner bottom">{numeral}</span>
    </div>
  );
}

function TagList({ items }: { items: string[] }) {
  return <ul className="tag-list">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

function HomePage() {
  const selected = [caseStudies[0], caseStudies[1], caseStudies[7]];
  return (
    <>
      <section className="hero shell">
        <div className="hero-copy">
          <div className="availability"><span aria-hidden="true" /> Relocating to Philadelphia · Open to opportunities</div>
          <p className="eyebrow">Bryton C. Kober · Ecommerce & Digital Operations</p>
          <h1>Turning complex digital operations into <em>scalable systems.</em></h1>
          <p className="hero-lede">I lead ecommerce, marketplace, product-data, and implementation work that turns fragmented processes into clear, measurable operations.</p>
          <div className="button-row">
            <a className="button primary" href="/case-studies">Explore case studies <span aria-hidden="true">↗</span></a>
            <a className="button secondary" href="/resumes/bryton-kober-ecommerce-omnichannel-manager.pdf" download>Download resume <span aria-hidden="true">↓</span></a>
          </div>
          <a className="text-link" href={contact.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <span aria-hidden="true">↗</span></a>
        </div>
        <div className="hero-card-wrap">
          <div className="hero-card">
            <div className="card-number">XXI</div>
            <CardGlyph numeral="XXI" />
            <div className="hero-card-copy">
              <span>The World</span>
              <strong>Systems in motion</strong>
              <p>Marketplace · Product data · Implementation · Analytics</p>
            </div>
          </div>
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
        </div>
      </section>

      <section className="metrics-band" aria-label="Selected career results">
        <div className="shell metrics-grid">
          {metrics.map((metric) => <div className="metric" key={metric.value}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
        </div>
      </section>

      <section className="section shell split-heading">
        <div><p className="eyebrow">The operating system</p><h2>Where strategy becomes execution.</h2></div>
        <p>I connect the systems, data, workflows, and people behind digital commerce. The result is clearer ownership, healthier catalogs, better reporting, and operations that can grow without becoming chaotic.</p>
      </section>

      <section className="shell capability-grid" aria-label="Core capabilities">
        {skillGroups.map((group, index) => (
          <article className="capability-card" key={group.title}>
            <span className="card-index">0{index + 1}</span>
            <p className="arcana-label">{group.arcana}</p>
            <h3>{group.title}</h3>
            <TagList items={group.skills.slice(0, 6)} />
          </article>
        ))}
      </section>

      <section className="section shell">
        <div className="section-heading row-heading">
          <div><p className="eyebrow">Selected work</p><h2>Case studies in transformation.</h2></div>
          <a className="text-link" href="/case-studies">View all case studies <span aria-hidden="true">→</span></a>
        </div>
        <div className="case-preview-grid">
          {selected.map((study) => (
            <a className="case-preview" href={`/case-studies#${study.slug}`} key={study.slug}>
              <CardGlyph numeral={study.numeral} compact />
              <div><p className="arcana-label">{study.arcana}</p><h3>{study.title}</h3><p>{study.overview}</p><strong>{study.metric}</strong></div>
              <span className="case-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section shell result-story">
        <div className="result-emblem" aria-hidden="true"><span>✦</span><b>28+</b><small>projects</small></div>
        <div>
          <p className="eyebrow">The throughline</p>
          <h2>From investigation to implementation.</h2>
          <p>Across marketplace growth, PIM implementation, accessibility, reporting, catalog governance, and entrepreneurship, my work follows the same pattern: understand the system, find the leverage point, organize the work, and carry it through.</p>
          <a className="button secondary" href="/experience">Explore my experience <span aria-hidden="true">→</span></a>
        </div>
      </section>
    </>
  );
}

function CaseStudiesPage() {
  return (
    <>
      <PageIntro eyebrow="Case Studies · The Major Work" title="Complex operations, made legible." body="Nine evidence-based stories about how I analyze fragmented systems, align stakeholders, implement practical solutions, and carry high-impact work through delivery." />
      <section className="shell studies-index" aria-label="Case study index">
        {caseStudies.map((study, index) => <a href={`#${study.slug}`} key={study.slug}><span>{String(index + 1).padStart(2, '0')}</span>{study.title}</a>)}
      </section>
      <section className="shell studies-list">
        {caseStudies.map((study, index) => (
          <article className="study" id={study.slug} key={study.slug}>
            <aside className="study-symbol"><CardGlyph numeral={study.numeral} /><p>{study.arcana}</p></aside>
            <div className="study-content">
              <header className="study-header">
                <div><p className="eyebrow">Case {String(index + 1).padStart(2, '0')} · {study.arcana}</p><h2>{study.title}</h2></div>
                {study.metric && <strong>{study.metric}</strong>}
              </header>
              <p className="study-overview">{study.overview}</p>
              <ol className="narrative" aria-label="Challenge to result narrative">
                <li><span>Challenge</span><p>{study.challenge}</p></li>
                <li><span>Analysis</span><p>{study.analysis}</p></li>
                <li><span>Action</span><p>{study.action}</p></li>
                <li><span>Implementation</span><p>{study.implementation}</p></li>
                <li><span>Result</span><p>{study.result}</p></li>
              </ol>
              <details className="study-details">
                <summary>Project details <span aria-hidden="true">+</span></summary>
                <div className="detail-grid">
                  <Detail title="My role"><p>{study.role}</p></Detail>
                  <Detail title="Goals"><List items={study.goals} /></Detail>
                  <Detail title="Stakeholders"><List items={study.stakeholders} /></Detail>
                  <Detail title="Constraints"><List items={study.constraints} /></Detail>
                  <Detail title="Tools & platforms"><TagList items={study.tools} /></Detail>
                  <Detail title="Challenges & risks"><List items={study.risks} /></Detail>
                </div>
              </details>
              <div className="demonstrates"><span aria-hidden="true">✦</span><div><h3>What this demonstrates</h3><p>{study.demonstrates}</p><TagList items={study.skills} /></div></div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

function Detail({ title, children }: { title: string; children: ReactNode }) {
  return <div><h3>{title}</h3>{children}</div>;
}

function List({ items }: { items: string[] }) {
  return <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

function ExperiencePage() {
  return (
    <>
      <PageIntro eyebrow="Experience · The Path" title="A career built across systems, commerce, and delivery." body="From customer operations and responsive web delivery to founding a DTC brand and managing marketplace growth, each role added a new layer to how I understand digital operations." />
      <section className="shell career-timeline">
        {experience.map((item, index) => (
          <article className="timeline-item" key={`${item.company}-${item.role}`}>
            <div className="timeline-marker" aria-hidden="true"><span>{String(index + 1).padStart(2, '0')}</span></div>
            <div className="timeline-date">{item.dates}</div>
            <div className="timeline-body">
              <p className="eyebrow">{item.company}</p><h2>{item.role}</h2><p className="timeline-summary">{item.summary}</p>
              {item.bullets.length > 0 && <ul className="accomplishment-list">{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
              <TagList items={item.tools} />
            </div>
          </article>
        ))}
        <article className="timeline-item education-item">
          <div className="timeline-marker" aria-hidden="true"><span>BS</span></div><div className="timeline-date">2017 – 2022</div>
          <div className="timeline-body"><p className="eyebrow">Boise State University</p><h2>B.S. in Physics</h2><p className="timeline-summary">A quantitative foundation in analytical reasoning, applied mathematics, experimentation, and complex problem-solving.</p><TagList items={['Physics', 'Mathematics', 'Analysis', 'Systems thinking']} /></div>
        </article>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About · The Hermit" title="I look for the system behind the symptoms." body="My work sits at the intersection of ecommerce, product data, implementation, analytics, and the people who make those systems function." />
      <section className="shell about-layout">
        <aside className="about-pullquote"><span aria-hidden="true">✦</span><blockquote>“The most useful system is the one people can understand, trust, and keep using.”</blockquote><p>Based in Boise · Relocating to Philadelphia</p></aside>
        <div className="about-copy">
          <p className="dropcap">I’ve always been drawn to the point where a complicated situation starts to make sense. Sometimes that means tracing a marketplace issue back to a catalog conflict. Sometimes it means turning departmental product data into a shared PIM workflow. Sometimes it means giving leadership one clear view of revenue, margin, and operational health.</p>
          <p>My degree in physics gave me a strong quantitative foundation and an appreciation for models, evidence, and disciplined investigation. Applied mathematics and scientific problem-solving shaped how I break down complex questions, but my operating approach has been built through years of practical delivery: responsive web projects, marketplace operations, product-data systems, reporting infrastructure, and cross-functional implementation.</p>
          <p>That combination matters. I can move comfortably between a business goal, a technical constraint, a catalog defect, a reporting question, and a stakeholder conversation. I’m technical enough to understand systems and data, commercially aware enough to prioritize what affects revenue and customers, and organized enough to carry the work through implementation.</p>
          <h2>Builder, operator, translator.</h2>
          <p>Founding Erbellum taught me the full weight of operating a digital business—from product sourcing and launches to inventory, fulfillment, brand experience, and customer trust. Scaling and transitioning that business reinforced something I still believe: good operations should be transferable. The process cannot live only in one person’s head.</p>
          <p>Today, I’m most energized by work that brings order to fragmented digital operations: marketplace growth, PIM and product-data governance, platform implementation, process design, reporting, and product operations.</p>
          <div className="about-next">
            <p className="eyebrow">Next destination</p><h2>Philadelphia, within the next six months.</h2>
            <p>I’m currently based in Boise and targeting roles that support a relocation to Philadelphia. I’m open to opportunities with retailers, technology companies, consulting firms, and enterprise teams that need a thoughtful operator who can connect commerce, data, systems, and delivery.</p>
            <div className="button-row"><a className="button primary" href="/contact">Start a conversation <span aria-hidden="true">↗</span></a><a className="button secondary" href="/resume">View resume <span aria-hidden="true">→</span></a></div>
          </div>
        </div>
      </section>
    </>
  );
}

function ResumePage() {
  return (
    <>
      <PageIntro eyebrow="Resume · The Record" title="Two lenses on one operating career." body="Choose the version closest to the opportunity, or read the combined, recruiter-friendly resume below." />
      <section className="shell resume-downloads">
        <ResumeDownload arcana="Marketplace & commerce" title="Ecommerce & Omnichannel Resume" body="Best for marketplace, ecommerce, catalog, merchandising, and digital-commerce operations roles." file="/resumes/bryton-kober-ecommerce-omnichannel-manager.pdf" />
        <ResumeDownload arcana="Systems & delivery" title="Implementation & Project Resume" body="Best for implementation, business systems, digital operations, technical project, and platform roles." file="/resumes/bryton-kober-digital-project-manager.pdf" />
      </section>
      <article className="shell html-resume">
        <header className="resume-header"><div><p className="eyebrow">Bryton C. Kober</p><h1>Ecommerce & Digital Operations Leader</h1></div><div><a href={`mailto:${contact.email}`}>{contact.email}</a><a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><span>Boise → Philadelphia</span></div></header>
        <section className="resume-summary"><h2>Profile</h2><p>Ecommerce and digital-operations leader with 5+ years of experience across marketplace operations, systems implementation, product-data governance, analytics, and cross-functional delivery. Supported a $38M+ omnichannel business, scaled Walmart Marketplace from $0 to a $1M+ annual run rate in under six months, delivered 28+ digital and operational projects, and founded a DTC business generating $200K in revenue.</p></section>
        <section><h2>Experience</h2>{experience.map((item) => <div className="resume-role" key={`${item.company}-${item.role}`}><div className="resume-role-head"><div><h3>{item.role}</h3><p>{item.company}</p></div><strong>{item.dates}</strong></div>{item.bullets.length > 0 ? <List items={item.bullets} /> : <p>{item.summary}</p>}</div>)}</section>
        <section><h2>Skills</h2><div className="resume-skills">{skillGroups.map((group) => <div key={group.title}><h3>{group.title}</h3><TagList items={group.skills} /></div>)}</div></section>
        <section><h2>Education</h2><div className="resume-role-head"><div><h3>B.S. in Physics</h3><p>Boise State University</p></div><strong>2017 – 2022</strong></div></section>
      </article>
    </>
  );
}

function ResumeDownload({ arcana, title, body, file }: { arcana: string; title: string; body: string; file: string }) {
  return <article><p className="arcana-label">{arcana}</p><h2>{title}</h2><p>{body}</p><div className="button-row"><a className="button primary" href={file} target="_blank" rel="noreferrer">Open PDF <span aria-hidden="true">↗</span></a><a className="button secondary" href={file} download>Download <span aria-hidden="true">↓</span></a></div></article>;
}

function ContactPage() {
  const [message, setMessage] = useState('');
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get('company_website')) return;
    const name = String(data.get('name') || '');
    const email = String(data.get('email') || '');
    const role = String(data.get('role') || '');
    const note = String(data.get('message') || '');
    const subject = encodeURIComponent(`Portfolio inquiry${role ? `: ${role}` : ''}`);
    const body = encodeURIComponent(`Hi Bryton,\n\n${note}\n\nName: ${name}\nEmail: ${email}${role ? `\nRole / company: ${role}` : ''}`);
    setMessage('Opening your email app with this note prepared.');
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  }
  return (
    <>
      <PageIntro eyebrow="Contact · The Next Chapter" title="Bring me the complicated part." body="I’m open to ecommerce, omnichannel, implementation, product-data, platform, and digital-operations opportunities that support my relocation to Philadelphia." />
      <section className="shell contact-layout">
        <aside className="contact-aside">
          <p className="eyebrow">Direct lines</p><h2>Let’s compare notes.</h2><p>If your team is scaling a marketplace, implementing a system, organizing product data, or trying to make digital operations more legible, I’d like to hear about it.</p>
          <dl><div><dt>Email</dt><dd><a href={`mailto:${contact.email}`}>{contact.email}</a></dd></div><div><dt>LinkedIn</dt><dd><a href={contact.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/bryton-k ↗</a></dd></div><div><dt>Location</dt><dd>Boise, Idaho → Philadelphia, Pennsylvania</dd></div><div><dt>Resume</dt><dd><a href="/resumes/bryton-kober-ecommerce-omnichannel-manager.pdf" download>Download PDF ↓</a></dd></div></dl>
        </aside>
        <div><p className="eyebrow">Send a note</p><form className="contact-form" onSubmit={submit}>
          <div className="honeypot" aria-hidden="true"><label>Company website<input name="company_website" tabIndex={-1} autoComplete="off" /></label></div>
          <div className="field-row"><label>Name<input name="name" type="text" autoComplete="name" required /></label><label>Email<input name="email" type="email" autoComplete="email" required /></label></div>
          <label>Role or company <span>(optional)</span><input name="role" type="text" autoComplete="organization" /></label>
          <label>What would you like to discuss?<textarea name="message" rows={6} required /></label>
          <button className="button primary" type="submit">Prepare email <span aria-hidden="true">↗</span></button>
          <p className="form-note" aria-live="polite">{message || 'This form prepares a message in your email app. It does not store your information.'}</p>
        </form></div>
      </section>
    </>
  );
}

function CurrentPage({ route }: { route: string }) {
  if (route === '/case-studies') return <CaseStudiesPage />;
  if (route === '/experience') return <ExperiencePage />;
  if (route === '/about') return <AboutPage />;
  if (route === '/resume') return <ResumePage />;
  if (route === '/contact') return <ContactPage />;
  return <HomePage />;
}

export default function App() {
  const route = window.location.pathname.replace(/\/$/, '') || '/';
  useEffect(() => {
    const meta = pageMeta[route] || pageMeta['/'];
    document.title = meta.title;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute('content', meta.description);
  }, [route]);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="site-frame">
        <SiteHeader />
        <main id="main"><CurrentPage route={route} /></main>
        <SiteFooter />
      </div>
    </>
  );
}
