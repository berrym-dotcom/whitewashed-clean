'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main style={{
      height: '100vh',
      background: '#000',
      color: '#efe7d6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Georgia, serif'
    }}>

      {/* MENU — ALWAYS VISIBLE (TEST MODE) */}
      <div style={{
        position: 'fixed',
        inset: 0,
        background: '#000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999
      }}>
        <div style={{
          fontSize: '28px',
          letterSpacing: '4px',
          marginBottom: 40
        }}>
          WHITEWASHED
        </div>

        <div style={{
          display: 'flex',
          gap: '40px',
          fontSize: '12px',
          letterSpacing: '3px',
          opacity: 0.75
        }}>
          <Link href="/film">FULL FILM</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/epk">PRESS KIT</Link>
          <Link href="/contact">CONTACT</Link>
        </div>
      </div>

    </main>
  );
}
