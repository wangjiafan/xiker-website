import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/images/logo.png" 
                alt="Xiker Logo" 
                className="w-8 h-8 object-contain"
              />
              <span className="font-bold text-white">Xiker Innovation</span>
            </div>
            <p className="text-gray-400 mb-4">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">{t("footer.quickLinks")}</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-400 hover:text-primary transition-colors">
                {t("nav.home")}
              </Link>
              <Link to="/about" className="text-gray-400 hover:text-primary transition-colors">
                {t("nav.about")}
              </Link>
              <Link to="/products" className="text-gray-400 hover:text-primary transition-colors">
                {t("nav.products")}
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">
                {t("nav.contact")}
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-white mb-4">{t("footer.contactUs")}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="text-primary mt-1" size={18} />
                <a
                  href="mailto:sales01@xiker-tech.com"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  sales01@xiker-tech.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-primary mt-1" size={18} />
                <div className="text-gray-400">
                  <p>Lotus Plaza, Block B, 17th Floor</p>
                  <p>Nantou Street, Nanshan District</p>
                  <p>Shenzhen, China</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Shenzhen Xiker Innovation Technology Co., Ltd. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
