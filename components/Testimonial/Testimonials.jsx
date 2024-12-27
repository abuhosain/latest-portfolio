import { useCallback, useState } from "react";

import { ImQuotesLeft } from "react-icons/im";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

// import swipper
import { Swiper, SwiperSlide } from "swiper/react";
// swipper styles
import "swiper/css";
import "swiper/css/pagination";
//  required module
import { AutoPlay } from "swiper/modules";

import AnimatedText from "../AnimatedText";
import Image from "next/image";

// import sample data for testimoinials
const slides = [
  {
    img: "/assets/testimonial/img-1.png",
    name: "John Doe",
    message:
      "This service is amazing. I am very satisfied with the quality of the service. I will recommend this to my friends.",
  },
  {
    img: "/assets/testimonial/img-2.png",
    name: "Jonny Doe",
    message:
      "He is a great guy. His work is amazing. I am very satisfied with the quality of the service. I will recommend this to my friends.",
  },
  {
    img: "/assets/testimonial/img-3.png",
    name: "Yash Doe",
    message:
      "Highly recommended. I am very satisfied with the quality of the service. I will recommend this to my friends.",
  },
  {
    img: "/assets/testimonial/img-4.png",
    name: "Marry Berry",
    message:
      "Must try this service. I am very satisfied with the quality of the service. I will recommend this to my friends.",
  },
  {
    img: "/assets/testimonial/img-5.png",
    name: "Leo Max",
    message:
      "The service is amazing. You should try this service. I am very satisfied with the quality of the service. I will recommend this to my friends.",
  },
];

const Testimonials = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePresvious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <div className="py-24 overflow-hidden ">
      <div className="container mx-auto">
        <AnimatedText
          text="What Clients Say??"
          textStyles="h2 mb-[30px] xl:mb-[60px] text-center"
        />
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        onSwiper={setSwiperRef}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
        className="w-full h-[400px] xl:h-[500px]"
      >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide key={index} className="h-full select-none">
              <div className="w-full h-full flex items-end">
                <div className="flex items-end rounded-2xl overflow-hidden">
                  <Image
                    src={slide.img}
                    alt={slide.name}
                    fill
                    quality={100}
                    className="object-center object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
