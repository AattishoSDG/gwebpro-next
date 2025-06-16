"use client";
import Image from "next/image";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import NavLink from "../components/NavLink";

export default function PortfolioList({portfolio_list}) {
 if (portfolio_list) {
  return (
    <section className="section-portfolio-list">
      <div className="container">
        <div className="row">
          <div className="col">
            <Tabs defaultActiveKey={0} className="mb-3">
            {portfolio_list.map((row, i) => (
              <Tab eventKey={i} title={row.name} key={i}>
                {row.posts.length>0 ? (
                <div className="row"  >
                  <div className="col-12">
                    <div className="title_blk text-center">
                      <h2>Featured Case Study</h2>
                    </div>
                  </div>
                </div>
                ) : (
                 <div className="row"  >
                  <div className="col-12">
                    <div className="title_blk text-center">
                      <h2>No Portfolio found</h2>
                    </div>
                  </div>
                </div>
            )}
                <div className="portfolio-rows">
                 {row.posts.map((item, k) => (
                  <div className="row portfolio-row" key={k}>
                    <div className="col-md-6 has-btn-grp">
                      <h3>{item.title}</h3>
                      <div dangerouslySetInnerHTML={{
                        __html: item.content,
                      }}></div>
                      <ul>
                        {item.taxonomies.map((cat, l) => (
                        <li key={l}>{cat.name}</li>
                         ))}  
                      </ul>
                      <NavLink href={`/portfolio/${item.slug}`}>View Case Study</NavLink>
                      <a href={item.acf_fields.live_site_link} target="_blank">View Live Site</a>
                    </div>
                    <div className="col-md-6">
                      <Image
                        src={item.acf_fields.featured_image.url}
                        alt={item.acf_fields.featured_image.alt}
                        width={739}
                        height={477}
                      />
                    </div>
                  </div>
                  ))}

           
                </div>
                {/* <div className="row view-more">
                  <div className="col-12">
                    <button>
                      View more{" "}
                      <Image
                        src="/images/rounded-rarr.svg"
                        alt=""
                        width={56}
                        height={17}
                      />
                    </button>
                  </div>
                </div> */}
              </Tab>
                ))}

             

              <Tab
                as={"button"}
                title={
                  <Image
                    src="/images/search-icon.svg"
                    width={26}
                    height={26}
                    alt=""
                  />
                }
              ></Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
}
