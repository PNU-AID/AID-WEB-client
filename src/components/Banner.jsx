import image from '../assets/images/banner.png';

function Banner() {
  return (
    <section className="h-screen lg:h-100vh bg-gradient-to-b from-[#FFFFFF] to-[#F6FAFD]">
      <div className="container relative h-full mx-auto">
        <div className="flex flex-col items-center h-full xl:flex-row md:py-24">
          {/* text */}
          <div className="text-center xl:text-left xl:absolute">
            {/* title */}
            <h1
              className="text-[#212353] text-[40px] xl:text-[80px] font-bold leading-[1.1] xl:max-w-[700px] mb-6 xl:mb-12"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-once="true"
            >
              Welcome to AIDeveloper!
            </h1>
            {/* subtitle */}
            <p
              className="text-lg text-[#4B5D68] leading-relaxed xl:max-w-[580px] mb-6 lg:mb-12"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              AID는 AI Developer의 약자로, 인공지능에 관심있는 사람들과 함께
              공부하며 스스로 발전해나가는 동아리입니다. 최종적으로
              서비스/프로젝트 제작을 목표로 합니다.
            </p>
          </div>
          {/* image */}
          <div
            className="xl:absolute xl:-right-28"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <img alt="Banner_img" className="w-full h-full" src={image} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
