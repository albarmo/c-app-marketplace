import { useState, useEffect } from 'react';
import { GOOGLE_MAPS_API_KEY } from "@/lib/config";


export function useGoogleMapsScript() {
    const [isScriptLoaded, setIsScriptLoaded] = useState(false);

    useEffect(() => {
        const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');

        if (existingScript) {
            if (window.google) {
                setIsScriptLoaded(true);
            } else {
                existingScript.addEventListener("load", () => setIsScriptLoaded(true));
            }
            return;
        }

        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = () => setIsScriptLoaded(true);
        document.head.appendChild(script);

        return () => {
            script.removeEventListener("load", () => setIsScriptLoaded(true));
        };
    }, []);

    return isScriptLoaded;
}
