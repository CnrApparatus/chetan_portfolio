import { Home, FolderOpen, Briefcase, FileText, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "HOME", path: "/" },
    { icon: FolderOpen, label: "PROJECTS", path: "/projects" },
    { icon: Briefcase, label: "SERVICES", path: "/services" },
    { icon: FileText, label: "BLOG", path: "/blog" },
    { icon: Mail, label: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-white/80 backdrop-blur-md border-b border-black/10">
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-black">Cnr.</div>

          <div className="flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-black text-white"
                      : "bg-rich-gray text-white hover:bg-black hover:scale-105"
                  }`}
                >
                  <Icon size={16} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
