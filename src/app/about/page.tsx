"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

export default function AboutPage() {
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

      {/* Page Hero */}
      <section className="relative pt-32 pb-32 overflow-hidden min-h-[60vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/about-banner.png"
            alt="About Banner"
            className="object-cover w-full h-full"
            priority
            width={1920}
            height={1080}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
      </section>

      <AnimatedSection delay={0.3}>
        <AboutSection />
      </AnimatedSection>

      <Footer />
    </main>
  );
}
