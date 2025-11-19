import { Typewriter } from "react-simple-typewriter";
import { cn } from "../lib/utils";
import { DrawLineText } from "./ui/drawlinetext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative flex min-h-[200px] md:min-h-screen w-full items-center justify-center bg-black overflow-hidden px-4 py-16">
      {/* Enhanced Dot Background with Animation */}
      <div
        className={cn(
          "absolute inset-0",
          "bg-[radial-gradient(#404040_1px,transparent_1px)]",
          "bg-size-[20px_20px]",
          "animate-pulse-slow"
        )}
      />

      {/* Animated Radial Mask */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black 
                    mask-[radial-gradient(ellipse_at_center,transparent_10%,black_80%)]"
      />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-orb-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-orb-float-delayed" />

      {/* Content */}
      <div
        className={cn(
          "relative z-20 text-center transform transition-all duration-1000",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}
      >
        <div className="flex justify-center items-center gap-3 flex-wrap mb-6">
          <div className="relative">
            <DrawLineText
              fontSize={{
                base: 36,
                sm: 46,
                md: 56,
                lg: 66,
                xl: 76,
              }}
              strokeWidth={1.2}
              text="Full Stack Developer"
              color="url(#heroGradient)"
              className="hover:scale-101 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Hidden SVG for Gradients */}
        <svg width="0" height="0" aria-hidden="true">
          <defs>
            <linearGradient
              id="heroGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="33%" stopColor="#06b6d4" />
              <stop offset="66%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>
        </svg>

        {/* Enhanced Description */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg md:text-xl lg:text-2xl text-neutral-300 mt-8 leading-relaxed font-light">
            Crafting digital experiences that blend{" "}
            <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">
              innovative design
            </span>{" "}
            with{" "}
            <span className="bg-linear-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent font-semibold">
              robust engineering
            </span>
            . Specializing in
          </h2>

          <div className="mt-6 h-12 flex items-center justify-center">
            <span className="text-xl md:text-2xl lg:text-3xl font-medium bg-linear-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent typing-text min-h-[1.5em]">
              <Typewriter
                words={[
                  "Modern Full-Stack Applications",
                  "Scalable Cloud Architecture",
                  "Performance-Optimized Solutions",
                  "User-Centric Web Experiences",
                  "Clean & Maintainable Code",
                  "Innovative Tech Solutions",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={60}
                delaySpeed={1500}
              />
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <button
            onClick={() => router.push("/projects")}
            className="group relative px-8 py-4 bg-transparent border-2 border-indigo-500 rounded-lg 
                           text-indigo-300 font-semibold overflow-hidden transition-all duration-300
                           hover:bg-indigo-500 hover:text-white hover:scale-105
                           focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            <span className="relative z-10">View My Work</span>
            <div
              className="absolute inset-0 bg-indigo-500 transform scale-x-0 group-hover:scale-x-100 
                          transition-transform duration-300 origin-left"
            />
          </button>

          <button
            onClick={() => router.push("/contact")}
            className="group px-8 py-4 bg-transparent border-2 border-neutral-600 rounded-lg 
                           text-neutral-400 font-semibold transition-all duration-300
                           hover:border-neutral-400 hover:text-neutral-200 hover:scale-105
                           focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            Let's Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
