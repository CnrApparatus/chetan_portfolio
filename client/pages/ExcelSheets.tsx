import {
  ArrowLeft,
  ExternalLink,
  Download,
  FileSpreadsheet,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function ExcelSheets() {
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
            to="/#skills"
            className="inline-flex items-center space-x-2 text-rich-gray hover:text-black transition-colors duration-200 mb-12"
          >
            <ArrowLeft size={20} />
            <span>Back to Skills</span>
          </Link>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-black mb-6 leading-tight">
              Microsoft Excel & Google Sheets
            </h1>
            <p className="text-lg text-rich-gray max-w-2xl mx-auto">
              Mastering spreadsheet automation, data analysis, and dynamic
              reporting for business intelligence
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
              {/* Spreadsheet Frame */}
              <rect
                x="30"
                y="40"
                width="340"
                height="220"
                rx="8"
                fill="white"
                stroke="#5e5e5f"
                strokeWidth="2"
              />

              {/* Header Row */}
              <rect
                x="30"
                y="40"
                width="340"
                height="30"
                fill="#f8f9fa"
                stroke="#5e5e5f"
                strokeWidth="1"
              />

              {/* Column Headers */}
              <text
                x="65"
                y="58"
                fontSize="10"
                fill="#5e5e5f"
                textAnchor="middle"
                fontWeight="600"
              >
                A
              </text>
              <text
                x="115"
                y="58"
                fontSize="10"
                fill="#5e5e5f"
                textAnchor="middle"
                fontWeight="600"
              >
                B
              </text>
              <text
                x="165"
                y="58"
                fontSize="10"
                fill="#5e5e5f"
                textAnchor="middle"
                fontWeight="600"
              >
                C
              </text>
              <text
                x="215"
                y="58"
                fontSize="10"
                fill="#5e5e5f"
                textAnchor="middle"
                fontWeight="600"
              >
                D
              </text>
              <text
                x="265"
                y="58"
                fontSize="10"
                fill="#5e5e5f"
                textAnchor="middle"
                fontWeight="600"
              >
                E
              </text>
              <text
                x="315"
                y="58"
                fontSize="10"
                fill="#5e5e5f"
                textAnchor="middle"
                fontWeight="600"
              >
                F
              </text>

              {/* Grid Lines */}
              {[80, 100, 120, 140, 160, 180, 200, 220, 240].map((y, i) => (
                <line
                  key={i}
                  x1="30"
                  y1={y}
                  x2="370"
                  y2={y}
                  stroke="#e5e7eb"
                  strokeWidth="1"
                />
              ))}

              {[80, 130, 180, 230, 280, 330].map((x, i) => (
                <line
                  key={i}
                  x1={x}
                  y1="40"
                  x2={x}
                  y2="260"
                  stroke="#e5e7eb"
                  strokeWidth="1"
                />
              ))}

              {/* Data Cells */}
              <text x="45" y="95" fontSize="8" fill="#000" fontWeight="600">
                Lead ID
              </text>
              <text x="95" y="95" fontSize="8" fill="#000" fontWeight="600">
                Source
              </text>
              <text x="145" y="95" fontSize="8" fill="#000" fontWeight="600">
                Status
              </text>
              <text x="195" y="95" fontSize="8" fill="#000" fontWeight="600">
                CAC
              </text>
              <text x="245" y="95" fontSize="8" fill="#000" fontWeight="600">
                LTV
              </text>
              <text x="295" y="95" fontSize="8" fill="#000" fontWeight="600">
                ROI
              </text>

              {/* Sample Data */}
              <text x="50" y="115" fontSize="7" fill="#5e5e5f">
                L001
              </text>
              <text x="95" y="115" fontSize="7" fill="#5e5e5f">
                Google
              </text>
              <text x="145" y="115" fontSize="7" fill="#5e5e5f">
                Converted
              </text>
              <text x="200" y="115" fontSize="7" fill="#5e5e5f">
                ₹450
              </text>
              <text x="250" y="115" fontSize="7" fill="#5e5e5f">
                ₹2,400
              </text>
              <text x="300" y="115" fontSize="7" fill="#5e5e5f">
                5.3x
              </text>

              <text x="50" y="135" fontSize="7" fill="#5e5e5f">
                L002
              </text>
              <text x="95" y="135" fontSize="7" fill="#5e5e5f">
                Facebook
              </text>
              <text x="145" y="135" fontSize="7" fill="#5e5e5f">
                Qualified
              </text>
              <text x="200" y="135" fontSize="7" fill="#5e5e5f">
                ₹320
              </text>
              <text x="250" y="135" fontSize="7" fill="#5e5e5f">
                ₹1,800
              </text>
              <text x="300" y="135" fontSize="7" fill="#5e5e5f">
                5.6x
              </text>

              {/* Formula Bar */}
              <rect
                x="30"
                y="15"
                width="340"
                height="20"
                fill="#f3f4f6"
                stroke="#5e5e5f"
                strokeWidth="1"
                rx="4"
              />
              <text x="35" y="28" fontSize="9" fill="#5e5e5f">
                =SUMIF(C:C,"Converted",E:E)/COUNTIF(C:C,"Converted")
              </text>

              {/* Chart Area */}
              <rect
                x="250"
                y="160"
                width="110"
                height="90"
                fill="#f8f9fa"
                stroke="#5e5e5f"
                strokeWidth="1"
                rx="4"
              />

              {/* Mini Chart */}
              <text
                x="305"
                y="175"
                fontSize="8"
                fill="#5e5e5f"
                textAnchor="middle"
                fontWeight="600"
              >
                CAC vs LTV
              </text>

              {/* Bar Chart */}
              <rect x="260" y="200" width="15" height="30" fill="#5e5e5f" />
              <rect x="280" y="190" width="15" height="40" fill="#5e5e5f" />
              <rect x="300" y="180" width="15" height="50" fill="#5e5e5f" />
              <rect x="320" y="195" width="15" height="35" fill="#5e5e5f" />
              <rect x="340" y="185" width="15" height="45" fill="#5e5e5f" />

              {/* Pivot Table Indicator */}
              <rect
                x="40"
                y="160"
                width="80"
                height="80"
                fill="#f8f9fa"
                stroke="#5e5e5f"
                strokeWidth="1"
                rx="4"
              />
              <text
                x="80"
                y="175"
                fontSize="8"
                fill="#5e5e5f"
                textAnchor="middle"
                fontWeight="600"
              >
                Pivot Summary
              </text>
              <text x="45" y="190" fontSize="7" fill="#5e5e5f">
                Total Leads: 247
              </text>
              <text x="45" y="205" fontSize="7" fill="#5e5e5f">
                Converted: 89
              </text>
              <text x="45" y="220" fontSize="7" fill="#5e5e5f">
                Avg CAC: ₹385
              </text>
              <text x="45" y="235" fontSize="7" fill="#5e5e5f">
                Avg LTV: ₹2,100
              </text>

              {/* Function Icons */}
              <circle cx="350" cy="90" r="8" fill="#5e5e5f" opacity="0.2" />
              <text
                x="350"
                y="94"
                fontSize="8"
                fill="#5e5e5f"
                textAnchor="middle"
                fontWeight="600"
              >
                Σ
              </text>
            </svg>
          </div>

          {/* Skill Explanation */}
          <div className="prose prose-lg max-w-none mb-16">
            <h2 className="text-2xl sm:text-3xl font-light text-black mb-6">
              What is Excel & Google Sheets Mastery?
            </h2>
            <div className="space-y-6 text-rich-gray leading-relaxed">
              <p>
                Excel and Google Sheets mastery goes far beyond basic
                calculations—it's about transforming raw data into actionable
                business intelligence through advanced formulas, pivot tables,
                automated dashboards, and forecasting models. I leverage these
                powerful platforms for data cleaning, complex analysis, and
                creating dynamic reports that update in real-time.
              </p>
              <p>
                My approach combines technical expertise with business acumen,
                utilizing advanced functions like VLOOKUP, INDEX-MATCH, array
                formulas, and VBA automation to streamline workflows and
                eliminate manual errors. From lead management systems to
                financial forecasting models, I create solutions that save time
                while providing deeper insights into business performance.
              </p>
            </div>
          </div>

          {/* Project Example */}
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 sm:p-12 mb-16">
            <h2 className="text-2xl sm:text-3xl font-light text-black mb-6">
              Featured Project
            </h2>
            <h3 className="text-xl font-semibold text-black mb-4">
              "Lead Management & CAC/LTV Analysis System"
            </h3>

            <div className="space-y-6 text-rich-gray leading-relaxed">
              <p>
                <strong className="text-black">Challenge:</strong> A growing
                SaaS startup needed a comprehensive system to track leads across
                multiple channels, calculate acquisition costs, and predict
                customer lifetime value to optimize their marketing spend and
                sales processes.
              </p>

              <p>
                <strong className="text-black">Solution:</strong> Developed an
                integrated Excel and Google Sheets system that automatically
                imports lead data from multiple sources, calculates CAC and LTV
                metrics in real-time, and generates dynamic reports for
                stakeholder review. The system included automated data
                validation, pivot table dashboards, and forecasting models.
              </p>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-8">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-black mb-1">₹385</div>
                  <div className="text-sm text-rich-gray">Average CAC</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-black mb-1">
                    ₹2,100
                  </div>
                  <div className="text-sm text-rich-gray">Average LTV</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-black mb-1">5.4x</div>
                  <div className="text-sm text-rich-gray">LTV:CAC Ratio</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-black mb-1">36%</div>
                  <div className="text-sm text-rich-gray">Conversion Rate</div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 my-6">
                <h4 className="font-semibold text-black mb-3">
                  System Features & Capabilities:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-black mb-2">
                      Data Management:
                    </h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Automated lead import from 5+ sources</li>
                      <li>• Real-time data validation & cleaning</li>
                      <li>• Duplicate detection & removal</li>
                      <li>• Lead scoring algorithm</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-black mb-2">
                      Analytics & Reporting:
                    </h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Dynamic CAC/LTV calculations</li>
                      <li>• Channel performance analysis</li>
                      <li>• Cohort analysis & retention rates</li>
                      <li>• 12-month revenue forecasting</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p>
                <strong className="text-black">Impact:</strong> The system
                reduced manual data processing time by 75%, improved lead
                tracking accuracy by 90%, and enabled data-driven decisions that
                increased marketing ROI by 42%. The automated reporting saved 15
                hours per week of manual analysis work.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition-transform duration-200">
                <FileSpreadsheet size={16} />
                <span>View Excel Template</span>
              </button>
              <button className="flex items-center space-x-2 border-2 border-rich-gray text-rich-gray px-6 py-3 rounded-full hover:bg-rich-gray hover:text-white transition-colors duration-200">
                <Download size={16} />
                <span>Download Calculator</span>
              </button>
            </div>
          </div>

          {/* Key Capabilities */}
          <div className="mb-16">
            <h3 className="text-2xl font-light text-black mb-8 text-center">
              Core Capabilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-rich-gray">📊</span>
                </div>
                <h4 className="font-medium text-black mb-2">Data Analysis</h4>
                <p className="text-sm text-rich-gray">
                  Advanced formulas and pivot tables
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-rich-gray">🤖</span>
                </div>
                <h4 className="font-medium text-black mb-2">Automation</h4>
                <p className="text-sm text-rich-gray">
                  VBA macros and Google Scripts
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-rich-gray">📈</span>
                </div>
                <h4 className="font-medium text-black mb-2">Forecasting</h4>
                <p className="text-sm text-rich-gray">
                  Predictive models and scenarios
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-rich-gray">🎨</span>
                </div>
                <h4 className="font-medium text-black mb-2">Dashboards</h4>
                <p className="text-sm text-rich-gray">
                  Interactive visual reports
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
                "Microsoft Excel",
                "Google Sheets",
                "VBA",
                "Google Apps Script",
                "Pivot Tables",
                "Advanced Formulas",
                "Data Validation",
                "Conditional Formatting",
                "VLOOKUP/XLOOKUP",
                "Power Query",
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
