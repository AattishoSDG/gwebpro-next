import Link from "next/link";
import CheckScreenWidth from "../components/CheckScreenWidth";
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
                  <h1>Annual Scholarship 2018</h1>
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
        <NavLink href="/annual-scholarship-2018">
          Annual Scholarship 2018
        </NavLink>
      </div>
      <section className="pad_cmn_blk">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="gwebpro-prose">
                <p>
                  We are currently in the middle of what some are calling a
                  Millennial revolution. With so many young people creating and
                  innovating; this is truly a generation of game-changers. G Web
                  Pro wants to empower young people so that they can go forward
                  and find solutions to today’s problems. We are launching an
                  annual scholarship program of $1,500 CAD, or $1,500 USD
                  (depending where the university or college is located) to a
                  student that has the potential to do great things if given the
                  opportunity.
                </p>
                <p>
                  Students interested in applying for this scholarship need to
                  write a short essay. The topic of the essay is:
                </p>
                <p>
                  How do you feel the digital age and new media has acted as a
                  platform for innovative new technologies that have impacted
                  multiple industries?
                </p>
                <h2>Eligibility:</h2>
                <p>To be eligible for this scholarship, you must be:</p>
                <ul>
                  <li>A permanent U.S or Canadian resident.</li>
                  <li>
                    In full attendance for a minimum period of eight consecutive
                    weeks and not earning a salary from full-time employment
                    while attending:
                  </li>
                  <li>
                    A full-time degree or diploma program in a recognized
                    Post-Secondary institution located within U.S or Canada, or
                  </li>
                  <li>
                    Enrolled as a full-time student at Private Career College
                    with U.S or Canada.
                  </li>
                </ul>
                <p>
                  Proof of enrollment is required to participate (Student ID or
                  official confirmation of enrollment from your institution).
                </p>
                <p>
                  The award will be sent to the financial office of your
                  institution and will be placed directly into your
                  college/university account.
                </p>
                <p>Only one application per person will be accepted.</p>
                <h2>Application Process</h2>
                <p>
                  Submit your 600+ word essay (word file) and your personal
                  information using the{" "}
                  <a
                    target="_blank"
                    href="https://www.gwebpro.com/scholarship/application-form/"
                  >
                    form on our website
                  </a>{" "}
                  before August 15th, 2018. Please note that the content should
                  be unique, informative and must include sources where
                  appropriate.
                </p>
                <p>
                  Our editorial team will select the winning article and the
                  winner will be notified by email and announced on our social
                  media profiles. The selected entry will be also shared on G
                  Web Pro blog with credit given to the author.
                </p>
                <p>
                  <span>
                    <em>
                      Connect with our profiles below for updates and the winner
                      announcement.
                    </em>
                  </span>
                </p>
                <div className="socials_blk">
                  <div>
                    <a target="_blank" href="https://www.facebook.com/">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a target="_blank" href="https://x.com/">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a target="_blank" href="https://in.linkedin.com/">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a target="_blank" href="https://in.pinterest.com/">
                      <i className="fa-brands fa-pinterest-p"></i>
                    </a>
                    <a target="_blank" href="https://www.youtube.com/">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </div>
                </div>
                <h3>
                  <span>Selection Criteria</span>
                </h3>
                <p>
                  All entries will be reviewed by our editorial team and
                  evaluated on:
                </p>
                <ul>
                  <li>
                    Use of consistent agreements between the parts of the essay,
                    without errors in mechanics, grammar or spelling
                  </li>
                  <li>Explanations and analysis with no inaccuracies</li>
                  <li>Detail of observations of student’s experiences</li>
                  <li>
                    Application of insightful connections to concepts or current
                    issues in digital marketing
                  </li>
                  <li>
                    Use of vocabulary, considering effective use of words to
                    make the essay engaging and use of terminology from digital
                    marketing
                  </li>
                </ul>
                <p>
                  We look forward to hearing from you, our future creative and
                  dynamic young leaders!
                </p>
                <h3>
                  <span>About G Web Pro</span>
                </h3>
                <p>
                  G Web Pro Marketing Inc is a digital marketing and consulting
                  firm, specializing in{" "}
                  <a
                    target="_blank"
                    href="https://www.gwebpro.com/seo-toronto/"
                  >
                    <strong>Search Engine Optimization</strong>
                  </a>
                  , Social Media Marketing, Search Engine Marketing, Email
                  Marketing,{" "}
                  <a
                    target="_blank"
                    href="https://www.gwebpro.com/web-analytics/"
                  >
                    <strong>Web Analytics,</strong>
                  </a>{" "}
                  Google Local Optimization, CMS Development, eCommerce
                  Solution, Web Applications,{" "}
                  <a
                    target="_blank"
                    href="https://www.gwebpro.com/website-development-toronto/"
                  >
                    <strong>Custom Website Development</strong>
                  </a>
                  , Phone and Windows Apps and more. The team is comprised of
                  experienced digital marketers, web designers, web developers,
                  app developers and marketing strategists. Its aim is to align
                  digital marketing best practice with customer goals to deliver
                  meaningful results.
                </p>

                <div className="has-btn-grp has-btn-single text-center">
                  <p>
                    <strong>
                      <em>Do you have what it takes?&nbsp;</em>
                    </strong>
                  </p>
                  <a href="/application-form">Apply for the Scholarship Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
