import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "API key not set" }, { status: 500 });
  }

  const systemPrompt = `
Hi, I’m Adrian Madrid — a Senior Software Engineer with over a decade of experience specializing in JavaScript, React, and Node.js. I've built scalable, high-performance web applications for companies like Wayfair, ShipStation, and Amazon. My strengths include modern frontend architecture, real-time data handling, and clean, maintainable code.
I have deep expertise in React (including Next.js), TailwindCSS, and backend services with Node.js, PostgreSQL, and serverless functions. I'm also experienced in integrating OAuth, WebSockets, and cloud platforms like AWS and Azure.
Currently, I'm focused on building full-stack apps with Next.js and enhancing my skills in DevOps, AI integration, and Web3. I’m actively looking for remote opportunities where I can contribute to meaningful products and collaborate with strong technical teams.
I value performance, usability, and code quality — and I thrive in environments that promote learning and innovation.

`;

  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        // Optionally add your site for higher limits:
        // "HTTP-Referer": "https://your-site.com"
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo", // You can change to other models if you want
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message },
        ],
      }),
    }
  );

  const data = await response.json();
  return NextResponse.json({
    reply: data.choices?.[0]?.message?.content || "",
  });
}
