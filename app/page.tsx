'use client';

import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [started, setStarted] = useState(false);
  const [phase, setPhase] = useState<'title' | 'film' | 'end'>('title');
  const [sceneIndex, setSceneIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const scenes = [
    { img: '/eugenics.jpg', lines: ['EUGENICS.'], timings: [4000] },
    {
      img: '/newspaper.jpg',
      lines: ['1905.', 'A murder.', 'The story changed.'],
      timings: [2500, 3000, 4000],
    },
    {
      img: '/bertha.jpg',
      lines: ['Jane Stanford’s personal assistant, Bertha Berner, was there.'],
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
    { img: '/stanford.jpg', lines: ['The institution endured.'], timings: [5000] },
  ];

  useEffect(() => {
    scenes.forEach((s) => {
      const img = new Image();
      img.src = s.img;
    });
  }, []);

  const startExperience = async () => {
    setStarted(true);

    try {
      const audio = audioRef.current;
      if (audio) {
        audio.volume = 0.6;
        await audio.play();
      }
    } catch {}

    const isMobile = window.innerWidth < 768;
    setTimeout(() => setPhase('film'), isMobile ? 2500 : 6000);
  };

  useEffect(() => {
    if (!started || phase !== 'film') return;

    let scene = 0;
    let line = 0;
    let cancelled = false;

    const run = () => {
      if (cancelled) return;

      setSceneIndex(scene);
      setLineIndex(line);

      const duration = scenes[scene].timings[line];

      setTimeout(() => {
        if (cancelled) return;

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

    return () => {
      cancelled = true;
    };
  }, [started, phase]);

  // 🎬 BEST VERSION: cinematic linger + long curved fade
  const triggerEnd = () => {
    setFade(true);

    // show menu immediately
    setPhase('end');

    const audio = audioRef.current;

    const HOLD_TIME = 7000;       // time to explore menu
    const FADE_DURATION = 12000;  // very long fade

    if (audio) {
      setTimeout(() => {
        const startVolume = audio.volume;
        const startTime = performance.now();

        const fade = (time: number) => {
          const elapsed = time - startTime;
          const progress = Math.min(elapsed / FADE_DURATION, 1);

          // 🎧 curved fade (feels natural, not linear)
          const eased = Math.pow(1 - progress, 2);

          audio.volume = startVolume * eased;

          if (progress < 1) {
            requestAnimationFrame(fade);
          } else {
            audio.volume = 0;
            audio.pause();
          }
        };

        requestAnimationFrame(fade);
      }, HOLD_TIME);
    }
  };

  return (
    <main style={{ background: '#000', color: '#efe7d6' }}>
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
              <h1 style={titleText}>
                WHITE
                <br />
                WASHED
              </h1>
            </div>
          )}

          {phase === 'film' && (
            <>
              {scenes.map((scene, i) => (
                <div
                  key={i}
                  style={{
                    ...bg(scene.img),
                    opacity: i === sceneIndex ? 1 : 0,
                    transition: 'opacity 2.5s ease-in-out',
                  }}
                />
              ))}

              <div style={center}>
                {scenes[sceneIndex].lines.map((line, i) => (
                  <p
                    key={i}
                    style={{
                      ...text,
                      opacity: i <= lineIndex ? 1 : 0,
                      transition: 'opacity 1.5s ease',
                    }}
                  >
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
              pointerEvents: 'none',
            }}
          />

          {phase === 'end' && (
            <div style={menu}>
              <a href="/" style={menuItem}>HOME</a>
              <a href="/film" style={menuItem}>FILM</a>
              <a href="/about" style={menuItem}>ABOUT</a>
              <a href="/contact" style={menuItem}>CONTACT</a>
              <a href="/whitewashed-epk.pdf" style={menuItem}>EPK</a>
            </div>
          )}
        </>
      )}
    </main>
  );
}

/* STYLES */

const cover = {
  position: 'fixed' as const,
  inset: 0,
  background: '#000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const button = {
  border: '1px solid #efe7d6',
  padding: '16px 32px',
  background: 'transparent',
  color: '#efe7d6',
  fontSize: '16px',
  letterSpacing: '2px',
  cursor: 'pointer',
};

const titleScreen = {
  position: 'fixed' as const,
  inset: 0,
  background: '#000',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  paddingTop: '20vh',
};

const titleText = {
  fontSize: 'clamp(36px, 10vw, 100px)',
  letterSpacing: 'clamp(4px, 2vw, 10px)',
  textAlign: 'center' as const,
  lineHeight: '1.1',
};

const bg = (img: string) => ({
  position: 'fixed' as const,
  inset: 0,
  backgroundImage: `url(${img})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center top',
  filter: 'grayscale(100%) brightness(0.4)',
});

const center = {
  position: 'fixed' as const,
  inset: 0,
  display: 'flex',
  flexDirection: 'column' as const,
  alignItems: 'center',
  justifyContent: 'flex-end',
  paddingBottom: '20vh',
};

const text = {
  fontSize: 'clamp(16px, 4.5vw, 26px)',
  margin: '8px 0',
  padding: '0 20px',
  textAlign: 'center' as const,
  maxWidth: '90vw',
};

const fadeOverlay = {
  position: 'fixed' as const,
  inset: 0,
  background: '#000',
  transition: 'opacity 2.5s ease',
};

const menu = {
  position: 'fixed' as const,
  inset: 0,
  display: 'flex',
  flexDirection: 'column' as const,
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',
};

const menuItem = {
  color: '#ffe600',
  fontSize: '22px',
  textDecoration: 'none',
};
