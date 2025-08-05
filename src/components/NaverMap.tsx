"use client";

import { useEffect, useRef } from "react";

interface NaverMapProps {
  center?: { lat: number; lng: number };
  zoom?: number;
  className?: string;
}

const NaverMap = ({
  center = { lat: 35.1795543, lng: 129.0756416 }, // 부산 해운대구 센텀
  zoom = 15,
  className = "w-full h-96",
}: NaverMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    // 이미 스크립트가 로드되어 있는지 확인
    if (window.naver && window.naver.maps) {
      initMap();
      return;
    }

    // 스크립트 로드
    const script = document.createElement("script");
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      console.log("네이버 지도 API 로드 완료");
      initMap();
    };

    script.onerror = () => {
      console.error("네이버 지도 API 로드 실패");
    };

    document.head.appendChild(script);

    // 컴포넌트 언마운트 시 정리
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy();
      }
    };
  }, []);

  const initMap = () => {
    if (!mapRef.current || !window.naver?.maps) return;

    const mapOptions = {
      center: new window.naver.maps.LatLng(center.lat, center.lng),
      zoom: zoom,
    };

    mapInstanceRef.current = new window.naver.maps.Map(
      mapRef.current,
      mapOptions
    );

    // 마커 추가
    const marker = new window.naver.maps.Marker({
      position: new window.naver.maps.LatLng(center.lat, center.lng),
      map: mapInstanceRef.current,
    });

    // 정보창 추가
    const infoWindow = new window.naver.maps.InfoWindow({
      content: `
        <div style="padding: 10px; min-width: 200px;">
          <h3 style="margin: 0 0 5px 0; font-weight: bold;">BIX 부산</h3>
          <p style="margin: 0; color: #666;">부산광역시 해운대구 센텀중앙로 123</p>
          <p style="margin: 5px 0 0 0; color: #666;">051-123-4567</p>
        </div>
      `,
    });

    // 마커 클릭 시 정보창 표시
    window.naver.maps.Event.addListener(marker, "click", () => {
      if (infoWindow.getMap()) {
        infoWindow.close();
      } else {
        infoWindow.open(mapInstanceRef.current, marker);
      }
    });
  };

  return (
    <div className={className}>
      <div
        ref={mapRef}
        style={{ width: "100%", height: "400px" }}
        className="rounded-lg shadow-lg"
      />
    </div>
  );
};

export default NaverMap;
