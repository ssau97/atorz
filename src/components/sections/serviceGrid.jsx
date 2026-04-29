import React from "react";
import Image from "next/image";
import SlideUp from "@/utlits/animations/slideUp";

const ServiceGrid = () => {
  return (
    <section id="services" className="services-area innerpage-single-area">
      <div className="container">
        <div className="container-inner">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <SlideUp>
                <div className="section-title text-center">
                  <p>Our Expertise</p>
                  <h2>Proven Expertise through Strategic Projects</h2>
                </div>
              </SlideUp>
            </div>
          </div>
          <div className="row">
            {/* 1. Global Platform Infrastructure (Shorticle 프로젝트 참여 강조) */}
            <Card
              id={1}
              imgSrc={"/images/services/service-platform.webp"}
              title={"Global Platform Infrastructure"}
              description={
                "We participated in the core development of 'Shorticle,' establishing high-performance automation and multilingual infrastructure supporting 40+ global languages."
              }
            />
            {/* 2. E-commerce Ecosystem (golmok.shop 프로젝트 참여 강조) */}
            <Card
              id={2}
              imgSrc={"/images/services/service-commerce.webp"}
              title={"E-commerce Ecosystem"}
              description={
                "Through our strategic involvement in 'golmok.shop,' we deliver high-efficiency marketplace solutions focused on seamless transaction flows and stable settlement architectures."
              }
            />
            {/* 3. Space & Experience Design */}
            <Card
              id={3}
              imgSrc={"/images/services/service-space.webp"}
              title={"Space & Experience Design"}
              description={
                "We create premium spatial experiences and brand identities that merge architectural aesthetics with our long-standing media production heritage."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;

const Card = ({ imgSrc, title, description, id }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <SlideUp delay={id}>
        <div className="service-item">
          <div
            className="service-img"
            style={{
              position: "relative",
              width: "100%",
              height: "200px",
              marginBottom: "25px",
              overflow: "hidden",
              borderRadius: "8px",
            }}
          >
            <Image
              src={imgSrc}
              alt={title}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </SlideUp>
    </div>
  );
};
