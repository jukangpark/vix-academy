import SubTitle from "./SubTitle";
import Title from "./Title";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Campus Overview Section */}
        <div className="text-center mb-12">
          <Title text="부산 캠퍼스 소개" />
          <SubTitle text="부산에서도 강남 수준의 영어교육, 이제 빅스 부산캠퍼스에서 경험하세요." />
        </div>
        <div className="mb-20">
          <div className="flex justify-center">
            <div className="relative w-96 h-96 flex items-center justify-center">
              {/* Connection Lines - 원 뒤에 배치 */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <line
                  x1="50%"
                  y1="50%"
                  x2="50%"
                  y2="12.5%"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="50%"
                  y2="87.5%"
                  stroke="#8B5CF6"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="12.5%"
                  y2="50%"
                  stroke="#10B981"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="87.5%"
                  y2="50%"
                  stroke="#EC4899"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
              </svg>

              {/* Center - 부산캠퍼스 */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full w-28 h-28 flex items-center justify-center shadow-lg z-10">
                <div className="text-center">
                  <div className="text-base font-bold">부산캠퍼스</div>
                </div>
              </div>

              {/* Top - 강남본원 */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-white border-2 border-blue-500 text-blue-600 rounded-full w-28 h-28 flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="text-base font-bold leading-tight">
                      강남
                      <br />
                      본원
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom - 몰입형 영어환경 */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-white border-2 border-purple-500 text-purple-600 rounded-full w-28 h-28 flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="text-base font-bold leading-tight">
                      몰입형
                      <br />
                      영어환경
                    </div>
                  </div>
                </div>
              </div>

              {/* Left - 전문영어 교육 */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
                <div className="bg-white border-2 border-green-500 text-green-600 rounded-full w-28 h-28 flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="text-base font-bold leading-tight">
                      전문영어
                      <br />
                      교육
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - 국제학교 연맹 */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
                <div className="bg-white border-2 border-pink-500 text-pink-600 rounded-full w-28 h-28 flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="text-base font-bold leading-tight">
                      국제학교
                      <br />
                      연맹
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-lg sm:text-xl text-gray-600 text-center mt-10">
            <p>
              동대구 최대 규모의 국제 영어 교육 기관! <br />
              강남 No.1 국제학교의 교육 노하우를 그대로 옮긴 부산 캠퍼스
            </p>
            <p>
              강남 본원과 동일한 커리큘럼을 바탕으로, 제주국제학교, 대구DIS,
              인천 CI, CMIS 등 <br />
              국내외 명문 국제학교 진학 연계 프로그램 운영!
            </p>
          </div>
        </div>

        {/* Educational Philosophy Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Title text="교육 철학" />
            <SubTitle text="EDUCATIONAL PHILOSOPHY" />
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
              <div className="text-center">
                <SubTitle text="창의성과 융합적 사고를 키우는 STEAM 교육" />
              </div>

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
            <Title text="교육 목표" />
            <SubTitle text="EDUCATIONAL OBJECTIVES" />
            <SubTitle text="창의적이고 자신감 있는 글로벌 인재로 성장하도록 돕습니다." />
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
