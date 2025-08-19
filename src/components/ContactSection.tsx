"use client";

import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import Image from "next/image";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    childName: "",
    childAge: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // EmailJS 초기화
  useEffect(() => {
    // EmailJS Public Key - 실제 사용 시 EmailJS에서 받은 키로 교체하세요
    // 예: emailjs.init("user_abc123def456");
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "");
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // EmailJS를 사용하여 이메일 전송
      const templateParams = {
        to_email: "skyxxx9339@naver.com",
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        child_name: formData.childName,
        child_age: formData.childAge,
        message: formData.message || "문의 내용이 없습니다.",
        reply_to: formData.email,
        time: new Date().toLocaleString("ko-KR", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
      };

      // 환경 변수에서 EmailJS 설정 가져오기
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

      if (!serviceId || !templateId) {
        throw new Error(
          "EmailJS Service ID 또는 Template ID가 설정되지 않았습니다."
        );
      }

      // EmailJS를 사용하여 이메일 전송
      await emailjs.send(serviceId, templateId, templateParams);
      console.log("이메일 전송 완료");

      // Google Sheets에 데이터 저장
      const googleSheetsData = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        child_name: formData.childName,
        child_age: formData.childAge,
        message: formData.message || "문의 내용이 없습니다.",
        time: new Date().toLocaleString("ko-KR", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
      };

      try {
        // 특정 스프레드시트 ID로 연결 (귀하의 스프레드시트 ID)
        const sheetsResponse = await fetch(
          process.env.NEXT_PUBLIC_APPS_SCRIPT_WEB_APP_URL || "",
          {
            method: "POST",
            mode: "no-cors", // CORS 우회
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(googleSheetsData),
          }
        );

        if (sheetsResponse.ok) {
          console.log("Google Sheets 저장 완료");
        } else {
          console.warn("Google Sheets 저장 실패:", sheetsResponse.status);
          // 권한 관련 에러인 경우 사용자에게 안내
          if (sheetsResponse.status === 403) {
            console.warn(
              "Google 권한 승인이 필요할 수 있습니다. 관리자에게 문의하세요."
            );
          }
        }
      } catch (sheetsError) {
        console.warn("Google Sheets 저장 중 오류:", sheetsError);
        // Google Sheets 저장 실패해도 전체 제출은 성공으로 처리
      }

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        childName: "",
        childAge: "",
        message: "",
      });
    } catch (error) {
      console.error("Email sending failed:", error);

      // 더 자세한 에러 메시지 표시
      if (error instanceof Error) {
        console.error("Error details:", error.message);
      }

      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-20 text-white overflow-hidden mt-10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/상담신청 뒷배경이미지.png"
          alt="상담신청 배경"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">상담 신청</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            아이의 영어 교육에 대해 전문가와 상담해보세요. 빠른 시일 내에
            연락드리겠습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">연락처 정보</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">전화번호</p>
                    <p className="text-gray-300">1668-3458</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">이메일</p>
                    <p className="text-gray-300">vixedu@vix.academy</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">주소</p>
                    <p className="text-gray-300">
                      부산광역시 동대구 온천장로 119번길 56
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4">상담 운영 시간</h4>
              <div className="space-y-2 text-gray-300">
                <p>평일: 09:30 - 18:00</p>
                <p>토요일: 08:00 - 14:00 (유선상담)</p>
                <p>일요일 및 공휴일 휴무</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    보호자 이름 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="홍길동"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    이메일 *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    전화번호 *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="010-1234-5678"
                  />
                </div>

                <div>
                  <label
                    htmlFor="childName"
                    className="block text-sm font-medium mb-2"
                  >
                    아이 이름 *
                  </label>
                  <input
                    type="text"
                    id="childName"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="김영희"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="childAge"
                  className="block text-sm font-medium mb-2"
                >
                  아이 나이 *
                </label>
                <select
                  id="childAge"
                  name="childAge"
                  value={formData.childAge}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">나이를 선택해주세요</option>
                  <option value="3세">3세</option>
                  <option value="4세">4세</option>
                  <option value="5세">5세</option>
                  <option value="6세">6세</option>
                  <option value="7세">7세</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  문의 내용
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="궁금한 점이나 특별히 문의하실 내용이 있으시면 작성해주세요."
                />
              </div>

              {submitStatus === "success" && (
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-green-300">
                  상담 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 text-red-300">
                  상담 신청 중 오류가 발생했습니다. 다시 시도해주세요.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "신청 중..." : "무료 상담 신청하기"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
