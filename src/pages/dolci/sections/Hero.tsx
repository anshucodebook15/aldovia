
import { useAssets } from "../../../hooks/useAssets";

const Hero = () => {
  const { videos } = useAssets();
  return (
    <div className="pt-5 pb-20">
      <div className="lg-contain">
        <div className="rounded-[5px] overflow-hidden h-40 ">
          <div className="flex items-center justify-center">
            <video
              src={videos.dolcivd}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      <div className="contain">
        {/* <h2>Experience The Best Cafe In Bangalore</h2> */}
      </div>
    </div>
  );
};

export default Hero;
