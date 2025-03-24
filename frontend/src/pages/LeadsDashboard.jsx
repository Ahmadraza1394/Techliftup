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
  const [leadsPerPage] = useState(7);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const authHeader = `Basic ${btoa(`${username.trim()}:${password.trim()}`)}`;
    console.log("Sending request with credentials:", { username, password });
    console.log("Authorization header:", authHeader);

    try {
      const response = await axios.get("http://localhost:5000/leads", {
        headers: {
          Authorization: authHeader,
        },
      });
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
      "rgba(75, 192, 192, 0.5)",
      "rgba(255, 99, 132, 0.5)",
      "rgba(54, 162, 235, 0.5)",
      "rgba(255, 206, 86, 0.5)",
      "rgba(153, 102, 255, 0.5)",
    ];

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
            chartType === "pie" ? backgroundColor : "rgba(75, 192, 192, 0.5)",
          borderColor:
            chartType === "pie"
              ? backgroundColor.map((color) => color.replace("0.5", "1"))
              : "rgb(75, 192, 192)",
          borderWidth: 1,
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
      <div className="min-h-screen bg-gray-100 flex flex-col items-center  p-2 sm:p-6">
        <h1 className="text-2xl sm:text-4xl font-bold my-4 sm:mb-6 mt-24">
          Leads Dashboard
        </h1>

        {!isAuthenticated ? (
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Login to View Leads</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter username"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter password"
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                className="w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
              >
                Login
              </button>
            </form>
          </div>
        ) : (
          <div className="w-full max-w-4xl space-y-4 sm:space-y-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-2 sm:space-y-0">
                <h2 className="text-xl font-semibold">User Growth</h2>
                <div className="flex flex-wrap gap-2 sm:gap-4">
                  <select
                    value={viewMode}
                    onChange={(e) => setViewMode(e.target.value)}
                    className="p-2 border rounded"
                  >
                    <option value="daily">Daily View</option>
                    <option value="monthly">Monthly View</option>
                  </select>
                  <select
                    value={chartType}
                    onChange={(e) => setChartType(e.target.value)}
                    className="p-2 border rounded"
                  >
                    <option value="bar">Bar Chart</option>
                    <option value="pie">Pie Chart</option>
                  </select>
                  <button
                    onClick={handleLogout}
                    className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-200"
                  >
                    Logout
                  </button>
                </div>
              </div>
              <div className="h-64">
                {leads.length > 0 &&
                  (chartType === "bar" ? (
                    <Bar
                      data={prepareGraphData()}
                      options={{
                        maintainAspectRatio: false,
                        scales: {
                          y: {
                            beginAtZero: true,
                            ticks: {
                              stepSize: 1,
                            },
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
                        responsive: true,
                      }}
                    />
                  ))}
              </div>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-2 sm:space-y-0">
                <h2 className="text-xl font-semibold">Leads Table</h2>
                <div className="flex flex-wrap gap-2">
                  <select
                    value={selectedMonth}
                    onChange={(e) => {
                      setSelectedMonth(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="p-2 border rounded"
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
                    className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200"
                  >
                    Export to CSV
                  </button>
                </div>
              </div>
              {leads.length === 0 ? (
                <p className="text-gray-500">No leads found.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse border border-gray-200">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-200 p-2 text-left">
                          Name
                        </th>
                        <th className="border border-gray-200 p-2 text-left">
                          Email
                        </th>
                        <th className="border border-gray-200 p-2 text-left">
                          Timestamp
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentLeads.map((lead) => (
                        <tr key={lead.id} className="hover:bg-gray-50">
                          <td className="border border-gray-200 p-2">
                            {lead.name}
                          </td>
                          <td className="border border-gray-200 p-2">
                            {lead.email}
                          </td>
                          <td className="border border-gray-200 p-2">
                            {formatTimestamp(lead.timestamp)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {totalPages > 1 && (
                    <div className="flex justify-center mt-4 gap-2">
                      <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-3 py-1 rounded ${
                          currentPage === 1
                            ? "bg-gray-300"
                            : "bg-blue-600 text-white hover:bg-blue-700"
                        }`}
                      >
                        Previous
                      </button>
                      <span className="px-3 py-1">
                        Page {currentPage} of {totalPages}
                      </span>
                      <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-3 py-1 rounded ${
                          currentPage === totalPages
                            ? "bg-gray-300"
                            : "bg-blue-600 text-white hover:bg-blue-700"
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
