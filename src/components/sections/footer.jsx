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
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 15.3414L20.355 20.2114C20.52 20.4954 20.422 20.8584 20.138 21.0234C19.854 21.1884 19.491 21.0904 19.326 20.8064L16.458 15.8754C15.11 16.5924 13.595 17.0004 12 17.0004C10.405 17.0004 8.89 16.5924 7.542 15.8754L4.674 20.8064C4.509 21.0904 4.146 21.1884 3.862 21.0234C3.578 20.8584 3.48 20.4954 3.645 20.2114L6.477 15.3414C3.766 13.8434 2 10.9634 2 7.65338C2 7.29238 2.292 7.00038 2.653 7.00038H21.347C21.708 7.00038 22 7.29238 22 7.65338C22 10.9634 20.234 13.8434 17.523 15.3414ZM7 11.0004C7.55228 11.0004 8 10.5527 8 10.0004C8 9.4481 7.55228 9 7 9C6.44772 9 6 9.4481 6 10.0004C6 10.5527 6.44772 11.0004 7 11.0004ZM17 11.0004C17.5523 11.0004 18 10.5527 18 10.0004C18 9.4481 17.5523 9 17 9C16.4477 9 16 9.4481 16 10.0004C16 10.5527 16.4477 11.0004 17 11.0004Z"/></svg>
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
