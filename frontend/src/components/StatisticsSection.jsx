const stats = [
  {
    value: "500+",
    label: "Clients Served",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
  },
  {
    value: "35%",
    label: "Referral Rate",
  },
  {
    value: "95%",
    label: "Project Completion",
  },
];

const StatisticsSection = () => {
  return (
    <section className="py-16 px-6 flex justify-center">
      <div className="flex flex-col md:flex-row items-center justify-around bg-sky-500 font-mono text-gray-100 py-10 px-8 rounded-xl shadow-lg w-full max-w-6xl space-y-6 md:space-y-0 md:space-x-8">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <h3 className="text-5xl font-bold mb-2">{stat.value}</h3>
            <p className="text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatisticsSection;
