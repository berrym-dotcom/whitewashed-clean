'use client';

import { useRef, useState } from 'react';
import type { CSSProperties } from 'react';

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
      <audio ref={audioRef} src="/ambient.mp3" loop />

      {!started && (
        <div style={cover}>
          <button onClick={startExperience} style={button}>
            BEGIN EXPERIENCE
          </button>
        </div>
      )}

      {started && (
        <div>
          <Section img="/eugenics.jpg">
            <Title>WHITEWASHED</Title>
          </Section>

          <Section img="/eugenics.jpg">
            <Line>EUGENICS.</Line>
          </Section>

          <Section img="/eugenics.jpg">
            <Line>1905.</Line>
            <Line>A murder.</Line>
          </Section>

          <Section img="/newspaper.jpg">
            <Line>The story changed.</Line>
          </Section>

          <Section img="/bertha.jpg">
            <Line>
              Jane Stanford’s personal assistant, Bertha Berner, was there.
            </Line>
          </Section>

          <Section img="/jordan.jpg">
            <Line>DAVID STARR JORDAN.</Line>
            <Line>President of Stanford University.</Line>
            <Line>Scientist. Ideologue.</Line>
            <Line subtle>The truth was concealed.</Line>
          </Section>

          <Section img="/stanford.jpg">
            <Line>The institution endured.</Line>
          </Section>
        </div>
      )}
    </main>
  );
}

/* ---------- COMPONENTS ---------- */

function Section({
  img,
  children,
}: {
  img: string;
  children: React.ReactNode;
}) {
  return (
    <section style={section}>
      <div style={bg(img)} />
      <div style={overlay} />
      <div style={content}>{children}</div>
    </section>
  );
}

function Title({ children }: any) {
  return <h1 style={title}>{children}</h1>;
}

function Line({ children, subtle }: any) {
  return (
    <p
      style={{
        ...line,
        opacity: subtle ? 0.6 : 1,
      }}
    >
      {children}
    </p>
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
};

const section: CSSProperties = {
  height: '100vh',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
};

const bg = (img: string): CSSProperties => ({
  position: 'absolute',
  inset: 0,
  backgroundImage: `url(${img})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  filter: 'grayscale(100%) brightness(0.4)',
});

const overlay: CSSProperties = {
  position: 'absolute',
  inset: 0,
  background: 'rgba(0,0,0,0.4)',
};

const content: CSSProperties = {
  position: 'relative',
  zIndex: 2,
  maxWidth: 700,
};

const title: CSSProperties = {
  fontSize: '90px',
  letterSpacing: '10px',
};

const line: CSSProperties = {
  fontSize: '22px',
  margin: '10px 0',
  letterSpacing: '2px',
};
