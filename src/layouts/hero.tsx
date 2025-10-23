import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Player } from "@lottiefiles/react-lottie-player"; // If using lottie-player

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const lottieRef = useRef<Player | null>(null); // ✅ typed for Lottie

  useEffect(() => {
    const section = sectionRef.current;
    const vid = videoRef.current;
    const overlay = overlayRef.current;
    const lottie = lottieRef.current;
    if (!section || !vid || !overlay || !lottie) return;

    // Phase 1
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=50%",
      scrub: 1.2,
      onUpdate: (self) => {
        const progress = self.progress; // 0 → 1
        // lottie.goToAndStop(progress * 100, true); // ✅ no error now
        gsap.to(vid, { scale: 1.4 * progress + 1, overwrite: true });
        gsap.to(overlay, { opacity: 0.2 + progress * 0.6, overwrite: true });
      },
    });

    // Phase 2
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=100%",
      pin: true,
      pinSpacing: false,
      scrub: 1.2,
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover will-change-transform"
          src="/assets/videos/cafe1.webm"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black z-10"
        style={{ opacity: 0.2 }}
      ></div>

      {/* Center Lottie Animation */}
      <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
        {/* Example: */}
        {/* <Player ref={lottieRef} autoplay loop src="/assets/lottie.json" /> */}
      </div>
    </section>
  );
}
