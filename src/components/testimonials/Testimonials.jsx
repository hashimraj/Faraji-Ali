import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "The experience was smooth and highly professional. The developer delivered a modern, fully responsive website that aligned perfectly with my brand’s goals. The attention to detail and understanding of user experience truly set the work apart.",
  },
  {
    avatar: AVTR2,
    name: "Shatta Wale",
    review:
      "I needed graphics and brand identity for my startup, and the results exceeded expectations. The creativity, design precision, and fast turnaround were exceptional. I highly recommend this service for polished and professional design work.",
  },
  {
    avatar: AVTR3,
    name: "Kwame Despite",
    review:
      "I requested a website revamp, and the outcome was outstanding. Not only was the design improved, but the performance and user experience were also enhanced. Very professional and technically sound.",
  },
  {
    avatar: AVTR4,
    name: "Wamboye Derrick",
    review:
      "Both the web development and graphic design for my business launch were handled with excellence. The final product was sleek, on-brand, and delivered right on schedule. A perfect blend of design and functionality.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules 
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
