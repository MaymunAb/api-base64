import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const base64 = searchParams.get("text");

  if (!base64) {
    return NextResponse.json({ error: "Missing 'text' parameter" }, { status: 400 });
  }

  try {
    const decoded = Buffer.from(base64, "base64").toString("utf-8");
    return NextResponse.json({ decoded });
  } catch (e) {
    return NextResponse.json({ error: "Invalid Base64 string" }, { status: 400 });
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const base64 = body.text;

  if (!base64) {
    return NextResponse.json({ error: "Missing 'text' in body" }, { status: 400 });
  }

  try {
    const decoded = Buffer.from(base64, "base64").toString("utf-8");
    return NextResponse.json({ decoded });
  } catch (e) {
    return NextResponse.json({ error: "Invalid Base64 string" }, { status: 400 });
  }
}
