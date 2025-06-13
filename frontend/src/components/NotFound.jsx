import { Link } from "react-router-dom";
import { T } from "../context/LanguageContext";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
        <T>Oops, Page Not Found!</T>
      </h1>
      <p className="text-gray-600 text-lg md:text-xl mb-8">
        <T>We couldn't find the page you're looking for. It might have been moved or deleted.</T>
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md"
      >
        <T>Go Back Home</T>
      </Link>
    </div>
  );
};

export default NotFound;
