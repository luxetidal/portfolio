"use client";

import React from "react";
import { cn } from "../lib/utils";
import { CardSpotlight } from "./ui/cardspotlight";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

export const Skills: React.FC = () => {
  const colors: number[][] = [
    [138, 43, 226],
    [147, 112, 219],
    [186, 85, 211],
    [153, 50, 204],
    [218, 112, 214],
    [221, 160, 221],
    [216, 191, 216],
    [0, 105, 148],
    [56, 189, 248],
    [70, 130, 180],
    [57, 255, 20],
    [30, 41, 59],
    [255, 0, 128],
    [0, 199, 255],
    [104, 160, 99],
    [51, 51, 51],
    [255, 136, 0],
    [242, 101, 34],
    [0, 201, 167],
    [255, 166, 17],
    [240, 81, 51],
    [36, 150, 237],
  ];

  const icons: React.ReactNode[] = [
    <FaReact key="react" className="text-white text-xl" />,
    <FaHtml5 key="html" className="text-white text-xl" />,
    <FaCss3Alt key="css" className="text-white text-xl" />,
    <FaJs key="js" className="text-white text-xl" />,
    <SiTypescript key="ts" className="text-white text-xl" />,
    <img
      key="gsap"
      src="/Gsap.png"
      alt="Gsap"
      className="w-9 h-9 p-1 object-contain"
    />,
    <FaPython key="python" className="text-white text-xl" />,
    <img
      key="MySQL"
      src="/mysql_logo.png"
      alt="MySQL"
      className="w-15 h-15 p-1 object-contain"
    />,
    <img
      key="tailwind"
      src="/tailwind.png"
      alt="Tailwind"
      className="w-9 h-9 p-1 object-contain"
    />,
    <img
      key="postgresql"
      src="/postgresql.png"
      alt="Postgresql"
      className="w-9 h-9 p-1 object-contain"
    />,
    <img
      key="three"
      src="/three-js-logo.png"
      alt="Three.js"
      className="w-9 h-9 p-1 object-contain"
    />,
    <img
      key="next"
      src="/next.png"
      alt="Next.js"
      className="w-15 h-15 p-1 object-contain"
    />,
    <img
      key="motion"
      src="/motion_logo.png"
      alt="Framer Motion"
      className="w-15 h-15 p-1 object-contain"
    />,
    <img
      key="figma"
      src="/figma_logo.png"
      alt="Figma"
      className="w-13 h-12 p-1 object-contain"
    />,
    <img
      key="node"
      src="/NodeJS_Logo.png"
      alt="NodeJS"
      className="w-13 h-12 p-1 object-contain"
    />,
    <img
      key="express"
      src="/ExpressJS_Logo.png"
      alt="ExpressJS"
      className="w-16 h-11 p-1 object-contain"
    />,
    <img
      key="postman"
      src="/Postman_Logo.png"
      alt="Postman"
      className="w-15 h-15 p-1 object-contain"
    />,
    <img
      key="java"
      src="/Java_Logo.png"
      alt="Java"
      className="w-13 h-14 px-1 pb-1 object-contain"
    />,
    <img
      key="rn"
      src="/react_native_logo.png"
      alt="React Native"
      className="w-11 h-12 px-1 pb-1 object-contain"
    />,
    <img
      key="firebase"
      src="/firebase_logo.png"
      alt="Firebase"
      className="w-11 h-12 px-1 pb-1 object-contain"
    />,
    <img
      key="swift"
      src="/swift_logo.png"
      alt="Swift"
      className="w-10 h-10 px-1 pb-1 object-contain"
    />,
    <img
      key="docker"
      src="/docker_logo.png"
      alt="Docker"
      className="w-10 h-10 px-1 pb-1 object-contain"
    />,
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center px-4 py-12 sm:py-20 bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "bg-[radial-gradient(#404040_1px,transparent_1px)]",
          "bg-size-[20px_20px]",
          "animate-pulse-slow"
        )}
      />
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black 
                    mask-[radial-gradient(ellipse_at_center,transparent_10%,black_80%)]"
      />

      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center bg-linear-to-b from-neutral-300 to-neutral-500 bg-clip-text text-transparent z-20 mb-4 sm:mb-6">
        Tools in My Arsenal
      </h2>

      <div className="relative z-20 flex justify-center gap-3 flex-wrap max-w-5xl w-full">
        {icons.map((icon, index) => (
          <CardSpotlight
            key={index}
            className="h-18 w-18 rounded-full flex items-center justify-center bg-black"
            color={`rgb(${colors[index][0]}, ${colors[index][1]}, ${colors[index][2]})`}
          >
            <div className="relative z-20">{icon}</div>
          </CardSpotlight>
        ))}
      </div>
    </div>
  );
};

export default Skills;
