'use client';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const translations = {
  en: {
    nav: {
      collections: 'Collections',
      destinations: 'Destinations',
      search: 'Search',
      startExpedition: 'Start Expedition',
    },
    hero: {
      title: 'Explore the World,',
      italic: 'Your way.',
      desc: 'Our itineraries are crafted through local intelligence. We architect meaningful expeditions through minimalist luxury.',
      placeholder: 'Where to wander?',
      explore: 'Explore',
      bookingBadge: 'Now Booking Summer 2026',
      featuredBadge: 'Featured Expedition',
      pattayaCity: 'Pattaya City'
    },
    collections: {
      curated: 'Curated Selections',
      titlePrefix: 'The Seasonal',
      titleSuffix: 'Collection',
      season: 'AUTUMN / WINTER 2026',
      items: [
        { title: 'Aegean Sanctuaries', tag: 'Coastal' },
        { title: 'Nordic Echoes', tag: 'Wilderness' },
        { title: 'Highland Retreats', tag: 'Interior' }
      ]
    },
    destinationsPage: {
      worldAwaits: 'The World Awaits',
      title: 'Curated',
      titleItalic: 'Destinations',
      desc: "Hand-picked expeditions across Thailand's most coveted landscapes. From the neon streets to the silent shores.",
      trending: 'Trending',
      explore: 'Explore Itinerary',
      secret: 'Secret Location',
      comingSoon: 'Coming Soon',
      duration: '7 Days',
      location: 'Thailand',
      pattayaTitle: 'Pattaya City'
    },
    pattayaPage: {
      tag: 'Thailand',
      title: 'The Pattaya',
      titleItalic: 'Elite Escape',
      reviews: '(128 Verified Reviews)',
      durationLabel: '6 Nights / 7 Days',
      gallery: {
        floatingMarket: 'Floating Markets',
        floatingTag: 'Cultural',
        coralIsland: 'Coral Island',
        coralTag: 'Adventure',
        bigBuddha: 'Big Buddha',
        bigBuddhaTag: 'Spiritual',
        hotel: 'The Hiso Hotel',
        hotelTag: 'Relaxation',
        nightMarket: 'Night Market',
        nightTag: 'Vibrant'
      },
      stats: {
        duration: "6N / 7D",
        groupSize: "12 Pax",
        accommodation: "The Hiso Hotel",
        meals: "Breakfast"
      },
      headers: {
        about: 'About this trip',
        highlights: 'Trip Highlights',
        itinerary: 'What you\'ll do',
        readMore: 'Read More',
        readLess: 'Read Less'
      },
      aboutHtml: `
        <p>
          Experience the vibrant duality of Pattaya in this comprehensive 7-day expedition. From the neon pulse of the city's famous nightlife and shows to the serene turquoise waters of Coral Island, this tour is curated for the traveler who wants it all. You will explore cultural landmarks like the Big Buddha, navigate the traditional Floating Market, and enjoy ample leisure time. 
          <br /><br />
          Stay comfortably at The Hiso Hotel with daily breakfast included, and let our local team handle every transfer and ticket.
        </p>
      `,
      highlights: [
        {
          iconName: 'Ship',
          title: 'Coral Island Speedboat',
          description: 'Adrenaline-fueled transfer to pristine Koh Larn with Indian lunch included.'
        },
        {
          iconName: 'Waves',
          title: 'Floating Market',
          description: 'Traditional rowing boat experience through the cultural waterways.'
        },
        {
          iconName: 'Moon',
          title: 'Nightlife & Shows',
          description: 'Includes tickets to the 89 Russian Show and Honey Massage experience.'
        },
        {
          iconName: 'Landmark',
          title: 'Cultural Landmarks',
          description: 'Guided visits to Big Buddha, View Point, and Gems Gallery.'
        }
      ],
      itinerary: [
        {
          day: '01',
          title: 'Arrival & The Electric Night',
          image: '/images/pattaya/itinerary/day1.jpg',
          activities: [
            'Pickup from Bangkok Airport to Pattaya.',
            'Check-in at The Hiso Hotel and refreshment.',
            'Evening excursion to the famous 89 Russian Adult Show.',
            'Relaxing Honey Massage experience (only transfer included).'
          ]
        },
        {
          day: '02',
          title: 'Coral Island Expedition',
          image: '/images/pattaya/itinerary/day2.jpg',
          activities: [
            'Speedboat tour to Koh Larn (Coral Island).',
            'Time for swimming, sunbathing, and beach sports.',
            'Authentic Indian Buffet Lunch *included*.',
            'Return transfer to hotel for leisure evening.'
          ]
        },
        {
          day: '03',
          title: 'Wildlife & Waterways',
          image: '/images/pattaya/itinerary/day3.jpg',
          activities: [
            'City tour with private transfers',
            'Visit to the Tiger Park (Transfer only).',
            'Experience at the Gun Shooting range (Transfer only).',
            'Rowing Boat tour (tickets included) at the Pattaya Floating Market.'
          ]
        },
        {
          day: '04',
          title: 'Leisure & Personal Discovery',
          image: '/images/pattaya/itinerary/day4.jpg',
          activities: [
            'Breakfast at The Hiso Hotel.',
            'Full day free at leisure to explore the city at your own pace.',
            'Recommended: Visit Walking Street or Central Pattaya Mall.'
          ]
        },
        {
          day: '05',
          title: 'Cultural Icons',
          image: '/images/pattaya/itinerary/day5.jpg',
          activities: [
            'Spiritual visit to the Big Buddha Temple on the hill.',
            'Panoramic city views from Pattaya View Point.',
            'Exclusive visit to the world-renowned Gems Gallery.'
          ]
        },
        {
          day: '06',
          title: 'Local Life & Markets',
          image: '/images/pattaya/itinerary/day6.jpg',
          activities: [
            'Relaxing morning with breakfast at the hotel.',
            'Day free for optional activities or beach time.',
            'Evening guided tour of local Thai markets for souvenirs and street food.'
          ]
        },
        {
          day: '07',
          title: 'Departure',
          image: '/images/pattaya/itinerary/day7.jpg',
          activities: [
            'Final breakfast and hotel checkout.',
            'Private transfer to Bangkok Airport.',
            'Bon voyage.'
          ]
        }
      ]
    },
    booking: {
      bestPrice: 'Best Price Guarantee',
      selectDates: 'Select Dates',
      seatsLeft: 'seats left',
      guests: 'Guests',
      totalPrice: 'Total Price',
      instantBook: 'Instant Book',
      enquire: 'Enquire',
      whatsapp: 'WhatsApp',
      dates: [
        { date: '8 - 14 Feb \'26', seatsLeft: 3 },
        { date: '22 - 28 Feb \'26', seatsLeft: 7 },
      ]
    },
    tripDetails: {
      duration: 'Duration',
      groupSize: 'Group Size',
      accommodation: 'Accommodation',
      meals: 'Meals'
    },
    testimonials: {
      title: 'Voices of the Expedition',
      prev: 'Prev',
      next: 'Next',
      reviews: [
        {
          text: "Boom Boom Thailand transformed my view. Their scouts showed me a side of Pattaya City I never knew existed.",
          author: "Elena R.",
          role: "Travel Journalist"
        },
        {
          text: "The attention to detail is unmatched. Every moment of our Pattaya City expedition felt curated yet spontaneous. The definition of quiet luxury.",
          author: "Marcus T.",
          role: "Architect"
        },
        {
          text: "I've traveled with many agencies, but none capture the 'soul' of a place like Boom Boom Thailand. It's not just a tour; it's an awakening.",
          author: "Sarah J.",
          role: "Visual Artist"
        }
      ]
    },
    spotlight: {
      titlePrefix: 'Why We',
      titleSuffix: 'Lead',
      items: [
        {
          title: "The Local Scout",
          description: "Personally verified by our network of local experts."
        },
        {
          title: "24/7 Support",
          description: "Assistance whenever you need it, wherever you are."
        },
        {
          title: "Transparent Pricing",
          description: "Clear, honest pricing with no hidden costs."
        }
      ]
    },
    inquiry: {
      title: 'Begin Your Expedition',
      desc: 'Our scouts are ready to architect your next journey. Reach out to discuss bespoke collections and private departures.',
      placeholder: 'Email Address',
      button: 'Join the Circle',
      limited: 'Limited Scouts Available for Winter 2025.'
    },
    footer: {
      motto: '"We don\'t just plan travel; we architect the narratives that define a lifetime of discovery."',
      world: 'Our World',
      worldLinks: ['Collections', 'Destinations', 'Private Scouts'],
      resources: 'Resources',
      resourceLinks: ['Press Kit', 'Careers', 'Impact'],
      legal: 'Legal',
      legalLinks: ['Privacy', 'Terms', 'Cookies'],
      rights: '© 2025 BOOM BOOM THAILAND. ALL RIGHTS RESERVED.'
    }
  },
  zh: {
    nav: {
      collections: '精选系列',
      destinations: '目的地',
      search: '搜索',
      startExpedition: '开启远征',
    },
    hero: {
      title: '探索世界，',
      italic: '由你定义。',
      desc: '我们的行程基于当地智慧精心打造。我们通过极简奢华构建充满意义的远征。',
      placeholder: '想去哪里流浪？',
      explore: '探索',
      bookingBadge: '2026年夏季预订开启',
      featuredBadge: '精选远征',
      pattayaCity: '芭堤雅 (Pattaya City)'
    },
    collections: {
      curated: '精选推荐',
      titlePrefix: '季节限定',
      titleSuffix: '系列',
      seasonal: '季节限定系列',
      season: '2026 秋冬系列',
      items: [
        { title: '爱琴海圣所', tag: '海岸' },
        { title: '北欧回响', tag: '荒野' },
        { title: '高地静修', tag: '内陆' }
      ]
    },
    destinationsPage: {
      worldAwaits: '世界在等待',
      title: '精选',
      titleItalic: '目的地',
      desc: "穿越泰国最令人向往的风景，精心挑选的远征。从霓虹闪烁的街道到静谧的海岸。",
      trending: '热门',
      explore: '查看行程',
      secret: '神秘地点',
      comingSoon: '即将推出',
      duration: '7 天',
      location: '泰国',
      pattayaTitle: '芭堤雅 (Pattaya City)'
    },
    pattayaPage: {
      tag: '泰国',
      title: '芭堤雅',
      titleItalic: '精英之旅',
      reviews: '(128 条认证评价)',
      durationLabel: '6 晚 / 7 天',
      gallery: {
        floatingMarket: '水上市场',
        floatingTag: '文化',
        coralIsland: '珊瑚岛',
        coralTag: '探险',
        bigBuddha: '大佛',
        bigBuddhaTag: '精神',
        hotel: 'Hiso 酒店',
        hotelTag: '休闲',
        nightMarket: '夜市',
        nightTag: '活力'
      },
      stats: {
        duration: "6晚 / 7天",
        groupSize: "12 人",
        accommodation: "Hiso 酒店",
        meals: "含早餐"
      },
      headers: {
        about: '关于此行程',
        highlights: '行程亮点',
        itinerary: '您的行程安排',
        readMore: '阅读更多',
        readLess: '收起'
      },
      aboutHtml: `
        <p>
          在这个为期 7 天的综合远征中，体验芭堤雅充满活力的双重魅力。从城市著名的夜生活和表演的霓虹脉动，到珊瑚岛宁静的绿松石水域，此行程专为想要体验一切的旅行者而策划。您将探索大佛等文化地标，游览传统的水上市场，并享受充足的休闲时光。
          <br /><br />
          入住舒适的 Hiso 酒店，包含每日早餐，并让我们的当地团队处理所有接送和门票。
        </p>
      `,
      highlights: [
        {
          iconName: 'Ship',
          title: '珊瑚岛快艇',
          description: '乘坐肾上腺素飙升的快艇前往纯净的格兰岛，包含印度风味午餐。'
        },
        {
          iconName: 'Waves',
          title: '水上市场',
          description: '穿越文化水道的传统划船体验。'
        },
        {
          iconName: 'Moon',
          title: '夜生活与表演',
          description: '包含 89 俄罗斯成人秀门票和蜂蜜按摩体验。'
        },
        {
          iconName: 'Landmark',
          title: '文化地标',
          description: '在大佛、观景台和珠宝画廊的导游带领下参观。'
        }
      ],
      itinerary: [
        {
          day: '01',
          title: '抵达与激情之夜',
          image: '/images/pattaya/itinerary/day1.jpg',
          activities: [
            '从曼谷机场接机前往芭堤雅。',
            '在 Hiso 酒店办理入住并稍作休息。',
            '晚上游览著名的 89 俄罗斯成人秀。',
            '轻松的蜂蜜按摩体验（仅包含接送）。'
          ]
        },
        {
          day: '02',
          title: '珊瑚岛探险',
          image: '/images/pattaya/itinerary/day2.jpg',
          activities: [
            '乘坐快艇游览格兰岛（珊瑚岛）。',
            '游泳、日光浴和海滩运动时间。',
            '包含正宗印度自助午餐。',
            '送回酒店享受休闲夜晚。'
          ]
        },
        {
          day: '03',
          title: '野生动物与水路',
          image: '/images/pattaya/itinerary/day3.jpg',
          activities: [
            '私人接送城市游',
            '参观老虎园（仅接送）。',
            '实弹射击场体验（仅接送）。',
            '在芭堤雅水上市场体验划船游览（含门票）。'
          ]
        },
        {
          day: '04',
          title: '休闲与个人探索',
          image: '/images/pattaya/itinerary/day4.jpg',
          activities: [
            '在 Hiso 酒店享用早餐。',
            '全天自由活动，按照自己的节奏探索城市。',
            '推荐：参观步行街或芭堤雅中央商场。'
          ]
        },
        {
          day: '05',
          title: 'Cultural Icons',
          image: '/images/pattaya/itinerary/day5.jpg',
          activities: [
            'Spiritual visit to the Big Buddha Temple on the hill.',
            'Panoramic city views from Pattaya View Point.',
            'Exclusive visit to the world-renowned Gems Gallery.'
          ]
        },
        {
          day: '06',
          title: 'Local Life & Markets',
          image: '/images/pattaya/itinerary/day6.jpg',
          activities: [
            '在酒店享用轻松的早餐。',
            '白天自由活动，可选择参加活动或在海滩放松。',
            '晚上在导游带领下参观当地泰国市场，购买纪念品和街头小吃。'
          ]
        },
        {
          day: '07',
          title: '返程',
          image: '/images/pattaya/itinerary/day7.jpg',
          activities: [
            '最后的早餐和酒店退房。',
            '私人送往曼谷机场。',
            '旅途愉快。'
          ]
        }
      ]
    },
    booking: {
      bestPrice: '最优价格保证',
      selectDates: '选择日期',
      seatsLeft: '剩余座位',
      guests: '人数',
      totalPrice: '总价',
      instantBook: '立即预订',
      enquire: '咨询',
      whatsapp: 'WhatsApp',
      dates: [
        { date: '26年2月 8-14日', seatsLeft: 3 },
        { date: '26年2月 22-28日', seatsLeft: 7 },
      ]
    },
    tripDetails: {
      duration: '时长',
      groupSize: '团队规模',
      accommodation: '住宿',
      meals: '餐饮'
    },
    testimonials: {
      title: '远征之声',
      prev: '上一个',
      next: '下一个',
      reviews: [
        {
          text: "Boom Boom 泰国改变了我看世界的方式。他们的当地向导带我领略了清迈不为人知的一面。简直令人窒息的美。",
          author: "Elena R.",
          role: "旅游记者"
        },
        {
          text: "对细节的关注是无与伦比的。我们在攀牙湾远征的每一刻都感觉经过精心策划却又自然而发。这就是低调奢华的定义。",
          author: "Marcus T.",
          role: "建筑师"
        },
        {
          text: "我曾与许多机构合作过，但没有一个能像 Boom Boom 泰国这样捕捉到一个地方的“灵魂”。这不仅仅是一次旅行；这是一次觉醒。",
          author: "Sarah J.",
          role: "视觉艺术家"
        }
      ]
    },
    spotlight: {
      titlePrefix: '我们为何',
      titleSuffix: '领先',
      items: [
        {
          title: "当地向导",
          description: "由我们的当地专家网络亲自验证。"
        },
        {
          title: "24/7 全天候支持",
          description: "随时随地为您提供协助。"
        },
        {
          title: "价格透明",
          description: "价格清晰诚实，无隐藏费用。"
        }
      ]
    },
    inquiry: {
      title: '开启您的远征',
      desc: '我们的向导已准备好策划您的下一次旅程。联系我们讨论定制系列和私人行程。',
      placeholder: '电子邮箱地址',
      button: '加入圈子',
      limited: '2025年冬季向导名额有限。'
    },
    footer: {
      motto: '“我们不只是策划旅行；我们构建定义一生探索的叙事。”',
      world: '我们的世界',
      worldLinks: ['系列', '目的地', '私人向导'],
      resources: '资源中心',
      resourceLinks: ['新闻包', '职业发展', '影响力'],
      legal: '法律声明',
      legalLinks: ['隐私政策', '服务条款', 'Cookie 政策'],
      rights: '© 2025 BOOM BOOM 泰国。保留所有权利。'
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  // Load saved language preference on mount
  useEffect(() => {
    const saved = localStorage.getItem('app-language');
    if (saved) {
      setLanguageState(saved as Language);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('app-language', lang);
    document.documentElement.lang = lang;
  };

  const t = (path: string) => {
    return path.split('.').reduce((obj: any, key) => obj?.[key], translations[language]) || path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
