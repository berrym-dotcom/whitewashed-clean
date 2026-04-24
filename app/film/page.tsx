export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "1000px",
          aspectRatio: "16 / 9",
        }}
      >
        <iframe
          src="https://player.vimeo.com/video/1129259990?h=284ad14b62"
          style={{
            width: "100%",
            height: "100%",
            border: "0",
          }}
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      </div>
    </main>
  );
}
