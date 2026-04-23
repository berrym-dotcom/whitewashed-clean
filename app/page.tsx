'use client';

import { useEffect, useState } from 'react';

function Scene({ children }: any) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const trigger = window.innerHeight * 0.85;
      const elements = document.querySelectorAll('.scene');

      elements.forEach((el: any) => {
        const top = el.getBoundingClientRect().top;
        if (top < trigger) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <section className="scene">{children}</section>;
}

export default function Home() {
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
          <h1>WHITEWASHED</h1>
          <p>She said she was poisoned.</p>
          <p className="dim">They said she was mistaken.</p>
          <p className="fade">The record was changed.</p>
        </div>
      </Scene>

      {/* NEWSPAPER */}
      <Scene>
        <div className="bg" style={{ backgroundImage: 'url(/newspaper.jpg)' }} />
        <div className="overlay" />

        <div className="content">
          <h2>1905</h2>
          <p>The first report confirmed poisoning.</p>
          <p className="dim">The second erased it.</p>
          <p className="fade">What happened in between is the story.</p>
        </div>
      </Scene>

      {/* BERTHA */}
      <Scene>
        <div className="bg" style={{ backgroundImage: 'url(/bertha.jpg)' }} />
        <div className="overlay" />

        <div className="content">
          <p className="dim">She was there.</p>
          <h2>BERTHA BERNER</h2>
          <p>Secretary. Witness. Keeper of the story.</p>
        </div>
      </Scene>

      {/* JORDAN */}
      <Scene>
        <div className="bg" style={{ backgroundImage: 'url(/jordan.jpg)' }} />
        <div className="overlay dark" />

        <div className="content">
          <p className="dim">At the center of the institution:</p>
          <h2>DAVID STARR JORDAN</h2>
          <p>President of Stanford University.</p>
        </div>
      </Scene>

      {/* STANFORD */}
      <Scene>
        <div className="bg" style={{ backgroundImage: 'url(/stanford.jpg)' }} />
        <div className="overlay" />

        <div className="content">
          <p>
            The institution endured.<br />
            The narrative stabilized.<br />
            The record remained.
          </p>
        </div>
      </Scene>

      {/* FINAL */}
      <Scene>
        <div className="content">
          <p>The diagnosis changed.</p>
          <p>The evidence shifted.</p>
          <p>The story remained.</p>

          <h2 className="final">
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
          opacity: 0;
          transform: translateY(40px);
          transition: all 1.6s ease;
        }

        .scene.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          filter: grayscale(100%) brightness(0.5);
          transform: scale(1.05);
          transition: transform 6s ease;
        }

        .scene.visible .bg {
          transform: scale(1.1);
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

        h1 {
          font-size: 72px;
          letter-spacing: 6px;
          margin-bottom: 30px;
        }

        h2 {
          font-size: 32px;
          letter-spacing: 3px;
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
      `}</style>

    </main>
  );
}
