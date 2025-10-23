// import "./dolci.css";
import "./style/theme.css";
import {
  Topbar,
  Navbar,
  Hero,
  Delights,
  Gallery,
  Baking,
  Menu,
  // Snapshot,
  Signature,
  Units,
  Footer,
} from "./sections";
import Features from "./sections/Features";
// import { useAssets } from "../../hooks/useAssets";
import Ambience from "./sections/Ambience";

const Home = () => {
  // const { backgrounds } = useAssets();
  return (
    <>
      <div className="herobg relative">
        <Topbar />
        <Navbar />
        <Hero />
      </div>
      <Features />
      <Delights />
      <Gallery />
      <Menu />
      <Ambience />
      <Baking />
      {/* <Snapshot /> */}
      <Signature />
      <Units />
      <Footer />
    </>
  );
};

// const Test = () => {
//   return (
//     <>
//       <div className="w-[1400px] mx-auto">
//         <div className="">
//           <div className="py-10">
//             <h1>Aesthetic Delights at Dolci</h1>
//           </div>
//           <div className="py-10">
//             <h2>Aesthetic Delights at Dolci</h2>
//           </div>
//           <div className="py-10">
//             <h3>
//               Every treat is handcrafted with passion and premium ingredients.
//             </h3>
//           </div>
//           <div className="py-10">
//             <h3>Made With Love</h3>
//             <p>
//               Dolci, inspired by the lanes of Greece and a love for sweets, has
//               grown from a humble home baking venture into a beloved café chain
//               in Bengaluru. Dolci offers a cozy haven for food and coffee lovers
//               alike—serving rich brews, hearty bites, and an irresistible array
//               of pastries, cakes, and other handcrafted treats.
//             </p>
//           </div>
//           <div className="py-10">
//             <span className="cap">
//               <i>
//                 {" "}
//                 Dolci, inspired by the lanes of Greece and a love for sweets,
//                 has grown from a humble home baking venture into a beloved café
//                 chain in Bengaluru. Dolci offers a cozy haven for food and
//                 coffee lovers alike—serving rich brews, hearty bites, and an
//                 irresistible array of pastries, cakes, and other handcrafted
//                 treats.
//               </i>
//             </span>
//           </div>
//           <div className="py-10">
//             <span className="menu">Shop</span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

const Dolci = () => {
  return (
    <main className="dolci_system_design relative">
      <Home />
      {/* <Test /> */}
    </main>
  );
};

export default Dolci;
