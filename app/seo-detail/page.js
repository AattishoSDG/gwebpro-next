import NavLink from "../components/NavLink";
import CheckScreenWidth from "../components/CheckScreenWidth";
import Image from "next/image";

export default function SEOPortfolioDetail() {
  return (
    <>
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
      <div className="breadcrumb">
        <NavLink href="/">Home</NavLink>/
        <NavLink href="/seo-detail">Services</NavLink>
        {/* </div> */}
      </div>
      <section className="seo-project-detail">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
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
            <div className="col-md-6">
              <div className="project-img">
                <Image
                  src="/images/seo-detail-project.png"
                  alt=""
                  width={862}
                  height={555}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="seo-project-description">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="title_blk text-center">
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
      <section className="yoy-growth">
        <div className="container-fluid">
          <div className="row gy-4">
            <div className="col-md-6 col-lg-7 content-col">
              <div className="icon">
                <Image
                  src="/images/yoy-arrow.svg"
                  alt=""
                  width={49}
                  height={30}
                />
              </div>
              <div className="title_blk">
                <p>19.44%</p>
                <h2>
                  YOY <span>Growth</span> in Website Engagement
                </h2>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 video-col">
              {/* <CheckScreenWidth setWidth={991}> */}
              <div className="video-container">
                <video
                  src="/images/yoy-growth-video.webm"
                  autoPlay
                  muted
                  loop
                ></video>
              </div>
              {/* </CheckScreenWidth> */}
            </div>
          </div>
        </div>
      </section>
      <section className="seo-challenge pad_cmn_blk">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="video-container">
                <video
                  src="/images/globe-curve-video.webm"
                  autoPlay
                  muted
                  loop
                ></video>
              </div>
            </div>
            <div className="col-md-6 col-lg-5">
              <div className="title-big">
                <h3>The Challenge</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="seo-action-result pad_cmn_blk">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="title_blk text-center">
                <h2>Action Taken</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
          <div className="row gy-4 align-items-center">
            <div className="col-md-6">
              <div className="title-big">
                <h3>Results Recieved</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <Image
                src="/images/action-result.png"
                alt=""
                width={739}
                height={477}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="seo-key-takeaways pad_cmn_blk">
        <div className="container">
          <div className="key-takeaway-wrapper">
            <div className="row gy-3">
              <div className="col">
                <div className="title_blk">
                  <h2>Key Takeaways</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
            </div>
            <div className="row gy-3">
              <div className="col-md-6">
                <div className="title-big">
                  <h3>Clients Satisfaction Detail</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <Image
                  src="/images/key-takeaways.png"
                  alt=""
                  width={544}
                  height={341}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
