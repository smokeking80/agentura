import Link from 'next/link';
import { activeJobs } from '@/jobs';
import { Footer, Header, JobCard } from './components';

export default function Home() {
  return <><Header /><main>
    <section className="hero"><div className="hero-photo"/><div className="hero-shade"/><div className="hero-inner"><span className="kicker"><i/> PRACOVNÍ PŘÍLEŽITOSTI PO CELÉ ČR</span><h1>Práce, která<br/>dává <em>smysl.</em></h1><p>Pomáháme lidem najít pracovní uplatnění ve výrobě, slévárenství i stavebnictví.</p><a className="button button-primary" href="#nabidky">Prohlédnout nabídky <span>↓</span></a></div><div className="hero-note"><span>01 / 03</span><span>SPRÁVNÁ PRÁCE. SPRÁVNÝ SMĚR.</span></div></section>
    <section className="intro section-wrap" id="o-nas"><div className="section-label">01 — KDO JSME</div><div><h2>Najdeme cestu<br/>k <em>nové práci.</em></h2><p className="intro-copy">NOMEN OMEN GROUP propojuje zájemce o zaměstnání s pracovními příležitostmi po celé České republice. Zaměřujeme se především na výrobu, průmysl a stavebnictví. Ozvěte se nám a společně probereme možnosti.</p></div></section>
    <section className="jobs-section" id="nabidky"><div className="section-wrap"><div className="jobs-heading"><div><div className="section-label">02 — AKTUÁLNÍ PŘÍLEŽITOSTI</div><h2>Vyberte si svou<br/><em>další práci.</em></h2></div><p>Podívejte se na aktuální nabídky a zjistěte více o jednotlivých pozicích.</p></div><div className="jobs-grid">{activeJobs.map(job => <JobCard key={job.slug} job={job}/>)}</div></div></section>
    <section className="contact-band" id="kontakt"><div><div className="section-label light-label">03 — KONTAKT</div><h2>Máte otázky?<br/><em>Ozvěte se nám.</em></h2><p>Rádi s vámi probereme aktuální pracovní možnosti.</p></div><div className="contact-actions"><a className="contact-email" href="mailto:anthonypokorny@seznam.cz">anthonypokorny@seznam.cz <span>↗</span></a><span className="contact-small">NOMEN OMEN GROUP · ČESKÁ REPUBLIKA</span></div></section>
  </main><Footer/></>;
}
