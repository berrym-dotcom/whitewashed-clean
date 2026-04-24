'use client';

import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [started, setStarted] = useState(false);
  const [phase, setPhase] = useState<'title' | 'film'>('title');
  const [sceneIndex, setSceneIndex] = useState(0);

  const scenes = [
    { img: '/eugenics.jpg', text: 'EUGENICS.' },
    { img: '/eugenics.jpg', text: '1905.' },
    { img: '/eugenics.jpg', text: 'A murder.' },
    { img: '/newspaper.jpg', text: 'The story changed.' },
    {
      img: '/bertha.jpg',
      text: 'Jane Stanford’s personal assistant, Bertha Berner, was there.',
    },
    {
      img: '/jordan.jpg',
      lines: [
        'DAVID STARR JORDAN.',
        'President of Stanford University.',
        'Scientist. Ideologue.',
        'The truth was concealed.',
      ],
    },
    { img: '/stanford.jpg', text: 'The institution endured.' },
  ];

  const startExperience = async () => {
    setStarted(true);
    try {
      await audioRef.current?.play();
    } catch {}

    // 🎬 HOLD TITLE (editorial decision)
    setTimeout(() => setPhase('film'), 2800);
  };

  // 🎬 SLOW DRIFT (NOT DOMINANT)
  useEffect(() => {
    if (!started || phase !== 'film') return;

    let running = true;
    let y = window.scrollY;

    const speed = 0.18; // very slow, almost imperceptible

    const drift = () => {
      if (!running) return;
      y += speed;
      window.scrollTo(0, y);
      requestAnimationFrame(drift);
    };

    drift();

    return () => {
      running = false;
    };
  }, [started, phase]);

  // 🎬 EDITORIAL TIMING (SCENE CUTS)
  useEffect(() => {
    if (!started || phase !== 'film') return;

    const timings = [1800, 2000, 2000, 2400, 3000, 3600];

    let i = 0;

    const run = () => {
      if (i >= timings.length) return;

      setTimeout(() => {
        i++;
        setSceneIndex(i);
        run();
      }, timings[i]);
    };

    run();
  }, [started, phase]);

  return (
    <main style={main}>
      <audio ref={audioRef} src="/ambient.mp3" loop />

      {!started && (
        <div style={cover}>
          <button onClick={startExperience} style={button}>
            BEGIN EXPERIENCE
          </button>
        </div>
      )}

      {started && (
        <>
          {/* BACKGROUND CROSSFADE */}
          {scenes.map((scene, i) => (
            <div
              key={i}
              style={{
                ...bg(scene.img),
                opacity: i === sceneIndex ? 1 : 0,
                transition: 'opacity 2.5s ease',
              }}
            />
          ))}

          {/* TITLE */}
          {phase === 'title' && (
            <div style={centerLayer}>
              <h1 style={titleStyle}>WHITEWASHED</h1>
            </div>
          )}

          {/* TEXT */}
          {phase === 'film' && (
            <div style={centerLayer}>
              <SceneText data={scenes[sceneIndex]} />
            </div>
          )}
        </>
      )}
    </main>
  );
}

/* ---------- TEXT ---------- */

function SceneText({ data }: any) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    setStep(0);

    const timings = [400, 1100, 1800, 2600];

    const timers = timings.map((t, i) =>
      setTimeout(() => setStep(i + 1), t)
    );

    return () => timers.forEach(clearTimeout);
  }, [data]);

  if (data.lines) {
    return data.lines.map((line, i) => (
      <Reveal key={i} show={step >= i + 1}>
        <p style={lineStyle}>{line}</p>
      </Reveal>
    ));
  }

  return (
    <Reveal show={true}>
      <p style={textStyle}>{data.text}</p>
    </Reveal>
  );
}

/* ---------- REVEAL ---------- */

function Reveal({ show, children }: any) {
  return (
    <div
      style={{
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(40px)',
        transition: 'all 1.2s ease',
      }}
    >
      {children}
    </div>
  );
}

/* ---------- STYLES ---------- */

const main: CSSProperties = {
  backgroundColor: '#000',
  color: '#efe7d6',
};

const cover: CSSProperties = {
  position: 'fixed',
  inset: 0,
  background: '#000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 10,
};

const button: CSSProperties = {
  border: '1px solid #efe7d6',
  padding: '16px 32px',
  background: 'transparent',
  color: '#efe7d6',
  letterSpacing: '3px',
  cursor: 'pointer',
};

const bg = (img: string): CSSProperties => ({
  position: 'fixed',
  inset: 0,
  backgroundImage: `url(${img})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  filter: 'grayscale(100%) brightness(0.35)',
});

const centerLayer: CSSProperties = {
  position: 'fixed',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
};

const titleStyle: CSSProperties = {
  fontSize: '96px',
  letterSpacing: '12px',
};

const textStyle: CSSProperties = {
  fontSize: '26px',
  letterSpacing: '2px',
};

const lineStyle: CSSProperties = {
  fontSize: '20px',
  margin: '10px 0',
  letterSpacing: '2px',
};
