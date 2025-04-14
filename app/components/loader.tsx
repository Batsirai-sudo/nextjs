import { Fragment } from "react";

export const Loader = () => (
    <Fragment>
        <video className="video-loader" autoPlay loop muted playsInline>
            <source src="assets/img/loading/glory-today.mp4" type="video/mp4"/>
            <p>Testing</p>
        </video>
    </Fragment>
);
