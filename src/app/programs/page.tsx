"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import ProgramsSection from "@/components/ProgramsSection";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

export default function ProgramsPage() {
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
            src="/program-banner.jpg"
            alt="Program Banner"
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
        <ProgramsSection />
      </AnimatedSection>

      <AnimatedSection delay={0.5}>
        {/* Additional Programs Content */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                프로그램 특징
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                우리만의 차별화된 교육 방법으로 아이들의 영어 실력을 키워갑니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  체계적 커리큘럼
                </h3>
                <p className="text-gray-600">
                  연령별 발달 단계를 고려한 체계적인 교육 커리큘럼으로
                  단계적이고 효과적인 학습을 제공합니다.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  창의적 활동
                </h3>
                <p className="text-gray-600">
                  놀이, 미술, 음악, 과학 실험 등 다양한 창의적 활동을 통해
                  영어를 자연스럽게 습득합니다.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  소규모 그룹
                </h3>
                <p className="text-gray-600">
                  소규모 그룹 수업으로 개별 관심과 맞춤형 지도를 제공하여 각
                  아이의 잠재력을 최대한 발휘할 수 있도록 돕습니다.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.7}>
        {/* Daily Schedule */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                하루 일과표
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                아이들이 하루를 어떻게 보내는지 확인해보세요.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">09:00</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    등원 및 인사
                  </h3>
                  <p className="text-sm text-gray-600">아침 인사와 하루 준비</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">10:00</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    영어 수업
                  </h3>
                  <p className="text-sm text-gray-600">체계적인 영어 교육</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">12:00</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    점심 및 휴식
                  </h3>
                  <p className="text-sm text-gray-600">영양 만점 점심 식사</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">14:00</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    창의 활동
                  </h3>
                  <p className="text-sm text-gray-600">미술, 음악, 과학 활동</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <Footer />
    </main>
  );
}
