export default function Page() {
  return (
    <main style={{
      minHeight: '100vh',
      background: '#000',
      color: '#efe7d6',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '40px'
    }}>

      <h1 style={{
        fontSize: '32px',
        letterSpacing: '4px',
        marginBottom: '40px'
      }}>
        FULL FILM
      </h1>

      {/* VIDEO PLACEHOLDER */}
      <div style={{
        width: '80%',
        maxWidth: '900px',
        aspectRatio: '16 / 9',
        background: '#111',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #333'
      }}>
        <p style={{ opacity: 0.6 }}>
          Film will appear here
        </p>
      </div>

      <p style={{
        marginTop: '30px',
        fontSize: '12px',
        letterSpacing: '2px',
        opacity: 0.5
      }}>
        Password protected screening
      </p>

    </main>
  );
}
