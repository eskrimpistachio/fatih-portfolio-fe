import type { Metadata } from 'next';
import './globals.css';
import dynamic from 'next/dynamic';

const Nav = dynamic(() => import('./components/Navbar'), {
  ssr: false,
});

const Footer = dynamic(() => import('./components/Footer'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'Fatih Portfolio',
  description: 'This is Fatih Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/satoshi"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/logo.svg" type="image/png" sizes="32x32" />
      </head>

      <body className="mx-12 md:mx-16 satoshi">
        <Nav />
        <div className="my-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
