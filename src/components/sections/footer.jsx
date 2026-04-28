import Link from 'next/link'
import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="main-footer">
            <div className="footer-bottom pt-50 pb-40">
                <div className="container">
                    <div className="row">
                        {/* 좌측: 카피라이트 문구 */}
                        <div className="col-lg-6">
                            <div className="copyright-text">
                                <p>
                                    atorz.com | 2016-{year}, @ All Rights Reserved.
                                </p>
                            </div>
                        </div>
                        {/* 우측: 소셜 미디어 로고 링크 */}
                        <div className="col-lg-6">
                            <div className="copyright-text extra-copyright">
                                <div className="social-links" style={{ display: 'flex', gap: '20px', justifyContent: 'flex-end' }}>
                                    <a href="https://play.google.com/store/apps/dev?id=5233406322989418544" target="_blank" rel="noopener noreferrer" title="Android App">
                                        <i className="fab fa-android"></i>
                                    </a>
                                    <a href="https://apps.apple.com/us/developer/cha-woo-lee/id1772191027" target="_blank" rel="noopener noreferrer" title="iOS App">
                                        <i className="fab fa-apple"></i>
                                    </a>
                                    <a href="https://www.youtube.com/@atorz" target="_blank" rel="noopener noreferrer" title="YouTube">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
