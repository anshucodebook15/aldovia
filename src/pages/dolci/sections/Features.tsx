import { ArrowUpRight } from "lucide-react";
import { useAssets } from "../../../hooks/useAssets";

const Item = ({
  title = "Default Title",
  description = "Default Description",
  icon = "",
}) => {
  return (
    <>
      <div className="mb-2 md:px:0 ">
        <img src={icon} alt={title} className="md:w-16 w-12 md:mb-4 mb-3" />
        <h3 className="mb-1">{title}</h3>
        <p className="font-cabinate-grotesk-300">{description}</p>
        <div className="flex items-center pt-2">
          <a href="#">
            <span className="text-secondary text-[16px] underline">
              Get Here{" "}
            </span>
          </a>
          <span className="text-secondary text-[16px] underline">
            <ArrowUpRight strokeWidth={1} size={18} />
          </span>
        </div>
      </div>
    </>
  );
};

const Features = () => {
  const { icons } = useAssets();
  const highlights = [
    {
      title: "Made with Love",
      description:
        "Every treat is handcrafted with passion and premium ingredients.",
      icon: "packet", // you can replace with actual icon path/name
      link: {
        text: "Get Here",
        url: "#",
      },
    },
    {
      title: "Perfect Brews",
      description:
        "Rich coffee blends and specialty drinks crafted by expert baristas.",
      icon: "coffee-cup",
      link: {
        text: "Get Here",
        url: "#",
      },
    },
    {
      title: "Artisan Desserts",
      description:
        "Greek-inspired pastries and cakes that tell a story of tradition.",
      icon: "donat-dessert",
      link: {
        text: "Get Here",
        url: "#",
      },
    },
    {
      title: "Cozy Haven",
      description:
        "A warm, welcoming space perfect for any occasion or gathering.",
      icon: "bakery-house",
      link: {
        text: "Get Here",
        url: "#",
      },
    },
  ];

  return (
    <section className="py-20 px-4 md:px-0">
      <div className="contain">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
          {highlights.map((item) => (
            <Item
              title={item.title}
              description={item.description}
              icon={icons[item.icon]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
