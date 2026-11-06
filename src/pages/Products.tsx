import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { products, categories } from "../data/products";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const { t, language } = useLanguage();

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-dark text-white text-center">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{t("products.title")}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t("products.subtitle")}
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-black border-b border-gray-800">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === "all"
                  ? "bg-primary text-white shadow-lg"
                  : "bg-gray-900 text-gray-300 hover:bg-gray-800"
              }`}
            >
              {t("products.filter.all")}
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-white shadow-lg"
                    : "bg-gray-900 text-gray-300 hover:bg-gray-800"
                }`}
              >
                {category.label[language]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="section-padding bg-gray-900">
        <div className="container-custom">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-2xl text-gray-400">{t("products.empty")}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">{t("products.cta.title")}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            {t("products.cta.subtitle")}
          </p>
          <Link
            to="/contact"
            className="btn-primary text-lg bg-primary hover:bg-primary-dark"
          >
            {t("products.cta.button")}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
