import SubTitle from "./SubTitle";
import Title from "./Title";

const ProgramsSection = () => {
  const programs = [
    {
      age: "3-4세",
      title: "Toddler Class",
      description: "영어를 처음 접하는 아이를 위한 기초 프로그램",
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
          <Title text="연령별 맞춤 프로그램" />
          <SubTitle text="AGE-SPECIFIC PROGRAMS" />
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
