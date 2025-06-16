import Link from "next/link";
import CheckScreenWidth from "../components/CheckScreenWidth";
import NavLink from "../components/NavLink";
import FaqTabs from "./FaqTabs";

export default function page() {
  return (
    <>
      <section className="services-banner inner-page-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col text-center">
              <div className="banner-content">
                <div className="position-relative title_blk">
                  <h1>FAQ</h1>
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
        <Link href="/">Home</Link>/<NavLink href="/faq">FAQ</NavLink>
      </div>
      <section className="pad_cmn_blk faq-page-faqs">
        <div className="container">
          <div className="row">
            <div className="col">
              <FaqTabs />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
