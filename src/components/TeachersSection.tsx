const TeachersSection = () => {
  const teachers = [
    {
      name: "Sarah Johnson",
      position: "원장",
      experience: "15년",
      specialty: "영어 교육학",
      description: "미국에서 10년간 유치원 교육 경험을 쌓은 전문가입니다.",
      avatar: "👩‍🏫",
    },
    {
      name: "김미영",
      position: "부원장",
      experience: "12년",
      specialty: "유아교육학",
      description: "국내 유명 유치원에서 오랜 경험을 쌓은 교육 전문가입니다.",
      avatar: "👩‍💼",
    },
    {
      name: "Michael Chen",
      position: "원어민 교사",
      experience: "8년",
      specialty: "TESOL",
      description: "아이들과의 소통을 중시하는 따뜻한 교육자입니다.",
      avatar: "👨‍🏫",
    },
    {
      name: "박지은",
      position: "담임 교사",
      experience: "6년",
      specialty: "유아교육학",
      description: "창의적인 교육 방법으로 아이들의 잠재력을 키워갑니다.",
      avatar: "👩‍🎨",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            전문 교직원 소개
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            풍부한 경험과 전문성을 갖춘 교사들이 아이들의 성장을 이끌어갑니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="text-center bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                {teacher.avatar}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {teacher.name}
              </h3>
              <p className="text-blue-600 font-medium mb-2">
                {teacher.position}
              </p>
              <div className="text-sm text-gray-600 mb-3">
                <span className="font-medium">경력:</span> {teacher.experience}
              </div>
              <div className="text-sm text-gray-600 mb-3">
                <span className="font-medium">전공:</span> {teacher.specialty}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {teacher.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;
