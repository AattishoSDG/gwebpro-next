//"use client";
import Link from "next/link";
// import { Link } from "react-router-dom";
import { LogoWhite } from "./SVG";
import AccordionFooter from "./AccordionFooter";

import apiService from "../apiServices/apiService"; // Import the service

const Footer = async () => {
  //fetch page data
  const f_data = await apiService.getPagedata("acf/v1/options/");
  const footerData = f_data;

  return (
    <>
      <footer className="footer_sec">
        <div className="container">
          <div className="row mb-5 align-items-center">
            <div className="col-md-4 col-lg-6">
              <Link href="/">
                <LogoWhite />
              </Link>
              <div className="footer_text">
                <p>
                  G Web Pro is a digital marketing and software development
                  company that specializes in enhancing our clients’ online
                  presence through tailored strategies and technical expertise.
                </p>
              </div>
            </div>

            <div className="col-md-8 col-lg-6">
              <AccordionFooter />
            </div>
          </div>

          <h2>
            <span>We are Reviewed on</span>
          </h2>
          <div className="row">
            <div className="col-lg-6 footer_brand">
              <ul>
                {footerData.review_site_list.map((row, k) => (
                  <li key={k}>
                    <a href={row.review_site_link} target="_blank">
                      <img
                        src={row.review_site_logo}
                        alt={row.review_site_name}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-6 social_blk d-flex align-items-center justify-content-lg-end">
              <p>Connect with US</p>
              <ul>
                <li>
                  <a
                    href={footerData.social_site_list[0].social_site_link}
                    target="_blank"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    href={footerData.social_site_list[1].social_site_link}
                    target="_blank"
                  >
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href={footerData.social_site_list[2].social_site_link}
                    target="_blank"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a
                    href={footerData.social_site_list[3].social_site_link}
                    target="_blank"
                  >
                    <i className="fa-brands fa-pinterest-p"></i>
                  </a>
                </li>
                <li>
                  <a
                    href={footerData.social_site_list[4].social_site_link}
                    target="_blank"
                  >
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="copyright text-start text-sm-center mt-4">
            <p>
              &copy; {new Date().getFullYear()} G Web Pro Marketing Inc | All
              Rights Reserved | <Link href="/sitemap">Sitemap</Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
