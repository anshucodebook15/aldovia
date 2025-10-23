// src/components/ScrollVideo.tsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useAssets } from "../../hooks/useAssets";

gsap.registerPlugin(ScrollTrigger);

export default function Aldovia() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    video.pause();
    video.preload = "auto";
    video.currentTime = 0;

    const initAnimation = () => {
      const duration = video.duration || 1;
      console.log("🎥 Video duration:", duration);

      // Kill previous ScrollTrigger if any
      if (scrollTriggerRef.current) scrollTriggerRef.current.kill();

      // 💨 Smaller scroll distance = faster frame movement
      const scrollDistance = Math.max(duration * 300, 2500);

      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${scrollDistance}`,
        scrub: 0.5,
        pin: true,
        onUpdate: (self) => {
          const time = self.progress * duration;
          video.currentTime = time;

          if ("requestVideoFrameCallback" in video) {
            (
              video as HTMLVideoElement & {
                requestVideoFrameCallback: (cb: FrameRequestCallback) => void;
              }
            ).requestVideoFrameCallback(() => {});
          } else {
            // video.style.transform = "translateZ(0)";
          }
        },
      });

      ScrollTrigger.refresh();
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
        src={videos?.dolcivd ?? ""}
        playsInline
        muted
        preload="auto"
        className="sticky top-0 w-full h-screen object-cover will-change-transform"
      />
    </section>
  );
}
