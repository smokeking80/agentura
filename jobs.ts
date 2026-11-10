export type Job = {
  slug: string;
  title: string;
  category: string;
  location: string;
  salary: string;
  employment: string;
  shifts: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  description: string;
  duties: string[];
  requirements: string[];
  benefits: string[];
  active: boolean;
  badge?: string;
};

// Nabídky upravujte právě zde. active: false znamená, že se nabídka na webu nezobrazuje.
export const jobs: Job[] = [
  {
    slug: 'prace-ve-slevarne', title: 'Pracovník ve slévárně', category: 'Výroba',
    location: 'Olomouc', salary: 'Dle konkrétní pozice', employment: 'Dle dohody', shifts: 'Bude upřesněno',
    image: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1200&q=85', imageAlt: 'Průmyslový provoz a výroba',
    excerpt: 'Pracovní příležitost ve slévárenském provozu.',
    description: 'Hledáme zájemce o práci ve slévárenském provozu. Konkrétní náplň práce a podmínky vám sdělíme při kontaktu.',
    duties: ['Práce ve slévárenském provozu', 'Plnění pracovních úkolů dle zařazení', 'Dodržování bezpečnostních pravidel'],
    requirements: ['Spolehlivost a zodpovědný přístup', 'Ochota pracovat podle požadavků provozu'],
    benefits: ['Ubytování zajištěno'], active: true, badge: 'Aktuální nabídka'
  },
  {
    slug: 'prace-na-stavbe', title: 'Pracovník na stavbě', category: 'Stavebnictví',
    location: 'Česká republika', salary: 'Dle konkrétní pozice', employment: 'Dle dohody', shifts: 'Dle projektu',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85', imageAlt: 'Stavební práce na staveništi',
    excerpt: 'Pracovní uplatnění na stavebních projektech.',
    description: 'Nabízíme pracovní příležitost ve stavebnictví. Podrobnosti o konkrétním projektu, náplni práce a odměně upřesníme při kontaktu.',
    duties: ['Pomocné nebo odborné stavební práce dle zařazení', 'Spolupráce s pracovním týmem', 'Dodržování pravidel bezpečnosti práce'],
    requirements: ['Spolehlivost', 'Pracovní nasazení', 'Praxe bude upřesněna podle konkrétní pozice'],
    benefits: ['Konkrétní podmínky sdělíme při kontaktu'], active: true, badge: 'Aktuální nabídka'
  },
  {
    slug: 'operator-vyroby', title: 'Operátor výroby', category: 'Výroba',
    location: 'Česká republika', salary: 'Dle konkrétní pozice', employment: 'Dle dohody', shifts: 'Bude upřesněno',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=85', imageAlt: 'Pracovník ve výrobním provozu',
    excerpt: 'Práce ve výrobním závodě. Detaily pozice upřesníme.',
    description: 'Pracovní nabídka ve výrobním závodě. Konkrétní pracovní zařazení, směnnost a mzdové podmínky budou upřesněny podle aktuálního místa.',
    duties: ['Činnosti dle pracovního zařazení', 'Spolupráce v rámci výrobního týmu'],
    requirements: ['Spolehlivost', 'Ochota učit se novým pracovním postupům'],
    benefits: ['Podmínky budou upřesněny'], active: true, badge: 'Aktuální nabídka'
  },
  {
    slug: 'pripravovana-pozice-4', title: 'Další pracovní příležitost', category: 'Připravujeme',
    location: 'Česká republika', salary: 'Bude doplněno', employment: 'Bude doplněno', shifts: 'Bude doplněno',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=85', imageAlt: 'Průmyslová výroba',
    excerpt: 'Připravená šablona pro další pracovní nabídku.', description: 'Tato nabídka je připravena jako šablona. Před zveřejněním doplňte skutečné informace.',
    duties: ['Doplňte náplň práce'], requirements: ['Doplňte požadavky'], benefits: ['Doplňte nabízené podmínky'], active: false
  },
  {
    slug: 'pripravovana-pozice-5', title: 'Nová pracovní nabídka', category: 'Připravujeme',
    location: 'Česká republika', salary: 'Bude doplněno', employment: 'Bude doplněno', shifts: 'Bude doplněno',
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&q=85', imageAlt: 'Výrobní hala',
    excerpt: 'Připravená šablona pro další pracovní nabídku.', description: 'Tato nabídka je připravena jako šablona. Před zveřejněním doplňte skutečné informace.',
    duties: ['Doplňte náplň práce'], requirements: ['Doplňte požadavky'], benefits: ['Doplňte nabízené podmínky'], active: false
  }
];

export const activeJobs = jobs.filter((job) => job.active);
