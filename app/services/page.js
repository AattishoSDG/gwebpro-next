import Link from "next/link";
import CheckScreenWidth from "../components/CheckScreenWidth";
import NavLink from "../components/NavLink";

import ServicesSections from "./ServicesSections";

export default function Services() {
  return (
    <>
      <section className="services-banner inner-page-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col text-center">
              <div className="banner-content">
                <div className="position-relative title_blk">
                  <h1>
                    Integrated <span>Digital Marketing Services</span> For Your
                    Digital Transformation
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
      <div className="breadcrumb">
        <NavLink href="/">Home</NavLink>/
        <NavLink href="/services">Services</NavLink>
      </div>
      <ServicesSections />
      <section className="services-cta">
        <div className="container">
          <div className="row">
            <div className="col has-btn-grp">
              <p>Service With US</p>
              <h2>Get In Touch With Our Firm</h2>
              <Link href="/">View Details</Link>
              <Link href="/">View Details</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
