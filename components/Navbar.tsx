'use client';
import React, { useState, useEffect } from 'react';
import { Search, Phone, Mail, Instagram, Twitter, Facebook, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { usePathname, useRouter } from 'next/navigation';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only intercept if we are linking to a hash on the homepage
    if (href.includes('#') && (pathname === '/' || pathname === '')) {
      e.preventDefault();
      const targetId = href.split('#')[1];
      const element = document.getElementById(targetId);
      
      if (element) {
        setIsMenuOpen(false);
        // Immediate scroll trigger
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
       // Allow default navigation for other pages
       setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: t('nav.collections'), href: '/#collections' },
    { name: t('nav.destinations'), href: '/destinations' },
  ];

  const LanguageSwitcher = ({ isMobile = false }) => (
    <div className={`flex items-center ${isMobile ? 'gap-4 text-xl' : 'gap-1.5 md:gap-2 text-[9px] md:text-[10px]'}`}>
      <button 
        onClick={(e) => { e.stopPropagation(); setLanguage('en'); }}
        className={`font-bold tracking-widest transition-colors ${language === 'en' ? 'text-[#6D28D9]' : 'text-[#1E1B4B]/40 hover:text-[#1E1B4B]'}`}
      >
        EN
      </button>
      <span className="text-[#1E1B4B]/10 font-thin">|</span>
      <button 
        onClick={(e) => { e.stopPropagation(); setLanguage('zh'); }}
        className={`font-bold tracking-widest transition-colors ${language === 'zh' ? 'text-[#6D28D9]' : 'text-[#1E1B4B]/40 hover:text-[#1E1B4B]'}`}
      >
        中文
      </button>
    </div>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      {/* Top Utility Bar */}
      <div className={`bg-[#1E40AF] text-white py-3 px-6 md:px-8 pointer-events-auto hidden lg:block transition-all duration-500 ${isScrolled ? 'opacity-0 -translate-y-full' : 'opacity-100'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-8 items-center">
            <a href="tel:9899899899" className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] font-bold hover:text-[#D1D5DB] transition-colors">
              <Phone className="w-3 h-3 text-white/70" /> 989-989-9899
            </a>
            <a href="mailto:book@boomboomthailand.com" className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] font-bold hover:text-[#D1D5DB] transition-colors border-l border-white/20 pl-8">
              <Mail className="w-3 h-3 text-white/70" /> book@boomboomthailand.com
            </a>
          </div>
          <div className="flex gap-6">
            <Facebook className="w-3 h-3 cursor-pointer hover:scale-110 transition-transform" />
            <Twitter className="w-3 h-3 cursor-pointer hover:scale-110 transition-transform" />
            <Instagram className="w-3 h-3 cursor-pointer hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>

      {/* Main Navigation Area */}
      <nav className={`px-6 md:px-8 transition-all duration-500 ${isScrolled ? 'py-3 md:py-4' : 'py-6 md:py-10'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Branding - Left Side */}
          <a href="/" className={`pointer-events-auto relative group cursor-pointer transition-all duration-500 ${isScrolled ? 'scale-95 origin-left' : 'scale-100 origin-left'}`}>
            <div className={`absolute -inset-x-4 md:-inset-x-6 -inset-y-3 md:-inset-y-4 bg-white/40 backdrop-blur-xl rounded-2xl transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />
            <div className="relative flex flex-col items-start">
              <div className="serif text-2xl md:text-3xl font-bold tracking-tight leading-[0.92] text-[#1E1B4B] flex flex-col">
                <span>Boom Boom</span>
                <span>Thailand</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex pointer-events-auto items-center gap-8 lg:gap-10 bg-white/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(109,40,217,0.1)] border border-[#1E1B4B]/10 px-8 py-4 rounded-full transform transition-all hover:scale-[1.02] ${isScrolled ? 'shadow-md' : 'shadow-xl'}`}>
            {navLinks.map(item => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={(e) => handleNavigation(e, item.href)}
                className="text-[10px] lg:text-xs uppercase tracking-widest font-bold hover:text-[#6D28D9] transition-colors text-[#1E1B4B]"
              >
                {item.name}
              </a>
            ))}
            <div className="h-4 w-px bg-[#1E1B4B]/10" />
            <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1E1B4B] hover:text-[#1E40AF] transition-colors">
              <Search className="w-3.5 h-3.5 text-[#6D28D9]" /> {t('nav.search')}
            </button>
            <div className="h-4 w-px bg-[#1E1B4B]/10" />
            <LanguageSwitcher />
          </div>

          {/* Mobile Navigation Pill */}
          <div className="md:hidden pointer-events-auto">
            <div className="flex items-center bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-[#1E1B4B]/10 shadow-lg ring-1 ring-black/5">
              <LanguageSwitcher />
              <div className="w-px h-4 bg-[#1E1B4B]/10 mx-3" />
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="text-[#1E1B4B] hover:text-[#6D28D9] transition-colors flex items-center justify-center"
                aria-label="Open Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#1E1B4B] z-[100] transition-all duration-700 ease-in-out pointer-events-auto flex flex-col ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
        <div className="flex justify-between items-center p-8">
          <div className="flex flex-col">
            <span className="serif text-2xl font-bold text-white leading-[0.92]">Boom Boom</span>
            <span className="serif text-2xl font-bold text-white leading-[0.92]">Thailand</span>
          </div>
          <button onClick={() => setIsMenuOpen(false)} className="p-3 bg-white/10 rounded-full text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 flex flex-col justify-center px-12 space-y-8">
          {navLinks.map((link, i) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavigation(e, link.href)}
              className={`serif text-4xl font-bold text-white hover:text-[#6D28D9] transition-colors transition-all duration-500 ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
              style={{ transitionDelay: `${(i+1)*100}ms` }}
            >
              {link.name}
            </a>
          ))}
          <div className={`h-px bg-white/10 w-full transition-all duration-700 delay-500 ${isMenuOpen ? 'scale-x-100' : 'scale-x-0'}`} />
          <div className="flex justify-between items-center text-white/50">
            <div className={`flex gap-6 transition-all duration-700 delay-600 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Instagram className="w-5 h-5" />
              <Twitter className="w-5 h-5" />
              <Facebook className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="p-12">
          <button className="w-full bg-[#6D28D9] py-5 rounded-full text-white uppercase tracking-widest font-bold text-xs">
            {t('nav.startExpedition')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;