import { useState, useRef } from "react";
import { Product, categories } from "../data/products";
import { useLanguage } from "../contexts/LanguageContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { t, language } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const lang = language;

  // Get all images: main image + additional images
  const allImages = [product.imageUrl, ...(product.imageUrls || [])];
  const hasMultipleImages = allImages.length > 1;
  const hasVideo = !!product.videoUrl;

  // 竖版产品图（如麦克风）在方形容器中会被压扁，改用更高的展示区
  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    setIsPortrait(img.naturalHeight > img.naturalWidth * 1.15);
  };

  // Translated category name
  const getCategoryName = (categoryId: string) => {
    const found = categories.find((c) => c.id === categoryId);
    return found ? found.label[lang] : categoryId;
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
    setIsPortrait(false);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    setIsPortrait(false);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Media content: Video (if available) or Image carousel
  const renderMediaContent = () => {
    if (hasVideo) {
      return (
        <div className="relative w-full h-56 bg-gray-900">
          <video
            ref={videoRef}
            src={product.videoUrl}
            className="w-full h-full object-contain"
            playsInline
            loop
            muted
            poster={allImages[0]}
            onClick={togglePlay}
          />
          {/* Play/Pause overlay button */}
          {!isPlaying && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors cursor-pointer group"
              aria-label={t("products.playVideo")}
            >
              <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover:bg-primary transition-colors group-hover:scale-110 transform duration-200">
                <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          )}
          {isPlaying && (
            <button
              onClick={togglePlay}
              className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 hover:bg-black/70 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5 transition-colors backdrop-blur-sm"
              aria-label={t("products.pauseVideo")}
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
              {t("products.pause")}
            </button>
          )}
          {/* Video indicator badge */}
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            DEMO
          </div>
        </div>
      );
    }

    // Original image carousel (no video)
    return (
      <div className="relative overflow-hidden bg-gray-900">
        <img
          src={allImages[currentImageIndex]}
          alt={`${product.name} - Image ${currentImageIndex + 1}`}
          onLoad={handleImageLoad}
          className={`w-full object-contain hover:scale-105 transition-transform duration-300 ${
            isPortrait ? "h-[26rem] p-3" : "h-56 p-4"
          }`}
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #ffffff 0%, #ffffff 70%, #f3f4f6 100%)"
          }}
          loading="lazy"
        />
        {/* Image Navigation Arrows */}
        {hasMultipleImages && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              aria-label={t("products.prevImage")}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              aria-label={t("products.nextImage")}
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
                onClick={() => {
                  setCurrentImageIndex(index);
                  setIsPortrait(false);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImageIndex ? "bg-white" : "bg-white/50"
                }`}
                aria-label={t("products.viewImage").replace("{n}", String(index + 1))}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-black rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-800 flex flex-col h-full">
      <div className="relative">
        {renderMediaContent()}

        <div className="absolute top-4 right-4 bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full">
          {getCategoryName(product.category)}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-3 flex items-baseline gap-2 flex-wrap">
          <h3 className="text-2xl font-bold text-white">{product.name}</h3>
          {product.model && (
            <span className="text-sm font-semibold text-primary border border-primary/40 rounded px-2 py-0.5">
              {product.model}
            </span>
          )}
        </div>
        <p className="text-gray-400 mb-4 leading-relaxed">{product.description[lang]}</p>
        <div className="mb-4">
          <h4 className="font-semibold text-white mb-2">{t("products.keyFeatures")}</h4>
          <ul className="space-y-1">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-400">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 shrink-0"></span>
                {feature[lang]}
              </li>
            ))}
          </ul>
        </div>

        {product.specs && product.specs.length > 0 && (
          <div className="mb-2 mt-auto">
            <h4 className="font-semibold text-white mb-2">{t("products.specifications")}</h4>
            <dl className="space-y-1.5">
              {product.specs.map((spec, index) => (
                <div key={index} className="flex items-start gap-2 text-sm">
                  <dt className="text-gray-500 min-w-[80px] shrink-0">{spec.label[lang]}</dt>
                  <dd className="text-gray-300 break-words">{spec.value[lang]}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
