import { Link, useParams } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CallToAction from "./components/CallToAction";

import WhatsappButton from "./components/WhatsappButton";
import { T } from "./context/LanguageContext";

const caseData = {
  "cabo-shark-dive": {
    title: "Cabo Shark Dive ",
    image: "/assets/images/cabosharkdive.png", // Replace with the actual path
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
    image: "/assets/images/cruisecarfly.png", // Corrected path
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
    image: "/assets/images/brandwavedigital.png", // Corrected path
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
  visteai: {
    title: "Visteai AI Assistant",
    image: "/assets/images/visteai.png",
    overview:
      "Visteai is a results-driven digital marketing agency that helps businesses scale through data-driven advertising strategies. By leveraging precision targeting and AI-powered analytics, they ensure high-quality leads and measurable ROI for clients across various industries.",
    objectives: [
      "Drive consistent, high-intent leads for businesses.",
      "Implement data-backed marketing strategies for scalable growth.",
      "Optimize ad performance through AI-driven analytics.",
    ],
    challenges: [
      "Businesses struggling with ineffective lead generation strategies.",
      "Difficulty optimizing ad spend for maximum returns.",
      "Lack of automation in lead qualification and follow-ups.",
    ],
    approach: [
      "Market Research: Conducting in-depth analysis to identify high-converting audience segments.",
      "Strategic Ad Placement: Utilizing AI-driven bidding strategies to optimize ad spend.",
      "Automated Lead Nurturing: Implementing chatbots and CRM integrations to engage leads instantly.",
    ],
    results: [
      "Increased Lead Quality: Higher conversion rates with pre-qualified prospects.",
      "Optimized Ad Spend: Reduced cost per acquisition through targeted campaigns.",
      "Scalable Growth: Businesses achieved consistent lead flow without manual effort.",
    ],
    conclusion:
      "By combining AI-driven insights with strategic marketing, Visteai empowers businesses to attract high-quality leads, optimize ad budgets, and scale efficiently in competitive markets.",
    website: "https://visteai.netlify.app/",
  },
  "tuatara-tourist": {
    title: "Tuatara Tourist",
    image: "/assets/images/tuataraTourist.png",
    overview: "Tuatara Tourist offers comprehensive tours and activities in Tuatara, providing visitors with authentic local experiences and adventures.",
    objectives: [
      "Create an intuitive platform for visitors to discover and book local tours",
      "Showcase the unique natural attractions and cultural experiences of Tuatara",
      "Implement easy-to-use booking functionality for various tour packages",
      "Optimize the site for international tourists with multilingual support"
    ],
    challenges: [
      "Presenting diverse tour options in an organized, user-friendly manner",
      "Creating compelling content that accurately represents the local experience",
      "Ensuring mobile responsiveness for travelers on the go"
    ],
    solutions: [
      "Developed a category-based tour exploration system",
      "Integrated high-quality imagery and detailed tour descriptions",
      "Implemented a streamlined booking process with instant confirmation",
      "Created a responsive design optimized for all devices"
    ],
    results: [
      "Increased online bookings by 45% within the first quarter",
      "Improved user engagement with average session duration up by 3 minutes",
      "Enhanced visibility in search results for relevant tourism keywords",
      "Positive customer feedback highlighting ease of use and information clarity"
    ],
    conclusion: "The Tuatara Tourist website successfully bridges the gap between travelers and local experiences, providing an effective platform that benefits both tourists and local tour operators.",
    website: "https://tuataratours.co.nz/"
  },
  "sonnetoai": {
    title: "Sonneto AI",
    image: "/assets/images/sonnetoai.png",
    overview: "Sonneto AI is an innovative music streaming platform that leverages artificial intelligence to deliver personalized music recommendations based on user preferences, listening habits, and emotional states.",
    objectives: [
      "Develop an intelligent recommendation system that evolves with user listening patterns",
      "Create an intuitive interface for discovering new music across genres",
      "Implement mood-based playlists that adapt to different contexts",
      "Build a platform that supports independent artists alongside mainstream music"
    ],
    challenges: [
      "Processing and analyzing large volumes of listening data efficiently",
      "Creating algorithms that accurately predict musical preferences",
      "Balancing familiar recommendations with discovery of new artists",
      "Ensuring seamless streaming experience across various network conditions"
    ],
    approach: [
      "Implemented machine learning algorithms that adapt to user feedback and behavior",
      "Designed a clean, responsive interface focused on music discovery",
      "Developed advanced audio fingerprinting for precise recommendations",
      "Created collaborative filtering systems that connect users with similar tastes"
    ],
    results: [
      "User retention rate 30% higher than industry average",
      "Average listening time increased by 45 minutes per session",
      "Successfully predicted user preferences with 87% accuracy",
      "Featured in tech publications for innovation in AI music recommendations"
    ],
    conclusion: "Sonneto AI has successfully transformed how users discover and enjoy music through its intelligent recommendation system, creating a personalized experience that keeps listeners engaged and delighted.",
    website: "https://sonnetoai.netlify.app/"
  },
  "intercity": {
    title: "Inter City",
    image: "/assets/images/interCity.png",
    overview: "Inter City provides comprehensive bus booking services connecting major cities and rural areas, offering travelers a convenient and affordable transportation solution.",
    objectives: [
      "Streamline the online booking process for intercity bus travel",
      "Implement real-time seat availability and route information",
      "Create a user-friendly mobile experience for on-the-go bookings",
      "Develop a secure payment system with multiple options"
    ],
    challenges: [
      "Integrating with multiple bus operators' scheduling systems",
      "Handling peak booking periods without performance degradation",
      "Providing accurate ETAs considering variable traffic conditions",
      "Supporting bookings in areas with limited internet connectivity"
    ],
    approach: [
      "Built a centralized booking platform connected to major bus operators",
      "Implemented a responsive design prioritizing mobile users",
      "Developed an offline booking capability for areas with poor connectivity",
      "Created an intuitive seat selection interface with visual representation"
    ],
    results: [
      "Reduced booking time by 65% compared to traditional methods",
      "Increased online bookings by 120% within six months",
      "Achieved 99.7% uptime even during peak holiday seasons",
      "Expanded service coverage to 85% of national bus routes"
    ],
    conclusion: "Inter City has revolutionized bus travel booking by providing a reliable, user-friendly platform that connects travelers to their destinations efficiently while offering bus operators a valuable digital sales channel.",
    website: "https://www.intercity.co.nz/"
  },
  "passionfarm": {
    title: "Passion Farm",
    image: "/assets/images/passionfarm.png",
    overview: "Passion Farm is an ecommerce platform specializing in organic and sustainably grown products, connecting health-conscious consumers directly with ethical farmers and producers.",
    objectives: [
      "Create a visually appealing showcase for organic products",
      "Implement a secure and efficient ordering system",
      "Educate consumers about sustainable farming practices",
      "Build trust through transparency in sourcing and production"
    ],
    challenges: [
      "Managing inventory for seasonal and perishable products",
      "Ensuring product freshness through efficient logistics",
      "Communicating the value proposition of premium organic products",
      "Balancing aesthetics with fast page loading times"
    ],
    solutions: [
      "Developed a dynamic inventory management system for seasonal products",
      "Implemented farm-to-table tracking for complete transparency",
      "Created educational content about organic farming practices",
      "Designed an optimized checkout process with multiple delivery options"
    ],
    results: [
      "Achieved 40% growth in monthly recurring customers",
      "Reduced cart abandonment rate by 25%",
      "Increased average order value by 35%",
      "Expanded product range from 50 to 200+ organic items"
    ],
    conclusion: "Passion Farm successfully bridges the gap between organic producers and conscious consumers, creating a sustainable marketplace that benefits farmers, customers, and the environment alike.",
    website: "https://passionfarms.netlify.app/"
  },
  "cleanwater": {
    title: "Clean Water",
    image: "/assets/images/cleanwater.png",
    overview: "Clean Water provides comprehensive water treatment and purification services for residential, commercial, and industrial clients, ensuring access to safe, clean water through innovative filtration technologies.",
    objectives: [
      "Showcase various water treatment solutions for different needs",
      "Educate visitors about water quality issues and solutions",
      "Generate qualified leads for consultation services",
      "Build credibility through case studies and certifications"
    ],
    challenges: [
      "Explaining complex water treatment processes in accessible terms",
      "Differentiating services in a competitive market",
      "Addressing diverse customer needs from residential to industrial",
      "Converting technical information into compelling marketing content"
    ],
    approach: [
      "Created interactive tools to help users identify their water issues",
      "Developed visual explainers for complex purification processes",
      "Implemented a streamlined quote request system with quick response time",
      "Built a resources section with educational content about water quality"
    ],
    results: [
      "Increased consultation requests by 75% year-over-year",
      "Reduced customer acquisition cost by 30%",
      "Expanded service area to 5 new regions",
      "Achieved 65% conversion rate from site visits to information requests"
    ],
    conclusion: "Clean Water's digital presence effectively communicates their expertise in water treatment solutions, positioning them as industry leaders while educating consumers about the importance of water quality and available solutions.",
    website: "https://cleanwaterweb.netlify.app"
  },
  "electrosanto": {
    title: "Electro Santos",
    image: "/assets/images/electrosanto.png",
    overview: "Electro Santos provides premium electrical products and professional installation services for residential and commercial clients, focusing on energy efficiency, smart home solutions, and sustainable electrical systems.",
    objectives: [
      "Showcase comprehensive electrical product catalog with detailed specifications",
      "Highlight professional installation and maintenance services",
      "Implement easy service booking and consultation scheduling",
      "Educate customers about energy-efficient electrical solutions"
    ],
    challenges: [
      "Presenting technical products in an accessible way for non-experts",
      "Balancing product sales with service offerings",
      "Creating trust for high-value electrical installations",
      "Managing seasonal demand fluctuations"
    ],
    solutions: [
      "Developed categorized product displays with comparison features",
      "Created virtual consultations for preliminary assessment",
      "Implemented a project gallery showcasing completed installations",
      "Built an emergency service booking system with priority scheduling"
    ],
    results: [
      "Increased online product sales by 60% within first year",
      "Grew service bookings by 45% through online scheduling",
      "Reduced customer support calls by 30% through improved information",
      "Expanded business to include renewable energy solutions"
    ],
    conclusion: "Electro Santos successfully established an online presence that balances product sales with service offerings, providing customers with comprehensive electrical solutions while building credibility through education and showcasing expertise.",
    website: "https://electrosantos.netlify.app/"
  },
  "hourglass": {
    title: "The Hour Glass",
    image: "/assets/images/hourGlass.png",
    overview: "The Hour Glass is a premium watch retailer offering a curated collection of luxury timepieces, providing watch enthusiasts with authentic, high-quality watches from renowned global brands.",
    objectives: [
      "Create an elegant online showcase for luxury watch collections",
      "Implement secure e-commerce functionality for high-value products",
      "Develop a virtual try-on experience for selected watch models",
      "Build a knowledge center about watch craftsmanship and maintenance"
    ],
    challenges: [
      "Presenting luxury products with appropriate digital sophistication",
      "Ensuring security for high-value transactions",
      "Creating detailed product visualizations for intricate timepieces",
      "Balancing exclusivity with accessibility for new customers"
    ],
    solutions: [
      "Designed a minimalist, premium interface highlighting product details",
      "Implemented multi-layer security protocols for transactions",
      "Created 360° product views with zoom capabilities",
      "Developed a watch expert consultation booking system"
    ],
    results: [
      "Increased online sales by 85% in the first quarter",
      "Improved average time on site by 4.5 minutes",
      "Reduced cart abandonment rate by 40%",
      "Successfully expanded customer base to younger luxury consumers"
    ],
    conclusion: "The Hour Glass successfully translated the premium in-store experience to digital, creating an online destination that respects the craftsmanship of luxury timepieces while providing a secure and sophisticated shopping environment.",
    website: "https://www.thehourglass.com/"
  },
  "clearance-management-system": {
    title: "Clearance Management System",
    image: "/assets/images/clearanceSystem.png",
    overview: "The Clearance Management System is a comprehensive digital solution designed to streamline and automate the clearance process for educational institutions, replacing paper-based workflows with an efficient online system.",
    objectives: [
      "Digitize the entire student clearance workflow",
      "Reduce administrative burden and processing time",
      "Provide real-time status tracking for students and staff",
      "Create a secure record-keeping system for completed clearances"
    ],
    challenges: [
      "Integrating with existing student information systems",
      "Managing complex approval workflows across multiple departments",
      "Ensuring system accessibility for all stakeholders",
      "Maintaining data security and student privacy"
    ],
    approach: [
      "Developed a modular system adaptable to institution-specific workflows",
      "Created role-based access controls for different departments",
      "Implemented automated notifications for pending clearance items",
      "Built comprehensive reporting tools for administration"
    ],
    results: [
      "Reduced clearance processing time by 75%",
      "Decreased administrative workload by 60%",
      "Eliminated paper usage, saving approximately 15,000 sheets annually",
      "Improved student satisfaction with transparent process tracking"
    ],
    conclusion: "The Clearance Management System has transformed an outdated, inefficient process into a streamlined digital experience, benefiting students, faculty, and administrative staff while providing better oversight and record-keeping for institutions.",
    website: "https://clearance-management-system-fronten.vercel.app/"
  },


};
const CaseDetail = () => {
  const { caseId } = useParams();
  const caseStudy = caseData[caseId];

  if (!caseStudy) {
    return (
      <div className="text-center py-16">
        <h1 className="text-6xl font-bold text-red-600"><T>Case Not Found</T></h1>
        <p className="text-gray-800 mt-4 text-xl">
          <T>Sorry, the case study you&apos;re looking for does not exist.</T>
        </p>
        <Link
          to="/"
          className="mt-4 inline-block text-sky-600 hover:underline font-medium text-xl"
        >
          <T>Return to Home</T>
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
        <h1 className="text-6xl font-bold text-red-600 mb-8"><T>{title}</T></h1>
        <img
          src={image}
          alt={title}
          className="w-2/2 h-auto rounded-lg mb-10 shadow-md"
        />
        <div className="mb-10">
          <h2 className="text-4xl font-semibold text-sky-500 mb-6"><T>Overview</T></h2>
          <p className="text-gray-800 leading-relaxed text-xl"><T>{overview}</T></p>
        </div>
        <div className="mb-10">
          <h2 className="text-4xl font-semibold text-sky-500 mb-6"><T>Objectives</T></h2>
          <ul className="list-disc list-inside space-y-3">
            {objectives.map((objective, index) => (
              <li key={index} className="text-xl">
                <T>{objective}</T>
              </li>
            ))}
          </ul>
        </div>
        {challenges.length > 0 && (
          <div className="mb-10">
            <h2 className="text-4xl font-semibold text-sky-500 mb-6"><T>Challenges</T></h2>
            <ul className="list-disc list-inside space-y-3">
              {challenges.map((challenge, index) => (
                <li key={index} className="text-xl">
                  <T>{challenge}</T>
                </li>
              ))}
            </ul>
          </div>
        )}
        {approach.length > 0 && (
          <div className="mb-10">
            <h2 className="text-4xl font-semibold text-sky-500 mb-6"><T>Approach</T></h2>
            <ul className="list-disc list-inside space-y-3">
              {approach.map((approachItem, index) => (
                <li key={index} className="text-xl">
                  <T>{approachItem}</T>
                </li>
              ))}
            </ul>
          </div>
        )}
        {solutions.length > 0 && (
          <div className="mb-10">
            <h2 className="text-4xl font-semibold text-sky-500 mb-6"><T>Solutions</T></h2>
            <ul className="list-disc list-inside space-y-3">
              {solutions.map((solution, index) => (
                <li key={index} className="text-xl">
                  <T>{solution}</T>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="mb-10">
          <h2 className="text-4xl font-semibold text-sky-500 mb-6"><T>Results</T></h2>
          <ul className="list-disc list-inside space-y-3">
            {results.map((result, index) => (
              <li key={index} className="text-xl">
                <T>{result}</T>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-10">
          <h2 className="text-4xl font-semibold text-sky-500 mb-6"><T>Conclusion</T></h2>
          <p className="text-xl"><T>{conclusion}</T></p>
        </div>
        {website && (
          <div className="mt-12 text-center">
            <h3 className="text-3xl font-bold text-gray-700 mb-4"><T>Visit the Website</T></h3>
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-sky-500 text-white rounded-md shadow-md hover:bg-sky-700 transition inline-block"
            >
              <T>Explore {title.split(":")[0]?.trim()}</T>
            </a>
          </div>
        )}
      </section>

      <CallToAction />
      <WhatsappButton />
      <Footer />
    </>
  );
};

export default CaseDetail;
