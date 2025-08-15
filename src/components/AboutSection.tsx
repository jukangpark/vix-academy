const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Educational Philosophy Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              교육 철학
              <span className="block text-lg sm:text-xl font-normal text-blue-600 mt-2">
                EDUCATIONAL PHILOSOPHY
              </span>
            </h2>
          </div>

          <div className="grid gap-12 items-center">
            <div className="space-y-6">
              <div className="px-6 py-4 rounded-lg w-fit mx-auto">
                <h3 className="text-2xl font-bold">
                  <span className="text-orange-500">S</span>
                  <span className="text-yellow-500">T</span>
                  <span className="text-green-500">E</span>
                  <span className="text-purple-500">A</span>
                  <span className="text-sky-500">M</span>
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mx-auto w-fit">
                창의성과 융합적 사고를 키우는 STEAM 교육
              </p>

              {/* STEAM Components */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                <div className="text-center p-4 rounded-lg">
                  <div className="text-2xl mb-2">🔬</div>
                  <div className="font-semibold text-orange-500">Science</div>
                </div>
                <div className="text-center p-4 rounded-lg">
                  <div className="text-2xl mb-2">💻</div>
                  <div className="font-semibold text-yellow-500">
                    Technology
                  </div>
                </div>
                <div className="text-center p-4 rounded-lg">
                  <div className="text-2xl mb-2">⚙️</div>
                  <div className="font-semibold text-green-500">
                    Engineering
                  </div>
                </div>
                <div className="text-center p-4 rounded-lg">
                  <div className="text-2xl mb-2">📐</div>
                  <div className="font-semibold text-purple-500">
                    Mathematics
                  </div>
                </div>
                <div className="text-center p-4 rounded-lg">
                  <div className="text-2xl mb-2">🎨</div>
                  <div className="font-semibold text-sky-500">Arts</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Educational Objectives Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              교육 목표
              <span className="block text-lg sm:text-xl font-normal text-blue-600 mt-2">
                EDUCATIONAL OBJECTIVES
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              창의적이고 자신감 있는 글로벌 인재로 성장하도록 돕습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Communication */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">💬</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">의사소통 능력</h3>
                  <p className="text-sm text-blue-600">Communication</p>
                </div>
              </div>
              <p className="text-gray-600">
                자연스러운 영어 의사소통 능력 향상
              </p>
            </div>

            {/* Creativity */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">창의성</h3>
                  <p className="text-sm text-purple-600">Creativity</p>
                </div>
              </div>
              <p className="text-gray-600">
                창의적인 사고력과 문제해결 능력 개발
              </p>
            </div>

            {/* Critical Thinking */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🧠</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">비판적 사고</h3>
                  <p className="text-sm text-green-600">Critical Thinking</p>
                </div>
              </div>
              <p className="text-gray-600">논리적 판단과 분석 능력 향상</p>
            </div>

            {/* Social Skills */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-pink-500 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">사회성과 협력</h3>
                  <p className="text-sm text-pink-600">
                    Social Skills & Teamwork
                  </p>
                </div>
              </div>
              <p className="text-gray-600">
                타인과 함께하는 협력과 배려심 향상
              </p>
            </div>

            {/* Self-directed Learning */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-500 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">자기주도 학습</h3>
                  <p className="text-sm text-yellow-600">
                    Self-directed Learning
                  </p>
                </div>
              </div>
              <p className="text-gray-600">자신감과 긍정적 자아개념 형성</p>
            </div>

            {/* Global Perspective */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">글로벌 시각</h3>
                  <p className="text-sm text-indigo-600">Global Perspective</p>
                </div>
              </div>
              <p className="text-gray-600">세계 문화에 대한 이해와 존중</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
