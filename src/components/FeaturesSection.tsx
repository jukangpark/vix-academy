const FeaturesSection = () => {
  const features = [
    {
      icon: "⚡",
      title: "빠른 개발",
      description:
        "최신 개발 도구와 방법론을 활용하여 빠르고 효율적인 개발을 진행합니다.",
      color: "blue",
    },
    {
      icon: "🎯",
      title: "정확한 분석",
      description:
        "고객의 요구사항을 정확히 분석하여 최적의 솔루션을 제안합니다.",
      color: "purple",
    },
    {
      icon: "🛡️",
      title: "보안 우선",
      description:
        "모든 프로젝트에서 보안을 최우선으로 고려하여 안전한 솔루션을 제공합니다.",
      color: "green",
    },
    {
      icon: "📈",
      title: "지속적 개선",
      description:
        "프로젝트 완료 후에도 지속적인 모니터링과 개선을 통해 성능을 최적화합니다.",
      color: "orange",
    },
    {
      icon: "🤝",
      title: "협업 중심",
      description: "고객과의 긴밀한 협업을 통해 프로젝트의 성공을 보장합니다.",
      color: "pink",
    },
    {
      icon: "🌍",
      title: "글로벌 표준",
      description:
        "국제 표준을 준수하여 글로벌 시장에서도 경쟁력 있는 솔루션을 제공합니다.",
      color: "indigo",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: "bg-blue-100 text-blue-600",
      purple: "bg-purple-100 text-purple-600",
      green: "bg-green-100 text-green-600",
      orange: "bg-orange-100 text-orange-600",
      pink: "bg-pink-100 text-pink-600",
      indigo: "bg-indigo-100 text-indigo-600",
    };
    return colorMap[color] || "bg-gray-100 text-gray-600";
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            왜 우리를 선택해야 할까요?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            우리만의 차별화된 특징들이 고객의 성공을 보장합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-4 ${getColorClasses(
                  feature.color
                )} group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              우리의 작업 프로세스
            </h3>
            <p className="text-gray-600">
              체계적이고 효율적인 프로세스로 프로젝트를 성공적으로 완료합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "요구사항 분석",
                desc: "고객의 요구사항을 정확히 파악하고 분석합니다.",
              },
              {
                step: "02",
                title: "설계 및 기획",
                desc: "최적의 솔루션을 설계하고 프로젝트를 기획합니다.",
              },
              {
                step: "03",
                title: "개발 및 구현",
                desc: "최신 기술을 활용하여 솔루션을 개발합니다.",
              },
              {
                step: "04",
                title: "테스트 및 배포",
                desc: "철저한 테스트 후 안전하게 배포합니다.",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {process.title}
                </h4>
                <p className="text-gray-600 text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
