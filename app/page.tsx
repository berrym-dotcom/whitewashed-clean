'use client';

import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [started, setStarted] = useState(false);

  // SIMPLE AUTO SCROLL
  useEffect(() => {
    if (!started) return;

    let scrollY = 0;
    let speed = 0.8;

    const scroll = () => {
      scrollY += speed;
      window.scrollTo(0, scrollY);
      requestAnimationFrame(scroll);
    };

    scroll();
  }, [started]);

  const startExperience = () => {
    setStarted(true);
    audioRef.current?.play();
  };

  return (
    <main style={{ fontFamily: 'Georgia, serif', background: '#000', color: '#efe7d6' }}>

      {/* AUDIO */}
      <audio ref={audioRef} src="/ambient.mp3" loop />

      {/* START SCREEN */}
      {!started && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: '#000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100
        }}>
          <button
            onClick={startExperience}
            style={{
              border: '1px solid #efe7d6',
              background: 'transparent',
              color: '#efe7d6',
              padding: '16px 32px',
              letterSpacing: '3px',
              cursor: 'pointer'
            }}
          >
            BEGIN EXPERIENCE
          </button>
        </div>
      )}

      {/* SCENE 1 */}
      <section style={scene}>
        <Background img="/eugenics.jpg" />
        <Content>
          <h1 style={title}>WHITEWASHED</h1>
          <p>She said she was poisoned.</p>
          <p style={dim}>They said she was mistaken.</p>
          <p style={fade}>The record was changed.</p>
        </Content>
      </section>

      {/* SCENE 2 */}
      <section style={scene}>
        <Background img="/newspaper.jpg" />
        <Content>
          <h2>1905</h2>
          <p>The first report confirmed poisoning.</p>
          <p style={dim}>The second erased it.</p>
          <p style={fade}>What happened in between is the story.</p>
        </Content>
      </section>

      {/* SCENE 3 */}
      <section style={scene}>
        <Background img="/bertha.jpg" />
        <Content>
          <p style={dim}>She was there.</p>
          <h2>BERTHA BERNER</h2>
          <p>Secretary. Witness. Keeper of the story.</p>
        </Content>
      </section>

      {/* SCENE 4 */}
      <section style={scene}>
        <Background img="/jordan.jpg" dark />
        <Content>
          <p style={dim}>At the center of the institution:</p>
          <h2>DAVID STARR JORDAN</h2>
          <p>President of Stanford University.</p>
        </Content>
      </section>

      {/* SCENE 5 */}
      <section style={scene}>
        <Background img="/stanford.jpg" />
        <Content>
          <p>
            The institution endured.<br />
            The narrative stabilized.<br />
            The record remained.
          </p>
        </Content>
      </section>

      {/* FINAL */}
      <section style={{ padding: '120px 20px', textAlign: 'center' }}>
        <p>The diagnosis changed.</p>
        <p>The evidence shifted.</p>
        <p>The story remained.</p>

        <h2 style={{ marginTop: 40, letterSpacing: 2 }}>
          HISTORY ACCEPTED THE REVISION
        </h2>
      </section>

    </main>
  );
}

/* ---------- COMPONENTS ---------- */

function Background({ img, dark }: any) {
  return (
    <>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'grayscale(100%) brightness(0.5)'
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: dark ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0.55)'
      }} />
    </>
  );
}

function Content({ children }: any) {
  return (
    <div style={{
      position: 'relative',
      zIndex: 2,
      maxWidth: 700,
      textAlign: 'center',
      padding: 20
    }}>
      {children}
    </div>
  );
}

/* ---------- STYLES ---------- */

const scene = {
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative'
};

const title = {
  fontSize: '72px',
  letterSpacing: '3px',
  transform: 'scaleX(0.96)'
};

const dim = { opacity: 0.6 };
const fade = { opacity: 0.4 };
