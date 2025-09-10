import React from "react";

const APIDocsPage = () => {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>API Documentation</h1>

      <section style={{ marginTop: "2rem" }}>
        <h2>1. Encode</h2>
        <p>Base64 encode endpoint.</p>
        <p>
          <strong>URL:</strong> <code>/api/encode</code>
        </p>
        <p>
          <strong>Method:</strong> GET or POST
        </p>
        <p>
          <strong>Query Parameters (GET):</strong>
        </p>
        <ul>
          <li><code>text</code> (required): string to encode</li>
          <li><code>charset</code> (optional): default UTF8</li>
          <li><code>destination_new_line_separator</code> (optional): LF or CRLF</li>
        </ul>
        <p>Example GET:</p>
        <code>
          /api/encode?text=Merhaba&charset=UTF8&destination_new_line_separator=LF
        </code>
        <p>Example POST JSON body:</p>
        <pre>
{`{
  "text": "Merhaba",
  "charset": "UTF8",
  "destination_new_line_separator": "LF"
}`}
        </pre>
        <p>Response:</p>
        <pre>
{`{
  "encoded": "TWVyaGFiYQ=="
}`}
        </pre>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>2. Decode</h2>
        <p>Base64 decode endpoint.</p>
        <p>
          <strong>URL:</strong> <code>/api/decode</code>
        </p>
        <p>
          <strong>Method:</strong> GET or POST
        </p>
        <p>
          <strong>Query Parameters (GET):</strong>
        </p>
        <ul>
          <li><code>text</code> (required): base64 string to decode</li>
          <li><code>charset</code> (optional): default UTF8</li>
        </ul>
        <p>Example GET:</p>
        <code>/api/decode?text=TWVyaGFiYQ==</code>
        <p>Example POST JSON body:</p>
        <pre>
{`{
  "text": "TWVyaGFiYQ==",
  "charset": "UTF8"
}`}
        </pre>
        <p>Response:</p>
        <pre>
{`{
  "decoded": "Merhaba"
}`}
        </pre>
      </section>
    </main>
  );
};

export default APIDocsPage;
