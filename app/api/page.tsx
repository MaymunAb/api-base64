"use client";

import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [encoded, setEncoded] = useState("");

  async function encodeText() {
    const res = await fetch(
      `/api/encode?text=${encodeURIComponent(text)}&charset=UTF8&destination_new_line_separator=LF`
    );
    const data = await res.json();
    setEncoded(data.encoded || "Error");
  }

  return (
    <div>
      <h1>Base64 Encoder API</h1>
      <p>Metin gir, Base64 çıktısını al 👇</p>

      <textarea
        rows={5}
        cols={40}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Metni buraya yaz..."
        style={{ display: "block", marginBottom: "1rem" }}
      />

      <button onClick={encodeText} style={{ padding: "0.5rem 1rem" }}>
        Encode Et
      </button>

      {encoded && (
        <div style={{ marginTop: "1rem" }}>
          <h3>Sonuç:</h3>
          <code>{encoded}</code>
        </div>
      )}
    </div>
  );
}
