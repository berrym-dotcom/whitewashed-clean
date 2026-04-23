"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.classList.add("intro-finished");
    }, 12000); // match your scroll duration

    return () => clearTimeout(timer);
  }, []);

  const skipIntro = () => {
    document.body.classList.add("intro-finished");
  };

  return (
    <main className="bg-black text-white">

      {/* INTRO SCROLL */}
      <div
        className="fixed inset-0 z-10 pointer-events-none"
      >
        <div className="absolute bottom-[-100%] w-full text-center text-2xl animate-scroll">
          <p>Stanford University was built on a dream.</p>
          <p>But behind the dream… something darker.</p>
          <p className="mt-10 text-4xl">WHITEWASHED</p>
        </div>
      </div>

      {/* MENU */}
      <nav className="fixed top-5 right-8 z-[9999] flex gap-6 opacity-60 transition-opacity duration-500">
        <a href="#film">Film</a>
        <a href="#about">About</a>
        <a href="#epk">EPK</a>
        <button onClick={skipIntro}>Skip</button>
      </nav>

      {/* CONTENT */}
      <div className="relative z-20">

        <section id="film" className="min-h-screen p-24">
          <h1 className="text-4xl mb-4">WHITEWASHED</h1>
          <p>Trailer coming soon.</p>
        </section>

        <section id="about" className="min-h-screen p-24">
          <h1 className="text-4xl mb-4">About</h1>
          <p>
            WHITEWASHED explores power, eugenics, and institutional silence 
            at Stanford University.
          </p>
        </section>

        <section id="epk" className="min-h-screen p-24">
          <h1 className="text-4xl mb-4">EPK</h1>
          <p>Press kit, stills, credits.</p>
        </section>

      </div>

      {/* INLINE STYLES (so you don’t need to touch anything else) */}
      <style jsx global>{`
        body {
          margin: 0;
          background: black;
          color: white;
        }

        @keyframes scrollUp {
          from {
            bottom: -100%;
          }
          to {
            bottom: 100%;
          }
        }

        .animate-scroll {
          animation: scrollUp 12s linear forwards;
        }

        body.intro-finished nav {
          opacity: 1 !important;
        }
      `}</style>

    </main>
  );
}
