"use client";

import React from "react";
import { motion, useMotionTemplate } from "framer-motion";
import { cn } from "../../lib/utils";

interface CardSpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
  radius?: number;
  color?: string;
}

export const CardSpotlight: React.FC<CardSpotlightProps> = ({
  children,
  radius = 100,
  color = "#262626",
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "group/spotlight rounded-full overflow-hidden relative border border-neutral-800 bg-black flex items-center justify-center",
        className
      )}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          backgroundColor: color,
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle,
              white,
              transparent 80%
            )
          `,
        }}
      ></motion.div>
      <div className="relative z-20 p-1 text-center">{children}</div>
    </div>
  );
};
