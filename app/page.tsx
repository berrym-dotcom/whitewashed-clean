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
        overflow: 'hidden',
      }}
    >
      {/* DARK FILM OVERLAY */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.95))',
          zIndex: 1,
        }}
      />

      {/* FILM GRAIN */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.08,
          backgroundImage:
            'url("https://grainy-gradients.vercel.app/noise.svg")',
          zIndex: 2,
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
          letterSpacing: '3px',
          opacity: 0.7,
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
          zIndex: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: 'center',
        }}
      >
        {/* TITLE */}
        <h1
          style={{
            fontSize: '72px',
            letterSpacing: '8px',
            marginBottom: '50px',
            animation: 'fadeIn 2s ease forwards',
          }}
        >
          WHITEWASHED
        </h1>

        {/* TEXT SEQUENCE */}
        <p style={{ opacity: 0, animation: 'fadeIn 2s ease forwards 1s', marginBottom: '20px' }}>
          She said she was poisoned.
        </p>

        <p style={{ opacity: 0, animation: 'fadeIn 2s ease forwards 2.5s', marginBottom: '20px' }}>
          They said she was mistaken.
        </p>

        <p style={{ opacity: 0, animation: 'fadeIn 2s ease forwards 4s', marginBottom: '50px' }}>
          The record was changed.
        </p>

        {/* BUTTON */}
        <button
          style={{
            opacity: 0,
            animation: 'fadeIn 2s ease forwards 5.5s',
            border: '1px solid #efe7d6',
            padding: '14px 34px',
            background: 'transparent',
            color: '#efe7d6',
            letterSpacing: '3px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = '#efe7d6';
            e.currentTarget.style.color = '#000';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#efe7d6';
          }}
        >
          WATCH FILM
        </button>
      </div>

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </main>
  );
}
