"use client";
import { useState } from "react";
// import DOMPurify from "dompurify";

const AccordionTypeOne = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0); // Default open first accordion

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle the same index or close if already open
  };

  return (
    <div className="accordion accordion_type_one">
      {data.map((item, index) => (
        <div
          key={index}
          className={`accordion_item ${activeIndex === index ? "active" : ""}`}
        >
          <div
            className="accordion_title"
            onClick={() => handleToggle(index)}
            style={{ cursor: "pointer" }}
          >
            <h3>
              {item.title} <span className="shape"></span>
            </h3>
          </div>
          <div className={`collapsible`}>
            <div className="hidden">
              <div className="accordion_content">
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.content,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionTypeOne;
