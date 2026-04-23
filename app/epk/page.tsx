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
          PRESS KIT
        </h1>

        <a
          href="/whitewashed-epk.pdf"
          target="_blank"
          style={{
            border: '1px solid #efe7d6',
            padding: '14px 28px',
            letterSpacing: '3px',
            textDecoration: 'none',
            color: '#efe7d6',
            display: 'inline-block'
          }}
        >
          DOWNLOAD EPK
        </a>
      </div>

    </main>
  );
}
