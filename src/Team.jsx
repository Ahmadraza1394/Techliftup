import Header from "./components/Header";

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
          <p className="text-2xl text-justify max-w-3xl font-semibold text-gray-700 leading-relaxed">
            At TechLiftUp, we combine innovation and expertise to deliver
            cutting-edge solutions in software development, app creation,
            digital marketing, and MEP design. With over 5+ years of experience,
            we empower businesses with sustainable and efficient outcomes,
            tailored to their unique needs.
          </p>

          <button className="mt-6 px-6 py-3 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition">
            Contact Us
          </button>
        </div>

        <hr className="my-10  " />

        {/* Team Members Section */}
        <div className="text-center">
          <h4 className="text-center font-serif ">Our Team</h4>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
            People Behind Success
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="team-card bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <img
                src="/assets/images/ahmad.jpg"
                alt="Shehzad Nazir"
                className="w-full h-72 "
              />
              <div className="p-4">
                <h4 className="text-lg font-bold text-gray-800">
                  Muhammad Sabir
                </h4>
                <p className="text-gray-600 text-sm">CTO & Team Lead</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="team-card bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <img
                src="/assets/images/ahmad.jpg"
                alt="Muhammad Dawood"
                className="w-full h-72 "
              />
              <div className="p-4">
                <h4 className="text-lg font-bold text-gray-800">Ahmad Raza</h4>
                <p className="text-gray-600 text-sm">CEO & Co-Founder</p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="team-card bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <img
                src="/assets/images/ahmad.jpg"
                alt="Qadeer Ahmad"
                className="w-full h-72 "
              />
              <div className="p-4">
                <h4 className="text-lg font-bold text-gray-800">
                  Qadeer Ahmad
                </h4>
                <p className="text-gray-600 text-sm">COO & HR</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
