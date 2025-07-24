"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import FacilitiesSection from "@/components/FacilitiesSection";
import Footer from "@/components/Footer";

export default function FacilitiesPage() {
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
            최신 시설 소개
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            아이들이 안전하고 편안하게 학습할 수 있는 최신 시설을 갖추고
            있습니다. 모든 시설은 아이들의 안전과 교육 효과를 최우선으로
            설계되었습니다.
          </p>
        </div>
      </section>

      <FacilitiesSection />

      {/* Additional Facilities Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              시설 투자 현황
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              아이들의 안전과 교육을 위해 지속적으로 시설을 개선하고 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏗️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                건물 면적
              </h3>
              <p className="text-2xl font-bold text-blue-600 mb-1">500㎡</p>
              <p className="text-gray-600 text-sm">넓고 쾌적한 학습 공간</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👶</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                수용 인원
              </h3>
              <p className="text-2xl font-bold text-purple-600 mb-1">80명</p>
              <p className="text-gray-600 text-sm">적정 규모의 소규모 운영</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚪</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                교실 수
              </h3>
              <p className="text-2xl font-bold text-pink-600 mb-1">8개</p>
              <p className="text-gray-600 text-sm">연령별 전용 교실</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                안전 시설
              </h3>
              <p className="text-2xl font-bold text-green-600 mb-1">24시간</p>
              <p className="text-gray-600 text-sm">CCTV 및 보안 시스템</p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Standards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                안전 관리 시스템
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                아이들의 안전을 최우선으로 하는 종합적인 안전 관리 시스템을
                운영하고 있습니다. 모든 시설과 활동에서 안전 기준을 엄격히
                적용합니다.
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
                  <span className="text-gray-700">24시간 CCTV 모니터링</span>
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
                  <span className="text-gray-700">출입 통제 시스템</span>
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
                  <span className="text-gray-700">정기 안전 점검</span>
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
                  <span className="text-gray-700">비상 대응 시스템</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                시설 인증 현황
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">유치원 설립 인가</span>
                  <span className="font-semibold text-blue-600">✅</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">건축물 안전 검사</span>
                  <span className="font-semibold text-purple-600">✅</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">소방 안전 점검</span>
                  <span className="font-semibold text-pink-600">✅</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">위생 관리 인증</span>
                  <span className="font-semibold text-green-600">✅</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">환경 친화 인증</span>
                  <span className="font-semibold text-green-600">✅</span>
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
