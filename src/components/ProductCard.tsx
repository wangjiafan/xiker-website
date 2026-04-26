import { useState } from "react";
import { Product } from "../data/products";
import { useLanguage } from "../contexts/LanguageContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Get all images: main image + additional images
  const allImages = [product.imageUrl, ...(product.imageUrls || [])];
  const hasMultipleImages = allImages.length > 1;
  
  // Get translated category name
  const getCategoryName = (category: string) => {
    switch(category) {
      case "mouse": return t("products.filter.mice");
      case "keyboard": return t("products.filter.keyboards");
      case "headphone": return t("products.filter.headphones");
      default: return category;
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };
  
  return (
    <div className="bg-black rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-800">
      <div className="relative overflow-hidden bg-gray-900">
        <img
          src={allImages[currentImageIndex]}
          alt={`${product.name} - Image ${currentImageIndex + 1}`}
          className="w-full h-56 object-contain p-4 hover:scale-105 transition-transform duration-300"
        />
        
        {/* Image Navigation Arrows */}
        {hasMultipleImages && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              aria-label="Previous image"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              aria-label="Next image"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
        
        {/* Image Dots Indicator */}
        {hasMultipleImages && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
            {allImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImageIndex ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        )}
        
        <div className="absolute top-4 right-4 bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full">
          {getCategoryName(product.category)}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3">{product.name}</h3>
        <p className="text-gray-400 mb-4 leading-relaxed">{product.description}</p>
        <div className="mb-4">
          <h4 className="font-semibold text-white mb-2">{t("products.keyFeatures")}</h4>
          <ul className="space-y-1">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-400">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
