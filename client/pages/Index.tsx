import { useState } from "react";
import { Download, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

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
      <section className="pt-32 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-sm text-rich-gray uppercase tracking-wider">
                  Business & Data Analyst
                </p>
                <h1 className="text-6xl lg:text-7xl font-light text-rich-gray leading-tight">
                  Hello I'm
                  <br />
                  <span className="text-black font-normal">
                    Chetan Rajeshirke
                  </span>
                </h1>
              </div>

              <p className="text-lg text-rich-gray max-w-lg leading-relaxed">
                "I turn raw data into clear, actionable insights – with clean
                dashboards and a curious mind."
              </p>

              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition-transform duration-200">
                  <Download size={16} />
                  <span>Download CV</span>
                </button>

                <div className="flex items-center space-x-3">
                  <button className="p-3 rounded-full border border-rich-gray hover:bg-rich-gray hover:text-white transition-colors duration-200">
                    <Github size={20} />
                  </button>
                  <button className="p-3 rounded-full border border-rich-gray hover:bg-rich-gray hover:text-white transition-colors duration-200">
                    <Linkedin size={20} />
                  </button>
                  <button className="p-3 rounded-full border border-rich-gray hover:bg-rich-gray hover:text-white transition-colors duration-200">
                    <Mail size={20} />
                  </button>
                  <button className="p-3 rounded-full border border-rich-gray hover:bg-rich-gray hover:text-white transition-colors duration-200">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-black">
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
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Triangle shapes container */}
            <div className="flex items-center justify-center space-x-8">
              {/* Left Triangle */}
              <div className="relative">
                <svg
                  width="400"
                  height="250"
                  viewBox="0 0 400 250"
                  className="border-2 border-black rounded-2xl bg-white"
                >
                  <path
                    d="M 50 200 L 350 50 L 350 200 Z"
                    fill="none"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <text x="70" y="180" className="fill-black text-sm font-mono">
                    <tspan x="70" dy="0">
                      Finance
                    </tspan>
                    <tspan x="70" dy="15">
                      &
                    </tspan>
                    <tspan x="70" dy="15">
                      Market Analysis
                    </tspan>
                  </text>
                </svg>
              </div>

              {/* Right Triangle */}
              <div className="relative">
                <svg
                  width="400"
                  height="250"
                  viewBox="0 0 400 250"
                  className="border-2 border-black rounded-2xl bg-white"
                >
                  <path
                    d="M 50 50 L 50 200 L 350 200 Z"
                    fill="none"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <text x="280" y="80" className="fill-black text-sm font-mono">
                    <tspan x="280" dy="0">
                      Marketing
                    </tspan>
                    <tspan x="280" dy="15">
                      &
                    </tspan>
                    <tspan x="280" dy="15">
                      Sales Analysis
                    </tspan>
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.id}
                className={`relative p-8 border-2 border-dashed transition-all duration-300 cursor-pointer ${
                  pressedSkill === index
                    ? "border-black bg-black text-white scale-95"
                    : hoveredSkill === index
                      ? "border-black bg-gray-50 scale-105"
                      : "border-rich-gray hover:border-black"
                }`}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
                onMouseDown={() => setPressedSkill(index)}
                onMouseUp={() => setPressedSkill(null)}
              >
                <div className="space-y-4">
                  <div
                    className={`text-4xl font-light ${pressedSkill === index ? "text-white" : "text-rich-gray"}`}
                  >
                    {skill.id}
                  </div>
                  <h3
                    className={`text-xl font-medium leading-tight ${pressedSkill === index ? "text-white" : "text-black"}`}
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
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-black mb-4">
              Latest Insights
            </h2>
            <p className="text-rich-gray">
              Trending topics in business analytics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-rich-gray">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-medium text-black group-hover:text-rich-gray transition-colors duration-200">
                    {post.title}
                  </h3>

                  <p className="text-rich-gray leading-relaxed">
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
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* About Section */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-light text-black mb-6">
                  About Me
                </h2>
                <div className="space-y-4 text-rich-gray leading-relaxed">
                  <p>
                    I'm a passionate Business & Data Analyst with a focus on
                    transforming complex data into actionable business insights.
                    With expertise in Power BI, Excel, and market analysis, I
                    help organizations make informed decisions.
                  </p>
                  <p>
                    My approach combines technical proficiency with business
                    acumen, ensuring that every dashboard and report I create
                    directly contributes to strategic objectives and operational
                    efficiency.
                  </p>
                  <p>
                    When I'm not diving deep into data, I enjoy exploring the
                    latest trends in business intelligence and sharing knowledge
                    through writing and consulting.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-medium text-black mb-6">
                Let's Connect
              </h3>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-rich-gray mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-rich-gray mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-rich-gray mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-rich-gray transition-colors duration-200">
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
