export default function Home() {
  return (
    <main
      style={{
        fontFamily: 'Georgia, serif',
        background: '#000',
        color: '#efe7d6',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* NAV */}
      <nav
        style={{
          position: 'fixed',
          top: 20,
          right: 40,
          zIndex: 10,
          fontSize: '12px',
          letterSpacing: '2px',
        }}
      >
        <a href="/" style={{ marginRight: 20, color: '#efe7d6', textDecoration: 'none' }}>HOME</a>
        <a href="/about" style={{ marginRight: 20, color: '#efe7d6', textDecoration: 'none' }}>ABOUT</a>
        <a href="/film" style={{ marginRight: 20, color: '#efe7d6', textDecoration: 'none' }}>FILM</a>
        <a href="/epk" style={{ marginRight: 20, color: '#efe7d6', textDecoration: 'none' }}>EPK</a>
        <a href="/contact" style={{ color: '#efe7d6', textDecoration: 'none' }}>CONTACT</a>
      </nav>

      {/* BACKGROUND IMAGE */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: "url('/eugenics.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'contrast(1.4) brightness(0.45) blur(3px)',
          transform: 'scale(1.05)',
        }}
      />

      {/* DARK OVERLAY */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at center, rgba(0,0,0,0.75), rgba(0,0,0,0.98))',
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          textAlign: 'center',
          padding: '20px',
        }}
      >
        <h1
          style={{
            fontSize: '84px',
            letterSpacing: '6px',
            marginBottom: '40px',
            fontWeight: 500,
          }}
        >
          WHITEWASHED
        </h1>

        <p style={{ marginBottom: 20, opacity: 0.85 }}>
          She said she was poisoned.
        </p>

        <p style={{ marginBottom: 20, opacity: 0.65 }}>
          They said she was mistaken.
        </p>

        <p style={{ marginBottom: 40, opacity: 0.5 }}>
          The record was changed.
        </p>

        <button
          style={{
            padding: '12px 28px',
            border: '1px solid #efe7d6',
            background: 'transparent',
            color: '#efe7d6',
            letterSpacing: '2px',
            cursor: 'pointer',
          }}
        >
          WATCH FILM
        </button>
      </div>
    </main>
  );
}
