'use client';

import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [started, setStarted] = useState(false);
  const [phase, setPhase] = useState<'title' | 'film'>('title');
  const [sceneIndex, setSceneIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);

  const scenes = [
    {
      img: '/eugenics.jpg',
      lines: ['EUGENICS.'],
      timings: [4000],
    },
    {
      img: '/newspaper.jpg',
      lines: ['1905.', 'A murder.', 'The story changed.'],
      timings: [2500, 3000, 4000],
    },
    {
      img: '/bertha.jpg',
      lines: [
        'Jane Stanford’s personal assistant, Bertha Berner, was there.',
      ],
      timings: [5500],
    },
    {
      img: '/jordan.jpg',
      lines: [
        'DAVID STARR JORDAN.',
        'President of Stanford University.',
        'Scientist. Ideologue.',
        'The truth was concealed.',
      ],
      timings: [3000, 3000, 4000, 5000],
    },
    {
      img: '/stanford.jpg',
      lines: ['The institution endured.'],
      timings: [5000],
    },
  ];

  const startExperience = async () => {
    setStarted(true);
    try {
      await audioRef.current?.play();
    } catch {}

    // Title duration
    setTimeout(() => {
      setPhase('film');
    }, 6000);
  };

  // 🎬 LINE + SCENE TIMING (editorial control)
  useEffect(() => {
    if (!started || phase !== 'film') return;

    let scene = 0;
    let line = 0;

    const run = () => {
      setSceneIndex(scene);
      setLineIndex(line);

      const duration = scenes[scene].timings[line];

      setTimeout(() => {
        if (line < scenes[scene].lines.length - 1) {
          line++;
        } else {
          if (scene < scenes.length - 1) {
            scene++;
            line = 0;
          }
        }
        run();
      }, duration);
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
          {/* 🎬 TITLE */}
          {phase === 'title' && (
            <div style={titleScreen}>
              <h1 style={titleText}>WHITEWASHED</h1>
            </div>
          )}

          {/* 🎬 FILM */}
          {phase === 'film' && (
            <>
              <div style={bg(scenes[sceneIndex].img)} />

              <div style={center}>
                {scenes[sceneIndex].lines
                  .slice(0, lineIndex + 1)
                  .map((line, i) => (
                    <p key={i} style={text}>
                      {line}
                    </p>
                  ))}
              </div>
            </>
          )}
        </>
      )}
    </main>
  );
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

const titleScreen: CSSProperties = {
  position: 'fixed',
  inset: 0,
  background: '#000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const titleText: CSSProperties = {
  fontSize: '110px',
  letterSpacing: '14px',
  fontWeight: 300,
};

const bg = (img: string): CSSProperties => ({
  position: 'fixed',
  inset: 0,
  backgroundImage: `url(${img})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  filter: 'grayscale(100%) brightness(0.4)',
});

const center: CSSProperties = {
  position: 'fixed',
  inset: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
};

const text: CSSProperties = {
  fontSize: '26px',
  letterSpacing: '2px',
  margin: '8px 0',
};
