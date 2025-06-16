"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Controller, Autoplay } from "swiper/modules";
import CustomCursorWrapper from "./CustomCursor";
import ScrollButton from "./ScrollButton";
import CheckMobile from "./CheckMobile";
import CheckScreenWidth from "./CheckScreenWidth";
import Link from "next/link";
import Image from "next/image";


export default function HomeBannerSlider({ pageData }) {
  const [activeSlide, setActiveSlide] = useState(0);
  // In HomeBannerSlider component
  const [titleSwiper, setTitleSwiper] = useState(null);
  const [descSwiper, setDescSwiper] = useState(null);

  const bannerContent= pageData.banner_repeater;


  // Set up controller relationship
  // useEffect(() => {
  //   if (titleSwiper && descSwiper) {
  //     titleSwiper.controller.control = descSwiper;
  //     descSwiper.controller.control = titleSwiper;
  //   }
  // }, [titleSwiper, descSwiper]);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  };

  return (
    <>
      <section className="section-home-hero">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-6 ps-md-5 order-2 order-md-1">
              <Swiper
                modules={[Controller, Autoplay]}
                onSwiper={setTitleSwiper}
                controller={{ control: descSwiper }}
                onSlideChange={handleSlideChange}
                autoplay={{
                  delay: 3000, // 3 seconds delay between slides
                  disableOnInteraction: false, // Continue autoplay after user interactions
                  pauseOnMouseEnter: true, // Pause when mouse enters slider
                }}
                autoHeight={true}
                // loop={true}
              >
                {/* <SwiperSlide>
                  <p>1</p>
                  <h1
                    dangerouslySetInnerHTML={{
                      __html: pageData.banner_title,
                    }}
                  ></h1>
                </SwiperSlide>
                <SwiperSlide>
                  <p>2</p>
                  <h1
                    dangerouslySetInnerHTML={{
                      __html: pageData.banner_title,
                    }}
                  ></h1>
                </SwiperSlide>
                <SwiperSlide>
                  <p>3</p>
                  <h1
                    dangerouslySetInnerHTML={{
                      __html: pageData.banner_title,
                    }}
                  ></h1>
                </SwiperSlide> */}
                {bannerContent.map((e, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <h1
                        dangerouslySetInnerHTML={{
                          __html: e.banner_repeater_title,
                        }}
                      ></h1>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <div className="next-section-btn">
                <ScrollButton sectionId="leader-in-marketing" />
                <Swiper
                  modules={[Controller]}
                  onSwiper={setDescSwiper}
                  controller={{ control: titleSwiper }}
                  autoHeight={true}
                >
                  {/* <SwiperSlide>
                    <p>{pageData.banner_description}</p>
                  </SwiperSlide>
                  <SwiperSlide>
                    <p>{pageData.banner_description}</p>
                  </SwiperSlide>
                  <SwiperSlide>
                    <p>{pageData.banner_description}</p>
                  </SwiperSlide> */}

                  {bannerContent.map((e, i) => {
                    return (
                      <SwiperSlide key={i}>
                        <p>{e.banner_repeater_description}</p>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <CheckMobile setWidth={768}>
                  <Link
                    className="custom-cursor active position-static"
                    style={{ transform: "unset" }}
                    href={bannerContent[activeSlide].banner_repeater_link}
                  >
                    {/* "/images/custom-cursor-text.svg" */}
                    <Image
                      src={bannerContent[activeSlide].banner_repeater_cursor_img}
                      alt=""
                      width={180}
                      height={180}
                    />
                  </Link>
                </CheckMobile>
              </div>
              <div className="widgets-container">
                {pageData.banner_clutch_data ? (
                  pageData.banner_clutch_data.map((item, i) => (
                    <div className="widget" key={i}>
                      <iframe
                        width="100%"
                        height="100%"
                        src={item.clutch_iframe_link}
                        title={item.clutch_iframe_title}
                      ></iframe>
                    </div>
                  ))
                ) : (
                  <span></span>
                )}
              </div>
            </div>
            <div className="col-md-6 pe-md-5 order-1 order-md-2">
              <CheckScreenWidth setWidth={767}>
                <CustomCursorWrapper
                  cursorText={bannerContent[activeSlide].banner_repeater_cursor_img}
                >
                  <a href={bannerContent[activeSlide].banner_repeater_link}>
                    <div className="video-container">
                      <video
                        src={
                          pageData.banner_video
                            ? pageData.banner_video
                            : undefined
                        }
                        autoPlay={true}
                        loop={true}
                        muted={true}
                      ></video>
                    </div>
                  </a>
                </CustomCursorWrapper>
              </CheckScreenWidth>
              <CheckMobile setWidth={768}>
                {/* <CustomCursorWrapper
                  cursorText={slidesData[activeSlide].cursorText}
                >
                  <a href={slidesData[activeSlide].linkUrl}> */}
                <div className="video-container">
                  <video
                    src={
                      pageData.banner_video ? pageData.banner_video : undefined
                    }
                    autoPlay={true}
                    loop={true}
                    muted={true}
                  ></video>
                </div>
                {/* </a>
                </CustomCursorWrapper> */}
              </CheckMobile>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
