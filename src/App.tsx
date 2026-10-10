import { useEffect, useMemo, useState } from 'react';
import { ArrowUpRight, Award, BookOpen, ChevronRight, CircleDot, Download, ExternalLink, Github, Linkedin, Mail, Menu, Search, ShieldCheck, Sparkles, Star, X } from 'lucide-react';
import { articles, awards, certifications, criticalFindings, experience, findings, highFindings, profile, projects, skillGroups, type Project } from '@/data';

const navItems = ['About', 'Experience', 'Work', 'Findings', 'Writing', 'Contact'];
const categories = ['All', ...Array.from(new Set(projects.map((project) => project.category)))];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProjects = useMemo(() => projects.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const haystack = `${project.name} ${project.category} ${project.description} ${project.tools.join(' ')}`.toLowerCase();
    return matchesCategory && haystack.includes(query.toLowerCase());
  }), [activeCategory, query]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" onClick={() => scrollTo('top')} aria-label="Asad Ullah home"><span className="brand-mark">AU</span><span>ASAD / ULLAH</span></a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Primary navigation">
          {navItems.map((item) => <button key={item} onClick={() => scrollTo(item.toLowerCase())}>{item}</button>)}
          <a className="nav-cta" href={profile.linkedin} target="_blank" rel="noreferrer">Let’s connect <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy reveal-up">
            <div className="eyebrow"><span className="status-dot" /> {profile.availability}</div>
            <p className="kicker">Security engineering / 01</p>
            <h1>Finding weaknesses<br /><em>before attackers do.</em></h1>
            <p className="hero-text">I am a cybersecurity engineer focused on identifying, validating, and helping remediate security weaknesses across web applications, APIs, enterprise networks, mobile applications, and cloud environments.</p>
            <div className="hero-actions"><button className="button button-primary" onClick={() => scrollTo('work')}>Explore my work <ChevronRight size={17} /></button><button className="button button-ghost" onClick={() => scrollTo('contact')}>Contact me <ArrowUpRight size={16} /></button><a className="button button-ghost" href={profile.cv} download="Asad_Ullah_CV.pdf">Download my CV <Download size={16} /></a></div>
            <div className="profile-links"><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a><a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a><a href={profile.medium} target="_blank" rel="noreferrer"><BookOpen size={17} /> Medium</a></div>
          </div>
          <div className="hero-visual reveal-up delay-1">
            <div className="portrait-card"><img className="profile-image" src="/profile.jpg" alt="Asad Ullah" /><div className="portrait-caption"><span>Asad Ullah</span><span>Lahore, PK</span></div></div>
            <div className="terminal-card"><div className="terminal-top"><span /><span /><span /><small>assessment.log</small></div><div className="terminal-body"><p><b>$</b> ./scope --review application</p><p className="muted">mapping attack surface...</p><p><b className="green">✓</b> authorization boundaries</p><p><b className="green">✓</b> input validation paths</p><p><b className="amber">!</b> evidence-based reporting</p><p className="cursor"><b>$</b> _</p></div></div>
          </div>
        </section>

        <section className="signal-strip"><div><strong>{findings.critical}</strong><span>critical</span></div><div><strong>{findings.high}</strong><span>high</span></div><div><strong>{findings.medium}</strong><span>medium</span></div><div><strong>{findings.low}</strong><span>low</span></div><div className="strip-note"><span className="total-chip">Total</span><strong>{findings.total}</strong><em>vulnerabilities across tracked assessments</em></div></section>

        <section id="about" className="section-wrap content-section about-section"><div className="section-label">02 / About</div><div className="about-grid"><div><h2>Security work that<br /><em>holds up under scrutiny.</em></h2></div><div className="about-copy"><p className="lead">My approach combines practical testing, technical investigation, risk analysis, and remediation guidance — with evidence at the center of every conclusion.</p><p>I focus on making security findings useful: clear enough for engineering teams to fix, grounded enough for decision-makers to prioritize, and responsible enough to protect the people and systems involved.</p><div className="principles"><span>Evidence-led validation</span><span>Risk-based severity</span><span>Responsible testing</span><span>Actionable reporting</span></div></div></div><div className="skills-grid">{skillGroups.map((group) => <article className="skill-card" key={group.title}><div className="skill-icon"><ShieldCheck size={18} /></div><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></section>

        <section id="experience" className="section-wrap content-section"><div className="section-label">03 / Experience</div><div className="section-heading"><div><h2>Experience with<br /><em>real-world context.</em></h2></div></div><div className="timeline">{experience.map((item, index) => <article className="timeline-item" key={item.company}><div className="timeline-marker">0{index + 1}</div><div className="timeline-main"><div className="timeline-meta"><span>{item.company}</span><b>{item.duration}</b></div><h3>{item.role}</h3><ul className="note-list">{item.note.map((line) => <li key={line}>{line}</li>)}</ul><div className="highlight-list">{item.highlights.map((highlight) => <span key={highlight}><CircleDot size={12} /> {highlight}</span>)}</div>{item.award && <div className="award-line"><Award size={16} /> {item.award}</div>}</div></article>)}</div></section>

        <section id="work" className="section-wrap content-section work-section"><div className="section-label">04 / Selected work</div><div className="section-heading"><div><h2>Methods, labs &<br /><em>security thinking.</em></h2></div></div><div className="project-toolbar"><div className="search-box"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects or tools" aria-label="Search projects" /></div><div className="filter-row" role="tablist" aria-label="Project categories">{categories.map((category) => <button key={category} className={activeCategory === category ? 'filter active' : 'filter'} onClick={() => setActiveCategory(category)}>{category}</button>)}</div></div><div className="projects-grid">{filteredProjects.map((project, index) => <article className="project-card" key={project.name} onClick={() => setSelectedProject(project)} tabIndex={0} onKeyDown={(event) => { if (event.key === 'Enter') setSelectedProject(project); }}><div className="project-number">0{index + 1}</div><div className="project-top"><span>{project.category}</span><ArrowUpRight size={17} /></div><h3>{project.name}</h3><p>{project.description}</p><div className="project-footer"><span>{project.label}</span><span className="view-link">View details <ChevronRight size={14} /></span></div></article>)}</div>{filteredProjects.length === 0 && <div className="empty-state">No projects match that search. Try a broader term.</div>}</section>

        <section id="findings" className="section-wrap content-section findings-section"><div className="section-label">05 / Security findings & risk impact</div><div className="findings-layout"><div><h2>Turning exposure<br /><em>into clear priorities.</em></h2><p className="lead">My security assessment experience includes identifying and validating high-impact vulnerabilities across application, infrastructure, network, mobile, and cloud environments.</p><p>I focus on assessing potential business impact, prioritizing risks, and providing actionable remediation guidance. These figures are aggregate assessment records, not unique vulnerabilities or separate clients.</p><div className="scope-note"><ShieldCheck size={18} /> Security testing is conducted only within authorized scope.</div></div><div className="findings-chart"><div className="finding-stat critical"><strong>{findings.critical}</strong><span>Critical</span><div className="bar"><i style={{ width: `${(findings.critical / findings.criticalHigh) * 100}%` }} /></div></div><div className="finding-stat high"><strong>{findings.high}</strong><span>High</span><div className="bar"><i style={{ width: `${(findings.high / findings.criticalHigh) * 100}%` }} /></div></div><div className="finding-breakdown"><div className="fb medium"><span>Medium</span><strong>{findings.medium}</strong></div><div className="fb low"><span>Low</span><strong>{findings.low}</strong></div></div><div className="total-stat"><span>Total vulnerabilities</span><strong>{findings.total}</strong></div><small className="count-note">Critical + High: {findings.criticalHigh}</small></div></div><div className="severity-groups">{[{ key: 'critical', label: 'Critical', count: findings.critical, items: criticalFindings }, { key: 'high', label: 'High', count: findings.high, items: highFindings }].map((group) => <div className={`severity-group ${group.key}`} key={group.key}><div className="severity-head"><h3>{group.label} vulnerabilities</h3><span>{group.count} recorded</span></div><div className="finding-cards">{group.items.map((card) => <article key={card.title}><div className="finding-card-top"><span className="severity-tag">{group.label}</span><span>Sanitized</span></div><h3>{card.title}</h3><p>{card.text}</p></article>)}</div></div>)}</div>
        </section>

        <section id="writing" className="section-wrap content-section writing-section"><div className="section-label">06 / Writing & credentials</div><div className="writing-grid"><div><h2>Curious by default.<br /><em>Precise by practice.</em></h2><p className="lead">Technical research, training, and continuous learning keep the work sharp and the recommendations grounded.</p><a className="button button-ghost" href={profile.medium} target="_blank" rel="noreferrer">Read more on Medium <ArrowUpRight size={16} /></a></div><div className="article-list">{articles.map((article) => <a className="article-row" href={article.link} target="_blank" rel="noreferrer" key={article.title}><span className="article-index">{String(articles.indexOf(article) + 1).padStart(2, '0')}</span><div><span className="article-category">{article.category}</span><h3>{article.title}</h3><p>{article.note}</p></div><ExternalLink size={17} /></a>)}</div></div><div className="credentials-grid"><div><div className="mini-heading"><Sparkles size={17} /> Certifications & training</div>{certifications.map((credential) => <div className="credential-row" key={credential.title}><div><h3>{credential.title}</h3><p>{credential.issuer} · {credential.type}</p></div></div>)}</div><div><div className="mini-heading"><Award size={17} /> Awards & achievements</div>{awards.map((award) => <div className="award-card" key={award.title}>{award.icon === 'star' ? <Star size={20} /> : <Award size={20} />}<div><h3>{award.title}</h3><p>{award.detail}</p></div></div>)}</div></div></section>

        <section id="contact" className="contact-section"><div className="section-wrap contact-inner"><div className="section-label">07 / Contact</div><div className="contact-grid"><div><h2>Let’s make security<br /><em>more actionable.</em></h2><p>For offensive security opportunities or thoughtful technical collaboration, the best way to reach me is through LinkedIn.</p><a className="button button-primary" href={profile.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={17} /></a></div><div className="contact-side"><div className="contact-line"><span>Based in</span><strong>{profile.location}</strong></div><div className="contact-line"><span>Education</span><strong>{profile.education}<br />{profile.school}</strong></div><div className="contact-line"><span>Resume</span><a className="cv-link" href={profile.cv} download="Asad_Ullah_CV.pdf">Download CV (PDF)</a></div><div className="contact-links"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a><a href={profile.medium} target="_blank" rel="noreferrer"><BookOpen size={18} /> Medium</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a></div></div></div></div></section>
      </main>

      <footer className="site-footer"><div><span className="brand-mark">AU</span><span>ASAD / ULLAH</span></div><span>Cybersecurity Engineer · {new Date().getFullYear()}</span><a href={profile.linkedin} target="_blank" rel="noreferrer"><Mail size={15} /> Contact via LinkedIn</a></footer>
      {showTop && <button className="back-top" onClick={() => scrollTo('top')} aria-label="Back to top"><ArrowUpRight size={18} /></button>}
      {selectedProject && <div className="modal-backdrop" role="presentation" onClick={() => setSelectedProject(null)}><div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-title" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close project details"><X size={18} /></button><span className="article-category">{selectedProject.category} · {selectedProject.label}</span><h2 id="project-title">{selectedProject.name}</h2><p className="modal-description">{selectedProject.description}</p><div className="modal-columns"><div><span>Scope & methodology</span><p>{selectedProject.scope}</p></div><div><span>Potential impact</span><p>{selectedProject.impact}</p></div><div><span>Defensive recommendation</span><p>{selectedProject.recommendation}</p></div><div><span>Tools</span><div className="tool-list">{selectedProject.tools.map((tool) => <b key={tool}>{tool}</b>)}</div></div></div>{selectedProject.link && <a className="modal-link" href={selectedProject.link} target="_blank" rel="noreferrer">Open public lab reference <ExternalLink size={15} /></a>}</div></div>}
    </div>
  );
}

export default App;
