import Colors from "../Colors";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import slide1 from "../../assets/images/slide-1.jpg";
import slide2 from "../../assets/images/slide-4.jpg";
import slide3 from "../../assets/images/slide-5.jpg";
import slide4 from "../../assets/images/g-4.jpg";
import slide5 from "../../assets/images/g-5.jpg";
import slide6 from "../../assets/images/g-9.jpg";

function MyCarousel() {
  return (
    <section className="home" id="home">
      <div className="content">
        <h3>
          You Organize The Happy Event,
          <span>We Handle The Rest </span>
        </h3>
      </div>
      <div className="swiper-container home-slider">
        <div className="swiper-wrapper">
          <Swiper
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 5 }}
            speed={1300}
            spaceBetween={4}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              {" "}
              <img src={slide1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide6} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* <div className="swiper-container home-slider">
        <div className="swiper-wrapper">
            <div className="swiper-slide"><img src={slide1} alt=""/></div>
            <div className="swiper-slide"><img src={slide4} alt=""/></div>
            <div className="swiper-slide"><img src={slide3} alt=""/></div>
            
        
        </div>
    </div> */}
    </section>
  );
}

export default MyCarousel;
