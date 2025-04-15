import Link from "next/link";

export const Header = () => (
    <header id="site_menu_header" className="site-header d-none">
        <div className="main-logo">
            <Link href="/" data-dsn-text="mexdot" className="custom-logo-link main-brand effect-ajax" rel="home" aria-current="page">
                <img src="/assets/img/logo-2.png" className="custom-logo logo-light" alt="mexdot"/>
                <img src="/assets/img/logo-2.png" className="custom-logo logo-dark" alt="mexdot"/>
            </Link>
        </div>
        <nav className="main-navigation">
            <div className="menu-cover-title header-container dsn-container">MENU</div>
            {/*id="dsn-primary-list"*/}
            <ul  className="dsn-socials box-social">
                <li>
                    <a href="https://www.facebook.com/100584466392318" target="_blank" className="background-main">
                        <i className="fab fa-facebook-f" aria-hidden="true"></i>
                        <span>FB</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/theglorytodayshow" target="_blank" className="background-main">
                        <i className="fab fa-instagram" aria-hidden="true"></i>
                        <span>IN</span>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/Glorytodayshow" target="_blank" className="background-main">
                        <i className="fab fa-twitter" aria-hidden="true"></i>
                        <span>TW</span>
                    </a>
                </li>
                 <li>
                    <a href="https://www.youtube.com/@Theglorytodayshow" target="_blank" className="background-main">
                        <i className="fab fa-youtube" aria-hidden="true"></i> <span>YT</span>
                    </a>
                </li>
                <li>
                    <a href="https://twitch.tv/theglorytoday" target="_blank" className="background-main">
                        <i className="fab fa-twitch" aria-hidden="true"></i> <span>TH</span>
                    </a>
                </li>
                <li>
                    <a style={{ width: '60px', height: '30px', top: '8px',}} href="https://www.tiktok.com/@theglorytoday" target="_blank" className="background-main">
                        <svg style={{height: '23px', width: '22px',color: 'red',position: 'absolute' }} fill="#ffffff" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/></svg>
                        <span>TK</span>
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
