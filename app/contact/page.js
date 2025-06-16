import Link from "next/link";
import Image from "next/image";
import AddressTab from "../components/AddressTab";

import CheckScreenWidth from "../components/CheckScreenWidth";
import NavLink from "../components/NavLink";
import apiService from "../apiServices/apiService"; // Import the service

import ContactForm from "../components/ContactForm";

export default async function Contact(){
  //fetch address data
  const settingsdata = await apiService.getacfData("acf/v1/options/");
  const addrsData = settingsdata.address_list;
  const socialData = settingsdata.social_site_list;
  const phone_number_title = settingsdata.phone_number_title;
  const phone_number = settingsdata.phone_number;
  const email_address_title = settingsdata.email_address_title;
  const email_address = settingsdata.email_address;

  //fetch page data
  const data = await apiService.getPagedata("wp/v2/pages/8");
  const pageData = data.acf;

  //fetch contact page data
  const ContactPagedata = await apiService.getPagedata("wp/v2/pages/259");
  const contact_pagedata = ContactPagedata.acf;



  return (
    <>
      <section className="services-banner inner-page-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col text-center">
              <div className="banner-content">
                <div className="position-relative contact-page-banner">
                  <h1>
                    {contact_pagedata.banner_title} <br />{" "}
                    <span> {contact_pagedata.banner_description}</span>
                  </h1>
                </div>
                <CheckScreenWidth setWidth={991}>
                  <div className="video-container">
                    <video
                      src={contact_pagedata.banner_video}
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
        <Link href="/">Home</Link>/<NavLink href="/contact">Contact</NavLink>
      </div>
      <section className="section-contact-form pad_cmn_blk">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="contact-form-title">
                <h2>{contact_pagedata.contact_form_title}</h2>
                <p>
                  {contact_pagedata.contact_form_details}
                </p>
              </div>
            </div>
          </div>

          <ContactForm/>

        </div>
      </section>
      <section className="address_blk contact-form-page pad_cmn_blk">
        <div className="container">
          <AddressTab addressList={addrsData} />
        </div>
      </section>
      <section className="pad_cmn_blk">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="contact_blk">
                <div>
                  <div className="logo">
                    <Image
                      src="/images/gwebpro_call.png"
                      alt=""
                      width={32}
                      height={32}
                    />
                  </div>
                  <div className="text">
                    <p>{phone_number_title}</p>
                    <Link href={`tel:${phone_number}`}>{phone_number}</Link>
                  </div>
                </div>
                <div>
                  <div className="logo">
                    <Image
                      src="/images/gwebpro_email.png"
                      alt=""
                      width={32}
                      height={32}
                    />
                  </div>
                  <div className="text">
                    <p>{email_address_title}</p>
                    <Link href={`mailto:${email_address}`}>
                     {email_address}
                    </Link>
                  </div>
                </div>
              </div>
             {socialData ? (
                 <div className="socials_blk">
                <div>
                  <p>{contact_pagedata.social_media_section_title}</p>
                </div>
                <div>
                  <Link href={socialData[0].social_site_link} target="_blank">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>

                  <Link href={socialData[1].social_site_link} target="_blank">
                    <i className="fa-brands fa-x-twitter"></i>
                  </Link>

                  <Link href={socialData[2].social_site_link} target="_blank">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>

                  <Link href={socialData[3].social_site_link} target="_blank">
                    <i className="fa-brands fa-pinterest-p"></i>
                  </Link>

                  <Link href={socialData[4].social_site_link} target="_blank">
                    <i className="fa-brands fa-youtube"></i>
                  </Link>
                </div>
              </div>
                
              ) : (
        <span></span>
      )}
             
            </div>
          </div>
        </div>
      </section>
      {pageData.banner_clutch_data ? (
        <section className="pad_cmn_blk contact-page">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="title_blk text-center">
                  <h2>{contact_pagedata.clutch_section_title}</h2>
                  <p>
                    {contact_pagedata.clutch_section_description}
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col widgets-col">
                <div className="widgets-container">
                  {pageData.banner_clutch_data.map((item, i) => (
                    <div className="widget" key={i}>
                      <iframe
                        width="100%"
                        height="100%"
                        src={item.clutch_iframe_link}
                        title={item.clutch_iframe_title}
                      ></iframe>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <span></span>
      )}
    </>
  );
}
