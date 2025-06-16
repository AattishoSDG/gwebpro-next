import React from "react";
import CheckScreenWidth from "../components/CheckScreenWidth";
import Link from "next/link";
import NavLink from "../components/NavLink";

export default function page() {
  return (
    <>
      <section className="services-banner inner-page-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col text-center">
              <div className="banner-content">
                <div className="position-relative title_blk">
                  <h1>Privacy Policy</h1>
                </div>
                <CheckScreenWidth setWidth={991}>
                  <div className="video-container">
                    <video
                      src="/images/services-banner.mp4"
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
        <Link href="/">Home</Link>/
        <NavLink href="/privacy-policy">Privacy Policy</NavLink>
      </div>
      <section className="pad_cmn_blk privacy-policy-page">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="gwebpro-prose">
                <p>
                  G Web Pro Marketing Inc. is committed to respecting the
                  privacy of individuals and recognizes a need for the
                  appropriate management and protection of any personal
                  information that you agree to provide to us. We will not share
                  your information with any third party outside of our
                  organization, other than as necessary to fulfill your request.
                </p>
                <p>
                  Your privacy is extremely important to us. The trust placed in
                  us by our customers is absolutely essential to our success. We
                  understand that and do all we can to earn and protect that
                  trust bestowed upon us. We do not share any personal
                  information provided by you with any outside company or agency
                  or individual.
                </p>
                <p>
                  <strong>OUR COMMITMENT TO PRIVACY</strong>
                </p>
                <p>
                  We take customer privacy very seriously and do not sell or
                  give out any customer information. We do not keep a mailing
                  list nor distribute a newsletter.
                </p>
                <p>
                  <strong>PRIVACY NOTICE</strong>
                </p>
                <p>
                  This privacy notice discloses the privacy practices for{" "}
                  <a href="https://www.gwebpro.com/">
                    https://www.gwebpro.com/
                  </a>
                  . This privacy notice applies solely to information collected
                  by this website from its customers. This will notify you of
                  the following:
                </p>
                <ol>
                  <li>
                    What personally identifiable information is collected from
                    you through the website, how it is used and with whom it may
                    be shared.
                  </li>
                  <li>
                    What choices are available to you regarding the use of your
                    data.
                  </li>
                  <li>
                    The security procedures that are in place to protect the
                    misuse of your information.
                  </li>
                  <li>
                    How you can correct inaccuracies or discrepancies in the
                    information.
                  </li>
                </ol>
                <p>
                  <strong>INFORMATION COLLECTION, USE AND SHARING</strong>
                </p>
                <ul>
                  <li>
                    We are the sole owners of the information collected on this
                    site. We only have access to/collect information that you
                    voluntarily give us via email or other direct contact from
                    you. We will not sell or rent this information to, or share
                    it with, anyone.
                  </li>
                </ul>
                <ul>
                  <li>
                    We will use your information to respond to you, regarding
                    the reason you contacted us. We will not share your
                    information with any third party outside of your
                    organization, other than as necessary to fulfill your
                    request, e.g. to ship an order.
                  </li>
                </ul>
                <ul>
                  <li>
                    Unless you ask us not to, we may contact you via email in
                    the future to tell you about specials, new products or
                    services or changes to this privacy policy.
                  </li>
                </ul>
                <p>
                  <strong>YOUR ACCESS TO AND CONTROL OVER INFORMATION</strong>
                </p>
                <p>
                  You may opt out of any future contacts from us at any time.
                  You can do the following at any time by contacting us via the
                  email address or phone number given on our website:
                </p>
                <ul>
                  <li>See what data we have about you, if any.</li>
                  <li>Change/correct any data we have about you.</li>
                  <li>Have us delete any data we have about you.</li>
                  <li>
                    Express any concern you have about our use of your data.
                  </li>
                </ul>
                <p>
                  <strong>SECURITY</strong>
                </p>
                <p>
                  We take all precautions to protect your information. When you
                  submit sensitive information via the website, your information
                  is protected both online and offline.
                </p>
                <ul>
                  <li>
                    Wherever we collect sensitive information (such as credit or
                    debit card data), that information is encrypted and
                    transmitted to us in a secure way. You can verify this by
                    looking for a closed lock icon at the bottom of your browser
                    or looking for “https” at the beginning of the address of
                    the web page.
                  </li>
                </ul>
                <ul>
                  <li>
                    While we use encryption to protect sensitive information
                    transmitted online, we also protect your information
                    offline. Only employees who need the information to perform
                    a specific job (for example, billing or customer service)
                    are granted access to personally identifiable information.
                  </li>
                </ul>
                <p>
                  <strong>
                    If at any point of time during our dealings you feel that we
                    are not abiding by this privacy policy, you should
                    immediately contact us via telephone at{" "}
                    <a href="tel:+18884453334">1-888-445-3334</a> or email us at{" "}
                    <a href="mailto:sales@gwebpro.com">sales@gwebpro.com</a>.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
