import Link from 'next/link';
import type { Job } from '@/jobs';

export function Header() {
  return <header className="header">
    <Link className="brand" href="/" aria-label="NOMEN OMEN GROUP – úvodní stránka"><span className="brand-mark">N</span><span>NOMEN OMEN <b>GROUP</b></span></Link>
    <nav className="desktop-nav" aria-label="Hlavní navigace"><Link href="/#nabidky">Nabídky práce</Link><Link href="/#o-nas">O nás</Link><Link href="/#kontakt">Kontakt</Link></nav>
    <a className="header-cta" href="mailto:anthonypokorny@seznam.cz">Napište nám <span>↗</span></a>
    <details className="mobile-menu">
      <summary aria-label="Otevřít navigační menu"><span></span><span></span><span></span></summary>
      <nav aria-label="Mobilní navigace"><Link href="/#nabidky">Nabídky práce</Link><Link href="/#o-nas">O nás</Link><Link href="/#kontakt">Kontakt</Link></nav>
    </details>
  </header>;
}

export function Footer() {
  return <footer className="footer"><Link className="brand brand-light" href="/"><span className="brand-mark">N</span><span>NOMEN OMEN <b>GROUP</b></span></Link><p>Pomáháme lidem najít pracovní uplatnění.</p><div className="footer-company"><strong>NOMEN OMEN GROUP, s.r.o.</strong><span>Mokrohorská 400/29, Soběšice, 644 00 Brno</span><span>IČO: 03745228</span><a href="mailto:anthonypokorny@seznam.cz">anthonypokorny@seznam.cz</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} NOMEN OMEN GROUP, s.r.o.</span><Link href="/ochrana-osobnich-udaju">Ochrana osobních údajů</Link></div></footer>;
}

export function JobCard({ job }: { job: Job }) {
  return <article className="job-card"><Link href={`/jobs/${job.slug}`} className="job-image-link" aria-label={`Více o pozici ${job.title}`}><div className="job-image" style={{ backgroundImage: `url('${job.image}')` }} /><span className="image-arrow">↗</span></Link><div className="job-content"><span className="eyebrow">{job.category}</span><h3>{job.title}</h3><p>{job.excerpt}</p><div className="job-meta"><span>⌖ {job.location}</span><strong>{job.salary}</strong></div><Link className="text-link" href={`/jobs/${job.slug}`}>Více o pozici <span>→</span></Link></div></article>;
}
