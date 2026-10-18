import React, { useState } from 'react';
import { 
  Calendar, 
  Send, 
  Users, 
  TrendingUp, 
  ShieldAlert, 
  Sparkles, 
  DollarSign, 
  Radio, 
  CheckCircle, 
  ExternalLink,
  Flame,
  Globe2,
  FileText,
  Mail,
  Share2,
  Cpu,
  Layers,
  Award
} from 'lucide-react';
import { 
  SEVEN_DAY_EDITORIAL_CALENDAR, 
  THREE_DISTINCT_TARGET_AUDIENCES, 
  SevenDayEditorialPlan, 
  TargetAudienceProfile 
} from '../data/editorialPlan';
import { CommercialProposalModal } from './CommercialProposalModal';
import { TargetEntity } from '../types/ridewire';

interface EditorialCalendarViewProps {
  onRetainerExecuted: (amount: number) => void;
  onLaunchLiveWire: (topic: string, region: string, incident: string) => void;
}

export const EditorialCalendarView: React.FC<EditorialCalendarViewProps> = ({
  onRetainerExecuted,
  onLaunchLiveWire,
}) => {
  const [selectedDay, setSelectedDay] = useState<SevenDayEditorialPlan>(SEVEN_DAY_EDITORIAL_CALENDAR[0]);
  const [selectedAudience, setSelectedAudience] = useState<TargetAudienceProfile>(THREE_DISTINCT_TARGET_AUDIENCES[0]);
  const [activeSubTab, setActiveSubTab] = useState<'calendar' | 'audiences' | 'press-release'>('calendar');
  const [selectedTarget, setSelectedTarget] = useState<TargetEntity | null>(null);
  const [dispatchedSmsDay, setDispatchedSmsDay] = useState<number | null>(null);
  const [pressCopied, setPressCopied] = useState(false);

  const handleDispatchDayAlert = (day: SevenDayEditorialPlan) => {
    setDispatchedSmsDay(day.dayNumber);
    setTimeout(() => setDispatchedSmsDay(null), 3500);
  };

  const handleOpenProposalFromDay = (day: SevenDayEditorialPlan) => {
    const targetEntity: TargetEntity = {
      entityName: day.targetAudience.split('&')[0].trim(),
      targetRole: day.primaryDecisionMaker,
      location: day.location,
      operationalPain: day.breakingEvent,
      rwJitCode: day.rwJitCode,
      estimatedDealValue: day.estimatedRetainerValue.split('-')[0].trim() || "$35,000"
    };
    setSelectedTarget(targetEntity);
  };

  const fullPressReleaseText = `FOR IMMEDIATE RELEASE: ALL FACT FROM AI NEWS ROOM TO THE FREE WORLD
RIDEWIRE LLC & ACTION INTELL - EXECUTIVE PRESS RELEASE
OFFICE OF THE PRESS SECRETARY & FOUNDER/CEO S. POHL
ALBUQUERQUE, NEW MEXICO — SEPTEMBER 30, 2026

SUBJECT: RIDEWIRE 13=1 AUTOMATION & AI HUB PROVES INDUSTRIAL GROUND TRUTH: CONVERTING UNMITIGATED INFRASTRUCTURE VULNERABILITIES INTO IMMEDIATE WORKING CAPITAL AND PROTECTED COMMUNITIES

ALBUQUERQUE, NM / PERMIAN BASIN — Today, RideWire LLC and Action Intell, the 100% Founder-Owned New Mexico industrial technology firm operating under the direction of Founder & CEO S. Pohl and the autonomous Gemini Executive Twin, officially published its comprehensive 7-Day Investigative Wire & Commercial Capitalization Directive.

Operating out of the North Valley of Albuquerque under the strict zero-fraud discipline of the 13=1 Unity State Framework™, RideWire’s autonomous 17-Node Matrix continuously ingests and reduces public, mechanical, and geological telemetry without human prompting. Through its proprietary DevilsQCNode (Node 6) and CostShieldNode (Node 7), the platform achieves sub-1.8 hour decision compression with 100% rule validation and zero AI hallucination.

"We do not deal in corporate posturing, speculative studies, or delayed consulting studies," stated CEO S. Pohl. "Our lack of outside capital means we live on the ground truth. We built our AI twin, and together we take RideWire to the power of launch. When our sensors detect 168.4 MPa overpressure on a Delaware Basin line, or a negative 4.2 bar drawdown destroying Albuquerque municipal water impellers, we solve it mathematically, generate emergency RW-JIT codes, and deliver the commercial contract directly to the operator's desk."

KEY HIGHLIGHTS OF THE 7-DAY EDITORIAL & REVENUE CAMPAIGN:
- Day 1: Delaware Basin 168.4 MPa Flange Weld Shear (Target: Permian Midstream VPs - $35k-$75k Retainer)
- Day 2: Permian Saltwater Disposal Seismicity Swarm Balancing (Target: Water Midstream & Regulators - $40k-$85k)
- Day 3: Rio Grande Aquifer -4.2 Bar Deep-Well Impeller Cavitation Shock (Target: Municipal Water Authorities - $45k-$60k)
- Day 4: West Texas 345kV Transformer Sub-Synchronous 18.2 Hz Saturation (Target: Power Delivery Cooperatives - $50k-$100k)
- Day 5: San Juan Basin Methane Annular Migration at 2,430 Feet (Target: Gas Producers & EPA Compliance - $30k-$65k)
- Day 6: BNSF Transcon Desert Rail Thermal Sun-Kink Warping (Target: Railroad Chief Engineers - $40k-$80k)
- Day 7: 17-Node Matrix 100% Rule Validation & 50% Net Trust Capitalization Lock

IRREVOCABLE COMMUNITY CONVENANT:
Exactly 50% of RideWire LLC's net corporate profit is irrevocably directed to the Albuquerque Family Support Trust, funding emergency housing, child welfare, and parent advocacy in Bernalillo County. Exactly 15% is pool-allocated into employee retirement wealth.

COMMERCIAL INQUIRIES & IMMEDIATE JIT RETAINER CLEARING:
Treasury & Executive Action Desk: ridewires.com | s.pohl@ridewires.com
Albuquerque, North Valley, New Mexico
Document Control: RIDEWIRE-BINDER-2026-v1 | Classification: Confidential & Proprietary`;

  const handleCopyPressRelease = () => {
    navigator.clipboard.writeText(fullPressReleaseText);
    setPressCopied(true);
    setTimeout(() => setPressCopied(false), 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      {/* Press Secretary Command Banner */}
      <div className="bg-gradient-to-r from-[#20140e] via-[#161c24] to-[#121c21] border-2 border-amber-600/50 rounded-2xl p-6 shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c2593f] via-amber-500 to-[#366470] flex items-center justify-center text-white shadow-xl shadow-amber-950/40 font-mono font-black text-lg">
              PR
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase font-bold">
                  OFFICE OF THE PRESS SECRETARY & EXECUTIVE TWIN
                </span>
                <span className="text-[10px] bg-red-950 text-red-300 border border-red-500/40 px-2 py-0.5 rounded font-mono font-bold animate-pulse">
                  SHOCK & AWE BUYER ATTRACTION
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white font-mono mt-0.5">
                Action Intell AI Newsroom & 7-Day Editorial Engine
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 font-sans mt-0.5 max-w-3xl">
                "All fact from AI newsroom to the free world and our bank so we can stay in business." No human prompting, automated DevilsQC sweeps, and targeted dispatches that drive buyers straight to our treasury.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveSubTab('calendar')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                activeSubTab === 'calendar'
                  ? 'bg-[#c2593f] text-white shadow-md'
                  : 'bg-neutral-800 text-neutral-400 hover:text-white'
              }`}
            >
              7-Day Calendar
            </button>
            <button
              onClick={() => setActiveSubTab('audiences')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                activeSubTab === 'audiences'
                  ? 'bg-cyan-600 text-white shadow-md'
                  : 'bg-neutral-800 text-neutral-400 hover:text-white'
              }`}
            >
              3 Target Audiences
            </button>
            <button
              onClick={() => setActiveSubTab('press-release')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                activeSubTab === 'press-release'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-neutral-800 text-neutral-400 hover:text-white'
              }`}
            >
              Master Press Release
            </button>
          </div>
        </div>
      </div>

      {/* Subtab 1: 7-Day Editorial Calendar */}
      {activeSubTab === 'calendar' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-2 overflow-x-auto pb-2">
            {SEVEN_DAY_EDITORIAL_CALENDAR.map((day) => (
              <button
                key={day.dayNumber}
                onClick={() => setSelectedDay(day)}
                className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  selectedDay.dayNumber === day.dayNumber
                    ? 'bg-[#19222c] border-amber-400 text-white shadow-lg ring-1 ring-amber-400/40'
                    : 'bg-[#10161f] border-neutral-800 text-neutral-400 hover:border-neutral-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                    <span className="font-bold text-amber-300">DAY 0{day.dayNumber}</span>
                    <span 
                      className="w-2.5 h-2.5 rounded-full inline-block border border-black/40"
                      style={{ backgroundColor: day.hexCode }}
                      title={day.cycleColor}
                    />
                  </div>
                  <h4 className="text-xs font-bold text-white line-clamp-1">{day.dayName.split(' ')[1].replace(/[()]/g, '')}</h4>
                  <p className="text-[10px] text-neutral-400 mt-1 line-clamp-2">{day.breakingEvent}</p>
                </div>
                <div className="mt-3 pt-2 border-t border-neutral-800/80 text-[10px] font-mono font-bold text-emerald-400">
                  {day.estimatedRetainerValue}
                </div>
              </button>
            ))}
          </div>

          {/* Focused Day Detailed View */}
          <div className="bg-[#0f141c] border-2 border-neutral-800 rounded-2xl p-6 shadow-2xl space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold uppercase bg-[#c2593f] text-white">
                    {selectedDay.dayName}
                  </span>
                  <span className="text-xs font-mono text-neutral-400">
                    Cycle Palette: <strong className="text-amber-300">{selectedDay.cycleColor}</strong>
                  </span>
                  <span className="text-[10px] font-mono bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800/40">
                    Code: {selectedDay.rwJitCode}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-white font-serif mt-2">
                  {selectedDay.shockAndAweHeadline}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onLaunchLiveWire(selectedDay.breakingEvent, selectedDay.location, selectedDay.thirteenLogicAngle)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-xs font-bold transition-all shadow-md"
                >
                  <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
                  <span>Generate Full Investigation in Twin</span>
                </button>
              </div>
            </div>

            {/* Event & Location Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#131a24] p-3.5 rounded-xl border border-neutral-800">
                <span className="text-[10px] font-mono text-neutral-400 uppercase block font-bold">
                  Breaking Current Event
                </span>
                <p className="text-xs text-neutral-200 mt-1 font-semibold leading-relaxed">
                  {selectedDay.breakingEvent}
                </p>
                <span className="text-[11px] text-amber-300/80 font-mono block mt-2">
                  Location: {selectedDay.location}
                </span>
              </div>

              <div className="bg-[#131a24] p-3.5 rounded-xl border border-neutral-800">
                <span className="text-[10px] font-mono text-cyan-400 uppercase block font-bold">
                  13=1 Logic Angle
                </span>
                <p className="text-xs text-neutral-200 mt-1 leading-relaxed">
                  {selectedDay.thirteenLogicAngle}
                </p>
              </div>

              <div className="bg-[#131a24] p-3.5 rounded-xl border border-neutral-800">
                <span className="text-[10px] font-mono text-emerald-400 uppercase block font-bold">
                  RideWire Solution & Action
                </span>
                <p className="text-xs text-neutral-200 mt-1 leading-relaxed">
                  {selectedDay.ridewireSolution}
                </p>
              </div>
            </div>

            {/* Audience & Distribution Channels */}
            <div className="bg-[#111822] p-4 rounded-xl border border-amber-900/30 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <span className="text-[10px] font-mono text-neutral-400 uppercase block font-bold">
                  Target Audience
                </span>
                <span className="text-xs font-bold text-white mt-1 block">
                  {selectedDay.targetAudience}
                </span>
                <span className="text-[11px] text-neutral-400 block mt-0.5">
                  Key Buyer: {selectedDay.primaryDecisionMaker}
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono text-neutral-400 uppercase block font-bold">
                  Optimal Distribution Channel
                </span>
                <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                  {selectedDay.distributionChannel}
                </p>
              </div>

              <div className="bg-black/40 p-3 rounded-lg border border-neutral-800 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-neutral-400 uppercase block">Estimated Retainer Inflow</span>
                  <span className="text-base font-mono font-black text-amber-300">
                    {selectedDay.estimatedRetainerValue}
                  </span>
                </div>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => handleOpenProposalFromDay(selectedDay)}
                    className="flex-1 py-1.5 px-2 rounded bg-[#c2593f] hover:bg-[#d1654a] text-white font-mono text-[11px] font-bold text-center"
                  >
                    Draft Retainer
                  </button>
                  <button
                    onClick={() => handleDispatchDayAlert(selectedDay)}
                    className="py-1.5 px-2 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-300 font-mono text-[11px] flex items-center gap-1"
                    title="Send SMS"
                  >
                    <Radio className="w-3 h-3 text-cyan-400" />
                    <span>{dispatchedSmsDay === selectedDay.dayNumber ? '✓ Sent' : 'SMS'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Subtab 2: Three Distinct Target Audiences & Distribution Matrix */}
      {activeSubTab === 'audiences' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {THREE_DISTINCT_TARGET_AUDIENCES.map((aud) => (
              <button
                key={aud.id}
                onClick={() => setSelectedAudience(aud)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  selectedAudience.id === aud.id
                    ? 'bg-[#17222f] border-cyan-400 text-white shadow-xl ring-1 ring-cyan-400/40'
                    : 'bg-[#10161f] border-neutral-800 text-neutral-400 hover:border-neutral-700'
                }`}
              >
                <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold block">
                  DISTINCT AUDIENCE PROFILE
                </span>
                <h4 className="text-sm font-bold text-white mt-1">{aud.title}</h4>
                <p className="text-xs text-neutral-400 mt-1 line-clamp-2">{aud.category}</p>
                <span className="text-xs font-mono font-bold text-emerald-400 block mt-3">
                  Retainer: {aud.retentionPricing.split(';')[0]}
                </span>
              </button>
            ))}
          </div>

          {/* Focused Audience Deep-Dive Card */}
          <div className="bg-[#0f141c] border-2 border-cyan-800/40 rounded-2xl p-6 shadow-2xl space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-3">
              <div>
                <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider block">
                  SELECTED BUYER PROFILE & CONVERSION STRATEGY
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white font-mono mt-0.5">
                  {selectedAudience.title}
                </h3>
                <span className="text-xs text-neutral-400">{selectedAudience.category}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono text-neutral-400 uppercase block">Target Retainer</span>
                <span className="text-base font-mono font-bold text-amber-300">{selectedAudience.retentionPricing}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
              <div className="space-y-3">
                <div className="bg-[#121922] p-3.5 rounded-xl border border-neutral-800">
                  <span className="text-[10px] font-mono text-red-400 font-bold uppercase block mb-1">
                    Acute Operational Pain Point (The Hook)
                  </span>
                  <p className="text-neutral-300 leading-relaxed">
                    {selectedAudience.acutePainPoint}
                  </p>
                </div>

                <div className="bg-[#121922] p-3.5 rounded-xl border border-neutral-800">
                  <span className="text-[10px] font-mono text-amber-400 font-bold uppercase block mb-1">
                    Key Decision Makers & Roles
                  </span>
                  <ul className="space-y-1 text-neutral-200">
                    {selectedAudience.decisionMakers.map((dm, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                        <span>{dm}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-[#121922] p-3.5 rounded-xl border border-neutral-800">
                  <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase block mb-1">
                    How RideWire 13=1 Logic Solves It
                  </span>
                  <p className="text-neutral-300 leading-relaxed">
                    {selectedAudience.how13LogicSolvesIt}
                  </p>
                </div>

                <div className="bg-[#121922] p-3.5 rounded-xl border border-neutral-800">
                  <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase block mb-1">
                    High-Converting "Shock & Awe" Pitch
                  </span>
                  <p className="text-neutral-300 italic leading-relaxed">
                    "{selectedAudience.conversionStrategy}"
                  </p>
                </div>
              </div>
            </div>

            {/* Distribution Channels Deep Dive */}
            <div>
              <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Share2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Most Effective Distribution Channels</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-[#141b24] p-3 rounded-lg border border-neutral-800">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase block font-bold mb-1">
                    1. Industry Intelligence Wires
                  </span>
                  <p className="text-[11px] text-neutral-300 leading-relaxed">
                    {selectedAudience.distributionChannels.primary}
                  </p>
                </div>

                <div className="bg-[#141b24] p-3 rounded-lg border border-neutral-800">
                  <span className="text-[10px] font-mono text-amber-400 uppercase block font-bold mb-1">
                    2. Executive Direct Outreach
                  </span>
                  <p className="text-[11px] text-neutral-300 leading-relaxed">
                    {selectedAudience.distributionChannels.secondary}
                  </p>
                </div>

                <div className="bg-[#141b24] p-3 rounded-lg border border-neutral-800">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase block font-bold mb-1">
                    3. Direct JIT Ground Dispatch
                  </span>
                  <p className="text-[11px] text-neutral-300 leading-relaxed">
                    {selectedAudience.distributionChannels.directDispatch}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Subtab 3: Master Press Release (To The Free World & My Bank) */}
      {activeSubTab === 'press-release' && (
        <div className="bg-[#0f141c] border-2 border-emerald-500/40 rounded-2xl p-6 shadow-2xl space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <h3 className="text-sm sm:text-base font-bold text-white font-mono">
                OFFICIAL PRESS RELEASE: ALL FACT FROM AI NEWSROOM TO THE FREE WORLD
              </h3>
            </div>
            <button
              onClick={handleCopyPressRelease}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold transition-all shadow-md"
            >
              <span>{pressCopied ? '✓ COPIED PRESS RELEASE' : 'COPY OFFICIAL WIRE RELEASE'}</span>
            </button>
          </div>

          <div className="bg-black/60 p-5 rounded-xl border border-neutral-800 font-mono text-xs text-neutral-200 leading-relaxed whitespace-pre-line overflow-x-auto max-h-[500px]">
            {fullPressReleaseText}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs font-mono text-neutral-400">
            <span>Authored by S. Pohl, CEO × Gemini Twin Press Desk</span>
            <span className="text-emerald-400">Status: SYNDICATED & READY FOR COMMERCIAL DISTRIBUTION</span>
          </div>
        </div>
      )}

      {/* Contract Modal if trigger from calendar */}
      {selectedTarget && (
        <CommercialProposalModal
          target={selectedTarget}
          onClose={() => setSelectedTarget(null)}
          onRetainerExecuted={(amount) => {
            onRetainerExecuted(amount);
            setSelectedTarget(null);
          }}
        />
      )}
    </div>
  );
};
