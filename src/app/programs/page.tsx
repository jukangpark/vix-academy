"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import ProgramsSection from "@/components/ProgramsSection";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import Title from "@/components/Title";
import SubTitle from "@/components/SubTitle";

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

      <AnimatedSection delay={0.6}>
        {/* Program Introduction */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Title text="프로그램 소개" />
              <SubTitle text="PROGRAM INTRODUCTION" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  리딩 게이트
                </h3>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-md">
                  <Image
                    src="/programs/리딩게이트.PNG"
                    alt="리딩 게이트"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-600 text-sm">
                  다양한 영어 도서를 통한 읽기 훈련
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  피카그램
                </h3>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-md">
                  <Image
                    src="/programs/피카그램.PNG"
                    alt="피카그램"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-600 text-sm">
                  창의력을 키우는 디지털 아트 프로그램
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  펭글
                </h3>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-md">
                  <Image
                    src="/programs/팽글.png"
                    alt="펭글"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-600 text-sm">
                  영어로 진행되는 체육 수업 프로그램
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  르네상스
                </h3>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-md">
                  <Image
                    src="/programs/르네상스.PNG"
                    alt="르네상스"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-600 text-sm">
                  글로벌 리딩 평가와 피드백 시스템
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  모블로
                </h3>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-md">
                  <Image
                    src="/programs/모블로.PNG"
                    alt="모블로"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-600 text-sm">
                  블록 코딩 기반 창의 융합 코딩 프로그램
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  CMA
                </h3>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-md">
                  <Image
                    src="/programs/CMA.png"
                    alt="CMA"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-600 text-sm">
                  뉴욕 원어민이 직접 수업하는 태글리쉬
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center md:col-span-2 lg:col-span-3">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  이미지네이션
                </h3>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-md">
                  <Image
                    src="/programs/이미지네이션.png"
                    alt="이미지네이션"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-600 text-sm">
                  미국 빅블럭의 원조 최대구성, 최대크기의 프로그램
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.7}>
        {/* After-School Programs */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Title text="방과후 프로그램 소개" />
              <SubTitle text="INTRODUCTION OF AFTER-SCHOOL PROGRAMS" />
              <p className="text-sm text-gray-500 mt-4">
                아이의 관심과 흥미에 맞춰 자유롭게 선택할 수 있는 특별 프로그램
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-pink-200 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">🩰</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  바레
                </h3>
                <p className="text-gray-600 text-sm">
                  아이들의 자세 교정과 체력 향상에 효과적인 발레 + 필라테스 융합
                  운동
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">💃</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  K-POP 댄스
                </h3>
                <p className="text-gray-600 text-sm">
                  즐겁게 배우는 인기 K-POP 댄스 리듬과 자신감을 함께 키워요
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-200 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">〰️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  줄넘기
                </h3>
                <p className="text-gray-600 text-sm">
                  리듬-체력-성취감까지, 줄넘기로 성장하는 시간
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-orange-200 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">⚽</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  축구
                </h3>
                <p className="text-gray-600 text-sm">
                  협동성과 체력을 함께 기르는 축구 클래스
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-200 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">💻</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  코딩
                </h3>
                <p className="text-gray-600 text-sm">
                  게임처럼 배우는 쉽고 재미있는 코딩
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-yellow-200 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">🇺🇸</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  맘스잉글리쉬
                </h3>
                <p className="text-gray-600 text-sm">
                  엄마와 함께하는 즐거운 영어 놀이 시간
                </p>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-indigo-200 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">🎨</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  아트
                </h3>
                <p className="text-gray-600 text-sm">
                  상상력과 표현력을 키우는 창의 미술 시간
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.8}>
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-xs">09:00</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    등원 및 인사
                  </h3>
                  <p className="text-sm text-gray-600">아침 인사와 하루 준비</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-xs">10:00</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    영어 수업
                  </h3>
                  <p className="text-sm text-gray-600">체계적인 영어 교육</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-xs">12:00</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    점심 및 휴식
                  </h3>
                  <p className="text-sm text-gray-600">영양 만점 점심 식사</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-xs">14:00</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    창의 활동
                  </h3>
                  <p className="text-sm text-gray-600">미술, 음악, 과학 활동</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-xs">15:00</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    방과후 활동
                  </h3>
                  <p className="text-sm text-gray-600">
                    흥미 놀이 중심 프로그램
                  </p>
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
