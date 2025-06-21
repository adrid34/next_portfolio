import { NextRequest, NextResponse } from "next/server";
import { Client } from "pg";

export async function POST(req: NextRequest) {
  const deviceData = await req.json();
  const ip = (req.headers.get("x-forwarded-for") ?? "127.0.0.1").split(",")[0];

  const analyticsData = {
    ip,
    deviceData: deviceData,
  };

  const analyticsUrl =
    process.env.ANALYTICS_URL ||
    "https://portfolio-analytic.vercel.app/add-data";

  const analyticsResponse = await fetch(analyticsUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(analyticsData),
  }).then((res) => res.json());

  return NextResponse.json({ success: true, ip });
}
