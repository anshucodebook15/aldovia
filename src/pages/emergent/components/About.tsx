import { Heart, Coffee, Cake, Users } from "lucide-react";
import { aboutData } from "../../../data/mock";
// import { useAssets } from "../../../hooks/useAssets";

const About = () => {
  const { title, subtitle, description } = aboutData;
  // const { icons } = useAssets();

  const features = [
    {
      icon: <Heart strokeWidth={1} className="w-10 h-10" />,
      title: "Made with Love",
      description:
        "Every dishes is handcrafted with passion and premium ingredients",
    },
    {
      icon: <Coffee strokeWidth={1} className="w-10 h-10" />,
      title: "Perfect Brews",
      description:
        "Rich coffee blends and specialty drinks crafted by expert baristas",
    },
    {
      icon: <Cake strokeWidth={1} className="w-10 h-10" />,
      title: "Artisan Desserts",
      description:
        "European-inspired pastries and cakes that tell a story of tradition",
    },
    {
      icon: <Users strokeWidth={1} className="w-10 h-10" />,
      title: "Cozy Haven",
      description:
        "A warm, welcoming space perfect for any occasion or gathering",
    },
  ];

  // const Giffeatures = [
  //   {
  //     icon: <Heart strokeWidth={1} className="w-10 h-10" />,
  //     title: "Made with Love",
  //     description:
  //       "Every dishes is handcrafted with passion and premium ingredients",
  //   },
  //   {
  //     icon: <Coffee strokeWidth={1} className="w-10 h-10" />,
  //     title: "Perfect Brews",
  //     description:
  //       "Rich coffee blends and specialty drinks crafted by expert baristas",
  //   },
  //   {
  //     icon: <Cake strokeWidth={1} className="w-10 h-10" />,
  //     title: "Artisan Desserts",
  //     description:
  //       "European-inspired pastries and cakes that tell a story of tradition",
  //   },
  //   {
  //     icon: <Users strokeWidth={1} className="w-10 h-10" />,
  //     title: "Cozy Haven",
  //     description:
  //       "A warm, welcoming space perfect for any occasion or gathering",
  //   },
  // ];

  const storyData = [
    {
      id: 1,
      title: "Inspired by",
      subtitle: "European café culture",
      image:
        "https://res.cloudinary.com/dq7bzydqz/image/upload/v1759062395/DSC06580_1_plbdql.webp",
      gradient: "bg-gradient-to-t from-black/80 via-transparent to-transparent",
    },
    {
      id: 2,
      title: "Handcrafted",
      subtitle: "Dishes and pastries",
      image:
        "https://res.cloudinary.com/dq7bzydqz/image/upload/v1759062694/DSC06519_1_vofrqk.webp",
      gradient: "bg-gradient-to-t from-black/80 via-transparent to-transparent",
    },
    {
      id: 3,
      title: "Rich Coffee",
      // subtitle: "Blends and specialty drinks",
      subtitle: "Blends and drinks",
      image:
        "https://res.cloudinary.com/dq7bzydqz/image/upload/v1759192838/DSC070741_ou2qg4.webp",
      gradient: "bg-gradient-to-t from-black/80 via-transparent to-transparent",
    },
    {
      id: 4,
      title: "Cozy Ambience",
      subtitle: "Perfect for any occasion",
      image:
        "https://res.cloudinary.com/dq7bzydqz/image/upload/v1759062394/DSC06492_1_up59l0.webp",
      gradient: "bg-gradient-to-t from-black/80 via-transparent to-transparent",
    },
  ];

  return (
    <>
      <section id="about" className=" py-20 bg-white">
        <div className="contain px-6">
          <div className="text-center mb-20">
            <h2 className="font-playfair-display text-4xl md:text-5xl font-bold text-midnight-blue mb-6">
              {title}
            </h2>
            <p className="font-great-vibes text-2xl text-dark-accent mb-10">
              {subtitle}
            </p>
            <div className="max-w-5xl mx-auto">
              <p className="font-montserrat text-lg text-gray-700 leading-relaxed mb-12">
                {description}
              </p>

              {/* Image Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-2 justify-center mb-20">
                {storyData.map((item) => (
                  <div key={item.id} className="group cursor-pointer py-2 px-1">
                    <div className="relative overflow-hidden rounded-3xl aspect-square shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-102 p-2">
                      <div className="relative overflow-hidden rounded-2xl w-full h-full">
                        <img
                          src={item.image}
                          alt={item.subtitle}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-t ${item.gradient} transition-all duration-300`}
                        ></div>
                        <div className="absolute bottom-6 left-6 right-6 text-white">
                          <h4 className="font-playfair-display text-[22px] md:text-[18px] font-bold mb-2">
                            {item.title}
                          </h4>
                          <p className="font-montserrat text-gray-100 md:text-sm text-[16px] opacity-90 leading-4">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {features.map((feature, index) => {
              // const IconComponent = feature.icon;

              // Assign animation classes based on icon type
              let iconAnimationClass = "";
              if (feature.title === "Made with Love")
                iconAnimationClass = "heart-icon";
              else if (feature.title === "Perfect Brews")
                iconAnimationClass = "coffee-icon";
              else if (feature.title === "Artisan Desserts")
                iconAnimationClass = "cake-icon";
              else if (feature.title === "Cozy Haven")
                iconAnimationClass = "users-icon";

              return (
                <div key={index} className="py-3 px-2 cursor-pointer">
                  <div className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-102 bg-white border-0 shadow-lg overflow-hidden h-full">
                    <div className="p-6 lg:p-8 text-center">
                      <div className="mb-4 flex justify-center">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br from-dolci-blue/20 to-dark-accent/60 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl relative ${iconAnimationClass}`}
                        >
                          {feature.icon}

                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-dolci-blue/20 to-dark-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                      <h3 className="font-playfair-display text-xl font-bold text-midnight-blue mb-2 transition-colors duration-300 group-hover:text-dark-accent">
                        {feature.title}
                      </h3>
                      <p className="font-montserrat text-[18px] text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

/**
 * 
 * bg-gradient-to-br from-dolci-blue to-dark-accent
 * 
 *               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-2 justify-center mb-20">
                <div className="cursor-pointer py-2 px-1">
                  <div className="overflow-hidden rounded-3xl aspect-square shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-102 p-2">
                    <div className="relative overflow-hidden rounded-2xl w-full h-full">
                      <img
                        src="https://images.unsplash.com/photo-1718143801531-b6f3a2d958a9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxncmVlayUyMGNhZmV8ZW58MHx8fHwxNzU1NDcxODA5fDA&ixlib=rb-4.1.0&q=85"
                        alt="Greek café culture inspiration"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t  transition-all duration-300"></div>
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <h4 className="font-playfair-display text-xl font-bold mb-2">
                          Inspired by
                        </h4>
                        <p className="font-montserrat text-sm text-gray-100 opacity-90">
                          Greek café culture
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group cursor-pointer py-2 px-1">
                  <div className="relative overflow-hidden rounded-3xl aspect-square shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-102 p-2">
                    <div className="relative overflow-hidden rounded-2xl w-full h-full">
                      <img
                        src="https://images.unsplash.com/photo-1641394535269-dbea1fa94ff1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxoYW5kY3JhZnRlZCUyMHBhc3RyaWVzfGVufDB8fHx8MTc1NTQ3MTgxNHww&ixlib=rb-4.1.0&q=85"
                        alt="Handcrafted artisan pastries being made"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-midnight-blue/80 via-midnight-blue/20 to-transparent  transition-all duration-300"></div>
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <h4 className="font-playfair-display text-base font-bold mb-2">
                          Handcrafted
                        </h4>
                        <p className="font-montserrat text-sm opacity-90">
                          Treats and pastries
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group cursor-pointer py-2 px-1">
                  <div className="relative overflow-hidden rounded-3xl aspect-square shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-102 p-2">
                    <div className="relative overflow-hidden rounded-2xl w-full h-full">
                      <img
                        src="https://images.unsplash.com/photo-1735132619395-a8f675a2dc66?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzcGVjaWFsdHl8ZW58MHx8fHwxNzU1NDcxODE4fDA&ixlib=rb-4.1.0&q=85"
                        alt="Premium coffee with latte art specialty drinks"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-midnight-blue/80 via-midnight-blue/20 to-transparent  transition-all duration-300"></div>
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <h4 className="font-playfair-display text-base font-bold mb-2">
                          Rich Coffee
                        </h4>
                        <p className="font-montserrat text-sm opacity-90">
                          Blends and specialty drinks
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group cursor-pointer py-2 px-1">
                  <div className="relative overflow-hidden rounded-3xl aspect-square shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-102 p-2">
                    <div className="relative overflow-hidden rounded-2xl w-full h-full">
                      <img
                        src="https://images.unsplash.com/photo-1573822028151-731623cb0722?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwzfHxjb3p5JTIwY2FmZXxlbnwwfHx8fDE3NTU0NzE4MjN8MA&ixlib=rb-4.1.0&q=85"
                        alt="Cozy café ambiance perfect for any occasion"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-midnight-blue/80 via-midnight-blue/20 to-transparent  transition-all duration-300"></div>
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <h4 className="font-playfair-display text-base font-bold mb-2">
                          Cozy Ambiance
                        </h4>
                        <p className="font-montserrat text-sm opacity-90">
                          Perfect for any occasion
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
 */
