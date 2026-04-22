'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 300);
  }, []);

  return (
    <main
      style={{
        fontFamily: 'Georgia, serif',
        background: '#000',
        color: '#efe7d6',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* NAV */}
      <nav
        style={{
          position: 'fixed',
          top: 20,
          right: 40,
          zIndex: 10,
          fontSize: '12px',
          letterSpacing: '2px',
          opacity: visible ? 1 : 0,
          transition: 'opacity 1.5s ease',
        }}
      >
        <a href="/" style={{ marginRight: 20, color: '#efe7d6', textDecoration: 'none' }}>HOME</a>
        <a href="/about" style={{ marginRight: 20, color: '#efe7d6', textDecoration: 'none' }}>ABOUT</a>
        <a href="/film" style={{ marginRight: 20, color: '#efe7d6', textDecoration: 'none' }}>FILM</a>
        <a href="/epk" style={{ marginRight: 20, color: '#efe7d6', textDecoration: 'none' }}>EPK</a>
        <a href="/contact" style={{ color: '#efe7d6', textDecoration: 'none' }}>CONTACT</a>
      </nav>

      {/* BACKGROUND IMAGE (ZOOM ANIMATION) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: "url('/eugenics.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'contrast(1.3) brightness(0.6) blur(2px)',
          transform: visible ? 'scale(1.08)' : 'scale(1.02)',
          transition: 'transform 8s ease-out',
        }}
      />

      {/* DARK OVERLAY */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at center, rgba(0,0,0,0.6), rgba(0,0,0,0.92))',
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          textAlign: 'center',
          padding: '20px',
        }}
      >
        <h1
          style={{
            fontSize: '84px',
            letterSpacing: '6px',
            marginBottom: '40px',
            fontWeight: 500,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0px)' : 'translateY(20px)',
            transition: 'all 1.5s ease',
          }}
        >
          WHITEWASHED
        </h1>

        <p
          style={{
            marginBottom: 20,
            opacity: visible ? 0.9 : 0,
            transition: 'opacity 2s ease 0.5s',
          }}
        >
          She said she was poisoned.
        </p>

        <p
          style={{
            marginBottom: 20,
            opacity: visible ? 0.7 : 0,
            transition: 'opacity 2s ease 1s',
          }}
        >
          They said she was mistaken.
        </p>

        <p
          style={{
            marginBottom: 40,
            opacity: visible ? 0.55 : 0,
            transition: 'opacity 2s ease 1.5s',
          }}
        >
          The record was changed.
        </p>

        <button
          style={{
            padding: '12px 28px',
            border: '1px solid #efe7d6',
            background: 'transparent',
            color: '#efe7d6',
            letterSpacing: '2px',
            cursor: 'pointer',
            opacity: visible ? 1 : 0,
            transition: 'opacity 2s ease 2s',
          }}
        >
          WATCH FILM
        </button>
      </div>
    </main>
  );
}
