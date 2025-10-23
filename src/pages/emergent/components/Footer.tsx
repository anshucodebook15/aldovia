import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  // Facebook,
  // Instagram,
  Heart,
} from "lucide-react";

const Footer: React.FC = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/#about" },
    { name: "Menu", href: "/#menu" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/#location" },
  ];

  // const socialLinks = [
  //   {
  //     icon: Facebook,
  //     url: "https://www.facebook.com/DolciDesserts",
  //     name: "Facebook",
  //   },
  //   {
  //     icon: Instagram,
  //     url: "https://www.instagram.com/dolci_blr/",
  //     name: "Instagram",
  //   },
  // ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("/#")) {
      const element = document.getElementById(href.replace("/#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-midnight-blue text-white">
      <div className="py-16">
        <div className="contain px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-6">
            {/* Brand Section */}
            <div className="space-y-4 mr-4">
              <h3 className="font-playfair text-3xl font-bold text-dolci-blue">
                Dolci
              </h3>

              <p className="font-montserrat text-[16px] text-gray-300  max-w-3xl mx-auto leading-6">
                Where flavor meets ambience. Experience the perfect blend of
                European-inspired café culture and handcrafted dishes in the
                heart of Bangalore.
              </p>
              <div className="flex space-x-4">
                {/* {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <button
                      key={index}
                      className="btn btn-secondary min-h-[40px] w-[40px] p-2 border-gray-600 text-gray-400 hover:bg-dolci-blue hover:border-dolci-blue hover:text-midnight-blue"
                      onClick={() => window.open(social.url, "_blank")}
                      aria-label={social.name}
                    >
                      <IconComponent className="h-4 w-4 flex-shrink-0" />
                    </button>
                  );
                })} */}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-playfair text-xl font-semibold text-white">
                Quick Links
              </h4>
              <div className="space-y-2">
                {quickLinks.map((link, index) =>
                  link.href.startsWith("/#") ? (
                    <button
                      key={index}
                      onClick={() => scrollToSection(link.href)}
                      className="block font-montserrat text-gray-300 hover:text-dolci-blue transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      key={index}
                      to={link.href}
                      className="block font-montserrat text-gray-300 hover:text-dolci-blue transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  )
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-playfair text-xl font-semibold text-white">
                Contact Info
              </h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-dolci-blue flex-shrink-0 mt-0.5" />
                  <p className="font-montserrat text-gray-300 text-sm leading-relaxed">
                    Siam House, 1/21, Sri Ramana Maharshi Rd, Raj Mahal Vilas,
                    Sadashiva Nagar, Extn, Bengaluru, Karnataka 560080
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-dolci-blue flex-shrink-0" />
                  <a
                    href="tel:+918023456789"
                    className="font-montserrat text-gray-300 hover:text-dolci-blue transition-colors"
                  >
                    +91 7411379540
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-dolci-blue flex-shrink-0" />
                  <a
                    href="mailto:info@dolci.in"
                    className="font-montserrat text-gray-300 hover:text-dolci-blue transition-colors"
                  >
                    info@dolci.in
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="space-y-4">
              <h4 className="font-playfair text-xl font-semibold text-white">
                Opening Hours
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-dolci-blue flex-shrink-0" />
                  <div>
                    <p className="font-montserrat text-gray-300 text-sm">
                      Weekdays ( Mon-Fri )
                    </p>
                    <p className="font-montserrat text-white font-medium text-[16px]">
                      8:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-dolci-blue flex-shrink-0" />
                  <div>
                    <p className="font-montserrat text-gray-300 text-sm">
                      Weekend ( Sat-Sun )
                    </p>
                    <p className="font-montserrat text-white font-medium text-[16px]">
                      8:00 AM - 11:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 ">
                <p className="font-montserrat text-white text-sm">
                  © 2025 Dolci Café Private Limited. All rights reserved.
                </p>
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <span className="font-montserrat">Made with</span>
                <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
                {/* <span className="font-montserrat">for coffee lovers</span> */}
                <span className="font-montserrat">by Asylum</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
