import { Stethoscope, HeartPulse, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About HealthCare</h1>
            <p className="text-xl text-muted-foreground">
              Dedicated to providing exceptional medical care with compassion and expertise for over two decades.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ backgroundImage: "url('https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
              ></div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
              <p className="text-muted-foreground">
                Founded in 2000, HealthCare began with a simple mission: to provide accessible, high-quality healthcare to our community. What started as a small clinic has grown into a comprehensive healthcare facility serving thousands of patients annually.
              </p>
              <p className="text-muted-foreground">
                Our founder, Dr. Sarah Thompson, envisioned a healthcare center where patients would receive not only the best medical care but also be treated with dignity and compassion. Today, we continue to honor that vision by combining cutting-edge medical technology with a patient-centered approach.
              </p>
              <p className="text-muted-foreground">
                Over the years, we have expanded our services to meet the evolving needs of our community, but our core values remain unchanged: excellence, compassion, and integrity in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Mission & Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Guided by our commitment to excellence in healthcare delivery
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Stethoscope className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in all aspects of patient care, from diagnosis to treatment and recovery.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <HeartPulse className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Compassion</h3>
              <p className="text-muted-foreground">
                We treat every patient with kindness, dignity, and respect, understanding the human aspect of healthcare.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-muted-foreground">
                We are committed to serving our community and addressing the unique healthcare needs of our population.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We embrace medical advancements and continuously improve our practices to provide the best care possible.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Join Us in Our Mission</h2>
            <p className="text-xl text-muted-foreground">
              Whether you're seeking medical care or looking to join our team, we welcome you to be part of our healthcare community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Book an Appointment</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}