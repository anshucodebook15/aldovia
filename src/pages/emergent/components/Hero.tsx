import { useAssets } from "../../../hooks/useAssets";
const Hero = () => {
  const { videos } = useAssets();
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-midnight-blue via-dark-accent to-dolci-blue"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          className="w-full h-full object-cover"
          src={videos.dolcipeople} // replace with your video path
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Dark overlay to improve text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 rounded-full bg-white animate-pulse animation-delay-200"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 rounded-full bg-white animate-pulse animation-delay-400"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 rounded-full bg-white animate-pulse animation-delay-600"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 pt-20 lg:mt-[-100px]">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Since 2008,
          <br />
          Worth Discovering
          {/* <br /> */}
        </h1>

        <p className="font-montserrat text-gray-200 text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Where flavor meets ambience in the heart of Bangalore
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            className="btn btn-primary text-lg px-8 py-4"
            onClick={() =>
              document
                .getElementById("location")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Visit Our Café
          </button>
          <button
            className="btn btn-secondary text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-midnight-blue"
            onClick={() =>
              document
                .getElementById("menu")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
