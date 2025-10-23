
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies

export default function AppWrapper({ children }: any) {
    // useEffect(() => {
    //     const lenis = new Lenis({ duration: 0.5, easing: t => t });
    //     function raf(time) {
    //         lenis.raf(time);
    //         requestAnimationFrame(raf);
    //     }
    //     requestAnimationFrame(raf);
    //     lenis.on('scroll', ScrollTrigger.update);
    //     return () => lenis.destroy();
    // }, []);

    return children;
}
