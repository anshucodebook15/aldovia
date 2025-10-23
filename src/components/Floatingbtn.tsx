// import { useEffect, useRef, useState } from "react";
// // import "./FloatingSnapButton.css";

// /**
//  * FloatingSnapButton
//  * Props:
//  *  - size (px) default 64
//  *  - margin (px) distance from edges when snapped, default 12
//  *  - storageKey (string) localStorage key to persist position, default 'floating-pos'
//  *  - onClick (fn) click handler
//  */
// export default function FloatingSnapButton({
//   size = 64,
//   margin = 12,
//   storageKey = "floating-pos",
//   onClick = () => {},
//   children = "★",
// }) {
//   const elRef = useRef(null);
//   const dragRef = useRef({
//     dragging: false,
//     startX: 0,
//     startY: 0,
//     originX: 0,
//     originY: 0,
//   });

//   // position stored as top,left (px)
//   const [pos, setPos] = useState({ x: null, y: null });
//   const [transitioning, setTransitioning] = useState(false);

//   // initialize position from storage or default bottom-right
//   useEffect(() => {
//     const saved = localStorage.getItem(storageKey);
//     const w = window.innerWidth;
//     const h = window.innerHeight;
//     const defaultPos = {
//       x: w - size - margin,
//       y:
//         h -
//         size -
//         margin -
//         (window.visualViewport ? window.visualViewport.offsetTop : 0),
//     };

//     if (saved) {
//       try {
//         const p = JSON.parse(saved);
//         // ensure within bounds
//         setPos(clampPosition(p.x, p.y, size, margin));
//         return;
//       } catch (e) {}
//     }
//     setPos(defaultPos);
//   }, [size, margin, storageKey]);

//   // keep inside bounds on resize
//   useEffect(() => {
//     function onResize() {
//       if (pos.x === null) return;
//       setPos((prev) => clampPosition(prev.x, prev.y, size, margin));
//     }
//     window.addEventListener("resize", onResize);
//     // visualViewport change (mobile keyboard) adjust
//     if (window.visualViewport) {
//       window.visualViewport.addEventListener("resize", onResize);
//       window.visualViewport.addEventListener("scroll", onResize);
//     }
//     return () => {
//       window.removeEventListener("resize", onResize);
//       if (window.visualViewport) {
//         window.visualViewport.removeEventListener("resize", onResize);
//         window.visualViewport.removeEventListener("scroll", onResize);
//       }
//     };
//   }, [pos, size, margin]);

//   // helper: clamp within viewport bounds
//   function clampPosition(x, y, sizePx, marginPx) {
//     const vw = window.innerWidth;
//     const vh = window.innerHeight;
//     const maxX = vw - sizePx - marginPx;
//     const maxY = vh - sizePx - marginPx;
//     const minX = marginPx;
//     const minY = marginPx;
//     return {
//       x: Math.min(Math.max(x ?? minX, minX), maxX),
//       y: Math.min(Math.max(y ?? minY, minY), maxY),
//     };
//   }

//   // pointer down (mouse or touch)
//   function handlePointerDown(e) {
//     e.preventDefault();
//     const pointer = getPointer(e);
//     const rect = elRef.current.getBoundingClientRect();

//     dragRef.current = {
//       dragging: true,
//       startX: pointer.clientX,
//       startY: pointer.clientY,
//       originX: pos.x,
//       originY: pos.y,
//     };

//     // stop CSS transition while dragging
//     setTransitioning(false);

//     // attach move/up to document to follow pointer outside the element
//     document.addEventListener("pointermove", handlePointerMove);
//     document.addEventListener("pointerup", handlePointerUp);
//     // capture pointer
//     if (elRef.current.setPointerCapture) {
//       try {
//         elRef.current.setPointerCapture(e.pointerId);
//       } catch (err) {}
//     }
//   }

//   function handlePointerMove(e) {
//     if (!dragRef.current.dragging) return;
//     const pointer = getPointer(e);
//     const dx = pointer.clientX - dragRef.current.startX;
//     const dy = pointer.clientY - dragRef.current.startY;
//     const nextX = dragRef.current.originX + dx;
//     const nextY = dragRef.current.originY + dy;
//     setPos(clampPosition(nextX, nextY, size, margin));
//   }

//   function handlePointerUp(e) {
//     if (!dragRef.current.dragging) return;
//     dragRef.current.dragging = false;

//     // remove listeners
//     document.removeEventListener("pointermove", handlePointerMove);
//     document.removeEventListener("pointerup", handlePointerUp);

//     // snap to nearest edge (left or right). You can extend to top/bottom if desired.
//     const vw = window.innerWidth;
//     const centerX = pos.x + size / 2;
//     const snapToLeft = centerX < vw / 2;

//     const targetX = snapToLeft ? margin : vw - size - margin;
//     const targetY = clampPosition(pos.x, pos.y, size, margin).y;

//     // animate using CSS transition
//     setTransitioning(true);
//     setPos({ x: targetX, y: targetY });

//     // persist after transition ends
//     // transition duration in CSS = 200ms (see css). Use timeout slightly longer.
//     setTimeout(() => {
//       setTransitioning(false);
//       localStorage.setItem(
//         storageKey,
//         JSON.stringify({ x: targetX, y: targetY })
//       );
//     }, 220);
//   }

//   function handleClick(e) {
//     // If the action was a drag, avoid firing click. We can decide threshold, but pointer events suppress click when moved.
//     onClick(e);
//   }

//   // helper to get unified pointer from mouse/touch events
//   function getPointer(e) {
//     if (e.touches && e.touches[0]) return e.touches[0];
//     return e;
//   }

//   if (pos.x === null) return null; // not mounted yet

//   const style = {
//     width: size,
//     height: size,
//     transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
//     transition: transitioning
//       ? "transform 0.18s cubic-bezier(.2,.9,.2,1)"
//       : "none",
//     borderRadius: size / 2,
//   };

//   return (
//     <div
//       ref={elRef}
//       className="floating-snap-btn"
//       style={style}
//       role="button"
//       tabIndex={0}
//       onPointerDown={handlePointerDown}
//       onClick={handleClick}
//       aria-label="Floating shortcut"
//     >
//       <div className="floating-snap-inner">{children}</div>
//     </div>
//   );
// }
