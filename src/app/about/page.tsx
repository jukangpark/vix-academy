"use client";

import { useState, useEffect } from "react";
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
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            빅스 부산캠퍼스 소개
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            부산에서도 강남 수준의 영어교육, <br />
            이제 빅스 부산캠퍼스에서 경험하세요. <br />
          </p>
        </div>
      </section>

      <AboutSection />

      {/* Additional About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                우리의 교육 철학
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      자연스러운 영어 습득
                    </h3>
                    <p className="text-gray-600">
                      놀이와 일상 활동을 통해 영어를 자연스럽게 배웁니다.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      창의력과 인성 발달
                    </h3>
                    <p className="text-gray-600">
                      영어 교육과 함께 창의력과 바른 인성을 키워갑니다.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      안전한 학습 환경
                    </h3>
                    <p className="text-gray-600">
                      아이들이 안전하고 편안하게 학습할 수 있는 환경을
                      제공합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                교육 목표
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">
                    자연스러운 영어 의사소통 능력 향상
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">
                    창의적 사고력과 문제 해결 능력 개발
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-pink-600 rounded-full"></div>
                  <span className="text-gray-700">사회성과 협력 능력 향상</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">
                    자신감과 긍정적 자아개념 형성
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
