import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination, Navigation, Scrollbar } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

function Card({ projectCards, titulos }) {
  return (
    <div className="projects_container">
      <h2 className="titles border-bottom">{titulos}</h2>
      <Swiper
        modules={[Pagination, Scrollbar, Navigation]}
        spaceBetween={1}
        slidesPerView={1}
        navigation
        scrollbar={{ draggable: true }}
        pagination={{ clickable: true }}
        className="swiper_container"
      >
        {projectCards.map((card) => (
          <SwiperSlide className="card-body" key={card.id}>
            <div className="card col" style={{ width: "18rem" }}>
                <img
                  src={card.img}
                  className="card-img card_img"
                  alt="Group Project Example"
                />
              <h3 className="card-title">{card.name}</h3>
              <small className="card-text">{card.description}</small>
              <div>
                <a
                  className="btn"
                  href={card.href}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  Open{" "}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Card;
