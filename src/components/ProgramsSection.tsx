const ProgramsSection = () => {
  // PDF 다운로드 함수
  const handleDownloadPDF = () => {
    // 직접 링크로 다운로드 (가장 간단하고 안정적인 방법)
    const link = document.createElement("a");
    link.href = "/program-guide.pdf";
    link.download = "빅스_부산캠퍼스_프로그램_가이드.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const programs = [
    {
      age: "3-4세",
      title: "Toddler Class",
      description: "처음 영어를 접하는 아이들을 위한 기초 프로그램",
      features: [
        "기본 영어 단어 학습",
        "간단한 영어 노래",
        "놀이를 통한 학습",
        "안전한 환경 적응",
      ],
      color: "blue",
    },
    {
      age: "4-5세",
      title: "Preschool Class",
      description: "체계적인 영어 교육과 기본 생활 습관 형성",
      features: [
        "영어 회화 기초",
        "알파벳과 파닉스",
        "창의적 놀이 활동",
        "사회성 발달",
      ],
      color: "purple",
    },
    {
      age: "5-6세",
      title: "Kindergarten Class",
      description: "초등학교 진학을 준비하는 종합 영어 프로그램",
      features: [
        "영어 읽기/쓰기",
        "수학 개념 학습",
        "프로젝트 활동",
        "자신감 향상",
      ],
      color: "pink",
    },
    {
      age: "6-7세",
      title: "Advanced Class",
      description: "영어 실력 향상과 창의적 사고력 개발",
      features: ["고급 영어 회화", "독서와 토론", "과학 실험", "예술 활동"],
      color: "green",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      pink: "bg-pink-100 text-pink-600 border-pink-200",
      green: "bg-green-100 text-green-600 border-green-200",
    };
    return colorMap[color] || "bg-gray-100 text-gray-600 border-gray-200";
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            연령별 맞춤 프로그램
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            아이들의 발달 단계에 맞는 체계적인 영어 교육 프로그램을 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium border ${getColorClasses(
                    program.color
                  )}`}
                >
                  {program.age}
                </span>
                <div className="text-2xl">🎓</div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {program.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {program.description}
              </p>

              <ul className="space-y-2 mb-4">
                {program.features.map((feature, featureIndex) => (
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

              {/* 각 프로그램별 다운로드 버튼 */}
              <button
                onClick={handleDownloadPDF}
                className={`w-full mt-4 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-md flex items-center justify-center space-x-2 ${
                  program.color === "blue"
                    ? "bg-blue-100 text-blue-700 hover:bg-blue-200"
                    : program.color === "purple"
                    ? "bg-purple-100 text-purple-700 hover:bg-purple-200"
                    : program.color === "pink"
                    ? "bg-pink-100 text-pink-700 hover:bg-pink-200"
                    : "bg-green-100 text-green-700 hover:bg-green-200"
                }`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>프로그램 가이드 다운로드</span>
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <button
            onClick={handleDownloadPDF}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            전체 다운로드
          </button>
          <p className="text-sm text-gray-500">
            📄 모든 프로그램 가이드를 다운로드 받으세요
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
