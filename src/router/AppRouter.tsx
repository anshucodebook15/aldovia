import {
  BrowserRouter as Router,
  Route,
  Routes,
  // HashRouter,
} from "react-router";

// import App from "../App";
// import Dolci from "../pages/dolci/dolci";
import Emergent from "../pages/emergent/Emergent";
import B2b from "../pages/emergent/pages/B2b";
import Directors from "../pages/emergent/pages/Directors";
import ScrollToHash from "../pages/emergent/lib/ScrollToHash";
import Aldovia from "../pages/aldovia/aldovia";

// const TestRouter = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/emergent" element={<Emergent />} />
//         <Route path="/b2b" element={<B2b />} />
//         <Route path="/directors" element={<Directors />} />
//         <Route path="/dolci" element={<Dolci />} />
//       </Routes>
//     </Router>
//   );
// };

const MainRouter = () => {
  return (
    <Router>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Aldovia />} />
        <Route path="/wsw" element={<Emergent />} />
        <Route path="/b2b" element={<B2b />} />
        <Route path="/directors" element={<Directors />} />
        {/* <Route path="/emergent" element={<Emergent />} /> */}
        {/* <Route path="/dolci" element={<Dolci />} /> */}
      </Routes>
    </Router>
  );
};


// const HashAppRouter = () => {
//   return (
//     <HashRouter>
//       <Routes>
//         <Route path="/" element={<Emergent />} />
//         <Route path="/b2b" element={<B2b />} />
//         <Route path="/directors" element={<Directors />} />
//         {/* <Route path="/emergent" element={<Emergent />} /> */}
//         {/* <Route path="/dolci" element={<Dolci />} /> */}
//       </Routes>
//     </HashRouter>
//   );
// };

const AppRouter = () => {
  return <MainRouter />;
  // return <HashAppRouter />;
};

export default AppRouter;
