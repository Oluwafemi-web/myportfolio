import { Code, Database, Globe, Smartphone, Cloud, Zap } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";

const skills = [
  {
    category: "Frontend",
    icon: Globe,
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "Redux",
    ],
  },
  {
    category: "Backend",
    icon: Database,
    technologies: [
      "Node.js",
      "Python",
      "Django",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Firebase",
    ],
  },
  {
    category: "Mobile",
    icon: Smartphone,
    technologies: [
      "React Native",
      "iOS",
      "Android",
      "Expo",
      "Cross-Platform Apps",
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    technologies: ["VPS Deploymnet", "Docker", "CI/CD", "NGINX"],
  },
  {
    category: "Tools & Others",
    icon: Code,
    technologies: [
      "Git",
      "Figma",
      "Strapi",
      "Webpack",
      "Cross-Brwoser Testing",
      "Postman",
    ],
  },
  {
    category: "Performance",
    icon: Zap,
    technologies: [
      "Optimization",
      "Techinal SEO",
      "Responsive Design",
      "Web Vitals",
      "Caching",
      "CDN",
      "Analytics",
      "Lighthouse Audits",
      "Accesibility",
    ],
  },
];

export const Skills = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I work with modern technologies and frameworks to build scalable,
            performant applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                    <skill.icon className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-4">
                    {skill.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
