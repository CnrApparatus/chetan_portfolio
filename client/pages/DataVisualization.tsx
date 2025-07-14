import { ArrowLeft, ExternalLink, Download, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function DataVisualization() {
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
              Data Visualization & Reporting
            </h1>
            <p className="text-lg text-rich-gray max-w-2xl mx-auto">
              Converting raw data into meaningful visual narratives that drive
              strategic business decisions
            </p>
          </div>

          {/* Custom SVG Illustration */}
          <div className="flex justify-center mb-16">
            <svg
              width="450"
              height="300"
              viewBox="0 0 450 300"
              className="w-full max-w-lg"
            >
              {/* Main Chart Area */}
              <rect
                x="50"
                y="50"
                width="350"
                height="200"
                rx="8"
                fill="none"
                stroke="#5e5e5f"
                strokeWidth="2"
              />

              {/* Y-axis */}
              <line
                x1="70"
                y1="70"
                x2="70"
                y2="230"
                stroke="#5e5e5f"
                strokeWidth="1"
              />
              <text x="65" y="75" fontSize="8" fill="#5e5e5f" textAnchor="end">
                100%
              </text>
              <text x="65" y="110" fontSize="8" fill="#5e5e5f" textAnchor="end">
                75%
              </text>
              <text x="65" y="145" fontSize="8" fill="#5e5e5f" textAnchor="end">
                50%
              </text>
              <text x="65" y="180" fontSize="8" fill="#5e5e5f" textAnchor="end">
                25%
              </text>
              <text x="65" y="215" fontSize="8" fill="#5e5e5f" textAnchor="end">
                0%
              </text>

              {/* X-axis */}
              <line
                x1="70"
                y1="230"
                x2="380"
                y2="230"
                stroke="#5e5e5f"
                strokeWidth="1"
              />
              <text
                x="100"
                y="245"
                fontSize="8"
                fill="#5e5e5f"
                textAnchor="middle"
              >
                Q1
              </text>
              <text
                x="170"
                y="245"
                fontSize="8"
                fill="#5e5e5f"
                textAnchor="middle"
              >
                Q2
              </text>
              <text
                x="240"
                y="245"
                fontSize="8"
                fill="#5e5e5f"
                textAnchor="middle"
              >
                Q3
              </text>
              <text
                x="310"
                y="245"
                fontSize="8"
                fill="#5e5e5f"
                textAnchor="middle"
              >
                Q4
              </text>

              {/* Area Chart */}
              <path
                d="M 70 180 Q 100 150 130 140 Q 170 120 200 130 Q 240 110 270 100 Q 310 95 350 90 L 350 230 L 70 230 Z"
                fill="#5e5e5f"
                opacity="0.2"
              />

              {/* Main Line */}
              <path
                d="M 70 180 Q 100 150 130 140 Q 170 120 200 130 Q 240 110 270 100 Q 310 95 350 90"
                fill="none"
                stroke="#5e5e5f"
                strokeWidth="3"
              />

              {/* Data Points */}
              <circle cx="100" cy="150" r="3" fill="#5e5e5f" />
              <circle cx="130" cy="140" r="3" fill="#5e5e5f" />
              <circle cx="200" cy="130" r="3" fill="#5e5e5f" />
              <circle cx="270" cy="100" r="3" fill="#5e5e5f" />
              <circle cx="350" cy="90" r="3" fill="#5e5e5f" />

              {/* Bar Chart Overlay */}
              <rect
                x="85"
                y="190"
                width="10"
                height="40"
                fill="#5e5e5f"
                opacity="0.6"
              />
              <rect
                x="155"
                y="170"
                width="10"
                height="60"
                fill="#5e5e5f"
                opacity="0.6"
              />
              <rect
                x="225"
                y="160"
                width="10"
                height="70"
                fill="#5e5e5f"
                opacity="0.6"
              />
              <rect
                x="295"
                y="140"
                width="10"
                height="90"
                fill="#5e5e5f"
                opacity="0.6"
              />

              {/* Trend Arrow */}
              <path
                d="M 320 110 L 340 100 L 330 90 M 340 100 L 330 110"
                stroke="#5e5e5f"
                strokeWidth="2"
                fill="none"
              />

              {/* Legend */}
              <rect
                x="60"
                y="60"
                width="80"
                height="40"
                rx="4"
                fill="white"
                stroke="#5e5e5f"
                strokeWidth="1"
              />
              <line
                x1="70"
                y1="75"
                x2="85"
                y2="75"
                stroke="#5e5e5f"
                strokeWidth="2"
              />
              <text x="90" y="78" fontSize="8" fill="#5e5e5f">
                Conversion
              </text>
              <rect
                x="70"
                y="82"
                width="8"
                height="6"
                fill="#5e5e5f"
                opacity="0.6"
              />
              <text x="82" y="88" fontSize="8" fill="#5e5e5f">
                Revenue
              </text>

              {/* Data Labels */}
              <text
                x="100"
                y="135"
                fontSize="9"
                fill="#000"
                textAnchor="middle"
                fontWeight="600"
              >
                24%
              </text>
              <text
                x="200"
                y="115"
                fontSize="9"
                fill="#000"
                textAnchor="middle"
                fontWeight="600"
              >
                42%
              </text>
              <text
                x="350"
                y="75"
                fontSize="9"
                fill="#000"
                textAnchor="middle"
                fontWeight="600"
              >
                67%
              </text>

              {/* Title */}
              <text
                x="225"
                y="35"
                fontSize="14"
                fill="#000"
                textAnchor="middle"
                fontWeight="600"
              >
                Customer Journey Funnel Analysis
              </text>
            </svg>
          </div>

          {/* Skill Explanation */}
          <div className="prose prose-lg max-w-none mb-16">
            <h2 className="text-2xl sm:text-3xl font-light text-black mb-6">
              What is Data Visualization & Reporting?
            </h2>
            <div className="space-y-6 text-rich-gray leading-relaxed">
              <p>
                Data Visualization & Reporting transforms overwhelming
                spreadsheets and databases into clear, actionable insights that
                stakeholders can immediately understand and act upon. It's the
                bridge between complex analytics and business strategy, making
                data accessible to decision-makers at every level of an
                organization.
              </p>
              <p>
                My approach combines statistical rigor with visual storytelling,
                creating reports that not only present facts but reveal
                patterns, trends, and opportunities hidden within the data. From
                executive dashboards to detailed analytical reports, every
                visualization is designed to answer specific business questions
                while maintaining the clarity and professionalism that builds
                stakeholder confidence.
              </p>
            </div>
          </div>

          {/* Project Example */}
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 sm:p-12 mb-16">
            <h2 className="text-2xl sm:text-3xl font-light text-black mb-6">
              Featured Project
            </h2>
            <h3 className="text-xl font-semibold text-black mb-4">
              "D2C Skincare Startup: Consumer Trends & Funnel Analysis"
            </h3>

            <div className="space-y-6 text-rich-gray leading-relaxed">
              <p>
                <strong className="text-black">Challenge:</strong> A simulated
                direct-to-consumer skincare startup needed comprehensive
                insights into customer behavior, conversion funnels, and market
                trends to optimize their digital marketing strategy and product
                positioning.
              </p>

              <p>
                <strong className="text-black">Solution:</strong> Developed an
                integrated reporting system analyzing customer journey data,
                product performance metrics, and market trend analysis across
                multiple touchpoints. Created interactive visualizations
                tracking conversion rates, customer lifetime value, and
                demographic segmentation.
              </p>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-black mb-2">87%</div>
                  <div className="text-sm text-rich-gray">
                    Cart-to-Purchase Conversion
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-black mb-2">
                    ₹2,847
                  </div>
                  <div className="text-sm text-rich-gray">
                    Average Customer LTV
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-black mb-2">42%</div>
                  <div className="text-sm text-rich-gray">
                    Repeat Purchase Rate
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 my-6">
                <h4 className="font-semibold text-black mb-3">
                  Key Findings & Insights:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-black mb-2">
                      Customer Behavior:
                    </h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Peak purchasing: 7-9 PM weekdays</li>
                      <li>• Mobile traffic: 73% of total visits</li>
                      <li>• Social media referrals: 45% conversion rate</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-black mb-2">
                      Product Performance:
                    </h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Anti-aging serums: Highest margin (68%)</li>
                      <li>• Bundle deals: 3.2x higher AOV</li>
                      <li>• Subscription model: 89% retention rate</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p>
                <strong className="text-black">Impact:</strong> The
                visualization reports led to a 34% increase in conversion rates
                through optimized funnel design, resulted in a 28% boost in
                customer retention via personalized remarketing campaigns, and
                identified three new product opportunities based on demographic
                analysis.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition-transform duration-200">
                <TrendingUp size={16} />
                <span>View Analysis Report</span>
              </button>
              <button className="flex items-center space-x-2 border-2 border-rich-gray text-rich-gray px-6 py-3 rounded-full hover:bg-rich-gray hover:text-white transition-colors duration-200">
                <Download size={16} />
                <span>Download Charts</span>
              </button>
            </div>
          </div>

          {/* Reporting Process */}
          <div className="mb-16">
            <h3 className="text-2xl font-light text-black mb-8 text-center">
              My Reporting Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-rich-gray">1</span>
                </div>
                <h4 className="font-medium text-black mb-2">Data Collection</h4>
                <p className="text-sm text-rich-gray">
                  Gather and clean data from multiple sources
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-rich-gray">2</span>
                </div>
                <h4 className="font-medium text-black mb-2">Analysis</h4>
                <p className="text-sm text-rich-gray">
                  Statistical analysis and pattern identification
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-rich-gray">3</span>
                </div>
                <h4 className="font-medium text-black mb-2">Visualization</h4>
                <p className="text-sm text-rich-gray">
                  Create clear, impactful charts and graphs
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-rich-gray">4</span>
                </div>
                <h4 className="font-medium text-black mb-2">Insights</h4>
                <p className="text-sm text-rich-gray">
                  Actionable recommendations and conclusions
                </p>
              </div>
            </div>
          </div>

          {/* Skills Used */}
          <div className="text-center">
            <h3 className="text-xl font-medium text-black mb-6">
              Technologies & Skills Used
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Excel",
                "Python",
                "Matplotlib",
                "Seaborn",
                "Tableau",
                "Google Analytics",
                "Statistical Analysis",
                "A/B Testing",
                "SQL",
                "Data Cleaning",
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
