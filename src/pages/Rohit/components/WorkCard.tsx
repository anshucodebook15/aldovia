import { useAssets } from "../../../hooks/useAssets";

const WorkCard = ({ title="text", description="text", imgUrl="text" }) => {
  const { icons } = useAssets();
  return (
    <div className="border-1 border-gray-100 bg-gray-100 min-h-20 overflow-hidden md:px-0 hover:border-pink-900/20 p-[1rem] ">
      <div className="cliptask overflow-hidden relative h-70 bg-amber-50 mt-[-5rem]">
        <img src={imgUrl} alt="" className=" absolute  h-[100%]" />
      </div>

      <div className="py-4 px-4">
        <h2 className="text-[20px] underline pb-2.5">
          <span className=""> {title}</span>
        </h2>

        <p className="text-[16px] text-gray-700 leading-[1.6]">{description}</p>

        <div className="cursor-pointer py-4 flex justify-end">
          <img src={icons.github} alt="" className="w-8" />
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
