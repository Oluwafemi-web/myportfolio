export const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">About Me</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            I&apos;m Shekinah, a results-driven full-stack developer with over 5
            years of experience creating modern, scalable, and responsive web
            applications. I specialize in React.js, Node.js, and cloud-based
            infrastructure, with a deep focus on building user-friendly
            interfaces and high-performing backends. <br />
            I&apos;ve built everything from e-commerce platforms to mobile-first
            applications and SaaS products — always optimized for performance,
            SEO, and user engagement.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">4+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
