'use client';

import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [started, setStarted] = useState(false);
  const [phase, setPhase] = useState<'title' | 'film' | 'end'>('title');
  const [sceneIndex, setSceneIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [fade, setFade] = useState(false);

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

    setTimeout(() => setPhase('film'), 6000);
  };

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
          } else {
            triggerEnd();
            return;
          }
        }
        run();
      }, duration);
    };

    run();
  }, [started, phase]);

  const triggerEnd = () => {
    setFade(true);

    const audio = audioRef.current;

    if (audio) {
      let volume = audio.volume;

      const fade = setInterval(() => {
        if (volume > 0.01) {
          volume -= 0.01;
          audio.volume = volume;
        } else {
          audio.volume = 0;
          audio.pause();
          clearInterval(fade);
        }
      }, 120);
    }

    setTimeout(() => {
      setPhase('end');
    }, 4500);
  };

  return (
    <main style={main}>
      <audio ref={audioRef} src="/ambient.mp3" />

      {!started && (
        <div style={cover}>
          <button onClick={startExperience} style={button}>
            BEGIN EXPERIENCE
          </button>
        </div>
      )}

      {started && (
        <>
          {phase === 'title' && (
            <div style={titleScreen}>
              <h1 style={titleText}>WHITEWASHED</h1>
            </div>
          )}

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

          <div
            style={{
              ...fadeOverlay,
              opacity: fade ? 1 : 0,
            }}
          />

          {phase === 'end' && (
            <div style={menu}>
              <a href="/film" style={menuItem}>FILM</a>
              <a href="/about" style={menuItem}>ABOUT</a>
              <a href="/contact" style={menuItem}>CONTACT</a>
              <a href="/whitewashed-epk.pdf" target="_blank" style={menuItem}>
                EPK
              </a>
            </div>
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
};

const text: CSSProperties = {
  fontSize: '26px',
  margin: '8px 0',
};

const fadeOverlay: CSSProperties = {
  position: 'fixed',
  inset: 0,
  background: '#000',
  transition: 'opacity 2.5s ease',
  pointerEvents: 'none',
};

const menu: CSSProperties = {
  position: 'fixed',
  inset: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',
};

const menuItem: CSSProperties = {
  color: '#ffe600',
  fontSize: '22px',
  letterSpacing: '3px',
  textDecoration: 'none',
};
