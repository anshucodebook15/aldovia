import { useAssets } from "../../../hooks/useAssets";

// const ResponsiveImage = ({ src = "", alt = "" }) => {
//   return (
//     <div className="flex-none w-120 h-64 md:h-86 lg:h-[450px] overflow-hidden flex items-center justify-center">
//       <img src={src} alt={alt} className="object-cover w-full h-full" />
//     </div>
//   );
// };

const Menu = () => {
  const { icons } = useAssets();

  const menuItems = [
    {
      title: "Cakes By Slices",
      icon: "cake-slice",
    },
    {
      title: "Deserts",
      icon: "dessert",
    },
    {
      title: "Breads",
      icon: "bread",
    },
    {
      title: "Cookies",
      icon: "cookies",
    },
    {
      title: "Cup cakes",
      icon: "cupcake",
    },
    {
      title: "Coffee",
      icon: "coffee",
    },
    {
      title: "Beverage",
      icon: "beverage",
    },
    {
      title: "Milkshakes",
      icon: "milkshake",
    },
  ];

  return (
    <section className="py-20">
      <div className="title mx:px-0 px-4">
        <div className="contain">
          <div className="text-center w-full mb-4">
            <h2>
              <span className="text-primary">Dolci </span>Menu Includes
            </h2>
          </div>

          <div>
            <p className="cap md:text-left text-center">
              <i>
                Discover our carefully curated selection of French viennoiserie,
                artisan desserts, premium coffee blends, and gourmet favorites
                that celebrate authentic flavors.
              </i>
            </p>
          </div>
        </div>
      </div>
      <div className="contain">
        <div className="flex justify-center">
          <div className="md:w-[80%] w-[100%]">
            <div className="flex justify-center items-center md:gap-4 gap-4 py-10 flex-wrap">
              {menuItems.map((item, _) => (
                <div className="md:w-40 md:h-30 w-22 h-22 flex flex-col justify-center items-center  cursor-pointer  ">
                  <img
                    src={icons[item.icon]}
                    alt=""
                    className="md:w-14 w-10 mb-2"
                  />
                  <p className="font-cabinate-grotesk-500">{item.title}</p>
                </div>
              ))}

              <div className="md:w-30 w-20 md:h-30 h-20 border-1 border-primary rounded-full flex flex-col justify-center items-center  cursor-pointer  ">
                <h3 className="md:text-[18px] text-[16px] leading-6 underline">
                  100+ <br />
                  More
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
