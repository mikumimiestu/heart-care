import Link from 'next/link';
import { Heart, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Heart className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-bold">HealthCare</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Providing quality healthcare services for over 20 years, with a focus on patient comfort and cutting-edge treatments.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-muted-foreground hover:text-primary">Home</Link>
            </li>
            <li>
              <Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link>
            </li>
            <li>
              <Link href="/services" className="text-muted-foreground hover:text-primary">Our Services</Link>
            </li>
            <li>
              <Link href="/doctors" className="text-muted-foreground hover:text-primary">Our Doctors</Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-primary">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/services#cardiology" className="text-muted-foreground hover:text-primary">Cardiology</Link>
            </li>
            <li>
              <Link href="/services#neurology" className="text-muted-foreground hover:text-primary">Neurology</Link>
            </li>
            <li>
              <Link href="/services#pediatrics" className="text-muted-foreground hover:text-primary">Pediatrics</Link>
            </li>
            <li>
              <Link href="/services#orthopedics" className="text-muted-foreground hover:text-primary">Orthopedics</Link>
            </li>
            <li>
              <Link href="/services#dentistry" className="text-muted-foreground hover:text-primary">Dentistry</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4">Contact Information</h3>
          <address className="not-italic">
            <div className="flex items-start gap-2 mb-2">
              <MapPin className="h-5 w-5 mt-1 flex-shrink-0 text-primary" />
              <span className="text-muted-foreground">
                123 Healthcare Street<br />
                Medical District<br />
                City, State 12345
              </span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
              <span className="text-muted-foreground">(123) 456-7890</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
              <span className="text-muted-foreground">info@healthcare.com</span>
            </div>
          </address>
        </div>
      </div>
      
      <div className="container mt-8 pt-8 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} HealthCare. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}