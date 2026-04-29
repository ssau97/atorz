import React from "react";
import {
  RiMedalLine,
  RiFocus3Line,
  RiHistoryLine,
  RiGlobalLine,
  RiShoppingCartLine,
} from "@remixicon/react";
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
                    icon={<RiHistoryLine />}
                    year={"2016 - Present"}
                    title={"Atorz Establishment"}
                    institution={"Multidisciplinary Creative Studio"}
                  />
                  <Card
                    icon={<RiMedalLine />}
                    year={"2009"}
                    title={"Creative Excellence (SBS)"}
                    institution={
                      "SBS UCC Contest - University/General Category"
                    }
                  />
                  <Card
                    icon={<RiMedalLine />}
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
                    icon={<RiGlobalLine />}
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
                    icon={<RiShoppingCartLine />}
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
                    icon={<RiFocus3Line />}
                    year={"Design"}
                    title={"Space & Identity"}
                    institution={"Premium Studio & Brand Architecture"}
                  />
                </div>
              </div>
            </div>
            {/* 우측 끝 */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

const Card = ({ year, title, institution, icon }) => {
  return (
    <SlideUp>
      <div className="resume-item">
        <div className="icon">{icon}</div>
        <div className="content">
          <span className="years">{year}</span>
          <h4>{title}</h4>
          <span className="company"> {institution} </span>
        </div>
      </div>
    </SlideUp>
  );
};
