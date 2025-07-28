'use client'
import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, Search, Globe, User } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { ApplyLink } from "./config/config";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Admissions", href: "#admissions" },
    { name: "Student Life", href: "#student-life" },
    { name: "Research", href: "#research" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-30 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex h-20 w-20 items-center justify-center">
              <Image src={`/RST-logo-01.png`} width={250} height={250} alt="Alryada university"/>
            </div>
            
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
               
                className=" transition-colors hover:text-primary font-bold text-md text-[#0047AB]"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="h-4 w-4" color="#002E6D"/>
            </Button>
        
            <Button size="sm" style={{backgroundColor:"#002E6D !important"}} onClick={()=>{
             
               window.open(ApplyLink, "_blank");
            }}>Apply Now</Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 py-6">
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                    <Globe className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="font-semibold">International University</h2>
                    <p className="text-xs text-muted-foreground">
                      Excellence Without Borders
                    </p>
                  </div>
                </div>

                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-sm transition-colors hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>

                <div className="flex flex-col space-y-3 pt-4 border-t">
                  <Button variant="outline" className="justify-start">
                    <Search className="mr-2 h-4 w-4"  color="#002E6D"/>
                    Search
                  </Button>
                
                  <Button style={{backgroundColor:"#002E6D !important"}}>Apply Now</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
