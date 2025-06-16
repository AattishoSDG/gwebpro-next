// app/not-found.js
export default function NotFound() {
  return (
    <div
      style={{
        height: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div>
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
      </div>
    </div>
  );
}
