"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import VideoSection from "@/components/VideoSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import PopupModal from "@/components/PopupModal";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      <Header isScrolled={isScrolled} />

      <AnimatedSection>
        <HeroSection />
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <AboutSection />
      </AnimatedSection>
      <AnimatedSection delay={0.4}>
        <ProgramsSection />
      </AnimatedSection>
      <AnimatedSection delay={0.6}>
        <FacilitiesSection />
      </AnimatedSection>
      <AnimatedSection delay={1.0}>
        <VideoSection />
      </AnimatedSection>
      <AnimatedSection delay={1.2}>
        <ContactSection />
      </AnimatedSection>

      <Footer />

      <PopupModal />
    </main>
  );
}
