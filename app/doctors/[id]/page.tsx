// app/doctors/[id]/page.tsx
"use client";

import { useParams, notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Phone, Mail, GraduationCap, Award, Bookmark } from "lucide-react";
import Link from "next/link";

// This would typically come from an API or database
const doctorsData = [
  {
    id: "dr-john-smith",
    name: "Dr. John Smith",
    specialty: "Cardiologist",
    image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    initials: "JS",
    bio: "Dr. Smith is a board-certified cardiologist with over 15 years of experience in treating various heart conditions. He specializes in interventional cardiology and preventive heart care.",
    education: [
      { degree: "M.D.", institution: "Harvard Medical School", year: "2003" },
      { degree: "Residency", institution: "Massachusetts General Hospital", year: "2007" },
      { degree: "Fellowship in Cardiology", institution: "Mayo Clinic", year: "2010" }
    ],
    certifications: [
      "American Board of Internal Medicine - Cardiovascular Disease",
      "Fellow of the American College of Cardiology",
      "Certified in Advanced Cardiac Life Support"
    ],
    specializations: [
      "Interventional Cardiology",
      "Heart Failure Management",
      "Preventive Cardiology",
      "Cardiac Imaging"
    ],
    schedule: {
      monday: "9:00 AM - 5:00 PM",
      tuesday: "9:00 AM - 5:00 PM",
      wednesday: "9:00 AM - 5:00 PM",
      thursday: "9:00 AM - 5:00 PM",
      friday: "9:00 AM - 3:00 PM",
      saturday: "Closed",
      sunday: "Closed"
    }
  },
  {
    id: "dr-priya-patel",
    name: "Dr. Priya Patel",
    specialty: "Neurologist",
    image: "https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    initials: "PP",
    bio: "Dr. Patel is a neurologist specializing in the diagnosis and treatment of neurological disorders. She has a particular interest in headache disorders and multiple sclerosis.",
    education: [
      { degree: "M.D.", institution: "Johns Hopkins University", year: "2007" },
      { degree: "Residency in Neurology", institution: "Johns Hopkins Hospital", year: "2011" },
      { degree: "Fellowship in Headache Medicine", institution: "University of California, San Francisco", year: "2013" }
    ],
    certifications: [
      "American Board of Psychiatry and Neurology",
      "United Council for Neurologic Subspecialties - Headache Medicine",
      "American Academy of Neurology Member"
    ],
    specializations: [
      "Headache Disorders",
      "Multiple Sclerosis",
      "Neuromuscular Disorders",
      "Stroke Recovery"
    ],
    schedule: {
      monday: "8:00 AM - 4:00 PM",
      tuesday: "10:00 AM - 6:00 PM",
      wednesday: "8:00 AM - 4:00 PM",
      thursday: "10:00 AM - 6:00 PM",
      friday: "8:00 AM - 4:00 PM",
      saturday: "9:00 AM - 12:00 PM (First Saturday of month)",
      sunday: "Closed"
    }
  },
  {
    id: "dr-emily-johnson",
    name: "Dr. Emily Johnson",
    specialty: "Pediatrician",
    image: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    initials: "EJ",
    bio: "Dr. Johnson is a compassionate pediatrician dedicated to the health and well-being of children from infancy through adolescence. She believes in creating a comfortable environment for both children and parents.",
    education: [
      { degree: "M.D.", institution: "University of Michigan Medical School", year: "2010" },
      { degree: "Residency in Pediatrics", institution: "C.S. Mott Children's Hospital", year: "2013" }
    ],
    certifications: [
      "American Board of Pediatrics",
      "Pediatric Advanced Life Support",
      "American Academy of Pediatrics Fellow"
    ],
    specializations: [
      "Well Child Care",
      "Developmental Pediatrics",
      "Adolescent Medicine",
      "Behavioral Health"
    ],
    schedule: {
      monday: "8:30 AM - 5:00 PM",
      tuesday: "8:30 AM - 5:00 PM",
      wednesday: "9:30 AM - 6:00 PM",
      thursday: "8:30 AM - 5:00 PM",
      friday: "8:30 AM - 4:00 PM",
      saturday: "Closed",
      sunday: "Closed"
    }
  },
  {
    id: "dr-miguel-garcia",
    name: "Dr. Miguel Garcia",
    specialty: "Orthopedic Surgeon",
    image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    initials: "MG",
    bio: "Dr. Garcia is an orthopedic surgeon specializing in sports medicine and joint replacement. With extensive experience in minimally invasive techniques, he helps patients return to their active lifestyles.",
    education: [
      { degree: "M.D.", institution: "Stanford University School of Medicine", year: "2006" },
      { degree: "Residency in Orthopedic Surgery", institution: "Hospital for Special Surgery", year: "2011" },
      { degree: "Fellowship in Sports Medicine", institution: "Andrews Sports Medicine & Orthopedic Center", year: "2012" }
    ],
    certifications: [
      "American Board of Orthopedic Surgery",
      "Subspecialty Certificate in Orthopedic Sports Medicine",
      "American Orthopedic Society for Sports Medicine Member"
    ],
    specializations: [
      "Sports Injuries",
      "Joint Replacement",
      "Arthroscopic Surgery",
      "Fracture Care"
    ],
    schedule: {
      monday: "7:30 AM - 3:30 PM",
      tuesday: "Surgery Day",
      wednesday: "7:30 AM - 3:30 PM",
      thursday: "Surgery Day",
      friday: "7:30 AM - 3:30 PM",
      saturday: "Closed",
      sunday: "Closed"
    }
  },
  {
    id: "dr-sarah-williams",
    name: "Dr. Sarah Williams",
    specialty: "Dentist",
    image: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    initials: "SW",
    bio: "Dr. Williams is a general dentist with expertise in cosmetic dentistry. She is committed to providing gentle dental care and helping patients achieve healthy, beautiful smiles.",
    education: [
      { degree: "D.D.S.", institution: "University of California, Los Angeles", year: "2011" },
      { degree: "Residency in Advanced General Dentistry", institution: "VA Medical Center", year: "2012" }
    ],
    certifications: [
      "American Dental Association Member",
      "Academy of General Dentistry",
      "American Academy of Cosmetic Dentistry"
    ],
    specializations: [
      "Preventive Dentistry",
      "Cosmetic Dentistry",
      "Restorative Procedures",
      "Gentle Dental Care"
    ],
    schedule: {
      monday: "9:00 AM - 5:00 PM",
      tuesday: "9:00 AM - 5:00 PM",
      wednesday: "10:00 AM - 7:00 PM",
      thursday: "9:00 AM - 5:00 PM",
      friday: "8:00 AM - 2:00 PM",
      saturday: "By appointment only",
      sunday: "Closed"
    }
  },
  {
    id: "dr-robert-chen",
    name: "Dr. Robert Chen",
    specialty: "General Physician",
    image: "https://images.pexels.com/photos/5407213/pexels-photo-5407213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    initials: "RC",
    bio: "Dr. Chen is a family medicine physician who provides comprehensive care for patients of all ages. He focuses on preventive medicine and managing chronic conditions.",
    education: [
      { degree: "M.D.", institution: "Columbia University College of Physicians and Surgeons", year: "2008" },
      { degree: "Residency in Family Medicine", institution: "University of Washington Medical Center", year: "2011" }
    ],
    certifications: [
      "American Board of Family Medicine",
      "American Academy of Family Physicians",
      "Certified in Chronic Disease Management"
    ],
    specializations: [
      "Preventive Medicine",
      "Chronic Disease Management",
      "Geriatric Care",
      "Women's Health"
    ],
    schedule: {
      monday: "8:00 AM - 4:00 PM",
      tuesday: "10:00 AM - 6:00 PM",
      wednesday: "8:00 AM - 4:00 PM",
      thursday: "10:00 AM - 6:00 PM",
      friday: "8:00 AM - 4:00 PM",
      saturday: "Closed",
      sunday: "Closed"
    }
  }
];

export default function DoctorPage() {
  const params = useParams();
  const doctorId = params.id as string;
  
  const doctor = doctorsData.find(d => d.id === doctorId);
  
  if (!doctor) {
    return notFound();
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-background shadow-xl">
                {doctor.image ? (
                  <div 
                    className="w-full h-full bg-cover bg-center" 
                    style={{ backgroundImage: `url('${doctor.image}')` }}
                  ></div>
                ) : (
                  <div className="h-full w-full flex items-center justify-center bg-primary/10">
                    <Avatar className="h-24 w-24">
                      <AvatarFallback className="text-2xl">{doctor.initials}</AvatarFallback>
                    </Avatar>
                  </div>
                )}
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold">{doctor.name}</h1>
                <p className="text-xl text-primary font-medium">{doctor.specialty}</p>
                <div className="flex mt-4 justify-center md:justify-start gap-4">
                  <Button asChild>
                    <Link href="/contact">Book Appointment</Link>
                  </Button>
                  <Button variant="outline">
                    <Phone className="mr-2 h-4 w-4" /> Contact
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Doctor Details */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="education">Education & Expertise</TabsTrigger>
                <TabsTrigger value="schedule">Schedule & Contact</TabsTrigger>
              </TabsList>
              
              <TabsContent value="about" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold">About {doctor.name}</h2>
                      <p className="text-muted-foreground">{doctor.bio}</p>
                      
                      <div className="mt-6">
                        <h3 className="text-xl font-semibold mb-4">Specializations</h3>
                        <div className="flex flex-wrap gap-2">
                          {doctor.specializations.map((spec, i) => (
                            <div key={i} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">
                              {spec}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="education" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-4 flex items-center">
                          <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                          Education
                        </h3>
                        <div className="space-y-4">
                          {doctor.education.map((edu, i) => (
                            <div key={i} className="border-l-2 border-primary/30 pl-4 py-1">
                              <p className="font-medium">{edu.degree}</p>
                              <p className="text-muted-foreground">{edu.institution}, {edu.year}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-4 flex items-center">
                          <Award className="mr-2 h-5 w-5 text-primary" />
                          Certifications & Memberships
                        </h3>
                        <ul className="space-y-2">
                          {doctor.certifications.map((cert, i) => (
                            <li key={i} className="flex items-start">
                              <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                                <div className="h-2 w-2 rounded-full bg-primary"></div>
                              </div>
                              {cert}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="schedule" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-4 flex items-center">
                          <Clock className="mr-2 h-5 w-5 text-primary" />
                          Office Hours
                        </h3>
                        <div className="space-y-2">
                          {Object.entries(doctor.schedule).map(([day, hours]) => (
                            <div key={day} className="flex justify-between">
                              <span className="capitalize">{day}:</span>
                              <span className="font-medium">{hours}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-6">
                          <Button className="w-full" asChild>
                            <Link href="/contact">Book an Appointment</Link>
                          </Button>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-4 flex items-center">
                          <Bookmark className="mr-2 h-5 w-5 text-primary" />
                          Contact Information
                        </h3>
                        <div className="space-y-4">
                          <div className="flex items-start gap-4">
                            <MapPin className="h-5 w-5 flex-shrink-0 text-primary" />
                            <span className="text-muted-foreground">
                              123 Healthcare Street<br />
                              Medical District<br />
                              City, State 12345
                            </span>
                          </div>
                          <div className="flex items-center gap-4">
                            <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                            <span className="text-muted-foreground">(123) 456-7890</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
                            <span className="text-muted-foreground">{doctor.id.replace('-', '.')}@healthcare.com</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
}