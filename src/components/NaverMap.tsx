"use client";

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
  address = "부산광역시 동래구 온천장로 119번길 56",
}: NaverMapProps) => {
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

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="text-center text-sm text-gray-500 mt-9">{address}</div>
      {/* 액션 버튼들 */}
      <div className="p-6">
        <div className="flex flex-col gap-3">
          <a
            href={getNaverMapUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-blue-600 text-white text-center py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
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
            href={getNaverMapAppUrl()}
            className="w-full bg-purple-600 text-white text-center py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
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
            <span>앱에서 열기 (모바일)</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NaverMap;
