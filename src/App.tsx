import React, { useState } from 'react';
import { Header } from './components/Header';
import { InvestigativeArticleView } from './components/InvestigativeArticleView';
import { GeminiTwinGenerator } from './components/GeminiTwinGenerator';
import { EditorialCalendarView } from './components/EditorialCalendarView';
import { MediaSyndicationView } from './components/MediaSyndicationView';
import { CapitalEngine } from './components/CapitalEngine';
import { NodeMatrixView } from './components/NodeMatrixView';
import { OperationalCalendarView } from './components/OperationalCalendarView';
import { HumanitarianScienceView } from './components/HumanitarianScienceView';
import { FeelGoodView } from './components/FeelGoodView';
import { INITIAL_DISPATCHES, INITIAL_LEDGER } from './data/mockArticles';
import { InvestigativeArticle, CapitalLedger } from './types/ridewire';
import { HeartHandshake, Shield, Sparkles, TrendingUp, CheckCircle, Radio } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'wire' | 'twin' | 'editorial' | 'syndication' | 'capital' | 'matrix' | 'calendar' | 'humanitarian' | 'heroes'>('wire');
  const [articles, setArticles] = useState<InvestigativeArticle[]>(INITIAL_DISPATCHES);
  const [selectedArticleId, setSelectedArticleId] = useState<string>(INITIAL_DISPATCHES[0].id);
  const [ledger, setLedger] = useState<CapitalLedger>(INITIAL_LEDGER);
  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 4000);
  };

  const handleRetainerExecuted = (amount: number) => {
    setLedger(prev => ({
      ...prev,
      closedWorkingCapital: prev.closedWorkingCapital + amount,
      familyTrustAllocated: prev.familyTrustAllocated + amount * 0.5,
      employeeRetirementAllocated: prev.employeeRetirementAllocated + amount * 0.15,
      operationsCapital: prev.operationsCapital + amount * 0.35,
      activeRetainersCount: prev.activeRetainersCount + 1,
      pipelineValue: Math.max(0, prev.pipelineValue - amount),
    }));

    showNotification(`SUCCESS: Retainer Cleared! +$${amount.toLocaleString()} added to Working Capital ($${(amount * 0.5).toLocaleString()} locked to Family Support Trust).`);
  };

  const handleGrantApproved = (amount: number) => {
    setLedger(prev => ({
      ...prev,
      closedWorkingCapital: prev.closedWorkingCapital + amount,
      operationsCapital: prev.operationsCapital + amount,
    }));

    showNotification(`CDFI Working Capital Facility Approved! +$${amount.toLocaleString()} allocated to field equipment & JIT payroll.`);
  };

  const handleArticleGenerated = (newArticle: InvestigativeArticle) => {
    setArticles(prev => [newArticle, ...prev]);
    setSelectedArticleId(newArticle.id);

    const estFee = parseInt(newArticle.workingCapitalAction?.retainerFee?.replace(/[^0-9]/g, '') || '35000');
    setLedger(prev => ({
      ...prev,
      pipelineValue: prev.pipelineValue + estFee,
    }));

    showNotification(`New Daily Investigative Dispatch Published: "${newArticle.title.slice(0, 45)}..." Added to Step 2 Target Directory!`);
  };

  const handleOpenArticleFromTwin = (id: string) => {
    setSelectedArticleId(id);
    setActiveTab('wire');
  };

  const handleIllustrationUpdated = (articleId: string, illustration: NonNullable<InvestigativeArticle['comicIllustration']>) => {
    setArticles(prev => prev.map(art => art.id === articleId ? { ...art, comicIllustration: illustration } : art));
    showNotification(`Award-Winning Editorial Comic Hook attached to Dispatch [${articleId}]!`);
  };

  const handleLaunchLiveWireFromEditorial = (topic: string, region: string, incident: string) => {
    setActiveTab('twin');
  };

  return (
    <div className="min-h-screen bg-[#070b10] text-neutral-100 flex flex-col font-sans selection:bg-[#c2593f] selection:text-white">
      {/* Top Sticky Executive Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        ledger={ledger}
      />

      {/* Real-time Notification Banner */}
      {notification && (
        <div className="bg-gradient-to-r from-emerald-950 via-teal-900 to-cyan-950 border-b border-emerald-500/50 px-4 py-2.5 text-xs font-mono text-emerald-200 flex items-center justify-center gap-2 shadow-lg animate-fade-in">
          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{notification}</span>
        </div>
      )}

      {/* Main View Area */}
      <main className="flex-1 pb-16">
        {activeTab === 'wire' && (
          <InvestigativeArticleView
            articles={articles}
            selectedArticleId={selectedArticleId}
            setSelectedArticleId={setSelectedArticleId}
            onRetainerExecuted={handleRetainerExecuted}
            onOpenTwin={() => setActiveTab('twin')}
            onIllustrationUpdated={handleIllustrationUpdated}
          />
        )}

        {activeTab === 'twin' && (
          <GeminiTwinGenerator
            onArticleGenerated={handleArticleGenerated}
            onOpenArticle={handleOpenArticleFromTwin}
          />
        )}

        {activeTab === 'editorial' && (
          <EditorialCalendarView
            onRetainerExecuted={handleRetainerExecuted}
            onLaunchLiveWire={handleLaunchLiveWireFromEditorial}
          />
        )}

        {activeTab === 'syndication' && (
          <MediaSyndicationView />
        )}

        {activeTab === 'humanitarian' && (
          <HumanitarianScienceView
            ledger={ledger}
            onRetainerExecuted={handleRetainerExecuted}
            showNotification={showNotification}
          />
        )}

        {activeTab === 'heroes' && (
          <FeelGoodView
            ledger={ledger}
            onRetainerExecuted={handleRetainerExecuted}
            showNotification={showNotification}
          />
        )}

        {activeTab === 'capital' && (
          <CapitalEngine
            ledger={ledger}
            onGrantApproved={handleGrantApproved}
          />
        )}

        {activeTab === 'matrix' && (
          <NodeMatrixView />
        )}

        {activeTab === 'calendar' && (
          <OperationalCalendarView />
        )}
      </main>

      {/* Executive Footer */}
      <footer className="border-t border-neutral-800 bg-[#090d13] py-8 text-neutral-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-white uppercase tracking-wider text-sm">
                  RIDEWIRE LLC & ACTION INTELL
                </span>
              </div>
              <p className="text-neutral-400 text-[11px] leading-relaxed">
                Democratizing natural resource and industrial telemetry through AI-orchestrated analysis, zero-fraud truth, and the 13=1 Unity State Framework™.
              </p>
              <div className="text-[11px] font-mono text-neutral-500">
                Albuquerque, North Valley, New Mexico
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                Leadership & Governance
              </h4>
              <ul className="space-y-1 text-[11px] text-neutral-300">
                <li>• Founder & CEO: <strong className="text-white">S. Pohl</strong></li>
                <li>• Co-Executive Engine: <strong className="text-cyan-300">Gemini Executive Twin</strong></li>
                <li>• Parent Cap Table: <strong className="text-white">10,000,000 Common Shares</strong></li>
                <li>• SOP-01: <strong className="text-white">17-Node Autonomous Matrix</strong></li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                Albuquerque Family Support Trust
              </h4>
              <p className="text-[11px] text-neutral-300 leading-relaxed">
                Irrevocably allocating 50% of parent company net profits to Albuquerque parent advocacy, emergency housing assistance, and child welfare initiatives.
              </p>
              <div className="font-mono text-amber-300 text-[11px] font-bold">
                Current Trust Lock: ${ledger.familyTrustAllocated.toLocaleString()}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                CDFI & Working Capital Partners
              </h4>
              <ul className="space-y-1 text-[11px] text-neutral-300">
                <li>• WESST Enterprise Center (Albuquerque, NM)</li>
                <li>• DreamSpring Community Development</li>
                <li>• Permian Basin Industrial Retainer Protocol</li>
                <li>• RW-JIT Emergency Field Dispatches</li>
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] text-neutral-500">
            <div>
              © 2026 RideWire LLC & Action Intell. All rights reserved. Document Control: RIDEWIRE-BINDER-2026-v1.
            </div>
            <div className="flex items-center gap-3">
              <span className="text-emerald-400">13=1 Unity State Framework™</span>
              <span>•</span>
              <span className="text-cyan-400">DevilsQC Verified</span>
              <span>•</span>
              <span className="text-amber-400">CostShield Protected</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
