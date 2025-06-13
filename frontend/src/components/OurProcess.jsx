import { T } from "../context/LanguageContext";

const OurProcess = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 sm:p-6 md:p-12 text-white">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-red-500 mix-blend-multiply filter blur-xl opacity-70"></div>
          <div className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-sky-500 mix-blend-multiply filter blur-xl opacity-70"></div>
          <div className="absolute top-40 right-40 w-16 h-16 rounded-full bg-purple-500 mix-blend-multiply filter blur-xl opacity-70"></div>
        </div>
        
        {/* Our Process Section */}
        <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-8 md:p-16 mt-6 shadow-xl border border-white/20">
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold pb-6 text-white drop-shadow-lg">
            <T>Our </T><span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600"><T>Process</T></span>
          </h3>
          
          <ul className="mt-10 space-y-8 md:space-y-12">
            <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
              <span className="bg-gradient-to-br from-red-400 to-red-600 text-white rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-2xl sm:text-3xl font-bold flex-shrink-0 shadow-lg mr-6">
                1
              </span>
              <div>
                <h4 className="text-xl md:text-2xl font-bold text-red-400 mb-2"><T>Strategic Planning</T></h4>
                <p className="text-lg sm:text-xl md:text-2xl text-white/90"><T>We design comprehensive data-driven strategies that align perfectly with your business objectives and evolving market needs.</T></p>
              </div>
            </li>
            
            <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
              <span className="bg-gradient-to-br from-red-400 to-red-600 text-white rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-2xl sm:text-3xl font-bold flex-shrink-0 shadow-lg mr-6">
                2
              </span>
              <div>
                <h4 className="text-xl md:text-2xl font-bold text-red-400 mb-2"><T>Solution Development</T></h4>
                <p className="text-lg sm:text-xl md:text-2xl text-white/90"><T>We develop tailored web solutions, innovative mobile apps, and advanced AI integrations that effectively solve real business challenges.</T></p>
              </div>
            </li>
            
            <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
              <span className="bg-gradient-to-br from-red-400 to-red-600 text-white rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-2xl sm:text-3xl font-bold flex-shrink-0 shadow-lg mr-6">
                3
              </span>
              <div>
                <h4 className="text-xl md:text-2xl font-bold text-red-400 mb-2"><T>Analytics & Optimization</T></h4>
                <p className="text-lg sm:text-xl md:text-2xl text-white/90"><T>We implement robust analytics systems that provide actionable insights and foster continuous improvement for your business.</T></p>
              </div>
            </li>
          </ul>
          
          <div className="mt-12 text-center">
            <p className="inline-block bg-gradient-to-r from-red-400 to-red-600 text-white px-8 py-4 rounded-lg text-xl sm:text-2xl font-bold shadow-lg transform transition-transform hover:scale-105"><T>This is how we empower businesses to stand out and thrive in the digital world.</T></p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl p-8 text-left transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <h4 className="text-3xl sm:text-4xl font-bold text-red-400 mb-4"><T>Our Work</T></h4>
            <p className="text-xl sm:text-2xl text-white"><T>Transforming businesses with innovative solutions</T></p>
          </div>
          
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl p-8 text-left transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <h4 className="text-3xl sm:text-4xl font-bold text-red-400 mb-4"><T>Our Team</T></h4>
            <p className="text-xl sm:text-2xl text-white"><T>A diverse team of professionals prepared to bring your vision to life.</T></p>
          </div>
          
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl p-8 text-left transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:col-span-2 md:col-span-1">
            <h4 className="text-3xl sm:text-4xl font-bold text-red-400 mb-4"><T>Our Approach</T></h4>
            <p className="text-xl sm:text-2xl text-white"><T>Data-driven solutions for real results</T></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
