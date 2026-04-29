import React from "react";
import Marquee from "react-fast-marquee";

const PartnersMarquee = () => {
  return (
    <div className="about-content-part-bottom">
      <h2>Our Creative Footprints</h2>
      <div className="company-list">
        <div className="scroller">
          <div className="scroller__inner">
            <Marquee>
              <img src={"/images/client-logos/partner1.webp"} alt="atorz" />
              <img
                src={"/images/client-logos/partner2.webp"}
                alt="jack.school"
              />
              <img src={"/images/client-logos/partner3.webp"} alt="hughkay" />
              <img
                src={"/images/client-logos/partner4.webp"}
                alt="golmok.shop"
              />
              <img src={"/images/client-logos/partner5.webp"} alt="shorticle" />
              <img
                src={"/images/client-logos/partner6.webp"}
                alt="ws-interior"
              />
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersMarquee;
