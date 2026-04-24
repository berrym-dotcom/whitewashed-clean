import type { ReactNode } from 'react';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body style={body}>

        {/* 🔥 PERSISTENT NAV */}
        <div style={nav}>
          <a href="/" style={navItem}>HOME</a>
          <a href="/film" style={navItem}>FILM</a>
          <a href="/about" style={navItem}>ABOUT</a>
          <a href="/contact" style={navItem}>CONTACT</a>
          <a href="/whitewashed-epk.pdf" style={navItem}>EPK</a>
        </div>

        {children}
      </body>
    </html>
  );
}

/* STYLES */

const body = {
  margin: 0,
  background: '#000',
  color: '#fff',
  fontFamily: 'sans-serif',
};

const nav = {
  position: 'fixed' as const,
  top: '20px',
  right: '40px',
  display: 'flex',
  gap: '20px',
  zIndex: 1000,
};

const navItem = {
  color: '#ffe600',
  textDecoration: 'none',
  fontSize: '14px',
  letterSpacing: '2px',
};
