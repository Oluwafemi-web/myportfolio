import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import Link from "next/link";

export const Contact = () => {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start your next web project? Whether you&apos;re a startup,
            business, or individual, I’ll help you turn your idea into a fast,
            user-focused product.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Mail className="text-blue-600" size={24} />
              </div>
              <CardTitle className="text-lg">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Get in touch via email</p>
              <Button variant="outline" className="w-full">
                <Link href="mailto:ogoayorindeshekinah@gmail.com">
                  Send Email
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Phone className="text-blue-600" size={24} />
              </div>
              <CardTitle className="text-lg">Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Prefer a quick chat?</p>
              <Button variant="outline" className="w-full">
                <Link href="tel:+2348136428007">Call Now</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-blue-600" size={24} />
              </div>
              <CardTitle className="text-lg">Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Based worldwide</p>
              <p className="text-gray-600 mb-4">
                Remote-friendly and available for global projects{" "}
              </p>

              <Button variant="outline" className="w-full">
                View Map
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
