import { Clock, Award, HeartPulse, Users } from 'lucide-react';

const features = [
  {
    title: "24/7 Emergency Care",
    description: "Our emergency services are available round the clock to provide immediate medical attention when you need it most.",
    icon: Clock,
  },
  {
    title: "Experienced Specialists",
    description: "Our team consists of highly qualified medical professionals with years of experience in their respective fields.",
    icon: Award,
  },
  {
    title: "Advanced Technology",
    description: "We use cutting-edge medical equipment and technologies to provide accurate diagnoses and effective treatments.",
    icon: HeartPulse,
  },
  {
    title: "Patient-Centered Approach",
    description: "We prioritize your comfort and well-being, ensuring personalized care that addresses your specific needs.",
    icon: Users,
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are dedicated to providing exceptional healthcare services with a focus on patient comfort and well-being.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-sm border transition-all hover:shadow-md hover:border-primary/20">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}