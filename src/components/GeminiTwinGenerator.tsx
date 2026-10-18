import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  RefreshCw, 
  Flame, 
  ShieldCheck, 
  Cpu, 
  Building2, 
  DollarSign, 
  CheckCircle,
  FileText,
  AlertCircle
} from 'lucide-react';
import { InvestigativeArticle } from '../types/ridewire';

interface GeminiTwinGeneratorProps {
  onArticleGenerated: (article: InvestigativeArticle) => void;
  onOpenArticle: (id: string) => void;
}

export const GeminiTwinGenerator: React.FC<GeminiTwinGeneratorProps> = ({
  onArticleGenerated,
  onOpenArticle,
}) => {
  const [topic, setTopic] = useState('Delaware Basin Natural Gas Pipeline Micro-Fracture Surge');
  const [region, setRegion] = useState('Eddy & Lea Counties, New Mexico / Loving County, Texas');
  const [customIncident, setCustomIncident] = useState('Line pressure spiking past 152.0 MPa safety threshold; hydraulic cavitation threatening critical compressor station welds.');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recentGenerated, setRecentGenerated] = useState<InvestigativeArticle | null>(null);

  const presets = [
    {
      title: "Permian Pipeline Flange Micro-Shear",
      topic: "High-Pressure Gas Pipeline Micro-Fracture Surge & Weld Stress",
      region: "Delaware Basin / Eddy County, New Mexico",
      incident: "Subsurface pressure surged to 168.4 MPa across 24-inch transmission line; acoustic telemetry indicates severe hydraulic cavitation."
    },
    {
      title: "Southwest Aquifer Impeller Cavitation",
      topic: "Municipal Deep-Well Aquifer Subsidence & Pump Cavitation",
      region: "Middle Rio Grande Basin / Bernalillo County, NM",
      incident: "Hydrostatic drawdown has created a negative 4.2 bar vacuum at municipal wellheads, triggering acoustic cavitation that destroys pump impellers in 90 days."
    },
    {
      title: "345kV Grid Transformer Core Harmonic Burnout",
      topic: "High-Voltage Transformer Sub-Synchronous Harmonic Resonance (18.2 Hz)",
      region: "West Texas Interconnect / Pecos & Odessa Substation Loop",
      incident: "Variable wind generation and gas peakers causing 18.2 Hz magnetic flux saturation in 345kV autotransformers; core temperature exceeding 138°C."
    },
    {
      title: "San Juan Basin Casing Methane Leak Anomaly",
      topic: "Legacy Well Casing Integrity Loss & Subsurface Gas Migration",
      region: "San Juan / Chaco Basin, Northwestern New Mexico",
      incident: "Acoustic resonance anomalies indicate annular cement sheath degradation on 40-year-old gas wells, threatening $4.8M EPA regulatory fines."
    }
  ];

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/generate-investigation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic,
          region,
          customIncident,
        }),
      });

      const result = await response.json();

      if (result.success && result.data) {
        const fullArticle: InvestigativeArticle = {
          ...result.data,
          id: result.data.id || `rw-dispatch-${Date.now()}`,
          publishedDate: new Date().toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          }),
        };

        setRecentGenerated(fullArticle);
        onArticleGenerated(fullArticle);
      } else {
        throw new Error(result.error || 'Failed to generate investigation');
      }
    } catch (err: any) {
      console.error('Error generating article:', err);
      setError(err.message || 'Error communicating with Gemini Twin Executive engine.');
    } finally {
      setLoading(false);
    }
  };

  const handleSelectPreset = (p: typeof presets[0]) => {
    setTopic(p.topic);
    setRegion(p.region);
    setCustomIncident(p.incident);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      {/* Executive Twin Banner */}
      <div className="bg-gradient-to-r from-[#17202b] via-[#151c22] to-[#1f1612] border-2 border-cyan-500/40 rounded-2xl p-6 shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center text-white shadow-lg shadow-cyan-950/40">
              <Sparkles className="w-6 h-6 text-white animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                  CO-EXECUTIVE INTELLIGENCE TWIN (NODE 1)
                </span>
                <span className="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded font-mono font-bold">
                  S. POHL × GEMINI POWER
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white font-mono mt-0.5">
                Investigative Wire & Working Capital Launchpad
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 font-sans mt-1">
                You and your Gemini Twin work as one executive team: detect breaking infrastructure crises, solve them with 13=1 logic, map the target operators, and draft immediate commercial retainers to put cash in the bank.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-black/50 border border-neutral-700 px-3.5 py-2 rounded-xl font-mono text-xs text-right">
              <span className="text-neutral-400 block text-[10px]">DECISION VELOCITY:</span>
              <span className="text-emerald-400 font-black text-sm">&lt; 1.8 Hours SLA</span>
              <span className="text-[10px] text-neutral-400 block">DevilsQC Validated</span>
            </div>
          </div>
        </div>
      </div>

      {/* Preset Crisis Scenarios */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-[#c2593f]" />
            <span>Select High-Impact Crisis Scenario:</span>
          </span>
          <span className="text-[11px] text-neutral-400 font-sans">
            Pre-computed from RideWire 13=1 Master Binder
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {presets.map((p, i) => (
            <button
              key={i}
              onClick={() => handleSelectPreset(p)}
              className="bg-[#121822] hover:bg-[#182230] border border-neutral-800 hover:border-cyan-500/60 p-3 rounded-xl text-left transition-all group shadow-md"
            >
              <span className="text-[10px] font-mono text-cyan-400 uppercase block font-bold">
                SCENARIO 0{i + 1}
              </span>
              <h4 className="text-xs font-bold text-white group-hover:text-cyan-300 mt-1 line-clamp-1">
                {p.title}
              </h4>
              <p className="text-[11px] text-neutral-400 mt-1 line-clamp-2">
                {p.region}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Generator Form */}
      <div className="bg-[#0f141c] border-2 border-neutral-800 rounded-2xl p-6 shadow-2xl space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-mono font-bold text-neutral-300 uppercase block mb-1.5">
              1. Critical Event or Industrial Topic to Investigate
            </label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g., Delaware Basin Gas Pipeline Mechanical Strain Surge"
              className="w-full bg-black/60 border border-neutral-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:border-cyan-400 outline-none font-sans"
            />
          </div>

          <div>
            <label className="text-xs font-mono font-bold text-neutral-300 uppercase block mb-1.5">
              2. Geographic Basin or Critical Corridor
            </label>
            <input
              type="text"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              placeholder="e.g., Lea & Eddy Counties, NM / Loving County, TX"
              className="w-full bg-black/60 border border-neutral-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:border-cyan-400 outline-none font-sans"
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-mono font-bold text-neutral-300 uppercase block mb-1.5">
            3. Specific Mechanical Symptoms, Regulatory Pressure, or Sensor Readings
          </label>
          <textarea
            value={customIncident}
            onChange={(e) => setCustomIncident(e.target.value)}
            rows={3}
            placeholder="Describe the line pressure, vibration frequency, impending regulatory fines, or pump cavitation..."
            className="w-full bg-black/60 border border-neutral-700 rounded-xl p-3 text-xs sm:text-sm text-white focus:border-cyan-400 outline-none font-sans leading-relaxed"
          />
        </div>

        {error && (
          <div className="bg-red-950/80 border border-red-500/50 p-3 rounded-xl flex items-center gap-2 text-xs text-red-200">
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-neutral-800">
          <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              DevilsQC Auto-Sweep Ready
            </span>
            <span>•</span>
            <span className="text-amber-300">50% Net Family Trust Locked</span>
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white font-mono text-xs font-bold shadow-xl shadow-cyan-950/40 transition-all disabled:opacity-50"
          >
            {loading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-white" />
                <span>REDUCING TELEMETRY (13=1 CONSENSUS)...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-cyan-200" />
                <span>LAUNCH INVESTIGATIVE WIRE & CAPITAL DISPATCH</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Instant Preview of Generated Article */}
      {recentGenerated && (
        <div className="bg-[#121922] border-2 border-emerald-500/40 rounded-2xl p-6 shadow-2xl space-y-4 animate-fade-in">
          <div className="flex items-center justify-between border-b border-emerald-900/40 pb-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <span className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-widest">
                DISPATCH GENERATED & VERIFIED BY DEVILSQC
              </span>
            </div>
            <button
              onClick={() => onOpenArticle(recentGenerated.id)}
              className="text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
            >
              <span>View Full Wire Page</span>
              <FileText className="w-3.5 h-3.5" />
            </button>
          </div>

          <div>
            <span className="text-[10px] font-mono text-red-400 bg-red-950/80 px-2 py-0.5 rounded border border-red-500/40">
              {recentGenerated.severity} • {recentGenerated.category}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white font-serif mt-2">
              {recentGenerated.title}
            </h3>
            <p className="text-xs text-neutral-300 mt-1">
              {recentGenerated.subtitle}
            </p>
          </div>

          <div className="bg-black/50 p-3 rounded-xl border border-neutral-800 text-xs text-neutral-300 font-sans italic">
            "{recentGenerated.executiveVoice}"
          </div>

          {/* Quick Step 2 Card */}
          <div className="bg-[#161f2b] p-3.5 rounded-xl border border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-mono text-amber-400 font-bold uppercase block">
                STEP 2 TARGET OPERATOR
              </span>
              <span className="text-sm font-bold text-white">
                {recentGenerated.stepTwoTargetDirectory[0]?.entityName}
              </span>
              <span className="text-xs text-neutral-400 block">
                {recentGenerated.stepTwoTargetDirectory[0]?.targetRole} ({recentGenerated.stepTwoTargetDirectory[0]?.location})
              </span>
            </div>

            <div className="text-right">
              <span className="text-[10px] font-mono text-neutral-400 block">PROPOSED RETAINER</span>
              <span className="text-base font-mono font-black text-amber-300">
                {recentGenerated.workingCapitalAction.retainerFee}
              </span>
              <span className="text-[10px] font-mono text-emerald-400 block">
                50% Trust: {recentGenerated.workingCapitalAction.familyTrustAllocation.split(' ')[0]}
              </span>
            </div>
          </div>

          <button
            onClick={() => onOpenArticle(recentGenerated.id)}
            className="w-full py-2.5 px-4 rounded-xl bg-[#c2593f] hover:bg-[#d4664c] text-white font-mono text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2"
          >
            <span>Open & Execute Retainer Dispatch</span>
          </button>
        </div>
      )}
    </div>
  );
};
