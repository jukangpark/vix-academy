"use client";

import { useState } from "react";
import Image from "next/image";

const PartnerLogosSlider = () => {
  const [isPaused, setIsPaused] = useState(false);

  // 프로그램 로고들
  const programLogos = [
    { id: 1, name: "CMA", src: "/programs/CMA.png", alt: "CMA" },
    { id: 2, name: "르네상스", src: "/programs/르네상스.PNG", alt: "르네상스" },
    {
      id: 3,
      name: "리딩게이트",
      src: "/programs/리딩게이트.PNG",
      alt: "리딩게이트",
    },
    { id: 4, name: "모블로", src: "/programs/모블로.PNG", alt: "모블로" },
    {
      id: 5,
      name: "이미지네이션",
      src: "/programs/이미지네이션.png",
      alt: "이미지네이션",
    },
    { id: 6, name: "팽글", src: "/programs/팽글.png", alt: "팽글" },
    { id: 7, name: "피카그램", src: "/programs/피카그램.PNG", alt: "피카그램" },
    { id: 8, name: "Main Logo", src: "/main_logo.png", alt: "Main Logo" },
    { id: 9, name: "Sub Logo", src: "/sub_logo.png", alt: "Sub Logo" },
  ];

  // 로고들을 반복해서 충분한 개수 만들기
  const partnerLogos = Array.from({ length: 12 }, (_, index) => {
    const logoIndex = index % programLogos.length;
    return programLogos[logoIndex];
  });

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
    <div className="w-full overflow-hidden bg-gray-100 py-4">
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
              {partnerLogos.map((logo, index) => (
                <div
                  key={`right-1-${logo.id}-${index}`}
                  className="flex-shrink-0 px-4 py-2 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                  <div className="flex items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={70}
                      height={70}
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
              {/* 두 번째 세트 (무한 루프용) */}
              {partnerLogos.map((logo, index) => (
                <div
                  key={`right-2-${logo.id}-${index}`}
                  className="flex-shrink-0 px-4 py-2 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                  <div className="flex items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={70}
                      height={70}
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
              {/* 세 번째 세트 (더 부드러운 무한 루프용) */}
              {partnerLogos.map((logo, index) => (
                <div
                  key={`right-3-${logo.id}-${index}`}
                  className="flex-shrink-0 px-4 py-2 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                  <div className="flex items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={70}
                      height={70}
                      className="object-contain"
                    />
                  </div>
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
