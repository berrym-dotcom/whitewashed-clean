'use client';

import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [started, setStarted] = useState(false);
  const [sceneIndex, setSceneIndex] = useState(0);

  const scenes = [
    {
      img: '/eugenics.jpg',
      lines: ['WHITEWASHED', 'EUGENICS.'],
    },
    {
      img: '/newspaper.jpg',
      lines: ['1905.', 'A murder.', 'The story changed.'],
    },
    {
      img: '/bertha.jpg',
      lines: [
        'Jane Stanford’s personal assistant, Bertha Berner, was there.',
      ],
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
    {
      img: '/stanford.jpg',
      lines: ['The institution endured.'],
    },
  ];

  const startExperience = async () => {
    setStarted(true);
    try {
      await audioRef.current?.play();
    } catch {}
  };

  // 🎬 SLOW DRIFT (subtle movement)
  useEffect(() => {
    if (!started) return;

    let running = true;
    let y = window.scrollY;

    const drift = () => {
      if (!running) return;
      y += 0.15;
      window.scrollTo(0, y);
      requestAnimationFrame(drift);
    };

    drift();

    return () => {
      running = false;
    };
  }, [started]);

  // 🎬 EDITORIAL TIMING (scene progression)
  useEffect(() => {
    if (!started) return;

    const timings = [3000, 3500, 4000, 4500];

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
  }, [started]);

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

          {/* TEXT */}
          <div style={center}>
            <SceneText data={scenes[sceneIndex]} />
          </div>
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

    const timings = [500, 1400, 2400, 3600];

    const timers = timings.map((t, i) =>
      setTimeout(() => setStep(i + 1), t)
    );

    return () => timers.forEach(clearTimeout);
  }, [data]);

  return data.lines.map((line, i) => (
    <div
      key={i}
      style={{
        opacity: step >= i + 1 ? 1 : 0,
        transform: step >= i + 1 ? 'translateY(0)' : 'translateY(40px)',
        transition: 'all 1.2s ease',
        margin: '10px 0',
      }}
    >
      <p style={text}>{line}</p>
    </div>
  ));
}

/* ---------- STYLES ---------- */

const main: CSSProperties = {
  background: '#000',
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

const center: CSSProperties = {
  position: 'fixed',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
};

const text: CSSProperties = {
  fontSize: '24px',
  letterSpacing: '2px',
};
