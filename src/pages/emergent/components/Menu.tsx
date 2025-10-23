import { useState } from "react";

import {
  Star,
  Clock,
  //   MapPin,
  Leaf,
  Coffee,
  Cake,
  Sandwich,
  Store,
  SquareMenu,
  //   LucideIcon,
} from "lucide-react";
import { completeMenuData } from "../../../data/menu";

// type Category = {
//   id: string;
//   name: string;
//   description: string;
//   items: {
//     id: string;
//     name: string;
//     description: string;
//     image: string;
//     price: string;
//     category: string;
//   }[];
// };

// const DriveImgView = (path = "v1758733182/download_zjsopj.webp") => {
//   return `https://res.cloudinary.com/dq7bzydqz/image/upload/${path}`;
// };

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("viennoiserie");

  const getCategoryIcon = (categoryId: string): any => {
    const icons: Record<string, any> = {
      viennoiserie: Coffee,
      cakes: Cake,
      "specialty-desserts": Star,
      cheesecakes: Cake,
      "hot-beverages": Coffee,
      "iced-coffee": Coffee,
      sandwiches: Sandwich,
      pasta: Sandwich,
    };
    return icons[categoryId] || Star;
  };

  const getCategoryBadgeColor = (category: string): string => {
    const colors: Record<string, string> = {
      veg: "bg-green-100 text-green-800",
      egg: "bg-yellow-100 text-yellow-800",
      drink: "bg-blue-100 text-blue-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="menu" className="py-20 md:px-4 px-4 bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-20">
          <div className="group inline-block cursor-pointer mb-6">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-midnight-blue mb-4 transition-colors duration-300 group-hover:text-dark-accent relative">
              Our Artisan Menu
              {/* <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-dolci-blue to-dark-accent group-hover:w-full transition-all duration-500 rounded-full"></div> */}
            </h2>
            <p className="font-great-vibes text-2xl text-dark-accent mb-2">
              Brewing Comfort In Every Cup
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <p className="font-montserrat text-lg text-gray-700 leading-relaxed mb-12">
              Discover our carefully curated selection of French viennoiserie,
              artisan desserts, premium coffee blends, and gourmet favorites
              that celebrate authentic flavors.
            </p>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="mb-20 md:px-2 px-3">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-3 lg:gap-3 max-w-6xl mx-auto">
            {completeMenuData.categories.map((category: any) => {
              const IconComponent = getCategoryIcon(category.id);
              const isActive = selectedCategory === category.id;
              return (
                <div
                  key={category.id}
                  className={`rounded-2xl overflow-hidden ${
                    isActive
                      ? "bg-dolci-blue text-midnight-blue shadow-xl scale-102"
                      : "bg-arctic-blue hover:bg-dolci-blue/50 text-gray-700 hover:text-midnight-blue hover:shadow-lg"
                  } ${
                    isActive
                      ? "border-dark-accent"
                      : "border-transparent hover:border-dolci-blue/30"
                  }`}
                >
                  <button
                    onClick={() => setSelectedCategory(category.id)}
                    className={`
                        group relative cursor-pointer overflow-hidden  md:p-5 p-6 lg:p-6 transition-all duration-300 transform hover:scale-102 hover:-translate-y-1
                       
                        flex flex-col items-center justify-start text-center md:min-h-[120px] w-full
                        
                      `}
                  >
                    <IconComponent
                      className={`md:h-7 h-9 w-9 md:w-7 mb-3 transition-colors ${
                        isActive
                          ? "text-midnight-blue"
                          : "text-gray-600 group-hover:text-midnight-blue"
                      }`}
                    />
                    <span className="font-montserrat font-medium text-sm leading-tight">
                      {category.name}
                    </span>
                  </button>
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-dark-accent rounded-full"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Category Items */}
        {completeMenuData.categories.map((category: any) => {
          if (category.id !== selectedCategory) return null;

          return (
            <div key={category.id} className="space-y-8">
              <div className="text-center mb-4">
                <h3 className="font-playfair text-3xl font-bold text-midnight-blue mb-2 leading-normal">
                  {category.name}
                </h3>

                <p className="font-montserrat text-lg text-gray-700 leading-relaxed mb-12">
                  {category.description}
                </p>
              </div>

              <div className="md:px-0 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-6">
                {category.items.map((item: any) => (
                  <div
                    key={item.id}
                    className="safe-spacing overflow-hidden shadow rounded-xl cursor-pointer"
                  >
                    <div className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-102 border-0 overflow-hidden bg-white shadow-lg h-full">
                      <div className="relative overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                        />

                        <div className="absolute top-4 right-4">
                          <div className="bg-dolci-blue text-midnight-blue font-semibold text-[16px] px-3 py-1 rounded-[5px]">
                            {item.price}
                          </div>
                        </div>
                        <div className="absolute top-4 left-4">
                          <div
                            className={`flex items-center font-medium text-xs px-2 py-1  rounded-[5px] ${getCategoryBadgeColor(
                              item.category
                            )}`}
                          >
                            {item.category === "veg" && (
                              <Leaf className="h-3 w-3 mr-1" />
                            )}
                            <span className="font-bold text-[10px]">
                              {item.category.toUpperCase()}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h4 className="font-playfair text-xl font-bold text-midnight-blue mb-3 group-hover:text-dark-accent transition-colors line-clamp-1">
                          {item.name}
                        </h4>
                        <p className="font-montserrat text-gray-600  md:text-[16px] text-[16px] leading-normal mb-4 line-clamp-3">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, idx) => (
                              <Star
                                key={idx}
                                className="h-4 w-4 text-yellow-400 fill-current"
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500 flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            Fresh daily
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Featured Items - Chef's Signature Selection with Images */}
        <div className="mt-24 rounded-3xl px-4 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="font-playfair text-3xl font-bold text-midnight-blue mb-4 leading-normal">
              Chef's Signature Selection
            </h3>

            <p className="font-montserrat text-lg text-gray-700 leading-relaxed mb-12">
              Must-try specialties that define the Dolci experience - crafted
              with passion since 2008.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            <div className="group text-center cursor-pointer py-3 px-2">
              <div className="mb-8">
                <div className="relative overflow-hidden rounded-3xl aspect-square shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-102 p-2">
                  <div className="relative overflow-hidden rounded-2xl w-full h-full">
                    <img
                      src="https://res.cloudinary.com/dq7bzydqz/image/upload/v1758764524/Dolci_Square_Web-Images_0017_Dolci_s-Signature-Tiramisu-Square_1_ryxknl.webp"
                      alt="Dolci's Signature Tiramisu"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-midnight-blue/60 via-transparent to-transparent group-hover:from-midnight-blue/80 transition-all duration-300"></div> */}
                  </div>
                </div>
              </div>
              <h4 className="font-playfair text-[22px] font-bold text-midnight-blue mb-3 transition-colors duration-300 group-hover:text-dark-accent">
                Dolci's Signature Tiramisu
              </h4>
              <p className="font-montserrat text-[18px] text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                Coffee-soaked perfection that started our legacy
              </p>
            </div>

            <div className="group text-center cursor-pointer py-3 px-2">
              <div className="mb-8">
                <div className="relative overflow-hidden rounded-3xl aspect-square shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-102 p-2">
                  <div className="relative overflow-hidden rounded-2xl w-full h-full">
                    <img
                      src="https://res.cloudinary.com/dq7bzydqz/image/upload/v1758764550/Dolci_Square_Web-Images_0024_Peach-_-Berry-Pocket-Square-_wo-fork_mnddvc.webp"
                      alt="French Classic Croissant"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-midnight-blue/60 via-transparent to-transparent group-hover:from-midnight-blue/80 transition-all duration-300"></div> */}
                  </div>
                </div>
              </div>

              <h4 className="font-playfair text-[22px] font-bold text-midnight-blue mb-3 transition-colors duration-300 group-hover:text-dark-accent">
                French Classic Croissant
              </h4>
              <p className="font-montserrat text-[18px] text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                Authentic Parisian mornings in every flaky bite
              </p>
            </div>

            <div className="group text-center cursor-pointer py-3 px-2">
              <div className="mb-8">
                <div className="relative overflow-hidden rounded-3xl aspect-square shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-102 p-2">
                  <div className="relative overflow-hidden rounded-2xl w-full h-full">
                    <img
                      src="https://res.cloudinary.com/dq7bzydqz/image/upload/v1758764544/Dolci_Square_Web-Images_0012_2_Tres-Leches-Coconut-Square_dciurr.webp"
                      alt="Tres Leches Coconut Cake"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-midnight-blue/60 via-transparent to-transparent group-hover:from-midnight-blue/80 transition-all duration-300"></div> */}
                  </div>
                </div>
              </div>

              <h4 className="font-playfair text-[22px] font-bold text-midnight-blue mb-3 transition-colors duration-300 group-hover:text-dark-accent">
                Tres Leches Coconut
              </h4>
              <p className="font-montserrat text-[18px] text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                Our signature fusion of Latin American & tropical flavors
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-24 text-center rounded-3xl p-10 lg:p-12 text-midnight-blue herobg">
        <h3 className="font-playfair text-2xl lg:text-3xl font-bold mb-6">
          Ready to Experience Dolci's Artisan Creations?
        </h3>
        <p className="font-montserrat text-midnight-blue/80 mb-10 max-w-3xl mx-auto text-base lg:text-lg">
          Visit our café today and discover why we've been Bangalore's favorite
          artisan destination since 2008. Every creation tells a story of
          passion, tradition, and innovation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            className="btn btn-primary text-lg px-8 py-4"
            onClick={() =>
              document
                .getElementById("location")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <Store strokeWidth={1.2} className="mr-2" /> Visit Our Café
          </button>
          <button
            className="btn btn-primary text-lg px-8 py-4"
            onClick={() =>
              document
                .getElementById("location")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <SquareMenu strokeWidth={1.2} className="mr-2" />
            Explore Menu
          </button>
        </div>
      </div>

      {/* <div className="div">
        test
        <img src="https://drive.google.com/uc?export=view&id=105aHoA5-XUs5eSxsSNpjvWaCaY-o5fJO" alt="" />
      </div> */}
    </section>
  );
};

export default Menu;
