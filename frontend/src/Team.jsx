import Header from "./components/Header";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import CallToAction from "./components/CallToAction";
import WhatsappButton from "./components/WhatsappButton";
import { T } from "./context/LanguageContext";

const Team = () => {
  return (
    <>
      <Header />
      <section className="team-section bg-gray-50 px-6 md:px-12 py-16 pt-28">
        {/* Team Header */}
        <div className=" mb-12">
          <h2 className="text-4xl md:text-5xl font-bold  mb-4 text-red-500">
            <T>Team Members</T>
          </h2>
          <p className="text-2xl mb-8 text-justify max-w-3xl font-semibold text-gray-700 leading-relaxed">
            <T>At TechLiftUp, we combine innovation and expertise to deliver cutting-edge solutions in software development, app creation, digital marketing, and MEP design. With over 15+ years of experience, we empower businesses with sustainable and efficient outcomes, tailored to their unique needs.</T>
          </p>

          <Link
            to="/#contact"
            className="mt-6 px-6 py-3 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition"
          >
            <T>Contact Us</T>
          </Link>
        </div>

        <hr className="my-10  " />

        {/* Team Members Section */}
        <div className="text-center">
          <h4 className="text-center font-serif ">
            <T>Our Team</T>
          </h4>
          <h3 className="text-2xl md:text-3xl font-semibold text-red-500 mb-8 my-8">
            <T>Meet the Experts Behind TechLiftUp</T>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* <!-- Team Member 1 --> */}
            <div className="text-center">
              <div className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden">
                <img
                  src="/assets/images/sabir.jpeg"
                  alt="Muhammad Sabir"
                  className="w-full h-full object-cover object-top shadow-black shadow-sm"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mt-4">
                Muhammad Sabir
              </h3>
              <p className="text-gray-500 text-lg">
                <T>Building Services Engineering Design Consultant</T>
              </p>
              {/* <p className="mt-2 text-gray-600 text-lg">
                Expert in MEP systems design with extensive experience in
                sustainable building solutions and energy optimization.
              </p> */}
            </div>

            {/* <!-- Team Member 2 --> */}
            <div className="text-center">
              <div className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden">
                <img
                  src="/assets/images/ahmadimg.png"
                  alt="Ahmad Raza"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mt-4">
                Ahmad Raza
              </h3>
              <p className="text-gray-500 text-lg">
                <T>CEO & Full Stack Developer</T>
              </p>
              {/* <p className="mt-2 text-gray-600 text-lg">
                Passionate developer crafting innovative solutions with
                expertise in both frontend and backend technologies.
              </p> */}
            </div>

            {/* <!-- Team Member 3 --> */}
            <div className="text-center">
              <div className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden">
                <img
                  src="/assets/images/qadeer.png"
                  alt="Qadeer Ahmad"
                  className="w-full h-full object-cover object-top shadow-dark shadow-md"
                />  
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mt-4">
                Qadeer Ahmad
              </h3>
              <p className="text-gray-500 text-lg">
                <T>Co Founder & IT Head</T>
              </p>
              {/* <p className="mt-2 text-gray-600 text-lg">
                Technology strategist driving digital transformation with
                cutting-edge IT solutions and infrastructure.
              </p> */}
            </div>

            {/* <!-- Team Member 4 --> */}
            <div className="text-center">
              <div className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden">
                <img
                  src="/assets/images/saul.jpeg"
                  alt="Saul Chac"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mt-4">
                Saul Chac
              </h3>
              <p className="text-gray-500 text-lg">
                <T>Business Development Manager</T>
              </p>
              {/* <p className="mt-2 text-gray-600 text-lg">
                Strategic business leader focused on expanding market reach and
                fostering valuable client relationships.
              </p> */}
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
      <WhatsappButton />
      <Footer />
    </>
  );
};

export default Team;
