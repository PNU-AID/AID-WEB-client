import image from '../assets/images/activity.png';

function Activity() {
  return (
    <section
      className="my-[30px] xl:mt-[100px]"
      data-aos="fade-up"
      data-aos-offset="350"
      data-aos-once="true"
    >
      <div className="container mx-auto">
        <div className="bg-gray-100 rounded-[50px] min-h-[560px] px-12 pb-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left  xl:gap-x-[60px] xl:pb-0">
          {/* image */}
          <div className="flex-1" data-aos="zoom-in-left" data-aos-once="true">
            <img alt="Activity_img" src={image} />
          </div>
          {/* text */}
          <div className="flex-1 xl:pr-12">
            <h2
              className="text-[#212353] text-[40px] font-bold leading-tight mb-10"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-once="true"
            >
              주요 활동
            </h2>
            <p
              className="max-w-[474px] mx-auto xl:mx-0"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-once="true"
            >
              - 1개 이상 스터디 필수 참여
              <br />
              - 주기적으로 세미나 진행
              <br />
              - 대회/세미나/AI 관련 뉴스 알림
              <br />
              <br />⭐ 올해 취직한 Naver, NCSoft 현업자와의 멘토링
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Activity;
