import { AdmissionsSection } from "@/components/AdmissionsSection";
import { Chat } from "@/components/Chat";
import { ContactSection } from "@/components/ContactSection";
import { DiscoverRSTUniversity } from "@/components/DiscoverRSTUniversity";
import { EventsNewsSection } from "@/components/EventsNewsSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { ScrollFade } from "@/components/ScrollFade";
import { StudentPortalSection } from "@/components/StudentPortalSection";
import Image from "next/image";
 
export default function Home() {
  return (
    <div className="min-h-screen  scroll-smooth  ">
      <Header />
      <main className=" scroll-smooth  ">
        
        <HeroSection />
          <ScrollFade >
        <ProgramsSection />
        </ScrollFade>
        <ScrollFade >
        <DiscoverRSTUniversity />
        </ScrollFade>
        {/* <StudentPortalSection /> */}
<ScrollFade >
        <EventsNewsSection />
        </ScrollFade>
        <ScrollFade >
        <ContactSection />
        </ScrollFade>
        <Chat />
      </main>
      <Footer />
    </div>
  );
}
