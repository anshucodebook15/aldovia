import { useState } from "react";
// import { Badge } from './ui/badge';
// import { Card, CardContent } from './ui/card';
// import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { galleryData } from "../../../data/mock";
import { ZoomIn } from "lucide-react";

const Delights = () => {
  const [selectedCategory, setSelectedCategory] = useState("viennoiserie");
  // const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    // { id: "all", name: "All", count: galleryData.images.length },
    {
      id: "viennoiserie",
      name: "Viennoiserie",
      count: galleryData.images.filter((img) => img.category === "viennoiserie")
        .length,
    },
    {
      id: "beverages",
      name: "Beverages",
      count: galleryData.images.filter((img) => img.category === "beverages")
        .length,
    },
    {
      id: "food",
      name: "Food",
      count: galleryData.images.filter((img) => img.category === "food").length,
    },
    // {
    //   id: "desserts",
    //   name: "Desserts",
    //   count: galleryData.images.filter((img) => img.category === "desserts")
    //     .length,
    // },
    // {
    //   id: "coffee",
    //   name: "Coffee",
    //   count: galleryData.images.filter((img) => img.category === "coffee")
    //     .length,
    // },
    {
      id: "pastries",
      name: "Pastries",
      count: galleryData.images.filter((img) => img.category === "pastries")
        .length,
    },
    // {
    //   id: "display",
    //   name: "Display",
    //   count: galleryData.images.filter((img) => img.category === "display")
    //     .length,
    // },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? galleryData.images
      : galleryData.images.filter((img) => img.category === selectedCategory);

  return (
    <section id="gallery" className="bg-white py-20">
      <div className="max-w-7xl mx-auto contain px-4 md:px-0">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-midnight-blue mb-4">
            {galleryData.title}
          </h2>
          <p className="font-great-vibes text-2xl text-dark-accent font-medium mb-8">
            {galleryData.subtitle}
          </p>
          <p className="font-montserrat text-lg text-gray-600 max-w-3xl mx-auto">
            Step into our world of culinary artistry where every dish is a
            masterpiece and every moment is Instagram-worthy.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <div
              key={category.id}
              // variant={
              //     selectedCategory === category.id ? 'default' : 'secondary'
              // }
              className={`cursor-pointer px-6 py-2 text-sm font-montserrat font-medium transition-all duration-300 rounded-[10px] ${
                selectedCategory === category.id
                  ? "bg-dolci-blue text-midnight-blue hover:bg-dark-accent"
                  : "bg-gray-200 text-gray-700 hover:bg-arctic-blue hover:text-midnight-blue"
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name} ({category.count})
            </div>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid-safe grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredImages.map((image, _) => (
            <div key={image.id} className="overflow-hidden rounded-xl">
              <div className="safe-spacing">
                <div className="cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-102 h-full">
                  <div className="relative overflow-hidden w-full h-60">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                    </div>
                    <div className="absolute top-4 left-4 ">
                      <div className="bg-white/90 text-midnight-blue font-montserrat font-medium capitalize rounded-[5px] px-2">
                        {/* {image.category} */}
                        {image.alt}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="max-w-4xl max-h-[90vh] p-0 border-0">
                                <div className="relative">
                                    <img
                                        src={image.url}
                                        alt={image.alt}
                                        className="w-full h-auto max-h-[85vh] object-contain"
                                    />
                                    <button
                                        className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                                        onClick={() => setSelectedImage(null)}
                                    >
                                        <X className="h-5 w-5" />
                                    </button>
                                </div>
                            </div> */}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto border border-dolci-blue/20">
            <h3 className="font-playfair text-2xl font-bold text-midnight-blue mb-4">
              Experience These Delights in Person
            </h3>
            <p className="font-montserrat text-gray-600 mb-6">
              Our gallery only captures a glimpse of the magic. Visit Dolci to
              experience the full sensory journey of taste, aroma, and ambiance.
            </p>
          </div>
        </div> */}

        {/* CTA Section */}
        {/* <div className="mt-24 text-center rounded-3xl p-10 lg:p-12 text-midnight-blue max-w-2xl mx-auto border-1 border-dolci-blue">
          <h3 className="font-playfair text-2xl lg:text-3xl font-bold mb-6 leading-normal">
            Experience These Delights in Person
          </h3>
          <p className="font-montserrat text-midnight-blue/80 mb-10 max-w-3xl mx-auto text-base lg:text-lg">
            Our gallery only captures a glimpse of the magic. Visit Dolci to
            experience the full sensory journey of taste, aroma, and ambiance.
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
              <Phone strokeWidth={1.2} className="mr-2" />
              Call To Reserve
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Delights;
