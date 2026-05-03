"use client";
import React from "react";
import Link from "next/link";
import { RiCircleFill, RiArrowRightUpLine } from "@remixicon/react";
import PartnersMarquee from "./partnersMarquee";
import SlideUp from "@/utlits/animations/slideUp";
import IntroSlider from "./IntroSlider"; // 새로 만든 컴포넌트 임포트

const Hero = () => {
  return (
    <section id="about" className="about-area">
      <div className="container">
        <div className="row">
          {/* <!-- START ABOUT IMAGE DESIGN AREA (슬라이더로 대체됨) --> */}
          <div className="col-lg-4">
            <SlideUp>
              <IntroSlider />
            </SlideUp>
          </div>
          {/* <!-- / END ABOUT IMAGE DESIGN AREA --> */}

          {/* <!-- START ABOUT TEXT DESIGN AREA (우측 설명 영역) --> */}
          <div className="col-lg-8">
            <SlideUp>
              <div className="about-content-part">
                <p>
                  Hello, We are cre<b>atorz</b>!
                </p>
                <h2>
                  A Multidisciplinary Design Studio Crafting Future-Ready
                  Experiences.
                </h2>
                <p>
                  "From pixels to spaces, we dissolve the boundaries of design.
                  Atorz combines human-centered strategy with aesthetic
                  excellence to solve complex challenges."
                </p>
                <div className="adress-field">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i>
                        <RiCircleFill size={14} />
                      </i>{" "}
                      Collaborating with Global Partners
                    </li>
                  </ul>
                </div>
                <div className="hero-btns">
                  <Link href="/about" className="theme-btn">
                    Explore Our Disciplines{" "}
                    <i>
                      <RiArrowRightUpLine size={16} />
                    </i>{" "}
                  </Link>
                </div>
              </div>
            </SlideUp>
            <SlideUp>
              <PartnersMarquee />
            </SlideUp>
          </div>
          {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
