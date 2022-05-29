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
import { Button, Typography } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const images = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
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
              // key={uuid()}
              src="https://cdn.wallpapersafari.com/25/24/sfNOFb.jpg"
              alt="Alternative"
              // className="h-[220px] md:h-[325px]"
              style={{
                height: "628px",
                width: "100%",
                objectFit: "fill",
              }}
            />
            {/* <Typography
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
              style={{ position: "absolute", bottom: "10%", left: "40px" }}
            >
              <b>Watch This Movie Now</b>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
                <br />
                industry. Lorem Ipsum has been the industry's standard dummy{" "}
                <br />
                text ever since the 1500s, when an unknown printer took a galley
                <br />
                of type and scrambled it to make a type specimen book. It has
                <br />
                survived not only five centuries, but also the leap into
                <br />
              </p>
            </Typography> */}
            <Button
              style={{ position: "absolute", bottom: "5%", left: "40px",padding:"5px" }}
              variant="contained"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Play"
            >
             Play
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
