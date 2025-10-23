// src/components/ScrollToHash.jsx
import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToHash() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace("#", "");
            const el = document.getElementById(id);
            if (el) {
                // small delay ensures DOM is ready
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        }
    }, [location]);

    return null;
}
