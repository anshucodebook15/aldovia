const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
  
}) => {
//   const { images, icons, backgrounds, lottie, videos } = useAssets();
  return (
    <>
      <div className="md:mb-24 mb-20 flex justify-between">
        <h2 className="p-0 m-0">
          <span className="md:text-6xl text-5xl text-gray-800 font-extralight font-natosans">
            {title}
          </span>
          <span className="text-pink-800"> {subtitle}</span>
          <span className="text-pink-800 text-[18px] cursor-pointer"> #</span>
        </h2>
        {/* <img src={icons.user} alt="" className='w-6' /> */}
      </div>
    </>
  );
};

export default SectionTitle;
