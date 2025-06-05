import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Activity, Brain, Stethoscope, Bone, Bluetooth as Tooth, ChevronFirst as FirstAid } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "cardiology",
    title: "Cardiology",
    description: "Our cardiology department provides comprehensive care for heart conditions, from diagnostic testing to interventional procedures and rehabilitation programs.",
    icon: Activity,
    details: [
      "Cardiac Evaluations",
      "Echocardiography",
      "ECG and Stress Testing",
      "Heart Disease Management",
      "Pacemaker Monitoring"
    ],
    image: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "neurology",
    title: "Neurology",
    description: "Our neurology department specializes in the diagnosis and treatment of disorders affecting the nervous system, including the brain, spinal cord, and peripheral nerves.",
    icon: Brain,
    details: [
      "Neurological Examinations",
      "EEG and EMG Testing",
      "Headache and Migraine Treatment",
      "Movement Disorder Management",
      "Stroke Recovery Programs"
    ],
    image: "https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "general",
    title: "General Medicine",
    description: "Our general medicine department offers primary healthcare services for patients of all ages, addressing a wide range of health concerns and preventive care.",
    icon: Stethoscope,
    details: [
      "Routine Check-ups",
      "Preventive Care",
      "Chronic Disease Management",
      "Immunizations",
      "Health Screenings"
    ],
    image: "https://images.pexels.com/photos/7580871/pexels-photo-7580871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "orthopedics",
    title: "Orthopedics",
    description: "Our orthopedic department provides specialized care for conditions affecting the musculoskeletal system, including bones, joints, ligaments, tendons, and muscles.",
    icon: Bone,
    details: [
      "Joint Replacement Surgery",
      "Fracture Care",
      "Sports Medicine",
      "Physical Therapy",
      "Spine Care"
    ],
    image: "https://images.pexels.com/photos/8460158/pexels-photo-8460158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "dentistry",
    title: "Dentistry",
    description: "Our dental department provides comprehensive oral healthcare services, from routine cleanings to complex restorative and cosmetic procedures.",
    icon: Tooth,
    details: [
      "Preventive Dental Care",
      "Restorative Dentistry",
      "Cosmetic Dentistry",
      "Pediatric Dental Services",
      "Oral Surgery"
    ],
    image: "https://images.pexels.com/photos/3845127/pexels-photo-3845127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "emergency",
    title: "Emergency Care",
    description: "Our emergency department provides immediate medical attention for urgent health issues and injuries, with a dedicated team available 24/7.",
    icon: FirstAid,
    details: [
      "Trauma Care",
      "Critical Care",
      "Urgent Medical Treatment",
      "Rapid Diagnostics",
      "Stabilization Services"
    ],
    image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive healthcare solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>
      
      {/* Services List */}
      <section className="py-16">
        <div className="container">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight">{service.title}</h2>
                  <p className="text-muted-foreground">{service.description}</p>
                  
                  <div>
                    <h3 className="font-semibold mb-3">Our {service.title} Services Include:</h3>
                    <ul className="space-y-2">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                          </div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className={`relative h-[400px] rounded-lg overflow-hidden shadow-xl ${
                  index % 2 === 1 ? "lg:col-start-1" : ""
                }`}>
                  <div 
                    className="absolute inset-0 bg-cover bg-center" 
                    style={{ backgroundImage: `url('${service.image}')` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}