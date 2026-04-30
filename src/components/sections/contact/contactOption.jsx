import { RiMailLine, RiMapPinLine, RiPhoneLine } from "@remixicon/react";
import React from "react";
import SlideUp from "../../../utlits/animations/slideUp";

const ContactOption = () => {
  return (
    <div className="col-lg-4">
      <SlideUp>
        <div className="contact-content-part">
          <SlideUp delay={2}>
            <div className="single-contact">
              <div className="contact-icon">
                <i>
                  <RiMapPinLine size={20} />
                </i>
              </div>
              <h2>Headquarters:</h2>
              <p>Jung-gu, Incheon, South Korea</p>
              <h2 style={{ marginTop: "10px" }}>Creative Studio:</h2>
              <p>Suyeong-gu, Busan, South Korea</p>
            </div>
          </SlideUp>
          <SlideUp delay={4}>
            <div className="single-contact">
              <div className="contact-icon">
                <i>
                  <RiMailLine size={20} />
                </i>
              </div>
              <h2>Official Email:</h2>
              <p>info@atorz.com</p>
            </div>
          </SlideUp>
        </div>
      </SlideUp>
    </div>
  );
};

export default ContactOption;
