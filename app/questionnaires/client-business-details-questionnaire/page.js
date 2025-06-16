import CheckScreenWidth from "@/app/components/CheckScreenWidth";
import NavLink from "@/app/components/NavLink";
import Link from "next/link";
import BusinessQuestionnaireForm from "@/app/components/BusinessQuestionnaireForm";

export default function page() {
  return (
    <>
      <section className="services-banner inner-page-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col text-center">
              <div className="banner-content">
                <div className="position-relative title_blk">
                  <h1>Client Business Portfolio</h1>
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
        <NavLink href="/questionnaires/client-business-details-questionnaire">
          Client Business Portfolio
        </NavLink>
      </div>
      <section className="section-contact-form pad_cmn_blk">
        <div className="container">
          <div className="row">
            <div className="col">

               <BusinessQuestionnaireForm/>


            </div>
          </div>
        </div>
      </section>
    </>
  );
}
