// Mock data for WishGameStore

export const featuredGames = [
  {
    id: 1,
    title: "GTA V Premium Edition",
    cover: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=550&fit=crop",
    edition: "Premium",
    originalPrice: 2999,
    price: 499,
    discount: 83,
    category: "action",
    platform: "PC",
    isNew: false,
    isTrending: true
  },
  {
    id: 2,
    title: "Red Dead Redemption 2",
    cover: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=550&fit=crop",
    edition: "Ultimate",
    originalPrice: 3499,
    price: 699,
    discount: 80,
    category: "adventure",
    platform: "PC",
    isNew: false,
    isTrending: true
  },
  {
    id: 3,
    title: "Cyberpunk 2077",
    cover: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=550&fit=crop",
    edition: "Standard",
    originalPrice: 2499,
    price: 599,
    discount: 76,
    category: "rpg",
    platform: "PC",
    isNew: true,
    isTrending: true
  },
  {
    id: 4,
    title: "Elden Ring",
    cover: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=550&fit=crop",
    edition: "Deluxe",
    originalPrice: 3999,
    price: 899,
    discount: 78,
    category: "rpg",
    platform: "PC",
    isNew: true,
    isTrending: true
  },
  {
    id: 5,
    title: "Call of Duty MW III",
    cover: "https://images.unsplash.com/photo-1493711662062-fa541f7f76d1?w=400&h=550&fit=crop",
    edition: "Standard",
    originalPrice: 4999,
    price: 1299,
    discount: 74,
    category: "action",
    platform: "PC",
    isNew: true,
    isTrending: false
  },
  {
    id: 6,
    title: "FIFA 24",
    cover: "https://images.unsplash.com/photo-1493711662062-fa541f7f76d1?w=400&h=550&fit=crop",
    edition: "Ultimate",
    originalPrice: 4499,
    price: 999,
    discount: 78,
    category: "sports",
    platform: "PC",
    isNew: false,
    isTrending: true
  },
  {
    id: 7,
    title: "Hogwarts Legacy",
    cover: "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?w=400&h=550&fit=crop",
    edition: "Deluxe",
    originalPrice: 3499,
    price: 799,
    discount: 77,
    category: "adventure",
    platform: "PC",
    isNew: false,
    isTrending: true
  },
  {
    id: 8,
    title: "Forza Horizon 5",
    cover: "https://images.unsplash.com/photo-1511882150382-421056c89033?w=400&h=550&fit=crop",
    edition: "Premium",
    originalPrice: 3999,
    price: 649,
    discount: 84,
    category: "racing",
    platform: "PC",
    isNew: false,
    isTrending: false
  }
];

export const subscriptions = [
  {
    id: 1,
    name: "Xbox Game Pass PC",
    duration: "1 Month",
    price: 120,
    features: ["100+ PC Games", "Day one releases", "EA Play included", "Cloud gaming"],
    isPopular: false,
    badge: null
  },
  {
    id: 2,
    name: "Xbox Game Pass PC",
    duration: "6 Months",
    price: 500,
    features: ["100+ PC Games", "Day one releases", "EA Play included", "Cloud gaming", "Save ₹220"],
    isPopular: true,
    badge: "Most Popular"
  },
  {
    id: 3,
    name: "Xbox Game Pass Ultimate",
    duration: "6 Months",
    price: 650,
    features: ["100+ PC & Console Games", "Xbox Live Gold", "EA Play included", "Cloud gaming", "Perks & Discounts", "Best Value"],
    isPopular: false,
    badge: "Ultimate"
  }
];

export const deals = [
  {
    id: 1,
    title: "Summer Sale",
    description: "Up to 90% off on selected titles",
    discount: "90% OFF",
    endsIn: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    games: [1, 2, 3, 4]
  },
  {
    id: 2,
    title: "Weekend Flash Deal",
    description: "Limited time offers on top games",
    discount: "75% OFF",
    endsIn: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
    games: [5, 6]
  },
  {
    id: 3,
    title: "New Year Special",
    description: "Celebrate with amazing discounts",
    discount: "80% OFF",
    endsIn: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    games: [7, 8]
  }
];

export const categories = [
  { id: 1, name: "PC Games", icon: "Monitor", count: 500 },
  { id: 2, name: "Game Passes", icon: "Ticket", count: 15 },
  { id: 3, name: "Subscriptions", icon: "RefreshCw", count: 10 },
  { id: 4, name: "DLCs", icon: "Package", count: 200 }
];

export const trustFeatures = [
  {
    id: 1,
    title: "Instant Delivery",
    description: "Get your game key within minutes of purchase",
    icon: "Zap"
  },
  {
    id: 2,
    title: "Full Access Accounts",
    description: "Complete ownership with all features unlocked",
    icon: "Shield"
  },
  {
    id: 3,
    title: "1000+ Games",
    description: "Huge library of games at unbeatable prices",
    icon: "Gamepad2"
  },
  {
    id: 4,
    title: "24/7 Support",
    description: "Round the clock customer assistance",
    icon: "Headphones"
  }
];

export const howItWorks = [
  {
    step: 1,
    title: "Choose Your Game",
    description: "Browse our extensive catalog and pick your favorite title",
    icon: "Search"
  },
  {
    step: 2,
    title: "Place Your Order",
    description: "Secure checkout with multiple payment options",
    icon: "ShoppingCart"
  },
  {
    step: 3,
    title: "Instant Delivery",
    description: "Receive your game key instantly via email",
    icon: "Mail"
  }
];

export const faqs = [
  {
    id: 1,
    question: "Is it safe to buy from WishGameStore?",
    answer: "Absolutely! We are a trusted digital game store with thousands of satisfied customers. All our keys are sourced from official distributors and publishers."
  },
  {
    id: 2,
    question: "How fast is the delivery?",
    answer: "Most orders are delivered instantly after payment confirmation. In rare cases, it may take up to 24 hours during peak times."
  },
  {
    id: 3,
    question: "What platforms are supported?",
    answer: "We primarily sell PC games for platforms like Steam, Epic Games, Origin, Ubisoft Connect, and Xbox PC App."
  },
  {
    id: 4,
    question: "What type of accounts do you sell?",
    answer: "We sell both game keys for activation on your own account and full access accounts. Each product listing clearly specifies the type."
  },
  {
    id: 5,
    question: "What is your refund policy?",
    answer: "We offer refunds for undelivered or non-working keys within 48 hours of purchase. Once a key is redeemed, it cannot be refunded."
  },
  {
    id: 6,
    question: "Do you offer customer support?",
    answer: "Yes! Our support team is available 24/7 via email and Instagram DM to help with any issues or questions."
  }
];

export const filterOptions = {
  categories: ["All", "Action", "Adventure", "RPG", "Sports", "Racing", "Strategy"],
  priceRanges: ["All", "Under ₹500", "₹500 - ₹1000", "₹1000 - ₹2000", "Above ₹2000"],
  editions: ["All", "Standard", "Deluxe", "Premium", "Ultimate"]
};
