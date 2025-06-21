"use client";
import { useEffect, useState } from "react";

export default function IpInfoLogger() {
  const [ip, setIp] = useState<string | null>(null);
  useEffect(() => {
    const getDeviceInfo = () => ({
      userAgent: navigator.userAgent,
      language: navigator.language,
      platform:
        (navigator as any).userAgentData?.platform || navigator.platform,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      touchSupport: "ontouchstart" in window || navigator.maxTouchPoints > 0,
    });

    (async () => {
      const res = await fetch("/api/info", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(getDeviceInfo()),
      });
      const data = await res.json();
      setIp(data.ip);
    })();
  }, []);

  return null;
}
