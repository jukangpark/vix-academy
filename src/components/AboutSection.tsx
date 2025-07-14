const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            신뢰할 수 있는 파트너
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            10년간의 경험과 전문성을 바탕으로 고객의 성공을 위한 최적의 솔루션을
            제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-lg inline-block">
              <h3 className="text-xl font-semibold">우리의 미션</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              혁신적인 기술과 창의적인 아이디어로 고객의 비즈니스 성장을 돕고,
              지속 가능한 가치를 창출하는 것이 우리의 미션입니다.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">전문성</h4>
                  <p className="text-gray-600">
                    각 분야의 전문가들이 모여 최고의 서비스를 제공합니다.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">혁신성</h4>
                  <p className="text-gray-600">
                    최신 기술 트렌드를 반영한 혁신적인 솔루션을 개발합니다.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-pink-600 rounded-full flex items-center justify-center mt-1">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">신뢰성</h4>
                  <p className="text-gray-600">
                    고객과의 약속을 최우선으로 하는 신뢰할 수 있는 파트너십을
                    구축합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    2014
                  </div>
                  <div className="text-gray-600">설립년도</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    50+
                  </div>
                  <div className="text-gray-600">전문가</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-pink-600 mb-2">
                    1000+
                  </div>
                  <div className="text-gray-600">완료 프로젝트</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    24/7
                  </div>
                  <div className="text-gray-600">고객 지원</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
