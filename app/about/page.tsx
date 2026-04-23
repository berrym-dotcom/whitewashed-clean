export default function Page() {
  return (
    <main style={{
      minHeight: '100vh',
      background: '#000',
      color: '#efe7d6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      fontFamily: 'Georgia, serif'
    }}>
      <div>
        <h1 style={{
          fontSize: '28px',
          letterSpacing: '4px',
          marginBottom: '40px'
        }}>
          CONTACT
        </h1>

        <p style={{
          fontSize: '14px',
          letterSpacing: '2px',
          opacity: 0.8
        }}>
          inquiries / screenings / press
        </p>

        <a
          href="mailto:your@email.com"
          style={{
            display: 'block',
            marginTop: '20px',
            letterSpacing: '2px',
            textDecoration: 'none',
            color: '#efe7d6'
          }}
        >
          your@email.com
        </a>
      </div>
    </main>
  );
}
