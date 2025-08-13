import Image from 'next/image';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Separator } from './ui/separator';
import { Globe, Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, X } from 'lucide-react';
import { campus } from '../app/info/info';

export function Footer() {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Academic Programs', href: '#programs' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Student Life', href: '#student-life' },
    { name: 'Research', href: '#research' },
    { name: 'Alumni', href: '#alumni' },
  ];

  const resources = [
    { name: 'Library', href: '#library' },
    { name: 'Student Portal', href: '#portal' },
    { name: 'Career Services', href: '#careers' },
    { name: 'Academic Calendar', href: '#calendar' },
    { name: 'Campus Map', href: '#map' },
    { name: 'Directory', href: '#directory' },
  ];

  const support = [
    { name: 'Contact Us', href: '#contact' },
    { name: 'Help Center', href: '#help' },
    { name: 'Technical Support', href: '#tech-support' },
    { name: 'Accessibility', href: '#accessibility' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/Alryada.Univerity/",
      label: "Facebook",
    },
    {
      icon: Globe,
      href: "https://rst.edu.eg/",
      label: "Alryada university",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/p/C9eo_5UC69W/",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/alryada-university/posts/?feedView=all",
      label: "LinkedIn",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/channel/UCLE3susZZNOcNlFIfK_YtHw",
      label: "YouTube",
    },
  ];

  return (
    <footer className="bg-[#0047ab] text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-wrap justify-between gap-8 mb-8">
          {/* University Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src={`/RST-logo-01-762x1024.png`}
                width={50}
                height={50}
                alt="Alryada university"
              />

              <div>
                <h3 className="text-lg font-semibold">Alryada university</h3>
                <p className="text-sm text-primary-foreground/80">
                  For Science And Techology
                </p>
              </div>
            </div>

            <p className="text-sm text-primary-foreground/80 max-w-md">
              Preparing global leaders for tomorrow's challenges through
              innovative education, cutting-edge research, and diverse cultural
              experiences.
            </p>

            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>
                  El Sadat City, ElMehwar ElMarkazy-2, Cairo - Alex desert RD
                  K92
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a
                  href={`tel:${campus.Hotline}`}
                  className="text-white hover:underline"
                >
                  {campus.Hotline}
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                {campus.Phone.map((phone: string, index: number) => (
                  <div key={index} className="flex items-center">
                    {index > 0 && (
                      <span  className="mx-2">
                        |
                      </span>
                    )}
                    <a
                     
                      href={`tel:${phone}`}
                      className="text-white hover:underline mx-0 px-0"
                    >
                      {phone}
                    </a>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>{campus.email}</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            {/* <div className="space-y-3">
              <h4 className="font-semibold">Stay Updated</h4>
              <div className="flex space-x-2">
                <Input
                  placeholder="Enter your email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button variant="secondary" size="sm">
                  Subscribe
                </Button>
              </div>
            </div> */}
          </div>

          {/* Quick Links */}
          {/* <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Resources */}
          {/* <div className="space-y-4">
            <h4 className="font-semibold">Resources</h4>
            <ul className="space-y-2">
              {resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Support */}
          {/* <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-2">
              {support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Social Links */}
          <div className="flex flex-col justify-end space-x-4">
            <div className="text-sm text-primary-foreground/80">Follow us:</div>
            <div className="flex space-x-2">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="  p-0 text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <a
                    href={social.href}
                    target="_blank"
                    aria-label={social.label}
                  >
                    <social.icon size={48} />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-sm text-primary-foreground/80">
            Copyright © 2023 | Al Ryada University For Science & Technology |
            All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}