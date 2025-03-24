export default function CallToAction() {
  return (
    <section className="bg-[#21B6DE] rounded-3xl max-w-6xl mx-auto px-6 py-16 my-6 mb-10 text-center text-white">
      <h2 className="text-4xl md:text-5xl font-bold">
        Let’s Elevate Your Brand Together
      </h2>
      <p className="text-2xl mt-2">Connect with our experts now!</p>

      <div className="mt-6">
        <a
          href="/#contact"
          className="inline-flex items-center px-6 py-3 bg-white text-black text-lg font-medium rounded-full shadow-md hover:bg-gray-200 transition"
        >
          Free consultation
          <span className="ml-2">➝</span>
        </a>
      </div>
    </section>
  );
}
