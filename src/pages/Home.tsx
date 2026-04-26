import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, ShieldCheck, Headphones, Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Home = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <Lightbulb size={32} className="text-primary" />,
      title: t("home.features.innovation"),
      description: t("home.features.innovationDesc")
    },
    {
      icon: <ShieldCheck size={32} className="text-primary" />,
      title: t("home.features.quality"),
      description: t("home.features.qualityDesc")
    },
    {
      icon: <Headphones size={32} className="text-primary" />,
      title: t("home.features.support"),
      description: t("home.features.supportDesc")
    },
    {
      icon: <Globe size={32} className="text-primary" />,
      title: t("home.features.global"),
      description: t("home.features.globalDesc")
    }
  ];

  const productCategories = [
    {
      name: t("products.filter.mice"),
      description: t("home.products.subtitle"),
      image: "/images/products/mouse-01.png"
    },
    {
      name: t("products.filter.keyboards"),
      description: t("home.products.subtitle"),
      image: "/images/products/keyboard-01.jpg"
    },
    {
      name: t("products.filter.headphones"),
      description: t("home.products.subtitle"),
      image: "/images/products/GP021.jpg"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-dark text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {t("home.hero.title")}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-300">
            {t("home.hero.subtitle")}
          </p>
          <p className="text-lg mb-12 max-w-3xl mx-auto text-gray-400">
            {t("home.hero.description")}
          </p>
          <Link
            to="/products"
            className="btn-primary bg-primary hover:bg-primary-dark text-white text-lg"
          >
            {t("home.hero.cta")} <ArrowRight className="inline ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">{t("home.about.title")}</h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              {t("home.about.description1")}
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              {t("home.about.description2")}
            </p>
            <Link
              to="/about"
              className="btn-outline border-white text-white hover:bg-white hover:text-black"
            >
              {t("home.about.cta")}
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-gray-900">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-white text-center mb-4">{t("home.products.title")}</h2>
          <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            {t("home.products.subtitle")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <div
                key={index}
                className="bg-black rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-800"
              >
                <div className="w-full h-48 flex items-center justify-center p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-t-xl">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300 drop-shadow-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{category.name}</h3>
                  <p className="text-gray-400 mb-4">{category.description}</p>
                  <Link
                    to="/products"
                    className="text-primary font-semibold hover:text-orange-400 transition-colors"
                  >
                    {t("home.products.viewDetails")} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-white text-center mb-4">{t("home.features.title")}</h2>
          <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            {t("home.features.subtitle")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-xl bg-gray-900 hover:bg-gray-800 transition-colors duration-300 border border-gray-800"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">{t("home.cta.title")}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            {t("home.cta.subtitle")}
          </p>
          <Link
            to="/contact"
            className="btn-primary bg-primary hover:bg-primary-dark text-white text-lg"
          >
            {t("home.cta.button")}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
