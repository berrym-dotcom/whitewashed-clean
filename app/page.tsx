export default function Home() {
  return (
    <main style={{
      fontFamily: 'Georgia, serif',
      background: '#000',
      color: '#efe7d6',
      minHeight: '100vh'
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

      {/* ================= HERO ================= */}
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
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.65)' }} />

        <div style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}>
          <h1 style={{ fontSize: '72px', letterSpacing: '6px', marginBottom: '30px' }}>
            WHITEWASHED
          </h1>

          <p style={{ opacity: 0.8 }}>She said she was poisoned.</p>
          <p style={{ opacity: 0.6 }}>They said she was mistaken.</p>
          <p style={{ opacity: 0.4, marginBottom: 30 }}>The record was changed.</p>
        </div>
      </section>

      {/* ================= NEWSPAPER ================= */}
      <section style={{ height: '100vh', position: 'relative' }}>
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
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}>
          <div>
            <h2 style={{ marginBottom: 20 }}>1905</h2>
            <p>The first report confirmed poisoning.</p>
            <p style={{ opacity: 0.6 }}>The second erased it.</p>
            <p style={{ opacity: 0.4 }}>What happened in between is the story.</p>
          </div>
        </div>
      </section>

      {/* ================= BERTHA ================= */}
      <section style={{ height: '100vh', position: 'relative' }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/Bertha.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%) brightness(0.35)'
        }} />

        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.7)' }} />

        <div style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '600px' }}>
            <p style={{ marginBottom: 20, opacity: 0.7 }}>
              She was there.
            </p>

            <h2 style={{ fontSize: '32px', letterSpacing: '3px', marginBottom: 20 }}>
              BERTHA BERNER
            </h2>

            <p style={{ opacity: 0.7 }}>
              Secretary. Witness. Keeper of the story.
            </p>
          </div>
        </div>
      </section>

      {/* ================= JORDAN ================= */}
      <section style={{ height: '100vh', position: 'relative' }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/President David Starr Jordan in specimen room.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%) brightness(0.3)'
        }} />

        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.7)' }} />

        <div style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '600px' }}>
            <p style={{ opacity: 0.6, marginBottom: 20 }}>
              At the center of the institution:
            </p>

            <h2 style={{ fontSize: '32px', letterSpacing: '3px', marginBottom: 20 }}>
              DAVID STARR JORDAN
            </h2>

            <p style={{ opacity: 0.7 }}>
              President of Stanford University.
            </p>
          </div>
        </div>
      </section>

      {/* ================= STANFORD ================= */}
      <section style={{ height: '100vh', position: 'relative' }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/stanford.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%) brightness(0.3)'
        }} />

        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)' }} />

        <div style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}>
          <p style={{ fontSize: '22px', maxWidth: '700px' }}>
            The institution endured.  
            The narrative stabilized.  
            The record remained.
          </p>
        </div>
      </section>

      {/* ================= FINAL ================= */}
      <section style={{ padding: '140px 20px', textAlign: 'center' }}>
        <p>The diagnosis changed.</p>
        <p>The evidence shifted.</p>
        <p style={{ marginBottom: 40 }}>The story remained.</p>

        <p style={{
          fontSize: '26px',
          letterSpacing: '2px',
          opacity: 0.8
        }}>
          HISTORY ACCEPTED THE REVISION
        </p>
      </section>

    </main>
  );
}
