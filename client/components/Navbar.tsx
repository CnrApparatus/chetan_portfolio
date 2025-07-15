import { Home, FolderOpen, Briefcase, FileText } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

// Custom Avatar Icon Component
const AvatarIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="8" r="3" />
    <path d="M6.168 18.849A6 6 0 0 1 12 14a6 6 0 0 1 5.832 4.849" />
  </svg>
);

export function Navbar() {
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [pressedItem, setPressedItem] = useState<string | null>(null);

  const navItems = [
    { icon: Home, label: "HOME", path: "/", section: "hero" },
    { icon: FolderOpen, label: "PROJECTS", path: "/", section: "projects" },
    { icon: Briefcase, label: "SERVICES", path: "/", section: "skills" },
    { icon: FileText, label: "BLOG", path: "/", section: "blog" },
    { icon: AvatarIcon, label: "CONTACT", path: "/", section: "contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbar = document.querySelector("nav");
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const offset = navbarHeight + 40; // Add 40px extra space

      const elementPosition = element.offsetTop - offset;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const handleClick = (item: any) => {
    if (location.pathname === "/") {
      // If already on homepage, scroll to section
      if (item.section) {
        scrollToSection(item.section);
      }
    } else {
      // If on different page, navigate to homepage with hash
      window.location.href = `/#${item.section}`;
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-white/80 backdrop-blur-md border-b border-black/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("contact")}
            className="text-2xl sm:text-3xl font-bold text-black hover:opacity-80 transition-opacity duration-200"
          >
            Cnr<span className="text-rich-gray">.</span>
          </button>

          <div className="flex items-center space-x-3 sm:space-x-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                location.pathname === item.path && item.path !== "/";
              const isHovered = hoveredItem === (item.section || item.path);
              const isPressed = pressedItem === (item.section || item.path);

              return (
                <button
                  key={item.section || item.path}
                  onClick={() => handleClick(item)}
                  onMouseEnter={() => setHoveredItem(item.section || item.path)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onMouseDown={() => setPressedItem(item.section || item.path)}
                  onMouseUp={() => setPressedItem(null)}
                  className={`flex items-center justify-center rounded-full text-base font-medium transition-all duration-300 w-[60px] h-[60px] border-2 border-rich-gray ${
                    isActive
                      ? "bg-black text-white border-black"
                      : isPressed
                        ? "bg-rich-gray text-white border-rich-gray"
                        : isHovered
                          ? "bg-black text-white border-black"
                          : "bg-transparent text-rich-gray hover:bg-black hover:text-white hover:border-black active:bg-rich-gray active:border-rich-gray"
                  }`}
                >
                  <Icon size={20} />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
