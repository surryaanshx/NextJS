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
      explore: 'Explore'
    },
    collections: {
      curated: 'Curated Selections',
      seasonal: 'The Seasonal Collection',
      season: 'AUTUMN / WINTER 2026',
      items: [
        { title: 'Aegean Sanctuaries', tag: 'Coastal' },
        { title: 'Nordic Echoes', tag: 'Wilderness' },
        { title: 'Highland Retreats', tag: 'Interior' }
      ]
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
      explore: '探索'
    },
    collections: {
      curated: '精选推荐',
      seasonal: '季节限定系列',
      season: '2026 秋冬系列',
      items: [
        { title: '爱琴海圣所', tag: '海岸' },
        { title: '北欧回响', tag: '荒野' },
        { title: '高地静修', tag: '内陆' }
      ]
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

  useEffect(() => {
    const saved = localStorage.getItem('app-language');
    if (saved) {
      setLanguageState(saved as Language);
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

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

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