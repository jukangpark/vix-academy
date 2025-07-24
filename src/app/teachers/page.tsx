"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import TeachersSection from "@/components/TeachersSection";
import Footer from "@/components/Footer";

export default function TeachersPage() {
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
            전문 교직원 소개
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            풍부한 경험과 전문성을 갖춘 교사들이 아이들의 성장을 이끌어갑니다.
            각 분야의 전문가들이 모여 최고의 교육을 제공합니다.
          </p>
        </div>
      </section>

      <TeachersSection />

      {/* Additional Teachers Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              교사 선발 기준
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              우리는 최고의 교육을 제공하기 위해 엄격한 기준으로 교사를
              선발합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">학력</h3>
              <p className="text-gray-600 text-sm">
                관련 전공 학사 이상의 학위 소지자
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">경력</h3>
              <p className="text-gray-600 text-sm">
                최소 3년 이상의 유치원 교육 경험
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">인성</h3>
              <p className="text-gray-600 text-sm">
                아이들을 사랑하고 이해하는 따뜻한 마음
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                지속 학습
              </h3>
              <p className="text-gray-600 text-sm">
                끊임없는 자기 개발과 학습 의지
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Training */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                교사 교육 및 연수
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                우리는 교사들의 지속적인 성장을 위해 정기적인 교육과 연수를
                제공합니다. 최신 교육 방법론과 트렌드를 반영한 프로그램으로
                교사들의 전문성을 향상시킵니다.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">월 1회 정기 교사 연수</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">분기별 전문가 초청 강연</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-pink-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">연 2회 해외 교육 연수</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">온라인 교육 플랫폼 제공</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                교사 자격 현황
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">원어민 교사</span>
                  <span className="font-semibold text-blue-600">30%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">석사 학위 소지</span>
                  <span className="font-semibold text-purple-600">60%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">10년 이상 경력</span>
                  <span className="font-semibold text-pink-600">40%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">자격증 보유</span>
                  <span className="font-semibold text-green-600">100%</span>
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
