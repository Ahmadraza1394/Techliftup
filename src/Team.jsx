import Header from "./components/Header";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <>
      <Header />
      <section className="team-section bg-gray-50 px-6 md:px-12 py-16 pt-28">
        {/* Team Header */}
        <div className=" mb-12">
          <h2 className="text-4xl md:text-5xl font-bold  mb-4 text-red-500">
            Team Members
          </h2>
          <p className="text-2xl mb-8 text-justify max-w-3xl font-semibold text-gray-700 leading-relaxed">
            At TechLiftUp, we combine innovation and expertise to deliver
            cutting-edge solutions in software development, app creation,
            digital marketing, and MEP design. With over 15+ years of
            experience, we empower businesses with sustainable and efficient
            outcomes, tailored to their unique needs.
          </p>

          <Link
            to="/#contact"
            className="mt-6 px-6 py-3 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition"
          >
            Contact Us
          </Link>
        </div>

        <hr className="my-10  " />

        {/* Team Members Section */}
        <div className="text-center">
          <h4 className="text-center font-serif ">Our Team</h4>
          <h3 className="text-2xl md:text-3xl font-semibold text-red-500 mb-8 my-8">
            Meet the Experts Behind TechLiftUp
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <!-- Grid for team members --> */}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* <!-- Team Member 1 --> */}
            <div className="text-center">
              <img
                src="/assets/images/sabir.jpeg"
                alt="Muhammad Sabir"
                className="w-full h-64 rounded-xl object-cover object-top shadow-black shadow-sm"
              />
              <h3 className="text-xl font-semibold text-gray-700 mt-4">
                Muhammad Sabir
              </h3>
              <p className="text-gray-500 text-lg">CTO & MEP Design Head</p>
              <p className="mt-2 text-gray-600 text-lg">
                Expert in MEP systems design with extensive experience in
                sustainable building solutions and energy optimization.
              </p>
            </div>

            {/* <!-- Team Member 2 --> */}
            <div className="text-center">
              <img
                src="/assets/images/ahmad.jpg"
                alt="Ahmad Raza"
                className="w-full h-64 rounded-xl object-cover object-top"
              />
              <h3 className="text-xl font-semibold text-gray-700 mt-4">
                Ahmad Raza
              </h3>
              <p className="text-gray-500 text-lg">
                CEO & Full Stack Developer
              </p>
              <p className="mt-2 text-gray-600 text-lg">
                Passionate developer crafting innovative solutions with
                expertise in both frontend and backend technologies.
              </p>
            </div>

            {/* <!-- Team Member 3 --> */}
            <div className="text-center">
              <img
                src="/assets/images/qadeer.png"
                alt="Qadeer Ahmad"
                className="w-full h-64 rounded-xl object-cover object-top  shadow-dark shadow-md"
              />
              <h3 className="text-xl font-semibold text-gray-700 mt-4">
                Qadeer Ahmad
              </h3>
              <p className="text-gray-500 text-lg">Co Founder & IT Head</p>
              <p className="mt-2 text-gray-600 text-lg">
                Technology strategist driving digital transformation with
                cutting-edge IT solutions and infrastructure.
              </p>
            </div>

            {/* <!-- Team Member 4 --> */}
            <div className="text-center">
              <img
                src="/assets/images/saul.jpeg"
                alt="Saul Chac"
                className="w-full h-64 rounded-xl object-cover object-top"
              />
              <h3 className="text-xl font-semibold text-gray-700 mt-4">
                Saul Chac
              </h3>
              <p className="text-gray-500 text-lg">
                Business Development Manager
              </p>
              <p className="mt-2 text-gray-600 text-lg">
                Strategic business leader focused on expanding market reach and
                fostering valuable client relationships.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Team;
