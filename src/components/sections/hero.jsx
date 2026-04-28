"use client";
import React from "react";
import Link from "next/link";
import {
  RiFacebookCircleFill,
  RiTwitterXLine,
  RiLinkedinFill,
  RiGithubLine,
  RiCircleFill,
  RiArrowRightUpLine,
} from "@remixicon/react";
import PartnersMarquee from "./partnersMarquee";
import SlideUp from "@/utlits/animations/slideUp";

const Hero = () => {
  return (
    <section id="about" className="about-area">
      <div className="container">
        <div className="row">
          {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
          <div className="col-lg-4">
            <SlideUp>
              <div className="about-image-part">
                <img src={"/images/about/profile.webp"} alt="About Me" />
                <h2>atorz studio</h2>
                <p>WE ARE CRE_atorz</p>
                <div className="about-social text-center">
                  <ul>
                    <li>
                      <Link href="">
                        <RiFacebookCircleFill size={20} />
                      </Link>
                    </li>
                    <li>
                      <Link href="">
                        <RiTwitterXLine size={20} />
                      </Link>
                    </li>
                    <li>
                      <Link href="">
                        <RiLinkedinFill size={20} />
                      </Link>
                    </li>
                    <li>
                      <Link href="">
                        <RiGithubLine size={20} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </SlideUp>
          </div>
          {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
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
