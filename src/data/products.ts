export type Language = "en" | "zh";

/** Bilingual text field. */
export interface Localized {
  en: string;
  zh: string;
}

export type CategoryId = "mouse" | "keyboard" | "headphone" | "microphone";

export interface Product {
  id: string;
  name: string;
  model?: string;
  category: CategoryId;
  description: Localized;
  imageUrl: string;
  imageUrls?: string[];  // Additional product images for carousel
  videoUrl?: string;     // Product demo video
  features: Localized[];
  specs?: { label: Localized; value: Localized }[];
}

export const categories: { id: CategoryId; label: Localized }[] = [
  { id: "mouse", label: { en: "Mice", zh: "鼠标" } },
  { id: "keyboard", label: { en: "Keyboards", zh: "键盘" } },
  { id: "headphone", label: { en: "Headphones", zh: "耳机" } },
  { id: "microphone", label: { en: "Microphones", zh: "麦克风" } },
];

export const products: Product[] = [
  // Mice
  {
    id: "m1",
    name: "Xiker AI Mouse",
    category: "mouse",
    description: {
      en: "AI-powered smart mouse with ergonomic design, precision tracking, and customizable buttons for enhanced productivity.",
      zh: "AI 智能鼠标，人体工学设计、精准追踪、可自定义按键，全面提升工作效率。"
    },
    imageUrl: "/images/products/mouse-01.png",
    videoUrl: "/videos/xiker-ai-mouse-313.mp4",
    features: [
      { en: "AI Smart", zh: "AI 智能" },
      { en: "Ergonomic Design", zh: "人体工学设计" },
      { en: "Precision Tracking", zh: "精准追踪" },
      { en: "Customizable Buttons", zh: "可自定义按键" }
    ]
  },

  // Keyboards
  {
    id: "k1",
    name: "Xiker Mechanical Keyboard",
    category: "keyboard",
    description: {
      en: "Premium mechanical keyboard with Cherry MX switches, customizable RGB backlighting, and durable PBT keycaps.",
      zh: "高端机械键盘，搭载 Cherry MX 轴体、可自定义 RGB 背光与耐用 PBT 键帽。"
    },
    imageUrl: "/images/products/keyboard-01.jpg",
    features: [
      { en: "Cherry MX Switches", zh: "Cherry MX 轴体" },
      { en: "RGB Backlight", zh: "RGB 背光" },
      { en: "PBT Keycaps", zh: "PBT 键帽" },
      { en: "N-Key Rollover", zh: "全键无冲" }
    ]
  },

  // Headphones
  {
    id: "h1",
    name: "Xiker GP021 Headphone",
    category: "headphone",
    description: {
      en: "Premium over-ear headphone with high-fidelity sound quality, comfortable ear cushions, and durable build.",
      zh: "高端头戴式耳机，高保真音质、舒适耳罩与耐用做工。"
    },
    imageUrl: "/images/products/GP021.jpg",
    features: [
      { en: "High-Fidelity Sound", zh: "高保真音质" },
      { en: "Comfortable Ear Cushions", zh: "舒适耳罩" },
      { en: "Durable Build", zh: "耐用做工" },
      { en: "Adjustable Headband", zh: "可调节头梁" }
    ]
  },
  {
    id: "h2",
    name: "Xiker GP076 Headphone",
    category: "headphone",
    description: {
      en: "Professional gaming headphone with virtual surround sound, noise-cancelling microphone, and RGB lighting.",
      zh: "专业游戏耳机，虚拟环绕声、降噪麦克风与 RGB 灯效。"
    },
    imageUrl: "/images/products/GP076.jpg",
    imageUrls: [
      "/images/products/GP076.jpg"
    ],
    features: [
      { en: "Virtual Surround", zh: "虚拟环绕声" },
      { en: "Noise-Cancelling Mic", zh: "降噪麦克风" },
      { en: "RGB Lighting", zh: "RGB 灯效" },
      { en: "Soft Cushions", zh: "柔软耳罩" }
    ]
  },
  {
    id: "h3",
    name: "Xiker GP105 Headphone",
    category: "headphone",
    description: {
      en: "Wireless headphone with long battery life, quick charging, and immersive sound quality for music and gaming.",
      zh: "无线耳机，长续航、快充设计，音乐与游戏皆享沉浸音效。"
    },
    imageUrl: "/images/products/GP105.jpg",
    imageUrls: [
      "/images/products/GP105.jpg",
      "/images/products/GP105-04.jpg"
    ],
    features: [
      { en: "Wireless", zh: "无线连接" },
      { en: "Long Battery Life", zh: "长续航" },
      { en: "Quick Charging", zh: "快速充电" },
      { en: "Immersive Sound", zh: "沉浸音效" }
    ]
  },
  {
    id: "h4",
    name: "Xiker GP115 Headphone",
    category: "headphone",
    description: {
      en: "Flagship headphone with premium materials, advanced drivers, and superior comfort for extended use.",
      zh: "旗舰耳机，优质材质与先进单元，长时间佩戴依然舒适。"
    },
    imageUrl: "/images/products/GP115.jpg",
    imageUrls: [
      "/images/products/GP115.jpg",
      "/images/products/GP115-01.jpg",
      "/images/products/GP115-02.jpg",
      "/images/products/GP115-03.jpg",
      "/images/products/GP115-04.jpg",
      "/images/products/GP115-06.jpg"
    ],
    features: [
      { en: "Premium Materials", zh: "优质选材" },
      { en: "Advanced Drivers", zh: "先进单元" },
      { en: "Superior Comfort", zh: "舒适佩戴" },
      { en: "Flagship Model", zh: "旗舰型号" }
    ]
  },

  // Microphones
  {
    id: "mic1",
    name: "Xiker MK-06 USB Microphone",
    model: "MK-06",
    category: "microphone",
    description: {
      en: "Cardioid condenser USB microphone with a 48K/16bit sampling rate and touch-key control, mounted on an aluminum desk stand with a live RGB light bar.",
      zh: "心形指向电容式 USB 麦克风，48K/16bit 采样，触摸按键控制，配备铝合金桌面支架与 RGB 幻彩灯条。"
    },
    imageUrl: "/images/products/microphone/MK-06-01.webp",
    imageUrls: [
      "/images/products/microphone/MK-06-01.webp",
      "/images/products/microphone/MK-06-02.webp"
    ],
    features: [
      { en: "RGB Light Effects", zh: "RGB 幻彩灯效" },
      { en: "Touch-Key Control", zh: "触摸按键控制" },
      { en: "Cardioid Pickup", zh: "心形指向拾音" },
      { en: "Noise Reduction Toggle", zh: "降噪功能切换" },
      { en: "Aluminum Stand", zh: "铝材支撑架" }
    ],
    specs: [
      {
        label: { en: "Sampling Rate", zh: "采样率" },
        value: { en: "48K / 16bit", zh: "48K / 16bit" }
      },
      {
        label: { en: "Sensitivity", zh: "灵敏度" },
        value: { en: "38dB", zh: "38dB" }
      },
      {
        label: { en: "Frequency Response", zh: "频率范围" },
        value: { en: "20Hz – 20kHz (Shangjing chipset)", zh: "20Hz–20kHz，山景芯片" }
      },
      {
        label: { en: "Microphone Type", zh: "麦克风类型" },
        value: { en: "Condenser", zh: "电容式" }
      }
    ]
  },
  {
    id: "mic2",
    name: "Xiker MK-06P USB Microphone",
    model: "MK-06P",
    category: "microphone",
    description: {
      en: "Cardioid condenser USB microphone with a 48K/16bit sampling rate, a rotary RGB volume dial with AI noise cancellation, and an aluminum desk stand.",
      zh: "心形指向电容式 USB 麦克风，48K/16bit 采样，旋钮式 RGB 音量环支持 AI 降噪，配备铝合金桌面支架。"
    },
    imageUrl: "/images/products/microphone/MK-06P-01.webp",
    imageUrls: [
      "/images/products/microphone/MK-06P-01.webp",
      "/images/products/microphone/MK-06P-02.webp"
    ],
    features: [
      { en: "RGB Light Effects", zh: "RGB 幻彩灯效" },
      { en: "Touch-Key Control", zh: "触摸按键控制" },
      { en: "Cardioid Pickup", zh: "心形指向拾音" },
      { en: "AI Noise Cancellation", zh: "AI 降噪功能" },
      { en: "Aluminum Stand", zh: "铝材支撑架" }
    ],
    specs: [
      {
        label: { en: "Sampling Rate", zh: "采样率" },
        value: { en: "48K / 16bit", zh: "48K / 16bit" }
      },
      {
        label: { en: "Sensitivity", zh: "灵敏度" },
        value: { en: "38dB", zh: "38dB" }
      },
      {
        label: { en: "Frequency Response", zh: "频率范围" },
        value: { en: "20Hz – 20kHz (Huilian chipset)", zh: "20Hz–20kHz，慧联芯片" }
      },
      {
        label: { en: "Microphone Type", zh: "麦克风类型" },
        value: { en: "Condenser", zh: "电容式" }
      }
    ]
  }
];
