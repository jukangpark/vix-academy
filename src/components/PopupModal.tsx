"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function PopupModal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 하루동안 보지 않기 체크
    const hideUntil = localStorage.getItem("popupHideUntil");
    const now = new Date().getTime();

    if (hideUntil && parseInt(hideUntil) > now) {
      return; // 아직 숨김 기간이 남아있음
    }

    // 팝업 표시
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // 1초 후 표시

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleHideForDay = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    localStorage.setItem("popupHideUntil", tomorrow.getTime().toString());
    setIsVisible(false);
  };

  const handlePopupClick = () => {
    window.open("https://forms.gle/ScBjet29Sk9LDCZ49", "_blank");
  };

  if (!isVisible) return null;

  return (
    <div className="absolute top-50 left-[-5px] sm:left-4 z-40">
      <div className="relative bg-white rounded-lg shadow-2xl max-w-sm sm:max-w-2xl w-full mx-4">
        {/* 팝업 이미지 */}
        <div className="w-full cursor-pointer" onClick={handlePopupClick}>
          <Image
            src="/팝업창.png"
            alt="VIX Academy 입학설명회"
            width={650}
            height={650}
            className="w-full h-auto rounded-t-lg max-w-full"
            priority
          />
        </div>

        {/* 버튼 영역 */}
        <div className="flex">
          <button
            onClick={handleClose}
            className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-3 px-4 text-sm font-medium cursor-pointer transition-colors duration-200"
          >
            닫기
          </button>
          <button
            onClick={handleHideForDay}
            className="flex-1 bg-black hover:bg-gray-600 text-white py-3 px-4 text-sm font-medium cursor-pointer transition-colors duration-200"
          >
            하루동안 보지 않기
          </button>
        </div>
      </div>
    </div>
  );
}
