const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            빅스 부산캠퍼스 소개
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            2010년 설립 이후 부산 지역에서 가장 신뢰받는 영어 유치원으로
            아이들의 영어 실력과 인성 발달을 함께 이끌어왔습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-lg inline-block">
              <h3 className="text-xl font-semibold">우리의 교육 철학</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              "Play to Learn, Learn to Grow" - 아이들이 놀이를 통해 자연스럽게
              영어를 습득하고, 학습을 통해 성장할 수 있도록 돕는 것이 우리의
              교육 철학입니다.
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
                  <h4 className="font-semibold text-gray-900">
                    자연스러운 영어 습득
                  </h4>
                  <p className="text-gray-600">
                    놀이와 일상 활동을 통해 영어를 자연스럽게 배웁니다.
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
                  <h4 className="font-semibold text-gray-900">
                    창의력과 인성 발달
                  </h4>
                  <p className="text-gray-600">
                    영어 교육과 함께 창의력과 바른 인성을 키워갑니다.
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
                  <h4 className="font-semibold text-gray-900">
                    안전한 학습 환경
                  </h4>
                  <p className="text-gray-600">
                    아이들이 안전하고 편안하게 학습할 수 있는 환경을 제공합니다.
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
                    2010
                  </div>
                  <div className="text-gray-600">설립년도</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    15+
                  </div>
                  <div className="text-gray-600">교육 경험</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-pink-600 mb-2">
                    500+
                  </div>
                  <div className="text-gray-600">졸업생</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    98%
                  </div>
                  <div className="text-gray-600">부모 만족도</div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-200 rounded-full flex items-center justify-center">
              <span className="text-2xl">⭐</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-200 rounded-full flex items-center justify-center">
              <span className="text-xl">🎨</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
