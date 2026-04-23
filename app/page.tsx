'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [started, setStarted] = useState(false);

  // START EXPERIENCE (smooth delay before scroll)
  const startExperience = async () => {
    setStarted(true);

    setTimeout(() => {
      startScroll();
    }, 1200);

    try {
      await audioRef.current?.play();
    } catch {}
  };

  // SMOOTH SCROLL
  const startScroll = () => {
    let scrollY = 0;
    const speed = 0.5;

    const scroll = () => {
      scrollY += speed;
      window.scrollTo(0, scrollY);
      requestAnimationFrame(scroll);
    };

    scroll();
  };

  return (
    <main style={{ background: '#000', color: '#efe7d6', fontFamily: 'Georgia, serif' }}>

      {/* AUDIO */}
      <audio ref={audioRef} src="/ambient.mp3" loop />

      {/* PERSISTENT MENU */}
      <div style={topMenu}>
        <Link href="/">HOME</Link>
        <Link href="/film">FILM</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/epk">EPK</Link>
        <Link href="/contact">CONTACT</Link>
      </div>

      {/* START SCREEN */}
      {!started && (
        <div style={startScreen}>
          <button onClick={startExperience} style={button}>
            BEGIN EXPERIENCE
          </button>
        </div>
      )}

      {/* JORDAN SCENE */}
      <Scene img="/jordan.jpg">
        <p className="line l1">DAVID STARR JORDAN</p>
        <p className="line l2">President of Stanford University</p>

        <p className="line l3 emphasis">
          Scientist. Administrator. Ideologue.
        </p>

        <p className="line l4 dim">
          And a man who shaped the official record
        </p>
      </Scene>

      {/* STYLES */}
      <style>{`
        .scene {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
        }

        .line {
          opacity: 0;
          transform: translateY(20px);
        }

        /* TIMING — TIGHTENED */
        .l1 { animation: fadeUp 1s forwards 0.5s; }
        .l2 { animation: fadeUp 1s forwards 1.6s; }
        .l3 { animation: fadeUp 1s forwards 2.8s; }
        .l4 { animation: fadeUp 1s forwards 4.2s; }

        /* EMPHASIS LINE */
        .emphasis {
          letter-spacing: 2px;
          font-size: 18px;
        }

        .dim {
          opacity: 0.6;
        }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        a {
          color: #efe7d6;
          text-decoration: none;
          opacity: 0.7;
        }

        a:hover {
          opacity: 1;
        }
      `}</style>

    </main>
  );
}

/* SCENE COMPONENT */
function Scene({ img, children }: any) {
  return (
    <section className="scene">
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'grayscale(100%) brightness(0.5)'
      } as any} />

      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(0,0,0,0.6)'
      } as any} />

      <div style={{ position: 'relative', zIndex: 2 }}>
        {children}
      </div>
    </section>
  );
}

/* STYLES */
const startScreen = {
  position: 'fixed',
  inset: 0,
  background: '#000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 100
} as any;

const button = {
  border: '1px solid #efe7d6',
  padding: '16px 32px',
  letterSpacing: '3px',
  background: 'transparent',
  color: '#efe7d6'
} as any;

const topMenu = {
  position: 'fixed',
  top: 20,
  right: 30,
  display: 'flex',
  gap: '20px',
  fontSize: '12px',
  letterSpacing: '2px',
  zIndex: 999
} as any;
