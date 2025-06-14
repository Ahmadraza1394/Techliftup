import { T } from "../context/LanguageContext";

export default function CallToAction() {
  return (
    <section className="bg-sky-500 rounded-3xl max-w-6xl mx-auto px-6 py-16 my-6 mb-10 text-center text-white">
      <h2 className="text-4xl md:text-5xl font-bold">
        <T>Let’s Elevate Your Brand Together</T>
      </h2>
      <p className="text-2xl mt-2">
        <T>Connect with our experts now!</T>
      </p>

      <div className="mt-6">
        <a
          href="https://calendly.com/ahmadraza13941394/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-white text-black text-lg font-medium rounded-full shadow-md hover:bg-gray-200 transition"
        >
          <T>Free consultation</T>
          <span className="ml-2">➝</span>
        </a>
      </div>
    </section>
  );
}
