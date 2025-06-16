import React from "react";
import CheckScreenWidth from "../components/CheckScreenWidth";
import Link from "next/link";
import NavLink from "../components/NavLink";

export default function Questionnaires() {
  return (
    <>
      <section className="services-banner inner-page-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col text-center">
              <div className="banner-content">
                <div className="position-relative title_blk">
                  <h1>Questionnaires</h1>
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
        <NavLink href="/questionnaires">Questionnaires</NavLink>
      </div>
      <section className="pad_cmn_blk">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="has-btn-all d-flex align-items-center justify-content-center gap-1 gap-sm-2 gap-md-3 gap-lg-4 flex-wrap">
                <Link href="/questionnaires/seo-content-questionnaire/">
                  SEO Questionnaire
                </Link>
                <Link href="/questionnaires/search-engine-marketing-questionnaire/">
                  SEM Questionnaire
                </Link>
                <Link href="/questionnaires/web-design-questionnaire/">
                  Web Design Questionnaire
                </Link>
                <Link href="/questionnaires/client-business-details-questionnaire/">
                  Business Questionnaire
                </Link>
                <Link href="/questionnaires/logo-design-questionnaire/">
                  Logo Design Questionnaire
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
