import Link from "next/link";
import React from "react";
// 아이콘 라이브러리 임포트
import {
  AndroidIcon,
  AppleIcon,
  YoutubeIcon,
  ShorticleIcon,
} from "@/components/ui/Icons";

const Footer = () => {
  const year = new Date().getFullYear();

  // 공통 아이콘 스타일 클래스
  const iconClass =
    "text-white hover:text-gray-400 transition-colors duration-300";

  return (
    <footer className="main-footer">
      <div className="footer-bottom pt-50 pb-40">
        <div className="container">
          <div className="row align-items-center">
            {/* 좌측: 카피라이트 */}
            <div className="col-lg-6 text-center text-lg-start">
              <div className="copyright-text">
                <p>2016-{year} ⓒ atorz.com™</p>
              </div>
            </div>

            {/* 우측: 소셜 미디어 및 서비스 아이콘 */}
            <div className="col-lg-6">
              <div className="copyright-text extra-copyright">
                <div
                  className="social-links justify-content-center justify-content-lg-end"
                  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center",
                  }}
                >
                  {/* 1. 안드로이드 앱 목록 */}
                  <a
                    href="https://play.google.com/store/apps/dev?id=5233406322989418544"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Android Apps"
                  >
                    <AndroidIcon width={24} height={24} />
                  </a>

                  {/* 2. 애플 앱 목록 */}
                  <a
                    href="https://apps.apple.com/developer/cha-woo-lee/id1772191027"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="iOS Apps"
                  >
                    <AppleIcon width={20} height={20} />
                  </a>

                  {/* 3. 유튜브 채널 */}
                  <a
                    href="https://www.youtube.com/@atorz"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="YouTube Channel"
                  >
                    <YoutubeIcon width={20} height={20} />
                  </a>

                  {/* 4. 쇼티클 */}
                  <a
                    href="https://shorticle.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Shorticle"
                  >
                    <ShorticleIcon width={12.2} height={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
