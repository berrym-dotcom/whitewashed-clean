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
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/eugenics.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', filter: 'contrast(1.3) brightness(0.6) blur(2px)', transform: visible ? 'scale(1.08)' : 'scale(1.02)', transition: 'transform 8s ease-out' }} />

        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(0,0,0,0.6), rgba(0,0,0,0.92))' }} />

        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center' }}>
          <h1 style={{ fontSize: '84px', letterSpacing: '6px', marginBottom: '40px', fontWeight: 500 }}>
            WHITEWASHED
          </h1>

          <p>She said she was poisoned.</p>
          <p style={{ opacity: 0.7 }}>They said she was mistaken.</p>
          <p style={{ opacity: 0.5 }}>The record was changed.</p>
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section style={{ padding: '120px 20px', maxWidth: '700px', margin: '0 auto' }}>
        <p style={{ marginBottom: '30px', fontSize: '20px' }}>
          In 1905, Jane Stanford died under suspicious circumstances.
        </p>

        <p style={{ marginBottom: '30px', fontSize: '20px' }}>
          The first diagnosis confirmed poisoning.
        </p>

        <p style={{ marginBottom: '50px', fontSize: '20px' }}>
          The second erased it.
        </p>

        <p style={{ fontSize: '24px', letterSpacing: '2px', opacity: 0.8 }}>
          OFFICIAL RECORD: NATURAL CAUSES
        </p>
      </section>

      {/* ================= EVIDENCE ================= */}
      <section style={{ padding: '120px 20px', background: '#050505' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>

          <p style={{ marginBottom: '30px', fontSize: '20px' }}>
            Not all accounts matched.
          </p>

          <p style={{ marginBottom: '30px', fontSize: '20px' }}>
            Early descriptions of symptoms disappeared from later reports.
          </p>

          <p style={{ marginBottom: '30px', fontSize: '20px' }}>
            Statements were revised.
          </p>

          <p style={{ marginBottom: '50px', fontSize: '20px' }}>
            Conclusions shifted over time.
          </p>

          <p style={{ fontSize: '24px', letterSpacing: '2px' }}>
            THE RECORD DOES NOT HOLD
          </p>
        </div>
      </section>

      {/* ================= POWER ================= */}
      <section style={{ padding: '120px 20px', maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ marginBottom: '30px', fontSize: '18px', opacity: 0.6 }}>
          At the center of the institution:
        </p>

        <p style={{ fontSize: '28px', letterSpacing: '2px', marginBottom: '30px' }}>
          DAVID STARR JORDAN
        </p>

        <p style={{ opacity: 0.7 }}>
          President of Stanford University.
        </p>

        <p style={{ marginTop: '40px', opacity: 0.5 }}>
          He helped define what would be remembered.
        </p>
      </section>

      {/* ================= END HIT ================= */}
      <section style={{ padding: '140px 20px', textAlign: 'center', background: '#000' }}>
        <p style={{ fontSize: '22px', marginBottom: '30px' }}>
          The diagnosis changed.
        </p>

        <p style={{ fontSize: '22px', marginBottom: '30px' }}>
          The evidence shifted.
        </p>

        <p style={{ fontSize: '22px', marginBottom: '50px' }}>
          The story remained.
        </p>

        <p style={{ fontSize: '26px', letterSpacing: '2px', opacity: 0.8 }}>
          HISTORY ACCEPTED THE REVISION
        </p>
      </section>

    </main>
  );
}
