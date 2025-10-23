import { useAssets } from "../../../hooks/useAssets";

// const ScrollContainer = ({ children }) => {
//   const scrollRef = useRef<any>(null);

//   useEffect(() => {
//     const el = scrollRef.current;
//     let isDown = false;
//     let startX: any;
//     let scrollLeft: any;

//     const handleMouseDown = (e) => {
//       isDown = true;
//       el.classList.add("cursor-grabbing");
//       startX = e.pageX - el.offsetLeft;
//       scrollLeft = el.scrollLeft;
//     };

//     const handleMouseLeave = () => {
//       isDown = false;
//       el.classList.remove("cursor-grabbing");
//     };

//     const handleMouseUp = () => {
//       isDown = false;
//       el.classList.remove("cursor-grabbing");
//     };

//     const handleMouseMove = (e) => {
//       if (!isDown) return;
//       e.preventDefault();
//       const x = e.pageX - el.offsetLeft;
//       const walk = (x - startX) * 1; // drag speed
//       el.scrollLeft = scrollLeft - walk;
//     };

//     el.addEventListener("mousedown", handleMouseDown);
//     el.addEventListener("mouseleave", handleMouseLeave);
//     el.addEventListener("mouseup", handleMouseUp);
//     el.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       el.removeEventListener("mousedown", handleMouseDown);
//       el.removeEventListener("mouseleave", handleMouseLeave);
//       el.removeEventListener("mouseup", handleMouseUp);
//       el.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <div
//       ref={scrollRef}
//       className="w-full overflow-x-scroll flex gap-2 scrollbar-hide cursor-grab select-none"
//     >
//       {children}
//     </div>
//   );
// };

const ResponsiveImage = ({ src = "", alt = "" }) => {
  return (
    <div className="relative flex-none w-120 h-64 md:h-86 lg:h-[450px] overflow-hidden flex items-center justify-center">
      <img src={src} alt={alt} className="object-cover w-full h-full" />
      <div className="bg-primary text-white absolute bottom-0 left-0 z-5 px-5 clipname">@Docli desert</div>
    </div>
  );
};

const Gallery = () => {
  const { images } = useAssets();
  return (
    <section className="py-20">
      <div className="title md:px-0 px-4">
        <div className="contain">
          <div className="md:w-300 w-full mb-4">
            <h2>A Gallery of Culinary Artistry</h2>
          </div>
        </div>
      </div>
      <div className="content w-full overflow-scroll flex gap-2 scrollbar-hide">
        <ResponsiveImage src={images.delight_1} alt="test" />
        <ResponsiveImage src={images.delight_2} alt="test" />
        <ResponsiveImage src={images.delight_2} alt="test" />
        <ResponsiveImage src={images.delight_2} alt="test" />
        <ResponsiveImage src={images.delight_2} alt="test" />
        <ResponsiveImage src={images.delight_2} alt="test" />
      </div>

      <div className="contain">
        <div className="cap py-4 md:px-0 px-4">
          <i>The perfect blend of flavor, vibe, and world-class hospitality.</i>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
