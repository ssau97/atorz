import React from "react";
import Link from "next/link";
import SlideUp from "@/utlits/animations/slideUp";
// 우리가 만든 아이콘 라이브러리 임포트
import {
  ShorticleIcon,
  YoutubeIcon,
  PlayStoreIcon,
  AppleIcon,
} from "@/components/ui/Icons";

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

                {/* 버튼 그룹 */}
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
                  {/* 1. 쇼티클 (라이브러리 아이콘 적용) */}
                  <a
                    href="https://shorticle.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="theme-btn"
                  >
                    Shorticle{" "}
                    <i
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        marginLeft: "6px",
                      }}
                    >
                      <ShorticleIcon height={16} width={10} />
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
                    <i
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        marginLeft: "6px",
                      }}
                    >
                      <YoutubeIcon width={16} height={12} />
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
                    <i
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        marginLeft: "6px",
                      }}
                    >
                      <PlayStoreIcon width={16} height={16} />
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
                    <i
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        marginLeft: "6px",
                      }}
                    >
                      <AppleIcon width={16} height={16} />
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
