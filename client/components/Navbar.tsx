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
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          <div className="text-xl sm:text-2xl font-bold text-black">Cnr.</div>

          <div className="flex items-center space-x-2 sm:space-x-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                location.pathname === item.path && item.path !== "/";
              const isHovered = hoveredItem === (item.section || item.path);
              const isPressed = pressedItem === (item.section || item.path);

              return (
                <Link
                  key={item.section || item.path}
                  to={item.path}
                  onClick={() => handleClick(item)}
                  onMouseEnter={() => setHoveredItem(item.section || item.path)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onMouseDown={() => setPressedItem(item.section || item.path)}
                  onMouseUp={() => setPressedItem(null)}
                  className={`flex items-center justify-center rounded-full text-sm font-medium transition-all duration-300 w-12 h-12 border border-rich-gray ${
                    isActive
                      ? "bg-black text-white border-black"
                      : isPressed
                        ? "bg-rich-gray text-white border-rich-gray"
                        : isHovered
                          ? "bg-black text-white border-black"
                          : "bg-transparent text-rich-gray hover:bg-black hover:text-white hover:border-black active:bg-rich-gray active:border-rich-gray"
                  }`}
                >
                  <Icon size={16} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
