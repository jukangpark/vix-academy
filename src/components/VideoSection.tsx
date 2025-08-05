import YouTubeVideo from "./YouTubeVideo";

const VideoSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            빅스 부산캠퍼스 소개
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            우리 유치원의 교육 환경과 프로그램을 영상으로 만나보세요
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <YouTubeVideo
              videoId="jIbU7OBMwgo"
              title="빅스 부산캠퍼스 소개 영상"
              className="mb-8"
            />
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                🎯 우리만의 특별한 교육
              </h3>
              <p className="text-gray-600">
                체계적인 영어 커리큘럼과 창의적인 활동을 통해 아이들이
                자연스럽게 영어를 습득하고 전인적 성장을 이룰 수 있도록
                도와줍니다.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                👩‍🏫 전문적인 교사진
              </h3>
              <p className="text-gray-600">
                영어 교육 전문가와 원어민 교사가 함께하는 최고의 교육 환경을
                제공합니다.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                🏫 안전하고 쾌적한 시설
              </h3>
              <p className="text-gray-600">
                아이들의 안전과 편안함을 최우선으로 하는 최신 시설과 교육 환경을
                갖추고 있습니다.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            더 많은 영상 보기
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
