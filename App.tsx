import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wand2, Crown, Rocket, BookOpen, Star, Globe, X, Sparkles, Shuffle } from 'lucide-react';

// Data
const resumeData = {
  name: "Bryton C. Kober",
  title: "Omnichannel Marketplace Manager",
  contact: {
    email: "brytonckober@gmail.com",
    phone: "(208) 447-6183",
    location: "Philadelphia, PA (Relocating)"
  },
  summary: "Omnichannel Marketplace Manager with 4+ years of experience owning and scaling revenue across Walmart, Amazon, and Shopify, including launching Walmart from $0 to $120K+ in under six months with a $1M annualized run rate and managing a $2.27M Amazon business. Expert in catalog health, compliance, and marketplace operations that directly impact Buy Box, conversion, and margin, with a track record of turning complex, broken catalogs into high-performing growth engines.",
  skills: [
    "Marketplace Revenue Management", "Omnichannel Merchandising", "Platform Integrations",
    "Catalog & Listing Health", "Pricing & Promotion Optimization", "Operational Scalability",
    "Buy Box & Conversion Optimization", "Revenue & Growth Analytics", "Cross-Functional Execution",
    "Walmart Seller Center", "Amazon Seller Central", "Shopify Plus / D2C", "Listing Compliance",
    "Marketplace Search & Ads", "Inventory & Fulfillment", "Revenue Forecasting", "Financial Modeling",
    "Excel", "GA4 & Attribution", "APIs", "CRM", "HubSpot", "Salesforce", "AI Automation", "OpenAI", "Walmart Connect"
  ],
  experience: [
    {
      company: "The Rag Company",
      role: "Walmart Marketplace Manager",
      date: "2025 - Present",
      bullets: [
        "Launched and scaled Walmart Marketplace from $0 to $120K+ in revenue in under six months, achieving a $1M+ annualized run rate through catalog expansion, pricing optimization, and promotion execution.",
        "Own full P&L performance across Walmart, managing revenue, margin, pricing, promotions, and advertising for a multi-thousand-SKU catalog generating six-figure monthly sales volume.",
        "Maintain catalog health across thousands of active SKUs, keeping Buy Box eligibility above target thresholds and minimizing suppressions that would otherwise block significant portions of daily revenue.",
        "Drive promotional performance through Walmart Deals, Rollbacks, and featured offers, increasing traffic, sell-through, and category visibility while protecting contribution margin.",
        "Resolve dozens of high-impact catalog and compliance defects each month, including parent-child errors, variation mismatches, and attribute conflicts that directly affect listing eligibility and sales velocity.",
        "Built scalable operating processes for pricing, promotions, catalog updates, and feed management that support continued growth toward a $1M+ annual revenue channel."
      ]
    },
    {
      company: "The Rag Company",
      role: "Ecommerce Specialist",
      date: "2024 - 2025",
      bullets: [
        "Owned Amazon USA operations generating $2.27M in annual revenue, managing pricing, catalog, inventory, promotions, and fulfillment across a multi-thousand-SKU portfolio.",
        "Operated both FBA and FBM channels to maintain high Buy Box coverage, fast delivery promises, and optimized contribution margin across thousands of live listings.",
        "Managed Amazon Canada and cross-border catalog synchronization, keeping hundreds to thousands of listings compliant and aligned across regions to prevent revenue-blocking discrepancies.",
        "Executed Deals, Lightning Deals, and promotional campaigns that drove traffic spikes, sell-through, and improved category rank during peak promotional periods.",
        "Built and optimized A+ Content and product detail pages across a large catalog to increase conversion rate, brand consistency, and merchandising effectiveness.",
        "Resolved high-volume catalog and compliance defects including variation errors, suppressed listings, and brand conflicts that would otherwise block or limit six- and seven-figure revenue streams."
      ]
    },
    {
      company: "Erbellum formerly Broomstick Co",
      role: "Ecommerce Manager",
      date: "2022 - 2024",
      bullets: [
        "Built and operated a D2C e-commerce business from the ground up, owning product catalog, pricing, inventory, fulfillment, and customer experience.",
        "Manage Shopify Plus, payments, shipping, and product data to support nationwide sales across all 50 U.S. states.",
        "Develop and maintain scalable product, labeling, and compliance systems to support growth across new SKUs and sales channels."
      ]
    },
    {
      company: "Thrive Web Designs",
      role: "Web Developer",
      date: "2022 - 2022",
      bullets: []
    },
    {
      company: "Target",
      role: "Guest Service Specialist",
      date: "2018 - 2022",
      bullets: []
    }
  ],
  education: {
    school: "Boise State University",
    degree: "B.S. in Physics",
    date: "2017 - 2022"
  }
};

const cards = [
  {
    id: 'magician',
    title: 'The Magician',
    subtitle: 'About Me',
    icon: Wand2,
    reading: "The Magician reveals a master of resources. Just as the Magician turns elements into reality, I transform broken catalogs into high-performing growth engines. You have drawn the card of execution and manifestation—hire me to turn your marketplace potential into tangible revenue.",
    content: (
      <div className="space-y-4">
        <h3 className="text-3xl font-serif text-amber-400 border-b border-amber-900/50 pb-2">The Magician</h3>
        <p className="text-amber-100/90 leading-relaxed text-lg">{resumeData.summary}</p>
      </div>
    )
  },
  {
    id: 'emperor',
    title: 'The Emperor',
    subtitle: 'The Rag Company',
    icon: Crown,
    reading: "The Emperor signifies structure, authority, and strategic control. Drawing this card suggests your team needs someone who can take ownership of a P&L and build scalable operating processes. I bring the discipline needed to manage multi-thousand-SKU catalogs and drive seven-figure growth.",
    content: (
      <div className="space-y-6">
        <h3 className="text-3xl font-serif text-amber-400 border-b border-amber-900/50 pb-2">The Emperor</h3>
        {resumeData.experience.slice(0, 2).map((exp, i) => (
          <div key={i} className="space-y-2">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <h4 className="text-xl font-medium text-amber-200">{exp.role}</h4>
              <span className="text-sm text-amber-500/80 font-mono">{exp.date}</span>
            </div>
            <p className="text-sm text-amber-400/60 uppercase tracking-wider">{exp.company}</p>
            <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-amber-100/80">
              {exp.bullets.map((b, j) => <li key={j} className="pl-1">{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    )
  },
  {
    id: 'chariot',
    title: 'The Chariot',
    subtitle: 'Previous Quests',
    icon: Rocket,
    reading: "The Chariot represents overcoming obstacles through determination and focus. This card appears when you need someone who can navigate complex cross-border synchronizations and resolve high-volume compliance defects. I drive projects forward, no matter the roadblocks.",
    content: (
      <div className="space-y-6">
        <h3 className="text-3xl font-serif text-amber-400 border-b border-amber-900/50 pb-2">The Chariot</h3>
        {resumeData.experience.slice(2).map((exp, i) => (
          <div key={i} className="space-y-2">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <h4 className="text-xl font-medium text-amber-200">{exp.role}</h4>
              <span className="text-sm text-amber-500/80 font-mono">{exp.date}</span>
            </div>
            <p className="text-sm text-amber-400/60 uppercase tracking-wider">{exp.company}</p>
            {exp.bullets.length > 0 && (
              <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-amber-100/80">
                {exp.bullets.map((b, j) => <li key={j} className="pl-1">{b}</li>)}
              </ul>
            )}
          </div>
        ))}
      </div>
    )
  },
  {
    id: 'hierophant',
    title: 'The Hierophant',
    subtitle: 'Skills & Mastery',
    icon: BookOpen,
    reading: "The Hierophant is the keeper of specialized knowledge and systems. You have drawn the card of expertise. From Amazon Seller Central to Shopify Plus, and from GA4 to Financial Modeling, I possess the deep technical knowledge required to optimize your omnichannel strategy.",
    content: (
      <div className="space-y-6">
        <h3 className="text-3xl font-serif text-amber-400 border-b border-amber-900/50 pb-2">The Hierophant</h3>
        <div className="flex flex-wrap gap-3">
          {resumeData.skills.map((skill, i) => (
            <span key={i} className="px-4 py-2 bg-amber-900/30 border border-amber-700/50 rounded-full text-sm text-amber-200 shadow-inner">
              {skill}
            </span>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 'star',
    title: 'The Star',
    subtitle: 'Education',
    icon: Star,
    reading: "The Star brings hope, inspiration, and analytical clarity. With a B.S. in Physics, my foundation is built on rigorous problem-solving and data analysis. Drawing this card means your team will benefit from a highly analytical mind capable of deciphering complex marketplace algorithms.",
    content: (
      <div className="space-y-6">
        <h3 className="text-3xl font-serif text-amber-400 border-b border-amber-900/50 pb-2">The Star</h3>
        <div className="bg-amber-900/20 p-6 rounded-xl border border-amber-800/40">
          <h4 className="text-2xl font-medium text-amber-200">{resumeData.education.degree}</h4>
          <p className="text-lg text-amber-400/80 mt-1">{resumeData.education.school}</p>
          <p className="text-md text-amber-500/80 font-mono mt-4">{resumeData.education.date}</p>
        </div>
      </div>
    )
  },
  {
    id: 'world',
    title: 'The World',
    subtitle: 'Contact',
    icon: Globe,
    reading: "The World represents successful completion and new beginnings. You have reached the end of your search. Drawing this card is a sign that it's time to connect. Reach out, and let's begin a successful new cycle together.",
    content: (
      <div className="space-y-6">
        <h3 className="text-3xl font-serif text-amber-400 border-b border-amber-900/50 pb-2">The World</h3>
        <div className="space-y-6 bg-amber-900/20 p-6 rounded-xl border border-amber-800/40">
          <p className="text-amber-200 flex items-center gap-4 text-lg">
            <span className="text-amber-500/80 uppercase text-sm tracking-widest w-24">Email</span>
            <a href={`mailto:${resumeData.contact.email}`} className="hover:text-amber-400 transition-colors">{resumeData.contact.email}</a>
          </p>
          <p className="text-amber-200 flex items-center gap-4 text-lg">
            <span className="text-amber-500/80 uppercase text-sm tracking-widest w-24">Phone</span>
            <span>{resumeData.contact.phone}</span>
          </p>
          <p className="text-amber-200 flex items-center gap-4 text-lg">
            <span className="text-amber-500/80 uppercase text-sm tracking-widest w-24">Location</span>
            <span>{resumeData.contact.location}</span>
          </p>
        </div>
      </div>
    )
  }
];

export default function App() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isReadingMode, setIsReadingMode] = useState(false);
  const [drawnCard, setDrawnCard] = useState<typeof cards[0] | null>(null);
  const [isShuffling, setIsShuffling] = useState(false);

  // Handle the random draw
  const drawCard = () => {
    setIsShuffling(true);
    setDrawnCard(null);
    setSelectedId(null);
    
    // Simulate shuffling time
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * cards.length);
      setDrawnCard(cards[randomIndex]);
      setIsShuffling(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500/30 overflow-x-hidden relative">
      {/* Mystical Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(40,20,60,0.8)_0%,rgba(10,5,20,1)_100%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-screen" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-20">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 space-y-4"
        >
          <div className="inline-flex items-center justify-center gap-2 text-amber-500 mb-2">
            <Sparkles className="w-5 h-5" />
            <span className="uppercase tracking-[0.3em] text-xs font-semibold">Interactive Portfolio</span>
            <Sparkles className="w-5 h-5" />
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-amber-200 to-amber-600 drop-shadow-sm">
            {resumeData.name}
          </h1>
          <p className="text-xl md:text-2xl text-amber-200/80 font-light tracking-wide">
            {resumeData.title}
          </p>
        </motion.div>

        {/* Mode Toggle & Draw Button */}
        <div className="flex flex-col items-center justify-center gap-6 mb-16">
          <div className="flex items-center gap-4 bg-slate-900/50 p-1.5 rounded-full border border-amber-900/30 backdrop-blur-sm">
            <button
              onClick={() => { setIsReadingMode(false); setDrawnCard(null); }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${!isReadingMode ? 'bg-amber-600/20 text-amber-300 border border-amber-500/30 shadow-[0_0_15px_rgba(217,119,6,0.2)]' : 'text-slate-400 hover:text-amber-200'}`}
            >
              View Full Spread
            </button>
            <button
              onClick={() => setIsReadingMode(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isReadingMode ? 'bg-amber-600/20 text-amber-300 border border-amber-500/30 shadow-[0_0_15px_rgba(217,119,6,0.2)]' : 'text-slate-400 hover:text-amber-200'}`}
            >
              Get a Reading
            </button>
          </div>

          <AnimatePresence mode="wait">
            {isReadingMode && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="flex flex-col items-center gap-4"
              >
                <p className="text-amber-200/70 italic text-center max-w-md">
                  "Seeker, draw a card to reveal why the fates have brought my resume to your desk today."
                </p>
                <button
                  onClick={drawCard}
                  disabled={isShuffling}
                  className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-b from-amber-700 to-amber-900 text-amber-100 rounded-full font-serif text-lg tracking-wider overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(217,119,6,0.4)] disabled:opacity-50 disabled:hover:scale-100"
                >
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay" />
                  <Shuffle className={`w-5 h-5 ${isShuffling ? 'animate-spin' : ''}`} />
                  {isShuffling ? 'Consulting the Fates...' : 'Draw a Card'}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Reading Mode View */}
        <AnimatePresence mode="wait">
          {isReadingMode && drawnCard && !isShuffling && (
            <motion.div
              key="reading-result"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ type: "spring", duration: 0.8 }}
              className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center md:items-start"
            >
              {/* The Drawn Card */}
              <div className="w-full max-w-[300px] shrink-0">
                <div className="relative w-full aspect-[2/3] rounded-2xl border-2 border-amber-500/50 bg-gradient-to-br from-slate-900 to-slate-950 p-6 flex flex-col items-center justify-center text-center shadow-[0_0_40px_rgba(245,158,11,0.2)] overflow-hidden">
                  <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-amber-500/50" />
                  <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-amber-500/50" />
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-amber-500/50" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-amber-500/50" />
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay" />
                  
                  <div className="mb-6 text-amber-400">
                    <drawnCard.icon size={80} strokeWidth={1} />
                  </div>
                  <h2 className="text-3xl font-serif text-amber-300 mb-2 uppercase tracking-widest">
                    {drawnCard.title}
                  </h2>
                  <p className="text-amber-500/60 font-mono text-sm uppercase tracking-wider">
                    {drawnCard.subtitle}
                  </p>
                </div>
              </div>

              {/* The Fortune/Reading */}
              <div className="flex-1 space-y-6 bg-slate-900/50 p-8 rounded-2xl border border-amber-900/50 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif text-amber-400 italic">Your Reading:</h3>
                  <p className="text-lg text-amber-100/90 leading-relaxed font-serif">
                    {drawnCard.reading}
                  </p>
                </div>

                <div className="pt-6 border-t border-amber-900/50 mt-6">
                  <button
                    onClick={() => setSelectedId(drawnCard.id)}
                    className="text-amber-400 hover:text-amber-300 font-medium tracking-wide flex items-center gap-2 transition-colors group"
                  >
                    Reveal the details of this card 
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Standard Spread View */}
        <AnimatePresence mode="wait">
          {!isReadingMode && (
            <motion.div 
              key="standard-spread"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto"
            >
              {cards.map((card, index) => (
                <motion.div
                  key={card.id}
                  layoutId={`card-container-${card.id}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => setSelectedId(card.id)}
                  className="group cursor-pointer perspective-1000"
                >
                  <motion.div 
                    className="relative w-full aspect-[2/3] rounded-2xl border-2 border-amber-900/50 bg-gradient-to-br from-slate-900 to-slate-950 p-6 flex flex-col items-center justify-center text-center shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-500 group-hover:border-amber-500/50 group-hover:shadow-[0_0_40px_rgba(245,158,11,0.2)]"
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Card Ornaments */}
                    <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-amber-700/50" />
                    <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-amber-700/50" />
                    <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-amber-700/50" />
                    <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-amber-700/50" />
                    
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay" />
                    
                    <motion.div layoutId={`icon-${card.id}`} className="mb-6 text-amber-500/80 group-hover:text-amber-400 transition-colors">
                      <card.icon size={64} strokeWidth={1} />
                    </motion.div>
                    
                    <motion.h2 layoutId={`title-${card.id}`} className="text-2xl font-serif text-amber-300 mb-2 uppercase tracking-widest">
                      {card.title}
                    </motion.h2>
                    
                    <motion.p layoutId={`subtitle-${card.id}`} className="text-amber-500/60 font-mono text-sm uppercase tracking-wider">
                      {card.subtitle}
                    </motion.p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expanded Card Modal (Shared between both modes) */}
        <AnimatePresence>
          {selectedId && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
              />
              <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none p-4 md:p-8">
                {cards.filter(c => c.id === selectedId).map(card => (
                  <motion.div
                    key={card.id}
                    layoutId={`card-container-${card.id}`}
                    className="relative w-full max-w-2xl max-h-[90vh] bg-slate-900 border border-amber-700/50 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden pointer-events-auto flex flex-col"
                  >
                    {/* Modal Header */}
                    <div className="p-6 border-b border-amber-900/50 bg-slate-950/50 flex justify-between items-center shrink-0">
                      <div className="flex items-center gap-4">
                        <motion.div layoutId={`icon-${card.id}`} className="text-amber-500">
                          <card.icon size={32} strokeWidth={1.5} />
                        </motion.div>
                        <div>
                          <motion.h2 layoutId={`title-${card.id}`} className="text-xl font-serif text-amber-300 uppercase tracking-widest">
                            {card.title}
                          </motion.h2>
                          <motion.p layoutId={`subtitle-${card.id}`} className="text-amber-500/60 font-mono text-xs uppercase tracking-wider">
                            {card.subtitle}
                          </motion.p>
                        </div>
                      </div>
                      <button 
                        onClick={() => setSelectedId(null)}
                        className="p-2 text-amber-500/60 hover:text-amber-300 hover:bg-amber-900/30 rounded-full transition-colors"
                      >
                        <X size={24} />
                      </button>
                    </div>

                    {/* Modal Content */}
                    <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {card.content}
                      </motion.div>
                    </div>
                    
                    {/* Decorative bottom edge */}
                    <div className="h-2 bg-gradient-to-r from-amber-900/20 via-amber-600/40 to-amber-900/20 shrink-0" />
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
