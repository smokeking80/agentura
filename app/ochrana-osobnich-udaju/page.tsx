import Link from 'next/link';
import { Footer, Header } from '@/app/components';

export default function Privacy() {
  return <><Header/><main className="privacy-page"><Link href="/" className="back-link">← Zpět na hlavní stránku</Link><span className="section-label">INFORMACE PRO UCHAZEČE</span><h1>Ochrana osobních údajů</h1>
    <h2>Správce osobních údajů</h2>
    <p><strong>NOMEN OMEN GROUP, s.r.o.</strong><br/>Sídlo: Mokrohorská 400/29, Soběšice, 644 00 Brno<br/>IČO: 03745228<br/>E-mail: <a href="mailto:anthonypokorny@seznam.cz">anthonypokorny@seznam.cz</a></p>
    <h2>Jaké údaje zpracováváme a proč</h2>
    <p>Prostřednictvím formuláře můžete zaslat jméno, telefon, e-mail a případnou zprávu. Tyto údaje používáme k vyřízení vašeho zájmu o uvedenou pracovní pozici a k navazující komunikaci ohledně pracovního uplatnění.</p>
    <h2>Kdo může mít k údajům přístup</h2>
    <p>Údaje jsou zpřístupněny pouze osobám, které zajišťují nábor a komunikaci s uchazeči. Pro technické odeslání zprávy může být využita služba Resend.</p>
    <h2>Vaše práva</h2>
    <p>Máte právo požadovat přístup ke svým osobním údajům, jejich opravu nebo výmaz, případně vznést námitku či podat stížnost u Úřadu pro ochranu osobních údajů. V případě dotazů nás kontaktujte na výše uvedeném e-mailu.</p>
    <div className="privacy-warning"><b>INFORMACE K DOPLNĚNÍ PŘED PLNÝM PROVOZEM</b><p>Před ostrým spuštěním je potřeba doplnit a ověřit zejména právní základ zpracování, konkrétní dobu uchování údajů, případné předávání údajů konkrétním zaměstnavatelům a úplné informace o příjemcích. Text je pracovní návrh a měl by být zkontrolován podle skutečného náborového procesu společnosti.</p></div>
  </main><Footer/></>;
}
