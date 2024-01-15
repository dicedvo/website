import { useEffect, useState } from "react";

export default function useScrollRelPosition() {
    const [scrollPos, setScrollPos] = useState(0);

    function getScrollPercent() {
        const h = document.documentElement,
            b = document.body,
            st = 'scrollTop',
            sh = 'scrollHeight';
        return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight);
    }

    function monitorScroll() {
        setScrollPos(getScrollPercent());
    }

    useEffect(() => {
        window.addEventListener('scroll', monitorScroll);
        return () => {
            window.removeEventListener('scroll', monitorScroll);
        }
    }, [scrollPos]);

    return scrollPos;
}