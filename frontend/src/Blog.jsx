import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaClock,
  FaTag,
  FaUser,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { blogPosts, getAllCategories } from "./data/blogData";
import { T } from "./context/LanguageContext";

const Blog = () => {
  // Removed filteredPosts state as we now use currentPosts directly
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const postsPerPage = 9; // 3x3 grid

  const categories = useMemo(() => ["All", ...getAllCategories()], []);

  // Memoized filtering for better performance
  const allFilteredPosts = useMemo(() => {
    setIsLoading(true);
    let filtered = [...blogPosts].sort(
      (a, b) => new Date(b.publishDate) - new Date(a.publishDate)
    );

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchLower) ||
          post.excerpt.toLowerCase().includes(searchLower) ||
          post.tags.some((tag) => tag.toLowerCase().includes(searchLower))
      );
    }

    setTimeout(() => setIsLoading(false), 100); // Small delay for smooth loading
    return filtered;
  }, [selectedCategory, searchTerm]);

  // Pagination logic
  const totalPages = Math.ceil(allFilteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = allFilteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchTerm]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-500 via-sky-500 to-sky-600 text-white pt-36 pb-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-600 to-sky-400 opacity-30"></div>
          <div className="absolute top-10 left-10 w-80 h-80 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-200 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
        </div>

        <div className="container mx-auto px-6 md:px-16 lg:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              <T>Our Blog</T>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-sky-100 mb-8">
              <T>
                Insights, tips, and strategies to help your business grow and
                succeed in the digital world
              </T>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white shadow-sm">
        <div className="container mx-auto px-6 md:px-16 lg:px-20">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="w-full md:w-1/2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="w-full md:w-auto">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-sky-500 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-16 lg:px-20">
          {/* Loading State */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse"
                >
                  <div className="h-48 bg-gray-300"></div>
                  <div className="p-6">
                    <div className="flex gap-4 mb-3">
                      <div className="h-3 bg-gray-300 rounded w-20"></div>
                      <div className="h-3 bg-gray-300 rounded w-16"></div>
                    </div>
                    <div className="h-6 bg-gray-300 rounded mb-3"></div>
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded mb-4 w-3/4"></div>
                    <div className="h-3 bg-gray-300 rounded w-24"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : allFilteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <svg
                  className="w-16 h-16 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No articles found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          ) : (
            <>
              {/* Results Info */}
              <div className="mb-8 text-center">
                <p className="text-gray-600">
                  Showing {startIndex + 1}-
                  {Math.min(startIndex + postsPerPage, allFilteredPosts.length)}{" "}
                  of {allFilteredPosts.length} articles
                  {selectedCategory !== "All" && ` in ${selectedCategory}`}
                  {searchTerm && ` matching "${searchTerm}"`}
                </p>
              </div>

              {/* Blog Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    {/* Featured Badge */}
                    {post.featured && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                          Featured
                        </span>
                      </div>
                    )}

                    {/* Blog Image */}
                    <div className="h-48 relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          // Fallback to gradient if image fails to load
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      {/* Fallback gradient (hidden by default) */}
                      <div
                        className="absolute inset-0 bg-gradient-to-br from-sky-400 to-sky-600 items-center justify-center"
                        style={{ display: "none" }}
                      >
                        <div className="text-white text-center">
                          <FaTag className="w-8 h-8 mx-auto mb-2 opacity-70" />
                          <p className="text-sm font-medium opacity-90">
                            {post.category}
                          </p>
                        </div>
                      </div>
                      {/* Category overlay */}
                      {/* <div className="absolute top-3 right-3">
                        <span className="bg-black bg-opacity-70 text-white px-2 py-1 rounded-md text-xs font-medium">
                          {post.category}
                        </span>
                      </div> */}
                    </div>

                    <div className="p-6">
                      {/* Meta Information */}
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <FaCalendarAlt className="w-3 h-3" />
                          <span>{formatDate(post.publishDate)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaClock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-bold text-sky-600 mb-3 line-clamp-2 transition-colors">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <FaUser className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Read More Button */}
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-medium transition-colors group"
                      >
                        <T>Read More</T>
                        <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="mt-12 flex justify-center items-center gap-4">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      currentPage === 1
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white text-gray-700 hover:bg-sky-50 hover:text-sky-600 shadow-md hover:shadow-lg"
                    }`}
                  >
                    <FaChevronLeft className="w-3 h-3" />
                    <T>Previous</T>
                  </button>

                  <div className="flex items-center gap-2">
                    {[...Array(totalPages)].map((_, index) => {
                      const page = index + 1;
                      const isCurrentPage = page === currentPage;
                      const showPage =
                        page === 1 ||
                        page === totalPages ||
                        (page >= currentPage - 1 && page <= currentPage + 1);

                      if (!showPage) {
                        if (
                          page === currentPage - 2 ||
                          page === currentPage + 2
                        ) {
                          return (
                            <span key={page} className="px-2 text-gray-400">
                              ...
                            </span>
                          );
                        }
                        return null;
                      }

                      return (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`w-10 h-10 rounded-lg transition-all ${
                            isCurrentPage
                              ? "bg-sky-500 text-white shadow-lg"
                              : "bg-white text-gray-700 hover:bg-sky-50 hover:text-sky-600 shadow-md hover:shadow-lg"
                          }`}
                        >
                          {page}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      currentPage === totalPages
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white text-gray-700 hover:bg-sky-50 hover:text-sky-600 shadow-md hover:shadow-lg"
                    }`}
                  >
                    <T>Next</T>
                    <FaChevronRight className="w-3 h-3" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-sky-500 to-sky-600 text-white">
        <div className="container mx-auto px-6 md:px-16 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <T>Ready to Transform Your Business?</T>
            </h2>
            <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
              <T>
                Get expert insights and strategies delivered to your inbox. Join
                our community of successful business owners.
              </T>
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <T>Get Started Today</T>
              <FaArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
