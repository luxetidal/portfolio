"use client";

import { CardBody, CardContainer, CardItem } from "./ui/3dcard";
import { cn } from "../lib/utils";
import { FaGithub } from "react-icons/fa";
import Lenis from "lenis";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProjectImage from "./utils/ProjectImage";
import Link from "next/link";

const projects = [
  {
    title: "Natural Care Shop",
    description:
      "An e-commerce platform for natural and wellness products, built for a smooth shopping experience.",
    link: "https://www.naturalcareshop.ro/",
    image: "/naturalcareshop.png",
    blurhash: "L1SPX|xvtn~q00t7_2Io00oe-pM|",
  },
  {
    title: "Soft Thrive",
    description:
      "A modern corporate website with fluid animations and a clean, professional design.",
    link: "https://www.softthrive.com/",
    image: "/softthrive.png",
    blurhash: "L02$Hd9Z00~pneofp0WB00?a~V01",
  },
  {
    title: "My Dental 360",
    description:
      "A dental care platform offering comprehensive information and easy access to dental services.",
    link: "https://mydental360.com/",
    image: "/mydental.png",
    blurhash: "LACZ35PqnOi_T0X9a|WA00+FIpkW",
  },
];

const Projects = () => {
  const scrollLineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 3.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    gsap.registerPlugin(ScrollTrigger);
    gsap.to(scrollLineRef.current, {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-full py-20 px-4 bg-black">
      <div
        ref={scrollLineRef}
        className="fixed top-0 left-0 h-[3px] bg-linear-to-b from-neutral-200 to-neutral-500 w-0 z-50"
      />
      <div
        className={cn(
          "absolute inset-0 z-0",
          "bg-size-[20px_20px]",
          "bg-[radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="relative z-10 mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Things I've been building 🚀
        </h2>
        <p className="mt-4 text-neutral-400 text-sm md:text-base max-w-xl mx-auto">
          Exploring ideas, solving problems, and having fun with code — here’s
          what I’ve built so far.
        </p>
      </div>

      <div className="relative z-10 flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-black relative group/card hover:shadow-2xl hover:shadow-emerald-500/10 border-white/20 w-auto sm:w-120 h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="30"
                className="text-xl font-bold text-white"
              >
                {project.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="30"
                className="text-neutral-300 text-sm max-w-sm mt-2"
              >
                {project.description}
              </CardItem>
              <CardItem translateZ="30" className="w-full mt-4">
                <ProjectImage
                  image={project.image}
                  blurhash={project.blurhash}
                  alt={project.title}
                />
              </CardItem>

              <div className="flex justify-end items-center mt-6">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardItem
                    translateZ={20}
                    className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
                  >
                    Live →
                  </CardItem>
                </Link>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      {/* GitHub CTA */}
      <div className="mt-12">
        <Link
          href="https://github.com/luxetidal"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-base font-semibold leading-6 text-white inline-block"
        >
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-7 ring-1 ring-white/10">
            <span>For More</span>
            <FaGithub className="h-6 w-6 text-white" />
          </div>
          <span className="absolute bottom-0 left-4.5 h-px w-[calc(100%-2.25rem)] bg-linear-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
