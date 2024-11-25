import { Link, useParams } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

const caseData = {
  "cabo-shark-dive": {
    title: "Cabo Shark Dive ",
    image: "/assets/images/caboshark2.png", // Replace with the actual path
    overview:
      "Cabo Shark Dive, a renowned shark diving company in Los Cabos, required a responsive, user-friendly website to showcase its world-class shark diving and snorkeling tours. The goal was to provide visitors with a seamless experience for learning about tours, booking trips, and contacting the company.",
    objectives: [
      "Enhance User Experience: Create an intuitive design that highlights key services and ensures easy navigation.",
      "Streamline Bookings: Simplify the booking process with clear calls to action and accessible information.",
      "Mobile Optimization: Ensure responsiveness across all devices for a smooth browsing experience.",
      "Increase Engagement: Use visual elements like videos and high-quality images to captivate visitors.",
    ],
    challenges: [
      "Designing a visually engaging website that balances aesthetic appeal and functionality.",
      "Ensuring consistent performance across various devices and screen sizes.",
      "Managing dynamic content, such as videos and booking forms, while maintaining fast load times.",
    ],
    solutions: [
      "Responsive Design: Built a fully responsive layout that adapts seamlessly to desktop, tablet, and mobile devices.",
      "Interactive Elements: Integrated autoplaying, looped videos and hover effects to keep users engaged.",
      "Simplified Forms: Added a streamlined contact form using EmailJS, complete with dynamic placeholders and alerts for form submission feedback.",
      "Clear CTAs: Placed prominent 'Book Now' buttons and optimized their placement for better conversions.",
      "Visual Enhancements: Slightly darkened images and implemented hover effects to improve aesthetics and highlight content.",
    ],
    results: [
      "Improved User Engagement: The modern design and responsive features significantly improved time spent on the site.",
      "Higher Conversion Rates: Easy-to-navigate booking options led to increased tour reservations.",
      "Positive Feedback: Customers praised the website for its professional design and functionality.",
      "Enhanced Mobile Experience: Mobile optimization ensured accessibility for a broader audience, including travelers on the go.",
    ],
    conclusion:
      "The revamped Cabo Shark Dive website successfully combined stunning visuals with usability, reflecting the company’s expertise and commitment to offering exceptional diving experiences. The improved design not only enhanced customer trust but also boosted bookings, making it a valuable asset for the business.",
    website: "https://cabosharkdive.com",
  },
  "cruise-car-fly": {
    title: "Cruise Car Fly  ",
    image: "/assets/images/cruisecarfly2.png", // Corrected path
    overview:
      "CruiseCarFly is an affiliate landing page for deals on cruises, car rentals, and flights. The project aimed to increase Google visibility, enhance user experience, and drive conversions.",
    problem:
      "The page lacked SEO optimization, resulting in low visibility, poor traffic, and reduced affiliate revenue. Additionally, it had slow loading times and a non-responsive design.",
    objectives: [
      "Improve organic traffic, enhance page performance, and boost affiliate revenue through SEO and user-focused enhancements.",
    ],
    approach: [
      "Keyword Research: Targeted relevant long-tail keywords like 'affordable cruises' and 'cheap car rentals.'",
      "On-Page SEO: Optimized titles, meta descriptions, headers, and images.",
      "Content Strategy: Created engaging content with clear CTAs.",
      "Technical SEO: Improved site speed, ensured mobile responsiveness, and secured HTTPS.",
      "User Experience: Simplified navigation, improved layout, and added a friendly 'No Packages Available' message.",
      "Analytics: Set up Google Analytics and Search Console for performance tracking.",
    ],
    results: [
      "Organic Traffic: Increased by 40% within three months.",
      "Page Speed: Improved by 25%, reducing bounce rates.",
      "Engagement: Click-through rates on affiliate links grew by 30%.",
      "Visibility: Positioned CruiseCarFly as a competitive platform in the travel niche.",
    ],
    conclusion:
      "By implementing a comprehensive SEO strategy and user-focused improvements, CruiseCarFly significantly boosted traffic, engagement, and affiliate revenue.",
    website: "https://cruisecarfly.com",
  },
  "brand-wave-digital": {
    title: "Brand Wave Digital",
    image: "/assets/images/brandwavedigital2.png", // Corrected path
    overview:
      "Brand Wave Digital, based in the UAE, specializes in lead generation through targeted social media advertising. The agency guarantees high-quality, quote-ready leads within 30 days, allowing businesses to focus on operations while ensuring growth.",
    objectives: [
      "Help businesses generate leads through digital advertising.",
      "Provide a risk-free solution with guaranteed results.",
      "Offer industry-specific expertise to maximize lead quality.",
    ],
    challenges: [
      "Businesses hesitant to invest in digital advertising.",
      "Difficulty standing out in competitive markets.",
      "Time constraints for content creation and campaign management.",
    ],
    approach: [
      "Content Collection: Collaborating with clients to create engaging visuals that attract attention.",
      "Ad Launch: Strategically targeting audiences on major social platforms to maximize reach.",
      "Lead Generation: Filtering inquiries to deliver only qualified, quote-ready leads.",
    ],
    results: [
      "Guaranteed Leads: Minimum of five quote-ready leads in 30 days or a refund.",
      "Qualified Inquiries: Eliminates non-serious prospects.",
      "Effortless Growth: Clients save time and achieve measurable outcomes.",
    ],
    conclusion:
      "With a risk-free guarantee and industry-specific expertise, Brand Wave Digital empowers businesses to achieve efficient, scalable growth through effective lead generation.",
    website: "https://digitalmarkeeting.netlify.app/",
  },
};
const CaseDetail = () => {
  const { caseId } = useParams();
  const caseStudy = caseData[caseId];

  if (!caseStudy) {
    return (
      <div className="text-center py-16">
        <h1 className="text-6xl font-bold text-red-600">Case Not Found</h1>
        <p className="text-gray-800 mt-4 text-xl">
          Sorry, the case study you&apos;re looking for does not exist.
        </p>
        <Link
          to="/"
          className="mt-4 inline-block text-sky-600 hover:underline font-medium text-xl"
        >
          Return to Home
        </Link>
      </div>
    );
  }

  const {
    title,
    image,
    overview,
    objectives = [],
    challenges = [],
    approach = [],
    solutions = [],
    results = [],
    conclusion,
    website,
  } = caseStudy;

  return (
    <>
      <Header />
      <section className="px-8 md:px-16 py-28 bg-gray-50 text-gray-800">
        <h1 className="text-6xl font-bold text-red-600 mb-8">{title}</h1>
        <img
          src={image}
          alt={title}
          className="w-2/4 h-auto rounded-lg mb-10 shadow-md"
        />
        <div className="mb-10">
          <h2 className="text-4xl font-semibold text-sky-500 mb-6">Overview</h2>
          <p className="text-gray-800 leading-relaxed text-xl">{overview}</p>
        </div>
        <div className="mb-10">
          <h2 className="text-4xl font-semibold text-sky-500 mb-6">
            Objectives
          </h2>
          <ul className="list-disc list-inside space-y-3">
            {objectives.map((objective, index) => (
              <li key={index} className="text-xl">
                {objective}
              </li>
            ))}
          </ul>
        </div>
        {challenges.length > 0 && (
          <div className="mb-10">
            <h2 className="text-4xl font-semibold text-sky-500 mb-6">
              Challenges
            </h2>
            <ul className="list-disc list-inside space-y-3">
              {challenges.map((challenge, index) => (
                <li key={index} className="text-xl">
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        )}
        {approach.length > 0 && (
          <div className="mb-10">
            <h2 className="text-4xl font-semibold text-sky-500 mb-6">
              Approach
            </h2>
            <ul className="list-disc list-inside space-y-3">
              {approach.map((approachItem, index) => (
                <li key={index} className="text-xl">
                  {approachItem}
                </li>
              ))}
            </ul>
          </div>
        )}
        {solutions.length > 0 && (
          <div className="mb-10">
            <h2 className="text-4xl font-semibold text-sky-500 mb-6">
              Solutions
            </h2>
            <ul className="list-disc list-inside space-y-3">
              {solutions.map((solution, index) => (
                <li key={index} className="text-xl">
                  {solution}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="mb-10">
          <h2 className="text-4xl font-semibold text-sky-500 mb-6">Results</h2>
          <ul className="list-disc list-inside space-y-3">
            {results.map((result, index) => (
              <li key={index} className="text-xl">
                {result}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-10">
          <h2 className="text-4xl font-semibold text-sky-500 mb-6">
            Conclusion
          </h2>
          <p className="text-xl">{conclusion}</p>
        </div>
        {website && (
          <div className="mt-12 text-center">
            <h3 className="text-3xl font-bold text-gray-700 mb-4">
              Visit the Website
            </h3>
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-sky-500 text-white rounded-md shadow-md hover:bg-sky-700 transition inline-block"
            >
              Explore {title.split(":")[0]?.trim()}
            </a>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default CaseDetail;
