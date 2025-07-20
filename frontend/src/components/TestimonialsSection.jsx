import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { T } from "../context/LanguageContext";

const testimonials = [
  {
    name: "Sarah Thompson",
    title: "Business Owner",
    position: "E-commerce",
    image: "/assets/images/testimonialProfile.jpg",
    text: "TechLiftUp transformed our website from bland to brilliant! Their team redesigned our site to be lightning-fast and mobile-friendly. Our conversion rate increased by 40% in just two months!",
    height: "tall",
  },
  {
    name: "Michael Chen",
    title: "Marketing Director",
    position: "SaaS Company",
    image: "/assets/images/profile.png",
    text: "Their digital marketing strategies delivered real results. We went from page 3 to page 1 on Google for our main keywords, and our local traffic doubled. The ROI has been incredible.",
    height: "medium",
  },
  {
    name: "Emily Rodriguez",
    title: "Startup Founder",
    position: "Tech Startup",
    image: "/assets/images/profile.png",
    text: "The cold email campaign they designed for us generated 15 qualified leads in the first month! Their approach was personalized, value-driven, and actually got responses instead of being ignored.",
    height: "short",
  },
  {
    name: "David Patel",
    title: "Agency Owner",
    position: "Digital Agency",
    image: "/assets/images/profile.png",
    text: "Their AI automation setup saved us 20+ hours per week on repetitive tasks. The chatbot they implemented captures leads 24/7, and the email sequences keep our pipeline full automatically.",
    height: "medium",
  },
  {
    name: "Olivia Harper",
    title: "E-commerce Manager",
    position: "Retail",
    image: "/assets/images/profile.png",
    text: "Our website was beautiful but not converting. TechLiftUp fixed our site structure, added trust elements, and simplified navigation. Now we're seeing a 35% increase in sales with the same traffic!",
    height: "tall",
  },
  {
    name: "James Carter",
    title: "Sales Director",
    position: "B2B Services",
    image: "/assets/images/profile.png",
    text: "The AI-powered email marketing system they built for us personalized messages at scale. Our open rates jumped from 12% to 28%, and we're closing deals faster than ever before.",
    height: "short",
  },
];

const TestimonialsSection = () => {
  const renderStars = () => {
    return (
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="text-yellow-500 w-6 h-6 mr-1" />
        ))}
      </div>
    );
  };

  const getCardHeight = (height) => {
    switch (height) {
      case "tall":
        return "h-80 md:h-96";
      case "short":
        return "h-64 md:h-72";
      default:
        return "h-72 md:h-80";
    }
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-sky-400 via-sky-500 to-sky-400 relative overflow-hidden">
      {/* Background overlay for extra depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-red-500    font-semibold text-lg mb-2 tracking-wide">
            <T>CLIENT TESTIMONIALS</T>
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            <T>What Our Clients Say About Us</T>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-500 mx-auto"></div>
        </div>

        {/* Masonry Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`${getCardHeight(testimonial.height)} group`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-gradient-to-br from-gray-900/90 to-blue-950/90 backdrop-blur-sm rounded-2xl p-6 h-full flex flex-col border border-blue-800/30 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 group-hover:scale-[1.02]">
                {/* Stars at the top */}
                {renderStars()}

                {/* Testimonial text */}
                <div className="flex-grow mb-6">
                  <p className="text-gray-100 leading-relaxed text-sm md:text-base">
                    "{testimonial.text}"
                  </p>
                </div>

                {/* Profile section at bottom */}
                <div className="flex items-center mt-auto pt-4 border-t border-blue-800/30">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full border-2 border-blue-500/50 object-cover"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-transparent"></div>
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-white text-sm md:text-base">
                      {testimonial.name}
                    </p>
                    <p className="text-xs md:text-sm text-gray-300">
                      <T>{testimonial.title}</T>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
