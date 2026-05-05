import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FaCalendarAlt,
  FaClock,
  FaTag,
  FaUser,
  FaArrowLeft,
  FaArrowRight,
  FaShare,
  FaImage,
} from "react-icons/fa";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { getPostBySlug, blogPosts } from "./data/blogData";
import { T } from "./context/LanguageContext";
import { useEffect, useState } from "react";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    const foundPost = getPostBySlug(slug);
    if (!foundPost) {
      navigate("/blog");
      return;
    }

    setPost(foundPost);

    // Get related posts (same category, excluding current post)
    const related = blogPosts
      .filter((p) => p.category === foundPost.category && p.id !== foundPost.id)
      .slice(0, 3);
    setRelatedPosts(related);
  }, [slug, navigate]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>
          {post.title} | TechLiftUp Blog - Expert {post.category} for USA
          Businesses
        </title>
        <meta name="description" content={post.excerpt} />
        <meta
          name="keywords"
          content={`${post.tags.join(", ")}, USA, digital marketing, business growth, TechLiftUp`}
        />
        <meta name="author" content={post.author} />
        <meta property="article:published_time" content={post.publishDate} />
        <meta property="article:author" content={post.author} />
        <meta property="article:section" content={post.category} />
        {post.tags.map((tag) => (
          <meta property="article:tag" content={tag} key={tag} />
        ))}
        <meta property="og:title" content={`${post.title} | TechLiftUp`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://www.techliftup.com/blog/${post.slug}`}
        />
        <meta property="og:image" content={post.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image} />
        <link
          rel="canonical"
          href={`https://www.techliftup.com/blog/${post.slug}`}
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: post.image,
            author: {
              "@type": "Organization",
              name: post.author,
            },
            publisher: {
              "@type": "Organization",
              name: "TechLiftUp",
              logo: {
                "@type": "ImageObject",
                url: "https://www.techliftup.com/assets/images/logo.png",
              },
            },
            datePublished: post.publishDate,
            dateModified: post.publishDate,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://www.techliftup.com/blog/${post.slug}`,
            },
            keywords: post.tags.join(", "),
            articleSection: post.category,
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-sky-500 via-sky-500 to-sky-600 text-white pt-32 pb-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-600 to-sky-400 opacity-30"></div>
            <div className="absolute top-10 left-10 w-80 h-80 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-200 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
          </div>

          <div className="container mx-auto px-6 md:px-16 lg:px-24 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              {/* Back to Blog */}
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sky-100 hover:text-white mb-8 transition-colors text-lg"
              >
                <FaArrowLeft className="w-4 h-4" />
                <T>Back to Blog</T>
              </Link>

              {/* Featured Badge */}
              {post.featured && (
                <div className="mb-6">
                  <span className="bg-red-500 text-white px-5 py-2 rounded-full text-base font-medium">
                    Featured Article
                  </span>
                </div>
              )}

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight">
                {post.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-8 text-sky-100 mb-8 text-lg">
                <div className="flex items-center gap-2">
                  <FaUser className="w-5 h-5" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="w-5 h-5" />
                  <span>{formatDate(post.publishDate)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="w-5 h-5" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaTag className="w-5 h-5" />
                  <span>{post.category}</span>
                </div>
              </div>

              {/* Excerpt */}
              <p className="text-xl md:text-2xl text-sky-100 leading-relaxed">
                {post.excerpt}
              </p>
            </motion.div>
          </div>
        </section>
        {/* Article Content */}
        <section className="py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-12 lg:px-12">
            <div className="max-w-8xl w-full mx-auto">
              <div className="bg-white  p-8 md:p-12 lg:p-12">
                {/* Share Button */}
                <div className="flex justify-end mb-8">
                  <button
                    onClick={handleShare}
                    aria-label="Share this article"
                    className="flex items-center gap-3 text-gray-600 hover:text-sky-600 transition-colors px-6 py-3 rounded-lg hover:bg-gray-50 border border-gray-200 text-lg"
                  >
                    <FaShare className="w-5 h-5" />
                    <span className="font-medium">Share</span>
                  </button>
                </div>

                {/* Blog Content */}
                <div
                  className="prose prose-xl md:prose-xl sm:prose-lg max-w-none text-justify"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                  style={{
                    "--tw-prose-body": "#374151",
                    "--tw-prose-headings": "#111827",
                    "--tw-prose-links": "#0369a1",
                    "--tw-prose-bold": "#111827",
                    "--tw-prose-counters": "#4b5563",
                    "--tw-prose-bullets": "#9ca3af",
                    "--tw-prose-hr": "#e5e7eb",
                    "--tw-prose-quotes": "#111827",
                    "--tw-prose-quote-borders": "#d1d5db",
                    "--tw-prose-captions": "#6b7280",
                    "--tw-prose-code": "#111827",
                    "--tw-prose-pre-code": "#e5e7eb",
                    "--tw-prose-pre-bg": "#1f2937",
                    "--tw-prose-th-borders": "#d1d5db",
                    "--tw-prose-td-borders": "#e5e7eb",
                    lineHeight: "1.8",
                    letterSpacing: "0.015em",
                    fontSize: "clamp(1.125rem, 4vw, 1.575rem)",
                  }}
                />

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Topics:
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-5 py-2.5 bg-gray-100 text-gray-700 text-base rounded-lg hover:bg-sky-100 hover:text-sky-700 transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 md:px-16 lg:px-24">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center">
                  <T>Related Articles</T>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <motion.div
                      key={relatedPost.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                    >
                      <Link to={`/blog/${relatedPost.slug}`} className="block">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={relatedPost.image}
                            alt={`${relatedPost.title} - ${relatedPost.category} tips for USA businesses | TechLiftUp`}
                            title={`${relatedPost.title} - Expert guide`}
                            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                            {relatedPost.title}
                          </h3>
                          <p className="text-gray-600 mb-4 line-clamp-2">
                            {relatedPost.excerpt}
                          </p>
                          <div className="flex justify-between items-center text-sm text-gray-500">
                            <span className="flex items-center gap-2">
                              <FaCalendarAlt className="w-4 h-4" />
                              {formatDate(relatedPost.publishDate)}
                            </span>
                            <span className="flex items-center gap-1 text-sky-600 font-medium">
                              Read more{" "}
                              <FaArrowRight className="w-3 h-3 ml-1" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;
