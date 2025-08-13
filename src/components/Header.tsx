'use client'
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, Search, Globe, User } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { ApplyLink } from "../app/config/config";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {

    const menuVariants = {
      hidden: { x: "100%" },
      visible: { x: 0 },
      exit: { x: "100%" },
    };

    const overlayVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
      exit: { opacity: 0 },
    };
  const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

  const navItems = [
    { name: "Home", href: "#Home" },
    { name: "Faculties", href: "#Faculties" },
    { name: "Discover", href: "#DiscoverRSTUniversity" },
    // { name: "Student Life", href: "#student-life" },
    // { name: "Research", href: "#research" },
    { name: "News", href: "#EventsNewsSection" },
    { name: "Contact", href: "#contact" },
  ];
function scrollToId(id:string) {
  const element = document.getElementById(id);
  if (element) {
    
    const offset =window.innerWidth<640? 77:105; // stop before 100px
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  return (
    <header className="  sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-22 sm:h-30 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex h-15 w-15 sm:h-20 sm:w-20 items-center justify-center">
              <Image
                src={`/RST-logo-01.png`}
                width={250}
                height={250}
                alt="Alryada university"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                // href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(item.href.replace("#", ""));
                }}
                className=" transition-colors cursor-pointer hover:text-primary font-bold text-md text-[#0047AB]"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <Button variant="ghost" size="sm">
              <Search className="h-4 w-4" color="#002E6D"/>
            </Button> */}

            <Button
              size="sm"
              style={{ backgroundColor: "#002E6D !important" }}
              onClick={() => {
                window.open(ApplyLink, "_blank");
              }}
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu */}

          <AnimatePresence>
            {isOpen && (
              <>
                {/* Overlay */}
                <motion.div
                  className="fixed inset-0 w-full h-screen bg-black/40 backdrop-blur-sm z-40"
                  // variants={overlayVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.25 }}
                  onClick={() => setIsOpen(false)}
                />

                {/* Menu Panel */}
                <motion.aside
                  className="fixed top-0 right-0 bottom-0 h-[100vh] w-80 bg-white shadow-lg z-50 p-6 flex flex-col"
                  // variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="flex flex-col space-y-6 py-6">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <div className="flex h-15 w-15 items-center justify-center  ">
                          <Image
                            src={`/RST-logo-01.png`}
                            width={250}
                            height={250}
                            alt="Alryada university"
                          />
                        </div>
                        <div>
                          <h2 className="font-semibold">Alryada university</h2>
                          <p className="text-xs text-muted-foreground">
                            For Science And Techology
                          </p>
                        </div>
                      </div>

                      <Button
                        className="  md:hidden"
                        variant="ghost"
                        size="lg"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        {isOpen ? (
                          <X className="h-8 w-8" size={120} />
                        ) : (
                          <Menu size={70} />
                        )}
                      </Button>
                    </div>

                    <nav className="flex flex-col space-y-4">
                      {navItems.map((item) => (
                        <a
                          key={item.name}
                          // href={item.href}

                          onClick={(e) => {
                            setIsOpen(false);
                            e.preventDefault();
                            scrollToId(item.href.replace("#", ""));
                          }}
                          className="text-sm cursor-pointer transition-colors hover:text-primary"
                        >
                          {item.name}
                        </a>
                      ))}
                    </nav>

                    <div className="flex flex-col space-y-3 pt-4 border-t">
                      {/* <Button variant="outline" className="justify-start">
                    <Search className="mr-2 h-4 w-4"  color="#002E6D"/>
                    Search
                  </Button> */}

                      <Button
                        size="sm"
                        style={{ backgroundColor: "#002E6D !important" }}
                        onClick={() => {
                          window.open(ApplyLink, "_blank");
                        }}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </motion.aside>
              </>
            )}
          </AnimatePresence>

          <Button
            className="  md:hidden"
            variant="ghost"
            size="lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-8 w-8" size={120} /> : <Menu size={70} />}
          </Button>
        </div>
      </div>
    </header>
  );
}
