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

  return (
    <main style={main}>

      {/* 🎵 AUDIO */}
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
      <div style={{ ...film, opacity: started ? 1 : 0 }}>

        <Scene title="WHITEWASHED" />

        <Scene img="/eugenics.jpg" text="EUGENICS." />

        <Scene text="1905." />

        <Scene text="A murder." />

        <Scene img="/newspaper.jpg" text="The story changed." />

        <Scene
          img="/bertha.jpg"
          text="Jane Stanford’s personal assistant, Bertha Berner, was there."
        />

        <Scene img="/jordan.jpg">
          <p style={line}>DAVID STARR JORDAN.</p>
          <p style={line}>President of Stanford University.</p>
          <p style={line}>Scientist. Ideologue.</p>
          <p style={{ ...line, opacity: 0.6 }}>
            The truth was concealed.
          </p>
        </Scene>

        <Scene img="/stanford.jpg" text="The institution endured." />

      </div>
    </main>
  );
}

/* ---------- SCENE ---------- */

function Scene({ img, text, title, children }: any) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <section style={scene}>
      {img && <div style={bg(img)} />}
      <div style={overlay} />

      <div style={{
        ...content,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0px)' : 'translateY(20px)',
        transition: 'all 1.2s ease'
      }}>
        {title && <h1 style={titleStyle}>{title}</h1>}
        {text && <p style={textStyle}>{text}</p>}
        {children}
      </div>
    </section>
  );
}

/* ---------- STYLES ---------- */

const main = {
  backgroundColor: '#000',
  color: '#efe7d6',
};

const film = {
  scrollSnapType: 'y mandatory',
};

const cover = {
  position: 'fixed',
  inset: 0,
  backgroundColor: '#000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999,
} as any;

const button = {
  border: '1px solid #efe7d6',
  padding: '16px 32px',
  letterSpacing: '3px',
  background: 'transparent',
  color: '#efe7d6',
  cursor: 'pointer',
} as any;

const scene = {
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  position: 'relative',
  scrollSnapAlign: 'start',
} as any;

const bg = (img: string) => ({
  position: 'absolute',
  inset: 0,
  backgroundImage: `url(${img})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  filter: 'grayscale(100%) brightness(0.5)',
} as any);

const overlay = {
  position: 'absolute',
  inset: 0,
  background: 'rgba(0,0,0,0.65)',
} as any;

const content = {
  position: 'relative',
  zIndex: 2,
  maxWidth: 700,
} as any;

const titleStyle = {
  fontSize: '80px',
  letterSpacing: '8px',
} as any;

const textStyle = {
  fontSize: '22px',
  letterSpacing: '2px',
} as any;

const line = {
  margin: '10px 0',
  fontSize: '18px',
  letterSpacing: '2px',
} as any;
