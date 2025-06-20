"use client";
import { useEffect } from "react";

export default function IpInfoLogger() {
  useEffect(() => {
    const getDeviceInfo = () => ({
      userAgent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      touchSupport: "ontouchstart" in window || navigator.maxTouchPoints > 0,
    });

    fetch("/api/info", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(getDeviceInfo()),
    });
  }, []);
  return null;
}
