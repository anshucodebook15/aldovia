
import { Star, Quote } from 'lucide-react';
import { testimonialsData } from '../../../data/mock';
// import { testimonialsData } from '../data/mock';

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto contain px-4">
                {/* <div className="text-center mb-16">
                    <h2 className="font-playfair text-4xl md:text-5xl font-bold text-midnight-blue mb-4">
                        What Our Guests Say
                    </h2>
                    <p className="font-montserrat text-xl text-gray-600 max-w-3xl mx-auto">
                        Don't just take our word for it. Hear from our delighted customers who have
                        experienced the magic of Dolci.
                    </p>
                </div> */}

                <div className="text-center mb-16">
                    <h2 className="font-playfair text-4xl md:text-5xl font-bold text-midnight-blue mb-4">
                         What Our Guests Say
                    </h2>
                    <p className="font-great-vibes text-2xl text-dark-accent font-medium mb-2">
                        Our Happy Customers
                    </p>
                    <p className="font-montserrat text-lg text-gray-600 max-w-3xl mx-auto">
                       Don't just take our word for it. Hear from our delighted customers who have
                        experienced the magic of Dolci.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonialsData.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-dolci-blue to-dark-accent"></div>
                            <div className="p-8">
                                <div className="mb-6">
                                    <Quote className="h-8 w-8 text-dolci-blue mb-4" />
                                    <p className="font-montserrat text-gray-700 leading-relaxed text-lg">
                                        "{testimonial.text}"
                                    </p>
                                </div>

                                <div className="flex items-center mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                    ))}
                                </div>

                                <div className="border-t border-gray-300 pt-2">
                                    <p className="font-playfair font-bold text-midnight-blue text-lg">{testimonial.name}</p>
                                    <p className="font-montserrat text-gray-500 text-sm">{testimonial.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;