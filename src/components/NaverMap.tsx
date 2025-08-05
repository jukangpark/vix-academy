"use client";

import { useState } from "react";

interface NaverMapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  title?: string;
  address?: string;
}

const NaverMap = ({
  latitude,
  longitude,
  zoom = 15,
  title = "빅스 부산캠퍼스",
  address = "부산광역시 해운대구 센텀중앙로 123",
}: NaverMapProps) => {
  const [isMapVisible, setIsMapVisible] = useState(false);

  // 네이버 지도 URL 생성
  const getNaverMapUrl = () => {
    // 좌표 기반 URL
    const coordUrl = `https://map.naver.com/p/search/${encodeURIComponent(
      title
    )}?c=${longitude},${latitude},${zoom},0,0,0,dh`;

    // 장소 검색 기반 URL (더 안정적)
    const searchUrl = `https://map.naver.com/p/search/${encodeURIComponent(
      title
    )}`;

    return searchUrl;
  };

  // 네이버 지도 앱 URL (모바일용)
  const getNaverMapAppUrl = () => {
    return `nmap://place?lat=${latitude}&lng=${longitude}&name=${encodeURIComponent(
      title
    )}&zoom=${zoom}`;
  };

  // 길찾기 URL
  const getDirectionsUrl = () => {
    return `https://map.naver.com/p/directions/${encodeURIComponent(
      title
    )}?c=${longitude},${latitude},${zoom},0,0,0,dh`;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* 지도 미리보기 */}
      <div className="relative">
        <div
          className="w-full h-64 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center cursor-pointer hover:from-blue-100 hover:to-purple-100 transition-all duration-300"
          onClick={() => setIsMapVisible(!isMapVisible)}
        >
          <div className="text-center">
            <div className="text-4xl mb-4">🗺️</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {title}
            </h3>
            <p className="text-gray-600 mb-4">{address}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              {isMapVisible ? "지도 숨기기" : "지도 보기"}
            </button>
          </div>
        </div>

        {/* 실제 네이버 지도 */}
        {isMapVisible && (
          <div className="w-full h-96">
            <iframe
              src={getNaverMapUrl()}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${title} 위치`}
            />
          </div>
        )}
      </div>

      {/* 액션 버튼들 */}
      <div className="p-6 space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={getNaverMapUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-blue-600 text-white text-center py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3"
              />
            </svg>
            <span>지도에서 보기</span>
          </a>

          <a
            href={getDirectionsUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-600 text-white text-center py-3 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3"
              />
            </svg>
            <span>길찾기</span>
          </a>
        </div>

        {/* 모바일 앱 링크 */}
        <a
          href={getNaverMapAppUrl()}
          className="block w-full bg-purple-600 text-white text-center py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
          <span>네이버 지도 앱에서 열기 (모바일)</span>
        </a>
      </div>
    </div>
  );
};

export default NaverMap;
