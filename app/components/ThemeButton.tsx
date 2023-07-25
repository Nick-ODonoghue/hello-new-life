"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeButton() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
      {resolvedTheme === "dark" ? <div className=" text-3xl">🌞</div> : <div className=" text-3xl">🌜</div>}
    </button>
  );
}
