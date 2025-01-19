"use client"; // Client-side rendering

import { useEffect, useState } from "react";

export function Time() {
  const [time, setTime] = useState<string>();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], { hour12: true }).toUpperCase(),
      );
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return <p className="text-sm text-[#6ee7b7]">{time}</p>;
}
