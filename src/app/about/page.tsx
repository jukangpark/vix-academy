"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

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
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/about-banner.png"
            alt="About Banner"
            className="object-cover w-full h-full"
            priority
            width={1920}
            height={1080}
            style={{ opacity: 0.5 }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            빅스 부산캠퍼스 소개
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            부산에서도 강남 수준의 영어교육, <br />
            이제 빅스 부산캠퍼스에서 경험하세요. <br />
          </p>
        </div>
      </section>

      <AboutSection />

      <Footer />
    </main>
  );
}
