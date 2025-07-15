import { useState, useEffect } from "react";
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
import { Link } from "react-router-dom";

export default function Index() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [pressedSkill, setPressedSkill] = useState<number | null>(null);

  // Handle hash navigation on page load
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const navbar = document.querySelector("nav");
          const navbarHeight = navbar ? navbar.offsetHeight : 0;
          const offset = navbarHeight + 40;
          const elementPosition = element.offsetTop - offset;

          window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, []);

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
    <div className="min-h-screen bg-warm-white relative overflow-hidden">
      {/* Global subtle background pattern */}
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
        <div
          className="absolute bottom-16 right-32 w-12 h-12 border border-rich-gray rounded-full animate-pulse"
          style={{ animationDuration: "5s", animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-8 transform -translate-y-1/2 w-2 h-2 border border-rich-gray rounded-full animate-ping"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-1/4 right-8 w-3 h-3 border border-rich-gray rounded-full animate-ping"
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        ></div>
      </div>
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-20"
      >
        {/* Subtle Background Animation */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-20 left-20 w-32 h-32 rounded-full border border-rich-gray animate-pulse"></div>
          <div
            className="absolute top-40 right-32 w-16 h-16 rounded-full border border-rich-gray animate-bounce"
            style={{ animationDuration: "3s" }}
          ></div>
          <div
            className="absolute bottom-40 left-32 w-24 h-24 rounded-full border border-rich-gray animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 right-20 w-20 h-20 rounded-full border border-rich-gray animate-bounce"
            style={{ animationDuration: "4s", animationDelay: "2s" }}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div
              className="w-40 h-40 border border-rich-gray rounded-full animate-spin"
              style={{ animationDuration: "20s" }}
            ></div>
          </div>
          <div className="absolute top-1/3 right-1/4">
            <div
              className="w-6 h-6 border border-rich-gray rounded-full animate-ping"
              style={{ animationDuration: "2s" }}
            ></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-8">
                <p className="text-[15px] text-rich-gray uppercase tracking-wider ml-1 pb-[-8px] font-semibold">
                  Business & Data Analyst
                </p>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-rich-gray leading-tight">
                  <div
                    className="mb-[10px]"
                    style={{ textShadow: "3px 3px 5px rgba(165, 165, 165, 1)" }}
                  >
                    Hello I'm
                  </div>
                  <div
                    className="text-black"
                    style={{ textShadow: "3px 3px 5px rgba(165, 165, 165, 1)" }}
                  >
                    <b>Chetan Rajeshirke</b>
                  </div>
                </h1>
              </div>

              <p className="text-sm text-rich-gray max-w-lg leading-relaxed mx-auto lg:mx-0">
                "I turn raw data into clear, actionable insights – with clean
                dashboards and a curious mind."
              </p>

              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
                <a
                  href="https://cdn.builder.io/o/assets%2F998a06dbc76e4e3a8e4610c963409912%2F22b6084c55684449982d4259b541e481?alt=media&token=0a226f55-e6e2-4c59-b34d-21743385827f&apiKey=998a06dbc76e4e3a8e4610c963409912"
                  download="Chetan_Rajeshirke_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:scale-105 transition-transform duration-200 text-sm sm:text-base"
                >
                  <Download size={16} />
                  <span>Download CV</span>
                </a>

                <div className="flex items-center space-x-4">
                  <a
                    href="https://github.com/CnrApparatus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-[10px] sm:p-[13px] rounded-full border-2 border-rich-gray hover:bg-black hover:text-white active:bg-rich-gray transition-colors duration-200"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/chetan-rajeshirke-3b129b1bb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-[10px] sm:p-[13px] rounded-full border-2 border-rich-gray hover:bg-black hover:text-white active:bg-rich-gray transition-colors duration-200"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="mailto:chetan.rajeshirke.05@gmail.com"
                    className="p-[10px] sm:p-[13px] rounded-full border-2 border-rich-gray hover:bg-black hover:text-white active:bg-rich-gray transition-colors duration-200"
                  >
                    <Mail size={20} />
                  </a>
                  <a
                    href="https://x.com/Chetan_Raje_05"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-[10px] sm:p-[13px] rounded-full border-2 border-rich-gray hover:bg-black hover:text-white active:bg-rich-gray transition-colors duration-200"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden border-4 border-black">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-200"></div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F998a06dbc76e4e3a8e4610c963409912%2F734dd65c69074a878e21e0504f4d00a6"
                  alt="Chetan Rajeshirke"
                  className="relative z-10 w-full h-full object-cover bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-24"
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
        className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-24"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black mb-4">
              Core Skills
            </h2>
            <p className="text-rich-gray text-base sm:text-lg">
              Specialized expertise in data analytics and business intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {skills.map((skill, index) => {
              const skillPaths = [
                "/skills/power-bi",
                "/skills/data-visualization",
                "/skills/excel-sheets",
                "/skills/market-analysis",
              ];

              return (
                <Link
                  key={skill.id}
                  to={skillPaths[index]}
                  className={`relative p-6 sm:p-8 transition-all duration-300 cursor-pointer rounded-2xl block ${
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
                      <b>{skill.id}</b>
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
                    <div
                      className={`text-xs font-medium ${pressedSkill === index ? "text-gray-300" : "text-rich-gray"}`}
                    >
                      Click to explore →
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section
        id="blog"
        className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-24"
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
  className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 scroll-mt-24"
>
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
      
      {/* About Section */}
      <div className="space-y-6 sm:space-y-8">
        <div className="ml-5 pl-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black mb-11">
            About Me
          </h2>
          <div className="text-rich-gray leading-[3.125rem] text-lg">
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
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/thank-you"
          className="space-y-4 sm:space-y-6"
        >
          {/* Hidden input for Netlify detection */}
          <input type="hidden" name="form-name" value="contact" />

          {/* Honeypot field */}
          <input type="hidden" name="bot-field" />

          <div>
            <label className="block text-sm font-medium text-rich-gray mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors duration-200 text-sm sm:text-base"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-rich-gray mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors duration-200 text-sm sm:text-base"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-rich-gray mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors duration-200 text-sm sm:text-base"
              placeholder="+1 (555) 123-4567"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-rich-gray mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors duration-200 resize-none text-sm sm:text-base"
              placeholder="Tell me about your project..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 sm:py-3 rounded-lg hover:bg-rich-gray transition-colors duration-200 text-sm sm:text-base"
          >
            Send Message
          </button>
        </form>
      </div> {/* End Contact Section */}
  </div> {/* End Max Width Container */}
</section> {/* End Section */}
