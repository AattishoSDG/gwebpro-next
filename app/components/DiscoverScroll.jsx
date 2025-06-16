"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function DiscoverScroll({ pageData }) {
  const sectionRef = useRef(null);
  const pinColumnRef = useRef(null);
  const scrollColumnRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const pinColumn = pinColumnRef.current;
    const scrollColumn = scrollColumnRef.current;

    if (section && pinColumn && scrollColumn) {
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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [pageData?.discover_repeater]);

  if (!pageData?.discover_repeater) return null;

  return (
    <section
      className="discover_blk pad_cmn_blk d-none d-lg-block"
      ref={sectionRef}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-lg-5 pin-column" ref={pinColumnRef}>
            <div className="title_blk title-big">
              <h2>{pageData.discover_title}</h2>
              <h4
                dangerouslySetInnerHTML={{
                  __html: pageData.discover_description,
                }}
              />
            </div>
            <div className="video-container">
              <video src={pageData.discover_video} autoPlay loop muted />
            </div>
          </div>

          <div className="col-md-7 col-lg-7 ps-lg-5" ref={scrollColumnRef}>
            <div className="discover-cards">
              <div className="row">
                {pageData.discover_repeater.map((row, i) => (
                  <div className="col-md-6" key={i}>
                    <Link className="discover-card" href="/about">
                      <div className="img-wrapper">
                        <Image
                          width={96}
                          height={96}
                          src={row.discover_repeater_image}
                          alt={row.discover_repeater_title}
                        />
                      </div>
                      <h4>{row.discover_repeater_title}</h4>
                      <p>{row.discover_repeater_description}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
