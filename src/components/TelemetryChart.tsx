import React, { useState } from 'react';
import { Activity, ShieldAlert, Zap, Clock } from 'lucide-react';
import { TelemetryForensics } from '../types/ridewire';

interface TelemetryChartProps {
  forensics: TelemetryForensics;
}

export const TelemetryChart: React.FC<TelemetryChartProps> = ({ forensics }) => {
  const [activeCycle, setActiveCycle] = useState<'raw' | '13logic'>('13logic');

  // Synthetic sample points for the curve
  const rawPoints = [
    { time: "00:00", stress: 142, threshold: 152 },
    { time: "00:30", stress: 147, threshold: 152 },
    { time: "01:00", stress: 154, threshold: 152 },
    { time: "01:30", stress: 161, threshold: 152 },
    { time: "02:00", stress: 168.4, threshold: 152 },
    { time: "02:30", stress: 172.1, threshold: 152 },
  ];

  const mitigatedPoints = [
    { time: "00:00", stress: 142, threshold: 152 },
    { time: "00:30", stress: 147, threshold: 152 },
    { time: "01:00", stress: 154, threshold: 152 },
    { time: "01:20 (RW-JIT)", stress: 168.4, threshold: 152 },
    { time: "01:45 (Consensus)", stress: 146, threshold: 152 },
    { time: "02:30 (Stabilized)", stress: 138, threshold: 152 },
  ];

  const points = activeCycle === 'raw' ? rawPoints : mitigatedPoints;

  return (
    <div className="bg-[#0e141c] border border-amber-900/30 rounded-xl p-4 my-5 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded bg-red-950/60 border border-red-500/40 text-red-400">
            <Activity className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span>TELEMETRIC ANOMALY REDUCTION ENGINE</span>
              <span className="text-[10px] bg-red-900/40 text-red-300 px-1.5 py-0.2 rounded font-sans">
                CRITICAL THRESHOLD BREACH
              </span>
            </h3>
            <p className="text-[11px] text-neutral-400">
              Raw sensor streams reduced through Node 2 (Ingestion) & Node 3 (Anomaly Filter)
            </p>
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-1 bg-[#151d27] p-1 rounded-lg border border-neutral-700 text-xs font-mono">
          <button
            onClick={() => setActiveCycle('raw')}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeCycle === 'raw'
                ? 'bg-red-950 text-red-300 border border-red-500/50 font-bold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Raw Unmitigated Surges
          </button>
          <button
            onClick={() => setActiveCycle('13logic')}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeCycle === '13logic'
                ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/50 font-bold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            13=1 Damped State
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
        <div className="bg-[#121922] p-2.5 rounded-lg border border-neutral-800">
          <span className="text-[10px] font-mono text-neutral-400 uppercase block">Active Reading</span>
          <span className="text-base sm:text-lg font-mono font-black text-red-400">{forensics.measuredValue}</span>
          <span className="text-[10px] text-red-400/80 block mt-0.5">Exceeds limits by +16.4 MPa</span>
        </div>

        <div className="bg-[#121922] p-2.5 rounded-lg border border-neutral-800">
          <span className="text-[10px] font-mono text-neutral-400 uppercase block">Critical Threshold</span>
          <span className="text-base sm:text-lg font-mono font-black text-amber-300">{forensics.safetyThreshold}</span>
          <span className="text-[10px] text-neutral-400 block mt-0.5">Max allowable stress limit</span>
        </div>

        <div className="bg-[#121922] p-2.5 rounded-lg border border-neutral-800">
          <span className="text-[10px] font-mono text-neutral-400 uppercase block">Harmonic Vector</span>
          <span className="text-base sm:text-lg font-mono font-black text-cyan-300">{forensics.acousticFrequency}</span>
          <span className="text-[10px] text-cyan-400/80 block mt-0.5">Non-random resonance cycle</span>
        </div>

        <div className="bg-[#121922] p-2.5 rounded-lg border border-neutral-800">
          <span className="text-[10px] font-mono text-neutral-400 uppercase block">Decision Compression</span>
          <span className="text-base sm:text-lg font-mono font-black text-emerald-400 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {forensics.decisionCompressionTime}
          </span>
          <span className="text-[10px] text-emerald-400/80 block mt-0.5">SOP-01 SLA: &lt;1.8h (Passed)</span>
        </div>
      </div>

      {/* SVG Wave Visualization */}
      <div className="relative bg-[#090d12] rounded-lg p-3 border border-neutral-800 overflow-hidden">
        <div className="flex justify-between items-center text-[10px] font-mono text-neutral-500 mb-2">
          <span>Y-AXIS: MECHANICAL STRESS (MPa)</span>
          <span className="flex items-center gap-2">
            <span className="flex items-center gap-1 text-red-400">
              <span className="w-2.5 h-0.5 bg-red-500"></span> Safety Redline (152.0 MPa)
            </span>
            <span className="flex items-center gap-1 text-cyan-400">
              <span className="w-2.5 h-0.5 bg-cyan-400"></span> Line Telemetry
            </span>
          </span>
        </div>

        <svg viewBox="0 0 600 160" className="w-full h-36">
          {/* Background grid */}
          <line x1="0" y1="40" x2="600" y2="40" stroke="#1f2937" strokeDasharray="4 4" />
          <line x1="0" y1="80" x2="600" y2="80" stroke="#1f2937" strokeDasharray="4 4" />
          <line x1="0" y1="120" x2="600" y2="120" stroke="#1f2937" strokeDasharray="4 4" />

          {/* Safety Threshold Line at 152 MPa (~ Y=60) */}
          <line x1="0" y1="65" x2="600" y2="65" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="6 3" />
          <text x="10" y="60" fill="#ef4444" fontSize="10" fontFamily="monospace">
            SAFETY THRESHOLD: 152.0 MPa (MATERIAL FAILURE ZONE)
          </text>

          {/* Data Path */}
          {activeCycle === 'raw' ? (
            <path
              d="M 20,110 C 120,95 200,75 300,55 C 400,35 480,25 580,18"
              fill="none"
              stroke="#f43f5e"
              strokeWidth="3"
            />
          ) : (
            <path
              d="M 20,110 C 120,95 200,75 280,30 C 350,110 450,118 580,128"
              fill="none"
              stroke="#06b6d4"
              strokeWidth="3"
            />
          )}

          {/* Marker dots */}
          {points.map((pt, i) => {
            const x = 20 + i * (560 / (points.length - 1));
            const y = activeCycle === 'raw' 
              ? (110 - i * 18) 
              : (i <= 3 ? 110 - i * 26 : 110 + (i - 3) * 9);
            const isDanger = pt.stress > pt.threshold;

            return (
              <g key={i}>
                <circle
                  cx={x}
                  cy={y}
                  r="4.5"
                  fill={isDanger ? '#ef4444' : '#10b981'}
                  stroke="#ffffff"
                  strokeWidth="1.5"
                />
                <text
                  x={x}
                  y={y - 10}
                  fill={isDanger ? '#fca5a5' : '#6ee7b7'}
                  fontSize="9"
                  textAnchor="middle"
                  fontFamily="monospace"
                >
                  {pt.stress}
                </text>
                <text
                  x={x}
                  y="152"
                  fill="#9ca3af"
                  fontSize="8"
                  textAnchor="middle"
                  fontFamily="monospace"
                >
                  {pt.time}
                </text>
              </g>
            );
          })}
        </svg>

        <div className="mt-2 pt-2 border-t border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
          <span className="flex items-center gap-1.5 text-amber-300">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
            Ground Rule: Line pressure must be isolated below 152 MPa prior to tool engagement.
          </span>
          <span className="text-cyan-400 hidden md:inline">
            13=1 Consensus State: VERIFIED TRUTH (ZERO-FRAUD)
          </span>
        </div>
      </div>
    </div>
  );
};
