"use client";

import { ComponentProps, useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type ResponsiveFontSize = {
  base?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

type DrawTextProps = Omit<ComponentProps<"svg">, "fontSize"> & {
  afterFill?: boolean;
  color?: string;
  fontSize?: number | ResponsiveFontSize;
  letterSpacing?: number;
  oneByOne?: boolean;
  strokeWidth?: number;
  text: string;
  wordSpacing?: number;
};

export const DrawLineText = ({
  text,
  oneByOne = true,
  afterFill = true,
  color = "black",
  fontSize = 40,
  wordSpacing = 10,
  strokeWidth = 1,
  letterSpacing = 0,
  ...props
}: DrawTextProps) => {
  const wrapperRef = useRef<SVGSVGElement | null>(null);
  const [textDimension, setTextDimension] = useState({ height: 0, width: 0 });
  const [currentFontSize, setCurrentFontSize] = useState<number>(
    typeof fontSize === "number" ? fontSize : fontSize.base ?? 40
  );

  useEffect(() => {
    if (typeof fontSize === "number") {
      setCurrentFontSize(fontSize);
      return;
    }

    const responsiveFontSize = fontSize as ResponsiveFontSize;

    const handleResize = () => {
      const width = window.innerWidth;
      let newFontSize = responsiveFontSize.base ?? 40;

      if (width >= 1280 && responsiveFontSize.xl) newFontSize = responsiveFontSize.xl;
      else if (width >= 1024 && responsiveFontSize.lg) newFontSize = responsiveFontSize.lg;
      else if (width >= 768 && responsiveFontSize.md) newFontSize = responsiveFontSize.md;
      else if (width >= 640 && responsiveFontSize.sm) newFontSize = responsiveFontSize.sm;

      setCurrentFontSize(newFontSize);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [fontSize]);

  useGSAP(
    () => {
      const wrapperChildren = wrapperRef.current?.children;
      if (!wrapperChildren) return;
      const children = Array.from(wrapperChildren) as SVGTextElement[];

      let totalWidth = 0;
      let maxHeight = 0;

      children.forEach((el, index) => {
        el.setAttribute("x", totalWidth + "px");
        const rect = el.getBoundingClientRect();
        const elementWidth = rect.width;
        const elementHeight = rect.height;

        if (elementHeight > maxHeight) maxHeight = elementHeight;
        totalWidth +=
          (elementWidth === 0 ? wordSpacing : elementWidth) +
          (children.length - 1 !== index ? letterSpacing : 0);

        const length = el.getComputedTextLength() * 8;
        el.style.strokeDasharray = `${length}px`;
        el.style.strokeDashoffset = `${length}px`;
      });

      setTextDimension({ width: totalWidth, height: maxHeight });

      const textChildren = children.filter((el) => el.getBoundingClientRect().width !== 0);
      const tl = gsap.timeline();

      tl.to(textChildren, {
        strokeDashoffset: 0,
        duration: 1.75,
        ease: "linear",
        stagger: oneByOne ? 0.8 : 0,
      });

      if (afterFill) {
        tl.to(textChildren, {
          fillOpacity: 1,
          duration: 0.55,
          ease: "power4.in",
          stagger: { amount: 0.2, from: "center" },
        });
      }
    },
    { scope: wrapperRef, dependencies: [text, currentFontSize] }
  );

  return (
    <svg
      {...props}
      ref={wrapperRef}
      style={{
        userSelect: "none",
        width: `${textDimension.width}px`,
        height: `${textDimension.height * 1.03}px`,
      }}
    >
      {text.split("").map((char, i) => (
        <text
          key={i}
          style={{
            stroke: color,
            fill: color,
            fillOpacity: 0,
            fontSize: currentFontSize,
            strokeWidth: `${strokeWidth}px`,
            fontWeight: 600,
          }}
          y={currentFontSize}
        >
          {char}
        </text>
      ))}
    </svg>
  );
};
