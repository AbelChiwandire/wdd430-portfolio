import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Abel Chiwandire | Project Portfolio',
    template: '%s | Project Portfolio',
  },
  description:
    'A portfolio of web development projects.',
  metadataBase: new URL('https://wdd430-portfolio-three.vercel.app'),
};

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
  return (
      <html lang="en">
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html> 
    )
}