// import { useAssets } from "../../../hooks/useAssets";

const Snapshot = () => {
  // const { images } = useAssets();
  return (
    <section className="py-20">
      <div className="title">
        <div className="contain">
          <div className="md:w-300 w-full mb-6">
            <h2>
              Memories <span className="text-secondary">Snapshots</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="w-full relative bg-white/50 p-6 overflow-hidden">
        <div className="w-full p-5 bg-[#E2ECEC] min-h-100"></div>
        {/* <ResponsiveImage src={images.baking} alt="test" /> */}
      </div>
    </section>
  );
};

export default Snapshot;
