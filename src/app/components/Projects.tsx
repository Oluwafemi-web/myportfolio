import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

const projects = [
  {
    title: "Mr. Bottle",
    description:
      "Responsive e-commerce website for a wine bottle recycling brand.",
    url: "https://mrbottleit.com/",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "Firebase",
      "Tailwind CSS",
      "Stripe",
      "Strapi.io",
    ],
  },
  {
    title: "More BnB",
    description:
      "A modern web platform designed to showcase our BnB services, allowing clients to explore offerings and amenities with ease.",
    url: "https://morebnb.it/",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
    tech: ["React", "Sanity CMS"],
  },
  {
    title: "Care Staffing Solution",
    description:
      "Custom platform connecting caregivers to assisted living facilities",
    url: "https://carestaffing-solution.com/",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop",
    tech: [
      "Next.js",
      "TypeScript",
      "NGINX",
      "Firebase",
      "PostgreSQL",
      "Firebase",
      "Tailwind CSS",
      "Stripe",
      "Strapi.io",
    ],
  },
  {
    title: "MGR Jewelry",
    description:
      "Elegant e-commerce platform showcasing luxury jewelry collections",
    url: "https://www.mgr.jewelry/",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    tech: ["React", "Sanity CMS"],
  },
  {
    title: "Grazia Zuccolotto",
    description:
      "Professional portfolio website with sophisticated design and smooth animations",
    url: "https://www.graziazuccolotto.com/",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
    tech: ["React", "Sanity CMS", "Framer Motion"],
  },
];

export const Projects = () => {
  return (
    <section
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
      id="projects"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work, featuring modern web applications
            built with cutting-edge technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg"
            >
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
                    onClick={() => window.open(project.url, "_blank")}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-300 hover:border-gray-400"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
