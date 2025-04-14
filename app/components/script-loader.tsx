'use client';

import { useEffect } from 'react';
import { loadScriptsSequentially } from '@/app/utils/scripts-loader';

export default function ScriptLoader() {
    useEffect( () => {
        loadScriptsSequentially( [
            "assets/js/jquery-3.7.1.js",
            "assets/js/plugins.js",
            "assets/js/plugins/dsn-grid.js",
            "assets/js/custom.js",
        ] ).then();
    }, [] );

    return null; // This component doesn't render anything
}
