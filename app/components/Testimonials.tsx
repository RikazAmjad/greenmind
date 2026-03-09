"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      name: "John Doe",
      role: "Youtuber",
      rating: 4.5,
      avatar: "/sara.svg"
    },
    {
      id: 2,
      text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      name: "Jane Doe",
      role: "Vlogger",
      rating: 4.8,
      avatar: "/John.svg"
    },
    {
      id: 3,
      text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      name: "Alex Doe",
      role: "Blogger",
      rating: 5.0,
      avatar: "/sara.svg"
    },
    {
      id: 4,
      text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      name: "Sarah Smith",
      role: "Designer",
      rating: 4.9,
      avatar: "/John.svg"
    },
  ];

  return (
    <section className="max-w-[1440px] w-full py-24 overflow-hidden" id="testimonials-section">
      <div className="max-w-[1248px] mx-auto">

        <style>{`
          .swiper-custom-pagination .swiper-pagination-bullet {
            width: 14px !important;
            height: 6px !important;
            background-color: #D9D9D9 !important;
            border-radius: 9999px !important;
            opacity: 1 !important;
            transition: all 0.3s ease !important;
            margin: 0 !important;
          }
          .swiper-custom-pagination .swiper-pagination-bullet-active {
            width: 44px !important;
            background-color: #C1DCDC !important;
          }
        `}</style>

        {/* Header row: title + pagination dots */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <h2 className="testimonials-title text-[28px] sm:text-[32px] md:text-[40px] font-[800] leading-[1.2] text-[#0b0c10] max-w-[450px]">
            What customers say about GREEMIND?
          </h2>
          <div className="swiper-custom-pagination flex items-center justify-end gap-2" />
        </div>

        {/* Swiper wrapper — extra bottom padding so portrait image overflow is visible */}
        <div className="w-full relative mt-8" style={{ paddingBottom: '80px' }}>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            speed={800}
            breakpoints={{
              768: { slidesPerView: 1.15 },
              1024: { slidesPerView: 1.35 }
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              el: '.swiper-custom-pagination',
            }}
            className="!overflow-visible testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="!h-auto cursor-grab">
                {({ isActive }) => (
                  <div
                    className={`bg-[#c1dcdc] rounded-[24px] transition-all duration-500 origin-left overflow-visible ${
                      isActive
                        ? 'scale-100 opacity-100'
                        : 'scale-[0.93] opacity-55'
                    }`}
                  >
                    {/* Top section: testimonial text */}
                    <div className="px-8 md:px-10 pt-8 md:pt-10 pb-10 md:pb-12">
                      <p className="text-[#1E1E1E99] text-[15px] md:text-[17px] font-[500] leading-[1.8]">
                        {testimonial.text}
                      </p>
                    </div>

                    {/* Bottom bar */}
                    <div className="flex items-end justify-between px-6 md:px-8">

                      {/* Left: quote icon + portrait (overflows bottom) + name & role */}
                      <div className="flex items-start gap-3">
                        {/* Quote mark + portrait stacked at bottom */}
                        <div className="relative flex items-end" style={{ height: '130px' }}>
                          {/* Big quote " */}
                          <Image src="/quote.png" alt="Quote" width={48} height={41} className="absolute top-0 left-0 z-0"/>
                          
                          {/* Portrait image — overflows the card at bottom via translate */}
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            width={100}
                            height={205}
                            className="relative z-10 object-cover object-bottom"
                            style={{
                              width: '100px',
                              height: '180px',
                            }}
                          />
                        </div>

                        {/* Name + role next to portrait */}
                        <div className="flex flex-col justify-center mb-4">
                          <span className="font-[800] text-[16px] md:text-[18px] text-[#0b0c10] leading-[1.2] mb-[3px]">
                            {testimonial.name}
                          </span>
                          <span className="text-[#1E1E1E80] font-[500] text-[13px]">
                            {testimonial.role}
                          </span>
                        </div>
                      </div>

                      {/* Right: star rating */}
                      <div className="flex items-center gap-2 mb-5">
                        <Star className="w-5 h-5 fill-[#0b0c10] text-[#0b0c10]" />
                        <span className="font-[800] text-[#0b0c10] text-[17px] md:text-[18px]">
                          {testimonial.rating}
                        </span>
                      </div>

                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
