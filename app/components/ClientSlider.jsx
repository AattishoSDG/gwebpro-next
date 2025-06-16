"use client";
import Slider from "react-slick";

// const tabsData = [
//   {
//     id: 1,
//     logoImg: "images/client_logo_1.svg",
//   },
//   {
//     id: 2,
//     logoImg: "images/client_logo_1.svg",
//   },
//   {
//     id: 3,
//     logoImg: "images/client_logo_1.svg",
//   },
//   {
//     id: 4,
//     logoImg: "images/client_logo_1.svg",
//   },
//   {
//     id: 5,
//     logoImg: "images/client_logo_1.svg",
//   },
//   {
//     id: 6,
//     logoImg: "images/client_logo_1.svg",
//   },
// ];

const ClientSlider = ({ clientTab }) => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
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
          slidesToShow: 3,
          arrows: false,
          // dots: true,
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
  if (clientTab) {
    return (
      <>
        <Slider {...settings}>
          {clientTab.map((d, i) => {
            return (
              <div key={i}>
                <div className="cardLogo">
                  <img src={d.client_logo} alt="images" />
                </div>
              </div>
            );
          })}
        </Slider>
      </>
    );
  }
};

export default ClientSlider;
