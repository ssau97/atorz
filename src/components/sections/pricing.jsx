import React from "react";
import Link from "next/link";
import { priceData } from "@/utlits/fackData/priceData";
import {
  RiArrowRightLine,
  RiSendPlaneLine,
  RiMessengerLine, // 메시지 아이콘
  RiArrowRightUpLine, // Explore용 추천 아이콘
} from "@remixicon/react";
import SlideUp from "@/utlits/animations/slideUp";

const Pricing = () => {
  return (
    <section className="pricing-area">
      <div className="container">
        <div className="container-inner">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <SlideUp>
                <div className="section-title text-center">
                  <p>Collaboration Model</p>
                  <h2>How We Work Together</h2>
                </div>
              </SlideUp>
            </div>
          </div>
          <div className="row justify-content-center">
            {priceData.map(
              ({ id, title, phase, sortInfo, features, buttonText, link }) => (
                <Card
                  key={id}
                  id={id}
                  title={title}
                  phase={phase}
                  sortInfo={sortInfo}
                  features={features}
                  buttonText={buttonText}
                  link={link}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

const Card = ({ id, title, phase, sortInfo, features, buttonText, link }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <SlideUp delay={id}>
        <div className="pricing-item">
          <div className="pricing-header">
            <h4 className="title">{title}</h4>
            <p
              className="save-percent"
              dangerouslySetInnerHTML={{ __html: sortInfo }}
            />
            <span
              className="phase-step"
              style={{
                fontSize: "28px",
                letterSpacing: "-1px",
                fontWeight: "700",
                display: "block",
                marginTop: "15px",
                color: "inherit",
              }}
            >
              {phase}
            </span>
          </div>
          <div className="pricing-details">
            <ul>
              {features.map(({ id, feature, unable }) => (
                <li key={id} className={`${unable ? "unable" : ""}`}>
                  <i>
                    <RiArrowRightLine size={14} />
                  </i>
                  {feature}
                </li>
              ))}
            </ul>
            <Link href={link} className="theme-btn">
              {buttonText}{" "}
              <i>
                {/* 조건부 아이콘 렌더링 */}
                {buttonText === "Inquire" ? (
                  <RiMessengerLine size={16} />
                ) : (
                  <RiArrowRightUpLine size={16} /> // Explore일 때 외부 링크 느낌의 화살표
                )}
              </i>
            </Link>
          </div>
        </div>
      </SlideUp>
    </div>
  );
};
