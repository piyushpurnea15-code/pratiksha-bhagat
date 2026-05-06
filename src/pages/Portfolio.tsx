import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'motion/react';
import { 
  Instagram, 
  MapPin, 
  CheckCircle2, 
  Users, 
  Eye, 
  BarChart3, 
  TrendingUp, 
  Play, 
  Film, 
  Handshake, 
  Mail, 
  ChevronRight,
  Heart,
  ExternalLink,
  MessageCircle,
  Clock
} from 'lucide-react';
import { 
  PieChart, 
  Pie, 
  Cell, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area
} from 'recharts';
import { SiteData } from '../types';

const AnimatedCounter = ({ value, label }: { value: string, label: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const numericValue = parseInt(value.replace(/,/g, ''));

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuad = (t: number) => t * (2 - t);
        
        const currentCount = Math.floor(easeOutQuad(progress) * numericValue);
        setDisplayValue(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, numericValue]);

  return (
    <div ref={ref} className="text-center p-4 md:p-6 glass-card rounded-2xl">
      <div className="text-2xl md:text-5xl font-bold text-brand-yellow mb-1 md:mb-2">
        {displayValue.toLocaleString()}
        {value.includes('K') && 'K'}
        {value.includes('M') && 'M'}
      </div>
      <div className="text-brand-dark/40 uppercase tracking-widest text-[9px] md:text-xs font-semibold">{label}</div>
    </div>
  );
};

const SectionHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-8 md:mb-12 text-center">
    <h2 className="text-3xl md:text-6xl font-extrabold mb-3 md:mb-4 tracking-tight uppercase">{title}</h2>
    {subtitle && <p className="text-brand-dark/60 max-w-2xl mx-auto font-medium text-xs md:text-base">{subtitle}</p>}
    <div className="w-12 md:w-20 h-1 md:h-1.5 bg-brand-yellow mx-auto mt-4 md:mt-6 rounded-full" />
  </div>
);

export const Portfolio = ({ data }: { data: SiteData }) => {
  const [activeDay, setActiveDay] = useState('Su');
  
  const WHATSAPP_URL = "https://wa.me/919508292099?text=Hi%20Pratiksha,%20I'm%20interested%20in%20a%20collaboration.";

  const openWhatsApp = () => {
    window.open(WHATSAPP_URL, '_blank');
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden selection:bg-brand-yellow/30 text-brand-dark">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[70vh] md:min-h-screen flex items-center pt-16 md:pt-20 pb-12 md:pb-20 px-6 bg-brand-light">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -right-20 w-64 md:w-96 h-64 md:h-96 bg-brand-yellow/10 blur-[80px] md:blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 -left-20 w-64 md:w-96 h-64 md:h-96 bg-brand-yellow/5 blur-[80px] md:blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <span className="px-3 md:px-4 py-1 md:py-1.5 bg-brand-dark text-white rounded-full text-[8px] md:text-[10px] font-black tracking-[0.2em] flex items-center gap-2">
                <CheckCircle2 size={12} className="text-brand-yellow" />
                VERIFIED CREATOR
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] mb-4 md:mb-8 tracking-tighter uppercase">
              {data.profile.name.split(' ')[0]} <br />
              <span className="text-brand-yellow">{data.profile.name.split(' ')[1]}</span>
            </h1>
            
            <div className="flex flex-col gap-3 md:gap-4 mb-8 md:mb-10 border-l-4 border-brand-yellow pl-4 md:pl-6">
              <div className="flex items-center gap-2 text-lg md:text-2xl text-brand-dark font-bold">
                <Instagram size={20} className="text-brand-yellow" />
                {data.profile.handle}
              </div>
              <p className="text-sm sm:text-lg md:text-2xl text-brand-dark/60 font-medium max-w-lg leading-relaxed">
                {data.profile.tagline}
              </p>
              <div className="flex items-center gap-2 text-brand-dark/40 font-bold uppercase text-[10px] md:text-sm tracking-widest">
                <MapPin size={14} />
                {data.profile.location}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 md:gap-4">
              <button 
                onClick={openWhatsApp}
                className="px-6 md:px-10 py-4 md:py-5 bg-brand-yellow text-brand-dark rounded-full font-black text-sm md:text-lg transition-all transform hover:scale-105 shadow-lg shadow-brand-yellow/10"
              >
                Collaborate With Me
              </button>
              <a 
                href={`https://instagram.com/${data.profile.handle.replace('@', '')}`}
                target="_blank"
                rel="noreferrer"
                className="px-6 md:px-10 py-4 md:py-5 border-2 border-brand-dark/10 hover:bg-brand-dark hover:text-white rounded-full font-black text-sm md:text-lg transition-all"
              >
                View Profile
              </a>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, delay: 0.2 }}
             className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl relative group">
              <img 
                id="hero-photo"
                src={data.profile.heroPhoto} 
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105" 
                alt={data.profile.name}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-white/20 via-transparent to-transparent" />
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-2xl border border-brand-yellow/20">
              <div className="text-center">
                <div className="text-4xl font-black text-brand-dark mb-1">{data.stats.followers}</div>
                <div className="text-[10px] tracking-[0.2em] text-brand-dark/40 font-black uppercase">Followers</div>
              </div>
            </div>

            <div className="absolute -top-6 -left-6 bg-brand-dark p-6 rounded-3xl shadow-2xl">
               <div className="text-center">
                <div className="text-3xl font-black text-brand-yellow mb-1">{data.stats.monthlyViews}</div>
                <div className="text-[10px] tracking-[0.2em] text-white/40 font-black uppercase">Monthly Views</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. MEDIA KIT / STATS */}
      <section className="py-12 md:py-20 px-6 bg-white relative overflow-hidden">
        <div className="container mx-auto">
          <SectionHeader title="By The Numbers" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
             <AnimatedCounter value={data.stats.followers} label="Followers" />
             <AnimatedCounter value={data.stats.monthlyViews} label="Monthly Views" />
             <AnimatedCounter value={data.stats.interactions} label="Interactions" />
             <AnimatedCounter value={data.stats.accountsReached} label="Reach" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-8">
            <div className="bg-brand-light p-6 md:p-8 rounded-[2rem] border-l-8 border-brand-yellow shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <div className="p-2.5 bg-brand-yellow/10 rounded-xl"><TrendingUp size={20} className="text-brand-yellow" /></div>
                <div className="text-2xl md:text-3xl font-black text-brand-dark">+{data.stats.followersGrowth}%</div>
              </div>
              <h3 className="text-lg font-black uppercase tracking-tight mb-2">Steady Growth</h3>
              <p className="text-brand-dark/50 text-xs md:text-sm font-medium">Consistent community expansion through strategic value-driven content.</p>
            </div>

            <div className="bg-brand-dark p-6 md:p-8 rounded-[2rem] border-l-8 border-brand-yellow shadow-lg text-white">
              <div className="flex justify-between items-center mb-3">
                <div className="p-2.5 bg-brand-yellow/20 rounded-xl"><BarChart3 size={20} className="text-brand-yellow" /></div>
                <div className="text-2xl md:text-3xl font-black text-brand-yellow">+{data.stats.reachedGrowth}%</div>
              </div>
              <h3 className="text-lg font-black uppercase tracking-tight mb-2">High Reach</h3>
              <p className="text-white/50 text-xs md:text-sm font-medium">Massive amplification through reel algorithms and organic sharing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. AUDIENCE ANALYTICS */}
      <section className="py-12 md:py-20 px-6 container mx-auto">
        <SectionHeader title="Audience Insights" subtitle="Highly focused demographics that overlap with premium beauty and lifestyle brands." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 mb-8">
          {/* Gender Split */}
          <div className="bg-brand-light p-8 md:p-10 rounded-[2.5rem] border border-brand-dark/5">
            <h3 className="text-xl md:text-2xl font-black uppercase mb-6">Audience Gender</h3>
            <div className="h-[250px] md:h-[300px] relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data.analytics.gender}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={90}
                    paddingAngle={8}
                    dataKey="value"
                  >
                    {data.analytics.gender.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.name === 'Women' ? '#F7D154' : '#111111'} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-4xl md:text-5xl font-black text-brand-dark">82.5%</span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-brand-dark/40 uppercase">Female</span>
              </div>
            </div>
          </div>

          {/* Age Group */}
          <div className="bg-brand-dark p-8 md:p-10 rounded-[2.5rem] text-white">
            <h3 className="text-xl md:text-2xl font-black uppercase mb-6 text-brand-yellow">Age Breakdown</h3>
            <div className="h-[250px] md:h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data.analytics.age} layout="vertical">
                  <XAxis type="number" hide />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    width={50} 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 11, fontWeight: 'bold' }}
                  />
                  <Bar 
                    dataKey="value" 
                    radius={[0, 10, 10, 0]}
                    barSize={16}
                  >
                    {data.analytics.age.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.value > 40 ? '#F7D154' : '#ffffff'} opacity={0.8} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
           <div className="bg-brand-light p-6 md:p-8 rounded-3xl">
             <h4 className="text-md font-black uppercase mb-6 flex items-center gap-2">
               <MapPin size={18} className="text-brand-yellow" /> Top Regions
             </h4>
             <div className="space-y-3">
               {data.analytics.topCities.map((city, idx) => (
                 <div key={idx} className="flex flex-col gap-1">
                   <div className="flex justify-between text-[11px] font-bold mb-0.5">
                     <span>{city.name}</span>
                     <span>{city.value}%</span>
                   </div>
                   <div className="w-full h-1.5 bg-brand-dark/10 rounded-full overflow-hidden">
                     <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${city.value * 10}%` }}
                        className="h-full bg-brand-yellow"
                     />
                   </div>
                 </div>
               ))}
             </div>
           </div>

           <div className="bg-brand-dark p-6 md:p-8 rounded-3xl flex flex-col justify-between text-white border-b-4 border-brand-yellow">
              <h4 className="text-md font-black uppercase mb-4 text-brand-yellow">Content Reach</h4>
              <div className="text-center my-2">
                <div className="text-5xl font-black text-white mb-1">89%</div>
                <div className="text-[10px] tracking-[0.2em] text-white/40 font-black uppercase">Organic Discovery</div>
              </div>
              <p className="text-white/40 text-[10px] font-bold text-center leading-relaxed">
                Hyper-engaged non-follower reach ensures every collaboration finds fresh eyes.
              </p>
           </div>

           <div className="bg-white border-2 border-brand-dark/5 p-6 md:p-8 rounded-3xl flex flex-col justify-between shadow-sm">
              <h4 className="text-md font-black uppercase mb-4">Preference</h4>
              <div className="h-[120px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data.analytics.contentTypes}
                      cx="50%"
                      cy="50%"
                      innerRadius={35}
                      outerRadius={50}
                      dataKey="value"
                    >
                      <Cell fill="#F7D154" />
                      <Cell fill="#111111" />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-4 text-[9px] font-black uppercase tracking-widest text-brand-dark/40">
                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-brand-yellow" /> Reels</span>
                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-brand-dark" /> Stories</span>
              </div>
           </div>
        </div>
      </section>

      {/* 4. CONTENT CALL TO ACTION */}
      <section className="py-20 md:py-32 px-6 bg-brand-light relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <SectionHeader 
            title="Explore My Content" 
            subtitle="I share daily beauty rituals, style transformations, and lifestyle moments with my community." 
          />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="relative group mb-12">
              <div className="absolute inset-0 bg-brand-yellow/30 blur-3xl rounded-full scale-150 group-hover:scale-[2] transition-transform duration-700 opacity-50" />
              <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-xl mx-auto opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                {data.content.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="aspect-[3/4] rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                    <img src={item.thumbnail} className="w-full h-full object-cover" alt="Preview" />
                  </div>
                ))}
              </div>
            </div>

            <a 
              href={`https://instagram.com/${data.profile.handle.replace('@', '')}`}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-4 px-12 py-6 bg-white rounded-full text-brand-dark transition-all transform hover:scale-105 hover:bg-brand-dark hover:text-white shadow-2xl border-2 border-brand-yellow/50"
            >
              <Instagram size={28} className="text-brand-yellow" />
              <span className="text-xl md:text-2xl font-black uppercase tracking-tight">Follow My Journey</span>
              <div className="w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center text-brand-dark group-hover:translate-x-2 transition-transform">
                <ChevronRight size={24} />
              </div>
            </a>
            
            <p className="mt-8 text-brand-dark/30 font-black uppercase text-[10px] tracking-[0.3em]">
              Join {data.stats.followers} Other Followers
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. COLLAB SECTION */}
      <section id="contact" className="py-12 md:py-20 px-6 relative overflow-hidden bg-brand-dark text-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-yellow/5 blur-[120px] -z-10 rounded-full" />
        
        <div className="container mx-auto max-w-4xl text-center">
          <SectionHeader title="Let's Collab" />
          
          <div className="bg-white/5 p-8 md:p-20 rounded-[3rem] md:rounded-[4rem] border-brand-yellow/20 border-2 shadow-2xl">
             <div className="w-16 h-16 md:w-24 md:h-24 bg-brand-yellow text-brand-dark rounded-full flex items-center justify-center mx-auto mb-6 md:mb-10">
               <MessageCircle size={32} className="md:w-12 md:h-12" />
             </div>
             <h3 className="text-2xl md:text-4xl font-black uppercase mb-4 tracking-tight">Direct Partnership</h3>
             <p className="text-sm md:text-xl text-white/50 mb-8 md:mb-12 font-medium max-w-xl mx-auto">
               Skip the email chain. Get in touch directly via WhatsApp for lightning-fast responses on your brand collaboration proposals.
             </p>
             
             <button 
                onClick={openWhatsApp}
                className="group relative overflow-hidden px-8 py-5 md:px-16 md:py-7 bg-brand-yellow text-brand-dark rounded-full font-black text-lg md:text-2xl transition-all transform hover:scale-105 shadow-xl shadow-brand-yellow/20"
             >
                <div className="flex items-center gap-3">
                  Connect on WhatsApp <ChevronRight size={24} className="group-hover:translate-x-2 transition-transform hidden md:block" />
                </div>
             </button>

             <div className="mt-12 md:mt-16 pt-8 md:pt-16 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="space-y-2">
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Official Email</span>
                  <a href={`mailto:${data.profile.email}`} className="block text-md md:text-xl font-bold hover:text-brand-yellow transition-colors underline decoration-brand-yellow/30 underline-offset-8 break-all">
                    {data.profile.email}
                  </a>
                </div>
                <div className="space-y-4 hidden md:block">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Response Time</span>
                  <div className="flex items-center gap-2 font-bold text-white/80">
                     <Clock size={18} className="text-brand-yellow" /> Usually under 2 hours
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="py-12 md:py-20 bg-brand-light px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-12">
            <div className="text-center lg:text-left">
               <div className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-3">{data.profile.name}</div>
               <p className="text-brand-dark/40 font-bold text-[10px] md:text-xs tracking-widest uppercase">Beauty 🪞 || Fashion ✨ || Lifestyle 🦋</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <a href={`https://instagram.com/${data.profile.handle.replace('@', '')}`} target="_blank" rel="noreferrer" className="w-12 h-12 md:w-16 md:h-16 bg-white border border-brand-dark/5 rounded-2xl flex items-center justify-center hover:bg-brand-yellow hover:border-brand-yellow transition-all shadow-sm">
                <Instagram size={24} />
              </a>
              <a href="#" className="w-12 h-12 md:w-16 md:h-16 bg-white border border-brand-dark/5 rounded-2xl flex items-center justify-center hover:bg-brand-dark hover:text-white transition-all shadow-sm">
                <TrendingUp size={24} />
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-brand-dark/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-brand-dark/30 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-center md:text-left">
              &copy; 2025 PRATIKSHA BHAGAT. PRO GLOBAL CREATOR.
            </div>
            <div className="flex gap-6 md:gap-8 text-[9px] font-black uppercase tracking-widest text-brand-dark/40">
              <a href="#" className="hover:text-brand-dark">Privacy</a>
              <a href="#" className="hover:text-brand-dark">Terms</a>
              <a href="#" className="hover:text-brand-dark">Press Kit</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
