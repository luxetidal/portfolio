import { Typewriter } from "react-simple-typewriter";
import { cn } from "../lib/utils";
import { DrawLineText } from "./ui/drawlinetext";

const Hero = () => {
  return (
    <div className="relative flex min-h-200 md:min-h-screen w-full items-center justify-center bg-black overflow-hidden px-4 py-16">
      {/* Dot Background */}
      <div
        className={cn(
          "absolute inset-0",
          "bg-[radial-gradient(#404040_1px,transparent_1px)]",
          "bg-size-[20px_20px]"
        )}
      />

      {/* Radial Mask */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Content */}
      <div className="relative z-20 text-center">
        <div className="flex justify-center items-center gap-3 flex-wrap">
          <span
            className="font-bold tracking-tight bg-linear-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent
                         text-5xl sm:text-6xl md:text-6xl lg:text-[71px]"
          >
            Hi! I am a
          </span>

          <DrawLineText
            fontSize={{
              base: 40,
              sm: 50,
              md: 60,
              lg: 70,
            }}
            strokeWidth={1.5}
            text="Full Stack Developer"
            color="url(#gradient)"
          />
        </div>

        <svg width="0" height="0">
          <defs>
            <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
              <stop stopColor="#e5e5e5" offset="0%" />
              <stop stopColor="#737373" offset="100%" />
            </linearGradient>
          </defs>
        </svg>

        <h2 className="text-md md:text-xl lg:text-2xl text-neutral-300 mt-4 leading-relaxed">
          turning ideas into scalable, high-performance web apps through{" "}
          <span className="text-indigo-300 font-semibold typing-text">
            <Typewriter
              words={[
                "Clean Architecture & Elegant Code",
                "Next.js + React Expertise",
                "Robust Backend Engineering",
                "Cloud-Ready Full-Stack Solutions",
                "UI/UX Focused Frontends",
                "Continuous Innovation & Quality",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={90}
              deleteSpeed={70}
              delaySpeed={1200}
            />
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Hero;
