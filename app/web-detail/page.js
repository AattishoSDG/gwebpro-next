import Image from "next/image";
import CheckMobile from "../components/CheckMobile";
import CheckScreenWidth from "../components/CheckScreenWidth";

export default function WebPortfolio() {
  return (
    <>
      <CheckScreenWidth setWidth={767}>
        <section className="web-portfolio-banner">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="content-col">
                  <div className="title-big">
                    <h1>
                      <span>Portfolio</span> Details <br />
                      <span>GTA EV Chargers</span>
                    </h1>
                  </div>
                  <div className="">
                    <div className="row">
                      <div className="col">
                        <div className="card-project-detail white">
                          <p>Services</p>
                          <p>PPC</p>
                          <p>Lead Generation</p>
                          <p>SEO</p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card-project-detail">
                          <p>Industry</p>
                          <p>EV Chargers</p>
                          <p>EV Car Recharge Station</p>
                        </div>
                        <div className="card-project-detail">
                          <p>Duration / Starting</p>
                          <p>3 Week / Jan 2024</p>
                        </div>
                        <div className="card-project-detail">
                          <p>Platform</p>
                          <p>Reporting Ninja</p>
                          <p>Semrush</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 image-col">
                <Image
                  src="/images/web-portfolio-banner.png"
                  alt=""
                  width={1026}
                  height={739}
                />
              </div>
            </div>
          </div>
        </section>
      </CheckScreenWidth>
      <CheckMobile setWidth={768}>
        <section className="seo-portfolio inner-page-banner">
          <div className="container-fluid">
            <div className="row">
              <div className="col text-center">
                <div className="banner-content large">
                  <div className="position-relative">
                    <h1>
                      Portfolio Details <br />
                      <span>GTA EV Chargers</span>
                    </h1>
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
        <div className="container web-portfolio-mobile">
          <div className="row gy-4">
            <div className="col-12 text-center">
              <Image
                src="/images/web-portfolio-banner-mobile.png"
                alt=""
                width={192}
                height={390}
              />
            </div>
            <div className="col">
              <div className="card-project-detail white">
                <p>Services</p>
                <p>PPC</p>
                <p>Lead Generation</p>
                <p>SEO</p>
              </div>
            </div>
            <div className="col">
              <div className="card-project-detail">
                <p>Industry</p>
                <p>EV Chargers</p>
                <p>EV Car Recharge Station</p>
              </div>
              <div className="card-project-detail">
                <p>Duration / Starting</p>
                <p>3 Week / Jan 2024</p>
              </div>
              <div className="card-project-detail">
                <p>Platform</p>
                <p>Reporting Ninja</p>
                <p>Semrush</p>
              </div>
            </div>
          </div>
        </div>
      </CheckMobile>
      <section className="pad_cmn_blk web-portfolio-details">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title_blk has-btn-grp has-btn-single">
                <h2>
                  Lorem Ipsum has been the industry&apos;s standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book.
                </h2>
                <p>
                  It has roots in a piece of classical Latin literature from 45
                  BC, making it over 2000 years old. Richard McClintock, a Latin
                  professor at Hampden-Sydney College in Virginia, looked up one
                  of the more obscure Latin words, consectetur, from a Lorem
                  Ipsum passage, and going through the cites of the word in
                  classical literature, discovered the undoubtable source.
                </p>
                <a href="">Discuss The Project</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="full-width-video">
        <div className="container-fluid">
          <div className="row">
            <div className="col px-0">
              <div className="video-container">
                <video
                  src="/images/web-portfolio-1.mp4"
                  autoPlay
                  muted
                  loop
                ></video>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pad_cmn_blk web-requirement">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="title_blk">
                <h2>The Requirement</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="video-container">
                <video
                  src="/images/web-portfolio-2.webm"
                  autoPlay
                  muted
                  loop
                ></video>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-dark-bg pad_cmn_blk web-portfolio">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="title_blk text-white has-btn-grp has-btn-single">
                <h2>
                  Tap Into <br />
                  <span>Customized Local SEO Services</span>
                </h2>
                <a href="" className="">
                  Book An Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pad_cmn_blk">
        <div className="container">
          <div className="web-project-details">
            <div className="row gy-4">
              <div className="col-lg-6">
                <div className="video-container">
                  <video
                    src="/images/web-portfolio-3.mp4"
                    autoPlay
                    muted
                    loop
                  ></video>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="details-card has-btn-grp has-btn-single">
                  <p>
                    <span>Platform</span>
                    <span>
                      <Image
                        src="/images/gwebpro_wordpress.png"
                        alt=""
                        width={22}
                        height={22}
                      />{" "}
                      WordPress
                    </span>
                  </p>
                  <p>
                    <span>Website Type</span>
                    <span>Lead Generation</span>
                  </p>
                  <p>
                    <span>Number of Pages</span>
                    <span>10+</span>
                  </p>
                  <p>
                    <span>Development Time</span>
                    <span>3 Weeks</span>
                  </p>
                  <p>
                    <span>Project Team</span>
                    <span>4 Members</span>
                  </p>
                  <p>
                    <span>Website Style</span>
                    <span>Modern</span>
                  </p>
                  <p>
                    <span>Design</span>
                    <span>Custom</span>
                  </p>
                  <a href="">Visit Live Site</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
