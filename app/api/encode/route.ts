import { NextRequest, NextResponse } from "next/server";

function encodeText(text: string, charset: string, separator: string) {
  // Charset seçimi (şimdilik sadece UTF-8)
  let encoder: TextEncoder;
  if (charset.toUpperCase() === "UTF8") {
    encoder = new TextEncoder();
  } else {
    throw new Error("Only UTF8 charset is supported");
  }

  // New line separator ayarı
  let processedText = text;
  if (separator === "CRLF") {
    processedText = processedText.replace(/\n/g, "\r\n");
  } else if (separator === "LF") {
    processedText = processedText.replace(/\r\n/g, "\n");
  }

  // Base64 encode
  const uint8Array = encoder.encode(processedText);
  const buffer = Buffer.from(uint8Array);
  return buffer.toString("base64");
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const text = searchParams.get("text");
  const charset = searchParams.get("charset") || "UTF8";
  const separator = searchParams.get("destination_new_line_separator") || "LF";

  if (!text) {
    return NextResponse.json({ error: "Missing 'text' parameter" }, { status: 400 });
  }

  try {
    const base64Encoded = encodeText(text, charset, separator);
    return NextResponse.json({ encoded: base64Encoded });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const text = body.text;
    const charset = body.charset || "UTF8";
    const separator = body.destination_new_line_separator || "LF";

    if (!text) {
      return NextResponse.json({ error: "Missing 'text' parameter" }, { status: 400 });
    }

    const base64Encoded = encodeText(text, charset, separator);
    return NextResponse.json({ encoded: base64Encoded });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Invalid JSON body" }, { status: 400 });
  }
}
