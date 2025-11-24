import { cn } from "../lib/utils";
import BlurImage from "./utils/BlurImage";

const About = () => {
  return (
    <section className="about-container relative flex min-h-200 md:min-h-screen w-full items-center justify-center bg-black text-center py-20 px-4">
      {/* Background pattern */}
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
      {/* Content */}
      <div className="relative z-20 max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Profile Image */}
        <div className="w-64 h-64 rounded-full overflow-hidden shrink-0 border-4 border-neutral-800">
          <BlurImage
            src="/profile_pic.png"
            blurhash="LAB._mEN5SkC-TNdofWX0hay}=WC"
            alt="Profile"
            className="w-full h-full"
          />
        </div>

        {/* Text Content */}
        <div className="text-left text-neutral-300 max-w-2xl ml-8 md:ml-16">
          <h1 className="text-4xl sm:text-7xl font-bold bg-linear-to-b from-neutral-100 to-neutral-300 bg-clip-text text-transparent py-8">
            About Me.
          </h1>
          <p className="text-lg leading-relaxed mb-4">
            I’m Luxetidal, a passionate and driven developer with a strong
            foundation in software engineering and a keen interest in building
            impactful digital solutions. I thrive at the intersection of
            technology and creativity, with hands-on experience in full-stack
            development, UI/UX design, and collaborative team projects.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            I have a strong grasp of modern web technologies, especially React,
            and I enjoy solving complex problems with clean, efficient code.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            I'm experimenting with innovative solutions and learning to
            translate abstract ideas into structured plans. This journey is
            helping me build my entrepreneurial mindset and sharpen my skills in
            product thinking, strategy, and leadership—even as the concept
            evolves through ideation and feedback.
          </p>
          <p className="text-lg leading-relaxed">
            My goal is to work on challenging projects, learn from experienced
            mentors, and make meaningful contributions to the tech community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
