import Link from 'next/link';
import type { Job } from '@/jobs';

export function Header() {
  return <header className="header"><Link className="brand" href="/"><span className="brand-mark">N</span><span>NOMEN OMEN <b>GROUP</b></span></Link><nav><Link href="/#nabidky">Nabídky práce</Link><Link href="/#o-nas">O nás</Link><Link href="/#kontakt">Kontakt</Link></nav><a className="header-cta" href="mailto:anthonypokorny@seznam.cz">Napište nám <span>↗</span></a></header>;
}

export function Footer() {
  return <footer className="footer"><Link className="brand brand-light" href="/"><span className="brand-mark">N</span><span>NOMEN OMEN <b>GROUP</b></span></Link><p>Pomáháme lidem najít pracovní uplatnění.</p><div className="footer-bottom"><span>© {new Date().getFullYear()} NOMEN OMEN GROUP</span><Link href="/ochrana-osobnich-udaju">Ochrana osobních údajů</Link></div></footer>;
}

export function JobCard({ job }: { job: Job }) {
  return <article className="job-card"><Link href={`/jobs/${job.slug}`} className="job-image-link" aria-label={`Více o pozici ${job.title}`}><div className="job-image" style={{ backgroundImage: `url('${job.image}')` }} /><span className="image-arrow">↗</span></Link><div className="job-content"><span className="eyebrow">{job.category}</span><h3>{job.title}</h3><p>{job.excerpt}</p><div className="job-meta"><span>⌖ {job.location}</span><strong>{job.salary}</strong></div><Link className="text-link" href={`/jobs/${job.slug}`}>Více o pozici <span>→</span></Link></div></article>;
}
