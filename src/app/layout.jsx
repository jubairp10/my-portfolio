import { Inter, DM_Serif_Display, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import ScrollProgress from '@/components/ScrollProgress';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-dm-serif',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://jubairp.dev'),
  title: 'Jubair P — Flutter Developer',
  description:
    'Flutter Developer crafting beautiful, high-performance cross-platform mobile apps. Selected work, experience, and skills.',
  keywords: [
    'Jubair P',
    'Flutter Developer',
    'Mobile App Developer',
    'Dart',
    'Firebase',
    'iOS',
    'Android',
    'Portfolio',
  ],
  authors: [{ name: 'Jubair P' }],
  openGraph: {
    title: 'Jubair P — Flutter Developer',
    description:
      'Flutter Developer crafting beautiful, high-performance cross-platform mobile apps.',
    type: 'website',
  },
};

export const viewport = {
  themeColor: '#f4f1ea',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSerif.variable} ${jetbrains.variable}`}
    >
      <body>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
