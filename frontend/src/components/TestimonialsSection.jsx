import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Jesus Pittman",
    title: "Co-founder",
    position: "Product Development",
    image: "/assets/images/testimonialProfile.jpg",
    text: "TechLiftUp is very good at collaborative experience and quality work. Great attention to detail and deadlines with excellent communication. Looking forward to working together again. Highly recommended.",
  },
  {
    name: "Roberto White",
    title: "Product Lead",
    position: "Product Development",
    image: "/assets/images/profile.png",
    text: "TechLiftUp has an excellent attitude and is as honest as they come. We enjoyed working with them but as it turned out we were not the right fit for each other. I would recommend them to anyone needing competent Front End developers.",
  },
  {
    name: "Alexis Harper",
    title: "CTO",
    position: "Project Management",
    image: "/assets/images/profile.png",
    text: "Working with TechLiftUp was a seamless experience. They provided top-notch technical expertise and a clear understanding of our goals. We achieved our objectives with great efficiency.",
  },
  {
    name: "Emilimattar",
    title: "Software Developer",
    position: "Software Solutions",
    image: "/assets/images/profile.png",
    text: "Exceptional service! The TechLiftUp team transformed our outdated website into a high-performing, modern platform. The entire process was smooth, and the results exceeded expectations.",
  },
  {
    name: "Michael ",
    title: "Marketing Director",
    position: "Marketing & SEO",
    image: "/assets/images/profile.png",
    text: "Thanks to TechLiftUp, our SEO rankings skyrocketed, and we saw a 50% increase in organic traffic. Their expertise in digital marketing is top-notch.",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between py-16 px-6 md:px-20 bg-gray-200">
      {/* Text Section */}
      <div className="flex-1 max-w-xl">
        <h3 className="text-red-500 text-xl font-semibold mb-2">
          Testimonials
        </h3>
        <h2 className="text-4xl font-bold mb-6 text-sky-500">
          We help to achieve mutual goals.
        </h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-14 h-14 rounded-full mr-4"
              />
              <div>
                <p className="bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded-md inline-block mb-1">
                  {testimonials[currentIndex].position}
                </p>
                <p className="text-lg font-semibold">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-gray-500">
                  {testimonials[currentIndex].title}
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed text-xl text-justify">
              {testimonials[currentIndex].text}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center mt-6 space-x-4">
          <button
            onClick={prevTestimonial}
            className="text-gray-500 hover:text-sky-500"
          >
            <FaArrowLeft className="text-2xl" />
          </button>
          <button
            onClick={nextTestimonial}
            className="text-gray-500 hover:text-sky-700"
          >
            <FaArrowRight className="text-2xl" />
          </button>
          <span className="text-sky-500 ml-4">
            {currentIndex + 1} / {testimonials.length}
          </span>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 mt-8 lg:mt-0 sm:ml-3">
        <img
          src="/assets/images/testimonialImg.jpg" // Replace with your background image
          alt="Team Meeting"
          className="rounded-lg w-full object-cover h-80 md:h-full"
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
