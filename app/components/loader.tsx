'use client';

import { Fragment, useEffect, useRef } from "react";

export const Loader = () => {
    const videoRef = useRef(null);

    useEffect( () => {
        const video = videoRef.current as unknown as HTMLVideoElement;

        if ( ! video ) return;

        let lastBackground = '';
        const handleTimeUpdate = () => {
            const currentTime = video.currentTime;

            let newBackground = currentTime > 1.2 ? 'white' : '#602a66';

            if ( newBackground !== lastBackground ) {
                document.documentElement.style.setProperty( '--loader-color-switch', newBackground );

                lastBackground = newBackground;
            }
        };

        // TODO remove memory lick of this event maybe use closer based or context
        video.addEventListener( 'timeupdate', handleTimeUpdate );

        return () => {
            console.log('unmounting');
            video.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, [] );
    return(
        <div>
        <div id="dsn_preloader" className="preloader">
            <video ref={ videoRef } id="video-loader" className="video-loader" autoPlay loop muted playsInline>
                <source src="assets/img/loading/glory-today.mp4" type="video/mp4"/>
            </video>
            <div className="loading-count">
                <p>0</p>
            </div>
        </div>
    </div>
    );
}
