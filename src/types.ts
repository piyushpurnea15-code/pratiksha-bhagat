export interface StatCard {
  label: string;
  value: string;
  trend?: string;
  icon?: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  color?: string;
}

export interface ContentCard {
  id: string;
  type: 'video' | 'image';
  thumbnail: string;
  views: string;
  url?: string;
}

export interface SiteData {
  profile: {
    name: string;
    handle: string;
    tagline: string;
    bio: string;
    location: string;
    email: string;
    heroPhoto: string;
    wishlink?: string;
  };
  stats: {
    followers: string;
    monthlyViews: string;
    interactions: string;
    accountsReached: string;
    postCount: string;
    newFollowers: string;
    followersGrowth: string;
    reachedGrowth: string;
  };
  analytics: {
    gender: ChartDataPoint[];
    age: ChartDataPoint[];
    topCities: ChartDataPoint[];
    organicReach: ChartDataPoint[];
    contentTypes: ChartDataPoint[];
    growth: {
      timeline: { date: string; followers: number; reach: number }[];
      newFollows: string;
      unfollows: string;
      netGrowth: string;
      bestDay: string;
    };
  };
  activeTimes: {
    [key: string]: { time: string; activity: number }[];
  };
  content: ContentCard[];
  theme: {
    primary: string;
    secondary: string;
    background: string;
  };
}

export const INITIAL_DATA: SiteData = {
  profile: {
    name: "Pratiksha Kumari",
    handle: "@_pratikshabhagat_",
    tagline: "Beauty • Fashion • Lifestyle || Oversharing about everything I love 🌻",
    bio: "Verified Instagram Creator focused on luxury lifestyle, fashion trends, and beauty transformations.",
    location: "Bihar • Gurgaon • Delhi",
    email: "workwidpratiksha29@gmail.com",
    heroPhoto: "/hero-main.png",
    wishlink: ""
  },
  stats: {
    followers: "48,053",
    monthlyViews: "5,746,538",
    interactions: "428,100",
    accountsReached: "2,695,561",
    postCount: "253",
    newFollowers: "11,400",
    followersGrowth: "15.9",
    reachedGrowth: "524.9"
  },
  analytics: {
    gender: [
      { name: "Women", value: 82.5, color: "#8B5CF6" },
      { name: "Men", value: 17.5, color: "#FF2D78" }
    ],
    age: [
      { name: "13-17", value: 1.3 },
      { name: "18-24", value: 46.1 },
      { name: "25-34", value: 42.4 },
      { name: "35-44", value: 7.6 },
      { name: "45-54", value: 1.9 },
      { name: "55-64", value: 0.4 },
      { name: "65+", value: 0.3 }
    ],
    topCities: [
      { name: "Delhi", value: 6.9 },
      { name: "Bangalore", value: 3.8 },
      { name: "Mumbai", value: 3.4 },
      { name: "Kolkata", value: 2.8 },
      { name: "Chennai", value: 2.8 }
    ],
    organicReach: [
      { name: "Non-followers", value: 89, color: "#8B5CF6" },
      { name: "Followers", value: 11, color: "#FF2D78" }
    ],
    contentTypes: [
      { name: "Reels", value: 92.9 },
      { name: "Stories", value: 7.1 }
    ],
    growth: {
      timeline: [
        { date: "Apr 5", followers: 42000, reach: 1200000 },
        { date: "Apr 12", followers: 43500, reach: 1450000 },
        { date: "Apr 19", followers: 45000, reach: 1900000 },
        { date: "Apr 26", followers: 46800, reach: 2300000 },
        { date: "May 4", followers: 48053, reach: 2695561 }
      ],
      newFollows: "10,533",
      unfollows: "4,598",
      netGrowth: "+5,935",
      bestDay: "738"
    }
  },
  activeTimes: {
    "Su": [{ time: "12a", activity: 20 }, { time: "3a", activity: 10 }, { time: "6a", activity: 50 }, { time: "9a", activity: 80 }, { time: "12p", activity: 90 }, { time: "3p", activity: 85 }, { time: "6p", activity: 95 }, { time: "9p", activity: 100 }],
    "M": [{ time: "12a", activity: 15 }, { time: "3a", activity: 5 }, { time: "6a", activity: 40 }, { time: "9a", activity: 70 }, { time: "12p", activity: 80 }, { time: "3p", activity: 75 }, { time: "6p", activity: 85 }, { time: "9p", activity: 90 }],
    "Tu": [{ time: "12a", activity: 20 }, { time: "3a", activity: 10 }, { time: "6a", activity: 50 }, { time: "9a", activity: 80 }, { time: "12p", activity: 90 }, { time: "3p", activity: 85 }, { time: "6p", activity: 95 }, { time: "9p", activity: 100 }],
    "W": [{ time: "12a", activity: 20 }, { time: "3a", activity: 10 }, { time: "6a", activity: 50 }, { time: "9a", activity: 80 }, { time: "12p", activity: 90 }, { time: "3p", activity: 85 }, { time: "6p", activity: 95 }, { time: "9p", activity: 100 }],
    "Th": [{ time: "12a", activity: 20 }, { time: "3a", activity: 10 }, { time: "6a", activity: 50 }, { time: "9a", activity: 80 }, { time: "12p", activity: 90 }, { time: "3p", activity: 85 }, { time: "6p", activity: 95 }, { time: "9p", activity: 100 }],
    "F": [{ time: "12a", activity: 20 }, { time: "3a", activity: 10 }, { time: "6a", activity: 50 }, { time: "9a", activity: 80 }, { time: "12p", activity: 90 }, { time: "3p", activity: 85 }, { time: "6p", activity: 95 }, { time: "9p", activity: 100 }],
    "Sa": [{ time: "12a", activity: 30 }, { time: "3a", activity: 15 }, { time: "6a", activity: 60 }, { time: "9a", activity: 100 }, { time: "12p", activity: 100 }, { time: "3p", activity: 100 }, { time: "6p", activity: 100 }, { time: "9p", activity: 100 }]
  },
  content: [
    { id: "content-1", type: "video", views: "1.2M", thumbnail: "/content-1.jpg", url: "https://www.instagram.com/reels/" },
    { id: "content-2", type: "video", views: "850K", thumbnail: "/content-2.jpg", url: "https://www.instagram.com/reels/" },
    { id: "content-3", type: "image", views: "450K", thumbnail: "/content-3.jpg", url: "https://www.instagram.com/" },
    { id: "content-4", type: "video", views: "2.1M", thumbnail: "https://images.unsplash.com/photo-1529139572177-393f923ffc40?auto=format&fit=crop&q=80&w=600", url: "https://www.instagram.com/reels/" },
    { id: "content-5", type: "image", views: "320K", thumbnail: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=600", url: "https://www.instagram.com/" },
    { id: "content-6", type: "video", views: "1.5M", thumbnail: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=600", url: "https://www.instagram.com/reels/" }
  ],
  theme: {
    primary: "#F7D154",
    secondary: "#FFFFFF",
    background: "#FFFFFF"
  }
};
