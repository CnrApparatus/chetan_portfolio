import { ArrowLeft, ExternalLink, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function PowerBI() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-warm-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.015] z-0">
        <div
          className="absolute top-10 left-10 w-8 h-8 border border-rich-gray rounded-full animate-pulse"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-32 right-16 w-4 h-4 border border-rich-gray rounded-full animate-pulse"
          style={{ animationDuration: "2s", animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-16 w-6 h-6 border border-rich-gray rounded-full animate-pulse"
          style={{ animationDuration: "4s", animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Navigation */}
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-rich-gray hover:text-black transition-colors duration-200 mb-12"
          >
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-black mb-6 leading-tight">
              Power BI Dashboard Design
            </h1>
            <p className="text-lg text-rich-gray max-w-2xl mx-auto">
              Transforming complex datasets into actionable business
              intelligence through interactive visualization
            </p>
          </div>

          {/* Custom SVG Illustration */}
          <div className="flex justify-center mb-16">
            <svg
              width="400"
              height="300"
              viewBox="0 0 400 300"
              className="w-full max-w-md"
            >
              {/* Dashboard Frame */}
              <rect
                x="20"
                y="40"
                width="360"
                height="240"
                rx="12"
                fill="none"
                stroke="#5e5e5f"
                strokeWidth="2"
              />

              {/* Header Bar */}
              <rect
                x="20"
                y="40"
                width="360"
                height="40"
                rx="12"
                fill="#f8f9fa"
                stroke="#5e5e5f"
                strokeWidth="1"
              />
              <circle cx="45" cy="60" r="4" fill="#5e5e5f" />
              <circle cx="60" cy="60" r="4" fill="#5e5e5f" />
              <circle cx="75" cy="60" r="4" fill="#5e5e5f" />

              {/* Chart 1 - Bar Chart */}
              <rect
                x="40"
                y="100"
                width="100"
                height="80"
                rx="4"
                fill="none"
                stroke="#5e5e5f"
                strokeWidth="1"
              />
              <rect x="50" y="140" width="12" height="30" fill="#5e5e5f" />
              <rect x="67" y="130" width="12" height="40" fill="#5e5e5f" />
              <rect x="84" y="150" width="12" height="20" fill="#5e5e5f" />
              <rect x="101" y="120" width="12" height="50" fill="#5e5e5f" />
              <rect x="118" y="135" width="12" height="35" fill="#5e5e5f" />

              {/* Chart 2 - Line Chart */}
              <rect
                x="160"
                y="100"
                width="100"
                height="80"
                rx="4"
                fill="none"
                stroke="#5e5e5f"
                strokeWidth="1"
              />
              <polyline
                points="170,160 185,140 200,150 215,130 230,135 245,120"
                fill="none"
                stroke="#5e5e5f"
                strokeWidth="2"
              />
              <circle cx="170" cy="160" r="2" fill="#5e5e5f" />
              <circle cx="185" cy="140" r="2" fill="#5e5e5f" />
              <circle cx="200" cy="150" r="2" fill="#5e5e5f" />
              <circle cx="215" cy="130" r="2" fill="#5e5e5f" />
              <circle cx="230" cy="135" r="2" fill="#5e5e5f" />
              <circle cx="245" cy="120" r="2" fill="#5e5e5f" />

              {/* Chart 3 - Pie Chart */}
              <rect
                x="280"
                y="100"
                width="80"
                height="80"
                rx="4"
                fill="none"
                stroke="#5e5e5f"
                strokeWidth="1"
              />
              <circle
                cx="320"
                cy="140"
                r="25"
                fill="none"
                stroke="#5e5e5f"
                strokeWidth="2"
              />
              <path
                d="M 320 115 A 25 25 0 0 1 335 155 L 320 140 Z"
                fill="#5e5e5f"
                opacity="0.3"
              />
              <path
                d="M 335 155 A 25 25 0 0 1 305 155 L 320 140 Z"
                fill="#5e5e5f"
                opacity="0.6"
              />
              <path
                d="M 305 155 A 25 25 0 0 1 320 115 L 320 140 Z"
                fill="#5e5e5f"
                opacity="0.9"
              />

              {/* KPI Cards */}
              <rect
                x="40"
                y="200"
                width="70"
                height="50"
                rx="4"
                fill="#f8f9fa"
                stroke="#5e5e5f"
                strokeWidth="1"
              />
              <text
                x="75"
                y="220"
                textAnchor="middle"
                fontSize="10"
                fill="#5e5e5f"
              >
                Revenue
              </text>
              <text
                x="75"
                y="235"
                textAnchor="middle"
                fontSize="14"
                fill="#000"
                fontWeight="600"
              >
                ₹2.4M
              </text>

              <rect
                x="130"
                y="200"
                width="70"
                height="50"
                rx="4"
                fill="#f8f9fa"
                stroke="#5e5e5f"
                strokeWidth="1"
              />
              <text
                x="165"
                y="220"
                textAnchor="middle"
                fontSize="10"
                fill="#5e5e5f"
              >
                Growth
              </text>
              <text
                x="165"
                y="235"
                textAnchor="middle"
                fontSize="14"
                fill="#000"
                fontWeight="600"
              >
                +15%
              </text>

              <rect
                x="220"
                y="200"
                width="70"
                height="50"
                rx="4"
                fill="#f8f9fa"
                stroke="#5e5e5f"
                strokeWidth="1"
              />
              <text
                x="255"
                y="220"
                textAnchor="middle"
                fontSize="10"
                fill="#5e5e5f"
              >
                Users
              </text>
              <text
                x="255"
                y="235"
                textAnchor="middle"
                fontSize="14"
                fill="#000"
                fontWeight="600"
              >
                127K
              </text>

              <rect
                x="310"
                y="200"
                width="70"
                height="50"
                rx="4"
                fill="#f8f9fa"
                stroke="#5e5e5f"
                strokeWidth="1"
              />
              <text
                x="345"
                y="220"
                textAnchor="middle"
                fontSize="10"
                fill="#5e5e5f"
              >
                ROI
              </text>
              <text
                x="345"
                y="235"
                textAnchor="middle"
                fontSize="14"
                fill="#000"
                fontWeight="600"
              >
                24%
              </text>
            </svg>
          </div>

          {/* Skill Explanation */}
          <div className="prose prose-lg max-w-none mb-16">
            <h2 className="text-2xl sm:text-3xl font-light text-black mb-6">
              What is Power BI Dashboard Design?
            </h2>
            <div className="space-y-6 text-rich-gray leading-relaxed">
              <p>
                Power BI Dashboard Design is the art and science of transforming
                complex business data into intuitive, interactive visual
                experiences. By leveraging Microsoft's powerful business
                intelligence platform, I create dashboards that don't just
                display data—they tell compelling stories that drive informed
                decision-making across organizations.
              </p>
              <p>
                From raw spreadsheets to dynamic visualizations, Power BI
                enables real-time data connectivity, advanced analytics, and
                collaborative insights. My approach focuses on user-centric
                design, ensuring that every chart, filter, and metric serves a
                specific business purpose while maintaining clean, professional
                aesthetics that stakeholders actually want to use.
              </p>
            </div>
          </div>

          {/* Project Example */}
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 sm:p-12 mb-16">
            <h2 className="text-2xl sm:text-3xl font-light text-black mb-6">
              Featured Project
            </h2>
            <h3 className="text-xl font-semibold text-black mb-4">
              "What Types of Businesses Succeed in India"
            </h3>

            <div className="space-y-6 text-rich-gray leading-relaxed">
              <p>
                <strong className="text-black">Challenge:</strong> Analyze the
                Indian startup ecosystem to identify patterns of success across
                different business sectors, funding stages, and geographical
                regions.
              </p>

              <p>
                <strong className="text-black">Solution:</strong> Developed a
                comprehensive Power BI dashboard analyzing over 2,000 Indian
                startups using data from government databases, funding reports,
                and market research. The dashboard featured interactive filters
                for industry sectors, funding amounts, city-wise distribution,
                and timeline analysis.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 my-6">
                <h4 className="font-semibold text-black mb-3">
                  Key Insights Discovered:
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    • Fintech and Ed-tech showed highest success rates (72%
                    survival after 3 years)
                  </li>
                  <li>
                    • Bangalore-based startups secured 34% more Series A funding
                    than Mumbai counterparts
                  </li>
                  <li>
                    • B2B SaaS companies demonstrated 2.3x faster revenue growth
                    than B2C models
                  </li>
                  <li>
                    • Startups with diverse founding teams had 45% higher
                    valuations at exit
                  </li>
                </ul>
              </div>

              <p>
                <strong className="text-black">Impact:</strong> The dashboard
                became a reference tool for VCs and entrepreneurs, providing
                data-driven insights for investment decisions and market entry
                strategies. The visualization helped identify untapped
                opportunities in tier-2 cities and emerging sectors.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition-transform duration-200">
                <ExternalLink size={16} />
                <span>View Live Dashboard</span>
              </button>
              <button className="flex items-center space-x-2 border-2 border-rich-gray text-rich-gray px-6 py-3 rounded-full hover:bg-rich-gray hover:text-white transition-colors duration-200">
                <Download size={16} />
                <span>Download Report</span>
              </button>
            </div>
          </div>

          {/* Skills Used */}
          <div className="text-center">
            <h3 className="text-xl font-medium text-black mb-6">
              Technologies & Skills Used
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Power BI",
                "DAX",
                "Power Query",
                "SQL",
                "Excel",
                "Data Modeling",
                "Statistical Analysis",
                "UI/UX Design",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-rich-gray rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
