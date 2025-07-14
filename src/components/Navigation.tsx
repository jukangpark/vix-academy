interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  const navItems = [
    { id: "home", label: "홈", icon: "🏠" },
    { id: "about", label: "회사소개", icon: "🏢" },
    { id: "services", label: "서비스", icon: "⚙️" },
    { id: "features", label: "특징", icon: "⭐" },
    { id: "contact", label: "문의", icon: "📞" },
  ];

  return (
    <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg border border-gray-200">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onNavigate(item.id)}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group relative ${
                  activeSection === item.id
                    ? "bg-blue-600 text-white shadow-lg scale-110"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800"
                }`}
                title={item.label}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="absolute left-full ml-3 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {item.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
