import Image from "next/image";
import Link from "next/link";

// "use client";
// import { useRef, useState } from "react";

import CheckMobile from "../components/CheckMobile";
import CheckScreenWidth from "../components/CheckScreenWidth";
import BrandMarket from "../components/BrandMarket";
import { LogoGwebproLetterG } from "../components/SVG";
import SectionPromiseSlider from "./SectionPromiseSlider";
import AboutPageVideoPlayer from "./VideoPlayer";

import apiService from "../apiServices/apiService"; // Import the service

export default async function About() {
  // const [isPlaying, setIsPlaying] = useState(false);
  // const videoRef = useRef(null); // Reference to the video element
  // function handlePlay(e) {
  //   // console.log(e);
  //   // videoRef.current.play();
  //   // setIsPlaying(true);
  //   e.preventDefault();
  //   if (videoRef.current) {
  //     // Check if videoRef.current exists
  //     videoRef.current.play();
  //     setIsPlaying(true);
  //   } else {
  //     console.error("Video element not found.");
  //   }
  // }

  //fetch page data
  const data = await apiService.getPagedata("wp/v2/pages/133");
  const pageData = data.acf;

  return (
    <>
      <section className="services-banner inner-page-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col text-center">
              <div className="banner-content">
                <div className="position-relative title_blk">
                  <h1
                    dangerouslySetInnerHTML={{
                      __html: pageData.about_banner_title,
                    }}
                  ></h1>
                </div>
                <CheckScreenWidth setWidth={991}>
                  <div className="video-container">
                    <video
                      src={pageData.banner_bg_video}
                      autoPlay
                      muted
                      loop
                    ></video>
                  </div>
                </CheckScreenWidth>
                <div className="scroll"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home_abt about_page pad_cmn_blk">
        <div className="container">
          <div className="row gy-4">
            {/* <CheckScreenWidth setWidth={991}> */}
            <div className="col-lg-5">
              <div className="gwebpro-logo">
                <video src={pageData.logo_bg_video} autoPlay muted loop></video>
                <LogoGwebproLetterG />
              </div>
            </div>
            {/* </CheckScreenWidth> */}
            <div className="col-lg-6 offset-xl-1">
              <div className="title_blk">
                <h2
                  dangerouslySetInnerHTML={{
                    __html: pageData.about_section_title,
                  }}
                ></h2>
              </div>
              <div className="title_blk">
                <p
                  dangerouslySetInnerHTML={{
                    __html: pageData.about_section_content,
                  }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="google-ranking pad_cmn_blk">
        <div className="container">
          <div className="row gy-3">
            <div className="col-md-6">
              <div className="title_blk">
                <div className="img">
                  <Image
                    src={pageData.google_ranking_logo.url}
                    alt={pageData.google_ranking_logo.alt}
                    width={241}
                    height={105}
                  />
                </div>
                <h2
                  dangerouslySetInnerHTML={{
                    __html: pageData.google_ranking_title,
                  }}
                ></h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: pageData.google_ranking_description,
                  }}
                ></p>
              </div>
            </div>
            <div className="col-md-6">
              <Image
                src={pageData.right_side_image.url}
                alt={pageData.right_side_image.alt}
                width={793}
                height={411}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="about_director pad_cmn_blk">
        <div className="container">
          <div className="row align-items-center gx-md-3 gx-lg-4 gx-xl-5 gy-4">
            <div className="col-lg-5">
              <div className="video-container">
                {/* onClick={handlePlay} */}
                {/* {!isPlaying && (
                  <Image
                    src="/images/video_play_btn_blue.svg"
                    alt=""
                    width={85}
                    height={85}
                  />
                )} */}
                {/* <video
                  src="/images/sample-video.mp4"
                  poster="/images/video_poster.png"
                  preload="none"
                  // controls={isPlaying}
                  // ref={videoRef}
                ></video> */}
                <AboutPageVideoPlayer
                  goal_video_thumbnail={pageData.goal_video_thumbnail}
                  goal_video={pageData.goal_video}
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="title_blk">
                <h2>{pageData.heading_line_1}</h2>
                <Image
                  src={pageData.goal_logo.url}
                  alt={pageData.goal_logo.alt}
                  width={345}
                  height={97}
                />
                <h2>{pageData.heading_line_2}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pad_cmn_blk cta_dark">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="title_blk has-btn-grp has-dark-bg">
                <h2>{pageData.focus_title}</h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: pageData.focus_description,
                  }}
                ></p>
                <Link href={pageData.focus_button_1_link}>
                  {pageData.focus_button_1_title}
                </Link>
                <Link href={pageData.focus_button_2_link}>
                  {pageData.focus_button_2_title}
                </Link>
              </div>
              {/* <div className="btn-group"></div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="pad_cmn_blk section-accomplishment">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="title_blk">
                <h2
                  dangerouslySetInnerHTML={{
                    __html: pageData.left_side_title,
                  }}
                ></h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: pageData.left_side_content,
                  }}
                ></p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="title_blk">
                <h2
                  dangerouslySetInnerHTML={{
                    __html: pageData.right_side_title,
                  }}
                ></h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: pageData.right_side_content,
                  }}
                ></p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="accomplishments">
                {pageData.partner_logo_list.map((tab, i) => (
                  <div className="img" key={i}>
                    <img
                      src={tab.partner_logo.url}
                      alt={tab.partner_logo.alt}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-industry-leadership pad_cmn_blk">
        <div className="container">
          <div className="row">
            <div className="col-md-5 position-relative">
              <div className="floating-img">
                <Image
                  src={pageData.photo_bdm}
                  alt=""
                  width={622}
                  height={696}
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="title_blk">
                <h2
                  dangerouslySetInnerHTML={{
                    __html: pageData.title_bdm,
                  }}
                ></h2>
              </div>
              <div
                className="title_blk"
                dangerouslySetInnerHTML={{
                  __html: pageData.description_bdm,
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      <section className="pad_cmn_blk section-promise">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="title_blk center text-center">
                <h2>{pageData.our_promise_heading}</h2>
              </div>
            </div>
          </div>
          <CheckScreenWidth setWidth={991}>
            <div className="row gy-4">
              {pageData.promise_repeater.map((item, k) => (
                <div className="col-md-6 col-lg-4" key={k}>
                  <div className="card-you_get">
                    <div className="icon">
                      <Image
                        src={item.promise_icon.url}
                        width={84}
                        height={84}
                        alt={item.promise_icon.alt}
                      />
                    </div>
                    <p className="title">{item.promise_title}</p>
                    <p className="text">{item.promise_description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CheckScreenWidth>
          <CheckMobile setWidth={992}>
            {/* <div className="row">
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
                        Lorem Ipsum has been the industry&apos;s standard dummy
                        text ever since the 1500s, when an unknown printer took
                        a galley of type and scrambled it to make a type
                        specimen book.
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
                        Lorem Ipsum has been the industry&apos;s standard dummy
                        text ever since the 1500s, when an unknown printer took
                        a galley of type and scrambled it to make a type
                        specimen book.{" "}
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
                        Lorem Ipsum has been the industry&apos;s standard dummy
                        text ever since the 1500s, when an unknown printer took
                        a galley of type and scrambled it to make a type
                        specimen book.
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div> */}
            <SectionPromiseSlider />
          </CheckMobile>
        </div>
      </section>
      <div className="about-partners">
        <BrandMarket
          title="The Leader In Digital Marketing"
          description="The top-rated software and digital marketing firm in the Canada, with more than 200 five-star reviews from past clients"
        />
      </div>
      <section className="featured-in pad_cmn_blk">
        <div className="container-fluid">
          <div className="row">
            <div className="col featured-in-col">
              <div className="title_blk text-center">
                <h2>{pageData.featured_in_heading}</h2>
              </div>
              <div className="featured-in-brands">
                {pageData.featured_in_repeater.map((row, l) => (
                  <div className="brand-logo" key={l}>
                    <img
                      src={row.logo_featured_id.url}
                      alt={row.logo_featured_id.alt}
                    />
                  </div>
                ))}

                {/* <div className="brand-logo">
                  <Image
                    src="/images/huffington-post.png"
                    alt=""
                    width={152}
                    height={45}
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    src="/images/engadget.png"
                    alt=""
                    width={117}
                    height={49}
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    src="/images/entrepreneur.png"
                    alt=""
                    width={148}
                    height={56}
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    src="/images/forbes.png"
                    alt=""
                    width={118}
                    height={31}
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    src="/images/blogto.png"
                    alt=""
                    width={111}
                    height={33}
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    src="/images/thestar.png"
                    alt=""
                    width={182}
                    height={28}
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services-cta pad_cmn_blk">
        <div className="container">
          <div className="row">
            <div className="col has-btn-grp has-btn-single">
              <p>Service With US</p>
              <h2>{pageData.heading_service_with}</h2>
              <Link href={pageData.button_link_service_with} target="_blank">
                {pageData.button_title_service_with}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
