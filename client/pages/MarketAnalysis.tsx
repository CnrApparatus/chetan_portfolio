import {
  ArrowLeft,
  ExternalLink,
  Download,
  TrendingUp,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function MarketAnalysis() {
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
              Market & Sales Analysis
            </h1>
            <p className="text-lg text-rich-gray max-w-2xl mx-auto">
              Uncovering market opportunities and optimizing sales performance
              through data-driven insights
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
              {/* Main Chart Background */}
              <rect
                x="50"
                y="40"
                width="350"
                height="220"
                rx="8"
                fill="white"
                stroke="#5e5e5f"
                strokeWidth="2"
              />

              {/* Title */}
              <text
                x="225"
                y="25"
                fontSize="14"
                fill="#000"
                textAnchor="middle"
                fontWeight="600"
              >
                Sales Performance & Market Growth
              </text>

              {/* Y-axis */}
              <line
                x1="70"
                y1="60"
                x2="70"
                y2="240"
                stroke="#5e5e5f"
                strokeWidth="2"
              />

              {/* X-axis */}
              <line
                x1="70"
                y1="240"
                x2="380"
                y2="240"
                stroke="#5e5e5f"
                strokeWidth="2"
              />

              {/* Y-axis labels */}
              <text x="65" y="70" fontSize="8" fill="#5e5e5f" textAnchor="end">
                100M
              </text>
              <text x="65" y="105" fontSize="8" fill="#5e5e5f" textAnchor="end">
                75M
              </text>
              <text x="65" y="140" fontSize="8" fill="#5e5e5f" textAnchor="end">
                50M
              </text>
              <text x="65" y="175" fontSize="8" fill="#5e5e5f" textAnchor="end">
                25M
              </text>
              <text x="65" y="210" fontSize="8" fill="#5e5e5f" textAnchor="end">
                0
              </text>

              {/* X-axis labels */}
              <text
                x="100"
                y="255"
                fontSize="8"
                fill="#5e5e5f"
                textAnchor="middle"
              >
                Q1
              </text>
              <text
                x="170"
                y="255"
                fontSize="8"
                fill="#5e5e5f"
                textAnchor="middle"
              >
                Q2
              </text>
              <text
                x="240"
                y="255"
                fontSize="8"
                fill="#5e5e5f"
                textAnchor="middle"
              >
                Q3
              </text>
              <text
                x="310"
                y="255"
                fontSize="8"
                fill="#5e5e5f"
                textAnchor="middle"
              >
                Q4
              </text>

              {/* Market Size Area Chart */}
              <path
                d="M 70 200 Q 100 180 130 170 Q 170 150 200 140 Q 240 120 270 110 Q 310 100 350 90 L 350 240 L 70 240 Z"
                fill="#5e5e5f"
                opacity="0.1"
              />

              {/* Sales Growth Line */}
              <path
                d="M 70 220 Q 100 200 130 185 Q 170 160 200 145 Q 240 125 270 115 Q 310 105 350 95"
                fill="none"
                stroke="#5e5e5f"
                strokeWidth="3"
              />

              {/* Competition Line */}
              <path
                d="M 70 210 Q 100 195 130 180 Q 170 165 200 155 Q 240 140 270 130 Q 310 125 350 120"
                fill="none"
                stroke="#5e5e5f"
                strokeWidth="2"
                strokeDasharray="5,5"
                opacity="0.7"
              />

              {/* Data Points */}
              <circle cx="100" cy="200" r="3" fill="#5e5e5f" />
              <circle cx="130" cy="185" r="3" fill="#5e5e5f" />
              <circle cx="200" cy="145" r="3" fill="#5e5e5f" />
              <circle cx="270" cy="115" r="3" fill="#5e5e5f" />
              <circle cx="350" cy="95" r="3" fill="#5e5e5f" />

              {/* Growth Arrow */}
              <path
                d="M 320 130 L 340 110 L 330 100 M 340 110 L 330 120"
                stroke="#5e5e5f"
                strokeWidth="2"
                fill="none"
              />
              <text
                x="345"
                y="105"
                fontSize="9"
                fill="#5e5e5f"
                fontWeight="600"
              >
                +47%
              </text>

              {/* Market Share Pie Chart */}
              <circle
                cx="350"
                cy="180"
                r="30"
                fill="none"
                stroke="#5e5e5f"
                strokeWidth="2"
              />

              {/* Pie segments */}
              <path
                d="M 350 150 A 30 30 0 0 1 370 200 L 350 180 Z"
                fill="#5e5e5f"
                opacity="0.8"
              />
              <path
                d="M 370 200 A 30 30 0 0 1 330 200 L 350 180 Z"
                fill="#5e5e5f"
                opacity="0.5"
              />
              <path
                d="M 330 200 A 30 30 0 0 1 350 150 L 350 180 Z"
                fill="#5e5e5f"
                opacity="0.2"
              />

              <text
                x="350"
                y="225"
                fontSize="8"
                fill="#5e5e5f"
                textAnchor="middle"
                fontWeight="600"
              >
                Market Share
              </text>

              {/* KPI Cards */}
              <rect
                x="80"
                y="60"
                width="60"
                height="35"
                rx="4"
                fill="white"
                stroke="#5e5e5f"
                strokeWidth="1"
              />
              <text
                x="110"
                y="75"
                fontSize="8"
                fill="#5e5e5f"
                textAnchor="middle"
              >
                ROAS
              </text>
              <text
                x="110"
                y="88"
                fontSize="12"
                fill="#000"
                textAnchor="middle"
                fontWeight="600"
              >
                4.2x
              </text>

              <rect
                x="150"
                y="60"
                width="60"
                height="35"
                rx="4"
                fill="white"
                stroke="#5e5e5f"
                strokeWidth="1"
              />
              <text
                x="180"
                y="75"
                fontSize="8"
                fill="#5e5e5f"
                textAnchor="middle"
              >
                Conv. Rate
              </text>
              <text
                x="180"
                y="88"
                fontSize="12"
                fill="#000"
                textAnchor="middle"
                fontWeight="600"
              >
                12.8%
              </text>

              <rect
                x="220"
                y="60"
                width="60"
                height="35"
                rx="4"
                fill="white"
                stroke="#5e5e5f"
                strokeWidth="1"
              />
              <text
                x="250"
                y="75"
                fontSize="8"
                fill="#5e5e5f"
                textAnchor="middle"
              >
                CAC
              </text>
              <text
                x="250"
                y="88"
                fontSize="12"
                fill="#000"
                textAnchor="middle"
                fontWeight="600"
              >
                ₹289
              </text>

              {/* Legend */}
              <rect
                x="70"
                y="100"
                width="90"
                height="40"
                rx="4"
                fill="white"
                stroke="#5e5e5f"
                strokeWidth="1"
              />
              <line
                x1="80"
                y1="115"
                x2="95"
                y2="115"
                stroke="#5e5e5f"
                strokeWidth="3"
              />
              <text x="100" y="118" fontSize="8" fill="#5e5e5f">
                Our Sales
              </text>
              <line
                x1="80"
                y1="130"
                x2="95"
                y2="130"
                stroke="#5e5e5f"
                strokeWidth="2"
                strokeDasharray="3,3"
              />
              <text x="100" y="133" fontSize="8" fill="#5e5e5f">
                Competition
              </text>

              {/* Trend Indicators */}
              <text
                x="130"
                y="170"
                fontSize="10"
                fill="#000"
                fontWeight="600"
                transform="rotate(-15 130 170)"
              >
                ↗ +23%
              </text>
              <text
                x="200"
                y="130"
                fontSize="10"
                fill="#000"
                fontWeight="600"
                transform="rotate(-20 200 130)"
              >
                ↗ +35%
              </text>
            </svg>
          </div>

          {/* Skill Explanation */}
          <div className="prose prose-lg max-w-none mb-16">
            <h2 className="text-2xl sm:text-3xl font-light text-black mb-6">
              What is Market & Sales Analysis?
            </h2>
            <div className="space-y-6 text-rich-gray leading-relaxed">
              <p>
                Market & Sales Analysis is the strategic practice of examining
                market dynamics, competitor behavior, and sales performance to
                identify growth opportunities and optimize revenue generation.
                By analyzing market trends, customer behavior, and competitive
                positioning, I help businesses make informed decisions that
                drive sustainable growth and competitive advantage.
              </p>
              <p>
                My approach combines quantitative analysis with market
                intelligence, utilizing tools like Google Analytics, CRM data,
                and competitive research platforms to uncover insights that
                inform pricing strategies, campaign optimization, and market
                expansion plans. From identifying underserved market segments to
                optimizing conversion funnels, every analysis is designed to
                translate data into actionable business strategies.
              </p>
            </div>
          </div>

          {/* Project Example */}
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 sm:p-12 mb-16">
            <h2 className="text-2xl sm:text-3xl font-light text-black mb-6">
              Featured Project
            </h2>
            <h3 className="text-xl font-semibold text-black mb-4">
              "Competitive Analysis & Campaign Optimization - Marketing
              Internship"
            </h3>

            <div className="space-y-6 text-rich-gray leading-relaxed">
              <p>
                <strong className="text-black">Challenge:</strong> During my
                marketing internship, I was tasked with analyzing market
                competition and campaign performance to identify opportunities
                for improving customer acquisition and reducing marketing spend
                while maintaining growth targets.
              </p>

              <p>
                <strong className="text-black">Solution:</strong> Conducted
                comprehensive market research using Google Analytics, Apollo for
                lead intelligence, and competitive analysis tools to map the
                competitive landscape, analyze customer acquisition funnels, and
                optimize campaign performance across multiple channels.
              </p>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-8">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-black mb-1">47%</div>
                  <div className="text-sm text-rich-gray">Revenue Growth</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-black mb-1">23%</div>
                  <div className="text-sm text-rich-gray">CAC Reduction</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-black mb-1">4.2x</div>
                  <div className="text-sm text-rich-gray">ROAS Achieved</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-black mb-1">15%</div>
                  <div className="text-sm text-rich-gray">Market Share</div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 my-6">
                <h4 className="font-semibold text-black mb-3">
                  Analysis & Key Findings:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-black mb-2">
                      Competitive Intelligence:
                    </h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Identified 3 key competitor pricing gaps</li>
                      <li>• Mapped competitor customer journey paths</li>
                      <li>• Analyzed competitor content strategies</li>
                      <li>• Benchmarked feature comparisons</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-black mb-2">
                      Campaign Optimization:
                    </h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Google Ads performance analysis</li>
                      <li>• Social media ROI optimization</li>
                      <li>• Email campaign A/B testing</li>
                      <li>• Landing page conversion analysis</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h5 className="font-medium text-black mb-2">
                    Tools & Platforms Used:
                  </h5>
                  <ul className="space-y-1 text-sm text-rich-gray">
                    <li>• Google Analytics & GTM</li>
                    <li>• Apollo for lead intelligence</li>
                    <li>• SEMrush for competitive analysis</li>
                    <li>• Facebook Business Manager</li>
                    <li>• Google Ads & keyword analysis</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h5 className="font-medium text-black mb-2">
                    Strategic Insights:
                  </h5>
                  <ul className="space-y-1 text-sm text-rich-gray">
                    <li>• Untapped market segment identified</li>
                    <li>• Optimal bid strategies developed</li>
                    <li>• Customer persona refinement</li>
                    <li>• Cross-channel attribution model</li>
                    <li>• Competitive positioning strategy</li>
                  </ul>
                </div>
              </div>

              <p>
                <strong className="text-black">Impact:</strong> The analysis led
                to a 47% increase in qualified leads, 23% reduction in customer
                acquisition cost, and identification of a new market segment
                that contributed 18% of total revenue. The competitive insights
                informed product positioning that improved conversion rates by
                35%.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition-transform duration-200">
                <Target size={16} />
                <span>View Campaign Analysis</span>
              </button>
              <button className="flex items-center space-x-2 border-2 border-rich-gray text-rich-gray px-6 py-3 rounded-full hover:bg-rich-gray hover:text-white transition-colors duration-200">
                <Download size={16} />
                <span>Download Report</span>
              </button>
            </div>
          </div>

          {/* Analysis Framework */}
          <div className="mb-16">
            <h3 className="text-2xl font-light text-black mb-8 text-center">
              My Analysis Framework
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-rich-gray">🔍</span>
                </div>
                <h4 className="font-medium text-black mb-2">Market Research</h4>
                <p className="text-sm text-rich-gray">
                  Competitive landscape and trend analysis
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-rich-gray">📊</span>
                </div>
                <h4 className="font-medium text-black mb-2">Data Collection</h4>
                <p className="text-sm text-rich-gray">
                  Multi-source data gathering and validation
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-rich-gray">⚡</span>
                </div>
                <h4 className="font-medium text-black mb-2">
                  Performance Analysis
                </h4>
                <p className="text-sm text-rich-gray">
                  Campaign optimization and ROI analysis
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-rich-gray">🎯</span>
                </div>
                <h4 className="font-medium text-black mb-2">
                  Strategic Recommendations
                </h4>
                <p className="text-sm text-rich-gray">
                  Actionable insights and growth strategies
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
                "Google Analytics",
                "Apollo",
                "SEMrush",
                "Google Ads",
                "Facebook Business",
                "Competitive Analysis",
                "Market Research",
                "A/B Testing",
                "Statistical Analysis",
                "ROI Optimization",
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
