"use client";
import AccordionTypeOne from "../components/AccordionTypeOne";
import CheckScreenWidth from "../components/CheckScreenWidth";
import useIsMobile from "../components/useIsMobile";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Controller } from "swiper/modules";
import "swiper/css/bundle";
import { useState } from "react";
import AccordionTypeTwo from "../components/AccordionTypeTwo";
import Link from "next/link";
import Image from "next/image";

export default function ServicesLevelTwoSections() {
  const [secondSwiper, setSecondSwiper] = useState(null);
  const [firstSwiper, setFirstSwiper] = useState(null);
  return (
    <>
      <section className="services-banner inner-page-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col text-center">
              <div className="banner-content">
                <div className="position-relative title_blk center">
                  <h1>
                    Best <span>Development Company</span> In Canada
                  </h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy
                  </p>
                </div>
                <CheckScreenWidth setWidth={991}>
                  <div className="video-container">
                    <video
                      src="/images/services-banner.mp4"
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
      <section className="section-services-how-operate pad_cmn_blk">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="title_blk text-center center">
                <h2>How We Operate</h2>
                <p>
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using
                  &apos;Content here, content here&apos;, making it look like
                  readable English.
                </p>
              </div>
            </div>
          </div>
          <div className="row gy-4">
            <div className="col-md-7">
              {/* <div className="accordion accordion_type_one">
                <div className="accordion_item">
                  <div className="accordion_title">
                    <h3>1. Onboarding</h3>
                  </div>
                  <div className="collapsible">
                    <div className="hidden">
                      <div className="accordion_content">
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don&apos;t look even slightly believable. If you
                          are going to use a passage of Lorem Ipsum, you need to
                          be sure there isn&apos;t anything embarrassing hidden
                          in the middle of text.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion_item">
                  <div className="accordion_title">
                    <h3>1. Onboarding</h3>
                  </div>
                  <div className="collapsible">
                    <div className="hidden">
                      <div className="accordion_content">
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don&apos;t look even slightly believable. If you
                          are going to use a passage of Lorem Ipsum, you need to
                          be sure there isn&apos;t anything embarrassing hidden
                          in the middle of text.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <AccordionTypeOne data={accordionData} />
            </div>

            <div className="col-md-5">
              <div className="video-container has-cta">
                <video
                  src="/images/services_level_two_accordion.mp4"
                  autoPlay
                  muted
                  loop
                ></video>
                <Link href={"/get-a-quote"}>Get A Proposal</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="line faq-block"></div>
      <section className="section-what-u-get pad_cmn_blk">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="title_blk text-center center">
                <h2>What You Will Get</h2>
                <p>
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary, making this the first true
                  generator on the Internet. It uses a dictionary of over 200
                  Latin words, combined with a handful of model sentence
                  structures, to generate Lorem Ipsum which looks reasonable.
                </p>
              </div>
            </div>
          </div>
          <div className="row gy-4">
            {useIsMobile(992) ? (
              <div className="col slider-card-you_get">
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
                      <p className="title">Technological Advancement</p>
                      <p className="text">
                        The standard chunk of Lorem Ipsum used since the 1500s
                        is reproduced below for those interested. Sections
                        1.10.32 and 1.10.33 from &quot;de Finibus Bonorum et
                        Malorum&quot; by Cicero are also reproduced in their
                        exact original form, accompanied by English versions
                        from the 1914 translation by H. Rackham.
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
                      <p className="title">Technological Advancement</p>
                      <p className="text">
                        The standard chunk of Lorem Ipsum used since the 1500s
                        is reproduced below for those interested. Sections
                        1.10.32 and 1.10.33 from &quot;de Finibus Bonorum et
                        Malorum&quot; by Cicero are also reproduced in their
                        exact original form, accompanied by English versions
                        from the 1914 translation by H. Rackham.
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
                      <p className="title">Technological Advancement</p>
                      <p className="text">
                        The standard chunk of Lorem Ipsum used since the 1500s
                        is reproduced below for those interested. Sections
                        1.10.32 and 1.10.33 from &quot;de Finibus Bonorum et
                        Malorum&quot; by Cicero are also reproduced in their
                        exact original form, accompanied by English versions
                        from the 1914 translation by H. Rackham.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card-you_get">
                      <div className="icon">
                        <Image
                          src="/images/workstation_blue.png"
                          alt=""
                          width={84}
                          height={84}
                        />
                      </div>
                      <p className="title">Technological Advancement</p>
                      <p className="text">
                        The standard chunk of Lorem Ipsum used since the 1500s
                        is reproduced below for those interested. Sections
                        1.10.32 and 1.10.33 from &quot;de Finibus Bonorum et
                        Malorum&quot; by Cicero are also reproduced in their
                        exact original form, accompanied by English versions
                        from the 1914 translation by H. Rackham.
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            ) : (
              <>
                <div className="col-6">
                  <div className="card-you_get">
                    <div className="icon">
                      <Image
                        src="/images/workstation_yellow.png"
                        alt=""
                        width={84}
                        height={84}
                      />
                    </div>
                    <p className="title">Technological Advancement</p>
                    <p className="text">
                      The standard chunk of Lorem Ipsum used since the 1500s is
                      reproduced below for those interested. Sections 1.10.32
                      and 1.10.33 from &quot;de Finibus Bonorum et Malorum&quot;
                      by Cicero are also reproduced in their exact original
                      form, accompanied by English versions from the 1914
                      translation by H. Rackham.
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card-you_get">
                    <div className="icon">
                      <Image
                        src="/images/workstation_green.png"
                        alt=""
                        width={84}
                        height={84}
                      />
                    </div>
                    <p className="title">Technological Advancement</p>
                    <p className="text">
                      The standard chunk of Lorem Ipsum used since the 1500s is
                      reproduced below for those interested. Sections 1.10.32
                      and 1.10.33 from &quot;de Finibus Bonorum et Malorum&quot;
                      by Cicero are also reproduced in their exact original
                      form, accompanied by English versions from the 1914
                      translation by H. Rackham.
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card-you_get">
                    <div className="icon">
                      <Image
                        src="/images/workstation_purple.png"
                        alt=""
                        width={84}
                        height={84}
                      />
                    </div>
                    <p className="title">Technological Advancement</p>
                    <p className="text">
                      The standard chunk of Lorem Ipsum used since the 1500s is
                      reproduced below for those interested. Sections 1.10.32
                      and 1.10.33 from &quot;de Finibus Bonorum et Malorum&quot;
                      by Cicero are also reproduced in their exact original
                      form, accompanied by English versions from the 1914
                      translation by H. Rackham.
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card-you_get">
                    <div className="icon">
                      <Image
                        src="/images/workstation_blue.png"
                        alt=""
                        width={84}
                        height={84}
                      />
                    </div>
                    <p className="title">Technological Advancement</p>
                    <p className="text">
                      The standard chunk of Lorem Ipsum used since the 1500s is
                      reproduced below for those interested. Sections 1.10.32
                      and 1.10.33 from &quot;de Finibus Bonorum et Malorum&quot;
                      by Cicero are also reproduced in their exact original
                      form, accompanied by English versions from the 1914
                      translation by H. Rackham.
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      <section className="section-what-u-want pad_cmn_blk">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="title_blk text-center center">
                <h2>
                  Want Something Specific <br />
                  For Our List Of Development Services?
                </h2>
                <p>Select one that that suits you</p>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col service-slider"> */}

          {/* </div>
          </div> */}
        </div>
        <div className="service-slider">
          <Swiper slidesPerView={"auto"}>
            <SwiperSlide>
              <Link href="/">
                <div className="card_service">
                  <Image
                    src="/images/digital-experience-development.png"
                    alt=""
                    width="96"
                    height="96"
                  />
                  <div className="title">Digital Experience Development</div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/">
                <div className="card_service">
                  <Image
                    src="/images/ecommerce.png"
                    alt=""
                    width="96"
                    height="96"
                  />
                  <div className="title">Ecommerce Development</div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/">
                <div className="card_service">
                  <Image
                    src="/images/website-development.png"
                    alt=""
                    width="96"
                    height="96"
                  />
                  <div className="title">Website Development</div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/">
                <div className="card_service">
                  <Image
                    src="/images/mobile-app.png"
                    alt=""
                    width="96"
                    height="96"
                  />
                  <div className="title">Mobile App Development</div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/">
                <div className="card_service">
                  <Image
                    src="/images/web-infrastructure.png"
                    alt=""
                    width="96"
                    height="96"
                  />
                  <div className="title">Web Infrastructure & Maintenance</div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/">
                <div className="card_service">
                  <Image
                    src="/images/content-management.png"
                    alt=""
                    width="96"
                    height="96"
                  />
                  <div className="title">Content Management Systems</div>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="cta-dark-bg pad_cmn_blk">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="title_blk text-white has-btn-grp has-btn-single">
                <h2>
                  Confused? <br />
                  <span>Connect For Free Consultation</span>
                </h2>
                <Link href="/">Get In Touch</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="client-testimonials pad_cmn_blk">
        <div className="container">
          <div className="row">
            <div className="offset-md-4 col-md-8">
              <div className="title_blk">
                <h2>
                  Client
                  <br />
                  Testimonials
                </h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-4 order-2 order-md-1">
              <Swiper
                modules={[Navigation, Pagination, Controller]}
                slidesPerView={"auto"}
                navigation={{
                  prevEl: ".custom-prev-button", // Use custom class for prev button
                  nextEl: ".custom-next-button", // Use custom class for next button
                  clickable: true,
                }}
                // controller={{ control: controlledSwiper }} // Link to the second Swiper
                controller={{ control: secondSwiper }} // Link to the second Swiper
                onSwiper={setFirstSwiper} // Set the first Swiper instance
                breakpoints={{ 575: { slidesPerView: 1 } }}
              >
                <SwiperSlide>
                  <div className="client-info">
                    <div className="client">
                      <Image
                        src="/images/gwebpro_client_inspire_paintings.svg"
                        alt=""
                        width={93}
                        height={93}
                      />
                      <h3>Client Name</h3>
                      <p>Industry Name</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client-info">
                    <div className="client">
                      <Image
                        src="/images/gwebpro_client_inspire_paintings.svg"
                        alt=""
                        width={93}
                        height={93}
                      />
                      <h3>Client Name</h3>
                      <p>Industry Name</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client-info">
                    <div className="client">
                      <Image
                        src="/images/gwebpro_client_inspire_paintings.svg"
                        alt=""
                        width={93}
                        height={93}
                      />
                      <h3>Client Name</h3>
                      <p>Industry Name</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="controls">
                <div className="custom-prev-button">
                  <i className="fa-regular fa-arrow-left"></i>
                </div>
                <div className="custom-next-button">
                  <i className="fa-regular fa-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="col-md-8 order-1 order-md-2">
              {/* client-card-bg */}
              <div className="">
                <Swiper
                  modules={[Controller]}
                  slidesPerView={"auto"}
                  // controller={{ control: controlledSwiper }} // Link to the first Swiper
                  // onSwiper={setControlledSwiper} // Set the second Swiper as the controlled one
                  controller={{ control: firstSwiper }} // Link to the first Swiper
                  onSwiper={setSecondSwiper} // Set the second Swiper instance
                  breakpoints={{ 575: { slidesPerView: 1 } }}
                >
                  <SwiperSlide>
                    <div className="client-card">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don&apos;t look even slightly believable.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="client-card">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don&apos;t look even slightly believable.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="client-card">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don&apos;t look even slightly believable.
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pad_cmn_blk section-faq">
        <div className="container">
          <div className="row gy-4">
            {/* <CheckScreenWidth setWidth={767}> */}
            <div className="col-md-5">
              <div className="video-container">
                <video src="/images/faq_video.mp4" autoPlay muted loop></video>
              </div>
            </div>
            {/* </CheckScreenWidth> */}
            <div className="col-md-6 offset-lg-1">
              <div className="title_blk">
                <h2>FAQ</h2>
              </div>
              <AccordionTypeTwo data={accordionData} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
const accordionData = [
  {
    title: "Lorem ipsum dolor sit amet consectetur?",
    content:
      "<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>",
  },
  {
    title: "Lorem ipsum dolor sit amet?",
    content:
      "<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur Lorem ipsum?",
    content:
      "<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>",
  },
  {
    title: "Lorem ipsum dolor sit?",
    content:
      "<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>",
  },
  {
    title: "Lorem ipsum dolor?",
    content:
      "<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>",
  },
  {
    title: "Lorem ipsum dolor sit amet?",
    content:
      "<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>",
  },
];
