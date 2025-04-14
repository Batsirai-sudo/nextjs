import { Fragment } from "react";

export const Loader = () => (
    <Fragment>
        <div id="dsn_preloader" className="preloader">
            <div className="dsnload p-absolute">
                <span className="dsnload__row">
                    <span className="dsnload__img">
                        <img src="assets/img/logo.png" className="logo-dark" alt="mexdot" decoding="async" loading="lazy"/>
                        <img src="assets/img/logo.png" className="logo-light" alt="mexdot" decoding="async" loading="lazy"/>
                    </span>
                </span>
                <span className="dsnload__row dsnload__row--sibling">
                    <span className="dsnload__img">
                        <img src="assets/img/logo.png" className="logo-dark" alt="mexdot" decoding="async" loading="lazy"/>
                        <img src="assets/img/logo.png" className="logo-light" alt="mexdot" decoding="async" loading="lazy"/>
                    </span>
                </span>
                <span className="dsnload__row dsnload__row--sibling">
                    <span className="dsnload__img">
                        <img src="assets/img/logo.png" className="logo-dark" alt="mexdot" decoding="async" loading="lazy"/>
                        <img src="assets/img/logo.png" className="logo-light" alt="mexdot" decoding="async" loading="lazy"/>
                    </span>
                </span>
                <span className="dsnload__row dsnload__row--sibling">
                    <span className="dsnload__img">
                        <img src="assets/img/logo.png" className="logo-dark" alt="mexdot" decoding="async" loading="lazy"/>
                        <img src="assets/img/logo.png" className="logo-light" alt="mexdot" decoding="async" loading="lazy"/>
                    </span>
                </span>
            </div>
            <div className="logo-box v-middle">
                <h3 className="title text-upper">The Glory Today - Show</h3>
            </div>
            <div className="loading-count">
                <p>0</p>
            </div>
            <span className="loading-text text-uppercase mt-30 dsn-container">Loading ...</span>
            <div className="bg-load background-section d-flex align-items-end dsn-bg-pattern bg-offset bg-square">
                <svg className="dsn-separator-bottom dsn-icon-assistant-color" width="100%" height="100%" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path className="path-anim separator__path" data-dsn-to="M 0 0 C 40 0 55 0 100 0 L 0 0 Z" vectorEffect="non-scaling-stroke" d="M 0 0 C 40 16 75 10 100 0 L 0 0 Z"></path>
                </svg>
            </div>
        </div>
        <svg width="0" height="0" className="p-absolute hidden">
            <defs>
                <filter id="buttonFilter">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur"></feGaussianBlur>
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="buttonFilter"></feColorMatrix>
                    <feComposite in="SourceGraphic" in2="buttonFilter" operator="atop"></feComposite>
                    <feBlend in="SourceGraphic" in2="buttonFilter"></feBlend>
                </filter>
            </defs>
        </svg>
    </Fragment>
);