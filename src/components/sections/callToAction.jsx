import React from "react";
import Link from "next/link";
import { RiYoutubeLine, RiGooglePlayLine, RiAppleLine } from "@remixicon/react";
import SlideUp from "@/utlits/animations/slideUp";

const CallToAction = () => {
  return (
    <section className="call-to-action-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SlideUp>
              <div className="about-content-part call-to-action-part text-center">
                <h2>
                  Ready to bridge the gap between imagination and reality?
                </h2>
                <p>
                  Let’s build something extraordinary together. Read our latest
                  articles on Shorticle, or join our creative journey on YouTube
                  to see how we redefine the boundaries of design and
                  technology.
                </p>

                {/* 1행 4열 배치 버튼 그룹 */}
                <div
                  className="hero-btns justify-content-center"
                  style={{
                    display: "flex",
                    gap: "15px",
                    flexWrap: "wrap",
                    marginTop: "30px",
                    alignItems: "center",
                  }}
                >
                  {/* 1. 쇼티클 (커스텀 SVG 로고 적용) */}
                  <a
                    href="https://shorticle.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="theme-btn"
                  >
                    Shorticle{" "}
                    <i style={{ display: "inline-flex", alignItems: "center" }}>
                      <svg
                        viewBox="0 0 75.34 123.52"
                        height="16"
                        fill="currentColor"
                        style={{ marginLeft: "4px" }}
                      >
                        <polygon points="0 93.27 0 108.39 37.67 123.52 75.34 108.39 75.34 93.27 37.67 108.39 0 93.27" />
                        <path d="M75.27,67.99c-.26-2.88-.88-5.53-1.77-7.84-1.3-3.08-3.32-5.81-6.05-8.3-2.85-2.37-6.52-4.51-11.03-6.52-4.63-1.9-10.2-3.68-16.73-5.46-3.8-.95-6.76-1.9-9.13-2.85s-4.27-1.9-5.69-3.08c-1.42-.95-2.49-2.14-2.97-3.56-.59-1.19-.83-2.73-.83-4.51,0-1.9.47-3.56,1.54-4.98.95-1.3,2.37-2.37,4.03-3.2,1.54-.71,3.32-1.3,5.46-1.66,1.9-.24,3.92-.36,5.93-.36,4.75.24,9.61,1.19,14.47,2.97,4.75,1.9,9.13,4.15,12.93,6.88l7-14.12c-5.69-3.56-11.39-6.29-17.08-8.42-5.69-1.9-11.74-2.97-18.03-2.97-4.75,0-9.14.59-13.29,1.54-4.27,1.19-7.95,2.85-11.15,4.98-3.32,2.25-5.81,4.98-7.71,8.19-1.9,3.32-2.85,7.24-2.85,11.74,0,4.27.71,7.95,2.37,11.03,1.54,3.2,3.91,5.93,7,8.3s6.88,4.51,11.51,6.17c4.51,1.78,9.73,3.32,15.66,4.51,5.81,1.42,10.2,3.08,13.29,5.22,2.97,2.25,4.51,5.46,4.51,9.73,0,1.66-.31,3.12-.89,4.4l-16.54,6.64-1.55.62-1.78-.72L0,67.96v15.13l.79.32,36.54,14.67.34.13.3-.12,33.16-13.31,4.21-1.69v-13.98l-.07-1.12Z" />
                      </svg>
                    </i>
                  </a>

                  {/* 2. 유튜브 */}
                  <a
                    href="https://www.youtube.com/@atorz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="theme-btn outline-btn"
                  >
                    YouTube{" "}
                    <i>
                      <RiYoutubeLine size={16} />
                    </i>
                  </a>

                  {/* 3. 구글 플레이 */}
                  <a
                    href="https://play.google.com/store/apps/dev?id=5233406322989418544"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="theme-btn outline-btn"
                  >
                    Google Play{" "}
                    <i>
                      <RiGooglePlayLine size={16} />
                    </i>
                  </a>

                  {/* 4. 앱 스토어 */}
                  <a
                    href="https://apps.apple.com/developer/cha-woo-lee/id1772191027"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="theme-btn outline-btn"
                  >
                    App Store{" "}
                    <i>
                      <RiAppleLine size={16} />
                    </i>
                  </a>
                </div>
              </div>
            </SlideUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
