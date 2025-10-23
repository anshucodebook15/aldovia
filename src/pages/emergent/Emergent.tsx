import "./Emergent.css";
import { lazy, Suspense } from "react";
import Layout from "./layout/layout";
// import About from "./components/About";
// import Menu from "./components/Menu";
// import Delights from "./components/Delight";
// import Testimonials from "./components/Testimonials";
// import Location from "./components/Location";
// import Hero from "./components/Hero";

// 🔹 Lazy imports
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Menu = lazy(() => import("./components/Menu"));
const Delights = lazy(() => import("./components/Delight"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Location = lazy(() => import("./components/Location"));

const Emergent = () => {
  return (
    <>
      <Layout>
        <Suspense
          fallback={<div className="text-center py-10">Loading...</div>}
        ></Suspense>
        <Hero />
        <About />
        <Menu />
        <Delights />
        <Testimonials />
        <Location />
      </Layout>
    </>
  );
};

export default Emergent;
