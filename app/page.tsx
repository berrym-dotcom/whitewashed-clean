'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 300);
  }, []);

  return (
    <main style={{ fontFamily: 'Georgia, serif', background: '#000', color: '#efe7d6' }}>

      {/* ================= HERO ================= */}
      <section style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
        <nav style={{ position: 'fixed', top: 20, right: 40, zIndex: 10, fontSize: '12px', letterSpacing: '2px', opacity: visible ? 1 : 0, transition: 'opacity 1.5s ease' }}>
          <a href="/" style={{ marginRight: 20, color: '#efe7d6', textDecoration: 'none' }}>HOME</a>
          <a href="/about" style={{ marginRight: 20, color: '#efe7d6', textDecoration: 'none' }}>ABOUT</a>
          <a href="/film" style={{ marginRight: 20, color: '#efe7d6', textDecoration: 'none' }}>FILM</a>
          <a href="/epk" style={{ marginRight: 20, color: '#efe7d6', textDecoration: 'none' }}>EPK</a>
          <a href="/contact" style={{ color: '#efe7d6', textDecoration: 'none' }}>CONTACT</a>
        </nav>

        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/eugenics.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', filter: 'contrast(1.3) brightness(0.6) blur(2px)', transform: visible ? 'scale(1.08)' : 'scale(1.02)', transition: 'transform 8s ease-out' }} />

        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(0,0,0,0.6), rgba(0,0,0,0.92))' }} />

        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center' }}>
          <h1 style={{ fontSize: '84px', letterSpacing: '6px', marginBottom: '40px', fontWeight: 500, opacity: visible ? 1 : 0, transform: visible ? 'translateY(0px)' : 'translateY(20px)', transition: 'all 1.5s ease' }}>
            WHITEWASHED
          </h1>

          <p style={{ opacity: visible ? 0.9 : 0, transition: 'opacity 2s ease 0.5s' }}>She said she was poisoned.</p>
          <p style={{ opacity: visible ? 0.7 : 0, transition: 'opacity 2s ease 1s' }}>They said she was mistaken.</p>
          <p style={{ opacity: visible ? 0.55 : 0, transition: 'opacity 2s ease 1.5s' }}>The record was changed.</p>
        </div>
      </section>

      {/* ================= SCENE 2 ================= */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 20px', background: '#0a0a0a' }}>
        <div style={{ maxWidth: '700px', textAlign: 'left' }}>
          <p style={{ marginBottom: '30px', fontSize: '20px', lineHeight: 1.6 }}>In 1905, Jane Stanford died under suspicious circumstances.</p>
          <p style={{ marginBottom: '30px', fontSize: '20px', lineHeight: 1.6 }}>The first diagnosis confirmed poisoning.</p>
          <p style={{ marginBottom: '30px', fontSize: '20px', lineHeight: 1.6 }}>The second erased it.</p>
          <p style={{ marginTop: '50px', fontSize: '24px', letterSpacing: '2px', opacity: 0.8 }}>OFFICIAL RECORD: NATURAL CAUSES</p>
        </div>
      </section>

      {/* ================= SCENE 8 ================= */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#050505', padding: '80px 20px' }}>
        <div style={{ maxWidth: '700px', textAlign: 'left' }}>

          <p style={{ marginBottom: '30px', fontSize: '20px', lineHeight: 1.6 }}>
            Not all accounts matched.
          </p>

          <p style={{ marginBottom: '30px', fontSize: '20px', lineHeight: 1.6 }}>
            Some descriptions of her symptoms were omitted.
          </p>

          <p style={{ marginBottom: '30px', fontSize: '20px', lineHeight: 1.6 }}>
            Early conclusions were no longer referenced.
          </p>

          <p style={{ marginBottom: '30px', fontSize: '20px', lineHeight: 1.6 }}>
            Certain details appeared only once—then disappeared.
          </p>

          <p style={{ marginTop: '60px', fontSize: '22px', letterSpacing: '2px', opacity: 0.8 }}>
            THE RECORD WAS NOT CONSISTENT
          </p>

        </div>
      </section>

    </main>
  );
}
