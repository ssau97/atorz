import React from "react";
import Image from "next/image";
import SlideUp from "@/utlits/animations/slideUp";

const Resume = () => {
  return (
    <section id="resume" className="resume-area">
      <div className="container">
        <div className="resume-items">
          <div className="row">
            {/* 좌측: Creative Lineage */}
            <div className="col-xl-6 col-md-6">
              <div className="single-resume">
                <h2>Creative Lineage</h2>
                <div className="experience-list">
                  <Card
                    imgSrc={"/images/resume/est.webp"}
                    year={"2016 - Present"}
                    title={"Atorz Establishment"}
                    institution={"Multidisciplinary Creative Studio"}
                  />
                  <Card
                    imgSrc={"/images/resume/award-sbs.webp"}
                    year={"2009"}
                    title={"Creative Excellence (SBS)"}
                    institution={
                      "SBS UCC Contest - University/General Category"
                    }
                  />
                  <Card
                    imgSrc={"/images/resume/award-kobaco.webp"}
                    year={"1986"}
                    title={"Master of Sound & Media"}
                    institution={
                      "KOBACO: Television Music & Effects Individual Award"
                    }
                  />
                </div>
              </div>
            </div>

            {/* 우측: Strategic Ventures */}
            <div className="col-xl-6 col-md-6">
              <div className="single-resume">
                <h2>Strategic Ventures</h2>
                <div className="experience-list">
                  <Card
                    imgSrc={"/images/resume/shorticle.webp"}
                    year={"Platform"}
                    title={"Shorticle Innovation"}
                    institution={
                      <>
                        AI-Powered Global News Infrastructure |{" "}
                        <a
                          href="https://shorticle.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          shorticle.com
                        </a>
                      </>
                    }
                  />
                  <Card
                    imgSrc={"/images/resume/golmok.webp"}
                    year={"Platform"}
                    title={"E-commerce Solution"}
                    institution={
                      <>
                        Open Market Marketplace Platform |{" "}
                        <a
                          href="https://golmok.shop"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          golmok.shop
                        </a>
                      </>
                    }
                  />
                  <Card
                    imgSrc={"/images/resume/sofa.webp"}
                    year={"Design"}
                    title={"Space & Identity"}
                    institution={"Premium Studio & Brand Architecture"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

const Card = ({ year, title, institution, imgSrc }) => {
  return (
    <SlideUp>
      <div className="resume-item">
        <div
          className="icon"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "none",
            backgroundColor: "transparent",
            border: "none",
            boxShadow: "none",
            width: "52px",
            height: "52px",
          }}
        >
          {/* 기존 아이콘 대신 WebP 이미지 배치 */}
          <Image
            src={imgSrc}
            alt={title}
            width={52}
            height={52}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="content">
          <span className="years">{year}</span>
          <h4>{title}</h4>
          <span className="company"> {institution} </span>
        </div>
      </div>
    </SlideUp>
  );
};
