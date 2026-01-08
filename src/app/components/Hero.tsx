import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import pattern from "@/app/images/BackgroundPattern.svg";
import Link from "next/link";
const cta = [
  {
    icon: Github,
    link: "https://github.com/Oluwafemi-web",
  },
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/in/shekinah-ogo-ayorinde/",
  },
  {
    icon: Mail,
    link: "mailtoogoayorindeshkinah@gmail.com",
  },
];
export const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-[#00030A]">
      {/* 🔵 Neon-glow blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-r from-[#00E5FF] to-[#00FFC8] rounded-full mix-blend-screen opacity-75 animate-blob"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tr from-[#00A3E0] to-[#057AFF] rounded-full mix-blend-screen opacity-75 animate-blob animation-delay-2000"></div>

      {/* 🌌 Subtle mesh-line SVG overlay */}
      <div
        className="absolute inset-0 pointer-events-none bg-center bg-cover opacity-100 w-full"
        style={{
          backgroundImage: `url(${pattern.src})`,
        }}
      />

      {/* 🎯 Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
          Shekinah Ogo-Ayorinde
        </h1>
        <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
          Front-End Developer
        </h3>
        {/* <p className="text-lg md:text-2xl text-gray-300 mb-8">
          Building scalable, high-performance web applications that solve
          real-world problems, improve user experience, and drive business
          growth.
        </p>
        <p className="text-base md:text-xl text-gray-300 mb-8">
          🔵 Custom Frontend Interfaces · Optimized Backend Solutions ·
          End-to-End Web Development
        </p> */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#00E5FF] to-[#00A3E0] text-black transform transition-transform duration-300 hover:-translate-y-1 hover:scale-105 cursor-pointer"
          >
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-[#00A3E0] text-[#00A3E0] hover:text-[#D1F9FF] transform transition-transform duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#00A3E0]/20 cursor-pointer"
          >
            <Link href="#contact">Get In Touch</Link>
          </Button>
        </div>
        <div className="flex gap-6 justify-center text-[#A0EFFF]">
          {cta.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              className="transform transition-transform duration-300 hover:scale-110 hover:text-[#00E5FF] cursor-pointer"
            >
              <item.icon size={28} />
            </Link>
          ))}
        </div>
      </div>

      {/* 🔽 Scroll cue */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-[#A0EFFF]" size={32} />
      </div>
    </section>
  );
};
