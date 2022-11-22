import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
// import "swiper/css/pagination";
import { Pagination } from "swiper";

function Card({ projectCards, titulos }) {
  return (
    <div className="container">
      <h2 className="titles border-bottom">{titulos}</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={10}
        slidesPerView={3}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {projectCards.map((card) => (
          <SwiperSlide className="card-body" key={card.id}>
            <div className="card col" style={{ width: "18rem" }}>
              <img
                src={card.img}
                className="card-img"
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
