'use client';

import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [started, setStarted] = useState(false);

  const startExperience = async () => {
    setStarted(true);

    try {
      await audioRef.current?.play();
    } catch {}
  };

  // smooth auto scroll
  useEffect(() => {
    if (!started) return;

    let scrollY = 0;
    const speed = 0.35;

    const scroll = () => {
      scrollY += speed;
      window.scrollTo(0, scrollY);
      requestAnimationFrame(scroll);
    };

    scroll();
  }, [started]);

  return (
    <main style={{ backgroundColor: '#000', color: '#efe7d6' }}>

      {/* 🎵 MUSIC */}
      <audio ref={audioRef} src="/ambient.mp3" loop />

      {/* 🎬 START SCREEN */}
      {!started && (
        <div style={cover}>
          <button onClick={startExperience} style={button}>
            BEGIN EXPERIENCE
          </button>
        </div>
      )}

      {/* 🎞 FILM */}
      {started && (
        <>
          <Scene title="WHITEWASHED" />

          <Scene
            img="/eugenics.jpg"
            text="A belief system disguised as science."
          />

          <Scene
            img="/newspaper.jpg"
            text="The story changed."
          />

          <Scene
            img="/bertha.jpg"
            text="Bertha Berner knew the truth."
          />

          <Scene
            img="/jordan.jpg"
            sub="DAVID STARR JORDAN"
            text="Scientist. Administrator. Ideologue."
          />

          <Scene
            img="/stanford.jpg"
            text="The institution moved forward."
          />
        </>
      )}
    </main>
  );
}

/* ---------- SCENE ---------- */

function Scene({ img, text, title, sub }: any) {
  return (
    <section style={scene}>
      {img && <div style={bg(img)} />}
      <div style={overlay} />

      <div style={content}>
        {title && <h1 style={titleStyle}>{title}</h1>}
        {sub && <p style={subStyle}>{sub}</p>}
        {text && <p style={textStyle}>{text}</p>}
      </div>
    </section>
  );
}

/* ---------- STYLES ---------- */

const cover = {
  position: 'fixed',
  inset: 0,
  backgroundColor: '#000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999 // covers menu until start
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

const titleStyle = {
  fontSize: '64px',
  letterSpacing: '6px'
} as any;

const subStyle = {
  marginTop: '10px',
  fontSize: '14px',
  opacity: 0.7
} as any;

const textStyle = {
  marginTop: '20px',
  fontSize: '18px'
} as any;
