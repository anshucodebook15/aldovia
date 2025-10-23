// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { useRef } from "react";

// // scrollTrigger from "gsap/ScrollTrigger"

// const GsapFlow = () => {
//   const scrollRef = useRef('');

//   useGSAP(() => {

//     const ele = gsap.utils.toArray(scrollRef.current.children);
//     console.log("eLE", ele);

//     ele.forEach((box, i) => {

//       gsap.to(box, {
//         x: 100 * i,
//         duration: 1,
//         scrollTrigger: {
//           trigger: box,
//           start: 'bottom, bottom',
//           end: 'top 20%',
//           scrub: true,
//         },
//         ease: 'power1.inOut'
//       });

//     })


//   }, [])


//   // console.log("Check Childrens", scrollRef.current.children);


//   return (
//     <div className="bg-gray-800">
//       <div className="w-full h-[100rem]"></div>
//       <div ref={scrollRef}>
//         <div className="box w-30 h-30 rounded-2xl bg-amber-500"></div>
//         <div className="box w-30 h-30 rounded-2xl bg-pink-500"></div>
//         <div className="box w-30 h-30 rounded-2xl bg-blue-500"></div>
//       </div>
//       <div className="w-full h-[100rem]"></div>
//     </div>
//   );
// };

// export default GsapFlow;
