"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/bundle";
import CheckScreenWidth from "../components/CheckScreenWidth";
import FixedScrolling from "../components/FixedScrolling";
import Link from "next/link";
import NavLink from "../components/NavLink";
import { PricingListItemCheck } from "../components/SVG";
import Image from "next/image";
import DiscoverScroll from "../components/DiscoverScroll";
import HomeDiscoverSlider from "../components/HomeDiscoverSlider";
import CheckMobile from "../components/CheckMobile";

export default function ServicesLevelThreeSections({ pageData }) {
  return (
    <>
      <section className="service-level-3-banner">
        <div className="container-fluid">
          <div className="row gy-4">
            <div className="col">
              <div className="title_blk has-btn-grp has-btn-single">
                <h1>
                  Capture More Revenue <br />
                  With the Best Local SEO Services
                </h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <Link href="/">Get a Consultation</Link>
              </div>
            </div>
            {/* <CheckScreenWidth setWidth={991}> */}
            <div className="col-md-6">
              <div className="video-container has-img">
                <Image
                  src="/images/services-level-three-gwebpro-banner.png"
                  alt=""
                  width={346}
                  height={343}
                />
                <video
                  src="/images/service-level-3-banner.mp4"
                  autoPlay
                  muted
                  loop
                ></video>
              </div>
            </div>
            {/* </CheckScreenWidth> */}
          </div>
        </div>
      </section>
      <div className="breadcrumb">
        <NavLink href="/">Home</NavLink>/
        <NavLink href="/services-level-three">Services Level 3</NavLink>
      </div>
      <section className="business-stats">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="stats-wrapper">
                <div className="stats">
                  <div className="icon">
                    <Image
                      src="/images/business-stats-yellow.png"
                      alt=""
                      width="64"
                      height="64"
                    />
                    <div className="number">500+</div>
                  </div>
                  <div className="field">Digital Experts</div>
                </div>
                <div className="stats">
                  <div className="icon">
                    <Image
                      src="/images/business-stats-purple.png"
                      alt=""
                      width="64"
                      height="64"
                    />
                    <div className="number">28</div>
                  </div>
                  <div className="field">Year Track Record</div>
                </div>
                <div className="stats">
                  <div className="icon">
                    <Image
                      src="/images/business-stats-green.png"
                      alt=""
                      width="64"
                      height="64"
                    />
                    <div className="number">1100+</div>
                  </div>
                  <div className="field">Reviews</div>
                </div>
                <div className="stats">
                  <div className="icon">
                    <Image
                      src="/images/business-stats-blue.png"
                      alt=""
                      width="64"
                      height="64"
                    />
                    <div className="number">In-house</div>
                  </div>
                  <div className="field">Technology</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="seo-strategy pad_cmn_blk">
        <div className="container">
          <div className="row">
            <CheckScreenWidth>
              <div className="col-md-6">
                <div className="video-container">
                  <video
                    src="/images/jumbling_dollars.mp4"
                    autoPlay
                    muted
                    loop
                  ></video>
                </div>
              </div>
            </CheckScreenWidth>
            <div className="col-md-6">
              <div className="title_blk">
                <h2>Is It Time for a New Local SEO Strategy?</h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <ul>
                  <li>Mauris efficitur ipsum nec sapien feugiat blandit.</li>
                  <li>Curabitur elementum nunc a semper eleifend.</li>
                  <li>
                    Maecenas finibus purus sit amet nisi convallis, a molestie
                    leo egestas.
                  </li>
                  <li>Aenean euismod sem ac fermentum dictum.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <FixedScrolling /> */}
      <CheckScreenWidth setWidth={991}>
        <DiscoverScroll pageData={pageData} />
      </CheckScreenWidth>
      <CheckMobile setWidth={992}>
        <HomeDiscoverSlider pageData={pageData} />
      </CheckMobile>
      <section className="cta-dark-bg pad_cmn_blk">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="title_blk text-white has-btn-grp has-btn-single">
                <h2>
                  Tap Into <br />
                  Customized Local SEO Services
                </h2>
                <Link href="/">Book An Appointment</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pad_cmn_blk pricing-section">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="title_blk center text-center">
                <h2>
                  Transparent Local SEO Pricing Tailored to <br />
                  Your Business Goals
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Swiper
                slidesPerView={"auto"}
                // centeredSlides={true} // Enables center mode
                className="pricing-slider"
                pagination={{ clickable: true }}
                modules={[Pagination]}
                breakpoints={{ 992: { slidesPerView: 3 } }}
              >
                <SwiperSlide>
                  <div className="pricing-card">
                    <div className="price-row">
                      <div className="plan">
                        <p>
                          Silver <br />
                          <span>Per Month</span>
                        </p>
                      </div>
                      <div className="price">
                        <p>$50</p>
                      </div>
                    </div>
                    <hr />
                    <ul>
                      <li>
                        <PricingListItemCheck /> Lorem ipsum.
                      </li>
                      <li>
                        <PricingListItemCheck /> Lorem ipsum dolor consectetur.
                      </li>
                    </ul>
                    <ul className="not-included">
                      <li>
                        <PricingListItemCheck /> Lorem ipsum dolor.
                      </li>
                      <li>
                        <PricingListItemCheck /> Lorem ipsum dolor sit.
                      </li>
                      <li>
                        <PricingListItemCheck /> Lorem ipsum dolor sit amet.
                      </li>
                    </ul>
                    <Link href="/">Purchase Plan</Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="pricing-card">
                    <div className="price-row">
                      <div className="plan">
                        <p>
                          Silver <br />
                          <span>Per Month</span>
                        </p>
                      </div>
                      <div className="price">
                        <p>$50</p>
                      </div>
                    </div>
                    <hr />
                    <ul>
                      <li>
                        <PricingListItemCheck /> Lorem ipsum.
                      </li>
                      <li>
                        <PricingListItemCheck /> Lorem ipsum dolor consectetur.
                      </li>
                    </ul>
                    <ul className="not-included">
                      <li>
                        <PricingListItemCheck /> Lorem ipsum dolor.
                      </li>
                      <li>
                        <PricingListItemCheck /> Lorem ipsum dolor sit.
                      </li>
                      <li>
                        <PricingListItemCheck /> Lorem ipsum dolor sit amet.
                      </li>
                    </ul>
                    <Link href="/">Purchase Plan</Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="pricing-card">
                    <div className="price-row">
                      <div className="plan">
                        <p>
                          Silver <br />
                          <span>Per Month</span>
                        </p>
                      </div>
                      <div className="price">
                        <p>$50</p>
                      </div>
                    </div>
                    <hr />
                    <ul>
                      <li>
                        <PricingListItemCheck /> Lorem ipsum.
                      </li>
                      <li>
                        <PricingListItemCheck /> Lorem ipsum dolor consectetur.
                      </li>
                    </ul>
                    <ul className="not-included">
                      <li>
                        <PricingListItemCheck /> Lorem ipsum dolor.
                      </li>
                      <li>
                        <PricingListItemCheck /> Lorem ipsum dolor sit.
                      </li>
                      <li>
                        <PricingListItemCheck /> Lorem ipsum dolor sit amet.
                      </li>
                    </ul>
                    <Link href="/">Purchase Plan</Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="pricing-card">
                    <div className="price-row">
                      <div className="plan">
                        <p>
                          Silver <br />
                          <span>Per Month</span>
                        </p>
                      </div>
                      <div className="price">
                        <p>$50</p>
                      </div>
                    </div>
                    <hr />
                    <ul>
                      <li>
                        <PricingListItemCheck /> Lorem ipsum.
                      </li>
                      <li>
                        <PricingListItemCheck /> Lorem ipsum dolor consectetur.
                      </li>
                    </ul>
                    <ul className="not-included">
                      <li>
                        <PricingListItemCheck /> Lorem ipsum dolor.
                      </li>
                      <li>
                        <PricingListItemCheck /> Lorem ipsum dolor sit.
                      </li>
                      <li>
                        <PricingListItemCheck /> Lorem ipsum dolor sit amet.
                      </li>
                    </ul>
                    <Link href="/">Purchase Plan</Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="pricing-card">
                    <div className="price-row">
                      <div className="plan">
                        <p>
                          Silver <br />
                          <span>Per Month</span>
                        </p>
                      </div>
                      <div className="price">
                        <p>$50</p>
                      </div>
                    </div>
                    <hr />
                    <ul>
                      <li>
                        <PricingListItemCheck /> Lorem ipsum.
                      </li>
                      <li>
                        <PricingListItemCheck /> Lorem ipsum dolor consectetur.
                      </li>
                    </ul>
                    <ul className="not-included">
                      <li>
                        <PricingListItemCheck /> Lorem ipsum dolor.
                      </li>
                      <li>
                        <PricingListItemCheck /> Lorem ipsum dolor sit.
                      </li>
                      <li>
                        <PricingListItemCheck /> Lorem ipsum dolor sit amet.
                      </li>
                    </ul>
                    <Link href="/">Purchase Plan</Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="pricing-card">
                    <div className="price-row">
                      <div className="plan">
                        <p>
                          Silver <br />
                          <span>Per Month</span>
                        </p>
                      </div>
                      <div className="price">
                        <p>$50</p>
                      </div>
                    </div>
                    <hr />
                    <ul>
                      <li>
                        <PricingListItemCheck /> Lorem ipsum.
                      </li>
                      <li>
                        <PricingListItemCheck /> Lorem ipsum dolor consectetur.
                      </li>
                    </ul>
                    <ul className="not-included">
                      <li>
                        <PricingListItemCheck /> Lorem ipsum dolor.
                      </li>
                      <li>
                        <PricingListItemCheck /> Lorem ipsum dolor sit.
                      </li>
                      <li>
                        <PricingListItemCheck /> Lorem ipsum dolor sit amet.
                      </li>
                    </ul>
                    <Link href="/">Purchase Plan</Link>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="section-greater-marketing pad_cmn_blk">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="title_blk text-center">
                <h2>
                  Unlock a 25% greater marketing <br />
                  ROI with GWebPro Marketing Inc’s local SEO services
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={20}
                breakpoints={{
                  992: { slidesPerView: 3, spaceBetween: 30 },
                }}
              >
                <SwiperSlide>
                  <div className="greater-marketing-card">
                    <div className="upper">
                      <span>
                        25% Greater
                        <br />
                        Marketing ROI
                      </span>
                      <Image
                        src="/images/gwebpro_logo_white.webp"
                        alt=""
                        width={149}
                        height={42}
                      />
                    </div>
                    <div className="lower">
                      <ul>
                        <li>
                          Suspendisse vitae lacus nec libero congue tincidunt
                          vitae id urna.
                        </li>
                        <li>
                          Donec a neque in sem efficitur volutpat elementum ac
                          nisl.
                        </li>
                        <li>Proin vehicula odio et bibendum facilisis.</li>
                        <li>Phasellus lobortis mauris id sagittis semper.</li>
                        <li>
                          Nam scelerisque nisi ac lacus fermentum, eget
                          consectetur nibh varius.
                        </li>
                        <li>Maecenas quis felis ac tortor viverra viverra.</li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="greater-marketing-card">
                    <div className="upper">
                      <p>Typical SEO agency</p>
                    </div>
                    <div className="lower">
                      <ul>
                        <li>
                          Suspendisse vitae lacus nec libero congue tincidunt
                          vitae id urna.
                        </li>
                        <li>
                          Donec a neque in sem efficitur volutpat elementum ac
                          nisl.
                        </li>
                        <li>Proin vehicula odio et bibendum facilisis.</li>
                        <li>Phasellus lobortis mauris id sagittis semper.</li>
                        <li>
                          Nam scelerisque nisi ac lacus fermentum, eget
                          consectetur nibh varius.
                        </li>
                        <li>Maecenas quis felis ac tortor viverra viverra.</li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="greater-marketing-card">
                    <div className="upper">
                      <p>
                        In-house
                        <br />
                        SEO
                      </p>
                    </div>
                    <div className="lower">
                      <ul>
                        <li>
                          Suspendisse vitae lacus nec libero congue tincidunt
                          vitae id urna.
                        </li>
                        <li>
                          Donec a neque in sem efficitur volutpat elementum ac
                          nisl.
                        </li>
                        <li>Proin vehicula odio et bibendum facilisis.</li>
                        <li>Phasellus lobortis mauris id sagittis semper.</li>
                        <li>
                          Nam scelerisque nisi ac lacus fermentum, eget
                          consectetur nibh varius.
                        </li>
                        <li>Maecenas quis felis ac tortor viverra viverra.</li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="services-cta">
        <div className="container">
          <div className="row">
            <div className="col has-btn-grp has-btn-single">
              <p>Service With US</p>
              <h2>
                Trust the Company with 149,000+ Hours of Experience in Local
                Industries
              </h2>
              <Link href="/">Request A Proposal</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
