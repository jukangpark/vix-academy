const ServicesSection = () => {
  const services = [
    {
      icon: "💻",
      title: "웹 개발",
      description:
        "반응형 웹사이트와 웹 애플리케이션을 최신 기술로 개발합니다.",
      features: ["React/Next.js", "Node.js", "TypeScript", "반응형 디자인"],
    },
    {
      icon: "📱",
      title: "모바일 앱",
      description:
        "iOS와 Android 플랫폼을 위한 네이티브 및 크로스플랫폼 앱을 개발합니다.",
      features: ["React Native", "Flutter", "Swift/Kotlin", "앱스토어 배포"],
    },
    {
      icon: "☁️",
      title: "클라우드 솔루션",
      description:
        "AWS, Azure, GCP를 활용한 확장 가능한 클라우드 인프라를 구축합니다.",
      features: ["AWS/Azure/GCP", "Docker/Kubernetes", "서버리스", "DevOps"],
    },
    {
      icon: "🤖",
      title: "AI/ML 서비스",
      description:
        "머신러닝과 인공지능 기술을 활용한 스마트 솔루션을 제공합니다.",
      features: ["데이터 분석", "예측 모델링", "NLP", "컴퓨터 비전"],
    },
    {
      icon: "🔒",
      title: "보안 솔루션",
      description:
        "엔터프라이즈급 보안 시스템과 데이터 보호 솔루션을 제공합니다.",
      features: ["보안 감사", "암호화", "접근 제어", "위험 관리"],
    },
    {
      icon: "📊",
      title: "데이터 분석",
      description:
        "빅데이터 분석과 비즈니스 인텔리전스를 통한 인사이트를 제공합니다.",
      features: ["데이터 웨어하우스", "BI 도구", "실시간 분석", "리포팅"],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            전문 서비스
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            다양한 분야의 전문 서비스를 통해 고객의 비즈니스 성장을 돕습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-500"
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

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            모든 서비스 보기
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
