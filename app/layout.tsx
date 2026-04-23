import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        background: '#000',
        color: '#efe7d6',
        fontFamily: 'Georgia, serif'
      }}>

        <nav style={{
          position: 'fixed',
          top: 20,
          right: 30,
          display: 'flex',
          gap: '20px',
          fontSize: '12px',
          letterSpacing: '2px',
          zIndex: 999
        }}>
          <Link href="/">HOME</Link>
          <Link href="/film">FILM</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/epk">EPK</Link>
          <Link href="/contact">CONTACT</Link>
        </nav>

        {children}

      </body>
    </html>
  );
}
