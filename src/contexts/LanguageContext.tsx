import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "zh";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.products": "Products",
    "nav.contact": "Contact Us",
    
    // Home Page
    "home.hero.title": "Xiker Innovation",
    "home.hero.subtitle": "Innovating Your Digital Experience",
    "home.hero.description": "Shenzhen Xiker Innovation Technology Co., Ltd. specializes in designing and manufacturing premium electronic 3C products, including high-performance mice, keyboards, and headphones that empower your digital lifestyle.",
    "home.hero.cta": "Explore Products",
    "home.about.title": "About Xiker Innovation",
    "home.about.description1": "Founded in Shenzhen, the global hub of electronics manufacturing, Shenzhen Xiker Innovation Technology Co., Ltd. has quickly established itself as a trusted name in the 3C products industry. We combine innovative design, precision engineering, and rigorous quality control to deliver products that exceed customer expectations.",
    "home.about.description2": "Our mission is to create ergonomic, high-performance peripherals that enhance productivity and elevate the user experience. Whether you're a professional gamer, office worker, or creative professional, our products are designed to meet your unique needs.",
    "home.about.cta": "Learn More About Us",
    "home.products.title": "Our Products",
    "home.products.subtitle": "Discover our range of premium 3C products designed for performance, comfort, and style.",
    "home.products.viewDetails": "View Details",
    "home.features.title": "Why Choose Xiker",
    "home.features.subtitle": "We are committed to delivering exceptional quality and service that sets us apart from the competition.",
    "home.features.innovation": "Innovation",
    "home.features.innovationDesc": "We continuously push the boundaries of technology to bring you cutting-edge 3C products that enhance your digital experience.",
    "home.features.quality": "Quality Assurance",
    "home.features.qualityDesc": "Every product undergoes rigorous testing to ensure durability, reliability, and exceptional performance that exceeds industry standards.",
    "home.features.support": "Customer Support",
    "home.features.supportDesc": "Our dedicated support team is always ready to assist you with any questions or concerns, providing prompt and professional service.",
    "home.features.global": "Global Service",
    "home.features.globalDesc": "With a worldwide presence, we serve customers across the globe, delivering premium products and services wherever you are.",
    "home.cta.title": "Ready to Elevate Your Experience?",
    "home.cta.subtitle": "Contact us today to learn more about our products and how we can meet your needs.",
    "home.cta.button": "Contact Us Today",
    
    // About Page
    "about.title": "About Us",
    "about.subtitle": "Learn more about Shenzhen Xiker Innovation Technology Co., Ltd.",
    "about.company.title": "Company Profile",
    "about.company.description1": "Shenzhen Xiker Innovation Technology Co., Ltd. was established in Shenzhen, China - the global capital of electronics manufacturing. With a prime location in this thriving tech hub, we have access to the world's most advanced supply chains and manufacturing resources.",
    "about.company.description2": "Our team consists of experienced engineers, designers, and quality control experts who share a passion for creating exceptional 3C products. We believe that technology should enhance human capabilities, not complicate them.",
    "about.mission.title": "Our Mission",
    "about.mission.description": "To empower people's digital lives through innovative, ergonomic, and high-quality 3C products that bridge the gap between technology and human needs.",
    "about.vision.title": "Our Vision",
    "about.vision.description": "To become a globally recognized leader in 3C products, known for innovation, quality, and customer-centric design.",
    "about.values.title": "Our Values",
    "about.values.innovation": "Innovation",
    "about.values.innovationDesc": "We embrace new ideas and technologies to create products that define the future.",
    "about.values.quality": "Quality",
    "about.values.qualityDesc": "We never compromise on quality, ensuring every product meets the highest standards.",
    "about.values.integrity": "Integrity",
    "about.values.integrityDesc": "We conduct our business with honesty, transparency, and respect for all stakeholders.",
    "about.values.customer": "Customer First",
    "about.values.customerDesc": "We listen to our customers and strive to exceed their expectations in every interaction.",
    
    // Products Page
    "products.title": "Our Products",
    "products.subtitle": "Explore our range of premium 3C products designed for performance and comfort.",
    "products.filter.all": "All",
    "products.filter.mice": "Mice",
    "products.filter.keyboards": "Keyboards",
    "products.filter.headphones": "Headphones",
    "products.cta.title": "Interested in Our Products?",
    "products.cta.subtitle": "Contact us today to learn more about our product specifications, pricing, and customization options.",
    "products.cta.button": "Get in Touch",
    
    // Contact Page
    "contact.title": "Contact Us",
    "contact.subtitle": "We'd love to hear from you. Reach out to us using the information below.",
    "contact.info.title": "Contact Information",
    "contact.info.email": "Email",
    "contact.info.emailDesc": "For inquiries about products, pricing, or partnerships:",
    "contact.info.address": "Address",
    "contact.info.hours": "Business Hours",
    "contact.cta.title": "Ready to Get Started?",
    "contact.cta.subtitle": "Whether you're interested in our products, need technical support, or want to discuss partnership opportunities, we're here to help.",
    "contact.cta.button": "Send us a Message",
    "products.keyFeatures": "Key Features:",
    
    // Footer
    "footer.description": "Premium 3C products designed for performance and comfort.",
    "footer.quickLinks": "Quick Links",
    "footer.contactUs": "Contact Us",
    "footer.rights": "All rights reserved.",
  },
  zh: {
    // Navigation
    "nav.home": "首页",
    "nav.about": "关于我们",
    "nav.products": "产品服务",
    "nav.contact": "联系我们",
    
    // Home Page
    "home.hero.title": "烯氪创新",
    "home.hero.subtitle": "创新您的数字体验",
    "home.hero.description": "深圳市烯氪创新科技有限公司专注于设计和制造优质的电子3C产品，包括高性能鼠标、键盘和配件，助力您的数字生活。",
    "home.hero.cta": "探索产品",
    "home.about.title": "关于烯氪创新",
    "home.about.description1": "公司成立于全球电子制造中心——深圳，深圳市烯氪创新科技有限公司迅速成为3C配件行业值得信赖的品牌。我们结合创新设计、精密工程和严格的质量控制，为客户提供超越预期的产品。",
    "home.about.description2": "我们的使命是创造符合人体工程学的高性能外设，提升工作效率和用户体验。无论您是专业游戏玩家、办公室职员还是创意专业人士，我们的产品都能满足您的独特需求。",
    "home.about.cta": "了解更多",
    "home.products.title": "我们的产品",
    "home.products.subtitle": "探索我们为性能、舒适和风格而设计的优质3C产品。",
    "home.products.viewDetails": "查看详情",
    "home.features.title": "为什么选择烯氪",
    "home.features.subtitle": "我们致力于提供卓越的品质和服务，让我们在竞争中脱颖而出。",
    "home.features.innovation": "创新",
    "home.features.innovationDesc": "我们不断突破技术界限，为您带来前沿的3C产品，提升您的数字体验。",
    "home.features.quality": "质量保证",
    "home.features.qualityDesc": "每个产品都经过严格测试，确保耐用性、可靠性和超越行业标准的卓越性能。",
    "home.features.support": "客户支持",
    "home.features.supportDesc": "我们专业的支持团队随时准备为您解答任何问题，提供及时专业的服务。",
    "home.features.global": "全球服务",
    "home.features.globalDesc": "我们遍布全球，为世界各地的客户提供服务，无论您身在何处，都能获得优质的产品和服务。",
    "home.cta.title": "准备好提升您的体验了吗？",
    "home.cta.subtitle": "立即联系我们，了解有关我们产品的更多信息以及我们如何满足您的需求。",
    "home.cta.button": "立即联系我们",
    
    // About Page
    "about.title": "关于我们",
    "about.subtitle": "了解深圳市烯氪创新科技有限公司的更多信息。",
    "about.company.title": "公司简介",
    "about.company.description1": "深圳市烯氪创新科技有限公司成立于中国电子制造之都——深圳。凭借位于这个蓬勃发展的科技中心的优越位置，我们能够获得世界上最先进的供应链和制造资源。",
    "about.company.description2": "我们的团队由经验丰富的工程师、设计师和质量控制专家组成，他们共同致力于创造卓越的3C产品。我们相信技术应该增强人类的能力，而不是使其复杂化。",
    "about.mission.title": "我们的使命",
    "about.mission.description": "通过创新、符合人体工程学和高质量的3C产品，赋能人们的数字生活，弥合技术与人类需求之间的差距。",
    "about.vision.title": "我们的愿景",
    "about.vision.description": "成为全球公认的3C配件领导者，以创新、质量和以客户为中心的设计而闻名。",
    "about.values.title": "我们的价值观",
    "about.values.innovation": "创新",
    "about.values.innovationDesc": "我们拥抱新想法和新技术，创造定义未来的产品。",
    "about.values.quality": "质量",
    "about.values.qualityDesc": "我们从不妥协质量，确保每款产品都符合最高标准。",
    "about.values.integrity": "诚信",
    "about.values.integrityDesc": "我们以诚实、透明和尊重所有利益相关者的方式开展业务。",
    "about.values.customer": "客户至上",
    "about.values.customerDesc": "我们倾听客户的意见，努力在每次互动中超越他们的期望。",
    
    // Products Page
    "products.title": "我们的产品",
    "products.subtitle": "探索我们为性能和舒适度而设计的优质3C产品。",
    "products.filter.all": "全部",
    "products.filter.mice": "鼠标",
    "products.filter.keyboards": "键盘",
    "products.filter.headphones": "耳机",
    "products.cta.title": "对我们的产品感兴趣？",
    "products.cta.subtitle": "立即联系我们，了解有关产品规格、定价和定制选项的更多信息。",
    "products.cta.button": "联系我们",
    
    // Contact Page
    "contact.title": "联系我们",
    "contact.subtitle": "我们很乐意收到您的来信。使用以下信息与我们联系。",
    "contact.info.title": "联系信息",
    "contact.info.email": "电子邮件",
    "contact.info.emailDesc": "咨询产品、定价或合作事宜，请发邮件：",
    "contact.info.address": "地址",
    "contact.info.hours": "工作时间",
    "contact.cta.title": "准备好开始了吗？",
    "contact.cta.subtitle": "无论您是对我们的产品感兴趣、需要技术支持，还是想讨论合作机会，我们都在这里为您提供帮助。",
    "contact.cta.button": "给我们发消息",
    "products.keyFeatures": "主要特点：",
    
    // Footer
    "footer.description": "为性能和舒适度而设计的优质3C产品。",
    "footer.quickLinks": "快速链接",
    "footer.contactUs": "联系我们",
    "footer.rights": "版权所有。",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "zh" : "en"));
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
