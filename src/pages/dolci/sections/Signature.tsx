import { useAssets } from "../../../hooks/useAssets";

const ResponsiveImage = ({ src = "", alt = "" }) => {
  return (
    <div className="relative flex-none w-100 h-64 md:h-86 lg:h-[400px] overflow-hidden flex items-center justify-center">
      <img src={src} alt={alt} className="object-cover w-full h-full" />
       <div className="bg-secondary text-white absolute bottom-0 left-0 z-5 px-5 clipname">@Docli desert</div>
    </div>
  );
};

const Signature = () => {
  const { images } = useAssets();
  return (
    <section className="py-20">
      <div className="title">
        <div className="contain">
          <div className="text-center w-full mb-8">
            <h2>
              <span className="text-primary">Chef </span>Signature
            </h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4">
        <div className="col-span-2 md:col-span-3 lg:col-span-2 relative">
          <div className="pl-20 pr-10">
            
            <p className="cap">
              <i>
                <span className="text-[84px] font-hatton">"</span>
                Must-try specialties that define the Dolci experience - crafted with passion since 2008.
                
              </i>
            </p>
          </div>
        </div>
        <div className="col-span-6 lg:col-span-6">
          <div className="content w-full overflow-scroll flex gap-2 scrollbar-hide">
            <ResponsiveImage src={images.dish1} alt="test" />
            <ResponsiveImage src={images.dish2} alt="test" />
            <ResponsiveImage src={images.dish3} alt="test" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signature;
