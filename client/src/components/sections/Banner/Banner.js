import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./banner.css";

const images = [
  {
    id: 1,
    img:"https://giffiles.alphacoders.com/339/33944.gif",
  },
  {
    id: 2,
    img:require("../../../assets/images/1_banner.gif")
  },
  {
    id: 3,
    img:"https://c.tenor.com/pK8A4SGMLsIAAAAd/anime-gif.gif"
  },
  {
    id: 4,
    img:"https://i.gifer.com/Ugsf.gif"
  },
];

const Banner = () => {
  return (
    <div style={{marginTop:"70px"}}>
      <Swiper
        // install Swiper modules
        navigation={true}
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        centeredSlides={false}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
      >
        {/* image height 428px(screen size > 640px) and 240px (if screen size is less than 728px)*/}
        {images.map((image) => (
          <SwiperSlide
            style={{ position: "relative", textAlign: "left" }}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Title"
          >
            <img
            className="img1"
              // key={uuid()}
              src={image.img}
              alt="Alternative"
              // className="h-[220px] md:h-[325px]"
              style={{
                height: "598px",
                width: "100%",
                objectFit: "fill",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
