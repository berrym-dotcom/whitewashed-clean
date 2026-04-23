'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [started, setStarted] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // AUTO SCROLL
  useEffect(() => {
    if (!started) return;

    let scrollY = 0;
    const speed = 0.8;

    const scroll = () => {
      scrollY += speed;
      window.scrollTo(0, scrollY);
      requestAnimationFrame(scroll);
    };

    scroll();
  }, [started]);

  // TEXT REVEAL
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
      { threshold: 0.6 }
    );

    scenes.forEach(scene => observer.observe(scene));
    return () => observer.disconnect();
  }, []);

  // SHOW MENU AT END
  useEffect(() => {
    if (!started) return;

    const checkScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        setShowMenu(true);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [started]);

  // LOWER AUDIO AT END
  useEffect(() => {
    if (showMenu && audioRef.current) {
      audioRef.current.volume = 0.4;
    }
  }, [showMenu]);

  const startExperience = async () => {
    setStarted(true);
    try {
      await audioRef.current?.play();
    } catch {}
  };

  return (
    <main style={{ background: '#000', color: '#efe7d6', fontFamily: 'Georgia, serif' }}>

      {/* AUDIO */}
      <audio ref={audioRef} src="/ambient.mp3" loop preload="auto" />

      {/* START SCREEN */}
      {!started && (
        <div style={startScreen}>
          <button onClick={startExperience} style={button}>
            BEGIN EXPERIENCE
          </button>
        </div>
      )}

      {/* SCENES */}
      <Scene img="/eugenics.jpg">
        <h1 className="line l1">WHITEWASHED</h1>
        <p className="line l2">She said she was poisoned.</p>
        <p className="line l3">They said she was mistaken.</p>
        <p className="line l4">The record was changed.</p>
      </Scene>

      <Scene img="/newspaper.jpg">
        <p className="line l1">1905</p>
        <p className="line l2">The first report confirmed poisoning.</p>
        <p className="line l3">The second erased it.</p>
        <p className="line l4">What happened in between is the story.</p>
      </Scene>

      <Scene img="/bertha.jpg">
        <p className="line l1">She was there.</p>
        <p className="line l2">BERTHA BERNER</p>
        <p className="line l3">Witness. Keeper of the story.</p>
      </Scene>

      <Scene img="/jordan.jpg">
        <p className="line l1">DAVID STARR JORDAN</p>
        <p className="line l2">President of Stanford.</p>
      </Scene>

      <Scene img="/stanford.jpg">
        <p className="line l1">The institution endured.</p>
        <p className="line l2">The record remained.</p>
      </Scene>

      {/* FINAL TEXT */}
      <section className="scene">
        <div className="content">
          <p className="line l1">The diagnosis changed.</p>
          <p className="line l2">The evidence shifted.</p>
          <p className="line l3">The story remained.</p>
          <h2 className="line l4">HISTORY ACCEPTED THE REVISION</h2>
        </div>
      </section>

      {/* FINAL MENU */}
      {showMenu && (
        <div style={menu}>
          <div style={menuTitle}>WHITEWASHED</div>
          <div style={menuLinks}>
            <Link href="/film">FULL FILM</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/epk">PRESS KIT</Link>
            <Link href="/contact">CONTACT</Link>
          </div>
        </div>
      )}

      {/* STYLES */}
      <style>{`
        .scene {
          height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .content {
          z-index: 2;
        }

        .line {
          opacity: 0;
          transform: translateY(20px);
        }

        .visible .l1 { animation: fadeUp 1s forwards 0.3s; }
        .visible .l2 { animation: fadeUp 1s forwards 1.5s; }
        .visible .l3 { animation: fadeUp 1s forwards 2.7s; }
        .visible .l4 { animation: fadeUp 1s forwards 3.9s; }

        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInMenu {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        a {
          color: #efe7d6;
          text-decoration: none;
        }

        a:hover {
          opacity: 0.6;
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
        background: 'rgba(0,0,0,0.55)'
      } as any} />
      <div className="content">{children}</div>
    </section>
  );
}

/* STYLE OBJECTS */
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
  background: 'transparent',
  color: '#efe7d6',
  padding: '16px 32px',
  letterSpacing: '3px',
  cursor: 'pointer'
} as any;

const menu = {
  position: 'fixed',
  inset: 0,
  background: '#000',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 200,
  animation: 'fadeInMenu 2s ease forwards'
} as any;

const menuTitle = {
  fontSize: '28px',
  letterSpacing: '4px',
  marginBottom: 40
} as any;

const menuLinks = {
  display: 'flex',
  gap: '40px',
  fontSize: '12px',
  letterSpacing: '3px',
  opacity: 0.75
} as any;
