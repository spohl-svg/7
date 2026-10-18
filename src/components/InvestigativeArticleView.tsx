import React, { useState } from 'react';
import { 
  AlertTriangle, 
  Send, 
  DollarSign, 
  FileText, 
  Cpu, 
  Radio, 
  Building, 
  CheckCircle2, 
  Share2, 
  Printer, 
  Flame,
  ArrowRight,
  Shield,
  Clock,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { InvestigativeArticle, TargetEntity } from '../types/ridewire';
import { AudioPlayer } from './AudioPlayer';
import { TelemetryChart } from './TelemetryChart';
import { CommercialProposalModal } from './CommercialProposalModal';
import { IllustrationGenerator } from './IllustrationGenerator';

interface InvestigativeArticleViewProps {
  articles: InvestigativeArticle[];
  selectedArticleId: string;
  setSelectedArticleId: (id: string) => void;
  onRetainerExecuted: (amount: number) => void;
  onOpenTwin: () => void;
  onIllustrationUpdated?: (articleId: string, illustration: NonNullable<InvestigativeArticle['comicIllustration']>) => void;
}

export const InvestigativeArticleView: React.FC<InvestigativeArticleViewProps> = ({
  articles,
  selectedArticleId,
  setSelectedArticleId,
  onRetainerExecuted,
  onOpenTwin,
  onIllustrationUpdated
}) => {
  const currentArticle = articles.find(a => a.id === selectedArticleId) || articles[0];
  const [selectedTarget, setSelectedTarget] = useState<TargetEntity | null>(null);
  const [dispatchedAlertCode, setDispatchedAlertCode] = useState<string | null>(null);
  const [sharedToast, setSharedToast] = useState(false);
  const [embargoStates, setEmbargoStates] = useState<Record<string, 'EMBARGO_ACTIVE' | 'OUTREACH_TRANSMITTED' | 'RESOLVED_PRIVATELY' | 'RELEASED_TO_WIRE'>>({});

  const currentEmbargo = embargoStates[currentArticle.id] || 'EMBARGO_ACTIVE';

  const handleTransmitEmbargo = () => {
    setEmbargoStates(prev => ({ ...prev, [currentArticle.id]: 'OUTREACH_TRANSMITTED' }));
    setDispatchedAlertCode('EMBARGO_TRANSMITTED');
    setTimeout(() => setDispatchedAlertCode(null), 4000);
  };

  const handleResolvePrivately = (amount: number) => {
    setEmbargoStates(prev => ({ ...prev, [currentArticle.id]: 'RESOLVED_PRIVATELY' }));
    onRetainerExecuted(amount);
  };

  const handleReleaseToWire = () => {
    setEmbargoStates(prev => ({ ...prev, [currentArticle.id]: 'RELEASED_TO_WIRE' }));
  };

  const handleDispatchSms = (code: string, entity: string) => {
    setDispatchedAlertCode(code);
    setTimeout(() => {
      setDispatchedAlertCode(null);
    }, 4000);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setSharedToast(true);
    setTimeout(() => setSharedToast(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      {/* Top Ticker: Live Wire Feeds */}
      <div className="bg-[#121822] border border-amber-900/40 rounded-xl p-3 flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-red-950/80 text-red-400 border border-red-500/40 font-mono text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-ping"></span>
            DAILY WIRE-TAP
          </span>
          <span className="text-xs text-neutral-300 font-sans hidden sm:inline">
            Active Dispatches Monitored by RideWire 13=1 Core:
          </span>
        </div>

        {/* Dispatch Selection Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
          {articles.map((art) => (
            <button
              key={art.id}
              onClick={() => setSelectedArticleId(art.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
                art.id === currentArticle.id
                  ? 'bg-[#c2593f] text-white shadow-md shadow-[#c2593f]/30'
                  : 'bg-[#18212c] text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {art.severity === 'CRITICAL' && <Flame className="w-3.5 h-3.5 text-amber-300" />}
              <span>{art.category.split(' ')[0]}</span>
            </button>
          ))}

          <button
            onClick={onOpenTwin}
            className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold whitespace-nowrap bg-gradient-to-r from-cyan-600/30 to-teal-600/30 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-600/40 transition-all flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>+ Investigate New Crisis</span>
          </button>
        </div>
      </div>

      {/* RESPONSIBLE DISCLOSURE & PRE-PUBLICATION EMBARGO CONSOLE */}
      <div className={`rounded-2xl border-2 p-5 transition-all shadow-xl ${
        currentEmbargo === 'RESOLVED_PRIVATELY'
          ? 'bg-gradient-to-r from-emerald-950/70 via-[#101c18] to-[#0a1410] border-emerald-500/60'
          : currentEmbargo === 'RELEASED_TO_WIRE'
          ? 'bg-gradient-to-r from-red-950/70 via-[#1a1212] to-[#0f0b0b] border-red-500/60'
          : 'bg-gradient-to-r from-amber-950/70 via-[#191512] to-[#0d1217] border-amber-500/50'
      }`}>
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800/80 pb-3 mb-3">
          <div className="flex items-center gap-2.5">
            <Shield className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-black uppercase tracking-wider text-white">
                  RESPONSIBLE DISCLOSURE PROTOCOL:
                </span>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                  currentEmbargo === 'RESOLVED_PRIVATELY'
                    ? 'bg-emerald-900/80 text-emerald-200 border border-emerald-500/50'
                    : currentEmbargo === 'RELEASED_TO_WIRE'
                    ? 'bg-red-900/80 text-red-200 border border-red-500/50'
                    : currentEmbargo === 'OUTREACH_TRANSMITTED'
                    ? 'bg-cyan-900/80 text-cyan-200 border border-cyan-500/50'
                    : 'bg-amber-900/80 text-amber-200 border border-amber-500/50 animate-pulse'
                }`}>
                  {currentEmbargo === 'RESOLVED_PRIVATELY' ? '✓ RESOLVED UNDER PRIVATE RETAINER (PROACTIVE CASE STUDY)' :
                   currentEmbargo === 'RELEASED_TO_WIRE' ? '⚡ LIVE ON PUBLIC NEWS WIRES (EMBARGO EXPIRED)' :
                   currentEmbargo === 'OUTREACH_TRANSMITTED' ? '✉ CONFIDENTIAL OUTREACH DELIVERED (PENDING OPERATOR)' :
                   '⏱ 48-HR CONFIDENTIAL EMBARGO ACTIVE (REACH OUT FIRST)'}
                </span>
              </div>
              <p className="text-[11px] text-neutral-300 font-sans mt-0.5">
                Target Operator: <strong className="text-white">{currentArticle.stepTwoTargetDirectory[0]?.entityName || 'Regional Midstream Infrastructure'}</strong> • Role: <span className="text-neutral-400">{currentArticle.stepTwoTargetDirectory[0]?.targetRole}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="text-neutral-400 text-[11px]">Embargo Window:</span>
            <span className="px-2.5 py-1 rounded bg-black/60 border border-amber-500/40 text-amber-300 font-bold">
              {currentEmbargo === 'RESOLVED_PRIVATELY' ? 'RETAINER SECURED' :
               currentEmbargo === 'RELEASED_TO_WIRE' ? 'SYNDICATED' :
               '47:58:14 REMAINING'}
            </span>
          </div>
        </div>

        {/* Strategic Guidance Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 text-xs font-sans text-neutral-300">
          <div className="lg:col-span-8 space-y-2">
            <p className="leading-relaxed">
              <strong className="text-amber-300 font-mono">Executive Rule: Reach Out Before Blasting on Public News.</strong> Blindsiding an operator on Google News or Yahoo Finance creates immediate hostile defense, public panic, and legal pushback. By transmitting an advance confidential briefing under a strict 48-Hour Embargo, RideWire gives their VP of Operations the opportunity to sign our diagnostic retainer under NDA, deploy our RW-JIT isolation code, and save $40M+ in downtime quietly.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-neutral-400 pt-1">
              <span>• If Operator Signs: Published as a <strong>Proactive Engineering Reliability Win</strong>.</span>
              <span>• If Operator Ignores: Released to <strong>National Investigative Wires</strong>.</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-2">
            {currentEmbargo !== 'RESOLVED_PRIVATELY' && (
              <button
                onClick={handleTransmitEmbargo}
                className="w-full py-2 px-3 rounded-lg bg-cyan-700 hover:bg-cyan-600 text-white font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-md shadow-cyan-950/40"
              >
                <Send className="w-3.5 h-3.5" />
                <span>
                  {currentEmbargo === 'OUTREACH_TRANSMITTED'
                    ? 'Re-Send Encrypted 48-Hr Embargo Notice'
                    : 'Transmit 48-Hr Confidential Embargo'}
                </span>
              </button>
            )}

            {currentEmbargo !== 'RESOLVED_PRIVATELY' && (
              <button
                onClick={() => {
                  const target = currentArticle.stepTwoTargetDirectory[0];
                  if (target) setSelectedTarget(target);
                }}
                className="w-full py-2 px-3 rounded-lg bg-[#c2593f] hover:bg-[#b54a32] text-white font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-md shadow-amber-950/40"
              >
                <DollarSign className="w-3.5 h-3.5" />
                <span>Present Institutional B2B Retainer</span>
              </button>
            )}

            {currentEmbargo === 'OUTREACH_TRANSMITTED' && (
              <button
                onClick={handleReleaseToWire}
                className="w-full py-1.5 px-3 rounded-lg bg-neutral-800 hover:bg-red-900/60 text-neutral-300 hover:text-red-200 border border-neutral-700 font-mono text-[11px] transition-all flex items-center justify-center gap-1.5"
              >
                <Radio className="w-3 h-3 text-red-400" />
                <span>Operator Unresponsive: Release to Public Wires</span>
              </button>
            )}

            {currentEmbargo === 'RESOLVED_PRIVATELY' && (
              <div className="bg-emerald-950/90 border border-emerald-500/50 p-3 rounded-lg text-emerald-200 font-mono text-xs text-center font-bold">
                ✓ Retainer Executed Under NDA • Asset Shielded
              </div>
            )}
          </div>
        </div>

        {dispatchedAlertCode === 'EMBARGO_TRANSMITTED' && (
          <div className="mt-3 bg-cyan-950/90 border border-cyan-500/60 text-cyan-200 text-xs font-mono p-2.5 rounded-lg flex items-center gap-2 animate-fade-in">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>CONFIDENTIAL OUTREACH DELIVERED: Encrypted 48-hr embargo dossier and RW-JIT Code transmitted directly to VP of Operations. Public syndication held.</span>
          </div>
        )}
      </div>

      {/* Main Investigative Report Container */}
      <article className="bg-[#0e131b] border-2 border-neutral-800 rounded-2xl shadow-2xl overflow-hidden">
        {/* Newspaper Masthead Banner */}
        <div className="border-b-2 border-neutral-800 bg-[#090d13] px-6 py-4">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-neutral-400 border-b border-neutral-800/60 pb-2 mb-3">
            <div className="flex items-center gap-2">
              <span className="font-bold text-amber-400 uppercase tracking-widest">
                THE INDUSTRIAL WIRE-TAP • ACTION INTELL DISPATCH
              </span>
              <span>•</span>
              <span>{currentArticle.publishedDate}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                DevilsQC 100% Rule Validated
              </span>
              <span>•</span>
              <button 
                onClick={handleShare}
                className="hover:text-amber-400 transition-colors flex items-center gap-1"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{sharedToast ? 'Copied Link' : 'Syndicate'}</span>
              </button>
            </div>
          </div>

          {/* Severity & Dateline Badge */}
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-black uppercase tracking-wider ${
              currentArticle.severity === 'CRITICAL'
                ? 'bg-red-950 text-red-300 border border-red-500/50'
                : 'bg-amber-950 text-amber-300 border border-amber-500/50'
            }`}>
              {currentArticle.severity} OPERATIONAL VULNERABILITY
            </span>
            <span className="text-xs font-mono text-neutral-400">
              [{currentArticle.dateline}]
            </span>
          </div>

          {/* Headline & Subhead */}
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-snug font-serif">
            {currentArticle.title}
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 font-sans mt-2 leading-relaxed">
            {currentArticle.subtitle}
          </p>

          <div className="flex items-center justify-between mt-3 pt-3 border-t border-neutral-800/60 text-xs font-mono text-neutral-400">
            <span>Byline: <strong className="text-neutral-200">{currentArticle.byline}</strong></span>
            <span className="text-cyan-400 font-semibold">Classification: Confidential / 13=1 Proprietary</span>
          </div>
        </div>

        {/* 1st Person Executive Tone Box ("Cowboy Way") */}
        <div className="bg-gradient-to-r from-[#201410] via-[#161a22] to-[#121c22] border-b border-amber-600/40 p-5">
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-[#c2593f] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-md">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                  EXECUTIVE VOICE & BOTTOM-LINE DIRECTIVE: S. POHL, CEO
                </span>
                <span className="text-[10px] bg-black/50 text-neutral-300 px-2 py-0.5 rounded font-mono">
                  1st Person Priority
                </span>
              </div>
              <blockquote className="text-sm font-sans italic text-amber-100/90 mt-1 leading-relaxed">
                "{currentArticle.executiveVoice}"
              </blockquote>
            </div>
          </div>
        </div>

        {/* SOP-02 Audio Wire Broadcast */}
        <div className="px-6">
          <AudioPlayer 
            scriptText={currentArticle.audioSummaryScript} 
            title={currentArticle.title} 
          />
        </div>

        {/* Article Body Columns */}
        <div className="px-6 py-4 space-y-6">
          {/* Article Text Content */}
          <div className="prose prose-invert max-w-none text-neutral-200 text-sm sm:text-base leading-relaxed space-y-4">
            {currentArticle.currentEventBreakdown.split('\n\n').map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Graphic Journalism & Illustration Generator ("Never Read an Article Without a Picture") */}
          <IllustrationGenerator 
            article={currentArticle} 
            onIllustrationUpdated={onIllustrationUpdated} 
          />

          {/* Live Telemetry Forensics Visualizer */}
          <TelemetryChart forensics={currentArticle.telemetryForensics} />

          {/* RideWire 13=1 Logic Solution Section */}
          <div className="bg-[#121822] border-2 border-cyan-800/40 rounded-xl p-5 shadow-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-500/40 text-cyan-400">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
                  THE PROPRIETARY SOLUTION
                </span>
                <h3 className="text-base font-bold text-white font-mono">
                  How RideWire 13=1 Mathematical Consensus Resolves This Incident
                </h3>
              </div>
            </div>

            <div className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed space-y-3">
              <p>{currentArticle.thirteenLogicSolution}</p>
            </div>

            <div className="mt-4 pt-3 border-t border-cyan-900/40 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div className="bg-black/40 p-2 rounded border border-cyan-900/30">
                <span className="text-neutral-500 text-[10px] block">Ingestion Speed:</span>
                <span className="text-cyan-300 font-bold">14k Streams/sec</span>
              </div>
              <div className="bg-black/40 p-2 rounded border border-cyan-900/30">
                <span className="text-neutral-500 text-[10px] block">Consensus State:</span>
                <span className="text-emerald-300 font-bold">13=1 Unified</span>
              </div>
              <div className="bg-black/40 p-2 rounded border border-cyan-900/30">
                <span className="text-neutral-500 text-[10px] block">DevilsQC Sweep:</span>
                <span className="text-teal-300 font-bold">Zero-Hallucination Pass</span>
              </div>
              <div className="bg-black/40 p-2 rounded border border-cyan-900/30">
                <span className="text-neutral-500 text-[10px] block">Cost Liability:</span>
                <span className="text-amber-300 font-bold">$0.00 (CostShield)</span>
              </div>
            </div>
          </div>

          {/* STEP 2: GETTING IT TO THE PLACES WHO NEED US MOST */}
          <div className="border-2 border-amber-600/40 bg-gradient-to-b from-[#181a20] to-[#12151b] rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-900/40 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-[#c2593f] flex items-center justify-center text-black font-black font-mono shadow-md">
                  02
                </div>
                <div>
                  <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider block">
                    STEP 2 EXECUTION DIRECTIVE
                  </span>
                  <h3 className="text-lg font-black text-white font-mono">
                    Getting It To The Places Who Need Us Most
                  </h3>
                </div>
              </div>
              <span className="text-xs font-mono bg-black/60 border border-neutral-700 text-neutral-300 px-3 py-1 rounded-full">
                {currentArticle.stepTwoTargetDirectory.length} High-Value Target Entities Identified
              </span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 font-sans">
              Our 17-Node Matrix doesn't just diagnose failures—it maps the exact corporate operators, regulatory bureaus, and field engineers facing catastrophic liability. Click below to immediately generate and dispatch a formal Retainer Agreement & RW-JIT Emergency Code to put capital in our pocket today.
            </p>

            {/* Target Entities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
              {currentArticle.stepTwoTargetDirectory.map((target, idx) => (
                <div
                  key={idx}
                  className="bg-[#0f141c] border border-amber-700/30 hover:border-amber-500/60 rounded-xl p-4 flex flex-col justify-between transition-all hover:shadow-xl hover:shadow-amber-950/20 group"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[10px] font-mono font-bold text-amber-400 uppercase bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/40">
                        TARGET #{idx + 1}
                      </span>
                      <span className="text-xs font-mono font-black text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                        {target.estimatedDealValue}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                      {target.entityName}
                    </h4>

                    <div className="text-[11px] text-neutral-400 space-y-1">
                      <p><strong className="text-neutral-300">Decision Maker:</strong> {target.targetRole}</p>
                      <p><strong className="text-neutral-300">Sector / Location:</strong> {target.location}</p>
                    </div>

                    <div className="bg-[#141b24] p-2 rounded border border-neutral-800 text-[11px] text-red-300/90 leading-tight">
                      <strong>Pain Point:</strong> {target.operationalPain}
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 pt-1">
                      <span>JIT Code:</span>
                      <span className="text-cyan-300 font-bold">{target.rwJitCode}</span>
                    </div>
                  </div>

                  <div className="pt-4 mt-3 border-t border-neutral-800 space-y-2">
                    <button
                      onClick={() => setSelectedTarget(target)}
                      className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-gradient-to-r from-[#c2593f] to-amber-600 hover:from-[#d1654a] hover:to-amber-500 text-white font-mono text-xs font-bold shadow-md shadow-amber-950/40 transition-all"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Prepare Retainer Contract</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-auto" />
                    </button>

                    <button
                      onClick={() => handleDispatchSms(target.rwJitCode, target.entityName)}
                      className="w-full flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 font-mono text-[11px] transition-colors"
                    >
                      <Radio className="w-3 h-3 text-cyan-400" />
                      <span>
                        {dispatchedAlertCode === target.rwJitCode
                          ? '✓ SMS Alert Packet Dispatched'
                          : 'Dispatch RW-JIT SMS to Foreman'}
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* WORKING CAPITAL DESK (Putting Cash In Our Pocket) */}
          <div className="bg-gradient-to-r from-[#1c120c] via-[#181d24] to-[#121c21] border-2 border-emerald-500/40 rounded-2xl p-6 shadow-2xl">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-emerald-900/40 pb-3 mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400">
                  <DollarSign className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider block">
                    REVENUE GENERATION DESK
                  </span>
                  <h3 className="text-lg font-black text-white font-mono">
                    Working Capital Monetization Protocol
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-neutral-400">Retainer Fee:</span>
                <span className="text-xl font-mono font-black text-amber-300">
                  {currentArticle.workingCapitalAction.retainerFee}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="bg-[#121922] p-3.5 rounded-xl border border-neutral-800">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase block">Immediate Offer</span>
                  <span className="text-sm font-bold text-white mt-1 block">
                    {currentArticle.workingCapitalAction.proposedOffer}
                  </span>
                  <span className="text-xs text-neutral-300 mt-1 block">
                    {currentArticle.workingCapitalAction.immediateDeliverable}
                  </span>
                </div>

                <div className="bg-[#121922] p-3.5 rounded-xl border border-neutral-800">
                  <span className="text-[10px] font-mono text-amber-400 uppercase block">Executive Outreach Pitch</span>
                  <p className="text-xs text-neutral-200 mt-1 italic">
                    "{currentArticle.workingCapitalAction.pitchSummary}"
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-[#181f29] border border-cyan-700/40 p-3.5 rounded-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-cyan-300 uppercase font-bold">
                      Corporate Operating Treasury (RideWire LLC)
                    </span>
                    <span className="text-sm font-mono font-black text-cyan-400">
                      100% Clean EBITDA
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-300 mt-1 leading-relaxed">
                    Unencumbered institutional operating capital, field hardware telemetry inventory, and 17-node computational cluster maintenance.
                  </p>
                </div>

                <div className="bg-[#1a1410] border border-amber-600/40 p-3.5 rounded-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-amber-300 uppercase font-bold">
                      Founder Distributions & Sovereign Philanthropy
                    </span>
                    <span className="text-sm font-mono font-black text-amber-400">
                      S. Pohl Sovereign Command
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-300 mt-1 leading-relaxed">
                    S. Pohl is the controlling client and founder. Personal dividends and equity gains are channeled independently to the Albuquerque Family Support Trust and community non-profits—never encumbering customer B2B master services agreements.
                  </p>
                </div>

                <button
                  onClick={() => {
                    const firstTarget = currentArticle.stepTwoTargetDirectory[0];
                    if (firstTarget) setSelectedTarget(firstTarget);
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-mono text-xs font-bold shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2 transition-all"
                >
                  <DollarSign className="w-4 h-4" />
                  <span>Execute Retainer Agreement & Issue Invoice</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Commercial Proposal Modal when target is clicked */}
      {selectedTarget && (
        <CommercialProposalModal
          target={selectedTarget}
          onClose={() => setSelectedTarget(null)}
          onRetainerExecuted={(amt) => {
            onRetainerExecuted(amt);
          }}
        />
      )}
    </div>
  );
};
