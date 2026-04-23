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
      fontFamily: 'Georgia, serif'
    }}>

      <p style={{
        letterSpacing: '3px',
        fontSize: '12px',
        opacity: 0.6,
        marginBottom: '20px'
      }}>
        PRIVATE SCREENING
      </p>

      <div style={{
        width: '90%',
        maxWidth: '1000px',
        aspectRatio: '16 / 9'
      }}>
        <iframe
          src="https://player.vimeo.com/video/987654321"
          style={{ width: '100%', height: '100%' }}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      </div>

    </main>
  );
}
