"use client";

import { useState } from "react";

const PartnerLogosSlider = () => {
  const [isPaused, setIsPaused] = useState(false);

  // VIXS 로고들을 여러 개 생성
  const partnerLogos = Array.from({ length: 12 }, (_, index) => ({
    id: index,
    name: `LOGO ${index + 1}`,
    text: "LOGO",
  }));

  // 마우스 호버 시 애니메이션 정지/재시작
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  // 애니메이션 클래스 동적 생성
  const getAnimationClass = (direction: "left" | "right") => {
    return direction === "left"
      ? "animate-scroll-left"
      : "animate-scroll-right";
  };

  return (
    <div className="w-full overflow-hidden bg-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* 두 번째 줄 - 오른쪽에서 왼쪽으로 */}
          <div
            className="relative overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`flex space-x-12 items-center ${getAnimationClass(
                "right"
              )}`}
              style={{
                width: "max-content",
                animationPlayState: isPaused ? "paused" : "running",
              }}
            >
              {/* 첫 번째 세트 */}
              {partnerLogos.map((logo) => (
                <div
                  key={`right-${logo.id}`}
                  className="flex-shrink-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <span className="text-white font-bold text-lg tracking-wider">
                    {logo.text}
                  </span>
                </div>
              ))}
              {/* 두 번째 세트 (무한 루프용) */}
              {partnerLogos.map((logo) => (
                <div
                  key={`right-duplicate-${logo.id}`}
                  className="flex-shrink-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <span className="text-white font-bold text-lg tracking-wider">
                    {logo.text}
                  </span>
                </div>
              ))}
              {/* 세 번째 세트 (더 부드러운 무한 루프용) */}
              {partnerLogos.map((logo) => (
                <div
                  key={`right-triplicate-${logo.id}`}
                  className="flex-shrink-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <span className="text-white font-bold text-lg tracking-wider">
                    {logo.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerLogosSlider;
