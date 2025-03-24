const OurProcess = () => {
  return (
    <div className="bg-gray-100 p-4 sm:p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        {/* Meet TechLiftUp Section */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* <span className="text-3xl sm:text-4xl">👋</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Meet TechLiftUp
          </h2> */}
        </div>

        {/* Our Process Section */}
        <div className="bg-[#21B6DE] rounded-xl p-6 sm:p-8 md:p-20 mt-6 sm:mt-8 shadow-md h-auto">
          <h3 className="text-2xl sm:text-3xl md:text-6xl font-bold pb-6 text-white">
            Our Process
          </h3>
          {/* <p className="text-base sm:text-lg md:text-4xl text-white/90 mt-3 max-w-3xl">
            At TechSolutions, we help businesses transform through innovative
            web, app, and AI solutions.
          </p> */}
          <ul className="mt-6 sm:mt-8 space-y-4 sm:space-y-5 md:space-y-6">
            <li className="flex items-start">
              <span className="bg-white text-[#21B6DE] rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-2xl sm:text-3xl font-bold flex-shrink-0 mt-3 sm:mt-1 shadow-md mr-4">
                1
              </span>
              <p className="text-lg sm:text-xl md:text-3xl  text-white/90 pt-1">
                We design comprehensive data-driven strategies that align
                perfectly with your business objectives and evolving market
                needs.
              </p>
            </li>
            <li className="flex items-start">
              <span className="bg-white text-[#21B6DE] rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-2xl sm:text-3xl font-bold flex-shrink-0 mt-1 sm:mt-1 shadow-md mr-4">
                2
              </span>
              <p className="text-lg sm:text-xl md:text-3xl text-white/90 pt-1">
                We develop tailored web solutions, innovative mobile apps, and
                advanced AI integrations that effectively solve real business
                challenges.
              </p>
            </li>
            <li className="flex items-start">
              <span className="bg-white text-[#21B6DE] rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-2xl sm:text-3xl font-bold flex-shrink-0 mt-1 sm:mt-1 shadow-md mr-4">
                3
              </span>
              <p className="text-lg sm:text-xl md:text-3xl text-white/90 pt-1">
                We implement robust analytics systems that provide actionable
                insights and foster continuous improvement for your business.
              </p>
            </li>
          </ul>
          <p className="mt-10 sm:mt-8 text-lg sm:text-xl md:text-3xl  font-semibold text-gray-800 bg-gray-50 p-4 rounded-lg inline-block">
            This is how we empower businesses to stand out and thrive in the
            digital world.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6">
          <div className="bg-[#21B6DE] text-white rounded-lg p-4 sm:p-6 text-center h-auto">
            <h4 className="text-3xl sm:text-4xl md:text-5xl text-justify lg:text-5xl font-extrabold font-mono">
              Our Work
            </h4>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono text-left  mt-5">
              Transforming businesses with innovative solutions
            </p>
          </div>
          <div className="bg-[#21B6DE] text-white rounded-lg p-4 sm:p-6 text-center h-auto">
            <h4 className="text-3xl text-justify sm:text-4xl md:text-5xl lg:text-5xl font-extrabold font-mono">
              Our Team
            </h4>
            <p className="mt-2 text-left text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono">
              A diverse team of professionals prepared to bring your vision to
              life.
            </p>
          </div>
          <div className="bg-[#21B6DE] text-white rounded-lg p-4 sm:p-6 text-center h-auto sm:col-span-2 md:col-span-1">
            <h4
              style={{ fontSize: "2.5rem" }}
              className="text-3xl text-justify sm:text-4xl md:text-3xl lg:text-4xl font-extrabold font-mono"
            >
              Our Approach
            </h4>
            <p className="mt-5 text-left text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono">
              Data-driven solutions for real results
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
