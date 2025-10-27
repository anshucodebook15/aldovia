import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, Phone, Store, X } from "lucide-react";
import { useAssets } from "../../../hooks/useAssets";

const Header = () => {
  const { images } = useAssets();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  console.log("location", location);

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Menu", href: "/#menu" },
    { name: "Gallery", href: "/#gallery" },
    { name: "B2B", href: "/b2b" },
    // { name: "FAQ", href: "/#faq" },
    { name: "Location", href: "/#location" },
    { name: "Directors", href: "/directors" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith("/#")) {
      const element = document.getElementById(href.replace("/#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href.replace("/#", ""));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        } `}
    >
      <div className="contain mx-auto">
        <div className="flex items-center justify-between ">
          {/* Logo */}
          <div className="py-2">
            <Link
              to="/"
              className="text-2xl lg:text-3xl font-playfair font-bold transition-colors duration-300 text-midnight-blue"
            >
              <div className="text-shadow-initial">
                <img src={images.dolcilogo} alt="" className="w-16 md:w-18" />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex  gap-6">
            {navigationItems.map((item) =>
              item.href.startsWith("/#") ? (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`font-montserrat font-medium transition-colors duration-300 ${isScrolled
                      ? "text-gray-700 hover:text-midnight-blue"
                      : "text-white hover:text-dolci-blue"
                    }`}
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-montserrat font-medium transition-colors duration-300 ${isActiveLink(item.href)
                      ? "text-dolci-blue"
                      : isScrolled
                        ? "text-gray-700 hover:text-midnight-blue"
                        : "text-white hover:text-dolci-blue"
                    }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex gap-1">
            {/* <button className="border-1 border-dolci-blue text-dolci-blue px-4 rounded-full py-2 ">
              Call
            </button>
            <button className=" border-1 border-dolci-blue bg-dolci-blue text-black px-4 rounded-full ">
              Visit
            </button> */}

            <a href="tel:+918023456789" className="">
              <button
                className="bg-dolci-blue font-montserrat font-medium text-lg px-6 py-1 rounded-full cursor-pointer"
              // onClick={() =>
              //   document
              //     .getElementById("location")
              //     ?.scrollIntoView({ behavior: "smooth" })
              // }
              >
                <Phone className="inline-block mr-2 h-4 w-4" />
                Call
              </button>
            </a>
            <Link to={"/#location"}>
              <button
                className="border-1 font-montserrat font-medium text-lg px-6 py-1 rounded-full cursor-pointer text-gray-800 bg-white border-gray-300 hover:bg-white hover:text-midnight-blue"
              // onClick={() =>
              //   document
              //     .getElementById("menu")
              //     ?.scrollIntoView({ behavior: "smooth" })
              // }
              >
                <Store className="inline-block mr-2 h-4 w-4" />
                Visit
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 ${isScrolled ? "text-gray-700" : "text-white"
              } `}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <nav className="container mx-auto py-4 space-y-2">
            {navigationItems.map((item) =>
              item.href.startsWith("/#") ? (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-2 px-4 font-montserrat text-gray-700 hover:text-midnight-blue hover:bg-arctic-blue rounded transition-colors"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 px-4 font-montserrat rounded transition-colors ${isActiveLink(item.href)
                      ? "text-midnight-blue bg-dolci-blue"
                      : "text-gray-700 hover:text-midnight-blue hover:bg-arctic-blue"
                    }`}
                >
                  {item.name}
                </Link>
              )
            )}
            {/* <div className="flex space-x-4 px-4 pt-4">
              <button className="btn btn-secondary flex-1">Call</button>
              <button className="btn btn-primary flex-1">Visit</button>
            </div> */}

            <div className="flex space-x-4 px-4 pt-4">
              <a href="tel:+918023456789" className="">
                <button className="btn btn-secondary flex-1">Call</button>
              </a>
              <Link to={"/#location"}>
                <button className="btn btn-primary flex-1">Visit</button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
