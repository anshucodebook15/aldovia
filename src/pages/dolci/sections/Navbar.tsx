import { Menu } from "lucide-react";
import { useAssets } from "../../../hooks/useAssets";

const Navbar = () => {
  const { images } = useAssets();
  const navItems = [
    { title: "About.", uri: "/about" },
    { title: "Menu.", uri: "/work" },
    { title: "Gallery.", uri: "/projects" },
    { title: "Blogs.", uri: "/skills" },
    { title: "Contact.", uri: "/contact" },
    { title: "Shop.", uri: "/shop" },
  ];

  return (
    <div className="sticky top-0 z-50 py-2 md:py-2 ">
      <div className="contain">
        <nav className="flex justify-between items-center px-2 backdrop-blur-md">
          <div className="text-shadow-initial">
            <img src={images.dolcilogo} alt="" className="w-16 md:w-22" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex list-none gap-12">
              {navItems.map((item) => (
                <li key={item.uri} className="menu">
                  <a href={item.uri} className="hover:text-secondary link">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Icons */}
          <div className="flex gap-2">
            <div className="cursor-pointer hidden md:block">
              <button className="bg-secondary text-white p-1 rounded-2l cursor-pointer">
                @GetAllDocli
              </button>
            </div>
            <div className="cursor-pointer block md:hidden">
              <Menu strokeWidth={1.75} fill="#000000" />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

// flex justify-between items-center border border-gray-200 rounded-xl px-2  bg-gray-50/90 backdrop-blur-md

// const Navbar = () => {
//   return (
//     <div className='contain'>

//       <p>Dolci, inspired by the lanes of Greece and a love for sweets, has grown from a humble home baking venture into a beloved café chain in Bengaluru. Dolci offers a cozy haven for food and coffee lovers alike—serving rich brews, hearty bites, and an irresistible array of pastries, cakes, and other handcrafted treats. </p>

//     </div>
//   )
// }
