'use client';

import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [started, setStarted] = useState(false);

  // AUTO SCROLL
  useEffect(() => {
    if (!started) return;

    let scrollY = 0;
    let speed = 0.8;

    const scroll = () => {
      scrollY += speed;
      window.scrollTo(0, scrollY);
      requestAnimationFrame(scroll);
    };

    scroll();
  }, [started]);

  // 🎬 TRIGGER SCENES (KEY FIX)
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

  const startExperience = async () => {
    setStarted(true);

    const audio = audioRef.current;
    if (!audio) return;

    try {
      audio.volume = 1;
      audio.currentTime = 0;
      await audio.play();
    } catch (err) {
      console.log("audio failed", err);
    }
  };

  return (
    <main style={{ fontFamily: 'Georgia, serif', background: '#000', color: '#efe7d6' }}>

      <audio ref={audioRef} src="/ambient.mp3" loop preload="auto" />

      {/* START SCREEN */}
      {!started && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: '#000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100
        }}>
          <button
            onClick={startExperience}
            style={{
              border: '1px solid #efe7d6',
              background: 'transparent',
              color: '#efe7d6',
              padding: '16px 32px',
              letterSpacing: '3px',
              cursor: 'pointer'
            }}
          >
            BEGIN EXPERIENCE
          </button>
        </div>
      )}

      {/* SCENES */}

      <Scene img="/eugenics.jpg">
        <h1 className="reveal r1 title">WHITEWASHED</h1>
        <p className="reveal r2">She said she was poisoned.</p>
        <p className="reveal r3 dim">They said she was mistaken.</p>
        <p className="reveal r4 fade">The record was changed.</p>
      </Scene>

      <Scene img="/newspaper.jpg">
        <h2 className="reveal r1">1905</h2>
        <p className="reveal r2">The first report confirmed poisoning.</p>
        <p className="reveal r3 dim">The second erased it.</p>
        <p className="reveal r4 fade">What happened in between is the story.</p>
      </Scene>

      <Scene img="/bertha.jpg">
        <p className="reveal r1 dim">She was there.</p>
        <h2 className="reveal r2">BERTHA BERNER</h2>
        <p className="reveal r3">Secretary. Witness. Keeper of the story.</p>
      </Scene>

      <Scene img="/jordan.jpg" dark>
        <p className="reveal r1 dim">At the center of the institution:</p>
        <h2 className="reveal r2">DAVID STARR JORDAN</h2>
        <p className="reveal r3">President of Stanford University.</p>
      </Scene>

      <Scene img="/stanford.jpg">
        <p className="reveal r1">
          The institution endured.<br />
          The narrative stabilized.<br />
          The record remained.
        </p>
      </Scene>

      <section style={{ padding: '120px 20px', textAlign: 'center' }}>
        <p className="reveal r1">The diagnosis changed.</p>
        <p className="reveal r2">The evidence shifted.</p>
        <p className="reveal r3">The story remained.</p>

        <h2 className="reveal r4" style={{ marginTop: 40 }}>
          HISTORY ACCEPTED THE REVISION
        </h2>
      </section>

      {/* STYLES */}
      <style>{`
        .scene {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          text-align: center;
        }

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

/* COMPONENT */

function Scene({ img, children, dark }: any) {
  return (
    <section className="scene">
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: \`url(\${img})\`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'grayscale(100%) brightness(0.5)'
      }} />

      <div style={{
        position: 'absolute',
        inset: 0,
        background: dark ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0.55)'
      }} />

      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: 700,
        padding: 20
      }}>
        {children}
      </div>
    </section>
  );
}

/* STYLES */

const title = {
  fontSize: '72px',
  letterSpacing: '3px',
  transform: 'scaleX(0.96)'
};

const dim = { opacity: 0.6 };
const fade = { opacity: 0.4 };
