const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "김민수",
      child: "김지우 (6세)",
      content:
        "아이가 영어에 대한 자신감이 생겼어요. 매일 영어로 이야기하려고 노력하는 모습이 보기 좋습니다.",
      rating: 5,
      avatar: "👨‍👩‍👧",
    },
    {
      name: "박영희",
      child: "박준호 (5세)",
      content:
        "선생님들이 정말 따뜻하고 전문적이에요. 아이가 유치원에 가는 것을 너무 좋아합니다.",
      rating: 5,
      avatar: "👨‍👩‍👦",
    },
    {
      name: "이철수",
      child: "이소영 (4세)",
      content:
        "영어 실력이 눈에 띄게 늘었어요. 특히 영어 노래를 부르는 모습이 너무 귀여워요.",
      rating: 5,
      avatar: "👨‍👩‍👧‍👦",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={i < rating ? "text-yellow-400" : "text-gray-300"}
      >
        ⭐
      </span>
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            부모님 후기
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            실제 부모님들의 생생한 후기를 들어보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">{testimonial.avatar}</div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">{testimonial.child}</p>
                </div>
              </div>

              <div className="flex mb-4">{renderStars(testimonial.rating)}</div>

              <p className="text-gray-700 leading-relaxed italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">98% 부모 만족도</h3>
            <p className="text-lg mb-6">
              지난 1년간 우리 유치원을 이용하신 부모님들의 만족도입니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-sm opacity-90">전반적 만족도</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-sm opacity-90">영어 실력 향상</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">99%</div>
                <div className="text-sm opacity-90">재등원 의사</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
