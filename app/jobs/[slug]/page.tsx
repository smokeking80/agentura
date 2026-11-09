import Link from 'next/link';
import { notFound } from 'next/navigation';
import { jobs } from '@/jobs';
import { Footer, Header } from '@/app/components';
import { ApplicationForm } from './form';

export function generateStaticParams() { return jobs.filter(j => j.active).map(j => ({ slug: j.slug })); }

export default async function JobDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = jobs.find(j => j.slug === slug && j.active);
  if (!job) notFound();
  return <><Header/><main className="detail-page"><div className="detail-top"><Link href="/#nabidky" className="back-link">← Zpět na nabídky</Link><span className="kicker"><i/> {job.category.toUpperCase()}</span><h1>{job.title}</h1><p>{job.excerpt}</p><div className="detail-facts"><div><small>LOKALITA</small><b>{job.location}</b></div><div><small>MZDA</small><b>{job.salary}</b></div><div><small>ÚVAZEK</small><b>{job.employment}</b></div><div><small>SMĚNNOST</small><b>{job.shifts}</b></div></div></div><div className="detail-image" style={{backgroundImage:`url('${job.image}')`}}/><div className="detail-columns"><article className="detail-copy"><span className="section-label">INFORMACE O POZICI</span><h2>Co vás na pozici čeká</h2><p>{job.description}</p><h3>Náplň práce</h3><ul>{job.duties.map(x=><li key={x}>{x}</li>)}</ul><h3>Co očekáváme</h3><ul>{job.requirements.map(x=><li key={x}>{x}</li>)}</ul><h3>Co nabízíme</h3><ul>{job.benefits.map(x=><li key={x}>{x}</li>)}</ul><p className="detail-disclaimer">Konkrétní podmínky pracovního místa budou potvrzeny při jednání s uchazečem.</p></article><aside className="form-panel" id="zajem"><span className="section-label">MÁM ZÁJEM</span><h2>Ozvěte se nám.</h2><p>Vyplňte kontakt a my se vám ozveme s dalšími informacemi.</p><ApplicationForm jobTitle={job.title}/></aside></div></main><Footer/></>;
}
