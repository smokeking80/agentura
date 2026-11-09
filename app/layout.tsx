import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NOMEN OMEN GROUP | Pracovní příležitosti',
  description: 'Pracovní příležitosti ve výrobě, slévárenství a stavebnictví po celé České republice.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="cs"><body>{children}</body></html>;
}
