'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const handleStart = () => setStarted(true);
    window.addEventListener('experience-started', handleStart);
    return () => window.removeEventListener('experience-started', handleStart);
  }, []);

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

        {/* SHOW MENU ONLY AFTER START */}
        {started && (
          <nav
            style={{
              position: 'fixed',
              top: 20,
              right: 30,
              display: 'flex',
              gap: '20px',
              fontSize: '12px',
              letterSpacing: '2px',
              zIndex: 999,
            }}
          >
            <Link href="/" style={linkStyle}>HOME</Link>
            <Link href="/film" style={linkStyle}>FILM</Link>
            <Link href="/about" style={linkStyle}>ABOUT</Link>
            <Link href="/epk" style={linkStyle}>EPK</Link>
            <Link href="/contact" style={linkStyle}>CONTACT</Link>
          </nav>
        )}

        {children}

      </body>
    </html>
  );
}

const linkStyle = {
  color: '#FFD700',
  textDecoration: 'none',
  opacity: 0.85,
} as any;
