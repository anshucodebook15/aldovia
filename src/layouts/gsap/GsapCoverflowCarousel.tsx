// import { useEffect, useRef, useState } from "react";
// import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
// import gsap from "gsap";

// /**
//  * GSAP Coverflow Carousel
//  * - 3D coverflow-style layout
//  * - Drag (mouse/touch), wheel, arrows, dots
//  * - Autoplay with pause-on-hover & pause-on-interact
//  * - Snaps to nearest slide
//  * - Tailwind for styling
//  *
//  * Usage:
//  * 1) npm i gsap lucide-react
//  * 2) Drop <GsapCoverflowCarousel /> anywhere
//  */

// const SLIDES = [
//   {
//     title: "Azure Coast",
//     subtitle: "Waves & cliffs",
//     src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
//   },
//   {
//     title: "Neon City",
//     subtitle: "Night market",
//     src: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1600&auto=format&fit=crop",
//   },
//   {
//     title: "Golden Dunes",
//     subtitle: "Silent desert",
//     src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
//   },
//   {
//     title: "Mossy Forest",
//     subtitle: "Fog & ferns",
//     src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1600&auto=format&fit=crop",
//   },
//   {
//     title: "Crimson Peaks",
//     subtitle: "Alpenglow",
//     src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop",
//   },
// ];

// export default function GsapCoverflowCarousel() {
//   const rootRef = useRef(null);
//   const trackRef = useRef(null);
//   const cardRefs = useRef([]);
//   const [active, setActive] = useState(0);
//   const [autoplay, setAutoplay] = useState(true);

//   // configurable layout values
//   const gap = 240; // horizontal spacing between cards
//   const depth = 220; // z-space per step
//   const rotate = 35; // deg per side
//   const scaleDecay = 0.14; // scale drop per step
//   const blurPerStep = 1.5; // px per step

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       let position = 0; // fractional index
//       let dragging = false;
//       let dragStartX = 0;
//       let dragStartPos = 0;
//       let lastX = 0;
//       let vX = 0; // simple velocity for flicks
//       let rafId = 0;
//       let autoplayTween = null;

//       const clampIndex = gsap.utils.clamp(0, SLIDES.length - 1);
//       const lerp = gsap.utils.interpolate;

//       // ensure cards array refs exist
//       cardRefs.current = cardRefs.current.slice(0, SLIDES.length);

//       // baseline 3D
//       gsap.set(trackRef.current, { transformStyle: "preserve-3d", perspective: 1200 });
//       gsap.set(cardRefs.current, {
//         transformOrigin: "50% 50%",
//         position: "absolute",
//         top: 0,
//         left: "50%",
//         xPercent: -50,
//       });

//       const layout = () => {
//         // smooth active detection
//         const nearest = Math.round(position);
//         if (nearest !== active) setActive(nearest);

//         cardRefs.current.forEach((el, i) => {
//           const offset = i - position; // 0 at center
//           const abs = Math.abs(offset);
//           const sign = Math.sign(offset);

//           const x = offset * gap;
//           const z = -abs * depth;
//           const ry = -sign * Math.min(abs * rotate, rotate);
//           const s = Math.max(0.3, 1 - abs * scaleDecay);
//           const blur = abs * blurPerStep;
//           const o = gsap.utils.clamp(0.35, 1, 1 - abs * 0.22);

//           gsap.set(el, {
//             zIndex: 1000 - Math.round(abs * 100),
//             transform: `translate3d(${x}px, 0px, ${z}px) rotateY(${ry}deg) scale(${s})`,
//             filter: `blur(${blur}px)`
//           });

//           // parallax overlay & vignette via CSS variables
//           el.style.setProperty("--alpha", String(o));
//         });
//       };

//       const render = () => {
//         layout();
//         rafId = requestAnimationFrame(render);
//       };
//       rafId = requestAnimationFrame(render);

//       // --- Interaction helpers ---
//       const snapTo = (i, opts = {}) => {
//         const target = clampIndex(i);
//         gsap.to({}, { // dummy tween to update "position" with onUpdate
//           duration: opts.duration ?? 0.7,
//           ease: opts.ease ?? "power3.out",
//           onUpdate: () => {
//             position = lerp(position, target, 0.18);
//           },
//           onComplete: () => {
//             position = target;
//           },
//         });
//       };

//       const next = () => snapTo(Math.round(position) + 1);
//       const prev = () => snapTo(Math.round(position) - 1);

//       // Wheel
//       const onWheel = (e) => {
//         e.preventDefault();
//         const delta = Math.sign(e.deltaY);
//         snapTo(Math.round(position) + delta, { duration: 0.5 });
//         pauseAutoplay();
//       };

//       // Dragging
//       const onPointerDown = (e) => {
//         dragging = true;
//         dragStartX = (e.touches ? e.touches[0].clientX : e.clientX);
//         dragStartPos = position;
//         lastX = dragStartX;
//         vX = 0;
//         pauseAutoplay();
//         window.addEventListener("pointermove", onPointerMove);
//         window.addEventListener("pointerup", onPointerUp);
//         window.addEventListener("touchmove", onPointerMove, { passive: false });
//         window.addEventListener("touchend", onPointerUp);
//       };

//       const onPointerMove = (e) => {
//         const x = (e.touches ? e.touches[0].clientX : e.clientX);
//         const dx = x - lastX;
//         lastX = x;
//         vX = gsap.utils.clamp(-35, 35, dx);
//         const deltaIndex = -dx / gap; // convert px drag -> index movement
//         position = dragStartPos + (dragStartX - x) / gap;
//         e.preventDefault?.();
//       };

//       const onPointerUp = () => {
//         dragging = false;
//         // momentum flick
//         const momentum = -vX / gap * 4; // scale velocity to index units
//         const target = Math.round(position + momentum);
//         snapTo(target);
//         window.removeEventListener("pointermove", onPointerMove);
//         window.removeEventListener("pointerup", onPointerUp);
//         window.removeEventListener("touchmove", onPointerMove);
//         window.removeEventListener("touchend", onPointerUp);
//       };

//       // Keyboard
//       const onKey = (e) => {
//         if (e.key === "ArrowRight") { next(); pauseAutoplay(); }
//         if (e.key === "ArrowLeft") { prev(); pauseAutoplay(); }
//       };

//       // Autoplay
//       const playAutoplay = () => {
//         if (!autoplay) return;
//         clearAutoplay();
//         autoplayTween = gsap.delayedCall(3.5, () => {
//           next();
//           playAutoplay();
//         });
//       };
//       const clearAutoplay = () => {
//         if (autoplayTween) { autoplayTween.kill(); autoplayTween = null; }
//       };
//       const pauseAutoplay = () => {
//         clearAutoplay();
//         // resume after short idle
//         if (autoplay) autoplayTween = gsap.delayedCall(4.5, () => playAutoplay());
//       };

//       // Hover pause
//       const onEnter = () => pauseAutoplay();
//       const onLeave = () => playAutoplay();

//       // Attach listeners
//       const root = rootRef.current;
//       root.addEventListener("wheel", onWheel, { passive: false });
//     //   root.addEventListener("pointerdown", onPointerDown);
//     //   root.addEventListener("touchstart", onPointerDown, { passive: true });
//     //   root.addEventListener("mouseenter", onEnter);
//     //   root.addEventListener("mouseleave", onLeave);
//     //   window.addEventListener("keydown", onKey);

//       playAutoplay();

//       return () => {
//         cancelAnimationFrame(rafId);
//         window.removeEventListener("keydown", onKey);
//         root.removeEventListener("wheel", onWheel);
//         // root.removeEventListener("pointerdown", onPointerDown);
//         // root.removeEventListener("touchstart", onPointerDown);
//         // root.removeEventListener("mouseenter", onEnter);
//         // root.removeEventListener("mouseleave", onLeave);
//         clearAutoplay();
//       };
//     }, rootRef);

//     return () => ctx.revert();
//   }, [autoplay, gap, depth, rotate, scaleDecay]);

//   return (
//     <div ref={rootRef} className="relative w-full h-[520px] md:h-[580px] overflow-hidden select-none">
//       {/* Background gradient */}
//       <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/25 via-transparent to-black/50"></div>

//       {/* Track */}
//       <div ref={trackRef} className="absolute inset-0">
//         {SLIDES.map((slide, i) => (
//           <div
//             key={i}
//             ref={(el) => (cardRefs.current[i] = el!)}
//             className="group w-[72vw] md:w-[520px] h-[70%] md:h-[76%] rounded-2xl overflow-hidden shadow-2xl will-change-transform"
//             style={{
//               backgroundImage: `url(${slide.src})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               // overlay controls via css vars from layout()
//             }}
//           >
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-[var(--alpha)] transition-opacity" />
//             <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 flex items-end justify-between">
//               <div className="text-white drop-shadow">
//                 <div className="text-xl md:text-2xl font-semibold">{slide.title}</div>
//                 <div className="text-white/80 text-sm md:text-base">{slide.subtitle}</div>
//               </div>
//               <button className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-xl backdrop-blur">
//                 View
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Controls */}
//       {/* <div className="absolute inset-x-0 bottom-4 md:bottom-6 flex items-center justify-center gap-3">
//         <button
//           className="p-2 rounded-2xl bg-white/70 hover:bg-white shadow"
//           onClick={() => setAutoplay((p) => { const next = !p; return next; })}
//           aria-label={autoplay ? "Pause autoplay" : "Play autoplay"}
//         >
//           {autoplay ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
//         </button>
//         <Dots total={SLIDES.length} active={active} onSelect={(i) => setActive(i)} />
//       </div> */}

//       {/* Arrows */}
//       {/* <div className="absolute inset-y-0 left-2 right-2 flex items-center justify-between pointer-events-none">
//         <button
//           className="pointer-events-auto p-2 md:p-3 rounded-full bg-white/70 hover:bg-white shadow"
//           onClick={() => setActive((i) => Math.max(0, i - 1))}
//           aria-label="Previous slide"
//         >
//           <ChevronLeft className="w-6 h-6" />
//         </button>
//         <button
//           className="pointer-events-auto p-2 md:p-3 rounded-full bg-white/70 hover:bg-white shadow"
//           onClick={() => setActive((i) => Math.min(SLIDES.length - 1, i + 1))}
//           aria-label="Next slide"
//         >
//           <ChevronRight className="w-6 h-6" />
//         </button>
//       </div> */}
//     </div>
//   );
// }

// function Dots({ total, active, onSelect }) {
//   return (
//     <div className="flex gap-2">
//       {Array.from({ length: total }).map((_, i) => (
//         <button
//           key={i}
//           onClick={() => onSelect(i)}
//           className={`h-2.5 rounded-full transition-all ${
//             i === active ? "w-6 bg-white" : "w-2.5 bg-white/50 hover:bg-white/70"
//           }`}
//           aria-label={`Go to slide ${i + 1}`}
//         />
//       ))}
//     </div>
//   );
// }
