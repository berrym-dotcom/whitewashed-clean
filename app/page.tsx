export default function Home() {
  return (
    <main style={{
      fontFamily: 'Georgia, serif',
      background: '#000',
      color: '#efe7d6',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>

      {/* NAV */}
      <nav style={{
        position: 'fixed',
        top: 20,
        right: 40,
        zIndex: 10,
        fontSize: '12px',
        letterSpacing: '2px'
      }}>
        <a href="/" style={{ marginRight: 20 }}>HOME</a>
        <a href="/about" style={{ marginRight: 20 }}>ABOUT</a>
        <a href="/film" style={{ marginRight: 20 }}>FILM</a>
        <a href="/epk" style={{ marginRight: 20 }}>EPK</a>
        <a href="/contact">CONTACT</a>
      </nav>

      {/* ================= SCENE 1 — IDEOLOGY ================= */}
      <section style={{ height: '100vh', position: 'relative' }}>

        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/eugenics.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(2px) brightness(0.35)',
          transform: 'scale(1.05)'
        }} />

        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.65)'
        }} />

        <div style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          textAlign: 'center',
          padding: '40px'
        }}>

          <h1 style={{
            fontSize: '72px',
            letterSpacing: '6px',
            marginBottom: '30px'
          }}>
            WHITEWASHED
          </h1>

          <p style={{ opacity: 0.8 }}>She said she was poisoned.</p>
          <p style={{ opacity: 0.6 }}>They said she was mistaken.</p>
          <p style={{ opacity: 0.4, marginBottom: 30 }}>The record was changed.</p>

          <button style={{
            border: '1px solid #efe7d6',
            background: 'transparent',
            color: '#efe7d6',
            padding: '12px 28px',
            letterSpacing: '2px',
            cursor: 'pointer'
          }}>
            WATCH FILM
          </button>
        </div>
      </section>

      {/* ================= SCENE 2 — EVIDENCE ================= */}
      <section style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>

        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/Call_Mrs-Stanford-is-Dead.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%) brightness(0.4)'
        }} />

        <div style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '700px'
        }}>
          <h2 style={{
            fontSize: '28px',
            letterSpacing: '2px',
            marginBottom: '20px'
          }}>
            1905
          </h2>

          <p style={{ opacity: 0.85 }}>The first report confirmed poisoning.</p>
          <p style={{ opacity: 0.65 }}>The second erased it.</p>
          <p style={{ opacity: 0.45 }}>What happened in between is the story.</p>
        </div>
      </section>

      {/* ================= SCENE 3 — INSTITUTION ================= */}
      <section style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>

        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/stanford.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%) brightness(0.3)'
        }} />

        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.6)'
        }} />

        <div style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '700px'
        }}>
          <p style={{ opacity: 0.6, marginBottom: 20 }}>
            At the center of the institution:
          </p>

          <h2 style={{
            fontSize: '32px',
            letterSpacing: '3px',
            marginBottom: '20px'
          }}>
            DAVID STARR JORDAN
          </h2>

          <p style={{ opacity: 0.7 }}>
            President of Stanford University.
          </p>
        </div>
      </section>

      {/* ================= FINAL ================= */}
      <section style={{
        padding: '120px 20px',
        textAlign: 'center'
      }}>
        <p style={{ marginBottom: '20px' }}>The diagnosis changed.</p>
        <p style={{ marginBottom: '20px' }}>The evidence shifted.</p>
        <p style={{ marginBottom: '40px' }}>The story remained.</p>

        <p style={{
          fontSize: '24px',
          letterSpacing: '2px',
          opacity: 0.8
        }}>
          HISTORY ACCEPTED THE REVISION
        </p>
      </section>

    </main>
  );
}
