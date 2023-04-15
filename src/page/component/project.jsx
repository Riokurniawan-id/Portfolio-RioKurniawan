import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import project1 from "../asset/img/Project-img/project-img1.png";
import project2 from "../asset/img/Project-img/project-img1.png";
import project3 from "../asset/img/Project-img/project-img1.png";
import project4 from "../asset/img/Project-img/project-img1.png";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const listProject = [project1, project2, project3, project4];

const Project = () => {
  const ProjectValue = () => {
    return listProject.map((project, index) => (
      <SwiperSlide key={index}>
        <img src={project} alt={`Project ${index + 1}`} />
      </SwiperSlide>
    ));
  };

  return (
    <section className="Project-saya" id="Project">
      <h1 className="judul">
        Project <br />
        Saya
      </h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={2}
        slidesPerGroup={2}
        loop={true}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
      >
        {ProjectValue()}
        <div className="swiper-pagination"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </section>
  );
};

export default Project;
