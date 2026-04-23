export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "#efe7d6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontFamily: "Georgia, serif",
        padding: "40px"
      }}
    >
      <div style={{ maxWidth: "700px" }}>

        <h1
          style={{
            fontSize: "28px",
            letterSpacing: "4px",
            marginBottom: "40px"
          }}
        >
          ABOUT
        </h1>

        <p style={{
          fontSize: "16px",
          lineHeight: "1.6",
          marginBottom: "20px"
        }}>
          In 1905, Jane Stanford died under suspicious circumstances.
        </p>

        <p style={{
          fontSize: "16px",
          lineHeight: "1.6",
          marginBottom: "20px"
        }}>
          The initial diagnosis pointed to poisoning.
          Within days, that conclusion was revised.
        </p>

        <p style={{
          fontSize: "16px",
          lineHeight: "1.6",
          marginBottom: "20px"
        }}>
          <i>Whitewashed</i> examines how that revision took hold—
          and what it reveals about power, influence, and institutional memory.
        </p>

        <p style={{
          fontSize: "16px",
          lineHeight: "1.6",
          opacity: 0.7,
          marginTop: "40px"
        }}>
          A film by Berry Minott
        </p>

      </div>
    </main>
  );
}
