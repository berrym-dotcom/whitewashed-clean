'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);

  // ✅ STARTED STATE PERSISTS
  const [started, setStarted] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // LOAD STATE FROM SESSION
  useEffect(() => {
    const hasStarted = sessionStorage.getItem('started');
    if (hasStarted === 'true') {
      setStarted(true);
    }
  }, []);

  // SAVE STATE
  const startExperience = async () => {
    sessionStorage.setItem('started', 'true');
    setStarted(true);
    try {
      await audioRef.current?.play();
    } catch {}
  };

  // AUTO SCROLL
  useEffect(() => {
    if (!started) return;

    let scrollY = 0;
    const speed = 0.8;

    const scroll = () => {
      scrollY += speed;
      window.scrollTo(0, scrollY);
      requestAnimationFrame(scroll);
    };

    scroll();
  }, [started]);

  // TEXT REVEAL
  useEffect(() => {
    const scenes = document.querySelectorAll('.scene');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.6 });

    scenes.forEach(scene => observer.observe(scene));
    return () => observer.disconnect();
  }, []);

  // SHOW MENU
  useEffect(() => {
    if (!started) return;

    const checkScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        setShowMenu(true);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [started]);

  return (
    <main style={{ background: '#000', color: '#efe7d6', fontFamily: 'Georgia, serif' }}>

      <audio ref={audioRef} src="/ambient.mp3" loop />

      {/* START SCREEN */}
      {!started && (
        <div style={startScreen}>
          <button onClick={startExperience} style={button}>
            BEGIN EXPERIENCE
          </button>
        </div>
      )}

      {/* SCENES */}
      <Scene img="/jordan.jpg">
        <p className="line l1">DAVID STARR JORDAN</p>
        <p className="line l2">President of Stanford University.</p>
        <p className="line l3">A leading voice in eugenics.</p>
      </Scene>

      {/* FINAL MENU */}
      {showMenu && (
        <div style={menu}>
          <div style={menuTitle}>WHITEWASHED</div>

          <div style={menuLinks}>
            <Link href="/">HOME</Link>
            <Link href="/film">FULL FILM</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/epk">PRESS KIT</Link>
            <Link href="/contact">CONTACT</Link>
          </div>
        </div>
      )}

      <style>{`
        .scene { height: 100vh; display:flex; align-items:center; justify-content:center; }
        .line { opacity:0; }
        .visible .l1 { animation: fadeUp 1s forwards; }

        @keyframes fadeUp {
          to { opacity:1; }
        }
      `}</style>

    </main>
  );
}

/* COMPONENT */
function Scene({ img, children }: any) {
  return (
    <section className="scene">
      <div style={{
        position:'absolute',
        inset:0,
        backgroundImage:`url(${img})`,
        backgroundSize:'cover',
        filter:'grayscale(100%) brightness(0.5)'
      }} />
      {children}
    </section>
  );
}

/* STYLES */
const startScreen = { position:'fixed', inset:0, background:'#000', display:'flex', alignItems:'center', justifyContent:'center' } as any;
const button = { padding:'20px', color:'#fff' } as any;
const menu = { position:'fixed', inset:0, background:'#000', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' } as any;
const menuTitle = { marginBottom:40 } as any;
const menuLinks = { display:'flex', gap:'30px' } as any;
