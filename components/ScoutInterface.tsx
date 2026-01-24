'use client';
import React, { useState, useEffect } from 'react';
import { Terminal, Cpu, Shield, Zap, Globe, Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ScoutInterface: React.FC = () => {
  const { t } = useLanguage();
  const revealRef = useScrollReveal();
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isAnalyzing) {
      const timer = setInterval(() => {
        setProgress(p => {
          if (p >= 100) {
            clearInterval(timer);
            setIsAnalyzing(false);
            return 100;
          }
          return p + 1;
        });
      }, 50);
      return () => clearInterval(timer);
    }
  }, [isAnalyzing]);

  return (
    <section id="scout-terminal" className="py-24 px-6 md:px-8 bg-[#1E1B4B] overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6D28D9]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1E40AF]/20 rounded-full blur-[120px]" />
      </div>

      <div ref={revealRef} className="reveal max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-[#6D28D9] font-black uppercase tracking-[0.4em] text-xs">
                {t('scout.label')}
              </span>
              <h2 className="text-4xl md:text-6xl font-bold serif text-white italic">
                {t('scout.title')}
              </h2>
              <p className="text-white/60 text-lg leading-relaxed max-w-md">
                {t('scout.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t('scout.features').map((f: any, i: number) => (
                <div key={i} className="p-6 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl hover:border-[#6D28D9]/50 transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-[#6D28D9]/20 flex items-center justify-center mb-4 text-[#6D28D9] group-hover:scale-110 transition-transform">
                    {i === 0 ? <Globe className="w-5 h-5" /> : i === 1 ? <Shield className="w-5 h-5" /> : <Cpu className="w-5 h-5" />}
                  </div>
                  <h4 className="text-white font-bold mb-1">{f.title}</h4>
                  <p className="text-white/40 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>

            <button className="flex items-center gap-4 bg-white text-[#1E1B4B] px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:bg-[#6D28D9] hover:text-white transition-all duration-300">
              <Terminal className="w-4 h-4" />
              {t('scout.cta')}
            </button>
          </div>

          {/* Advanced Terminal Visualization */}
          <div className="relative">
            <div className="aspect-square md:aspect-[4/3] bg-[#121033] border-2 border-white/10 rounded-2xl overflow-hidden shadow-2xl relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6D28D9]/10 to-transparent" />
              
              {/* Terminal Header */}
              <div className="bg-white/5 border-b border-white/10 p-4 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
                <div className="text-[10px] text-white/30 font-black uppercase tracking-widest flex items-center gap-2">
                  <Zap className="w-3 h-3 text-[#6D28D9]" />
                  {isAnalyzing ? t('scout.analyzing') : t('scout.ready')}
                </div>
              </div>

              {/* Console Body */}
              <div className="p-8 space-y-6 font-mono">
                <div className="flex justify-between items-center">
                  <span className="text-[#6D28D9] text-xs">SCANNING_LAT_LNG</span>
                  <span className="text-white/20 text-xs">8.7241° N, 98.2497° E</span>
                </div>

                <div className="relative h-48 md:h-64 border border-white/5 rounded-lg overflow-hidden bg-black/20 flex items-center justify-center">
                   <div className={`absolute inset-0 bg-[#6D28D9]/5 transition-opacity duration-1000 ${isAnalyzing ? 'opacity-100' : 'opacity-20'}`} />
                   
                   {/* Scanning Ring Animation */}
                   <div className="relative w-32 h-32 md:w-48 md:h-48 border-2 border-[#6D28D9]/20 rounded-full flex items-center justify-center animate-pulse">
                      <div className="absolute inset-0 border-t-2 border-[#6D28D9] rounded-full animate-spin duration-[3000ms]" />
                      <Search className="w-8 h-8 md:w-12 md:h-12 text-white/50" />
                   </div>

                   {/* Data Points */}
                   {[1,2,3,4,5].map(i => (
                     <div key={i} className="absolute w-1 h-1 bg-[#6D28D9] rounded-full animate-ping" 
                      style={{ 
                        top: `${Math.random() * 80}%`, 
                        left: `${Math.random() * 80}%`,
                        animationDelay: `${i * 200}ms`
                      }} 
                     />
                   ))}
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-[10px] text-white/30">
                    <span>SYSTEM_INTEGRITY</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-[#6D28D9] transition-all duration-300" style={{ width: `${progress}%` }} />
                  </div>
                </div>
              </div>

              {/* Floating Element */}
              <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-lg shadow-2xl animate-fade-up">
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#1E40AF] flex items-center justify-center text-white">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[9px] text-white/40 font-black uppercase">Anomaly Detected</div>
                      <div className="text-[11px] text-white font-bold">Hidden Lagoon_04</div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScoutInterface;