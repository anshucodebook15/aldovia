import { useState } from "react";

import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { locationData } from "../../../data/mock";
import { useAssets } from "../../../hooks/useAssets";
// import { locationData } from '../data/mock';

const Location = () => {
  const { images, icons } = useAssets();
  const [selectedLocation, setSelectedLocation] = useState(
    locationData.locations[2]
  ); // Default to Cunningham Road (main)

  const socialLinks = [
    {
      icon: "facebook",
      url: locationData.socialMedia.facebook,
      name: "Facebook",
    },
    {
      icon: "instapng",
      url: locationData.socialMedia.instagram,
      name: "Instagram",
    },
    {
      icon: "linkedin",
      url: locationData.socialMedia.linkedin,
      name: "linkedin",
    },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: selectedLocation.address,
      action: () =>
        window.open(
          `https://maps.google.com?q=${encodeURIComponent(
            selectedLocation.address
          )}`,
          "_blank"
        ),
    },
    {
      icon: Phone,
      title: "Phone",
      content: selectedLocation.phone,
      action: () => window.open(`tel:${selectedLocation.phone}`),
    },
    {
      icon: Mail,
      title: "For Complaints Or Queries",
      content: selectedLocation.email,
      action: () => window.open(`mailto:${selectedLocation.email}`),
    },
    {
      icon: Clock,
      title: "Hours",
      content: `Weekdays: ${selectedLocation.hours.weekdays}\nWeekends: ${selectedLocation.hours.weekends}`,
      action: null,
    },
  ];

  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto contain md:px-4 px-6">
        {/* <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-midnight-blue mb-4">
            Visit Dolci Today
          </h2>
          <p className="font-montserrat text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the finest coffee and desserts at any of our three
            Bangalore locations, each offering the same exceptional quality in a
            cozy, welcoming atmosphere.
          </p>
        </div> */}

        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-midnight-blue mb-4">
            Visit Us Today
          </h2>
          <p className="font-great-vibes text-2xl text-dark-accent font-medium mb-2">
            Your Cafe Destination
          </p>
          <p className="font-montserrat text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the finest coffee and desserts at any of our three
            Bangalore locations, each offering the same exceptional quality in a
            cozy, welcoming atmosphere.
          </p>
        </div>

        {/* Location Selection */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {locationData.locations.map((location) => (
              <>
                {/* <button
                  key={location.id}
                  onClick={() => setSelectedLocation(location)}
                  className={`btn-secondary ${selectedLocation.id === location.id
                    ? "bg-dolci-blue text-midnight-blue hover:bg-dark-accent"
                    : "text-dolci-blue hover:bg-dolci-blue hover:text-midnight-blue"
                    }`}
                >
                  <MapPin className="mr-2 h-5 w-5 flex-shrink-0" />
                  {location.name}
                  {location.isMain && (
                    <span className="ml-2 text-xs bg-dark-accent text-midnight-blue px-2 py-0.5 rounded-full">
                      Main
                    </span>
                  )}
                </button> */}

                <button
                  key={location.id}
                  onClick={() => setSelectedLocation(location)}
                  className="btn btn-primary text-lg px-8 py-4 min-w-70"
                >
                  <MapPin className="mr-2 h-5 w-5 flex-shrink-0" />
                  {location.name}
                  {/* {location.isMain && (
                    <span className="ml-2  text-xs bg-dark-accent text-midnight-blue px-2 py-0.5 rounded-full">
                      Main
                    </span>
                  )} */}
                </button>
              </>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="font-playfair text-2xl font-bold text-midnight-blue mb-6">
              Get in Touch - {selectedLocation.name}
            </h3>

            {contactInfo.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className={`group transition-all duration-300 hover:shadow-lg border-l-2 border-l-dolci-blue ${
                    item.action ? "cursor-pointer hover:-translate-y-1" : ""
                  }`}
                  onClick={() => item.action}
                >
                  <div className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-dolci-blue transition-colors">
                          <IconComponent
                            strokeWidth={1.5}
                            className="h-6 w-6 text-midnight-blue"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-playfair text-lg font-semibold text-midnight-blue ">
                          {item.title}
                        </h4>
                        <p className="font-montserrat text-[16px] text-gray-600 whitespace-pre-line">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Social Media & Delivery Links */}
            <div className="pt-6">
              <h4 className="font-playfair text-lg font-semibold text-midnight-blue mb-4">
                Follow & Order
              </h4>
              <div className="space-y-4">
                {/* Social Media */}
                <div>
                  <p className="font-montserrat text-sm text-gray-500 mb-2">
                    Social Media
                  </p>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => {
                      // const IconComponent = social.icon;
                      return (
                        <button
                          key={index}
                          className="hover:bg-gray-50 w-12 p-1 text-dolci-blue cursor-pointer"
                          onClick={() => window.open(social.url, "_blank")}
                          title={social.name}
                        >
                          {/* <IconComponent className="h-5 w-5 flex-shrink-0" /> */}
                          <img src={icons[social.icon]} alt="" className="" />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Delivery Links */}
                <div>
                  <p className="font-montserrat text-sm text-gray-500 mb-2">
                    Order Online
                  </p>
                  <div className="flex space-x-4">
                    {/* Zomato */}
                    {selectedLocation.zomato && (
                      <button
                        className="px-4 bg-gray-50 flex items-center cursor-pointer"
                        onClick={() =>
                          window.open(selectedLocation.zomato, "_blank")
                        }
                        title="Order on Zomato"
                      >
                        <img src={images.zomato} alt="" className="w-20" />
                        {/* <span className="font-montserrat font-semibold text-sm">
                          Zomato
                        </span> */}
                      </button>
                    )}

                    {/* Swiggy */}
                    {selectedLocation.swiggy && (
                      <button
                        className="px-4 bg-gray-50 flex items-center cursor-pointer"
                        onClick={() =>
                          window.open(selectedLocation.swiggy, "_blank")
                        }
                        title="Order on Swiggy"
                      >
                        {/* <span className="font-montserrat font-semibold text-sm">
                          Swiggy
                        </span> */}
                        <img src={images.swiggy} alt="" className="w-20" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="space-y-6">
            <h3 className="font-playfair text-2xl font-bold text-midnight-blue mb-6">
              Find Us Here - {selectedLocation.name}
            </h3>

            <div className="overflow-hidden shadow-lg">
              <div
                className="w-full h-80 bg-gradient-to-br from-arctic-blue to-dolci-blue flex items-center justify-center cursor-pointer group hover:from-dolci-blue hover:to-dark-accent transition-all duration-300"
                onClick={() =>
                  window.open(
                    `https://maps.google.com?q=${encodeURIComponent(
                      selectedLocation.address
                    )}`,
                    "_blank"
                  )
                }
              >
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-midnight-blue mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <p className="font-playfair text-lg font-semibold text-midnight-blue mb-2">
                    View on Google Maps
                  </p>
                  <p className="font-montserrat text-midnight-blue/80 px-4">
                    Click to get directions to our {selectedLocation.name} café
                  </p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62197.75330666482!2d77.53835806953127!3d13.012758550377209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1668f2dec3f7%3A0x6555d5dac4ac1bce!2sDolci%20-%20Cunningham%20Road!5e0!3m2!1sen!2sin!4v1758256618661!5m2!1sen!2sin"
                    width={600}
                    height={450}
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  {/* <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62192.444719676845!2d77.52771695857626!3d13.033901967044734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae175f77e07cbd%3A0x187fa97ab322a9b3!2sDolci%20-%20New%20Bel%20Road!5e0!3m2!1sen!2sin!4v1758557853299!5m2!1sen!2sin"
                    width={600}
                    height={450}
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d972.0051354374839!2d77.59709426956587!3d12.970537306096654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae179a0d17925f%3A0x779ee1d3e740b9a3!2sDolci%20-%20Lavelle%20Road!5e0!3m2!1sen!2sin!4v1758558100980!5m2!1sen!2sin"
                    width={600}
                    height={450}
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  /> */}
                </div>
              </div>
            </div>

            {/* Call-to-Action */}
            <div className="bg-gradient-to-r from-dolci-blue to-dark-accent rounded-2xl p-6 lg:p-8 text-midnight-blue">
              <h4 className="font-playfair text-xl lg:text-2xl font-bold mb-4">
                Ready for a Delicious Experience?
              </h4>
              <p className="font-montserrat mb-6 text-midnight-blue/80 text-base">
                Visit our {selectedLocation.name} location today and discover
                why Dolci is Bangalore's favorite café destination.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="border-1 font-montserrat font-medium text-lg px-4 py-2 rounded-full cursor-pointer text-gray-800 bg-white border-gray-300 hover:bg-white hover:text-midnight-blue flex items-center"
                  onClick={() =>
                    window.open(
                      `https://maps.google.com?q=${encodeURIComponent(
                        selectedLocation.address
                      )}`,
                      "_blank"
                    )
                  }
                >
                  <MapPin strokeWidth={1.5} className="mr-2" size={20} />
                  Get Directions
                </button>
                <button
                  className="border-1 font-montserrat font-medium text-lg px-4 py-2 rounded-full cursor-pointer text-gray-800 bg-white border-gray-300 hover:bg-white hover:text-midnight-blue flex items-center"
                  onClick={() => window.open(`tel:${selectedLocation.phone}`)}
                >
                  <Phone strokeWidth={1.5} className="mr-2" size={20} />
                  Call Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
