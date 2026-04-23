'use client';

import { useEffect } from 'react';

function Scene({ children }: any) {
  return <section className="scene">{children}</section>;
}

export default function Home() {

  // 🎬 AUTO SCROLL
  useEffect(() => {
    let scrollY = 0;
    let speed = 0.25;

    const autoScroll = () => {
      scrollY += speed;
      window.scrollTo(0, scrollY);
      requestAnimationFrame(autoScroll);
    };

    autoScroll();
  }, []);

  return (
    <main style={{ fontFamily: 'Georgia, serif', background: '#000', color: '#efe7d6' }}>

      {/* NAV */}
      <nav style={{
        position: 'fixed',
        top: 20,
        right: 40,
        zIndex: 10,
        fontSize: '12px',
        letterSpacing: '2px'
      }}>
        <a href="/" style={{ marginRight: 20 }}>HOME</a>
        <a href="/about" style={{ marginRight: 20 }}>ABOUT</a>
        <a href="/film" style={{ marginRight: 20 }}>FILM</a>
        <a href="/epk" style={{ marginRight: 20 }}>EPK</a>
        <a href="/contact">CONTACT</a>
      </nav>

      {/* HERO */}
      <Scene>
        <div className="bg" style={{ backgroundImage: 'url(/eugenics.jpg)' }} />
        <div className="overlay" />

        <div className="content">
          <h1 className="title reveal r1">WHITEWASHED</h1>

          <p className="reveal r2">She said she was poisoned.</p>
          <p className="reveal r3 dim">They said she was mistaken.</p>
          <p className="reveal r4 fade">The record was changed.</p>
        </div>
      </Scene>

      {/* NEWSPAPER */}
      <Scene>
        <div className="bg" style={{ backgroundImage: 'url(/newspaper.jpg)' }} />
        <div className="overlay" />

        <div className="content">
          <h2 className="reveal r1">1905</h2>
          <p className="reveal r2">The first report confirmed poisoning.</p>
          <p className="reveal r3 dim">The second erased it.</p>
          <p className="reveal r4 fade">What happened in between is the story.</p>
        </div>
      </Scene>

      {/* BERTHA */}
      <Scene>
        <div className="bg" style={{ backgroundImage: 'url(/bertha.jpg)' }} />
        <div className="overlay" />

        <div className="content">
          <p className="reveal r1 dim">She was there.</p>
          <h2 className="reveal r2">BERTHA BERNER</h2>
          <p className="reveal r3">Secretary. Witness. Keeper of the story.</p>
        </div>
      </Scene>

      {/* JORDAN */}
      <Scene>
        <div className="bg" style={{ backgroundImage: 'url(/jordan.jpg)' }} />
        <div className="overlay dark" />

        <div className="content">
          <p className="reveal r1 dim">At the center of the institution:</p>
          <h2 className="reveal r2">DAVID STARR JORDAN</h2>
          <p className="reveal r3">President of Stanford University.</p>
        </div>
      </Scene>

      {/* STANFORD */}
      <Scene>
        <div className="bg" style={{ backgroundImage: 'url(/stanford.jpg)' }} />
        <div className="overlay" />

        <div className="content">
          <p className="reveal r1">
            The institution endured.<br />
            The narrative stabilized.<br />
            The record remained.
          </p>
        </div>
      </Scene>

      {/* FINAL */}
      <Scene>
        <div className="content">
          <p className="reveal r1">The diagnosis changed.</p>
          <p className="reveal r2">The evidence shifted.</p>
          <p className="reveal r3">The story remained.</p>

          <h2 className="reveal r4 final">
            HISTORY ACCEPTED THE REVISION
          </h2>
        </div>
      </Scene>

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
          transform: scale(1.05);
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

        .dim {
          opacity: 0.6;
        }

        .fade {
          opacity: 0.4;
        }

        .final {
          margin-top: 40px;
          letter-spacing: 2px;
          opacity: 0.8;
        }

        /* 🎬 TEXT TIMING */
        .reveal {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 1.2s forwards;
        }

        .r1 { animation-delay: 0.5s; }
        .r2 { animation-delay: 2s; }
        .r3 { animation-delay: 3.5s; }
        .r4 { animation-delay: 5s; }

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
