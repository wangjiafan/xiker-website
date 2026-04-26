import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, toggleLanguage, language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: t("nav.home") },
    { path: "/about", label: t("nav.about") },
    { path: "/products", label: t("nav.products") },
    { path: "/contact", label: t("nav.contact") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-dark shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src="/images/logo.png" 
            alt="Xiker Logo" 
            className="w-10 h-10 object-contain"
          />
          <span
            className={`font-bold text-lg ${
              isScrolled ? "text-white" : "text-white"
            }`}
          >
            Xiker Innovation
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition-colors ${
                isScrolled ? "text-gray-300 hover:text-primary" : "text-white hover:text-gray-300"
              } ${location.pathname === link.path ? "text-primary" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-1 text-gray-300 hover:text-primary transition-colors"
            aria-label="Toggle language"
          >
            <Globe size={20} />
            <span className="text-sm font-medium">{language === "en" ? "中文" : "EN"}</span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${isScrolled ? "text-white" : "text-white"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-dark shadow-lg absolute top-full left-0 right-0">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-6 py-3 font-medium text-gray-300 hover:bg-gray-800 ${
                  location.pathname === link.path ? "text-primary" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                toggleLanguage();
                setIsMobileMenuOpen(false);
              }}
              className="px-6 py-3 font-medium text-gray-300 hover:bg-gray-800 text-left flex items-center space-x-2"
            >
              <Globe size={20} />
              <span>{language === "en" ? "切换到中文" : "Switch to English"}</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
