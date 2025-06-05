import { AppointmentForm } from "@/components/forms/appointment-form";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              We're here to help. Reach out to us with any questions or to schedule an appointment.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Info and Form */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Have questions or need assistance? Our friendly team is here to help you with any inquiries about our services or to schedule your visit.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      123 Healthcare Street<br />
                      Medical District<br />
                      City, State 12345
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">
                      Main: (123) 456-7890<br />
                      Emergency: (123) 456-7899
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      info@healthcare.com<br />
                      appointments@healthcare.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Hours of Operation</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 8:00 PM<br />
                      Saturday: 9:00 AM - 5:00 PM<br />
                      Sunday: Closed<br />
                      <span className="font-medium text-primary">Emergency Care: 24/7</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Appointment Form */}
            <div className="bg-card border rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold mb-6">Book an Appointment</h2>
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-10">
        <div className="container">
          <div className="bg-muted rounded-lg overflow-hidden h-[400px] relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-muted-foreground">Interactive map would be displayed here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}