import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Base64 Encoder API",
  description: "Serverless Base64 Encoder with Next.js & Vercel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: "1rem", background: "#f0f0f0" }}>
          <h2>Base64 Encoder</h2>
        </header>
        <main style={{ padding: "2rem" }}>{children}</main>
      </body>
    </html>
  );
}
