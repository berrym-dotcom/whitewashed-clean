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

  // 🎬 CONTROLLED AUTO-SCROLL (stops on interaction → menu works)
  useEffect(() => {
    if (!started) return;

    let scrollY = window.scrollY;
    let running = true;

    const speed = 0.45;

    const scroll = () => {
      if (!running) return;
      scrollY += speed;
      window.scrollTo(0, scrollY);
      requestAnimationFrame(scroll);
    };

    scroll();

    const stop = () => (running = false);

    window.addEventListener('wheel', stop);
    window.addEventListener('touchstart', stop);
    window.addEventListener('mousedown', stop);

    return () => {
      running = false;
      window.removeEventListener('wheel', stop);
      window.removeEventListener('touchstart', stop);
      window.removeEventListener('mousedown', stop);
    };
  }, [started]);

  return (
    <main style={main}>
      <audio ref={audioRef} src="/ambient.mp3" loop />

      {/* START SCREEN */}
      {!started && (
        <div style={cover}>
          <button onClick={startExperience} style={button}>
            BEGIN EXPERIENCE
          </button>
        </div>
      )}

      {/* FILM */}
      <div style={{ opacity: started ? 1 : 0, transition: 'opacity 1.5s' }}>

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
  const [step, setStep] = useState(0);

  useEffect(() => {
    setStep(0);

    const timings = [400, 900, 1400, 1900];

    const timers = timings.map((t, i) =>
      setTimeout(() => setStep(i + 1), t)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section style={scene}>
      {img && <div style={bg(img)} />}
      <div style={overlay} />

      <div style={content}>
        {title && (
          <Reveal show={step >= 1}>
            <h1 style={titleStyle}>{title}</h1>
          </Reveal>
        )}

        {text && (
          <Reveal show={step >= 1}>
            <p style={textStyle}>{text}</p>
          </Reveal>
        )}

        {children &&
          Array.isArray(children) &&
          children.map((child, i) => (
            <Reveal key={i} show={step >= i + 1}>
              {child}
            </Reveal>
          ))}

        {!Array.isArray(children) && children}
      </div>
    </section>
  );
}

/* ---------- REVEAL ---------- */

function Reveal({ show, children }: any) {
  return (
    <div
      style={{
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0px)' : 'translateY(20px)',
        transition: 'all 0.8s ease',
      }}
    >
      {children}
    </div>
  );
}

/* ---------- STYLES ---------- */

const main = {
  backgroundColor: '#000',
  color: '#efe7d6',
};

const cover = {
  position: 'fixed',
  inset: 0,
  backgroundColor: '#000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999,
};

const button = {
  border: '1px solid #efe7d6',
  padding: '16px 32px',
  letterSpacing: '3px',
  background: 'transparent',
  color: '#efe7d6',
  cursor: 'pointer',
};

const scene = {
  height: '110vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  position: 'relative',
};

const bg = (img: string) => ({
  position: 'absolute',
  inset: 0,
  backgroundImage: `url(${img})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  filter: 'grayscale(100%) brightness(0.5)',
});

const overlay = {
  position: 'absolute',
  inset: 0,
  background: 'rgba(0,0,0,0.65)',
};

const content = {
  position: 'relative',
  zIndex: 2,
  maxWidth: 700,
};

const titleStyle = {
  fontSize: '80px',
  letterSpacing: '8px',
};

const textStyle = {
  fontSize: '22px',
  letterSpacing: '2px',
};

const line = {
  margin: '10px 0',
  fontSize: '18px',
  letterSpacing: '2px',
};
