"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import NaverMap from "@/components/NaverMap";

export default function ContactPage() {
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

      <ContactSection />

      {/* Additional Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              자주 묻는 질문
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              부모님들이 자주 궁금해하시는 질문들을 모았습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Q: 몇 살부터 입학할 수 있나요?
              </h3>
              <p className="text-gray-600">
                만 3세부터 7세까지 입학 가능합니다. 연령별로 맞춤 프로그램을
                제공합니다.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Q: 원어민 교사 비율은 어떻게 되나요?
              </h3>
              <p className="text-gray-600">
                전체 교사 중 30%가 원어민 교사입니다. 한국인 교사와 함께 팀
                티칭을 진행합니다.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Q: 무료 체험은 어떻게 신청하나요?
              </h3>
              <p className="text-gray-600">
                전화 또는 온라인으로 신청 가능합니다. 1일 무료 체험 후 상담을
                진행합니다.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Q: 등원 시간은 어떻게 되나요?
              </h3>
              <p className="text-gray-600">
                평일 오전 8시부터 오후 6시까지, 토요일은 오전 8시부터 오후
                2시까지 운영합니다.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Q: 급식은 어떻게 제공되나요?
              </h3>
              <p className="text-gray-600">
                영양사가 친환경 재료로 계획한 균형 잡힌 점심과 간식을
                제공합니다. 알레르기 관리도 철저히 합니다.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Q: 학비는 얼마인가요?
              </h3>
              <p className="text-gray-600">
                연령과 프로그램에 따라 다릅니다. 상담 시 자세한 안내를
                드리겠습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">오시는 길</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              부산광역시 동래구 온천장로 119번길 56
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                교통편 안내
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">지하철</h4>
                    <p className="text-gray-600 text-sm">
                      1호선 온천장역 1번출구에서 도보 10분
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">버스</h4>
                    <p className="text-gray-600 text-sm">
                      온천시장 정류장 하차 (77번, 110번, 121번, 1002번)
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">자가용</h4>
                    <p className="text-gray-600 text-sm">
                      건물 내 지하주차장 이용 가능
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <NaverMap
              latitude={37.483716}
              longitude={127.0603783}
              zoom={15}
              title="빅스 부산캠퍼스"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
