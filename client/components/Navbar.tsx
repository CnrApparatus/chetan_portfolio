import { Home, FolderOpen, Briefcase, FileText, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export function Navbar() {
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [pressedItem, setPressedItem] = useState<string | null>(null);

  const navItems = [
    { icon: Home, label: "HOME", path: "/", section: "hero" },
    { icon: FolderOpen, label: "PROJECTS", path: "/", section: "projects" },
    { icon: Briefcase, label: "SERVICES", path: "/", section: "skills" },
    { icon: FileText, label: "BLOG", path: "/", section: "blog" },
    { icon: Mail, label: "CONTACT", path: "/", section: "contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = (item: any) => {
    if (location.pathname === "/" && item.section) {
      scrollToSection(item.section);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-white/80 backdrop-blur-md border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="text-lg sm:text-xl font-bold text-black">Cnr.</div>

          <div className="flex items-center space-x-1 sm:space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                location.pathname === item.path && item.path !== "/";
              const isHovered = hoveredItem === item.path;
              const isPressed = pressedItem === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => handleClick(item)}
                  onMouseEnter={() => setHoveredItem(item.path)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onMouseDown={() => setPressedItem(item.path)}
                  onMouseUp={() => setPressedItem(null)}
                  className={`flex items-center overflow-hidden rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-black text-white px-4 sm:px-6 py-2 sm:py-3"
                      : isPressed
                        ? "bg-rich-gray text-white px-4 sm:px-6 py-2 sm:py-3 scale-95"
                        : isHovered
                          ? "bg-black text-white px-4 sm:px-6 py-2 sm:py-3 scale-105"
                          : "bg-rich-gray text-white p-2 sm:p-3 hover:scale-105"
                  }`}
                  style={{
                    width: isHovered || isPressed || isActive ? "auto" : "44px",
                    minWidth:
                      isHovered || isPressed || isActive ? "auto" : "44px",
                  }}
                >
                  <Icon size={16} className="flex-shrink-0" />
                  <span
                    className={`ml-2 whitespace-nowrap transition-all duration-300 ${
                      isHovered || isPressed || isActive
                        ? "opacity-100 max-w-20"
                        : "opacity-0 max-w-0 ml-0"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
