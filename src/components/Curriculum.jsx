import { data } from '../assets/data';

function Curriculum() {
  const { title, subtitle, list } = data;

  return (
    <section className="my-[70px] xl:my-[150px]">
      <div className="container mx-auto">
        {/* text */}
        <div className="text-center">
          {/* title */}
          <h2
            className="text-[#212353] text-[40px] font-bold leading-tight mb-6 xl:mb-12"
            data-aos="fade-down"
            data-aos-delay="100"
            data-aos-once="true"
          >
            {title}
          </h2>
          {/* subtitle */}
          <p
            className="text-lg text-[#4B5D68] font-medium leading-relaxed max-w-[600px] mx-auto mb-16 xl:mb-24"
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-once="true"
          >
            {subtitle}
          </p>
        </div>
        {/* data list */}
        <div className="grid grid-cols-1 gap-[50px] xl:grid-cols-2">
          {list.map((feature, index) => {
            const { image, bgImage, title, description, linkText } = feature;
            return (
              <div
                className="w-full max-w-[530px] h-[358px] relative flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto"
                data-aos="zoom-in"
                data-aos-once="true"
                key={index}
              >
                {/* bg image */}
                <div className="absolute top-0 right-0 hidden xl:flex -z-10">
                  <img alt="bg_img" className="w-full h-full" src={bgImage} />
                </div>
                {/* icon image */}
                <div
                  className="max-w-[120px] xl:mr-7 xl:max-w-[232px]"
                  data-aos="zoom-in-right"
                  data-aos-once="true"
                >
                  <img alt="icon_img" className="w-full h-full" src={image} />
                </div>
                {/* text */}
                <div className="max-w-[220px]">
                  <h3 className="text-[#212353] text-[24px] mb-4">{title}</h3>
                  <p className="mb-4 italic font-light">{description}</p>
                  {/* link & arrow */}
                  <div className="flex items-center gap-x-2 group">
                    <a className="text-[#212353] font-bold" href="#">
                      {linkText}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Curriculum;
