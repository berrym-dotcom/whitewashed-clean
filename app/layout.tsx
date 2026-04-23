import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: '#000',
          color: '#efe7d6',
          fontFamily: 'Georgia, serif',
        }}
      >
        <nav
          style={{
            position: 'fixed',
            top: 20,
            right: 30,
            display: 'flex',
            gap: '20px',
            fontSize: '12px',
            letterSpacing: '2px',
            zIndex: 10,
          }}
        >
          <Link href="/" style={{ color: '#FFD700', textDecoration: 'none' }}>HOME</Link>
          <Link href="/film" style={{ color: '#FFD700', textDecoration: 'none' }}>FILM</Link>
          <Link href="/about" style={{ color: '#FFD700', textDecoration: 'none' }}>ABOUT</Link>
          <Link href="/epk" style={{ color: '#FFD700', textDecoration: 'none' }}>EPK</Link>
          <Link href="/contact" style={{ color: '#FFD700', textDecoration: 'none' }}>CONTACT</Link>
        </nav>

        {children}
      </body>
    </html>
  );
}   
