import Footer from "../components/Footer";
// import Header from "../components/Header";

import HeaderTwo from "../components/HeaderTwo";

const LayoutTwo = ({ children }: any) => {
    return (
        <div className="w-full overflow-hidden dolci_system_design bg-white">
            <HeaderTwo />
            <main className="">{children}</main>
            <Footer />
        </div>
    );
};

export default LayoutTwo;
