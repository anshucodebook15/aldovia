import { useEffect, useState } from "react";
// import { useAssets } from "../../../hooks/useAssets";
import LayoutTwo from "../layout/layoutTwo";
import { BadgeCheck, ChefHat, Salad, Sparkle } from "lucide-react";
import { useLocation } from "react-router";
import { useAssets } from "../../../hooks/useAssets";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const B2b = () => {
  // const { images } = useAssets();
  const [showModal, setShowModal] = useState(false);

  const { images } = useAssets();

  // Auto-open modal after 2s
  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <ScrollToTop />
      <LayoutTwo>
        <div className="px-4">
          <div className="py-20"></div>
          <section className="text-center mb-16 ">
            <h1 className="font-playfair-display text-4xl md:text-5xl font-bold text-midnight-blue mb-6 leading-12">
              Dolci White Label Partnerships in India
            </h1>
            <p className="font-great-vibes text-2xl text-dark-accent mb-10">
              From Home Baking to Beloved Café Chain
            </p>
            <div className="max-w-5xl mx-auto">
              <p className="font-montserrat text-[18px] text-gray-700 leading-relaxed mb-12">
                At Dolci, we power some of the biggest brands with our expertise
                in baking and food innovation. As a trusted white label bakery
                supplier and private label bakery manufacturer for B2B, we
                create high-quality products that carry your brand name while
                delivering our top-notch craftsmanship and consistency.
              </p>

              <p>Our batch production for scaling includes: </p>
            </div>

            <div className="contain max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 mb-12">
                <div className="bg-white rounded-xl p-6 flex flex-col items-center">
                  {/* <img
                  src={
                    images?.b2bBatch1 ||
                    "https://img.icons8.com/ios-filled/100/bread.png"
                  }
                  alt="Batch Production"
                  className="w-16 h-16 mb-4"
                /> */}
                  <div className="mb-3">
                    <BadgeCheck strokeWidth={1} size={60} />
                  </div>
                  <h4 className="font-playfair-display text-[18px] font-bold mb-2 text-midnight-blue">
                    Seasonal SKU development
                  </h4>
                </div>
                <div className="bg-white rounded-xl p-6 flex flex-col items-center">
                  {/* <img
                  src={
                    images?.b2bBatch1 ||
                    "https://img.icons8.com/ios-filled/100/bread.png"
                  }
                  alt="Batch Production"
                  className="w-16 h-16 mb-4"
                /> */}

                  <div className="mb-3">
                    <ChefHat strokeWidth={1} size={60} />
                  </div>
                  <h4 className="font-playfair-display text-[18px] font-bold mb-2 text-midnight-blue">
                    New recipe R&D
                  </h4>
                </div>
                <div className="bg-white rounded-xl p-6 flex flex-col items-center">
                  {/* <img
                  src={
                    images?.b2bBatch1 ||
                    "https://img.icons8.com/ios-filled/100/bread.png"
                  }
                  alt="Batch Production"
                  className="w-16 h-16 mb-4"
                /> */}
                  <div className="mb-3">
                    <Salad strokeWidth={1} size={60} />
                  </div>
                  <h4 className="font-playfair-display text-[18px] font-bold mb-2 text-midnight-blue">
                    Vegetarian, Eggless, Vegan options
                  </h4>
                </div>
              </div>
            </div>
          </section>

          <div className="contain border-[1px] border-gray-200 mb-16"></div>

          <section className="text-center mb-20 bg-white">
            <h2 className=" underline font-playfair-display text-4xl md:text-4xl font-bold text-midnight-blue mb-6">
              Our B2B White Label Bakery Services
            </h2>
            <p className="font-great-vibes text-2xl text-dark-accent mb-10">
              From Home Baking to Beloved Café Chain
            </p>
            {/* <h3 className="font-playfair-display text-3xl md:text-3xl font-bold text-midnight-blue mb-6">
            White Label Solutions
          </h3> */}

            <div className="flex items-center justify-center mb-6">
              <Sparkle strokeWidth={1} size={20} className="mr-1" />
              <h3 className="font-playfair-display text-2xl md:text-2xl font-bold text-midnight-blue ">
                White Label Solutions
              </h3>
            </div>

            <div className="max-w-5xl mx-auto">
              <p className="font-montserrat text-[18px] text-gray-700 leading-relaxed mb-12">
                We specialise in white label baked goods manufacturing. From
                breads, cakes, cookies, and pastries to savoury items, every
                product can be exclusively branded under your label, with our
                team ensuring taste, quality, and freshness.
              </p>
            </div>
          </section>
          <section className="text-center mb-20 bg-white">
            {/* <h3 className="font-playfair-display text-3xl md:text-3xl font-bold text-midnight-blue mb-6">
            Custom Product Development
          </h3> */}

            <div className="flex items-center justify-center mb-6">
              <Sparkle strokeWidth={1} size={20} className="mr-1" />
              <h3 className="font-playfair-display text-2xl md:text-2xl font-bold text-midnight-blue ">
                Custom Product Development
              </h3>
            </div>
            <div className="max-w-5xl mx-auto">
              <p className="font-montserrat text-[18px] text-gray-700 leading-relaxed mb-12">
                Looking for innovation? Our custom bakery solutions in India are
                designed for brands that want unique recipes, specialised
                product lines, or dietary-specific ranges like gluten-free and
                vegan bakery items. We handle everything from concept to
                scalable production while maintaining your brand’s signature
                quality.
              </p>
            </div>
          </section>
          <section className="text-center mb-20 bg-white">
            {/* <h3 className="font-playfair-display text-3xl md:text-3xl font-bold text-midnight-blue mb-6">
            Large-Scale Supply
          </h3> */}

            <div className="flex items-center justify-center mb-6">
              <Sparkle strokeWidth={1} size={20} className="mr-1" />
              <h3 className="font-playfair-display text-2xl md:text-2xl font-bold text-midnight-blue ">
                Large-Scale Supply
              </h3>
            </div>

            <div className="max-w-5xl mx-auto">
              <p className="font-montserrat text-[18px] text-gray-700 leading-relaxed mb-12">
                With two state-of-the-art facilities, we are the reliable bakery
                contract manufacturing partner for businesses that demand scale
                without compromise. As a bulk baked goods supplier and
                industrial bakery producer in India, we guarantee consistent
                output, timely delivery, and high standards for every order.
              </p>
            </div>
          </section>

          <section className="text-center mb-20 bg-white">
            <h2 className="underline font-playfair-display text-3xl md:text-3xl font-bold text-midnight-blue mb-6">
              Our Partnerships
            </h2>

            {/* <div className="max-w-5xl mx-auto">
            <ol className="font-montserrat text-lg text-gray-700 leading-relaxed mb-12">
              <li>
                <strong>ITC:</strong> Supplying a wide range of breads, cakes,
                cookies and other baked products.&nbsp;
              </li>
              <li>
                <strong>Chai Point:</strong> Producing fresh sandwiches, puffs
                and savoury delights across 39 outlets.
              </li>
              <li>
                <strong>Fyole Caf&eacute; (Mall of Asia):</strong> Crafting
                specialty baked goods to complement their caf&eacute; menu.
              </li>
            </ol>
          </div> */}

            <div className="contain max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 mb-12 justify-baseline item-start">
                <div className="bg-white rounded-xl p-6 flex flex-col  items-center">
                  <div className="mb-4 w-18 h-20 overflow-hidden  flex justify-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/ITC_Limited_Logo.svg/1152px-ITC_Limited_Logo.svg.png"
                      alt=""
                      className="w-full"
                    />
                  </div>
                  <h4 className="font-playfair-display text-xl font-bold mb-2 text-midnight-blue">
                    ITC
                  </h4>
                  <p>
                    Supplying a wide range of breads, cakes, cookies and other
                    baked products.&nbsp;
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 flex flex-col items-center">
                  <div className="mb-4 w-40 h-20 overflow-hidden flex justify-center">
                    {/* <div className="w-20 h-20 bg-gray-300 flex justify-center items-center">
                      <h2>Pan-India</h2>
                    </div> */}
                    <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbbNlhg2_DAonvktaY8wmxRAc1OQ6idWJVAw&s'} className="w-20" />
                  </div>
                  <h4 className="font-playfair-display text-xl font-bold mb-2 text-midnight-blue">
                    Pan-India
                  </h4>
                  <p>
                    Producing fresh sandwiches, puffs and savoury delights
                    across 39 outlets.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 flex flex-col items-center">
                  <div className="mb-4 w-18 h-20 overflow-hidden  flex justify-center">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9z6mfk23rEhOHuEO2xTExlTNxuYInBVoS5A&s"
                      alt=""
                      className="w-full"
                    />
                  </div>
                  <h4 className="font-playfair-display text-xl font-bold mb-2 text-midnight-blue">
                    Fyole Caf&eacute; (Mall of Asia)
                  </h4>
                  <p>
                    Crafting specialty baked goods to complement their
                    caf&eacute; menu.
                  </p>
                </div>
              </div>
            </div>

            <p>
              With every new partnership, we enable brands to focus on their
              experience, as we deliver excellence behind the scenes
            </p>
          </section>

          <div className="contain border-[1px] border-gray-200 mb-16"></div>

          <section className="text-center mb-20 bg-white">
            <h2 className="font-playfair-display text-4xl md:text-4xl font-bold text-midnight-blue mb-6 underline">
              We’ve got everything you need to grow your brand
            </h2>
            <div className="max-w-5xl mx-auto">
              <p className="font-montserrat text-[18px] text-gray-700 leading-relaxed mb-12">
                With three high-capacity production units, with{" "}
                <b> over 7000 sq.ft state of the art commissary </b> Dolci is
                uniquely positioned to offer a full spectrum of B2B food
                solutions. Beyond white labeling, here’s what else we can do -
              </p>
            </div>

            <div className="flex items-center justify-center mb-6">
              <Sparkle strokeWidth={1} size={20} className="mr-1" />
              <h3 className="font-playfair-display text-2xl md:text-2xl font-bold text-midnight-blue ">
                Bulk Corporate Orders
              </h3>
            </div>
            <div className="max-w-5xl mx-auto">
              <p className="font-montserrat text-[18px] text-gray-700 leading-relaxed mb-12">
                We cater to large-volume requirements for corporates, events,
                and institutions with a focus on consistency, customization, and
                timely delivery. Corporate Gifting: Curated hampers, baked
                assortments, and festive packs for holidays and employee
                gifting. Event Catering: High-volume baked goods for seminars,
                corporate events, or large private gatherings.
              </p>
            </div>

            <div className="flex items-center justify-center mb-6">
              <Sparkle strokeWidth={1} size={20} className="mr-1" />
              <h3 className="font-playfair-display text-2xl md:text-2xl font-bold text-midnight-blue ">
                Institutional Supply
              </h3>
            </div>

            <div className="max-w-5xl mx-auto">
              <p className="font-montserrat text-[18px] text-gray-700 leading-relaxed mb-12">
                Ideal for schools, colleges, hospitals, airports, railways, and
                government tenders, where quality and hygiene are paramount.
                Pre-packaged snacks and breads Nutritious bakery options Long
                shelf-life products for daily distribution
              </p>
            </div>

            <div className="flex items-center justify-center mb-6">
              <Sparkle strokeWidth={1} size={20} className="mr-1" />
              <h3 className="font-playfair-display text-2xl md:text-2xl font-bold text-midnight-blue ">
                Foodservice Supply for Hotels, QSRs, and Cafés
              </h3>
            </div>
            <div className="max-w-5xl mx-auto">
              <p className="font-montserrat text-[18px] text-gray-700 leading-relaxed mb-12">
                We supply ready-to-serve or ready-to-bake products for: Cafés &
                Coffee Chains: Cakes, croissants, muffins, sandwiches Hotels &
                Resorts: Breakfast bakery spreads, desserts, and custom products
                Quick Service Restaurants (QSRs): Burger buns, pizza bases,
                garlic breads, etc. Seasonal & Custom Projects Diwali,
                Christmas, New Year hampers Themed products for brand campaigns
                or influencer events Custom flavor launches for partners
              </p>
            </div>
          </section>

          <div className="contain border-[1px] border-gray-200 mb-16"></div>

          <section className=" bg-white">
            <h3 className="font-playfair-display text-3xl md:text-3xl font-bold text-midnight-blue mb-8 text-center">
              Why Partner With Dolci?
            </h3>

            <div className="md:max-w-4xl mx-auto px-4">
              <ul className="font-montserrat text-[18px] text-gray-700 b2blist leading-relaxed mb-12 ml-14">
                <li>
                  <span>
                    {/* <BadgeCheck
                      strokeWidth={1.2}
                      size={18}
                      className="inline-block mr-2.5"
                    /> */}
                  </span>
                  Expertise in <strong>white label bakery partnerships</strong>{" "}
                  in India
                </li>
                <li>
                  <span>
                    {/* <BadgeCheck
                      strokeWidth={1.2}
                      size={18}
                      className="inline-block mr-2.5"
                    /> */}
                  </span>
                  Proven track record with leading caf&eacute;s, restaurants,
                  and FMCG brands
                </li>
                <li>
                  <span>
                    {/* <BadgeCheck
                      strokeWidth={1.2}
                      size={18}
                      className="inline-block mr-2.5"
                    /> */}
                  </span>
                  Ability to scale from boutique batches to{" "}
                  <strong>large-scale bakery supply</strong>
                </li>
                <li>
                  <span>
                    {/* <BadgeCheck
                      strokeWidth={1.2}
                      size={18}
                      className="inline-block mr-2.5"
                    /> */}
                  </span>
                  Wide product portfolio: bread, cookies, cakes, biscuits, puff
                  pastries, fresh sandwiches and many more
                </li>
                <li>
                  {" "}
                  <span>
                    {/* <BadgeCheck
                      strokeWidth={1.2}
                      size={18}
                      className="inline-block mr-2"
                    /> */}
                  </span>
                  Commitment to quality, innovation, and consistency
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-20">
            {/* CTA Section */}
            <div className="mt-24 text-center rounded-3xl p-10 lg:p-12 text-midnight-blue max-w-2xl mx-auto border-1 border-dolci-blue">
              <p className="font-montserrat text-midnight-blue/80 mb-10 max-w-3xl mx-auto text-base lg:text-lg">
                Get in touch today to discuss your requirements and explore how
                we can create the perfect baked products for your brand.
              </p>

              <p className="text-gray-600 text-sm mb-6 text-center">
                Enter your phone number and email to receive updates from Dolci.
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-midnight-blue focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-midnight-blue focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-midnight-blue focus:outline-none"
                />

                <button
                  type="button"
                  className="w-full bg-midnight-blue hover:bg-midnight-blue/60 text-white rounded-lg py-2  transition font-playfair text-2xl lg:text-2xl font-bold mb-6 leading-normal cursor-pointer"
                >
                  I AM INTERESTED
                </button>
              </form>
            </div>
          </section>
        </div>
      </LayoutTwo>

      {/* 🔹 Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full relative overflow-hidden">
            {/* 🔹 Banner */}
            <div className="relative">
              <div className="w-full flex justify-center bg-dolci-blue py-1">
                <img
                  src={images.dolcilogo} // <-- replace with your bakery banner image
                  alt="Bakery Banner"
                  className="w-20 h-20 object-cover"
                />
              </div>
              {/* 🔹 Close button over banner */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-2 bg-white/80 hover:bg-white text-gray-700 hover:text-gray-900 rounded-full p-1.5 shadow"
              >
                ✕
              </button>
            </div>

            {/* 🔹 Modal Content */}
            <div className="p-8">
              <h3 className="text-2xl font-bold font-playfair-display text-midnight-blue mb-4 text-center">
                Have a question?
              </h3>
              <p className="text-gray-600 text-sm mb-6 text-center">
                Fill up the below credentials and we will get in touch with you
                ASAP!
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-midnight-blue focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-midnight-blue focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-midnight-blue focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full bg-midnight-blue text-white font-semibold rounded-lg py-2 hover:bg-midnight-blue/90 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default B2b;
