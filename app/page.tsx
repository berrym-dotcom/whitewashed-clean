'use client';

import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);

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
  };

  // 🎬 SLOWER DRIFT SCROLL (background movement)
  useEffect(() => {
    if (!started) return;

    let running = true;
    let scrollY = window.scrollY;

    const speed = 0.25; // 🔥 slower, more cinematic

    const scroll = () => {
      if (!running) return;
      scrollY += speed;
      window.scrollTo(0, scrollY);
      requestAnimationFrame(scroll);
    };

    setTimeout(scroll, 600);

    const stop = () => (running = false);

    window.addEventListener('wheel', stop);
    window.addEventListener('mousedown', stop);
    window.addEventListener('touchstart', stop);

    return () => {
      running = false;
      window.removeEventListener('wheel', stop);
      window.removeEventListener('mousedown', stop);
      window.removeEventListener('touchstart', stop);
    };
  }, [started]);

  // 🎬 SCENE CHANGE BASED ON SCROLL POSITION (KEY FIX)
  useEffect(() => {
    if (!started) return;

    const handleScroll = () => {
      const y = window.scrollY;
      const sceneHeight = window.innerHeight;

      const newIndex = Math.min(
        Math.floor(y / (sceneHeight * 0.9)),
        scenes.length - 1
      );

      setIndex(newIndex);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
          {/* BACKGROUND LAYER */}
          {scenes.map((scene, i) => (
            <div
              key={i}
              style={{
                ...bg(scene.img),
                opacity: i === index ? 1 : 0,
                transition: 'opacity 1.8s ease', // 🔥 slower crossfade
              }}
            />
          ))}

          {/* TEXT */}
          <div style={textLayer}>
            <SceneContent data={scenes[index]} />
          </div>
        </>
      )}
    </main>
  );
}

/* ---------- TEXT ---------- */

function SceneContent({ data }: any) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    setStep(0);

    const timings = [300, 900, 1500, 2100]; // 🔥 slower reveals

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
        transform: show ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 1s ease',
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
  zIndex: 9999,
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
  filter: 'grayscale(100%) brightness(0.5)',
});

const textLayer: CSSProperties = {
  position: 'fixed',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
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
