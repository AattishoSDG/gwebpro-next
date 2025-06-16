"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import DOMPurify from "dompurify"; // Import DOMPurify for sanitization
import Slider from "react-slick";
import apiService from "../apiServices/apiService"; // Import the service

const tabsData = [
  {
    id: 1,
    title: [
      {
        addressTitle: "Picton",
        location: [
          "3-252 Main St W<br />Picton, ON<br />K0K 2T0", // Use HTML strings
        ],
        phNumber: "1-888-445-3334",
        telNumber: "8884453334",
        directionLink: "abc",
      },
    ],
    icon: "images/location_1.png",
  },
  {
    id: 2,
    title: [
      {
        addressTitle: "Toronto",
        location: [
          "5399 Eglinton Ave. West<br />Suite 212<br />Toronto ON<br />M9C 5K6",
        ],
        phNumber: "1-888-445-3334",
        telNumber: "8884453334",
        directionLink: "abc",
      },
    ],
    icon: "images/location_1.png",
  },
  {
    id: 3,
    title: [
      {
        addressTitle: "Toronto",
        location: [
          "2275 Lake Shore<br />Boulevard West, Unit<br />#533<br/>Toronto ON<br />M8V 3Y3",
        ],
        phNumber: "1-888-445-3334",
        telNumber: "8884453334",
        directionLink: "abc",
      },
    ],
    icon: "images/location_1.png",
  },
];

const AddressTab = ({ addressList }) => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState(0);

  // Event handler to set the active tab when a tab is hovered
  const handleHover = (id) => {
    setActiveTab(id);
  };

  // Helper function to sanitize HTML
  // const sanitizeHTML = (html) => {
  //   return DOMPurify.sanitize(html);
  // };

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  if (addressList) {
    return (
      <>
        <div className="d-lg-flex d-none row add-tabs-container">
          <div className="col-md-7 col-lg-6 address_card">
            <ul>
              {addressList.map((tab, i) => (
                <li
                  key={i}
                  className={activeTab === i ? "active" : ""}
                  onMouseEnter={() => handleHover(i)}
                >
                  <div className="" key={i}>
                    <h2>
                      <i className="fa-solid fa-location-dot"></i>{" "}
                      {tab.address_city}
                    </h2>
                    {/* Render sanitized HTML content */}
                    <p
                      dangerouslySetInnerHTML={{
                        __html: tab.address_location,
                      }}
                    ></p>
                    <a
                      href={`tel: +1${tab.address_phone_number}`}
                      className="add_btn"
                    >
                      {tab.address_phone_number}
                    </a>
                    <a
                      href={tab.address_direction_link}
                      className="direction_btn"
                    >
                      Get Directions
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-5 col-lg-6 tabContent">
            <div className="sticky-location-pin">
              {addressList.map((data, i) => (
                <div
                  className={`desc text-center ${
                    activeTab === i ? "active" : ""
                  }`}
                  key={i}
                >
                  <img src={data.address_image} alt="images" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="d-block d-lg-none">
          {/* <div className="container"> */}
          <div className="row">
            <div className="col address_card">
              <ul>
                <Slider {...settings}>
                  {addressList.map((tab, i) => (
                    <div key={i}>
                      <li
                        className={`${activeTab === i ? "active" : ""}`}
                        onMouseEnter={() => handleHover(i)}
                      >
                        <div className="" key={i}>
                          <h2>
                            <i className="fa-solid fa-location-dot"></i>{" "}
                            {tab.address_city}
                          </h2>
                          {/* Render sanitized HTML content */}
                          <p
                            dangerouslySetInnerHTML={{
                              __html: tab.address_location,
                            }}
                          ></p>
                          <a
                            href={`tel: +1${tab.address_phone_number}`}
                            className="add_btn"
                          >
                            {tab.address_phone_number}
                          </a>
                          <a href={tab.directionLink} className="direction_btn">
                            Get Directions
                          </a>
                        </div>
                      </li>
                    </div>
                  ))}
                </Slider>
              </ul>
            </div>
          </div>
          {/* </div> */}
        </div>
      </>
    );
  }
};

export default AddressTab;
