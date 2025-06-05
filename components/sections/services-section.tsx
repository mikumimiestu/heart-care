import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Brain, Stethoscope, Bone, Bluetooth as Tooth, ChevronFirst as FirstAid } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Cardiology",
    description: "Comprehensive care for heart conditions, including diagnostics, treatment, and preventive services.",
    icon: Activity,
    href: "/services#cardiology"
  },
  {
    title: "Neurology",
    description: "Expert diagnosis and treatment of disorders of the nervous system, brain, and spinal cord.",
    icon: Brain,
    href: "/services#neurology"
  },
  {
    title: "General Medicine",
    description: "Primary healthcare services for patients of all ages, addressing a wide range of health concerns.",
    icon: Stethoscope,
    href: "/services#general"
  },
  {
    title: "Orthopedics",
    description: "Specialized care for bones, joints, ligaments, tendons, muscles, and nerves.",
    icon: Bone,
    href: "/services#orthopedics"
  },
  {
    title: "Dentistry",
    description: "Complete dental care including preventive, restorative, and cosmetic dental services.",
    icon: Tooth,
    href: "/services#dentistry"
  },
  {
    title: "Emergency Care",
    description: "Immediate medical attention for urgent health issues and injuries, available 24/7.",
    icon: FirstAid,
    href: "/services#emergency"
  }
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a wide range of medical services to meet all your healthcare needs
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="transition-all hover:shadow-md hover:border-primary/20">
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" asChild>
                  <Link href={service.href}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}