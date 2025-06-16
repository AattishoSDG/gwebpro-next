"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Slider from "react-slick";
import useIsMobile from "./useIsMobile";
import CheckScreenWidth from "./CheckScreenWidth";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function FixedScrolling() {
  const sectionRef = useRef(null);
  const pinColumnRef = useRef(null);
  const scrollColumnRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const pinColumn = pinColumnRef.current;
    const scrollColumn = scrollColumnRef.current;

    if (section && pinColumn && scrollColumn) {
      // Create GSAP scroll animation
      gsap.to(scrollColumn, {
        y: () => window.innerHeight - scrollColumn.clientHeight,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          pinSpacing: "margin",
          start: "top top",
          endTrigger: scrollColumn,
          end: "bottom bottom",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    }

    // Cleanup the ScrollTrigger when the component unmounts
    // Cleanup the ScrollTrigger when the component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // const [windowWidth, setWindowWidth] = useState(0);
  // useEffect(() => {
  //   setWindowWidth(window.innerWidth);
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };
  //   window.addEventListener("resize", handleResize); // Clean up the event listener on component unmount
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // useEffect(function () {
  //   function isTouchDevice() {
  //     return (
  //       "ontouchstart" in window || // Checks for touch events
  //       navigator.maxTouchPoints > 0 || // Checks for touch points (modern devices)
  //       navigator.msMaxTouchPoints > 0 // Checks for touch points (older Microsoft devices)
  //     );
  //   }

  //   // Example usage
  //   if (isTouchDevice()) {
  //     console.log("This device supports touch.");
  //     document.body.classList.add("touch-device"); // Add a class for styling
  //   } else {
  //     console.log("This device does not support touch.");
  //     document.body.classList.add("non-touch-device"); // Add a class for styling
  //   }
  // }, []);

  const discoverSliderSettings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    variableWidth: true,
  };
  return (
    <>
      {useIsMobile(992) ? (
        <>
          <p>mobile</p>
          <section className="discover_blk pad_cmn_blk d-block d-lg-none">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 text-center">
                  <div className="title_blk title-big">
                    <h2>Discover</h2>
                    <h4>
                      what’s next for your organization <br />
                      with{" "}
                      <span>
                        <a href="/">Gwebpro</a>
                      </span>{" "}
                      Marketing Inc.
                    </h4>
                  </div>
                  {/* {windowWidth > 991 && ( */}
                  <CheckScreenWidth setWidth={991}>
                    <div className="video-container">
                      <video
                        src="images/home-discover.mp4"
                        autoPlay={true}
                        loop={true}
                        muted={true}
                      ></video>
                    </div>
                  </CheckScreenWidth>
                  {/* )} */}
                </div>

                <div className="col-12">
                  <div className="discover-cards">
                    <div className="row">
                      <div className="col pe-0 ps-0">
                        <Slider {...discoverSliderSettings}>
                          <div className="">
                            <div className="discover-card">
                              <img src="/images/discover-yellow.png" alt="" />
                              <h4>Website Design</h4>
                              <p>
                                Is a long established fact that a reader will be
                                distracted by the readable content of a page.
                              </p>
                            </div>
                          </div>
                          <div className="">
                            <div className="discover-card">
                              <img src="/images/discover-yellow.png" alt="" />
                              <h4>Website Design</h4>
                              <p>
                                Is a long established fact that a reader will be
                                distracted by the readable content of a page.
                              </p>
                            </div>
                          </div>
                          <div className="">
                            <div className="discover-card">
                              <img src="/images/discover-yellow.png" alt="" />
                              <h4>Website Design</h4>
                              <p>
                                Is a long established fact that a reader will be
                                distracted by the readable content of a page.
                              </p>
                            </div>
                          </div>
                          <div className="">
                            <div className="discover-card">
                              <img src="/images/discover-yellow.png" alt="" />
                              <h4>Website Design</h4>
                              <p>
                                Is a long established fact that a reader will be
                                distracted by the readable content of a page.
                              </p>
                            </div>
                          </div>
                          <div className="">
                            <div className="discover-card">
                              <img src="/images/discover-yellow.png" alt="" />
                              <h4>Website Design</h4>
                              <p>
                                Is a long established fact that a reader will be
                                distracted by the readable content of a page.
                              </p>
                            </div>
                          </div>
                          <div className="">
                            <div className="discover-card">
                              <img src="/images/discover-yellow.png" alt="" />
                              <h4>Website Design</h4>
                              <p>
                                Is a long established fact that a reader will be
                                distracted by the readable content of a page.
                              </p>
                            </div>
                          </div>
                          <div className="">
                            <div className="discover-card">
                              <img src="/images/discover-yellow.png" alt="" />
                              <h4>Website Design</h4>
                              <p>
                                Is a long established fact that a reader will be
                                distracted by the readable content of a page.
                              </p>
                            </div>
                          </div>
                          <div className="">
                            <div className="discover-card">
                              <img src="/images/discover-yellow.png" alt="" />
                              <h4>Website Design</h4>
                              <p>
                                Is a long established fact that a reader will be
                                distracted by the readable content of a page.
                              </p>
                            </div>
                          </div>
                          <div className="">
                            <div className="discover-card">
                              <img src="/images/discover-yellow.png" alt="" />
                              <h4>Website Design</h4>
                              <p>
                                Is a long established fact that a reader will be
                                distracted by the readable content of a page.
                              </p>
                            </div>
                          </div>
                          <div className="">
                            <div className="discover-card">
                              <img src="/images/discover-yellow.png" alt="" />
                              <h4>Website Design</h4>
                              <p>
                                Is a long established fact that a reader will be
                                distracted by the readable content of a page.
                              </p>
                            </div>
                          </div>
                          <div className="">
                            <div className="discover-card">
                              <img src="/images/discover-yellow.png" alt="" />
                              <h4>Website Design</h4>
                              <p>
                                Is a long established fact that a reader will be
                                distracted by the readable content of a page.
                              </p>
                            </div>
                          </div>
                          <div className="">
                            <div className="discover-card">
                              <img src="/images/discover-yellow.png" alt="" />
                              <h4>Website Design</h4>
                              <p>
                                Is a long established fact that a reader will be
                                distracted by the readable content of a page.
                              </p>
                            </div>
                          </div>
                        </Slider>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <p>desktop</p>
          <section
            className="discover_blk pad_cmn_blk d-none d-lg-block"
            ref={sectionRef}
          >
            <div className="container">
              <div className="row">
                <div
                  className="col-md-5 col-lg-5 pin-column"
                  ref={pinColumnRef}
                >
                  <div className="title_blk title-big">
                    <h2>Discover</h2>
                    <h4>
                      what’s next for your organization <br />
                      with{" "}
                      <span>
                        <a href="/">Gwebpro</a>
                      </span>{" "}
                      Marketing Inc.
                    </h4>
                  </div>
                  <div className="video-container">
                    <video
                      src="images/home-discover.mp4"
                      autoPlay={true}
                      loop={true}
                      muted={true}
                    ></video>
                  </div>
                </div>

                <div
                  className="col-md-7 col-lg-7 ps-lg-5"
                  ref={scrollColumnRef}
                >
                  <div className="discover-cards">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="discover-card">
                          <img src="/images/discover-yellow.png" alt="" />
                          <h4>Website Design</h4>
                          <p>
                            Is a long established fact that a reader will be
                            distracted by the readable content of a page.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="discover-card">
                          <img src="/images/discover-yellow.png" alt="" />
                          <h4>Website Design</h4>
                          <p>
                            Is a long established fact that a reader will be
                            distracted by the readable content of a page.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="discover-card">
                          <img src="/images/discover-yellow.png" alt="" />
                          <h4>Website Design</h4>
                          <p>
                            Is a long established fact that a reader will be
                            distracted by the readable content of a page.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="discover-card">
                          <img src="/images/discover-yellow.png" alt="" />
                          <h4>Website Design</h4>
                          <p>
                            Is a long established fact that a reader will be
                            distracted by the readable content of a page.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="discover-card">
                          <img src="/images/discover-yellow.png" alt="" />
                          <h4>Website Design</h4>
                          <p>
                            Is a long established fact that a reader will be
                            distracted by the readable content of a page.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="discover-card">
                          <img src="/images/discover-yellow.png" alt="" />
                          <h4>Website Design</h4>
                          <p>
                            Is a long established fact that a reader will be
                            distracted by the readable content of a page.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="discover-card">
                          <img src="/images/discover-yellow.png" alt="" />
                          <h4>Website Design</h4>
                          <p>
                            Is a long established fact that a reader will be
                            distracted by the readable content of a page.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="discover-card">
                          <img src="/images/discover-yellow.png" alt="" />
                          <h4>Website Design</h4>
                          <p>
                            Is a long established fact that a reader will be
                            distracted by the readable content of a page.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="discover-card">
                          <img src="/images/discover-yellow.png" alt="" />
                          <h4>Website Design</h4>
                          <p>
                            Is a long established fact that a reader will be
                            distracted by the readable content of a page.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="discover-card">
                          <img src="/images/discover-yellow.png" alt="" />
                          <h4>Website Design</h4>
                          <p>
                            Is a long established fact that a reader will be
                            distracted by the readable content of a page.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="discover-card">
                          <img src="/images/discover-yellow.png" alt="" />
                          <h4>Website Design</h4>
                          <p>
                            Is a long established fact that a reader will be
                            distracted by the readable content of a page.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="discover-card">
                          <img src="/images/discover-yellow.png" alt="" />
                          <h4>Website Design</h4>
                          <p>
                            Is a long established fact that a reader will be
                            distracted by the readable content of a page.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
