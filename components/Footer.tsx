'use client';
import React from 'react';
import { Instagram, Twitter, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <footer key={language} className="bg-[#1E1B4B] text-[#F5F3FF] pt-16 md:pt-24 pb-8 md:pb-12 relative overflow-hidden animate-fade-in">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6D28D9]/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#1E40AF]/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 md:gap-16 mb-12 md:mb-16">
          
          <div className="lg:col-span-5 space-y-6 md:space-y-10">
            <div className="flex flex-col items-start">
              <span className="serif text-4xl md:text-5xl font-bold leading-tight -ml-[2px]">
                Boom Boom <br />Thailand
              </span>
            </div>
            <p className="text-[#F5F3FF]/60 max-w-sm leading-relaxed font-medium text-base md:text-lg italic">
              {t('footer.motto')}
            </p>
            <div className="flex gap-4 pt-2 md:pt-4">
              {[Instagram, Twitter, Linkedin, Mail].map((Icon, i) => (
                <a key={i} href="#" className="p-2.5 md:p-3 border border-[#F5F3FF]/10 rounded-full hover:bg-[#6D28D9] hover:border-[#6D28D9] transition-all duration-300 transform hover:-translate-y-1">
                  <Icon className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            <div className="space-y-6 md:space-y-10">
              <h4 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-[#6D28D9]">{t('footer.world')}</h4>
              <ul className="space-y-4 md:space-y-5">
                {t('footer.worldLinks').map((link: string) => (
                  <li key={link}>
                    <a href="#" className="text-xs md:text-sm font-semibold text-[#F5F3FF]/70 hover:text-white transition-all flex items-center group gap-2">
                      {link}
                      <ArrowUpRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 -translate-y-0.5 translate-x-0.5 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 md:space-y-10">
              <h4 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-[#6D28D9]">{t('footer.resources')}</h4>
              <ul className="space-y-4 md:space-y-5">
                {t('footer.resourceLinks').map((link: string) => (
                  <li key={link}>
                    <a href="#" className="text-xs md:text-sm font-semibold text-[#F5F3FF]/70 hover:text-white transition-all flex items-center group gap-2">
                      {link}
                      <ArrowUpRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 -translate-y-0.5 translate-x-0.5 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 md:space-y-10 col-span-2 md:col-span-1">
              <h4 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-[#6D28D9]">{t('footer.legal')}</h4>
              <ul className="flex md:flex-col gap-x-6 gap-y-4 flex-wrap md:space-y-5">
                {t('footer.legalLinks').map((link: string) => (
                  <li key={link}>
                    <a href="#" className="text-xs md:text-sm font-semibold text-[#F5F3FF]/70 hover:text-white transition-all flex items-center group gap-2">
                      {link}
                      <ArrowUpRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 -translate-y-0.5 translate-x-0.5 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-[#F5F3FF]/10 flex flex-col md:flex-row justify-center items-center">
          <div className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-black text-[#F5F3FF]/30 text-center">
            {t('footer.rights')}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
