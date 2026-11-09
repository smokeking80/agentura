'use client';
import { useState } from 'react';

export function ApplicationForm({ jobTitle }: { jobTitle: string }) {
  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState(false);
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setBusy(true); setStatus('');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({...data, jobTitle}) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Odeslání se nepodařilo.');
      setStatus('Děkujeme! Vaše zpráva byla odeslána.'); form.reset();
    } catch (err) { setStatus(err instanceof Error ? err.message : 'Něco se pokazilo. Zkuste to prosím znovu.'); }
    finally { setBusy(false); }
  }
  return <form className="application-form" onSubmit={submit}><label>Jméno a příjmení<input name="name" required minLength={2} autoComplete="name" placeholder="Vaše jméno"/></label><label>Telefon<input name="phone" required autoComplete="tel" placeholder="+420 ..."/></label><label>E-mail<input name="email" type="email" required autoComplete="email" placeholder="vas@email.cz"/></label><label>Zpráva <span className="optional">(nepovinné)</span><textarea name="message" rows={4} placeholder="Napište nám něco o sobě…"/></label><div className="hp-field" aria-hidden="true"><label>Nechte toto pole prázdné<input name="website" tabIndex={-1} autoComplete="off"/></label></div><label className="consent"><input type="checkbox" name="consent" value="yes" required/><span>Souhlasím se zpracováním osobních údajů za účelem vyřízení mého zájmu o pracovní pozici. <a href="/ochrana-osobnich-udaju" target="_blank">Podrobnosti</a>.</span></label><button className="button button-dark" disabled={busy}>{busy ? 'Odesílám…' : 'Odeslat zájem'} <span>→</span></button>{status && <p className="form-status" role="status">{status}</p>}</form>;
}
