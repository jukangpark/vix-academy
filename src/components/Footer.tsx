import Link from "next/link";
import PartnerLogosSlider from "./PartnerLogosSlider";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <PartnerLogosSlider />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Logo />
              <div>
                <h3 className="text-xl font-bold">빅스 부산캠퍼스</h3>
                <p className="text-sm text-gray-400">영어 유치원</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              아이들의 미래를 위한 최고의 영어 교육을 제공하는 빅스
              부산캠퍼스입니다. 자연스러운 영어 습득과 창의력 발달을 함께
              이끌어갑니다.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.youtube.com/@vix-academy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">YouTube</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">바로가기</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  홈
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  소개
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  프로그램
                </Link>
              </li>
              <li>
                <Link
                  href="/facilities"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  시설
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">연락처</h4>
            <div className="space-y-2 text-gray-300">
              <p>📞 1688-3458</p>
              <p>📧 vixedu@vix.academy</p>
              <p>📍 부산광역시 동대구 온천장로 119번길 56</p>
            </div>
            <div className="mt-4">
              <h5 className="font-semibold mb-2">운영시간</h5>
              <p className="text-sm text-gray-300">평일: 09:30 - 18:00</p>
              <p className="text-sm text-gray-300">
                토요일: 08:00 - 14:00 (유선상담)
              </p>
              <p className="text-sm text-gray-300">일요일 및 공휴일 휴무</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 빅스 부산캠퍼스. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                개인정보처리방침
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
