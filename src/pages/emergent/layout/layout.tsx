import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }: any) => {
  return (
    <div className="w-full overflow-hidden dolci_system_design bg-white">
      <Header />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
