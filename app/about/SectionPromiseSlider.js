"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function SectionPromiseSlider() {
  return (
    <div className="row">
      <div className="col swiper-slider-promise">
        <Swiper slidesPerView={"auto"}>
          <SwiperSlide>
            <div className="card-you_get">
              <div className="icon">
                <Image
                  src="/images/workstation_yellow.png"
                  alt=""
                  width={84}
                  height={84}
                />
              </div>
              <p className="title">Results</p>
              <p className="text">
                Lorem Ipsum has been the industry&apos;s standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-you_get">
              <div className="icon">
                <Image
                  src="/images/workstation_green.png"
                  alt=""
                  width={84}
                  height={84}
                />
              </div>
              <p className="title">Results</p>
              <p className="text">
                Lorem Ipsum has been the industry&apos;s standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-you_get">
              <div className="icon">
                <Image
                  src="/images/workstation_purple.png"
                  alt=""
                  width={84}
                  height={84}
                />
              </div>
              <p className="title">Results</p>
              <p className="text">
                Lorem Ipsum has been the industry&apos;s standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
