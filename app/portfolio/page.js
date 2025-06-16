import NavLink from "../components/NavLink";
import CheckScreenWidth from "../components/CheckScreenWidth";
import BrandMarket from "../components/BrandMarket";
import PortfolioList from "./PortfolioList";
import apiService from "../apiServices/apiService";

export default async function Portfolio() {
  //fetch brands data
  const brdata = await apiService.getacfData("acf/v1/leader-brands/");
  const brandData = brdata;

  //fetch page data
  const data = await apiService.getPagedata("wp/v2/pages/607");
  const pageData = data.acf;

  //fetch portfolio data
  const potfolio_data = await apiService.getPagedata("custom/v1/portfolio-categories-with-post");
  const portfolioList = potfolio_data;

  return (
    <>
      <section className="services-banner inner-page-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col text-center">
              <div className="banner-content">
                <div className="position-relative title_blk">
                  <h1 dangerouslySetInnerHTML={{
                        __html: pageData.banner_title,
                      }}>
                  
                  </h1>
                  <div dangerouslySetInnerHTML={{
                        __html: pageData.banner_description,
                      }}>
                   
                  </div>
                </div>
                <CheckScreenWidth setWidth={991}>
                  <div className="video-container">
                    <video
                      src={pageData.banner_video}
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
        <NavLink href="/portfolio">Portfolio</NavLink>
      </div>
      <PortfolioList portfolio_list={portfolioList}/>
      <BrandMarket
        title="The Leader In Digital Marketing"
        description="The top-rated software and digital marketing firm in the Canada, with more than 200 five-star reviews from past clients"
        brandLogo={brandData.brand_logo_list}
      />
    </>
  );
}
