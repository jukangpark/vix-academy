"use client";

import { useState } from "react";
import Logo from "./Logo";

const PartnerLogosSlider = () => {
  const [isPaused, setIsPaused] = useState(false);

  // 파트너 로고들을 여러 개 생성 (실제 로고 이미지 사용)
  const partnerLogos = Array.from({ length: 12 }, (_, index) => ({
    id: index,
    name: `Partner ${index + 1}`,
    // 실제 프로젝트에서는 각 파트너의 로고 이미지를 여기에 추가
    useDefaultLogo: true, // 현재는 기본 로고 사용
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
    <div className="w-full overflow-hidden bg-gray-800 py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
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
                  className="flex-shrink-0 px-4 py-2 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                  {logo.useDefaultLogo ? (
                    <div className="flex items-center justify-center">
                      <Logo width={70} height={70} />
                    </div>
                  ) : (
                    <span className="text-gray-800 font-bold text-lg tracking-wider">
                      {logo.name}
                    </span>
                  )}
                </div>
              ))}
              {/* 두 번째 세트 (무한 루프용) */}
              {partnerLogos.map((logo) => (
                <div
                  key={`right-duplicate-${logo.id}`}
                  className="flex-shrink-0 px-4 py-2 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                  {logo.useDefaultLogo ? (
                    <div className="flex items-center justify-center">
                      <Logo width={70} height={70} />
                    </div>
                  ) : (
                    <span className="text-gray-800 font-bold text-lg tracking-wider">
                      {logo.name}
                    </span>
                  )}
                </div>
              ))}
              {/* 세 번째 세트 (더 부드러운 무한 루프용) */}
              {partnerLogos.map((logo) => (
                <div
                  key={`right-triplicate-${logo.id}`}
                  className="flex-shrink-0 px-4 py-2 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                  {logo.useDefaultLogo ? (
                    <div className="flex items-center justify-center">
                      <Logo width={70} height={70} />
                    </div>
                  ) : (
                    <span className="text-gray-800 font-bold text-lg tracking-wider">
                      {logo.name}
                    </span>
                  )}
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
