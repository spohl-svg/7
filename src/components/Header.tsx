import React from 'react';
import { Shield, Sparkles, Building2, TrendingUp, Calendar, HeartHandshake, Award, Radio, Newspaper, Compass, Star } from 'lucide-react';
import { CapitalLedger } from '../types/ridewire';

interface HeaderProps {
  activeTab: 'wire' | 'twin' | 'editorial' | 'syndication' | 'capital' | 'matrix' | 'calendar' | 'humanitarian' | 'heroes';
  setActiveTab: (tab: 'wire' | 'twin' | 'editorial' | 'syndication' | 'capital' | 'matrix' | 'calendar' | 'humanitarian' | 'heroes') => void;
  ledger: CapitalLedger;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, ledger }) => {
  return (
    <header className="border-b border-amber-900/30 bg-[#0c1017] sticky top-0 z-40 backdrop-blur shadow-2xl">
      {/* Top Banner - Executive Identity & Trust Lock */}
      <div className="bg-gradient-to-r from-[#201410] via-[#151d24] to-[#121c1f] border-b border-amber-500/20 px-4 py-1.5 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-mono font-semibold text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-500/40">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              RIDEWIRE LLC & ACTION INTELL
            </span>
            <span className="hidden sm:inline text-neutral-400">|</span>
            <span className="text-neutral-300 font-medium hidden md:inline">
              Founder & CEO: <strong className="text-white">S. Pohl</strong> × Gemini Executive Twin
            </span>
            <span className="hidden lg:inline text-amber-200/70 font-mono text-[11px] bg-black/40 px-2 py-0.5 rounded">
              North Valley, Albuquerque, NM
            </span>
          </div>

          <div className="flex items-center gap-3 font-mono text-[11px]">
            <div className="flex items-center gap-1.5 bg-[#8b3820]/30 border border-[#c2593f]/40 px-2 py-0.5 rounded text-amber-200">
              <HeartHandshake className="w-3.5 h-3.5 text-[#c2593f]" />
              <span className="hidden sm:inline">50% Net Trust Lock:</span>
              <strong className="text-white">${ledger.familyTrustAllocated.toLocaleString()}</strong>
              <span className="text-amber-400/80 text-[10px] hidden xl:inline">(Albuquerque Family Support Trust)</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 bg-[#366470]/30 border border-[#4a7b7d]/40 px-2 py-0.5 rounded text-cyan-200">
              <Award className="w-3.5 h-3.5 text-cyan-400" />
              <span>15% 401(k) Pool:</span>
              <strong className="text-white">${ledger.employeeRetirementAllocated.toLocaleString()}</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Main Command Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        {/* Brand & Subtitle */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#c2593f] via-[#b87333] to-[#366470] p-0.5 shadow-lg shadow-amber-900/30">
            <div className="w-full h-full bg-[#0d131a] rounded-[7px] flex items-center justify-center">
              <Shield className="w-5 h-5 text-amber-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-black tracking-wider text-white uppercase font-mono">
                RIDE<span className="text-[#c2593f]">WIRE</span>
              </h1>
              <span className="text-[10px] font-bold tracking-widest uppercase bg-gradient-to-r from-amber-500 to-[#c2593f] text-black px-1.5 py-0.5 rounded font-mono">
                13=1 CORE
              </span>
            </div>
            <p className="text-[11px] text-neutral-400 font-sans tracking-wide">
              Daily Investigative Wire & Working Capital Dispatch Desk
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1 sm:gap-2 bg-[#141b24] p-1 rounded-lg border border-neutral-800">
          <button
            onClick={() => setActiveTab('wire')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              activeTab === 'wire'
                ? 'bg-[#c2593f] text-white shadow-md shadow-[#c2593f]/30'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Investigative Wire</span>
          </button>

          <button
            onClick={() => setActiveTab('editorial')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              activeTab === 'editorial'
                ? 'bg-gradient-to-r from-red-600 via-amber-600 to-[#c2593f] text-white shadow-md shadow-red-950/40'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
            }`}
          >
            <Radio className="w-3.5 h-3.5 text-red-400 animate-pulse" />
            <span>AI Newsroom & Editorial</span>
          </button>

          <button
            onClick={() => setActiveTab('syndication')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              activeTab === 'syndication'
                ? 'bg-gradient-to-r from-amber-600 to-red-600 text-white shadow-md shadow-amber-950/40'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
            }`}
          >
            <Newspaper className="w-3.5 h-3.5 text-amber-300" />
            <span>Front Page & Comic</span>
          </button>

          <button
            onClick={() => setActiveTab('heroes')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              activeTab === 'heroes'
                ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-[#c2593f] text-black font-black shadow-md shadow-amber-950/40 ring-1 ring-amber-300'
                : 'text-amber-300/90 hover:text-white hover:bg-amber-950/40'
            }`}
          >
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Who's Doing It Right</span>
            <span className="hidden xl:inline text-[9px] font-mono bg-black text-amber-300 border border-amber-400/50 px-1 rounded uppercase font-black">
              GOLD SEAL
            </span>
          </button>

          <button
            onClick={() => setActiveTab('humanitarian')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              activeTab === 'humanitarian'
                ? 'bg-gradient-to-r from-emerald-600 via-teal-600 to-[#366470] text-white shadow-md shadow-emerald-950/40 ring-1 ring-emerald-400/50'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
            }`}
          >
            <Compass className="w-3.5 h-3.5 text-emerald-400" />
            <span>Community Aid & Earth Math</span>
            <span className="hidden xl:inline text-[9px] font-mono bg-emerald-950 text-emerald-300 border border-emerald-500/40 px-1 rounded uppercase font-bold">
              13=1
            </span>
          </button>

          <button
            onClick={() => setActiveTab('twin')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              activeTab === 'twin'
                ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-md shadow-cyan-900/40'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>Gemini Twin Studio</span>
          </button>

          <button
            onClick={() => setActiveTab('capital')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              activeTab === 'capital'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-900/40'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5 text-amber-300" />
            <span>Working Capital (${(ledger.closedWorkingCapital / 1000).toFixed(0)}k)</span>
          </button>

          <button
            onClick={() => setActiveTab('matrix')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              activeTab === 'matrix'
                ? 'bg-[#366470] text-white shadow-md shadow-cyan-900/30'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
            }`}
          >
            <Shield className="w-3.5 h-3.5 text-teal-300" />
            <span className="hidden sm:inline">17-Node</span> Matrix
          </button>

          <button
            onClick={() => setActiveTab('calendar')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              activeTab === 'calendar'
                ? 'bg-stone-700 text-white shadow-md'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
            }`}
          >
            <Calendar className="w-3.5 h-3.5 text-stone-300" />
            <span className="hidden md:inline">Calendar</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
