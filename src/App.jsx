import { useEffect, useRef, useState } from 'react'
import { Intercom } from '@intercom/messenger-js-sdk'
import agenticAiCertificate from './assets/agentic-ai-certificate.jpeg'
import azureFundamentalsBadge from './assets/azure-fundamentals-badge.png'
import finLogo from './assets/fin-logo.png'
import fiservLogo from './assets/fiserv-logo.webp'
import fortinetOperatorBadge from './assets/fortinet-operator-badge.png'
import gaisceAwardLogo from './assets/gaisce-award-logo.webp'
import genpactLogo from './assets/genpact-logo.jpg'
import leanSixSigmaLogo from './assets/lean-six-sigma.webp'
import maynoothUniversityLogo from './assets/maynooth-university-logo.png'
import museAwardLogo from './assets/muse-award.webp'
import obrienFineFoodsLogo from './assets/obrien-fine-foods-logo.png'
import portrait from './assets/rajendr-portrait.jpeg'
import './App.css'

const chapters = ['Cover', 'About', 'Experience', 'Projects', 'Education', 'Back cover']

const experience = [
  {
    role: 'Technical Support Engineer',
    company: 'Fin (formerly Intercom)',
    logo: finLogo,
    period: '18 Aug 2026 — Present',
    detail: 'Technical support for Fin’s customer experience platform: investigating product issues, helping customers find a way forward, and sharing clear findings with the teams who can resolve them.',
    current: true,
  },
  {
    role: 'Senior Process Associate',
    company: 'Genpact · supporting Meta',
    logo: genpactLogo,
    period: 'Jan 2025 — 2026',
    detail: 'Triaged 16+ daily issues across Meta Quest and the Twilight app. Reproduced faults, analysed logs and escalated structured findings. Resolved 95% independently and maintained 99%+ SLA compliance.',
  },
  {
    role: 'IT Support Engineer',
    company: 'O’Brien Fine Foods',
    logo: obrienFineFoodsLogo,
    period: 'Aug 2024 — Dec 2024',
    detail: 'Supported 600+ users across Microsoft 365, Exchange Online, SharePoint, Teams, Entra ID and Intune. Resolved 10–15 incidents a day with 95%+ first-contact resolution and reduced licence spend by 5%.',
  },
  {
    role: 'Software Automation Engineer Intern',
    company: 'Fiserv',
    logo: fiservLogo,
    period: 'Mar 2022 — Sep 2022',
    detail: 'Automated repetitive QA tasks with JIRA and Jenkins, ran test suites and documented findings within an Agile development team.',
  },
  {
    role: 'Computer Science Demonstrator',
    company: 'Maynooth University · part-time',
    logo: maynoothUniversityLogo,
    period: 'Sep 2021 — May 2023',
    detail: 'Supported 100+ students in programming labs covering web development, databases, algorithms and object-oriented programming.',
  },
]

const projects = [
  {
    title: 'AI job matching & CV tailoring',
    kind: 'Belfast Hackathon · 2026',
    detail: 'Built a full-stack app that takes a CV, surfaces relevant local jobs and uses Claude’s API to tailor a CV for each role.',
    tools: 'Full-stack · Claude API · NLP',
  },
  {
    title: 'Campus building recognition',
    kind: 'Final-year project · Maynooth University',
    detail: 'Created a computer-vision system to recognise Maynooth campus buildings, reaching 65–70% accuracy.',
    tools: 'C++ · HTML · CSS · JavaScript',
  },
  {
    title: 'IKEA store VR environment',
    kind: 'Group project · graded 100%',
    detail: 'Co-built a navigable Godot VR store with motion controls, object interaction and spatial navigation.',
    tools: 'Godot · VR · Interaction',
  },
]

const skillGroups = [
  { label: 'Languages & web', items: 'JavaScript · HTML5 · CSS3 · C++ · Python · SQL' },
  { label: 'APIs', items: 'REST APIs · Webhooks · JSON · SDKs · HTTP/S' },
  { label: 'Tools', items: 'Git · Jenkins · JIRA · Chrome DevTools · Postman · Godot' },
  { label: 'Cloud & support', items: 'Azure · Entra ID · Intune · Exchange Online · SharePoint · PowerShell' },
  { label: 'Practice', items: 'Agile / Scrum · ITIL basics · SLA management · QA · Technical documentation' },
]

const credentials = [
  { logo: azureFundamentalsBadge, name: 'Microsoft Azure Fundamentals', detail: 'AZ-900' },
  { logo: fortinetOperatorBadge, name: 'Fortinet Certified Associate', detail: 'FortiGate 7.4 Operator' },
  { logo: agenticAiCertificate, name: 'Agentic AI', detail: 'Certificate' },
  { logo: leanSixSigmaLogo, name: 'Lean & Six Sigma', detail: 'Beginner' },
]

const recognitions = [
  { logo: museAwardLogo, name: 'MUSE Award', detail: 'Gold' },
  { logo: gaisceAwardLogo, name: 'Gaisce Presidential Award', detail: 'Bronze' },
]

function Arrow({ direction = 'right' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={direction === 'left' ? 'arrow arrow--left' : 'arrow'}>
      <path d="M4 10h11m-4.5-4.5L15 10l-4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function BotanicalSprig({ className = '' }) {
  return (
    <svg className={`botanical-sprig ${className}`} viewBox="0 0 100 180" fill="none" aria-hidden="true">
      <path className="sprig-stem" d="M51 172C49 144 55 115 49 88 45 65 37 40 23 16M50 145c8-23 22-43 38-59M49 110c-9-18-22-31-38-42" />
      <path className="sprig-leaf" d="M23 16C7 21 7 39 30 48c4-17 1-26-7-32ZM29 48C13 43 3 54 11 68c13-3 20-10 18-20Zm20 40C29 79 20 64 26 54c16 4 25 16 23 34Zm0 0c-7-17-3-31 8-37 13 11 13 25-8 37ZM49 110c-16-4-25-17-21-28 15 2 25 12 21 28Zm0 0c-2-15 5-27 18-30 9 13 3 24-18 30Zm1 35c-11-11-11-25-1-31 13 8 16 19 1 31Zm0 0c3-15 13-23 25-20 4 15-5 23-25 20Z" />
    </svg>
  )
}

function PottedPlant({ className = '' }) {
  return (
    <svg className={`potted-plant ${className}`} viewBox="0 0 140 190" fill="none" aria-hidden="true">
      <path d="M70 129V41M70 111C53 99 44 82 46 61M70 101c13-24 27-39 43-43M70 86C58 68 54 49 60 30M71 120c16-9 27-22 32-39" className="plant-stem" />
      <path d="M60 31c-15 3-18 16 0 29 8-11 9-21 0-29Zm-14 30c-15-3-23 8-14 22 13-2 19-10 14-22Zm3 24C36 71 24 71 20 85c8 12 19 14 29 0Zm10-45C47 29 51 16 64 10c13 10 12 22-5 30Zm12 29c1-16 11-24 25-21 5 14-3 23-25 21Zm20-10c-5-15 3-26 18-27 9 13 4 24-18 27Zm-9 43c0-15 10-24 23-22 6 14-2 23-23 22Zm16-29c2-15 13-21 25-16 3 14-5 21-25 16Z" className="plant-leaf" />
      <path d="M47 127h47l-6 48H53l-6-48Z" className="plant-pot" />
      <path d="M43 124h55v10H43z" className="plant-pot-rim" />
      <path d="M55 174h31" className="plant-pot-base" />
    </svg>
  )
}

function handleContentScrollKeyDown(event) {
  const { currentTarget, key } = event
  const step = key === 'PageDown' || key === 'PageUp'
    ? currentTarget.clientHeight * 0.85
    : 40

  if (key === 'ArrowDown' || key === 'PageDown') {
    event.preventDefault()
    currentTarget.scrollTop += step
  } else if (key === 'ArrowUp' || key === 'PageUp') {
    event.preventDefault()
    currentTarget.scrollTop -= step
  } else if (key === 'Home') {
    event.preventDefault()
    currentTarget.scrollTop = 0
  } else if (key === 'End') {
    event.preventDefault()
    currentTarget.scrollTop = currentTarget.scrollHeight
  }
}

function App() {
  const [page, setPage] = useState(0)
  const [pageScrollHint, setPageScrollHint] = useState(false)
  const pageContentRef = useRef(null)

  useEffect(() => {
    Intercom({ app_id: 't455tc1j' })
  }, [])

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.altKey || event.ctrlKey || event.metaKey) return
      if (event.target instanceof HTMLElement && event.target.closest('a, button, input, textarea, select')) return
      if (event.key === 'ArrowRight') setPage((current) => Math.min(current + 1, chapters.length - 1))
      if (event.key === 'ArrowLeft') setPage((current) => Math.max(current - 1, 0))
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    const content = pageContentRef.current
    if (!content) return

    function updateScrollHint() {
      const hasMoreContent = content.scrollHeight > content.clientHeight + 12
      const isNearBottom = content.scrollTop + content.clientHeight >= content.scrollHeight - 16
      setPageScrollHint(hasMoreContent && !isNearBottom)
    }

    updateScrollHint()
    content.addEventListener('scroll', updateScrollHint, { passive: true })
    window.addEventListener('resize', updateScrollHint)
    const observer = new ResizeObserver(updateScrollHint)
    observer.observe(content)

    return () => {
      content.removeEventListener('scroll', updateScrollHint)
      window.removeEventListener('resize', updateScrollHint)
      observer.disconnect()
    }
  }, [page])

  function openPage(nextPage) {
    setPage(Math.max(0, Math.min(nextPage, chapters.length - 1)))
  }

  return (
    <main className="reader">
      <a className="skip-link" href="#book-page">Skip to current page</a>
      <header className="reader-top">
        <a className="reader-brand" href="#cover" onClick={(event) => { event.preventDefault(); openPage(0) }}>
          <span className="brand-monogram">RS</span>
          <span>Rajendr Singh <small>PORTFOLIO · 2026</small></span>
        </a>
        <a className="email-link" href="mailto:rajendrsingh1@gmail.com">Get in touch <span aria-hidden="true">↗</span></a>
      </header>

      <div className="reader-label">
        <span>A LITTLE BOOK ABOUT MY WORK</span>
        <span>DUBLIN, IRELAND</span>
      </div>

      <div className={`book${page === 0 ? ' book--cover' : ''}${page === chapters.length - 1 ? ' book--back-cover' : ''}`}>
        <aside className="book-index" aria-label="Book contents">
          <BotanicalSprig className="index-botanical" />
          <div className="index-heading">CONTENTS <span>✳</span></div>
          <nav className="chapter-list" aria-label="Chapters">
            {chapters.map((chapter, index) => (
              <button
                className={`chapter-button${page === index ? ' chapter-button--active' : ''}`}
                key={chapter}
                type="button"
                aria-current={page === index ? 'page' : undefined}
                onClick={() => openPage(index)}
              >
                <span className="chapter-number">{String(index + 1).padStart(2, '0')}</span>
                <span>{chapter}</span>
                {page === index && <span className="chapter-marker" aria-hidden="true">•</span>}
              </button>
            ))}
          </nav>
          <div className="index-note">
            <span className="note-rule" />
            <p>“I like turning unclear, frustrating moments into practical fixes.”</p>
            <small>— RAJENDR</small>
          </div>
          <div className="index-links">
            <a href="https://github.com/Slokers" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://linkedin.com/in/rajendr-singh" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </aside>

        <article className="book-page" id="book-page" key={page} aria-live="polite">
          <div className="page-running-head">
            <span>RAJENDR SINGH</span>
            <span>{page === 0 ? 'A SHORT INTRODUCTION' : chapters[page].toUpperCase()}</span>
          </div>

          {page === 0 && (
            <section ref={pageContentRef} className="page-content cover-page" id="cover" aria-labelledby="cover-title">
              <BotanicalSprig className="cover-botanical" />
              <PottedPlant className="cover-potted-plant" />
              <div className="cover-stamp">DUBLIN<br />IRELAND</div>
              <p className="cover-edition">A PERSONAL PORTFOLIO <span>·</span> 2026</p>
              <h1 id="cover-title">Rajendr<br /><em>Singh.</em></h1>
              <div className="cover-divider"><span>✳</span></div>
              <p className="cover-description">Technical support engineer<br />curious about how things work.</p>
              <p className="cover-intro">A few pages on solving problems, helping people, and the work I’ve enjoyed along the way.</p>
              <button className="read-button" type="button" onClick={() => openPage(1)}>Open the book <Arrow /></button>
              <div className="cover-footer"><span>COMPUTER SCIENCE & SOFTWARE ENGINEERING</span><span>GRAD. 2024</span></div>
            </section>
          )}

          {page === 1 && (
            <section ref={pageContentRef} className="page-content" tabIndex={0} onKeyDown={handleContentScrollKeyDown} aria-labelledby="about-title">
              <div className="chapter-overline"><span>CHAPTER ONE</span><span>01</span></div>
              <h1 className="page-title" id="about-title">A bit about<br /><em>how I work.</em></h1>
              <p className="lead-copy">I’m a customer-focused Technical Support Engineer with a B.Sc. in Computer Science & Software Engineering.</p>
              <p className="body-copy">My experience spans enterprise SaaS, VR support, IT and QA. I enjoy tracing an issue from the first confusing symptom through logs, reproduction and a clear next step — while keeping the person asking for help in the loop.</p>
              <p className="body-copy">I’m based in Dublin and bring a genuine interest in the space where engineering and customer experience meet.</p>
              <div className="fact-strip">
                <div><strong>99%+</strong><span>SLA compliance<br />at Genpact</span></div>
                <div><strong>95%</strong><span>incidents resolved<br />independently</span></div>
                <div><strong>600+</strong><span>users supported<br />at O’Brien Fine Foods</span></div>
              </div>
              <div className="page-note"><span className="note-rule" /><p>At my best when I can listen, investigate, and make the next step clear.</p></div>
            </section>
          )}

          {page === 2 && (
            <section ref={pageContentRef} className="page-content experience-page" tabIndex={0} onKeyDown={handleContentScrollKeyDown} aria-labelledby="experience-title">
              <div className="chapter-overline"><span>CHAPTER TWO</span><span>02</span></div>
              <h1 className="page-title" id="experience-title">The work<br /><em>so far.</em></h1>
              <div className="timeline">
                {experience.map((job, index) => (
                  <section className={`timeline-entry${job.current ? ' timeline-entry--current' : ''}`} key={job.company}>
                    <div className="timeline-marker">{String(index + 1).padStart(2, '0')}</div>
                    <div className="timeline-copy">
                      <div className="timeline-heading">
                        <h2>{job.role}</h2>
                        <span className="timeline-date">{job.period}</span>
                      </div>
                      <div className="timeline-company-row">
                        <span className={`company-logo-frame company-logo-frame--${index + 1}`} aria-hidden="true">
                          <img className="company-logo" src={job.logo} alt="" />
                        </span>
                        <p className="timeline-company">{job.company}</p>
                      </div>
                      <p className="timeline-detail">{job.detail}</p>
                    </div>
                  </section>
                ))}
              </div>
              <p className="source-note">Fin’s public careers page describes its work in AI-powered customer experience. The Fin role summary above is intentionally general; no personal performance figures are implied.</p>
            </section>
          )}

          {page === 3 && (
            <section ref={pageContentRef} className="page-content" tabIndex={0} onKeyDown={handleContentScrollKeyDown} aria-labelledby="projects-title">
              <div className="chapter-overline"><span>CHAPTER THREE</span><span>03</span></div>
              <h1 className="page-title" id="projects-title">Made with<br /><em>curiosity.</em></h1>
              <div className="project-list">
                {projects.map((project, index) => (
                  <article className="project-entry" key={project.title}>
                    <div className={`project-index project-index--${index + 1}`}>{String(index + 1).padStart(2, '0')}</div>
                    <div>
                      <p className="project-kind">{project.kind}</p>
                      <h2>{project.title}</h2>
                      <p className="project-detail">{project.detail}</p>
                      <p className="project-tools">{project.tools}</p>
                    </div>
                  </article>
                ))}
              </div>
              <div className="page-note"><span className="note-rule" /><p>From computer vision to virtual worlds: building is one way I like to learn.</p></div>
              <a className="project-profile-link" href="https://github.com/Slokers" target="_blank" rel="noreferrer">Explore my GitHub profile <span aria-hidden="true">↗</span></a>
            </section>
          )}

          {page === 4 && (
            <section ref={pageContentRef} className="page-content education-page" tabIndex={0} onKeyDown={handleContentScrollKeyDown} aria-labelledby="education-title">
              <div className="chapter-overline"><span>CHAPTER FOUR</span><span>04</span></div>
              <h1 className="page-title" id="education-title">The tools<br /><em>and roots.</em></h1>
              <div className="education-block">
                <p className="section-label">EDUCATION</p>
                <h2>B.Sc. Computer Science<br />& Software Engineering</h2>
                <p className="education-detail">Maynooth University <span>·</span> Graduated 2024</p>
              </div>
              <div className="skills-block">
                <p className="section-label">MY TOOLKIT</p>
                <div className="skill-list">
                  {skillGroups.map((group) => (
                    <div className="skill-row" key={group.label}>
                      <h3>{group.label}</h3>
                      <p>{group.items}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="awards-block">
                <p className="section-label">CERTIFICATIONS</p>
                <div className="credential-grid">
                  {credentials.map((credential) => (
                    <article className="credential-card" key={credential.name}>
                      <span className="credential-art" aria-hidden="true">
                        <img className="credential-image" src={credential.logo} alt="" />
                      </span>
                      <span className="credential-detail">{credential.detail}</span>
                      <h3>{credential.name}</h3>
                    </article>
                  ))}
                </div>
                <p className="section-label recognition-label">RECOGNITION</p>
                <div className="credential-grid credential-grid--recognition">
                  {recognitions.map((recognition) => (
                    <article className="credential-card credential-card--recognition" key={recognition.name}>
                      <span className="credential-art" aria-hidden="true">
                        <img className="credential-image" src={recognition.logo} alt="" />
                      </span>
                      <span className="credential-detail">{recognition.detail}</span>
                      <h3>{recognition.name}</h3>
                    </article>
                  ))}
                </div>
              </div>
              <div className="last-page-contact">
                <p>Thanks for reading.</p>
                <a href="mailto:rajendrsingh1@gmail.com">rajendrsingh1@gmail.com <span>↗</span></a>
              </div>
            </section>
          )}

          {page === 5 && (
            <section ref={pageContentRef} className="back-cover-content" tabIndex={0} onKeyDown={handleContentScrollKeyDown} aria-labelledby="back-cover-title">
              <p className="back-cover-edition">THE END · OR A NEW BEGINNING</p>
              <figure className="portrait-frame">
                <img src={portrait} alt="Rajendr Singh outdoors in a green garden" />
                <figcaption>Rajendr Singh · Dublin, Ireland</figcaption>
              </figure>
              <div className="back-cover-message">
                <p className="back-cover-kicker">THANKS FOR READING</p>
                <h1 id="back-cover-title">Let’s keep<br /><em>in touch.</em></h1>
                <p className="back-cover-copy">I’m always glad to meet thoughtful people, talk through a tricky technical problem, or explore how support and software can work better together.</p>
                <a className="back-cover-email" href="mailto:rajendrsingh1@gmail.com">rajendrsingh1@gmail.com <span aria-hidden="true">↗</span></a>
                <div className="back-cover-socials">
                  <a href="https://linkedin.com/in/rajendr-singh" target="_blank" rel="noreferrer">LinkedIn ↗</a>
                  <a href="https://github.com/Slokers" target="_blank" rel="noreferrer">GitHub ↗</a>
                </div>
              </div>
              <BotanicalSprig className="back-cover-botanical" />
            </section>
          )}

          {pageScrollHint && <div className="page-scroll-cue" aria-hidden="true">Scroll for more <span>↓</span></div>}

          {page > 0 && page < chapters.length - 1 && (
            <footer className="page-footer">
              <button className="page-control" type="button" onClick={() => openPage(page - 1)}>
                <Arrow direction="left" /> <span>Previous</span>
              </button>
              <span className="folio">{String(page + 1).padStart(2, '0')} <i>/</i> {String(chapters.length).padStart(2, '0')}</span>
              <button className="page-control page-control--next" type="button" onClick={() => openPage(page + 1)} disabled={page === chapters.length - 1}>
                <span>Next page</span> <Arrow />
              </button>
            </footer>
          )}
        </article>
      </div>

      <footer className="reader-footer">
        <span>MADE WITH CARE IN DUBLIN</span>
        {page > 0 && <span>USE ← → TO TURN PAGES</span>}
        {page === 2 && <a href="https://fin.ai/careers" target="_blank" rel="noreferrer">About Fin ↗</a>}
      </footer>
    </main>
  )
}

export default App
