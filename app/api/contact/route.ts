import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Jednoduchá honeypot ochrana proti automatickému spamu.
    if (body.website) return NextResponse.json({ ok: true });
    const { name, phone, email, message, jobTitle, consent } = body;
    if (!name || !phone || !email || !jobTitle || consent !== 'yes') return NextResponse.json({ error: 'Vyplňte prosím povinné údaje a souhlas.' }, { status: 400 });
    if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: 'Zkontrolujte prosím e-mailovou adresu.' }, { status: 400 });
    const key = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO;
    const from = process.env.RESEND_FROM_EMAIL;
    if (!key || !to || !from) return NextResponse.json({ error: 'Formulář zatím není nakonfigurován. Kontaktujte nás prosím e-mailem.' }, { status: 503 });
    const safe = (value: unknown) => String(value ?? '').replace(/[<>]/g, '').slice(0, 5000);
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST', headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from, to: [to], reply_to: safe(email), subject: `Zájem o pozici: ${safe(jobTitle)}`, text: `Nový zájem o pracovní pozici\n\nPozice: ${safe(jobTitle)}\nJméno: ${safe(name)}\nTelefon: ${safe(phone)}\nE-mail: ${safe(email)}\n\nZpráva:\n${safe(message)}\n\nSouhlas se zpracováním osobních údajů: udělen prostřednictvím formuláře.` })
    });
    if (!response.ok) return NextResponse.json({ error: 'E-mail se nepodařilo odeslat. Zkuste to prosím později.' }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch { return NextResponse.json({ error: 'Neplatný požadavek.' }, { status: 400 }); }
}
