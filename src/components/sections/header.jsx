"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuList } from "@/utlits/fackData/menuList";
import Image from "next/image";
// 어제 만든 아이콘 라이브러리 임포트
import {
  AndroidIcon,
  AppleIcon,
  YoutubeIcon,
  ShorticleIcon,
} from "@/components/ui/Icons";

const Header = () => {
  const pathName = usePathname();
  const [isSticky, setisSticky] = useState(false);

  useEffect(() => {
    const navbar_collapse = document.querySelector(".navbar-collapse");
    if (navbar_collapse) navbar_collapse.classList.remove("show");
  }, [pathName]);

  useEffect(() => {
    window.addEventListener("scroll", stickyHeader);
    return () => window.removeEventListener("scroll", stickyHeader);
  }, []);

  const stickyHeader = () => {
    const scrollTop = window.scrollY;
    setisSticky(scrollTop > 85);
  };

  return (
    <header className={`main-header ${isSticky ? "fixed-header" : ""}`}>
      <div className="header-upper">
        <div className="container">
          <div className="header-inner d-flex align-items-center">
            {/* 로고 영역 */}
            <div className="logo-outer" style={{ flexShrink: 0 }}>
              <div className="logo">
                <Link href="/">
                  <Image
                    width={120}
                    height={40}
                    src={"/images/logo.webp"}
                    alt="Logo"
                    style={{ height: "auto" }}
                    priority
                  />
                </Link>
              </div>
            </div>

            {/* 네비게이션 영역 */}
            <div className="nav-outer clearfix mx-auto">
              <nav className="main-menu navbar-expand-lg">
                <div className="navbar-header">
                  <div className="mobile-logo">
                    <Link href="/">
                      <Image
                        width={105}
                        height={35}
                        src={"/images/logo.webp"}
                        alt="Logo"
                        style={{ width: "105px", height: "auto" }}
                      />
                    </Link>
                  </div>
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse"
                  >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div className="navbar-collapse collapse">
                  <ul className="navigation onepage clearfix">
                    {menuList.map(({ id, label, path }) => (
                      <li key={id}>
                        <Link href={path} className="nav-link-click">
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </div>

            {/* 우측 소셜 링크 영역 */}
            <div className="menu-btns d-none d-lg-block">
              <div
                className="social-links"
                style={{
                  display: "flex",
                  gap: "18px",
                  alignItems: "center",
                }}
              >
                {/* 1. 안드로이드 */}
                <a
                  href="https://play.google.com/store/apps/dev?id=5233406322989418544"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="header-social-icon"
                >
                  <AndroidIcon width={22} height={22} />
                </a>

                {/* 2. 애플 */}
                <a
                  href="https://apps.apple.com/developer/cha-woo-lee/id1772191027"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="header-social-icon"
                >
                  <AppleIcon width={20} height={20} />
                </a>

                {/* 3. 유튜브 */}
                <a
                  href="https://www.youtube.com/@atorz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="header-social-icon"
                >
                  <YoutubeIcon width={20} height={20} />
                </a>

                {/* 4. 쇼티클 */}
                <a
                  href="https://shorticle.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="header-social-icon"
                >
                  <ShorticleIcon width={12.2} height={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
