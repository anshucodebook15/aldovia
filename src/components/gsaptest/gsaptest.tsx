// import { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { useAssets } from "../../hooks/useAssets";

// const BasicGSAP = () => {
//   const container = useRef(null);

//   useGSAP(
//     () => {
//       gsap.to(".box", {
//         x: 100,
//         rotation: 360,
//         duration: 2,
//       });
//     },
//     { scope: container }
//   );

//   return (
//     <>
//       <div ref={container} className="container">
//         <div className="box w-10 h-10 bg-amber-500"></div>
//       </div>
//     </>
//   );
// };

const ClickGSAP = () => {
  return (
    <>
      <div>
        <h1>Lets Get GSAP!</h1>
      </div>
    </>
  );
};

const Gsaptest = () => {
  return (
    <>
      <div className="min-h-[90dvh] min-w-[90dvw] flex justify-center items-center">
        <ClickGSAP />
      </div>
    </>
  );
};

export default Gsaptest;
