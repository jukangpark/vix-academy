import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <Image
          width={1920}
          height={1080}
          src="/home-page-banner.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-20">
        <div className="mb-8">
          <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            🎓 영어 실력, 빅스에서 쑥쑥 자라요!
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white-900 mb-6 leading-tight">
          아이들의 미래를 위한
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            최고의 영어 교육
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-white-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          동래 최대 규모 영어 유치원, 빅스 부산캠퍼스
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            무료 체험 신청
          </button>
          <button className="border-2 border-gray-300 text-white-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300">
            프로그램 둘러보기
          </button>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-lg font-semibold text-white-900 mb-2">
              체계적 커리큘럼
            </h3>
            <p className="text-white-600 text-sm">
              연령별 맞춤 영어 교육 프로그램
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">👩‍🏫</span>
            </div>
            <h3 className="text-lg font-semibold text-white-900 mb-2">
              전문 교사진
            </h3>
            <p className="text-white-600 text-sm">
              영어 교육 전문가와 원어민 교사
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏫</span>
            </div>
            <h3 className="text-lg font-semibold text-white-900 mb-2">
              최신 시설
            </h3>
            <p className="text-white-600 text-sm">안전하고 쾌적한 학습 환경</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
