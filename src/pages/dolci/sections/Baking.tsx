import { useAssets } from "../../../hooks/useAssets";

const ResponsiveImage = ({ src = "", alt = "" }) => {
  return (
    <div className="flex-none w-full h-64 md:h-86 lg:h-[550px] overflow-hidden flex items-center justify-center">
      <img src={src} alt={alt} className="object-cover w-full h-full" />
    </div>
  );
};

const Baking = () => {
  const { images } = useAssets();
  return (
    <section className="py-20">
      <div className="title md:px-0 px-4">
        <div className="contain">
          <div className="md:w-300 w-full mb-4">
            <h2>
              Perfect Art of <span className="text-secondary">Baking</span>{" "}
            </h2>
          </div>
        </div>
      </div>
      <div className="contain">
        <ResponsiveImage src={images.baking} alt="test" />
      </div>
    </section>
  );
};

export default Baking;
