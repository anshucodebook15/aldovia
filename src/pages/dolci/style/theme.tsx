import "./theme.css";
const Theme = () => {
  return (
    <div>
      <div className="md:w-[1280px] mx-auto py-4  border-1">
        <h1 className=" font-light text-[1.2rem] text-primary">
          <i>
            Dolci, inspired by the lanes of Greece and a love for sweets, has
            grown from a humble home baking venture into a beloved café chain in
            Bengaluru. Dolci offers a cozy haven for food and coffee lovers
            alike—serving rich brews, hearty bites, and an irresistible array of
            pastries, cakes, and other handcrafted treats.
          </i>
        </h1>

        <div className="flex">
          <div className="w-100 h-50 bg-thinblue"></div>
          <div className="w-100 h-50 bg-textblack"></div>
          <div className="w-100 h-50 bg-textbrown"></div>
          <div className="w-100 h-50 bg-primary"></div>
          <div className="w-100 h-50 bg-secondary"></div>
        </div>
      </div>
    </div>
  );
};

export default Theme;
