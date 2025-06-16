// "use client";
import Link from "next/link";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tabs from "./components/Tabs";
import ClientSlider from "./components/ClientSlider";
import MarqueBlock from "./components/MarqueBlock";
import AddressTab from "./components/AddressTab";
import BrandMarket from "./components/BrandMarket";
import { LogoGwebproLetterG } from "./components/SVG";
import apiService from "./apiServices/apiService"; // Import the service
import HomeDiscoverSlider from "./components/HomeDiscoverSlider";
import CheckScreenWidth from "./components/CheckScreenWidth";
import CheckMobile from "./components/CheckMobile";
import DiscoverScroll from "./components/DiscoverScroll";
import HomeBannerSlider from "./components/HomeBannerSlider";

// import CheckMobile from "../components/CheckMobile";
// Register the ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

export async function generateMetadata() {
  // Fetch data needed for metadata
  const data = await apiService.getPagedata("wp/v2/pages/8");

  return {
    title: data?.yoast_head_json?.title || "G Web Pro",
    description:
      data?.yoast_head_json?.description ||
      "G Web Pro offers digital marketing, software development, and consulting services in Toronto. Businesses trust us for tailored SEO, web design, and e-commerce solutions.",
    // You can add more metadata from yoast_head_json if needed
  };
}

const abtBg = {
  backgroundImage: "url(/images/abt_bg.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const clientBg = {
  background: "url(/images/cliend_bg.jpg) no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
};

const Home = async () => {
  //fetch page data
  const data = await apiService.getPagedata("wp/v2/pages/8");
  const pageData = data.acf;

  //fetch brands data
  const brdata = await apiService.getacfData("acf/v1/leader-brands/");
  const brandData = brdata;

  //fetch address data
  const addressdata = await apiService.getacfData("acf/v1/options/");
  const addrsData = addressdata.address_list;

  return (
    <>
      {/* <div className="widgets-container">
                      {pageData.banner_clutch_data ? (
                        pageData.banner_clutch_data.map((item, i) => (
                          <div className="widget" key={i}>
                            <iframe
                              width="100%"
                              height="100%"
                              src={item.clutch_iframe_link}
                              title={item.clutch_iframe_title}
                            ></iframe>
                          </div>
                        ))
                      ) : (
                        <span></span>
                      )}
                    </div> */}
      {/* <CheckMobile setWidth={768}>
        <section className="pad_cmn_blk">
          <div className="container">
            <div className="row">
              <div className="col d-flex justify-content-center">
                <div
                  className={`custom-cursor position-static`}
                  style={{
                    opacity: "1",
                    visibility: "visible",
                    pointerEvents: "auto",
                    transform: "none",
                    height: "124px",
                    width: "124px",
                    backgroundColor: "#fff",
                  }}
                >
                  <img src="/images/custom-cursor-text.svg" alt="" />
                </div>
                <CustomCursor isHovered={isHovered} />
              </div>
            </div>
          </div>
        </section>
      </CheckMobile> */}

      <HomeBannerSlider pageData={pageData} />

      <BrandMarket
        title={brandData.brand_section_title}
        description={brandData.brand_section_desc}
        brandLogo={brandData.brand_logo_list}
      />

      <CheckScreenWidth setWidth={991}>
        <DiscoverScroll pageData={pageData} />
      </CheckScreenWidth>
      <CheckMobile setWidth={992}>
        <HomeDiscoverSlider pageData={pageData} />
      </CheckMobile>

      <section className="home_abt pad_cmn_blk" style={abtBg}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 home_abt_cnt">
              <div className="title_blk title-big">
                <h2>{pageData.about_us_title}</h2>
              </div>

              <p>{pageData.about_us_description}</p>

              {pageData.about_repeater ? (
                <ul>
                  {pageData.about_repeater.map((abtrow, l) => {
                    return (
                      <li key={l}>
                        <h4>{abtrow.repeater_value}</h4>
                        <p>{abtrow.repeater_description}</p>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p></p>
              )}
            </div>

            <CheckScreenWidth setWidth={991}>
              <div className="col-lg-5">
                <div className="gwebpro-logo">
                  <video
                    src={pageData.background_video}
                    autoPlay
                    muted
                    loop
                  ></video>
                  <LogoGwebproLetterG />
                </div>
              </div>
            </CheckScreenWidth>
          </div>
        </div>
      </section>

      <section className="market_tab_blk pad_cmn_blk">
        <div className="container-fluid">
          <div className="row">
            <CheckScreenWidth setWidth={991}>
              <div className="col-lg-6">
                <div className="video-container">
                  <video
                    src={pageData.section_video}
                    autoPlay={true}
                    loop={true}
                    muted={true}
                  ></video>
                </div>
              </div>
            </CheckScreenWidth>

            <div className="col-lg-6">
              <div className="title_blk">
                <h2
                  dangerouslySetInnerHTML={{
                    __html: pageData.section_title_intgrtd,
                  }}
                ></h2>
                <p>{pageData.section_description_intgrtd}</p>
              </div>

              <Tabs tabsData={pageData.marketing_tab_repeater} />
            </div>
          </div>
        </div>
      </section>

      <section className="client_slider_blk pad_cmn_blk" style={clientBg}>
        <div className="container">
          <div className="title_blk text-center">
            <h2>Our Happy Clients</h2>
          </div>

          <ClientSlider clientTab={pageData.happy_client_list} />

          <div className="clnt-btn text-center">
            <Link href="/portfolio" className="btn-white">
              View Our Case Studies
            </Link>
          </div>
        </div>
      </section>

      <section className="our_work pad_cmn_blk">
        <div className="container">
          <div className="title_blk text-center mb-md-5">
            <h2>
              Some Of <br />
              Our Finest Works
            </h2>
          </div>
        </div>

        <MarqueBlock
          portfolioOne={pageData.our_portfolio_row1}
          portfolioTwo={pageData.our_portfolio_row2}
        />

        <div className="portfolio_btn text-center">
          <Link href="/portfolio">
            View All Portfolio <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </section>

      <section className="address_blk pad_cmn_blk">
        <div className="container">
          <AddressTab addressList={addrsData} />
        </div>
      </section>
    </>
  );
};

export default Home;
