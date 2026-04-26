export interface Product {
  id: string;
  name: string;
  category: 'mouse' | 'keyboard' | 'headphone';
  description: string;
  imageUrl: string;
  imageUrls?: string[];  // Optional: additional product images for carousel
  features: string[];
}

export const products: Product[] = [
  // Mice
  {
    id: "m1",
    name: "Xiker AI Mouse",
    category: "mouse",
    description: "AI-powered smart mouse with ergonomic design, precision tracking, and customizable buttons for enhanced productivity.",
    imageUrl: "/images/products/mouse-01.png",
    features: ["AI Smart", "Ergonomic Design", "Precision Tracking", "Customizable Buttons"]
  },

  // Keyboards
  {
    id: "k1",
    name: "Xiker Mechanical Keyboard",
    category: "keyboard",
    description: "Premium mechanical keyboard with Cherry MX switches, customizable RGB backlighting, and durable PBT keycaps.",
    imageUrl: "/images/products/keyboard-01.jpg",
    features: ["Cherry MX Switches", "RGB Backlight", "PBT Keycaps", "N-Key Rollover"]
  },

  // Headphones
  {
    id: "h1",
    name: "Xiker GP021 Headphone",
    category: "headphone",
    description: "Premium over-ear headphone with high-fidelity sound quality, comfortable ear cushions, and durable build.",
    imageUrl: "/images/products/GP021.jpg",
    features: ["High-Fidelity Sound", "Comfortable Ear Cushions", "Durable Build", "Adjustable Headband"]
  },
  {
    id: "h2",
    name: "Xiker GP076 Headphone",
    category: "headphone",
    description: "Professional gaming headphone with virtual surround sound, noise-cancelling microphone, and RGB lighting.",
    imageUrl: "/images/products/GP076.jpg",
    imageUrls: [
      "/images/products/GP076.jpg",
      // Add more GP076 images here if available
    ],
    features: ["Virtual Surround", "Noise-Cancelling Mic", "RGB Lighting", "Soft Cushions"]
  },
  {
    id: "h3",
    name: "Xiker GP105 Headphone",
    category: "headphone",
    description: "Wireless headphone with long battery life, quick charging, and immersive sound quality for music and gaming.",
    imageUrl: "/images/products/GP105.jpg",
    imageUrls: [
      "/images/products/GP105.jpg",
      "/images/products/GP105-04.jpg"
    ],
    features: ["Wireless", "Long Battery Life", "Quick Charging", "Immersive Sound"]
  },
  {
    id: "h4",
    name: "Xiker GP115 Headphone",
    category: "headphone",
    description: "Flagship headphone with premium materials, advanced drivers, and superior comfort for extended use.",
    imageUrl: "/images/products/GP115.jpg",
    imageUrls: [
      "/images/products/GP115.jpg",
      "/images/products/GP115-01.jpg",
      "/images/products/GP115-02.jpg",
      "/images/products/GP115-03.jpg",
      "/images/products/GP115-04.jpg",
      "/images/products/GP115-06.jpg"
    ],
    features: ["Premium Materials", "Advanced Drivers", "Superior Comfort", "Flagship Model"]
  }
];
