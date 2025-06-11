import { useState, useEffect } from "react";
import Header from "../components/Header"; // Adjust the path as necessary
import axios from "axios";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const LeadsDashboard = () => {
  const [leads, setLeads] = useState([]);
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("supersecret123");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [viewMode, setViewMode] = useState("daily"); // daily or monthly
  const [chartType, setChartType] = useState("bar"); // bar or pie
  const [selectedMonth, setSelectedMonth] = useState("all"); // for CSV export
  const [currentPage, setCurrentPage] = useState(1);
  const [leadsPerPage] = useState(14);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const authHeader = `Basic ${btoa(`${username.trim()}:${password.trim()}`)}`;
    console.log("Sending request with credentials:", { username, password });
    console.log("Authorization header:", authHeader);

    try {
      const response = await axios.get(
        "https://techliftup-backend.vercel.app/leads",
        {
          headers: {
            Authorization: authHeader,
          },
        }
      );
      console.log("Response from backend:", response.data);
      setLeads(response.data);
      setIsAuthenticated(true);
    } catch (err) {
      console.error(
        "Detailed error:",
        err.response ? err.response.data : err.message
      );
      setError("Failed to fetch leads. Check the console for details.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername("");
    setPassword("");
    setLeads([]);
    setCurrentPage(1);
  };

  const getAvailableMonths = () => {
    const months = new Set();
    leads.forEach((lead) => {
      const month = new Date(lead.timestamp).toLocaleString("default", {
        month: "long",
        year: "numeric",
      });
      months.add(month);
    });
    return Array.from(months).sort((a, b) => {
      const [monthA, yearA] = a.split(" ");
      const [monthB, yearB] = b.split(" ");
      return (
        new Date(`${monthA} 1, ${yearA}`) - new Date(`${monthB} 1, ${yearB}`)
      );
    });
  };

  const exportToCSV = () => {
    let csvData;
    let fileName;

    if (selectedMonth === "all") {
      if (viewMode === "monthly") {
        const monthlyData = groupDataByMonth();
        csvData = [
          ["Month", "Number of Leads"],
          ...Object.entries(monthlyData).map(([month, count]) => [
            month,
            count,
          ]),
        ];
        fileName = "leads_monthly_all";
      } else {
        csvData = [
          ["Name", "Email", "Timestamp"],
          ...leads.map((lead) => [lead.name, lead.email, lead.timestamp]),
        ];
        fileName = "leads_all";
      }
    } else {
      const filteredLeads = leads.filter((lead) => {
        const leadMonth = new Date(lead.timestamp).toLocaleString("default", {
          month: "long",
          year: "numeric",
        });
        return leadMonth === selectedMonth;
      });

      csvData = [
        ["Name", "Email", "Timestamp"],
        ...filteredLeads.map((lead) => [lead.name, lead.email, lead.timestamp]),
      ];
      fileName = `leads_${selectedMonth.replace(" ", "_")}`;
    }

    const csvContent = csvData.map((row) => row.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `${fileName}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const groupDataByMonth = () => {
    return leads.reduce((acc, lead) => {
      const month = new Date(lead.timestamp).toLocaleString("default", {
        month: "long",
        year: "numeric",
      });
      acc[month] = (acc[month] || 0) + 1;
      return acc;
    }, {});
  };

  // Prepare data for the graph
  const prepareGraphData = () => {
    let groupedData;
    let sortedLabels;

    if (viewMode === "monthly") {
      groupedData = groupDataByMonth();
      sortedLabels = Object.keys(groupedData).sort((a, b) => {
        const [monthA, yearA] = a.split(" ");
        const [monthB, yearB] = b.split(" ");
        return (
          new Date(`${monthA} 1, ${yearA}`) - new Date(`${monthB} 1, ${yearB}`)
        );
      });
    } else {
      groupedData = leads.reduce((acc, lead) => {
        const date = new Date(lead.timestamp).toLocaleDateString();
        acc[date] = (acc[date] || 0) + 1;
        return acc;
      }, {});
      sortedLabels = Object.keys(groupedData).sort(
        (a, b) => new Date(a) - new Date(b)
      );
    }

    const backgroundColor = [
      "rgba(99, 102, 241, 0.6)", // Indigo-500
      "rgba(59, 130, 246, 0.6)", // Blue-500
      "rgba(14, 165, 233, 0.6)", // Sky-500
      "rgba(16, 185, 129, 0.6)", // Emerald-500
      "rgba(249, 115, 22, 0.6)", // Orange-500
      "rgba(239, 68, 68, 0.6)", // Red-500
      "rgba(168, 85, 247, 0.6)", // Purple-500
    ];
    const borderColor = backgroundColor.map((color) =>
      color.replace("0.6", "1")
    );

    return {
      labels: sortedLabels,
      datasets: [
        {
          label:
            viewMode === "monthly"
              ? "New Users Per Month"
              : "New Users Per Day",
          data: sortedLabels.map((label) => groupedData[label]),
          backgroundColor:
            chartType === "pie" ? backgroundColor : "rgba(99, 102, 241, 0.6)", // Indigo-500
          borderColor:
            chartType === "pie" ? borderColor : "rgba(99, 102, 241, 1)", // Indigo-500 solid
          borderWidth: 1,
          borderRadius: chartType === "bar" ? 4 : 0, // Add rounded corners to bars
        },
      ],
    };
  };

  useEffect(() => {
    if (isAuthenticated) {
      // Optionally, you can fetch leads again if needed
    }
  }, [isAuthenticated]);

  // Get current leads for pagination
  const indexOfLastLead = currentPage * leadsPerPage;
  const indexOfFirstLead = indexOfLastLead - leadsPerPage;
  const filteredLeads =
    selectedMonth === "all"
      ? leads
      : leads.filter((lead) => {
          const leadMonth = new Date(lead.timestamp).toLocaleString("default", {
            month: "long",
            year: "numeric",
          });
          return leadMonth === selectedMonth;
        });
  const currentLeads = filteredLeads.slice(indexOfFirstLead, indexOfLastLead);
  const totalPages = Math.ceil(filteredLeads.length / leadsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return (
      date.toLocaleTimeString([], {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }) +
      " (" +
      date.toLocaleDateString() +
      ")"
    );
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-slate-100 flex flex-col items-center p-4 sm:p-8 pt-24">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6 sm:mb-8">
          Leads Dashboard
        </h1>

        {!isAuthenticated ? (
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-md border border-slate-200">
            <h2 className="text-2xl font-semibold text-slate-700 mb-6 text-center">
              Admin Login
            </h2>
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-slate-600 mb-1"
                >
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 ease-in-out"
                  placeholder="Enter username"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-600 mb-1"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 ease-in-out"
                  placeholder="Enter password"
                  required
                />
              </div>
              {error && (
                <p className="text-red-600 text-sm font-medium bg-red-100 p-3 rounded-lg">
                  {error}
                </p>
              )}
              <button
                type="submit"
                className="w-full p-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 ease-in-out"
              >
                Login
              </button>
            </form>
          </div>
        ) : (
          <div className="w-full max-w-6xl space-y-6 sm:space-y-8">
            <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md border border-slate-200">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 gap-4">
                <h2 className="text-xl font-semibold text-slate-700">
                  User Growth Overview
                </h2>
                <div className="flex flex-wrap items-center gap-3">
                  <select
                    value={viewMode}
                    onChange={(e) => setViewMode(e.target.value)}
                    className="p-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  >
                    <option value="daily">Daily View</option>
                    <option value="monthly">Monthly View</option>
                  </select>
                  <select
                    value={chartType}
                    onChange={(e) => setChartType(e.target.value)}
                    className="p-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  >
                    <option value="bar">Bar Chart</option>
                    <option value="pie">Pie Chart</option>
                  </select>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200 ease-in-out"
                  >
                    Logout
                  </button>
                </div>
              </div>
              <div className="h-72 sm:h-80">
                {leads.length > 0 ? (
                  chartType === "bar" ? (
                    <Bar
                      data={prepareGraphData()}
                      options={{
                        maintainAspectRatio: false,
                        scales: {
                          y: {
                            beginAtZero: true,
                            ticks: {
                              stepSize: 1,
                              color: "#475569",
                            },
                            grid: {
                              color: "#e2e8f0",
                            },
                          },
                          x: {
                            ticks: {
                              color: "#475569",
                            },
                            grid: {
                              display: false,
                            },
                          },
                        },
                        plugins: {
                          legend: {
                            labels: {
                              color: "#334155",
                            },
                          },
                          tooltip: {
                            backgroundColor: "rgba(0, 0, 0, 0.7)",
                            titleFont: { size: 14 },
                            bodyFont: { size: 12 },
                          },
                        },
                        responsive: true,
                      }}
                    />
                  ) : (
                    <Pie
                      data={prepareGraphData()}
                      options={{
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            position: "right",
                            labels: {
                              color: "#334155",
                              boxWidth: 15,
                              padding: 15,
                            },
                          },
                          tooltip: {
                            backgroundColor: "rgba(0, 0, 0, 0.7)",
                            titleFont: { size: 14 },
                            bodyFont: { size: 12 },
                          },
                        },
                        responsive: true,
                      }}
                    />
                  )
                ) : (
                  <div className="flex items-center justify-center h-full text-slate-500">
                    No data available to display the chart.
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md border border-slate-200">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 gap-4">
                <h2 className="text-xl font-semibold text-slate-700">
                  Leads Details
                </h2>
                <div className="flex flex-wrap items-center gap-3">
                  <select
                    value={selectedMonth}
                    onChange={(e) => {
                      setSelectedMonth(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="p-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  >
                    <option value="all">All Data</option>
                    {getAvailableMonths().map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={exportToCSV}
                    disabled={leads.length === 0}
                    className="px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Export to CSV
                  </button>
                </div>
              </div>
              {leads.length === 0 ? (
                <p className="text-slate-500 text-center py-4">
                  No leads found.
                </p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse border border-slate-300">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="border border-slate-300 p-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                          Name
                        </th>
                        <th className="border border-slate-300 p-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                          Email
                        </th>
                        <th className="border border-slate-300 p-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                          Timestamp
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-200">
                      {currentLeads.map((lead) => (
                        <tr
                          key={lead.id}
                          className="hover:bg-slate-50 transition-colors duration-150"
                        >
                          <td className="border-b border-slate-200 p-3 text-sm text-slate-700">
                            {lead.name}
                          </td>
                          <td className="border-b border-slate-200 p-3 text-sm text-slate-700">
                            {lead.email}
                          </td>
                          <td className="border-b border-slate-200 p-3 text-sm text-slate-700 whitespace-nowrap">
                            {formatTimestamp(lead.timestamp)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {filteredLeads.length > leadsPerPage && (
                    <div className="flex justify-center items-center mt-6 gap-2">
                      <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                          currentPage === 1
                            ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                            : "bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        }`}
                      >
                        Previous
                      </button>
                      <span className="px-4 py-2 text-sm text-slate-600">
                        Page {currentPage} of {totalPages}
                      </span>
                      <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                          currentPage === totalPages
                            ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                            : "bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        }`}
                      >
                        Next
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LeadsDashboard;
