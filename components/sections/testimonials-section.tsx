import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The care I received at HealthCare was exceptional. The doctors were attentive, and the staff was friendly and professional.",
    author: "Sarah Johnson",
    role: "Patient",
    avatar: "SJ"
  },
  {
    quote: "Thanks to the expert orthopedic team, I recovered from my knee surgery much faster than expected. Truly grateful for their care!",
    author: "David Thompson",
    role: "Patient",
    avatar: "DT"
  },
  {
    quote: "The pediatric department took excellent care of my son. The doctors were not only skilled but also had a wonderful way with children.",
    author: "Emily Rodriguez",
    role: "Parent",
    avatar: "ER"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">What Our Patients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We take pride in providing exceptional care that makes a difference in our patients' lives
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card h-full">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <blockquote className="text-card-foreground mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}