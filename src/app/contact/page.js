import React from "react";
import ContactOption from "../../components/sections/contact/contactOption";
import ContactForm from "../../components/sections/contact/contactForm";

const Contact = () => {
  return (
    <section id="contact" className="contact-area innerpage-single-area">
      {/* 
        모바일(sm 미만)에서는 padding을 0으로 만들어 양 끝에 붙입니다. 
        px-0: 모바일에서 가로 패딩 제거
        sm:px-3: 작은 화면 이상부터는 다시 적절한 여백 확보
      */}
      <div className="container px-0 sm:px-3">
        <div
          className="container-inner"
          style={{ paddingLeft: "5px", paddingRight: "5px" }}
        >
          <div className="row mx-0">
            {" "}
            {/* row의 마이너스 마진으로 인한 스크롤 방지 */}
            <div className="col-xl-12 col-lg-12">
              <div className="section-title text-center wow fadeInUp delay-0-2s">
                <p>Contact</p>
                <h2>Turn Imagination into Reality.</h2>
              </div>
            </div>
          </div>
          {/* row에 mx-0를 주어 모바일에서 좌우 여백을 최소화합니다. */}
          <div className="row mx-0">
            <ContactOption />
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
