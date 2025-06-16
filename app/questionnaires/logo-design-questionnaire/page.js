import CheckScreenWidth from "@/app/components/CheckScreenWidth";
import NavLink from "@/app/components/NavLink";
import Link from "next/link";
import LogoQuestionnaireForm from "@/app/components/LogoQuestionnaireForm";

export default function page() {
  return (
    <>
      <section className="services-banner inner-page-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col text-center">
              <div className="banner-content">
                <div className="position-relative title_blk">
                  <h1>Logo Design Questionnaire</h1>
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
        <Link href="/questionnaires">Questionnaires</Link>/
        <NavLink href="/questionnaires/logo-design-questionnaire">
          Logo Design Questionnaire
        </NavLink>
      </div>
      <section className="section-contact-form pad_cmn_blk">
        <div className="container">
          <div className="row">
            <div className="col">

              <LogoQuestionnaireForm/>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
