'use client';

import { useEffect } from 'react';

export default function Home() {

  // 🎬 AUTO SCROLL (FASTER)
  useEffect(() => {
    let scrollY = 0;
    let speed = 0.8; // 🔥 faster (adjust 0.6–1.2)

    const autoScroll = () => {
      scrollY += speed;
      window.scrollTo(0, scrollY);
      requestAnimationFrame(autoScroll);
    };

    autoScroll();
  }, []);

  // 🎬 SCENE TRIGGER (this fixes text timing)
  useEffect(() => {
    const scenes = document.querySelectorAll('.scene');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.5 }
    );

    scenes.forEach(scene => observer.observe(scene));

    return () => observer.disconnect();
  }, []);

  return (
    <main style={{ fontFamily: 'Georgia, serif', background: '#000', color: '#efe7d6' }}>

      {/* HERO */}
      <section className="scene">
        <div className="bg" style={{ backgroundImage: 'url(/eugenics.jpg)' }} />
        <div className="overlay" />

        <div className="content">
          <h1 className="title reveal r1">WHITEWASHED</h1>
          <p className="reveal r2">She said she was poisoned.</p>
          <p className="reveal r3 dim">They said she was mistaken.</p>
          <p className="reveal r4 fade">The record was changed.</p>
        </div>
      </section>

      {/* NEWSPAPER */}
      <section className="scene">
        <div className="bg" style={{ backgroundImage: 'url(/newspaper.jpg)' }} />
        <div className="overlay" />

        <div className="content">
          <h2 className="reveal r1">1905</h2>
          <p className="reveal r2">The first report confirmed poisoning.</p>
          <p className="reveal r3 dim">The second erased it.</p>
          <p className="reveal r4 fade">What happened in between is the story.</p>
        </div>
      </section>

      {/* BERTHA */}
      <section className="scene">
        <div className="bg" style={{ backgroundImage: 'url(/bertha.jpg)' }} />
        <div className="overlay" />

        <div className="content">
          <p className="reveal r1 dim">She was there.</p>
          <h2 className="reveal r2">BERTHA BERNER</h2>
          <p className="reveal r3">Secretary. Witness. Keeper of the story.</p>
        </div>
      </section>

      {/* JORDAN */}
      <section className="scene">
        <div className="bg" style={{ backgroundImage: 'url(/jordan.jpg)' }} />
        <div className="overlay dark" />

        <div className="content">
          <p className="reveal r1 dim">At the center of the institution:</p>
          <h2 className="reveal r2">DAVID STARR JORDAN</h2>
          <p className="reveal r3">President of Stanford University.</p>
        </div>
      </section>

      {/* STANFORD */}
      <section className="scene">
        <div className="bg" style={{ backgroundImage: 'url(/stanford.jpg)' }} />
        <div className="overlay" />

        <div className="content">
          <p className="reveal r1">
            The institution endured.<br />
            The narrative stabilized.<br />
            The record remained.
          </p>
        </div>
      </section>

      {/* FINAL */}
      <section className="scene">
        <div className="content">
          <p className="reveal r1">The diagnosis changed.</p>
          <p className="reveal r2">The evidence shifted.</p>
          <p className="reveal r3">The story remained.</p>

          <h2 className="reveal r4 final">
            HISTORY ACCEPTED THE REVISION
          </h2>
        </div>
      </section>

      {/* ================= STYLES ================= */}
      <style>{`

        .scene {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
        }

        .bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          filter: grayscale(100%) brightness(0.5);
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.55);
        }

        .overlay.dark {
          background: rgba(0,0,0,0.7);
        }

        .content {
          position: relative;
          z-index: 2;
          max-width: 700px;
          padding: 20px;
        }

        .title {
          font-size: 72px;
          letter-spacing: 3px;
          margin-bottom: 30px;
          transform: scaleX(0.96);
        }

        h2 {
          font-size: 32px;
          letter-spacing: 2px;
          margin-bottom: 20px;
        }

        .dim { opacity: 0.6; }
        .fade { opacity: 0.4; }

        .final {
          margin-top: 40px;
          letter-spacing: 2px;
          opacity: 0.8;
        }

        /* 🔥 FIXED REVEAL SYSTEM */
        .reveal {
          opacity: 0;
          transform: translateY(20px);
        }

        .scene.visible .reveal {
          animation: fadeUp 1s forwards;
        }

        .scene.visible .r1 { animation-delay: 0.3s; }
        .scene.visible .r2 { animation-delay: 1.5s; }
        .scene.visible .r3 { animation-delay: 2.7s; }
        .scene.visible .r4 { animation-delay: 3.9s; }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

      `}</style>

    </main>
  );
}
