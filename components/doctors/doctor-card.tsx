import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export interface DoctorProps {
  id: string;
  name: string;
  specialty: string;
  image?: string;
  initials: string;
  bio: string;
}

export function DoctorCard({ doctor }: { doctor: DoctorProps }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="aspect-[4/3] relative bg-muted">
        {doctor.image ? (
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url(${doctor.image})` }}
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-primary/10">
            <Avatar className="h-24 w-24">
              <AvatarFallback className="text-2xl">{doctor.initials}</AvatarFallback>
            </Avatar>
          </div>
        )}
      </div>
      <CardHeader>
        <CardTitle>{doctor.name}</CardTitle>
        <CardDescription className="text-primary font-medium">
          {doctor.specialty}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-3 text-muted-foreground">{doctor.bio}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" asChild className="w-full">
          <Link href={`/doctors/${doctor.id}`}>View Profile</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}