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

      {/* BACKGROUND: STANFORD */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: "url('/stanford.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.22,
        filter: 'grayscale(100%) contrast(110%)',
        zIndex: 0
      }} />

      {/* BACKGROUND: EUGENICS OVERLAY */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: "url('/eugenics.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.07,
        filter: 'grayscale(100%) blur(2px)',
        mixBlendMode: 'overlay',
        zIndex: 1
      }} />

      {/* DARK OVERLAY */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.95))',
        zIndex: 2
      }} />

      {/* CONTENT */}
      <div style={{
        position: 'relative',
        zIndex: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>

        {/* HERO */}
        <section style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '40px'
        }}>
          <h1 style={{
            fontSize: '72px',
            letterSpacing: '6px',
            fontWeight: 500
          }}>
            WHITEWASHED
          </h1>

          <p style={{ marginTop: '20px', opacity: 0.8 }}>
            She said she was poisoned.
          </p>

          <p style={{ opacity: 0.8 }}>
            They said she was mistaken.
          </p>

          <p style={{ marginTop: '20px', opacity: 0.6 }}>
            The record was changed.
          </p>

          <a
            href="https://vimeo.com/1129259990/284ad14b62"
            target="_blank"
            style={{
              marginTop: '40px',
              padding: '12px 28px',
              border: '1px solid rgba(239,231,214,0.5)',
              color: '#efe7d6',
              textDecoration: 'none',
              letterSpacing: '2px',
              fontSize: '12px'
            }}
          >
            WATCH FILM
          </a>
        </section>

        {/* STORY */}
        <section style={{
          maxWidth: '650px',
          padding: '80px 20px',
          borderTop: '1px solid rgba(255,255,255,0.1)'
        }}>
          <p>1905.</p>

          <p>Jane Stanford is dying.</p>

          <p>The first diagnosis is clear: poison.</p>

          <p>The second rewrites it.</p>

          <p>Nothing about the body changed.</p>

          <p>Only the conclusion.</p>

          <p style={{ marginTop: '40px', opacity: 0.5 }}>
            OFFICIAL RECORD: NATURAL CAUSES
          </p>
        </section>

        {/* FOOTER */}
        <section style={{
          padding: '80px 20px',
          fontSize: '12px',
          letterSpacing: '2px',
          opacity: 0.35
        }}>
          A FILM BY BERRY MINOTT
        </section>

      </div>
    </main>
  );
}
