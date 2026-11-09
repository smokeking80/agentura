# NOMEN OMEN GROUP – pracovní web

Jednoduchý web v Next.js připravený pro GitHub + Vercel. Nabídky se spravují v jediném souboru `jobs.ts`.

## Lokální spuštění

1. Nainstalujte Node.js 20 nebo novější.
2. V této složce spusťte `npm install`.
3. Zkopírujte `.env.example` na `.env.local` a doplňte údaje Resend (viz níže).
4. Spusťte `npm run dev` a otevřete http://localhost:3000.

## Jak upravit nebo přidat nabídku

Otevřete `jobs.ts`. Každá nabídka je jeden objekt v poli `jobs`.

- `title`: název pozice
- `location`: lokalita
- `salary`: mzdové rozpětí / text
- `employment`, `shifts`: úvazek a směnnost
- `image`: URL fotografie (nebo cesta k obrázku v `public/images/`)
- `excerpt`, `description`, `duties`, `requirements`, `benefits`: texty detailu
- `active: true`: nabídka se zobrazí; `false`: skryje se

Dvě připravené nabídky jsou záměrně skryté (`active: false`). Před jejich zveřejněním doplňte reálné informace. Po změně souboru commitněte změnu do GitHubu; Vercel web automaticky znovu nasadí.

## E-mail přes Resend

1. Založte účet na https://resend.com/ a přidejte/ověřte vlastní doménu.
2. V Resend vytvořte API key.
3. V lokálním `.env.local` nebo ve Vercelu → Project → Settings → Environment Variables nastavte:
   - `RESEND_API_KEY` – API klíč
   - `CONTACT_TO` – `anthonypokorny@seznam.cz`
   - `RESEND_FROM_EMAIL` – odesílací adresa na ověřené doméně, např. `NOMEN OMEN GROUP <web@vasadomena.cz>`
4. Po nastavení proměnných znovu nasaďte web.

Bez ověřené odesílací domény a těchto proměnných formulář e-maily neodešle. Klíč nikdy nevkládejte do `jobs.ts` ani do veřejného kódu.

## Nasazení na GitHub a Vercel

1. Vytvořte nový prázdný repozitář na GitHubu.
2. Nahrajte obsah této složky do repozitáře.
3. Na https://vercel.com/ zvolte Add New → Project a importujte repozitář.
4. V nastavení projektu doplňte proměnné Resend uvedené výše.
5. Klikněte Deploy. Každý další push do hlavní větve spustí nové nasazení.

## Před ostrým spuštěním

- Nahraďte ilustrační fotografie vlastními nebo licenčně vhodnými fotografiemi.
- Doplňte přesné informace o pracovních místech, mzdách, směnách a požadavcích.
- Nahraďte telefon `+420 000 000 000` skutečným číslem, až bude k dispozici (zatím se nezobrazuje jako kontaktní údaj).
- Firemní název, sídlo a IČO jsou doplněny do patičky a stránky ochrany osobních údajů. Před ostrým provozem doplňte a ověřte právní základ, dobu uchování a případné předávání údajů zaměstnavatelům; text je pracovní návrh, nikoli právní posouzení.
- Před ostrým provozem doplňte vhodnou ochranu formuláře proti spamu / rate limiting a ověřte doručování e-mailů.

## Struktura

- `app/page.tsx` – hlavní stránka
- `app/jobs/[slug]/page.tsx` – detail nabídky
- `app/jobs/[slug]/form.tsx` – formulář zájemce
- `app/api/contact/route.ts` – serverové odeslání přes Resend
- `jobs.ts` – všech pět pracovních nabídek
- `app/globals.css` – vzhled webu
