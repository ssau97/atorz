import Link from 'next/link'
import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="main-footer">
            <div className="footer-bottom pt-50 pb-40">
                <div className="container">
                    <div className="row">
                        {/* 좌측: 카피라이트 */}
                        <div className="col-lg-6">
                            <div className="copyright-text">
                                <p>
                                    atorz.com | 2016-{year}, @ All Rights Reserved.
                                </p>
                            </div>
                        </div>
                        {/* 우측: 소셜 미디어 아이콘 */}
                        <div className="col-lg-6">
                            <div className="copyright-text extra-copyright">
                                <div className="social-links" style={{ display: 'flex', gap: '20px', justifyContent: 'flex-end', alignItems: 'center' }}>
                                    
                                    {/* 안드로이드 (Google Play) */}
                                    <a href="https://play.google.com/store/apps/dev?id=5233406322989418544" target="_blank" rel="noopener noreferrer" title="Android Apps">
                                        <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
        <path d="M4.3,1l12.7,13.5L4.3,28c-0.2,0-0.4-0.1-0.6-0.2L2.4,26.6C2.1,26.2,2,25.8,2,25.4V3.6c0-0.4,0.1-0.8,0.4-1.2l1.3-1.2 C3.9,1.1,4.1,1.1,4.3,1z"/>
        <path d="M17,14.5l4.2-4.5l5.9,3.2c0.7,0.4,1.1,1,1.1,1.8s-0.4,1.5-1.1,1.8l-5.9,3.2L17,14.5z"/>
        <path d="M17,14.5L4.3,1c0.2,0,0.4,0.1,0.6,0.2l12.1,6.8L17,14.5z"/>
        <path d="M17,14.5L17,14.5l4.2,7.5l-12.1,6.8c-0.2,0-0.4,0.1-0.6,0.2L17,14.5z"/>
    </svg>
                                    </a>

                                    {/* 애플 (App Store) */}
                                    <a href="https://apps.apple.com/developer/cha-woo-lee/id1772191027" target="_blank" rel="noopener noreferrer" title="iOS Apps">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.66C20.06 16.73 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                                        </svg>
                                    </a>

                                    {/* 유튜브 */}
                                    <a href="https://www.youtube.com/@atorz" target="_blank" rel="noopener noreferrer" title="YouTube Channel">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
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
