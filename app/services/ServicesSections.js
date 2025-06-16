"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PropTypes from "prop-types";
import { Link as ScrollLink, Element } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Controller } from "swiper/modules";
import CheckScreenWidth from "../components/CheckScreenWidth";
import CheckMobile from "../components/CheckMobile";
import useScrollDirection from "../hooks/useScrollDirection";
import BrandMarket from "../components/BrandMarket";
import Tabs from "../components/Tabs";
// Import Swiper React components
export default function ServicesSections() {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  const scrollDirection = useScrollDirection();
  // const scrollOffset = scrollDirection === "down" ? -60 : -80;
  const scrollOffset = -150;
  // const scrollOffset = 0;

  // Function to scroll the active link into view
  const handleSetActive = (to) => {
    const activeLink = document.querySelector(`[data-link="${to}"]`);
    if (activeLink) {
      activeLink.scrollIntoView({
        behavior: "smooth",
        inline: "center", // Ensures the link is horizontally centered
        block: "nearest", // No vertical scrolling (sticky nav stays in place)
      });
    }
  };
  // const sliderRef = useRef(null);
  return (
    <div>
      <section
        className={`section-sticky ${
          scrollDirection === "down" ? "hide" : "show"
        }`}
      >
        <nav className="sticky-nav">
          <ul>
            <li>
              <ScrollLink
                to="section1"
                smooth={true}
                duration={500}
                // offset={-60}
                offset={scrollOffset}
                activeClass="active"
                spy={true}
                onSetActive={handleSetActive}
                data-link="section1"
              >
                Drive More Revenue with Digital Marketing
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="section2"
                smooth={true}
                duration={500}
                // offset={-60}
                offset={scrollOffset}
                activeClass="active"
                spy={true}
                onSetActive={handleSetActive}
                data-link="section2"
              >
                Services We Excel In
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="section3"
                smooth={true}
                duration={500}
                // offset={-60}
                offset={scrollOffset}
                activeClass="active"
                spy={true}
                onSetActive={handleSetActive}
                data-link="section3"
              >
                Impact And Results
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="section4"
                smooth={true}
                duration={500}
                // offset={-60}
                offset={scrollOffset}
                activeClass="active"
                spy={true}
                onSetActive={handleSetActive}
                data-link="section4"
              >
                Our Expert Team
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="section5"
                smooth={true}
                duration={500}
                // offset={-60}
                offset={scrollOffset}
                activeClass="active"
                spy={true}
                onSetActive={handleSetActive}
                data-link="section5"
              >
                Satisfied Clients
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </section>
      <Element name="section1">
        <section className="pad_cmn_blk section-revenue">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="title_blk text-center">
                  <h2>
                    Drive More Revenue with Digital
                    <br /> Marketing
                  </h2>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using &apos;Content here, content here&apos;, making it look
                    like readable English.
                  </p>
                </div>
              </div>
            </div>
            <CheckScreenWidth setWidth={575}>
              <div className="row revenue-card-row gy-4 justify-content-center">
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="revenue-card yellow">
                    <div className="logo">
                      <Image
                        src="/images/yellow-revenue.png"
                        alt=""
                        width={39}
                        height={40}
                      />
                    </div>
                    <h3>Custom CRM Solutions</h3>
                    <p>
                      Is a long established fact that a reader will be
                      distracted by the readable content of a page.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="revenue-card purple">
                    <div className="logo">
                      <Image
                        src="/images/purple-revenue.png"
                        alt=""
                        width={39}
                        height={40}
                      />
                    </div>
                    <h3>Custom CRM Solutions</h3>
                    <p>
                      Is a long established fact that a reader will be
                      distracted by the readable content of a page.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="revenue-card green">
                    <div className="logo">
                      <Image
                        src="/images/green-revenue.png"
                        alt=""
                        width={39}
                        height={40}
                      />
                    </div>
                    <h3>Custom CRM Solutions</h3>
                    <p>
                      Is a long established fact that a reader will be
                      distracted by the readable content of a page.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="revenue-card blue">
                    <div className="logo">
                      <Image
                        src="/images/blue-revenue.png"
                        alt=""
                        width={39}
                        height={40}
                      />
                    </div>
                    <h3>Custom CRM Solutions</h3>
                    <p>
                      Is a long established fact that a reader will be
                      distracted by the readable content of a page.
                    </p>
                  </div>
                </div>
              </div>
            </CheckScreenWidth>
            <CheckMobile setWidth={576}>
              <div className="row revenue-card-row">
                <div className="col">
                  <Swiper slidesPerView={"auto"} spaceBetween={20}>
                    <SwiperSlide style={{ width: "auto" }}>
                      <div className="revenue-card yellow">
                        <div className="logo">
                          <Image
                            src="/images/yellow-revenue.png"
                            alt=""
                            width={39}
                            height={40}
                          />
                        </div>
                        <h3>Custom CRM Solutions</h3>
                        <p>
                          Is a long established fact that a reader will be
                          distracted by the readable content of a page.
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ width: "auto" }}>
                      <div className="revenue-card purple">
                        <div className="logo">
                          <Image
                            src="/images/purple-revenue.png"
                            alt=""
                            width={39}
                            height={40}
                          />
                        </div>
                        <h3>Custom CRM Solutions</h3>
                        <p>
                          Is a long established fact that a reader will be
                          distracted by the readable content of a page.
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ width: "auto" }}>
                      <div className="revenue-card green">
                        <div className="logo">
                          <Image
                            src="/images/green-revenue.png"
                            alt=""
                            width={39}
                            height={40}
                          />
                        </div>
                        <h3>Custom CRM Solutions</h3>
                        <p>
                          Is a long established fact that a reader will be
                          distracted by the readable content of a page.
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ width: "auto" }}>
                      <div className="revenue-card blue">
                        <div className="logo">
                          <Image
                            src="/images/blue-revenue.png"
                            alt=""
                            width={39}
                            height={40}
                          />
                        </div>
                        <h3>Custom CRM Solutions</h3>
                        <p>
                          Is a long established fact that a reader will be
                          distracted by the readable content of a page.
                        </p>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </CheckMobile>
          </div>
        </section>
        {/* </Element> */}
        {/* <Element name="section2"> */}
        <BrandMarket
          title={"The Leader In Digital Marketing"}
          description={
            "The top-rated software and digital marketing firm in the Canada, with more than 200 five-star reviews from past clients"
          }
        />
      </Element>
      <Element name="section2">
        <section className="market_tab_blk pad_cmn_blk">
          <div className="container-fluid">
            <div className="row">
              <CheckScreenWidth setWidth={991}>
                <div className="col-lg-6">
                  <div className="video-container">
                    <video
                      src="/images/home-integrated.mp4"
                      autoPlay={true}
                      loop={true}
                      muted={true}
                    ></video>
                  </div>
                </div>
              </CheckScreenWidth>

              <div className="col-lg-6">
                <div className="title_blk">
                  <h2>
                    An Integrated Team <br></br>for Accelerated Marketing
                  </h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
                <Tabs />
                {/* Note to Backend */}
                {/* In the above Tabs component we need to pass the data to be able to render the tabs and respective small cards */}
                {/* From the home page I got this <Tabs tabsData={pageData.marketing_tab_repeater} /> */}
              </div>
            </div>
          </div>
        </section>
      </Element>
      <Element name="section3">
        <section className="section-impact pad_cmn_blk">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="title_blk text-center">
                  <h2>Impact And Results</h2>
                  <h3>Uncover The Impact of Marketing on Revenue</h3>
                  <p>
                    The top-rated software and digital marketing firm in the
                    Canada, with more than 200 five-star reviews from past
                    clients
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <ul>
                  <li>
                    <h4>100%</h4>
                    <p>Set Up By GWebPro</p>
                  </li>
                  <li>
                    <h4>$500K</h4>
                    <p>Built-in Value</p>
                  </li>
                  <li>
                    <h4>20%</h4>
                    <p>Avg Increase In Roi</p>
                  </li>
                  <li>
                    <h4>1B</h4>
                    <p>Data Points That Drive Decision Making</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="section-impact-slider">
          <div className="container-fluid">
            <div className="row">
              <div className="col"></div>
            </div>
            <div className="row">
              <div className="col position-relative">
                {/* <ImpactSlider sliderRef={sliderRef} /> */}
                <div className="controls">
                  <div className="impact-slider-prev">
                    <i className="fa-regular fa-arrow-left"></i>
                  </div>
                  <div className="impact-slider-next">
                    <i className="fa-regular fa-arrow-right"></i>
                  </div>
                </div>
                <Swiper
                  slidesPerView={"auto"}
                  // pagination={{
                  //   clickable: true,
                  // }}
                  navigation={{
                    prevEl: ".impact-slider-prev", // Use custom class for prev button
                    nextEl: ".impact-slider-next", // Use custom class for next button
                    clickable: true,
                  }}
                  modules={[Navigation]}
                >
                  <SwiperSlide style={{ width: "auto" }}>
                    <div className="impact-slider">
                      <Image
                        src="/images/impact-slider-2.webp"
                        alt=""
                        width={1612}
                        height={547}
                      />
                      <div className="content">
                        <div className="title">
                          <div className="icon">
                            <Image
                              src="/images/blue-revenue.png"
                              alt=""
                              width={40}
                              height={40}
                            />
                          </div>
                          <h2>Monthly Reporting</h2>
                        </div>
                        <p>
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          Latin literature from 45 BC, making it over 2000 years
                          old. Richard McClintock, a Latin professor at
                          Hampden-Sydney College in Virginia, looked up one of
                          the more obscure Latin words, consectetur, from a
                          Lorem Ipsum passage, and going through the cites of
                          the word in classical literature, discovered the
                          undoubtable source.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide style={{ width: "auto" }}>
                    <div className="impact-slider">
                      <Image
                        src="/images/impact-slider-1.webp"
                        alt=""
                        width={1612}
                        height={547}
                      />
                      <div className="content">
                        <div className="title">
                          <div className="icon">
                            <Image
                              src="/images/blue-revenue.png"
                              alt=""
                              width={40}
                              height={40}
                            />
                          </div>
                          <h2>Monthly Reporting</h2>
                        </div>
                        <p>
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          Latin literature from 45 BC, making it over 2000 years
                          old. Richard McClintock, a Latin professor at
                          Hampden-Sydney College in Virginia, looked up one of
                          the more obscure Latin words, consectetur, from a
                          Lorem Ipsum passage, and going through the cites of
                          the word in classical literature, discovered the
                          undoubtable source.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>
      </Element>
      <Element name="section4">
        <section className="section-experts pad_cmn_blk">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="title_blk text-center">
                  <h2>
                    Our <br />
                    Expert Team
                  </h2>
                  <h3>Unmatched Expertise Driving Results</h3>
                </div>
              </div>
            </div>
            <div className="row gy-5">
              <div className="col-lg-6">
                <div className="row row-cols-md-2 row-cols-2 expert-box-row gy-4">
                  <div className="col">
                    <div className="expert-box yellow">
                      <div className="icon">
                        <Image
                          src="/images/track-record.png"
                          alt=""
                          width={64}
                          height={64}
                        />
                      </div>
                      <h4 className="title">28-year</h4>
                      <p>Track Record</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="expert-box purple">
                      <div className="icon">
                        <Image
                          src="/images/likes.png"
                          alt=""
                          width={64}
                          height={64}
                        />
                      </div>
                      <h4 className="title">1,000s</h4>
                      <p>Reviews</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="expert-box green">
                      <div className="icon">
                        <Image
                          src="/images/leads-gen.png"
                          alt=""
                          width={64}
                          height={64}
                        />
                      </div>
                      <h4 className="title">7 million+</h4>
                      <p>Leads Generated</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="expert-box blue">
                      <div className="icon">
                        <Image
                          src="/images/digital-exp.png"
                          alt=""
                          width={64}
                          height={64}
                        />
                      </div>
                      <h4 className="title">500+</h4>
                      <p>Digital Experts</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="technology-used">
                  <h4>Technology Uses</h4>
                  <div className="techs">
                    <ul>
                      <li>
                        <Image
                          src="/images/google-analytics.png"
                          alt=""
                          width={205}
                          height={70}
                        />
                      </li>
                      <li>
                        <Image
                          src="/images/chatgpt.png"
                          alt=""
                          width={205}
                          height={61}
                        />
                      </li>
                      <li>
                        <Image
                          src="/images/semrush.png"
                          alt=""
                          width={205}
                          height={28}
                        />
                      </li>
                      <li>
                        <Image
                          src="/images/reportingninja.png"
                          alt=""
                          width={206}
                          height={34}
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>
      <div className="line-full-width"></div>
      <Element name="section5">
        <section className="client-satisfaction pad_cmn_blk">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="title_blk text-center">
                  <h2>Satisfied Clients</h2>
                  <h3>Proven Results For Clients</h3>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-4">
                <Swiper
                  modules={[Navigation, Pagination, Controller]}
                  slidesPerView={"auto"}
                  spaceBetween={20}
                  navigation={{
                    prevEl: ".custom-prev-button", // Use custom class for prev button
                    nextEl: ".custom-next-button", // Use custom class for next button
                    clickable: true,
                  }}
                  // controller={{ control: controlledSwiper }} // Link to the second Swiper
                  controller={{ control: secondSwiper }} // Link to the second Swiper
                  onSwiper={setFirstSwiper} // Set the first Swiper instance
                  // Responsive breakpoints
                  breakpoints={{
                    768: { slidesPerView: 1 },
                    spaceBetween: 0,
                  }}
                >
                  <SwiperSlide>
                    <div className="client-info">
                      <p>Industry Name</p>
                      <h3>Industry Name</h3>
                      <div className="client">
                        <Image
                          src="/images/gwebpro_client_inspire_paintings.svg"
                          alt=""
                          width={93}
                          height={93}
                        />
                        <h3>Client Name</h3>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="client-info">
                      <p>Industry Name</p>
                      <h3>Industry Name</h3>
                      <div className="client">
                        <Image
                          src="/images/gwebpro_client_inspire_paintings.svg"
                          alt=""
                          width={93}
                          height={93}
                        />
                        <h3>Client Name</h3>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="client-info">
                      <p>Industry Name</p>
                      <h3>Industry Name</h3>
                      <div className="client">
                        <Image
                          src="/images/gwebpro_client_inspire_paintings.svg"
                          alt=""
                          width={93}
                          height={93}
                        />
                        <h3>Client Name</h3>
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
              <div className="col-md-8">
                {/* <div className="client-card-bg"> */}
                <Swiper
                  modules={[Controller]}
                  slidesPerView={"auto"}
                  spaceBetween={20}
                  // controller={{ control: controlledSwiper }} // Link to the first Swiper
                  // onSwiper={setControlledSwiper} // Set the second Swiper as the controlled one
                  controller={{ control: firstSwiper }} // Link to the first Swiper
                  onSwiper={setSecondSwiper} // Set the second Swiper instance
                  // Responsive breakpoints
                  breakpoints={{
                    768: { slidesPerView: 1 },
                    spaceBetween: 0,
                  }}
                >
                  <SwiperSlide>
                    <div className="client-card">
                      <h4>Challenge</h4>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </p>
                      <h4>Solution</h4>
                      <ul>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </li>
                        <li>
                          Integer eget nulla feugiat, pharetra quam at, maximus
                          velit.
                        </li>
                        <li>
                          Duis vel orci congue, porta mauris maximus, dignissim
                          dui.
                        </li>
                      </ul>
                      <div className="result has-btn-grp has-btn-single">
                        <div className="result-loader"></div>
                        <div>
                          <h4>Result</h4>
                          <h5>153% Increase In Lead Conversion</h5>
                          <Link href="/">View Details</Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="client-card">
                      <h4>Challenge</h4>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </p>
                      <h4>Solution</h4>
                      <ul>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </li>
                        <li>
                          Integer eget nulla feugiat, pharetra quam at, maximus
                          velit.
                        </li>
                        <li>
                          Duis vel orci congue, porta mauris maximus, dignissim
                          dui.
                        </li>
                      </ul>
                      <div className="result has-btn-grp has-btn-single">
                        <div className="result-loader"></div>
                        <div>
                          <h4>Result</h4>
                          <h5>153% Increase In Lead Conversion</h5>
                          <Link href="/">View Details</Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="client-card">
                      <h4>Challenge</h4>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </p>
                      <h4>Solution</h4>
                      <ul>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </li>
                        <li>
                          Integer eget nulla feugiat, pharetra quam at, maximus
                          velit.
                        </li>
                        <li>
                          Duis vel orci congue, porta mauris maximus, dignissim
                          dui.
                        </li>
                      </ul>
                      <div className="result has-btn-grp has-btn-single">
                        <div className="result-loader"></div>
                        <div>
                          <h4>Result</h4>
                          <h5>153% Increase In Lead Conversion</h5>
                          <Link href="/">View Details</Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                {/* </div> */}
              </div>
            </div>
          </div>
        </section>
      </Element>
    </div>
  );
}
function ImpactNextArrow({ className, style, onClick }) {
  return (
    <button className={className} style={{ ...style }} onClick={onClick}>
      <i className="fa-regular fa-arrow-right"></i>
    </button>
  );
}
ImpactNextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

function ImpactPrevArrow({ className, style, onClick }) {
  return (
    <button className={className} style={{ ...style }} onClick={onClick}>
      <i className="fa-regular fa-arrow-left"></i>
    </button>
  );
}
ImpactPrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};
