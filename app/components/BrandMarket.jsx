"use client";
import Slider from "react-slick";
import PropTypes from "prop-types";

// const brandData = [
//   {
//     id: 1,
//     brandLogoImg: "images/logo_1_google.svg",
//   },
//   {
//     id: 2,
//     brandLogoImg: "images/logo_2_clutch.svg",
//   },
//   {
//     id: 3,
//     brandLogoImg: "images/logo_3_glassdoor.svg",
//   },
//   {
//     id: 4,
//     brandLogoImg: "images/logo_4_ambitionbox.svg",
//   },
//   {
//     id: 5,
//     brandLogoImg: "images/logo_2_clutch.svg",
//   },
// ];

const BrandMarket = ({ title, description, brandLogo }) => {
  const settings = {
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    speed: 150,
    autoplaySpeed: 4000,

    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          arrows: false,
          // dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          arrows: false,
          // dots: true,
          variableWidth: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrows: false,
          // dots: true,
          variableWidth: true,
        },
      },
    ],
  };

  return (
    <>
      <section className="logo_blk pad_cmn_blk" id="leader-in-marketing">
        <div className="container">
          <div className="title_blk text-center">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          {brandLogo ? (
            <div className="row mt-sm-2 mt-md-3 mt-lg-4 mt-xl-5">
              <div className="col">
                <Slider {...settings}>
                  {brandLogo.map((e, i) => {
                    return (
                      <div className="" key={i}>
                        <div className="logo_card d-flex align-items-center justify-content-center">
                          <img src={e.brand_logo} alt={e.brand_title} />
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </section>
    </>
  );
};

export default BrandMarket;

BrandMarket.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
