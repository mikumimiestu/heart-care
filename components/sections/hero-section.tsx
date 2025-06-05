import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-teal-50 py-20 md:py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-radial from-blue-200 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-radial from-teal-200 to-transparent"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Your Health Is Our <span className="text-primary">Priority</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Providing exceptional healthcare services with compassion and expertise. Your well-being is at the heart of everything we do.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild>
                <Link href="/contact">Book Appointment</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-cover bg-center" 
                 style={{ backgroundImage: "url('https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}