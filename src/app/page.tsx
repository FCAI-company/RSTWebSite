import { AdmissionsSection } from "@/components/AdmissionsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { StudentPortalSection } from "@/components/StudentPortalSection";
import Image from "next/image";
 
export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProgramsSection />
        <AdmissionsSection />
        <StudentPortalSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
