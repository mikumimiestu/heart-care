import { DoctorCard, DoctorProps } from "@/components/doctors/doctor-card";

const doctors: DoctorProps[] = [
  {
    id: "dr-john-smith",
    name: "Dr. John Smith",
    specialty: "Cardiologist",
    image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    initials: "JS",
    bio: "Dr. Smith is a board-certified cardiologist with over 15 years of experience in treating various heart conditions. He specializes in interventional cardiology and preventive heart care."
  },
  {
    id: "dr-priya-patel",
    name: "Dr. Priya Patel",
    specialty: "Neurologist",
    image: "https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    initials: "PP",
    bio: "Dr. Patel is a neurologist specializing in the diagnosis and treatment of neurological disorders. She has a particular interest in headache disorders and multiple sclerosis."
  },
  {
    id: "dr-emily-johnson",
    name: "Dr. Emily Johnson",
    specialty: "Pediatrician",
    image: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    initials: "EJ",
    bio: "Dr. Johnson is a compassionate pediatrician dedicated to the health and well-being of children from infancy through adolescence. She believes in creating a comfortable environment for both children and parents."
  },
  {
    id: "dr-miguel-garcia",
    name: "Dr. Miguel Garcia",
    specialty: "Orthopedic Surgeon",
    image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    initials: "MG",
    bio: "Dr. Garcia is an orthopedic surgeon specializing in sports medicine and joint replacement. With extensive experience in minimally invasive techniques, he helps patients return to their active lifestyles."
  },
  {
    id: "dr-sarah-williams",
    name: "Dr. Sarah Williams",
    specialty: "Dentist",
    image: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    initials: "SW",
    bio: "Dr. Williams is a general dentist with expertise in cosmetic dentistry. She is committed to providing gentle dental care and helping patients achieve healthy, beautiful smiles."
  },
  {
    id: "dr-robert-chen",
    name: "Dr. Robert Chen",
    specialty: "General Physician",
    image: "https://images.pexels.com/photos/5407213/pexels-photo-5407213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    initials: "RC",
    bio: "Dr. Chen is a family medicine physician who provides comprehensive care for patients of all ages. He focuses on preventive medicine and managing chronic conditions."
  }
];

export default function DoctorsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Doctors</h1>
            <p className="text-xl text-muted-foreground">
              Meet our team of experienced medical professionals dedicated to providing exceptional care
            </p>
          </div>
        </div>
      </section>
      
      {/* Doctors Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}