import type { ReactNode } from 'react';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#000', color: '#fff' }}>
        
        {/* TOP NAV */}
        <div style={nav}>
          <a href="/" style={navItem}>HOME</a>
          <a href="/film" style={navItem}>FILM</a>
          <a href="/about" style={navItem}>ABOUT</a>

          {/* ✅ FIXED EPK */}
          <a href="/whitewashed-epk.pdf" target="_blank" style={navItem}>
            EPK
          </a>

          <a href="/contact" style={navItem}>CONTACT</a>
        </div>

        {children}
      </body>
    </html>
  );
}

const nav = {
  position: 'fixed' as const,
  top: 20,
  right: 40,
  display: 'flex',
  gap: '20px',
  zIndex: 100,
};

const navItem = {
  color: '#ffe600',
  textDecoration: 'none',
  letterSpacing: '3px',
  fontSize: '14px',
};
