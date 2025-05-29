import { Code2, Smartphone, Search, Zap, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Modern websites and web apps tailored for performance, accessibility, and SEO.",
    features: [
      "React & Next.js",
      "Tailwind",
      "Backend APIs",
      "TypeScript",
      "Responsive Design",
      "Performance Optimization",
    ],
  },
  // {
  //   icon: Smartphone,
  //   title: "Mobile Development",
  //   description:
  //     "Cross-platform apps built with React Native for Android and iOS",
  //   features: [
  //     "React Native",
  //     "Native Performance",
  //     "App Store Deployment",
  //     "UX Focused",
  //     "High Performance",
  //   ],
  // },
  // {
  //   icon: Palette,
  //   title: "UI/UX Design",
  //   description:
  //     "Beautiful, intuitive interfaces designed with user experience at the forefront of every decision.",
  //   features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  // },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Improve search rankings with structured data, page speed improvements, and SEO audits.",
    features: [
      "Technical SEO",
      "Core Web Vitals",
      "Content Strategy",
      "Performance Audit",
      "Analytics Setup",
    ],
  },
  {
    icon: Zap,
    title: "Performance Consulting",
    description:
      "Optimize your existing applications for speed, scalability, and better user engagement.",
    features: [
      "Code Review",
      "Performance Audit",
      "Optimization Strategy",
      "Monitoring Setup",
    ],
  },
  {
    icon: Users,
    title: "Team Mentoring",
    description:
      "Help your development team grow with code reviews, best practices, and technical guidance.",
    features: [
      "Code Reviews",
      "Architecture Design",
      "Best Practices",
      "Knowledge Transfer",
    ],
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Development Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I offer custom software development services designed to bring your
            ideas to life and help your business grow online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-white" size={28} />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
