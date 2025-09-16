import Link from "next/link";
// data-dsn-text="mexdot"  effect-ajax
export const Header = () => (
    <header id="site_menu_header" className="site-header d-none">
        <div className="main-logo">
            <Link href="/" className="custom-logo-link main-brand" rel="home" aria-current="page">
                <img src="/assets/img/logo-2.png" className="custom-logo logo-light" alt="mexdot"/>
                <img src="/assets/img/logo-2.png" className="custom-logo logo-dark" alt="mexdot"/>
            </Link>
        </div>
        <nav className="main-navigation">
            <div className="menu-cover-title header-container dsn-container">MENU</div>
            {/*id="dsn-primary-list"*/}
            <ul className="dsn-socials box-social">

                <li>
                    <a
                        href="https://www.facebook.com/100584466392318"
                        target="_blank"
                        className="social-icon facebook"
                    >
                        <svg fill="#ffffff" width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 12a10.9 10.9 0 1 0-11.5 9.95v-7.05h-2.4v-2.9h2.4V9.41c0-2.37 1.42-3.68 3.59-3.68 1.04 0 2.13.18 2.13.18v2.35h-1.2c-1.18 0-1.54.73-1.54 1.48v1.77h2.62l-.42 2.9h-2.2V22A10 10 0 0 0 22 12z" />
                        </svg>
                    </a>
                </li>


                <li>
                    <a
                        href="https://www.instagram.com/theglorytodayshow"
                        target="_blank"
                        className="social-icon instagram"
                    >
                        <svg fill="#ffffff" width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.956.24 2.414.403a4.85 4.85 0 0 1 1.75 1.013 4.85 4.85 0 0 1 1.013 1.75c.163.458.347 1.245.403 2.414.058 1.267.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.956-.403 2.414a4.85 4.85 0 0 1-1.013 1.75 4.85 4.85 0 0 1-1.75 1.013c-.458.163-1.245.347-2.414.403-1.267.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.956-.24-2.414-.403a4.85 4.85 0 0 1-1.75-1.013 4.85 4.85 0 0 1-1.013-1.75c-.163-.458-.347-1.245-.403-2.414C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.956.403-2.414a4.85 4.85 0 0 1 1.013-1.75 4.85 4.85 0 0 1 1.75-1.013c.458-.163 1.245-.347 2.414-.403C8.416 2.212 8.8 2.2 12 2.2zm0 1.8c-3.16 0-3.536.012-4.782.07-1.06.048-1.638.22-2.022.365-.52.187-.892.412-1.285.805-.393.393-.618.765-.805 1.285-.145.384-.317.963-.365 2.022-.058 1.246-.07 1.622-.07 4.782s.012 3.536.07 4.782c.048 1.06.22 1.638.365 2.022.187.52.412.892.805 1.285.393.393.765.618 1.285.805.384.145.963.317 2.022.365 1.246.058 1.622.07 4.782.07s3.536-.012 4.782-.07c1.06-.048 1.638-.22 2.022-.365.52-.187.892-.412 1.285-.805.393-.393.618-.765.805-1.285.145-.384.317-.963.365-2.022.058-1.246.07-1.622.07-4.782s-.012-3.536-.07-4.782c-.048-1.06-.22-1.638-.365-2.022a3.29 3.29 0 0 0-.805-1.285 3.29 3.29 0 0 0-1.285-.805c-.384-.145-.963-.317-2.022-.365-1.246-.058-1.622-.07-4.782-.07zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.844a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
                        </svg>
                    </a>
                </li>

                <li>
                    <a
                        href="https://twitter.com/Glorytodayshow"
                        target="_blank"
                        className="social-icon twitter"
                    >
                        <svg fill="#ffffff" width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23 3a10.9 10.9 0 0 1-3.14.86A4.48 4.48 0 0 0 22.4.36a9.04 9.04 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.88 0c-2.5 0-4.5 2.03-4.5 4.53 0 .36.04.71.12 1.05C8 5.4 4.28 3.57 1.67.89a4.52 4.52 0 0 0-.61 2.28c0 1.57.8 2.96 2 3.77a4.52 4.52 0 0 1-2.04-.57v.06c0 2.2 1.56 4.03 3.64 4.44a4.52 4.52 0 0 1-2.03.08c.57 1.78 2.24 3.08 4.22 3.12A9.07 9.07 0 0 1 0 19.54a12.8 12.8 0 0 0 6.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.41-.01-.61A9.2 9.2 0 0 0 23 3z"/>
                        </svg>
                    </a>
                </li>


                <li>
                    <a
                        href="https://www.youtube.com/@Theglorytodayshow"
                        target="_blank"
                        className="social-icon youtube"
                    >
                        <svg fill="#ffffff" width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.5 6.2a2.88 2.88 0 0 0-2.03-2.04C19.24 3.75 12 3.75 12 3.75s-7.24 0-9.47.41a2.88 2.88 0 0 0-2.03 2.04A29.9 29.9 0 0 0 0 12a29.9 29.9 0 0 0 .5 5.8 2.88 2.88 0 0 0 2.03 2.04C4.76 20.25 12 20.25 12 20.25s7.24 0 9.47-.41a2.88 2.88 0 0 0 2.03-2.04A29.9 29.9 0 0 0 24 12a29.9 29.9 0 0 0-.5-5.8zM9.75 15.5v-7l6 3.5-6 3.5z"/>
                        </svg>
                    </a>
                </li>


                <li>
                    <a
                        href="https://twitch.tv/theglorytoday"
                        target="_blank"
                        className="social-icon twitch"
                    >
                        <svg fill="#ffffff" width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 2l-2 4v14h6v4h4l4-4h4l4-4V2H4zm15 10h-3v4h-2v-4H9v-2h7v-3h2v3h3v2z"/>
                        </svg>
                    </a>
                </li>


                <li>
                    <a
                        href="https://www.tiktok.com/@theglorytoday"
                        target="_blank"
                        className="social-icon tiktok"
                    >
                        <svg fill="#ffffff" width="22" height="23" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
                        </svg>
                    </a>
                </li>

                <li>
                    <Link title="Home" href="/contact">
                        Contact Us
                    </Link>
                </li>
            </ul>


            <div className="container-content  d-flex flex-column justify-content-center section-margin">
                <div className="nav__info">
                    <div className="nav-content">
                        <h5 className="sm-title-block mb-10">Studio</h5>
                        26-30 New Damietta El-Mahalla El-Kubra, SK1 66LM
                    </div>
                    <div className="nav-content mt-30">
                        <h5 className="sm-title-block mb-10">Contact</h5>
                        <p className="links over-hidden mb-1">
                            <a className="link-hover d-block" href="tel:00201004392260"
                               data-hover-text="+00 (2)012 3321">
                                +00 (2)01004392260
                            </a>
                            <a className="link-hover" href="tel:00201024552406" data-hover-text="+00 (2)012 3321">
                                +00(2)01024552406
                            </a>
                        </p>
                        <p className="links over-hidden">
                            <a className="link-hover" href="mailto:info@dsngrid.com" data-hover-text="info@dsngrid.com">
                                info@dsngrid.com
                            </a>
                        </p>
                    </div>
                </div>
                <div className="nav-social nav-content mt-30">
                    <div className="nav-social-inner p-relative">
                        <h5 className="sm-title-block mb-10">Follow us</h5>
						</div>
                </div>
            </div>
        </nav>
        <div id="navbar_toggle" className="navbar-toggle">
                <div className="toggle-icon">
                    <div className="toggle-line"></div>
                    <div className="toggle-line"></div>
                    <div className="toggle-line"></div>
                </div>
                <div className="toggle-text">
                    <div className="text-menu">Menu</div>
                    <div className="text-open">Open</div>
                    <div className="text-close">Close</div>
                </div>
            </div>
            <div className="bg-load background-main"></div>

            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none"
                 className="bg-load dsn-svg-transition">
                <path vectorEffect="non-scaling-stroke" d="M 0 100 V 100 Q 50 100 100 100 V 100 z"/>
            </svg>
        </header>
)
