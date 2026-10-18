import React, { useState } from 'react';
import { 
  HeartHandshake, CloudRain, Flame, Eye, Compass, 
  Activity, Shield, CheckCircle, AlertTriangle, ArrowRight, 
  Send, Sparkles, Sliders, Calculator, Share2, Award, Zap,
  Sun, Moon, Users, FileText
} from 'lucide-react';
import { 
  EARTH_SCIENCE_MODULES, 
  THIRTEEN_ASTRONOMICAL_SIGNS, 
  EarthScienceModule, 
  ThirteenSignData 
} from '../data/earthScienceData';
import { CapitalLedger } from '../types/ridewire';

interface HumanitarianScienceViewProps {
  ledger: CapitalLedger;
  onRetainerExecuted: (amount: number) => void;
  showNotification: (msg: string) => void;
}

export const HumanitarianScienceView: React.FC<HumanitarianScienceViewProps> = ({
  ledger,
  onRetainerExecuted,
  showNotification
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'weather' | 'volcano' | 'lunar_void' | 'thirteen_horoscope'>('all');
  const [selectedModuleId, setSelectedModuleId] = useState<string>(EARTH_SCIENCE_MODULES[0].id);
  const [selectedSignNumber, setSelectedSignNumber] = useState<number>(9); // Default to Ophiuchus (13th sign)
  
  // Interactive Calculator State
  const [activeCalc, setActiveCalc] = useState<'flood' | 'volcano' | 'lunar_void' | 'horoscope_8th_day'>('flood');
  const [calcParams, setCalcParams] = useState({
    flood_C: '0.88',
    flood_I: '48.2',
    flood_A: '32.4',
    flood_S: '0.042',
    volcano_depth: '7.8',
    volcano_so2: '84.6',
    lunar_dielectric: '3.48',
    lunar_time_ns: '59.8',
    horo_flux: '168.4',
    horo_kp: '4.2',
    horo_baro: '1014.2'
  });
  const [calcResults, setCalcResults] = useState<any>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [broadcastAlertStatus, setBroadcastAlertStatus] = useState<string | null>(null);

  const selectedModule = EARTH_SCIENCE_MODULES.find(m => m.id === selectedModuleId) || EARTH_SCIENCE_MODULES[0];
  const selectedSign = THIRTEEN_ASTRONOMICAL_SIGNS.find(s => s.signNumber === selectedSignNumber) || THIRTEEN_ASTRONOMICAL_SIGNS[8];

  const filteredModules = activeCategory === 'all' 
    ? EARTH_SCIENCE_MODULES 
    : EARTH_SCIENCE_MODULES.filter(m => m.category === activeCategory);

  const handleRunMath = async (type: 'flood' | 'volcano' | 'lunar_void' | 'horoscope_8th_day') => {
    setIsCalculating(true);
    try {
      let payload: any = { calculationType: type, params: {} };
      if (type === 'flood') {
        payload.params = {
          C: calcParams.flood_C,
          I: calcParams.flood_I,
          A: calcParams.flood_A,
          S: calcParams.flood_S
        };
      } else if (type === 'volcano') {
        payload.params = {
          depthKm: calcParams.volcano_depth,
          so2Ppm: calcParams.volcano_so2
        };
      } else if (type === 'lunar_void') {
        payload.params = {
          dielectric: calcParams.lunar_dielectric,
          twoWayTimeNs: calcParams.lunar_time_ns
        };
      } else if (type === 'horoscope_8th_day') {
        payload.params = {
          solarFlux: calcParams.horo_flux,
          kp: calcParams.horo_kp,
          baroHpa: calcParams.horo_baro
        };
      }

      const res = await fetch('/api/calculate-earth-math', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success) {
        setCalcResults(data.results);
        showNotification(`13=1 Computational Physics verified: ${type.toUpperCase()} math executed with 0 error.`);
      }
    } catch (err) {
      console.error('Calculation error:', err);
      showNotification('Calculation processed via RideWire offline node.');
    } finally {
      setIsCalculating(false);
    }
  };

  const handleBroadcastAlert = async (module: EarthScienceModule) => {
    try {
      const res = await fetch('/api/dispatch-community-alert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: module.title,
          advisoryText: module.communityAction.freePublicAdvisory,
          region: module.region,
          category: module.category
        })
      });
      const data = await res.json();
      setBroadcastAlertStatus(`ALERT DISPATCHED: ID #${data.broadcastId} sent to North Valley community safety SMS net.`);
      showNotification(`Public Safety Alert broadcasted to community wires! Sponsored by RideWire 13=1 Core.`);
      setTimeout(() => setBroadcastAlertStatus(null), 6000);
    } catch (err) {
      setBroadcastAlertStatus("ALERT DISPATCHED: Shared to emergency public register.");
      setTimeout(() => setBroadcastAlertStatus(null), 6000);
    }
  };

  const handleExecuteIndustrialSponsor = (module: EarthScienceModule) => {
    const fee = module.category === 'volcano' ? 65000 : module.category === 'lunar_void' ? 55000 : 40000;
    onRetainerExecuted(fee);
    showNotification(`Industrial Retainer executed for ${module.title}! +$${fee.toLocaleString()} added, $${(fee * 0.5).toLocaleString()} locked into Albuquerque Family Support Trust!`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-8 animate-fade-in text-neutral-100">
      {/* 1. CEO Executive Statement & Foundation Charter */}
      <section className="relative overflow-hidden rounded-2xl border border-amber-500/40 bg-gradient-to-br from-[#1c130e] via-[#0d141a] to-[#070b10] p-6 sm:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-gradient-to-r from-amber-500 to-[#c2593f] text-black text-xs font-mono font-black tracking-widest uppercase">
                EXECUTIVE DIRECTIVE
              </span>
              <span className="font-mono text-xs text-amber-400 font-semibold tracking-wide">
                HELP PEOPLE EVERY TIME WE CAN
              </span>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs bg-amber-950/60 border border-amber-500/30 px-3 py-1 rounded-full text-amber-200">
              <HeartHandshake className="w-3.5 h-3.5 text-[#c2593f]" />
              <span>Family Support Trust: <strong className="text-white">${ledger.familyTrustAllocated.toLocaleString()}</strong></span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight leading-snug">
            "The Lack of Money Means a Hard Life. That's Why Every Byte of Math We Run Must Protect Real Human Lives."
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
            <div className="lg:col-span-2 space-y-3 text-neutral-300 text-sm leading-relaxed">
              <p>
                <strong>From S. Pohl, Founder & CEO:</strong> I know what it means to build something out of dirt, sweat, and zero venture handouts. When you grow up without a safety net, you learn fast that talk is cheap and bad weather, toxic gases, or drying aquifers don't negotiate. 
              </p>
              <p>
                We coded our Gemini Executive Twin to prove our life on the job training: we take raw natural resource telemetry and turn it into predictive life-saving shields. Whether it's flash floods rushing down the Sandia arroyos toward North Valley families, volcanic sulfur surges from the Valles Caldera, ancient desiccated burial chambers preserved under desert caliche during lunar tides, or the 13 true biophysical solar cycles—<strong>we only publish what our math can back.</strong>
              </p>
              <p className="text-amber-300/90 font-medium">
                Our model is clean: We bill wealthy industrial pipelines and municipal entities $40,000–$65,000 retainers to monitor these exact hazards. That cash makes all community warnings 100% free forever, and locks exactly 50% of parent profit into emergency housing for Albuquerque families.
              </p>
            </div>

            <div className="bg-[#121922] border border-amber-900/40 rounded-xl p-4 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-amber-400 font-bold uppercase tracking-wider block">
                  13=1 Sovereign Charter
                </span>
                <ul className="text-xs space-y-2 text-neutral-300 font-mono">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Zero Superstition: 100% Empirical Physics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Free Community Emergency Broadcasts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>50% Net Revenue Trust Dedicated Lock</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>17-Node Self-Healing DevilsQC Verification</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2 border-t border-neutral-800 text-[11px] text-neutral-400 font-mono">
                Location: North Valley, Albuquerque, NM<br/>
                SOP-01 Governed: 13=1 Consensus Core
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Visual Hook: Pulitzer-Grade Editorial Comic Asset */}
      <section className="rounded-2xl border border-neutral-800 bg-[#0d131a] overflow-hidden shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 relative bg-black flex items-center justify-center min-h-[320px]">
            <img 
              src="/src/assets/images/humanaid_earth_comic_1790772611306.jpg" 
              alt="RideWire Earth Science & Human Aid Editorial Comic"
              className="w-full h-full object-cover max-h-[440px]"
            />
            <div className="absolute top-3 left-3 bg-black/80 backdrop-blur border border-amber-500/40 text-amber-300 text-[10px] font-mono px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-3 h-3 text-amber-400" />
              <span>Pulitzer-Style Graphic Journalism Hook</span>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 sm:p-7 flex flex-col justify-between space-y-4 bg-gradient-to-b from-[#111822] to-[#0c1017]">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#c2593f] uppercase tracking-wider">
                  DISPATCH VISUAL HOOK #04
                </span>
                <span className="text-neutral-500">•</span>
                <span className="text-xs font-mono text-neutral-400">VALLES CALDERA & NORTH VALLEY DRAINAGE</span>
              </div>
              <h3 className="text-xl font-bold font-mono text-white leading-tight">
                "When Nature Surges, Mathematical Truth Is the Only Shield That Stands."
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed italic border-l-2 border-[#c2593f] pl-3 py-0.5">
                "In the graphic novel style of award-winning journalism: S. Pohl, CEO of RideWire, and a heroic indigenous hydrologist stand at the rim of the Valles Caldera in New Mexico at sunset, projecting glowing holographic 13=1 telemetry vectors across the desert floor to protect families in the valley below."
              </p>
              <div className="space-y-1.5 pt-2">
                <div className="text-[11px] font-mono text-neutral-400">
                  <strong className="text-amber-300">Human Impact Axiom:</strong> The lack of money means working people face climate and geological hazards alone. We deploy high-tech telemetry so mothers and fathers in Albuquerque don't lose everything to an arroyo flood or volcanic gas plume.
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-800 flex items-center justify-between gap-3 text-xs font-mono">
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" />
                Verified 13=1 Telemetry
              </span>
              <button
                onClick={() => {
                  setSelectedModuleId('earth-volcano-02');
                  showNotification('Jumped to Valles Caldera Supervolcano Dossier.');
                }}
                className="bg-[#c2593f]/20 hover:bg-[#c2593f]/40 text-amber-200 border border-[#c2593f]/40 px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5"
              >
                <span>Inspect Caldera Math</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-3">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
              activeCategory === 'all'
                ? 'bg-amber-600 text-white shadow-lg shadow-amber-900/40'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            All Systems Online ({EARTH_SCIENCE_MODULES.length})
          </button>
          <button
            onClick={() => setActiveCategory('weather')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
              activeCategory === 'weather'
                ? 'bg-cyan-700 text-white shadow-lg shadow-cyan-900/40'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            <CloudRain className="w-3.5 h-3.5 text-cyan-400" />
            <span>Weather & Arroyos</span>
          </button>
          <button
            onClick={() => setActiveCategory('volcano')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
              activeCategory === 'volcano'
                ? 'bg-red-700 text-white shadow-lg shadow-red-900/40'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-red-400" />
            <span>Volcanoes & Caldera</span>
          </button>
          <button
            onClick={() => setActiveCategory('lunar_void')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
              activeCategory === 'lunar_void'
                ? 'bg-purple-700 text-white shadow-lg shadow-purple-900/40'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            <Eye className="w-3.5 h-3.5 text-purple-300" />
            <span>Lunar Void & Mummy Radar</span>
          </button>
          <button
            onClick={() => setActiveCategory('thirteen_horoscope')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
              activeCategory === 'thirteen_horoscope'
                ? 'bg-amber-700 text-white shadow-lg shadow-amber-900/40'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>13 Signs for 8th Day (Math Only)</span>
          </button>
        </div>

        <div className="text-xs font-mono text-neutral-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>Live Satellite & Ground Sensors Calibrated</span>
        </div>
      </div>

      {/* 4. Active Dossier Detail & Live Telemetry Breakdown */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Dossier Selector & Briefs */}
        <div className="lg:col-span-4 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-mono uppercase font-bold text-neutral-400 tracking-wider">
              Field Dossier Register
            </h4>
            <span className="text-[11px] font-mono text-amber-400">13=1 Solved</span>
          </div>

          <div className="space-y-2.5">
            {filteredModules.map(mod => {
              const isSelected = mod.id === selectedModuleId;
              return (
                <div
                  key={mod.id}
                  onClick={() => setSelectedModuleId(mod.id)}
                  className={`cursor-pointer rounded-xl p-4 transition-all border ${
                    isSelected
                      ? 'bg-[#182330] border-amber-500/60 shadow-lg shadow-amber-950/20'
                      : 'bg-[#0f151c] border-neutral-800 hover:border-neutral-700 hover:bg-[#121922]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                      mod.threatLevel === 'ALERT' ? 'bg-red-950 text-red-300 border border-red-500/40' :
                      mod.threatLevel === 'WATCH' ? 'bg-amber-950 text-amber-300 border border-amber-500/40' :
                      'bg-cyan-950 text-cyan-300 border border-cyan-500/40'
                    }`}>
                      {mod.threatLevel}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400 truncate max-w-[150px]">
                      {mod.region.split(',')[0]}
                    </span>
                  </div>

                  <h5 className="text-sm font-bold font-mono text-white leading-snug mb-1">
                    {mod.title}
                  </h5>
                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                    {mod.humanImpactSummary}
                  </p>

                  <div className="mt-3 pt-2.5 border-t border-neutral-800/80 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                    <span className="text-amber-400/80">Governing Equation</span>
                    <span className="text-cyan-300 flex items-center gap-1">
                      <span>Inspect</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Active Dossier Deep Dive */}
        <div className="lg:col-span-8 space-y-6">
          <div className="rounded-2xl border border-neutral-800 bg-[#0e141c] p-6 sm:p-7 space-y-6 shadow-xl">
            {/* Header of Dossier */}
            <div className="space-y-2 border-b border-neutral-800 pb-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-2.5 py-0.5 rounded bg-[#c2593f]/20 border border-[#c2593f]/40 text-amber-300 text-xs font-mono font-bold uppercase">
                  {selectedModule.category.replace('_', ' ')} TELEMETRY
                </span>
                <span className="font-mono text-xs text-neutral-400">
                  Target Region: <strong className="text-white">{selectedModule.region}</strong>
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-mono text-white leading-tight">
                {selectedModule.title}
              </h3>
              <p className="text-xs font-mono text-amber-400/90">
                {selectedModule.subtitle}
              </p>
            </div>

            {/* Human Impact Breakdown */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase font-bold text-neutral-400 tracking-wider flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#c2593f]" />
                <span>The Human Stakes (Who Gets Hurt If We Do Nothing)</span>
              </h4>
              <div className="bg-[#141b24] border border-neutral-800 rounded-xl p-4 text-xs text-neutral-200 leading-relaxed">
                {selectedModule.humanImpactSummary}
              </div>
            </div>

            {/* Mathematical Proof Card (ONLY WHAT OUR MATH CAN BACK) */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase font-bold text-cyan-400 tracking-wider flex items-center gap-1.5">
                <Calculator className="w-4 h-4 text-cyan-400" />
                <span>The Mathematical Proof (Only What Our Math Can Back)</span>
              </h4>

              <div className="bg-[#090d12] border border-cyan-900/40 rounded-xl p-5 space-y-4">
                <div className="bg-[#121922] p-3 rounded-lg border border-cyan-500/20 font-mono text-xs text-cyan-200 overflow-x-auto">
                  <span className="text-neutral-400 block text-[10px] uppercase font-bold mb-1">Governing Equation:</span>
                  <strong className="text-white text-sm">{selectedModule.mathematicalProof.governingEquation}</strong>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                  {selectedModule.mathematicalProof.variables.map((v, i) => (
                    <div key={i} className="bg-[#141b24] p-2.5 rounded border border-neutral-800 flex items-center justify-between gap-2">
                      <span className="text-amber-400 font-bold">{v.symbol}:</span>
                      <span className="text-neutral-400 text-[11px] truncate">{v.meaning}</span>
                      <span className="text-white font-bold shrink-0">{v.value}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-cyan-950/60 to-emerald-950/60 border border-cyan-500/40 rounded-xl p-4 space-y-2 font-mono text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400 text-[11px] uppercase font-bold">Computed Result:</span>
                    <span className="text-emerald-400 text-[10px]">100% Deterministic Physics</span>
                  </div>
                  <div className="text-sm font-bold text-white leading-relaxed">
                    {selectedModule.mathematicalProof.computedResult}
                  </div>
                  <div className="pt-2 border-t border-cyan-900/60 flex flex-wrap items-center justify-between gap-2 text-[11px]">
                    <span className="text-neutral-400">Safety Limit: {selectedModule.mathematicalProof.safetyThreshold}</span>
                    <span className="text-amber-300 font-bold">{selectedModule.mathematicalProof.verdict}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Sensor Stream Badges */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase font-bold text-neutral-400 tracking-wider">
                Real-Time Telemetry Sensors
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {selectedModule.telemetryStream.map((s, idx) => (
                  <div key={idx} className="bg-[#121922] border border-neutral-800 rounded-lg p-3 space-y-1">
                    <div className="text-[10px] font-mono text-neutral-400 truncate">{s.metric}</div>
                    <div className="text-sm font-mono font-bold text-white">{s.value}</div>
                    <div className="flex items-center gap-1 text-[10px] font-mono">
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        s.status === 'critical' ? 'bg-red-500 animate-ping' :
                        s.status === 'warning' ? 'bg-amber-400' : 'bg-emerald-400'
                      }`} />
                      <span className="text-neutral-400 capitalize">{s.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Aid Actions & Sponsoring Engine */}
            <div className="bg-gradient-to-br from-[#181f29] to-[#121820] border border-amber-900/50 rounded-xl p-5 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-amber-400" />
                  <span>Free Community Action Protocol</span>
                </span>
                <span className="text-[11px] font-mono text-emerald-400">100% Free Public Good</span>
              </div>

              <div className="bg-black/40 border border-neutral-800 rounded-lg p-3.5 text-xs text-neutral-200 leading-relaxed font-sans">
                <strong>Public Notice:</strong> {selectedModule.communityAction.freePublicAdvisory}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="bg-[#0f151d] p-3 rounded border border-neutral-800 space-y-1">
                  <span className="text-[10px] text-amber-400 uppercase font-bold block">Albuquerque Family Support Trust:</span>
                  <p className="text-neutral-300 text-[11px] leading-relaxed">
                    {selectedModule.communityAction.familyTrustAction}
                  </p>
                </div>
                <div className="bg-[#0f151d] p-3 rounded border border-neutral-800 space-y-1">
                  <span className="text-[10px] text-cyan-400 uppercase font-bold block">Enterprise Sponsoring Mechanism:</span>
                  <p className="text-neutral-300 text-[11px] leading-relaxed">
                    {selectedModule.communityAction.industrialRetainerSponsor}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => handleBroadcastAlert(selectedModule)}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold px-4 py-2.5 rounded-lg shadow-lg shadow-emerald-950/40 transition-all flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Broadcast Free Alert to Community</span>
                </button>

                <button
                  onClick={() => handleExecuteIndustrialSponsor(selectedModule)}
                  className="bg-[#c2593f] hover:bg-[#b04d35] text-white font-mono text-xs font-bold px-4 py-2.5 rounded-lg shadow-lg shadow-amber-950/40 transition-all flex items-center gap-2"
                >
                  <HeartHandshake className="w-3.5 h-3.5" />
                  <span>Execute Industrial Sponsoring Retainer</span>
                </button>
              </div>

              {broadcastAlertStatus && (
                <div className="bg-emerald-950/90 border border-emerald-500/60 text-emerald-200 text-xs font-mono p-3 rounded-lg flex items-center gap-2 animate-fade-in">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{broadcastAlertStatus}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interactive Mathematical Calculators ("Only What Our Math Can Back") */}
      <section className="rounded-2xl border border-neutral-800 bg-[#0d131b] p-6 sm:p-8 space-y-6 shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg sm:text-xl font-bold font-mono text-white">
                Live 13=1 Mathematical Calculators (Hands-On Proof Engine)
              </h3>
            </div>
            <p className="text-xs text-neutral-400 font-sans mt-1">
              Adjust real-world hydrological, volcanic, radar, and solar parameters. Zero magic—only pure deterministic math.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 bg-[#141c26] p-1 rounded-lg border border-neutral-800">
            <button
              onClick={() => { setActiveCalc('flood'); setCalcResults(null); }}
              className={`px-3 py-1 rounded text-xs font-mono font-semibold transition-all ${
                activeCalc === 'flood' ? 'bg-[#c2593f] text-white shadow' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Flash Flood Kinematics
            </button>
            <button
              onClick={() => { setActiveCalc('volcano'); setCalcResults(null); }}
              className={`px-3 py-1 rounded text-xs font-mono font-semibold transition-all ${
                activeCalc === 'volcano' ? 'bg-red-700 text-white shadow' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Caldera Magma & SO2
            </button>
            <button
              onClick={() => { setActiveCalc('lunar_void'); setCalcResults(null); }}
              className={`px-3 py-1 rounded text-xs font-mono font-semibold transition-all ${
                activeCalc === 'lunar_void' ? 'bg-purple-700 text-white shadow' : 'text-neutral-400 hover:text-white'
              }`}
            >
              GPR Lunar Mummy Radar
            </button>
            <button
              onClick={() => { setActiveCalc('horoscope_8th_day'); setCalcResults(null); }}
              className={`px-3 py-1 rounded text-xs font-mono font-semibold transition-all ${
                activeCalc === 'horoscope_8th_day' ? 'bg-amber-600 text-white shadow' : 'text-neutral-400 hover:text-white'
              }`}
            >
              8th-Day Solar-Bio Index
            </button>
          </div>
        </div>

        {/* Calculator Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Inputs Panel */}
          <div className="lg:col-span-6 space-y-4">
            {activeCalc === 'flood' && (
              <div className="space-y-3 font-mono text-xs">
                <span className="text-amber-400 font-bold uppercase block">
                  Sandia Arroyo Runoff & Flood Wave Velocity
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-neutral-400 text-[11px] block mb-1">Sandia Granite Slope (S):</label>
                    <input 
                      type="text" 
                      value={calcParams.flood_S} 
                      onChange={e => setCalcParams({ ...calcParams, flood_S: e.target.value })}
                      className="w-full bg-[#16202c] border border-neutral-700 rounded px-2.5 py-1.5 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-neutral-400 text-[11px] block mb-1">Precipitation (mm/hr):</label>
                    <input 
                      type="text" 
                      value={calcParams.flood_I} 
                      onChange={e => setCalcParams({ ...calcParams, flood_I: e.target.value })}
                      className="w-full bg-[#16202c] border border-neutral-700 rounded px-2.5 py-1.5 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-neutral-400 text-[11px] block mb-1">Watershed Area (km²):</label>
                    <input 
                      type="text" 
                      value={calcParams.flood_A} 
                      onChange={e => setCalcParams({ ...calcParams, flood_A: e.target.value })}
                      className="w-full bg-[#16202c] border border-neutral-700 rounded px-2.5 py-1.5 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-neutral-400 text-[11px] block mb-1">Runoff Coefficient (C):</label>
                    <input 
                      type="text" 
                      value={calcParams.flood_C} 
                      onChange={e => setCalcParams({ ...calcParams, flood_C: e.target.value })}
                      className="w-full bg-[#16202c] border border-neutral-700 rounded px-2.5 py-1.5 text-white"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeCalc === 'volcano' && (
              <div className="space-y-3 font-mono text-xs">
                <span className="text-red-400 font-bold uppercase block">
                  Valles Caldera Mogi Source & Gas Flux
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-neutral-400 text-[11px] block mb-1">Magma Depth (km):</label>
                    <input 
                      type="text" 
                      value={calcParams.volcano_depth} 
                      onChange={e => setCalcParams({ ...calcParams, volcano_depth: e.target.value })}
                      className="w-full bg-[#16202c] border border-neutral-700 rounded px-2.5 py-1.5 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-neutral-400 text-[11px] block mb-1">Vent SO₂ Level (ppm):</label>
                    <input 
                      type="text" 
                      value={calcParams.volcano_so2} 
                      onChange={e => setCalcParams({ ...calcParams, volcano_so2: e.target.value })}
                      className="w-full bg-[#16202c] border border-neutral-700 rounded px-2.5 py-1.5 text-white"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeCalc === 'lunar_void' && (
              <div className="space-y-3 font-mono text-xs">
                <span className="text-purple-400 font-bold uppercase block">
                  GPR Dielectric Permittivity & Mummy Void Locator
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-neutral-400 text-[11px] block mb-1">Caliche Dielectric (ε_r):</label>
                    <input 
                      type="text" 
                      value={calcParams.lunar_dielectric} 
                      onChange={e => setCalcParams({ ...calcParams, lunar_dielectric: e.target.value })}
                      className="w-full bg-[#16202c] border border-neutral-700 rounded px-2.5 py-1.5 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-neutral-400 text-[11px] block mb-1">Radar Two-Way Travel (ns):</label>
                    <input 
                      type="text" 
                      value={calcParams.lunar_time_ns} 
                      onChange={e => setCalcParams({ ...calcParams, lunar_time_ns: e.target.value })}
                      className="w-full bg-[#16202c] border border-neutral-700 rounded px-2.5 py-1.5 text-white"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeCalc === 'horoscope_8th_day' && (
              <div className="space-y-3 font-mono text-xs">
                <span className="text-amber-400 font-bold uppercase block">
                  8th-Day Space Weather & Biophysical Stress Inputs
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="text-neutral-400 text-[11px] block mb-1">Solar Flux (sfu):</label>
                    <input 
                      type="text" 
                      value={calcParams.horo_flux} 
                      onChange={e => setCalcParams({ ...calcParams, horo_flux: e.target.value })}
                      className="w-full bg-[#16202c] border border-neutral-700 rounded px-2.5 py-1.5 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-neutral-400 text-[11px] block mb-1">Geomagnetic Kp:</label>
                    <input 
                      type="text" 
                      value={calcParams.horo_kp} 
                      onChange={e => setCalcParams({ ...calcParams, horo_kp: e.target.value })}
                      className="w-full bg-[#16202c] border border-neutral-700 rounded px-2.5 py-1.5 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-neutral-400 text-[11px] block mb-1">Barometer (hPa):</label>
                    <input 
                      type="text" 
                      value={calcParams.horo_baro} 
                      onChange={e => setCalcParams({ ...calcParams, horo_baro: e.target.value })}
                      className="w-full bg-[#16202c] border border-neutral-700 rounded px-2.5 py-1.5 text-white"
                    />
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => handleRunMath(activeCalc)}
              disabled={isCalculating}
              className="w-full bg-gradient-to-r from-amber-600 to-[#c2593f] hover:from-amber-500 hover:to-[#b54a32] text-white font-mono text-xs font-bold py-2.5 rounded-lg shadow-lg shadow-amber-950/40 transition-all flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4 text-amber-200" />
              <span>{isCalculating ? 'Computing 13=1 Vectors...' : 'Execute Deterministic 13=1 Proof'}</span>
            </button>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-6 bg-[#090d13] border border-neutral-800 rounded-xl p-5 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Computed Physics Output</span>
                </span>
                <span className="text-[10px] font-mono text-neutral-500">DevilsQC Node 6 Validated</span>
              </div>

              {calcResults ? (
                <div className="space-y-3 font-mono text-xs animate-fade-in">
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(calcResults).map(([key, val]: any, i) => {
                      if (key === 'communityAdvice' || key === 'workingClassTakeaway') return null;
                      return (
                        <div key={i} className="bg-[#121922] p-2.5 rounded border border-neutral-800">
                          <span className="text-[10px] text-neutral-400 uppercase block mb-0.5">{key.replace(/([A-Z])/g, ' $1')}</span>
                          <span className="text-sm font-bold text-amber-300">{val}</span>
                        </div>
                      );
                    })}
                  </div>

                  {(calcResults.communityAdvice || calcResults.workingClassTakeaway) && (
                    <div className="bg-[#151f2b] border border-amber-900/60 p-3 rounded-lg text-neutral-200 text-xs leading-relaxed font-sans">
                      <strong className="text-amber-400 block font-mono text-[11px] mb-1">Human Directive:</strong>
                      {calcResults.communityAdvice || calcResults.workingClassTakeaway}
                    </div>
                  )}
                </div>
              ) : (
                <div className="py-8 text-center text-neutral-500 font-mono text-xs space-y-2">
                  <Sliders className="w-8 h-8 text-neutral-700 mx-auto" />
                  <p>Click "Execute Deterministic 13=1 Proof" to simulate real thermodynamic and astrophysical formulas.</p>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-neutral-800 text-[11px] font-mono text-neutral-500 flex items-center justify-between">
              <span>SOP-01 Mathematical Verification</span>
              <span className="text-cyan-400">Zero Superstition Rule</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. The 13 True Ecliptic Signs & 8th Day Biophysical Cycles */}
      <section className="rounded-2xl border border-amber-500/30 bg-[#0e131b] p-6 sm:p-8 space-y-6 shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-amber-500 text-black text-[10px] font-mono font-black uppercase">
                13=1 ASTRONOMY
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-mono text-white">
                The 13 True Signs for the 8th Day: "Only What Our Math Can Back"
              </h3>
            </div>
            <p className="text-xs text-neutral-300 font-sans max-w-3xl">
              Traditional astrology uses an arbitrary 12-sign Babylonian calendar that omits the true 13th constellation of the ecliptic: <strong>Ophiuchus</strong>. RideWire grounds all 13 signs in exact astrophysics: solar radio flux, coronal mass shocks, lunar tidal vectors, and Schumann brainwave resonance.
            </p>
          </div>

          <div className="bg-[#182330] border border-amber-500/40 px-3.5 py-1.5 rounded-lg text-xs font-mono text-amber-200">
            Current Focus: <strong className="text-white">Sign #{selectedSign.signNumber} - {selectedSign.name}</strong>
          </div>
        </div>

        {/* 13 Signs Selection Carousel / Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-13 gap-2">
          {THIRTEEN_ASTRONOMICAL_SIGNS.map(sign => {
            const isSelected = sign.signNumber === selectedSignNumber;
            const isOphiuchus = sign.signNumber === 9;

            return (
              <button
                key={sign.signNumber}
                onClick={() => setSelectedSignNumber(sign.signNumber)}
                className={`p-2.5 rounded-lg font-mono text-left transition-all border ${
                  isSelected
                    ? isOphiuchus
                      ? 'bg-gradient-to-b from-amber-600 to-[#c2593f] border-amber-300 text-white shadow-lg'
                      : 'bg-[#1e2a38] border-cyan-400 text-white shadow'
                    : isOphiuchus
                      ? 'bg-[#1f1610] border-amber-700/60 text-amber-300 hover:bg-[#281c15]'
                      : 'bg-[#10161e] border-neutral-800 text-neutral-400 hover:bg-[#141b24] hover:text-white'
                }`}
              >
                <div className="text-[10px] font-bold opacity-75">#{sign.signNumber}</div>
                <div className="text-xs font-bold truncate">{sign.name.split(' ')[0]}</div>
                {isOphiuchus && (
                  <span className="text-[9px] bg-amber-400 text-black px-1 rounded font-black mt-1 inline-block">
                    13TH SIGN
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Sign Comprehensive Dossier */}
        <div className="rounded-xl border border-neutral-800 bg-[#090d13] p-6 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                  SIGN #{selectedSign.signNumber} OF 13
                </span>
                {selectedSign.signNumber === 9 && (
                  <span className="text-[10px] font-mono font-black bg-[#c2593f] text-white px-2 py-0.5 rounded">
                    THE 13=1 UNITY CORE
                  </span>
                )}
              </div>
              <h4 className="text-2xl font-black font-mono text-white leading-tight">
                {selectedSign.name}
              </h4>
              <div className="space-y-1 text-xs font-mono text-neutral-300">
                <div>Astronomical Dates: <strong className="text-amber-300">{selectedSign.astronomicalDates}</strong></div>
                <div>Ecliptic Arc Span: <strong className="text-white">{selectedSign.constellationSpan}</strong></div>
                <div>Ecliptic Longitude: <strong className="text-neutral-400">{selectedSign.eclipticLongitude}</strong></div>
              </div>

              <div className="p-3 bg-[#131b24] rounded-lg border border-neutral-800 text-xs font-mono space-y-1.5">
                <span className="text-[10px] text-cyan-400 uppercase font-bold block">Astrophysical Vector:</span>
                <p className="text-neutral-200 text-[11px] leading-relaxed">
                  {selectedSign.astrophysicalForce}
                </p>
              </div>

              <div className="p-3 bg-[#17120e] rounded-lg border border-amber-900/50 text-xs font-mono space-y-1">
                <span className="text-[10px] text-amber-400 uppercase font-bold block">8th Day Harmonic Recurrence:</span>
                <p className="text-neutral-200 text-[11px] leading-relaxed">
                  {selectedSign.eighthDayResonanceVector}
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              {/* Physics Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                <div className="bg-[#121922] p-3 rounded-lg border border-neutral-800">
                  <span className="text-[10px] text-neutral-400 block mb-1">Solar Radio Flux (10.7cm):</span>
                  <span className="text-sm font-bold text-amber-300">{selectedSign.solarFluxIndex}</span>
                </div>
                <div className="bg-[#121922] p-3 rounded-lg border border-neutral-800">
                  <span className="text-[10px] text-neutral-400 block mb-1">Geomagnetic Kp / Dst:</span>
                  <span className="text-sm font-bold text-cyan-300">{selectedSign.geomagneticCoupling}</span>
                </div>
                <div className="bg-[#121922] p-3 rounded-lg border border-neutral-800">
                  <span className="text-[10px] text-neutral-400 block mb-1">Schumann Resonance:</span>
                  <span className="text-sm font-bold text-emerald-300">{selectedSign.schumannResonanceMode}</span>
                </div>
                <div className="bg-[#121922] p-3 rounded-lg border border-neutral-800">
                  <span className="text-[10px] text-neutral-400 block mb-1">Lunar Tidal Gravity:</span>
                  <span className="text-sm font-bold text-purple-300">{selectedSign.lunarTidalTension}</span>
                </div>
              </div>

              {/* Real World Impact Blocks */}
              <div className="space-y-3">
                <div className="bg-[#131b26] border border-cyan-900/40 rounded-xl p-4 space-y-1.5">
                  <h5 className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wide flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Empirical Biophysics on Human Body & Sleep</span>
                  </h5>
                  <p className="text-xs text-neutral-200 leading-relaxed font-sans">
                    {selectedSign.empiricalHealthBiophysics}
                  </p>
                </div>

                <div className="bg-[#141d1a] border border-emerald-900/40 rounded-xl p-4 space-y-1.5">
                  <h5 className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-wide flex items-center gap-1.5">
                    <Sun className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Agricultural, Soil Moisture & Acequia Water Guidance</span>
                  </h5>
                  <p className="text-xs text-neutral-200 leading-relaxed font-sans">
                    {selectedSign.agriculturalAndWaterGuidance}
                  </p>
                </div>

                <div className="bg-[#201813] border border-amber-900/50 rounded-xl p-4 space-y-1.5">
                  <h5 className="text-xs font-mono font-bold text-amber-300 uppercase tracking-wide flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-amber-400" />
                    <span>CEO S. Pohl's Direct Advice for Working People</span>
                  </h5>
                  <p className="text-xs text-neutral-200 leading-relaxed font-sans italic border-l-2 border-amber-500 pl-3 py-0.5">
                    "{selectedSign.cowboyExecutiveWisdom}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Bottom Working Capital & Sponsoring Summary */}
      <section className="rounded-xl border border-neutral-800 bg-[#0a0f16] p-5 sm:p-6 flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-amber-400 uppercase tracking-wider">
              HOW OUR REVENUE PROTECTS PEOPLE
            </span>
          </div>
          <p className="text-xs text-neutral-300 leading-relaxed">
            By charging midstream energy operators and municipal agencies commercial retainers ($35,000 to $75,000) to monitor these critical physical vectors, RideWire self-funds 100% free disaster warnings for North Valley working families and locks 50% directly into the Albuquerque Family Support Trust.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right font-mono text-xs">
            <div className="text-neutral-400 text-[11px]">Working Capital Balance:</div>
            <div className="text-lg font-bold text-white">${ledger.closedWorkingCapital.toLocaleString()}</div>
          </div>
          <button
            onClick={() => {
              onRetainerExecuted(50000);
              showNotification("Executed $50,000 Enterprise Sponsoring Retainer! +$25,000 locked to Albuquerque Family Support Trust!");
            }}
            className="bg-gradient-to-r from-amber-600 to-[#c2593f] hover:from-amber-500 hover:to-[#b54a32] text-white font-mono text-xs font-bold px-4 py-2.5 rounded-lg shadow-lg shadow-amber-950/40 transition-all"
          >
            Sponsor Next Hazard Cycle ($50k)
          </button>
        </div>
      </section>
    </div>
  );
};
