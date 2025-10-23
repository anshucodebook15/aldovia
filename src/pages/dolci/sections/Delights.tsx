import { useAssets } from "../../../hooks/useAssets";

const Delights = () => {
  const { images } = useAssets();

  return (
    <div className="py-20 ">
      <div className="title px-4 md:px-0">
        <div className="contain">
          <div className="md:w-200 w-full mb-4">
            <h1>
              Aesthetic Delights at <span className="text-primary">Dolci</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="content w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 ">
          <img src={images.delight_1} alt="" />
          <img src={images.delight_2} alt="" />

          <div className="cap md:pl-4 md:pr-30 px-10 md:py-2 py-2">
            <i>
              Dolci, inspired by the lanes of Greece and a love for sweets, has
              grown from a humble home baking venture into a beloved café chain
              in Bengaluru. Dolci offers a cozy haven for food and coffee lovers
              alike—serving rich brews, hearty bites, and an irresistible array
              of pastries, cakes, and other handcrafted treats.
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delights;
