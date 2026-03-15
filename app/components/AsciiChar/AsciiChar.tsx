"use client";
import { COLORS, ASCII } from "@/app/constants/constants";
import { memo, useEffect, useState } from "react";

const AsciiCharComponent = ({ isActive }: { isActive: boolean }) => {
  const [char, setChar] = useState(" ");
  const [color, setColor] = useState(COLORS[0]);

  useEffect(() => {
    if (!isActive) {
      return;
    }
    const interval = setInterval(() => {
      setChar(ASCII[~~(Math.random() * ASCII.length)]);
      setColor(COLORS[~~(Math.random() * COLORS.length)]);
    }, 75);

    return () => clearInterval(interval);
  }, [isActive]);

  if (!isActive) {
    return null;
  }

  return <span style={{ color: `rgb(${color})` }}>{char}</span>;
};

AsciiCharComponent.displayName = "AsciiChar";

export const AsciiChar = memo(AsciiCharComponent);
