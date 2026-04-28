import React from "react";
import { RiStackLine } from "@remixicon/react";
import SlideUp from "@/utlits/animations/slideUp";

const Summery = () => {
  return (
    <section id="about" className="about-single-area innerpage-single-area">
      <div className="container">
        <div className="row">
          {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
          <div className="col-lg-4">
            <SlideUp>
              <div className="about-image-part">
                <img src={"/images/about/profile.webp"} alt="About Me" />
              </div>
            </SlideUp>
          </div>
          {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
          <div className="col-lg-8">
            <SlideUp>
              <div className="about-content-part">
                <h2>Designing Every Touchpoint of Human Experience.</h2>
                <p>
                  Atorz is a global design collective specializing in the
                  intersection of digital technology, spatial aesthetics, and
                  human experience. We deliver integrated solutions that ensure
                  every brand communicates with clarity, purpose, and aesthetic
                  excellence.
                </p>
                <p>
                  Through specialized collaborative cells, we seamlessly bridge
                  the gap between Digital Media, Product Identity, and
                  Architectural Space. Our mission is constant: to transform
                  technical complexity into intuitive, enduring elegance—from a
                  single pixel to a physical structure.
                </p>
                <div className="hero-btns">
                  <a href="/services" className="theme-btn">
                    Explore Our Services
                    <i>
                      {" "}
                      <RiStackLine size={16} />{" "}
                    </i>
                  </a>
                </div>
              </div>
            </SlideUp>
          </div>
          {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
        </div>
      </div>
    </section>
  );
};

export default Summery;
