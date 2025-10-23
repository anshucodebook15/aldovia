
import { useAssets } from '../../../hooks/useAssets';

const ResponsiveImage = ({ src = "", alt = "", cap="Vibes" }) => {
    return (
        <div className="relative flex-none w-100 h-64 md:h-86 lg:h-[300px] overflow-hidden flex items-center justify-center">
            <img src={src} alt={alt} className="object-cover w-full h-full" />
            <div className="text-[26px] font-cabinate-grotesk-300 text-white absolute bottom-[10%] left-[10%] z-5 px-5"><i>{cap}</i></div>
        </div>
    );
};

const Ambience = () => {
    const { images } = useAssets();
    return (
        <section className="py-20">
            {/* <div className="title">
                <div className="contain">
                    <div className="text-center w-full mb-8">
                        <h2>
                            <span className="text-primary">Chef </span>Signature
                        </h2>
                    </div>
                </div>
            </div> */}

            <div className="contain">



                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-hidden">
                    <ResponsiveImage src={images.cafe1} alt="test" cap='Vibes' />
                    <ResponsiveImage src={images.cafe2} alt="test" cap='Ambiance'/>
                    <ResponsiveImage src={images.cafe3} alt="test"  cap='Handcrafted'/>
                    <ResponsiveImage src={images.dish3} alt="test" cap='Delicious'/>
                    {/* <ResponsiveImage src={images.dish3} alt="test" /> */}

                </div>
            </div>
        </section>
    );
}

export default Ambience