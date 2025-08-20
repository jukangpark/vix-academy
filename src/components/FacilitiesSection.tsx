const FacilitiesSection = () => {
  const facilities = [
    {
      name: "교실",
      description: "넓고 밝은 교실에서 편안하게 학습할 수 있습니다.",
      features: ["자연 채광", "에어컨/난방", "안전한 가구", "교육 자료"],
      icon: "🏫",
    },
    {
      name: "체육관",
      description: "안전한 실내 체육관에서 신나게 뛰어놀 수 있습니다.",
      features: [
        "안전 바닥재",
        "다양한 놀이기구",
        "감시 카메라",
        "정기 점검",
        "친환경 소재 체육기구",
        "미국 명품 체육 교구",
      ],
      icon: "🎠",
    },
    {
      name: "도서관",
      description: "영어 도서와 한국어 도서를 골고루 읽을 수 있습니다.",
      features: ["영어 도서", "한국어 도서", "독서 공간", "정기 구입"],
      icon: "📚",
    },
    {
      name: "미술실",
      description: "창의력을 키우는 다양한 미술 활동을 할 수 있습니다.",
      features: ["다양한 재료", "작품 전시", "창의적 활동", "전문 지도"],
      icon: "🎨",
    },
    {
      name: "음악실",
      description: "영어 노래와 악기 연주를 통해 음악적 감각을 키웁니다.",
      features: ["영어 노래", "악기 연주", "음악 감상", "공연 준비"],
      icon: "🎵",
    },
    {
      name: "식당",
      description: "친환경 재료로 영양 균형 잡힌 점심과 간식을 제공합니다.",
      features: ["영양사 상담", "알레르기 관리", "위생 관리", "다양한 메뉴"],
      icon: "🍽️",
    },
    {
      name: "무용실",
      description:
        "넓고 쾌적한 공간에서 자유롭게 몸으로 표현하는 무용 스튜디오",
      features: [
        "안전한 친환경 바닥재",
        "통거울, 최신음향설비 완비",
        "창의적인 움직임을 이끌어 내는 최적의 장소",
      ],
      icon: "💃",
    },
    {
      name: "익스플로러 과학실",
      description: "탐구중심 실험공간, STEAM 교육연계, 최신 코딩 학습",
      features: [
        "STEAM 교육철학 맞춤 과학실",
        "실험대, 안전장비, 멀티미디어 시청 설비 완비",
        "신체를 이용한 과학적 사고와 논리력 향상",
      ],
      icon: "🔬",
    },
    {
      name: "멀티미디어 랩",
      description: "프로젝터를 이용한 소규모 발표 및 그룹활동",
      features: [
        "영어 동화, 영화, 인터랙티브 학습콘텐츠, 스토리텔링 영상",
        "최대의 영어 몰입 환경제공",
        "시각적, 청각적 학습효과",
      ],
      icon: "🎬",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            최신 시설 소개
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            아이들이 안전하고 편안하게 학습할 수 있는 최신 시설을 갖추고
            있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{facility.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {facility.name}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {facility.description}
              </p>
              <ul className="space-y-2">
                {facility.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <svg
                      className="w-4 h-4 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">안전 관리 시스템</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl mb-2">🔒</div>
              <h4 className="font-semibold mb-2">출입 관리</h4>
              <p className="text-sm opacity-90">
                24시간 보안 시스템으로 안전을 보장합니다.
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">📹</div>
              <h4 className="font-semibold mb-2">CCTV</h4>
              <p className="text-sm opacity-90">
                전 구역에 설치된 감시 카메라로 모니터링합니다.
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">🚨</div>
              <h4 className="font-semibold mb-2">비상 대응</h4>
              <p className="text-sm opacity-90">
                비상 상황에 즉시 대응할 수 있는 시스템을 갖추고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
