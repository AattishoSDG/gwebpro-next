"use client";
import Marquee from "react-fast-marquee";

const marqueRow1 = [
  "images/work_1_narendra.png",
  "images/work_2_maxprotex.png",
  "images/work_1_narendra.png",
  "images/work_2_maxprotex.png",
  "images/work_1_narendra.png",
  "images/work_2_maxprotex.png",
  "images/work_1_narendra.png",
  "images/work_2_maxprotex.png",
];

const marqueRow2 = [
  "images/work_1_narendra.png",
  "images/work_2_maxprotex.png",
  "images/work_1_narendra.png",
  "images/work_2_maxprotex.png",
  "images/work_1_narendra.png",
  "images/work_2_maxprotex.png",
  "images/work_1_narendra.png",
  "images/work_2_maxprotex.png",
];

const MarqueBlock = ({ portfolioOne, portfolioTwo }) => {
  return (
    <>
      <div className="work_blk">
        {portfolioOne ? (
          <div className="top_work_row">
            <Marquee direction="right" pauseOnHover={true}>
              {portfolioOne.map((el, i) => {
                return (
                  <div className="work_card" key={i}>
                    <img
                      src={el.portfolio_row1_image}
                      alt={el.portfolio_row1_title}
                    />
                    <a href="/">
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                );
              })}
            </Marquee>
          </div>
        ) : (
          <div></div>
        )}

        {portfolioTwo ? (
          <div className="btm_work_row">
            <Marquee pauseOnHover={true}>
              {portfolioTwo.map((elr, j) => {
                return (
                  <div className="work_card" key={j}>
                    <img
                      src={elr.portfolio_row2_image}
                      alt={elr.portfolio_row2_title}
                    />
                    <a href="/">
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                );
              })}
            </Marquee>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default MarqueBlock;
