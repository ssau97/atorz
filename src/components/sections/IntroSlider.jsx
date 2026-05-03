"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { introSliderData } from "@/utlits/fackData/introSectionData";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";

const IntroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredLink, setHoveredLink] = useState(null);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === introSliderData.length - 1 ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? introSliderData.length - 1 : prev - 1,
    );
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.screenX || e.touches?.[0]?.screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.screenX || e.changedTouches?.[0]?.screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    if (swipeDistance > 50) nextSlide();
    if (swipeDistance < -50) prevSlide();
  };

  const currentData = introSliderData[currentIndex];

  return (
    <div
      className="about-image-part"
      style={{ position: "relative", cursor: "default" }}
      onMouseDown={handleTouchStart}
      onMouseUp={handleTouchEnd}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 1. 이미지 크기 조절: 부모 컨테이너 중앙에서 90% 크기로 */}
      <div className="flex justify-center items-center mb-3">
        <img
          key={currentIndex}
          src={currentData.image}
          alt={currentData.title}
          style={{
            width: "85%", // 이미지 크기 90%로 축소
            height: "auto",
            transition: "all 0.5s ease",
            userSelect: "none",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* 2. 항목 간 간격 축소: margin과 line-height 조정 */}
      <h2
        style={{ marginBottom: "5px", marginTop: "10px", fontSize: "2.4rem" }}
      >
        {currentData.title}
      </h2>
      <p style={{ marginBottom: "15px", lineHeight: "1.4" }}>
        {currentData.description}
      </p>

      {/* 3. 소셜 아이콘 영역 */}
      <div className="about-social text-center">
        <ul
          className="flex justify-center items-center"
          style={{ gap: "10px", listStyle: "none", padding: 0 }} // 아이콘 사이 간격 15px -> 10px 축소
        >
          {currentData.links.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                target="_blank"
                title={link.tooltip}
                onMouseEnter={() => setHoveredLink(link.id)}
                onMouseLeave={() => setHoveredLink(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px", // 버튼 크기 살짝 축소
                  height: "36px",
                  border: "none",
                  background: "none",
                  padding: 0,
                  cursor: "pointer",
                  transition: "color 0.3s ease",
                  color: hoveredLink === link.id ? "#9ca3af" : "#ffffff",
                }}
              >
                {/* 아이콘 크기도 비례해서 조절하고 싶다면 link.icon에 직접 props 전달 */}
                {React.cloneElement(link.icon, { width: 20, height: 20 })}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 4. 슬라이드 컨트롤: 상단과의 여백(mt-4 -> mt-2) 축소 */}
      <div
        className="flex justify-center items-center mt-2"
        style={{ gap: "25px" }} // 화살표 간격 25px -> 20px 축소
      >
        <button
          onClick={prevSlide}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#fff",
            padding: "5px",
            transition: "opacity 0.3s",
          }}
          className="hover:opacity-50"
          aria-label="Previous Slide"
        >
          <RiArrowLeftSLine size={20} />
        </button>

        <span
          style={{
            fontSize: "12px", // 텍스트 크기 살짝 축소
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "1px",
            fontWeight: "bold",
          }}
        >
          {currentIndex + 1} / {introSliderData.length}
        </span>

        <button
          onClick={nextSlide}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#fff",
            padding: "5px",
            transition: "opacity 0.3s",
          }}
          className="hover:opacity-50"
          aria-label="Next Slide"
        >
          <RiArrowRightSLine size={20} />
        </button>
      </div>
    </div>
  );
};

export default IntroSlider;
