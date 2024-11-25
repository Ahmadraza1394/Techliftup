import Footer from "./components/Footer";
import Header from "./components/Header";

import { Link } from "react-router-dom";

const cases = [
  {
    id: 1,
    title: "Cabo Shark Dive",
    description: "Tour operator website for Cabo Shark Dive.",
    image: "/assets/images/caboshark1.png", // Add your image path here
    details:
      " Cabo Shark Dive is a tour operator website that offers shark diving and snorkeling tours in Los Cabos.",
    link: "/cases/cabo-shark-dive", // Route to individual case
  },
  {
    id: 2,
    title: "CruiseCarFly",
    description:
      " Affiliate Landing Page to sell cruises, cars, and flights services.",
    image: "/assets/images/cruisecarfly1.png", // Add your image path here
    details:
      " CruiseCarFly is an affiliate landing page for deals on cruises, car rentals, and flights.",
    link: "/cases/cruise-car-fly", // Corrected route to individual case
  },
  {
    id: 3,
    title: "Brand Wave Digital",
    description: "Digital Marketing Agency",
    image: "/assets/images/brandwavedigital1.png", // Add your image path here
    details:
      "Brand Wave Digital is a digital marketing agency that helps businesses grow.",
    link: "/cases/brand-wave-digital", // Corrected route to individual case
  },
];

const Cases = () => {
  return (
    <>
      <Header />
      <section className="team-section bg-gray-50 px-6 md:px-12  pt-28">
        {/* Team Header */}
        <div className=" mb-12">
          <h2 className="text-4xl md:text-5xl font-bold  mb-4 text-red-500">
            Our Cases
          </h2>
          <p className="text-2xl mb-6 text-justify max-w-3xl font-semibold text-gray-700 leading-relaxed">
            Every case is unique, and TechLiftUp takes pride in crafting
            solutions tailored to your business needs. From software development
            to building MEP engineering platforms, our versatile approach
            ensures the highest quality and measurable results.
          </p>

          <Link
            to="/#contact"
            className="mt-6 px-6 py-3 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition"
          >
            Contact Us
          </Link>
        </div>
        <hr className=" bg-gray-50 text-gray-50  " />
      </section>

      <section className="py-14 px-6 md:px-20 bg-gray-50 text-gray-800">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4"> Cases</h1>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            Explore our successful projects showcasing our expertise in
            delivering exceptional solutions.
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem) => (
            <div
              key={caseItem.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={caseItem.image}
                alt={caseItem.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {caseItem.title}
                </h2>
                <p className="text-gray-600 mt-2">{caseItem.description}</p>
                <Link
                  to={caseItem.link}
                  className="mt-4 inline-block text-sky-500 hover:underline font-medium"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cases;
