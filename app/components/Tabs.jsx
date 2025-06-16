// import PropTypes from "prop-types";
"use client";
import { useState } from "react";
import { DownArr } from "./SVG";
import Link from "next/link";

// const tabsData = [
//   {
//     id: 1,
//     title: "Connect More People",
//     description: [
//       {
//         icon: "images/market_logo_1.svg",
//         innerTitle: "National SEO",
//       },
//       {
//         icon: "images/market_logo_2.svg",
//         innerTitle: "Local SEO",
//       },
//       {
//         icon: "images/market_logo_3.svg",
//         innerTitle: "Paid Media",
//       },
//       {
//         icon: "images/market_logo_4.svg",
//         innerTitle: "Social Media",
//       },
//       {
//         icon: "images/market_logo_5.svg",
//         innerTitle: "Digital Pr",
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: "Find More Suitable Customers",
//     description: [
//       {
//         icon: "images/market_logo_1.svg",
//         innerTitle: "National SEO",
//       },
//       {
//         icon: "images/market_logo_2.svg",
//         innerTitle: "Local SEO",
//       },
//       {
//         icon: "images/market_logo_3.svg",
//         innerTitle: "Paid Media",
//       },
//       {
//         icon: "images/market_logo_4.svg",
//         innerTitle: "Social Media",
//       },
//       {
//         icon: "images/market_logo_5.svg",
//         innerTitle: "Digital Pr",
//       },
//     ],
//   },
//   {
//     id: 3,
//     title: "Converting And Collecting Leads",
//     description: [
//       {
//         icon: "images/market_logo_1.svg",
//         innerTitle: "National SEO",
//       },
//       {
//         icon: "images/market_logo_2.svg",
//         innerTitle: "Local SEO",
//       },
//       {
//         icon: "images/market_logo_3.svg",
//         innerTitle: "Paid Media",
//       },
//       {
//         icon: "images/market_logo_4.svg",
//         innerTitle: "Social Media",
//       },
//       {
//         icon: "images/market_logo_5.svg",
//         innerTitle: "Digital Pr",
//       },
//     ],
//   },
//   {
//     id: 4,
//     title: "Re-Interact With Customers",
//     description: [
//       {
//         icon: "images/market_logo_1.svg",
//         innerTitle: "National SEO",
//       },
//       {
//         icon: "images/market_logo_2.svg",
//         innerTitle: "Local SEO",
//       },
//       {
//         icon: "images/market_logo_3.svg",
//         innerTitle: "Paid Media",
//       },
//       {
//         icon: "images/market_logo_4.svg",
//         innerTitle: "Social Media",
//       },
//       {
//         icon: "images/market_logo_5.svg",
//         innerTitle: "Digital Pr",
//       },
//     ],
//   },
// ];

const Tabs = ({ tabsData }) => {
  // State to track the active tab
  const [activeTab, setactiveTab] = useState(0);

  // Event handler to set the active tab when a tab is clicked
  const handleClick = (id) => {
    setactiveTab(id);
  };
  if (tabsData) {
    return (
      <>
        <div className="tabs-container">
          <ul>
            {tabsData.map((tab, i) => (
              // Apply "active" class if it's the active tab
              <li
                key={i}
                className={activeTab === i ? "active" : ""}
                // Call handleClick when the tab is clicked
                onClick={() => handleClick(i)}
              >
                {tab.marketing_tab_title}
                <div className="arr">
                  <DownArr />
                </div>
              </li>
            ))}
          </ul>

          <div className="tabContent">
            {tabsData.map((data, i) => (
              <div
                className={`desc ${activeTab === i ? "active" : ""}`}
                key={i}
              >
                <div className="d-flex flex-wrap">
                  {Array.isArray(data.marketing_repeater) &&
                    data.marketing_repeater.map((nestedData, j) => (
                      <div className="" key={j}>
                        <Link className="inner_DataCard" href="/about">
                          <div className="DataCard_icn">
                            <img src={nestedData.marketing_logo} alt="images" />
                          </div>
                          <p>{nestedData.marketing_title}</p>
                        </Link>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
};

export default Tabs;
