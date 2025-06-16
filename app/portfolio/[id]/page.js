import Image from "next/image";
import NavLink from "../../components/NavLink";
import CheckMobile from "../../components/CheckMobile";
import CheckScreenWidth from "../../components/CheckScreenWidth";
import apiService from "../../apiServices/apiService";
export default async function WebPortfolio({ params }) {
  const { id } = params;

  //fetch portfolio data
  const potfolio_data = await apiService.getPagedata(`custom/v1/post-by-slug/${id}`);
  const portfolioDetails = potfolio_data;
  if(portfolioDetails.template=="web"){
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
                      <span>{portfolioDetails.title}</span>
                    </h1>
                  </div>
                  <div className="">
                    <div className="row">
                      <div className="col">
                        <div className="card-project-detail white">
                          <p>Services</p>
                          {portfolioDetails.acf_fields.services.map((serv, s) => (
                          <p key={s}>{serv.service_title}</p>
                         ))} 
                        </div>
                      </div>
                      <div className="col">
                        <div className="card-project-detail">
                          <p>Industry</p>
                           {portfolioDetails.acf_fields.industry.map((ind, i) => (
                          <p key={i}>{ind.industry_title}</p>
                         ))} 
                        </div>
                        <div className="card-project-detail">
                          <p>Duration / Starting</p>
                          <p>{portfolioDetails.acf_fields.durationstarting}/{portfolioDetails.acf_fields.development_starting_from}</p>
                        </div>
                        <div className="card-project-detail">
                          <p>Platform</p>
                         {portfolioDetails.acf_fields.platform.map((plt, p) => (
                          <p key={p}>{plt.platform_title}</p>
                         ))} 
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 image-col">
                <Image
                  src={portfolioDetails.acf_fields.featured_image.url}
                  alt={portfolioDetails.acf_fields.featured_image.alt}
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
                      <span>{portfolioDetails.title}</span>
                    </h1>
                  </div>
                  {/* <CheckScreenWidth setWidth={991}>
                    <div className="video-container">
                      <video
                        src="/images/services-banner.mp4"
                        autoPlay
                        muted
                        loop
                      ></video>
                    </div>
                  </CheckScreenWidth> */}
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
                src={portfolioDetails.acf_fields.banner_image_mobile.url}
                alt={portfolioDetails.acf_fields.banner_image_mobile.url}
                width={192}
                height={390}
              />
            </div>
            <div className="col">
              <div className="card-project-detail white">
                <p>Services</p>
                {portfolioDetails.acf_fields.services.map((serv, s) => (
                          <p key={s}>{serv.service_title}</p>
                         ))} 
              </div>
            </div>
            <div className="col">
              <div className="card-project-detail">
                <p>Industry</p>
                {portfolioDetails.acf_fields.industry.map((ind, i) => (
                          <p key={i}>{ind.industry_title}</p>
                         ))} 
              </div>
              <div className="card-project-detail">
                <p>Duration / Starting</p>
                 <p>{portfolioDetails.acf_fields.durationstarting}/{portfolioDetails.acf_fields.development_starting_from}</p>
              </div>
              <div className="card-project-detail">
                <p>Platform</p>
                {portfolioDetails.acf_fields.platform.map((plt, p) => (
                          <p key={p}>{plt.platform_title}</p>
                         ))} 
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
                  {portfolioDetails.acf_fields.section_2_heading}
                </h2>
                <div dangerouslySetInnerHTML={{
                        __html: portfolioDetails.acf_fields.section_2_description,
                      }}>
                  
                </div>
                <a href="#">Discuss The Project</a>
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
                  src={portfolioDetails.acf_fields.section_3_video}
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
                <h2>{portfolioDetails.acf_fields.section_4_title}</h2>
                <p>
                  {portfolioDetails.acf_fields.section_4_description}
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="video-container">
                <video
                  src={portfolioDetails.acf_fields.section_4_video}
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
                <h2 dangerouslySetInnerHTML={{
                        __html: portfolioDetails.acf_fields.section_5_title,
                      }}>
                  
                </h2>
                <a href="#" className="">
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
                    src={portfolioDetails.acf_fields.section_5_video}
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

                   

                    {portfolioDetails.acf_fields.platform.map((plt, p) => (

                       <span key={p}>
                      <Image
                        src={plt.platform_logo.url}
                        alt=""
                        width={22}
                        height={22}
                      />{" "}
                      {plt.platform_title}
                    </span>

                         
                         ))}

                  </p>
                  <p>
                    <span>Website Type</span>
                    <span>{portfolioDetails.acf_fields.website_type}</span>
                  </p>
                  <p>
                    <span>Number of Pages</span>
                    <span>{portfolioDetails.acf_fields.number_of_pages}</span>
                  </p>
                  <p>
                    <span>Development Time</span>
                    <span>{portfolioDetails.acf_fields.durationstarting}</span>
                  </p>
                  <p>
                    <span>Project Team</span>
                    <span>{portfolioDetails.acf_fields.project_team}</span>
                  </p>
                  <p>
                    <span>Website Style</span>
                    <span>{portfolioDetails.acf_fields.website_style}</span>
                  </p>
                  <p>
                    <span>Design</span>
                    <span>{portfolioDetails.acf_fields.design}</span>
                  </p>
                  <a href={portfolioDetails.acf_fields.live_site_link} target="_blank">Visit Live Site</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
  else{
    return(
      <>
     <section className="seo-portfolio inner-page-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col text-center">
              <div className="banner-content large">
                <div className="position-relative">
                  <h1>
                    Portfolio Details <br />
                    <span>{portfolioDetails.title}</span>
                  </h1>
                </div>
                <CheckScreenWidth setWidth={991}>
                  <div className="video-container">
                    <video
                      src={portfolioDetails.acf_fields.banner_video.url}
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
        <NavLink href="/portfolio">Portfolio</NavLink>/
         <NavLink href="">{portfolioDetails.title}</NavLink>
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
                     {portfolioDetails.acf_fields.services.map((serv, s) => (
                          <p key={s}>{serv.service_title}</p>
                         ))} 
                  </div>
                </div>
                <div className="col">
                  <div className="card-project-detail">
                    <p>Industry</p>
                    {portfolioDetails.acf_fields.industry.map((ind, i) => (
                          <p key={i}>{ind.industry_title}</p>
                         ))} 
                  </div>
                  <div className="card-project-detail">
                    <p>Duration / Starting</p>
                   <p>{portfolioDetails.acf_fields.durationstarting}/{portfolioDetails.acf_fields.development_starting_from}</p>
                  </div>
                  <div className="card-project-detail">
                    <p>Platform</p>
                    {portfolioDetails.acf_fields.platform.map((plt, p) => (
                          <p key={p}>{plt.platform_title}</p>
                         ))} 
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="project-img">
                <Image
                  src={portfolioDetails.acf_fields.featured_image.url}
                  alt={portfolioDetails.acf_fields.featured_image.alt}
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
                 {portfolioDetails.acf_fields.section_2_heading}
                </h2>
                  <div dangerouslySetInnerHTML={{
                        __html: portfolioDetails.acf_fields.section_2_description,
                      }}>
                  
                </div>
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
                <p> {portfolioDetails.acf_fields.section_3_title}</p>
                <h2  dangerouslySetInnerHTML={{
                        __html: portfolioDetails.acf_fields.section_3_description,
                      }}>
                
                </h2>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 video-col">
              {/* <CheckScreenWidth setWidth={991}> */}
              <div className="video-container">
                <video
                  src={portfolioDetails.acf_fields.section_3_video}
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
                  src={portfolioDetails.acf_fields.section_4_video}
                  autoPlay
                  muted
                  loop
                ></video>
              </div>
            </div>
            <div className="col-md-6 col-lg-5">
              <div className="title-big">
                <h3>{portfolioDetails.acf_fields.section_4_title}</h3>
                <p>
                  {portfolioDetails.acf_fields.section_4_description}
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
                <h2>  {portfolioDetails.acf_fields.section_5_title}</h2>
                <div dangerouslySetInnerHTML={{
                        __html: portfolioDetails.acf_fields.section_5_content,
                      }}>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="row gy-4 align-items-center">
            <div className="col-md-6">
              <div className="title-big">
                <h3>{portfolioDetails.acf_fields.section_5_title_2}</h3>
                <div dangerouslySetInnerHTML={{
                        __html: portfolioDetails.acf_fields.section_5_content_2,
                      }}>
                  
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <Image
                src={portfolioDetails.acf_fields.section_5_image.url}
                alt={portfolioDetails.acf_fields.section_5_image.alt}
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
                  <h2>{portfolioDetails.acf_fields.section_6_top_heading}</h2>
                  <div dangerouslySetInnerHTML={{
                        __html: portfolioDetails.acf_fields.section_6_top_content,
                      }}>
                  
                </div>
                </div>
              </div>
            </div>
            <div className="row gy-3">
              <div className="col-md-6">
                <div className="title-big">
                  <h3>{portfolioDetails.acf_fields.section_6_bottom_title}</h3>
                  <div dangerouslySetInnerHTML={{
                        __html: portfolioDetails.acf_fields.section_6_bottom_content,
                      }}>
                  
                </div>
                </div>
              </div>
              <div className="col-md-6">
                <Image
                 src={portfolioDetails.acf_fields.section_6_bottom_image.url}
                alt={portfolioDetails.acf_fields.section_6_bottom_image.alt}
                  width={544}
                  height={341}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    )
  }


}
