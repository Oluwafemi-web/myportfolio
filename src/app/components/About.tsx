import { useRef, useEffect, useState } from "react";

export const About = () => {
  const stats = [
    { label: "Years Experience", value: "4+" },
    { label: "Projects Completed", value: "20+" },
    { label: "Happy Clients", value: "10+" },
    { label: "Support", value: "24/7" },
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div
          ref={containerRef}
          className={`max-w-2xl mx-auto text-center md:text-left transition-opacity duration-2000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            I&apos;m Shekinah, a results-driven full-stack developer with over 4
            years of experience creating modern, scalable, and responsive web
            applications. I specialize in React.js, Node.js, and cloud-based
            infrastructure, with a deep focus on building user-friendly
            interfaces and high-performing backends. <br />
            I&apos;ve built everything from e-commerce platforms to mobile-first
            applications and SaaS products — always optimized for performance,
            SEO, and user engagement.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-4">
            {stats.map((item, idx) => (
              <div
                key={item.label}
                className={`text-center transition-opacity duration-700 delay-${
                  idx * 200
                } ${isVisible ? "opacity-100" : "opacity-0"}`}
              >
                <div className="text-3xl font-extrabold text-[#00A3E0] mb-2">
                  {item.value}
                </div>
                <div className="text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
