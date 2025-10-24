// src/components/ScrollVideo.tsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useAssets } from "../../hooks/useAssets";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollVideo() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    // preload and pause
    video.pause();
    video.preload = "auto";
    video.currentTime = 0.01;

    const initAnimation = () => {
      const duration = video.duration || 1;

      if (scrollTriggerRef.current) scrollTriggerRef.current.kill();

      // const scrollDistance = Math.max(duration * 400, 3500); // longer = smoother

      let targetTime = 0;
      let currentTime = 0;
      let rafId: number;

      const smoothUpdate = () => {
        // smooth interpolation between current and target
        currentTime += (targetTime - currentTime) * 0.2;
        video.currentTime = currentTime;
        rafId = requestAnimationFrame(smoothUpdate);
      };
      smoothUpdate();

      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `10000`,
        scrub: 0.5,
        pin: true,
        onUpdate: (self) => {
          targetTime = self.progress * duration;
        },
      });

      ScrollTrigger.refresh();

      return () => cancelAnimationFrame(rafId);
    };

    if (video.readyState >= 1) {
      initAnimation();
    } else {
      video.addEventListener("loadedmetadata", initAnimation);
    }

    return () => {
      video.removeEventListener("loadedmetadata", initAnimation);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const { videos } = useAssets();

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[200vh] bg-black overflow-hidden"
    >
      <video
        ref={videoRef}
        src={videos?.swarn_60 ?? ""}
        playsInline
        muted
        preload="auto"
        className="sticky top-0 w-full h-screen object-cover will-change-transform"
      />
    </section>
  );
}
