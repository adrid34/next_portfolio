import { NextRequest, NextResponse } from "next/server";
import { Client } from "pg";

export async function POST(req: NextRequest) {
  const deviceData = await req.json();
  // Get IP address
  const forwarded = req.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0] : req.ip || "";
  console.log(ip);

  const analyticsData = {
    ip,
    deviceData: deviceData,
  };

  const analyticsUrl =
    process.env.ANALYTICS_URL || "https://portfolio-analytic.vercel.app";

  const analyticsResponse = await fetch(analyticsUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(analyticsData),
  }).then((res) => res.json());

  return NextResponse.json({ success: true });
}
