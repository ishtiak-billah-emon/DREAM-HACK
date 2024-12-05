import React, { useEffect } from "react";

import {
  Swiper as SwiperCore,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Navigation, Pagination, Scrollbar]);

const SwiperComponent = () => {
  useEffect(() => {
    new SwiperCore(".swiper", {
      direction: "vertical",
      loop: true,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
    });
  }, []);

  return (
    <div className="swiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide">Slide 1</div>
        <div className="swiper-slide">Slide 2</div>
        <div className="swiper-slide">Slide 3</div>
      </div>

      <div className="swiper-pagination"></div>

      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>

      <div className="swiper-scrollbar"></div>
    </div>
  );
};

export default SwiperComponent;
