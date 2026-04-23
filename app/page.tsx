'use client';

import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [started, setStarted] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const startExperience = async () => {
    setStarted(true);

    // 🔥 tell layout to show menu
    window.dispatchEvent(new Event('experience-started'));

    // delay scroll
    setTimeout(() => {
      setScrolling(true);
    }, 1200);

    try {
      await audioRef.current?.play();
    } catch {}
  };

  useEffect(() => {
    if (!scrolling) return;

    let scrollY = 0;
    const speed = 0.4;

    const scroll = () => {
      scrollY += speed;
      window.scrollTo(0, scrollY);
      requestAnimationFrame(scroll);
    };

    scroll();
  }, [scrolling]);

  // 🔴 HARD STOP — NOTHING RENDERS BEFORE START
  if (!started) {
    return (
      <main style={startScreen}>
        <button onClick={startExperience} style={button}>
          BEGIN EXPERIENCE
        </button>
      </main>
    );
  }

  return (
    <main style={{ backgroundColor: '#000', color: '#efe7d6' }}>

      <audio ref={audioRef} src="/ambient.mp3" loop />

      <section style={scene}>
        <div style={bg('/jordan.jpg')} />
        <div style={overlay} />

        <div style={content}>
          <p style={line}>DAVID STARR JORDAN</p>
          <p style={line}>President of Stanford University</p>

          <p style={lineStrong}>
            Scientist. Administrator. Ideologue.
          </p>

          <p style={lineDim}>
            And a man who shaped the official record
          </p>
        </div>
      </section>

    </main>
  );
}

/* ---------- STYLES ---------- */

const startScreen = {
  position: 'fixed',
  inset: 0,
  backgroundColor: '#000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
} as any;

const button = {
  border: '1px solid #efe7d6',
  padding: '16px 32px',
  letterSpacing: '3px',
  background: 'transparent',
  color: '#efe7d6',
  cursor: 'pointer'
} as any;

const scene = {
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  position: 'relative'
} as any;

const bg = (img: string) => ({
  position: 'absolute',
  inset: 0,
  backgroundImage: `url(${img})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  filter: 'grayscale(100%) brightness(0.55)'
} as any);

const overlay = {
  position: 'absolute',
  inset: 0,
  background: 'rgba(0,0,0,0.6)'
} as any;

const content = {
  position: 'relative',
  zIndex: 2,
  maxWidth: 700
} as any;

const line = {
  margin: '10px 0',
  fontSize: '16px'
} as any;

const lineStrong = {
  margin: '16px 0',
  fontSize: '18px',
  letterSpacing: '2px'
} as any;

const lineDim = {
  marginTop: '20px',
  opacity: 0.6
} as any;
