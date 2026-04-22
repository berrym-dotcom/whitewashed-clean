export default function Home() {
  return (
    <main
      style={{
        fontFamily: 'Georgia, serif',
        backgroundColor: '#000',
        backgroundImage: "url('/eugenics.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        color: '#efe7d6',
        position: 'relative',
      }}
    >
      {/* DARK OVERLAY (this makes it cinematic) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.75)',
        }}
      />

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
        <a href="/" style={{ marginRight: 20, color: '#efe7d6' }}>HOME</a>
        <a href="/about" style={{ marginRight: 20, color: '#efe7d6' }}>ABOUT</a>
        <a href="/film" style={{ marginRight: 20, color: '#efe7d6' }}>FILM</a>
        <a href="/epk" style={{ marginRight: 20, color: '#efe7d6' }}>EPK</a>
        <a href="/contact" style={{ color: '#efe7d6' }}>CONTACT</a>
      </nav>

      {/* CONTENT */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '64px',
            letterSpacing: '6px',
            marginBottom: '40px',
          }}
        >
          WHITEWASHED
        </h1>

        <p style={{ opacity: 0.8, marginBottom: '20px' }}>
          She said she was poisoned.
        </p>

        <p style={{ opacity: 0.6, marginBottom: '20px' }}>
          They said she was mistaken.
        </p>

        <p style={{ opacity: 0.4, marginBottom: '40px' }}>
          The record was changed.
        </p>

        <button
          style={{
            border: '1px solid #efe7d6',
            padding: '12px 28px',
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
