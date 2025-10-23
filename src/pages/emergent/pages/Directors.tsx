import { useState, useEffect } from "react";
import { useAssets } from "../../../hooks/useAssets";
import LayoutTwo from "../layout/layoutTwo";
import { ScrollToTop } from "../lib/ScrollToTop";

const Directors = () => {
  const { images } = useAssets();
  const [_, setShowModal] = useState(false);

  // Auto-open modal after 2s
  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const teamMembers = [
    {
      name: "Ms. Shipra Kumar",
      role: "Founder & Director",
      image: "shipra",
      description:
        "Ms. Shipra Kumar, a Le Cordon Bleu graduate, turned her passion into purpose when she founded Dolci in 2010. What started as a humble home baking venture has blossomed into a celebrated café brand, known across Bengaluru for its quality and unforgettable flavors. Driven by creativity, craftsmanship, and a love for bringing people together through food, Ms. Shipra has made Dolci a name that resonates with warmth, taste, and excellence.",
    },
    {
      name: "Mr. Vivek Kumar",
      role: "Director",
      image: "vivek",
      description:
        "Mr. Vivek Kumar, Director at Dolci, is a dynamic entrepreneur with deep roots in hospitality and textiles. He brings a legacy of excellence and innovation, having led several successful ventures including Clarks Exotica Convention Resort & Spa. His strategic vision and commitment to quality have played a key role in shaping Dolci’s growth. A passionate philanthropist and creative thinker, Mr. Kumar continues to inspire with his leadership and dedication.",
    },
    {
      name: "Mr. Nigel Colaco",
      role: "Director",
      image: "nigel",
      description:
        "Mr. Nigel Colaco, Director at Dolci, is a visionary entrepreneur and seasoned real estate expert. As Executive Director of Clarks Exotica and Director of Continental Builders and Developers, he has been instrumental in shaping some of Bengaluru’s most iconic residential and commercial projects, including Swiss Town and Hollywood Town. His commitment to quality, innovation, and sustainable development reflects the same passion he brings to Dolci’s growth and success.",
    },
    {
      name: "Mr. Randal Colaco",
      role: "Director",
      image: "randel",
      description:
        "Mr. Randal Colaco, Director of Dolci, represents the new wave and brings fresh vision with creative direction to the family’s hospitality ventures. With a passion for premium experiences, Mr. Randal plays a key role in shaping Dolci’s identity and growth. His approach blends design sensibility, operational excellence, and customer-first thinking. Randal represents the new wave of leadership with a strong focus on innovation and lifestyle-driven brands.",
    },
    {
      name: "Mr. M Balaji",
      role: "Executive Director & CEO",
      image: "balaji",
      description:
        "Mr. Balaji M, Executive Director and CEO of Dolci, brings over 25 years of cross-industry experience to the brand. He plays a pivotal role in Dolci’s strategic growth. As the driving force behind Dolci’s expansion, Mr. Balaji combines visionary leadership with deep operational insight. His people-centric approach and passion for excellence continue to shape the brand’s journey forward.",
    },
  ];

  const TeamSection = ({ images }: { images: Record<string, string> }) => {
    return (
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-0 items-start">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="px-10 flex flex-col justify-center items-center text-center"
            >
              <div className="w-60 h-60 rounded-full overflow-hidden mb-4">
                <img
                  src={images[member.image]}
                  alt={member.name}
                  className="w-full"
                />
              </div>
              <h4 className=" font-bold">{member.name}</h4>
              <h5 className="mb-4">
                {member.role && <span>{member.role}</span>}
              </h5>
              <p className="text-[14px] leading-5 font-montserrat">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <ScrollToTop />
      <LayoutTwo>
        <div className="mb-30"></div>

        <section className="contain mb-20 relative dbg py-10">
          {/* 🔹 Light overlay */}
          <div className="absolute inset-0 bg-white/95 pointer-events-none"></div>

          {/* 🔹 Content on top of overlay */}
          <div className="relative z-10 text-center">
            <h2 className="font-playfair-display text-4xl md:text-4xl font-bold text-midnight-blue mb-6">
              Our Directors
            </h2>
          </div>

          <div className="relative z-10">
            <TeamSection images={images} />
          </div>
        </section>
      </LayoutTwo>
    </div>
  );
};

export default Directors;
