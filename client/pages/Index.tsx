import { useState } from "react";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  TrendingUp,
  BarChart3,
  PieChart,
  LineChart,
} from "lucide-react";

export default function Index() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [pressedSkill, setPressedSkill] = useState<number | null>(null);

  const skills = [
    {
      id: "01",
      title: "Power BI Dashboard Design",
      description:
        "Custom, interactive dashboards for actionable business insights.",
    },
    {
      id: "02",
      title: "Data Visualisation & Reporting",
      description: "Turning raw numbers into simple, clear visuals & insights",
    },
    {
      id: "03",
      title: "Microsoft Excel & Google Sheets",
      description: "Data cleaning, reporting & daily data management",
    },
    {
      id: "04",
      title: "Market & Sales Analysis",
      description:
        "Understanding customer, sales & market trends to help businesses grow",
    },
  ];

  const projects = [
    {
      category: "Finance & Market Analysis",
      icon: TrendingUp,
      items: [
        "Market Trend Analysis Dashboard",
        "Financial Performance Tracking",
        "Investment Portfolio Analytics",
        "Risk Assessment Models",
      ],
    },
    {
      category: "Marketing & Sales Analysis",
      icon: BarChart3,
      items: [
        "Customer Behavior Analytics",
        "Sales Performance Dashboard",
        "Campaign ROI Analysis",
        "Lead Generation Tracking",
      ],
    },
  ];

  const blogPosts = [
    {
      title: "The Future of Business Intelligence in Small Enterprises",
      excerpt:
        "How modern BI tools are democratizing data analysis for small businesses",
      date: "Dec 2023",
      readTime: "5 min read",
    },
    {
      title: "Data-Driven Decision Making: A Practical Guide",
      excerpt:
        "Transform your business decisions with actionable data insights",
      date: "Nov 2023",
      readTime: "7 min read",
    },
    {
      title: "Excel vs Power BI: When to Use Which Tool",
      excerpt: "A comprehensive comparison for business analysts",
      date: "Oct 2023",
      readTime: "6 min read",
    },
  ];

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <div className="space-y-2">
                <p className="text-xs sm:text-sm text-rich-gray uppercase tracking-wider">
                  Business & Data Analyst
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-rich-gray leading-tight flex flex-col gap-5">
                  <span>Hello I'm</span>
                  <span className="text-black font-normal mt-1">
                    Chetan Rajeshirke
                  </span>
                </h1>
              </div>

              <p className="text-sm text-rich-gray max-w-lg leading-relaxed mx-auto lg:mx-0">
                "I turn raw data into clear, actionable insights – with clean
                dashboards and a curious mind."
              </p>

              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
                <button className="flex items-center space-x-2 bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:scale-105 transition-transform duration-200 text-sm sm:text-base">
                  <Download size={16} />
                  <span>Download CV</span>
                </button>

                <div className="flex items-center space-x-3">
                  <button className="p-2 sm:p-3 rounded-full border border-rich-gray hover:bg-black hover:text-white active:bg-rich-gray transition-colors duration-200">
                    <Github size={18} />
                  </button>
                  <button className="p-2 sm:p-3 rounded-full border border-rich-gray hover:bg-black hover:text-white active:bg-rich-gray transition-colors duration-200">
                    <Linkedin size={18} />
                  </button>
                  <button className="p-2 sm:p-3 rounded-full border border-rich-gray hover:bg-black hover:text-white active:bg-rich-gray transition-colors duration-200">
                    <Mail size={18} />
                  </button>
                  <button className="p-2 sm:p-3 rounded-full border border-rich-gray hover:bg-black hover:text-white active:bg-rich-gray transition-colors duration-200">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden border-4 border-black">
                <img
                  src="https://cdn.builder.io/api/v1/assets/998a06dbc76e4e3a8e4610c963409912/profile-white-photoroom-ed208b?format=webp&width=800"
                  alt="Chetan Rajeshirke"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black mb-4">
              Project Categories
            </h2>
            <p className="text-rich-gray text-base sm:text-lg">
              Specialized analytics solutions for different business needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-gray-200 hover:border-black transition-all duration-300 hover:shadow-xl"
                >
                  <div className="absolute top-6 right-6 text-rich-gray group-hover:text-black transition-colors duration-300">
                    <Icon size={32} />
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium text-black pr-12">
                      {project.category}
                    </h3>

                    <div className="space-y-3">
                      {project.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-center space-x-3 text-rich-gray group-hover:text-black transition-colors duration-300"
                        >
                          <div className="w-2 h-2 bg-rich-gray rounded-full group-hover:bg-black transition-colors duration-300"></div>
                          <span className="text-sm sm:text-base">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.id}
                className={`relative p-6 sm:p-8 transition-all duration-300 cursor-pointer rounded-2xl ${
                  pressedSkill === index
                    ? "bg-black text-white scale-95"
                    : hoveredSkill === index
                      ? "bg-gray-50 scale-105"
                      : "bg-white hover:bg-gray-50"
                }`}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
                onMouseDown={() => setPressedSkill(index)}
                onMouseUp={() => setPressedSkill(null)}
              >
                <div className="space-y-4">
                  <div
                    className={`text-3xl sm:text-4xl font-light ${pressedSkill === index ? "text-white" : "text-rich-gray"}`}
                  >
                    {skill.id}
                  </div>
                  <h3
                    className={`text-lg sm:text-xl font-medium leading-tight ${pressedSkill === index ? "text-white" : "text-black"}`}
                  >
                    {skill.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${pressedSkill === index ? "text-gray-200" : "text-rich-gray"}`}
                  >
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section
        id="blog"
        className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black mb-4">
              Latest Insights
            </h2>
            <p className="text-rich-gray text-base sm:text-lg">
              Trending topics in business analytics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs sm:text-sm text-rich-gray">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-medium text-black group-hover:text-rich-gray transition-colors duration-200 leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-sm sm:text-base text-rich-gray leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-black group-hover:translate-x-2 transition-transform duration-200">
                    <span className="text-sm font-medium">Read more</span>
                    <ExternalLink size={16} className="ml-2" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & About Section */}
      <section
        id="contact"
        className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* About Section */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black mb-4 sm:mb-6">
                  About Me
                </h2>
                <div className="space-y-4 text-rich-gray leading-relaxed text-sm sm:text-base">
                  <p>
                    Standing tall at 6'3", I'm a rapper-turned-self-taught data
                    analyst with a BMS in Marketing. After a year in marketing,
                    sales, and design, I found my real thrill in cleaning messy
                    data and turning it into stories businesses can trust. An AI
                    fanboy at heart, I love learning new tools and building my
                    own website from scratch — just to prove that curiosity can
                    take you anywhere. Hit me up if you're ready to turn raw
                    data into smart decisions.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
              <h3 className="text-xl sm:text-2xl font-medium text-black mb-4 sm:mb-6">
                Let's Connect
              </h3>

              <form className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-medium text-rich-gray mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors duration-200 text-sm sm:text-base"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-rich-gray mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors duration-200 text-sm sm:text-base"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-rich-gray mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors duration-200 text-sm sm:text-base"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-rich-gray mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors duration-200 resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button className="w-full bg-black text-white py-2 sm:py-3 rounded-lg hover:bg-rich-gray transition-colors duration-200 text-sm sm:text-base">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
