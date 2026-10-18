import React, { useState } from 'react';
import { 
  DollarSign, 
  TrendingUp, 
  HeartHandshake, 
  Award, 
  Landmark, 
  FileText, 
  CheckCircle, 
  Clock, 
  Send,
  Building,
  CreditCard,
  PieChart,
  ShieldCheck
} from 'lucide-react';
import { CapitalLedger } from '../types/ridewire';
import { CdfiModal } from './CdfiModal';

interface CapitalEngineProps {
  ledger: CapitalLedger;
  onGrantApproved: (amount: number) => void;
}

export const CapitalEngine: React.FC<CapitalEngineProps> = ({ ledger, onGrantApproved }) => {
  const [showCdfiModal, setShowCdfiModal] = useState(false);

  // Simulated active and closed retainers
  const recentInvoices = [
    {
      id: "INV-2026-089",
      client: "Permian Gateway Midstream Partners LLC",
      purpose: "JIT Telemetry Anomaly Reduction & Flange Weld Diagnostic",
      amount: 35000,
      status: "CLEARED / EFT",
      date: "September 30, 2026",
      trustShare: 17500,
      code: "RW-JIT-PERM-4B"
    },
    {
      id: "INV-2026-088",
      client: "Albuquerque Bernalillo County Water Utility (ABCWUA)",
      purpose: "Deep-Well Hydro-Acoustic Balancing & Impeller Protection",
      amount: 45000,
      status: "CLEARED / EFT",
      date: "September 29, 2026",
      trustShare: 22500,
      code: "RW-JIT-AQUIFER-505"
    },
    {
      id: "INV-2026-087",
      client: "Permian Electric Transmission Cooperative",
      purpose: "345kV Transformer Sub-Synchronous Resonance Damping",
      amount: 40000,
      status: "CLEARED / EFT",
      date: "September 28, 2026",
      trustShare: 20000,
      code: "RW-JIT-GRID-771"
    },
    {
      id: "INV-2026-090",
      client: "Cimarron Salt Water Disposal Network",
      purpose: "Induced Seismicity Backpressure Telemetry Diagnostic",
      amount: 28000,
      status: "PENDING WIRE",
      date: "September 30, 2026",
      trustShare: 14000,
      code: "RW-JIT-SWD-118"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      {/* Executive Treasury Header */}
      <div className="bg-gradient-to-r from-[#1f140e] via-[#161a22] to-[#111921] border-2 border-emerald-500/40 rounded-2xl p-6 shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400">
              <DollarSign className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-bold">
                RIDEWIRE TREASURY & CAPITAL ACCUMULATION
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white font-mono">
                Working Capital & Revenue Engine
              </h2>
              <p className="text-xs text-neutral-300 font-sans mt-0.5">
                Every investigative dispatch converts infrastructure risk into real cash retainers, directly funding operations, employee retirement, and the Albuquerque Family Support Trust.
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowCdfiModal(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white font-mono text-xs font-bold shadow-lg shadow-cyan-950/40 transition-all"
          >
            <Landmark className="w-4 h-4" />
            <span>Apply for WESST / DreamSpring CDFI Loan ($50k)</span>
          </button>
        </div>
      </div>

      {/* Key Financial Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Closed Working Capital */}
        <div className="bg-[#101720] border border-emerald-500/30 rounded-xl p-4 shadow-lg">
          <div className="flex items-center justify-between text-neutral-400 mb-2">
            <span className="text-xs font-mono uppercase">Closed Working Capital</span>
            <DollarSign className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-mono font-black text-emerald-400">
            ${ledger.closedWorkingCapital.toLocaleString()}
          </div>
          <p className="text-[11px] text-neutral-400 mt-1 flex items-center gap-1">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Cleared via Direct EFT / ACH</span>
          </p>
        </div>

        {/* Founder Sovereign Philanthropy & Family Foundation */}
        <div className="bg-[#181310] border border-[#c2593f]/40 rounded-xl p-4 shadow-lg">
          <div className="flex items-center justify-between text-neutral-400 mb-2">
            <span className="text-xs font-mono uppercase text-amber-300">Founder Sovereign Capital</span>
            <HeartHandshake className="w-4 h-4 text-[#c2593f]" />
          </div>
          <div className="text-2xl font-mono font-black text-amber-400">
            ${ledger.familyTrustAllocated.toLocaleString()}
          </div>
          <p className="text-[11px] text-neutral-300 mt-1">
            S. Pohl Private Family Foundation & Non-Profit Reserve
          </p>
        </div>

        {/* 15% Employee Profit Sharing */}
        <div className="bg-[#101a1e] border border-cyan-800/40 rounded-xl p-4 shadow-lg">
          <div className="flex items-center justify-between text-neutral-400 mb-2">
            <span className="text-xs font-mono uppercase text-cyan-300">15% Employee 401(k) Pool</span>
            <Award className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-2xl font-mono font-black text-cyan-400">
            ${ledger.employeeRetirementAllocated.toLocaleString()}
          </div>
          <p className="text-[11px] text-neutral-400 mt-1">
            Profit-Sharing & Wealth Plan
          </p>
        </div>

        {/* Total Pipeline Under Action */}
        <div className="bg-[#141b24] border border-neutral-800 rounded-xl p-4 shadow-lg">
          <div className="flex items-center justify-between text-neutral-400 mb-2">
            <span className="text-xs font-mono uppercase">Unclosed Active Pipeline</span>
            <TrendingUp className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl font-mono font-black text-white">
            ${ledger.pipelineValue.toLocaleString()}
          </div>
          <p className="text-[11px] text-neutral-400 mt-1">
            4 Critical Basin Target Entities
          </p>
        </div>
      </div>

      {/* Capitalization Structure & Founding Playbook Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Cap Table Details */}
        <div className="bg-[#0f141c] border border-neutral-800 rounded-xl p-5 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
            <PieChart className="w-4 h-4" />
            <span>10,000,000 Common Share Pool</span>
          </div>

          <div className="space-y-2.5 text-xs font-mono">
            <div className="bg-[#151c26] p-2.5 rounded-lg border border-neutral-800 flex justify-between items-center">
              <span className="text-neutral-300">Founder & CEO (S. Pohl):</span>
              <strong className="text-white">8,000,000 Shares (80%)</strong>
            </div>
            <div className="bg-[#151c26] p-2.5 rounded-lg border border-neutral-800 flex justify-between items-center">
              <span className="text-cyan-300">Employee Option Pool:</span>
              <strong className="text-cyan-400">1,500,000 Shares (15%)</strong>
            </div>
            <div className="bg-[#151c26] p-2.5 rounded-lg border border-neutral-800 flex justify-between items-center">
              <span className="text-amber-300">Advisory & CDFI Reserve:</span>
              <strong className="text-amber-400">500,000 Shares (5%)</strong>
            </div>
          </div>

          <p className="text-[11px] text-neutral-400 font-sans leading-relaxed">
            Delaware C-Corp parent with 10,000,000 authorized shares at $0.0001 par value. Standard 4-year vesting with 12-month cliff to reward sustained execution.
          </p>
        </div>

        {/* Banking & Wire Routing Clearance */}
        <div className="bg-[#0f141c] border border-neutral-800 rounded-xl p-5 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
            <CreditCard className="w-4 h-4" />
            <span>RideWire Treasury & Wire Clearing</span>
          </div>

          <div className="space-y-2 text-xs font-mono text-neutral-300">
            <div className="bg-[#141b24] p-2 rounded border border-neutral-800">
              <span className="text-neutral-500 text-[10px] block">BENEFICIARY ENTITY:</span>
              <strong className="text-white">RideWire LLC & Action Intell</strong>
            </div>
            <div className="bg-[#141b24] p-2 rounded border border-neutral-800">
              <span className="text-neutral-500 text-[10px] block">HEADQUARTERS:</span>
              <span>North Valley, Albuquerque, NM</span>
            </div>
            <div className="bg-[#141b24] p-2 rounded border border-neutral-800">
              <span className="text-neutral-500 text-[10px] block">SETTLEMENT PROTOCOL:</span>
              <span className="text-emerald-400 font-semibold">Immediate 2-Hour JIT Field Clearing</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 font-mono">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Zero software licensing overhead (CostShield Node active)</span>
          </div>
        </div>

        {/* CDFI Non-Dilutive Working Capital Card */}
        <div className="bg-gradient-to-br from-[#1a232e] to-[#121822] border-2 border-cyan-500/40 rounded-xl p-5 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
              <Landmark className="w-4 h-4" />
              <span>WESST & DreamSpring CDFI</span>
            </div>
            <h4 className="text-sm font-bold text-white font-mono">
              Albuquerque Regional Capital Facility
            </h4>
            <p className="text-xs text-neutral-300 leading-relaxed font-sans">
              Non-dilutive community capital designed specifically for Albuquerque women-owned tech and industrial enterprises. Rapid approval for field equipment, sensor inventory, and JIT payroll.
            </p>
          </div>

          <button
            onClick={() => setShowCdfiModal(true)}
            className="w-full mt-4 py-2 px-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2"
          >
            <span>Open CDFI Filing Builder ($50k)</span>
          </button>
        </div>
      </div>

      {/* Active Retainer Ledger & Invoices Table */}
      <div className="bg-[#0f141c] border border-neutral-800 rounded-xl p-5 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-3">
          <div>
            <h3 className="text-sm font-bold text-white font-mono flex items-center gap-2">
              <span>ACTIVE COMMERCIAL RETAINERS & INVOICE LEDGER</span>
              <span className="text-xs font-normal text-neutral-400">({recentInvoices.length} Registered)</span>
            </h3>
            <p className="text-xs text-neutral-400 mt-0.5">
              Direct revenue contracts generated from daily investigative wires
            </p>
          </div>
          <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded">
            Total Capital Inflow: ${(ledger.closedWorkingCapital).toLocaleString()}
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-sans">
            <thead>
              <tr className="border-b border-neutral-800 text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                <th className="py-2.5 px-3">Invoice ID</th>
                <th className="py-2.5 px-3">Target Operator</th>
                <th className="py-2.5 px-3">Diagnostic Scope</th>
                <th className="py-2.5 px-3">Retainer Value</th>
                <th className="py-2.5 px-3">50% Family Trust</th>
                <th className="py-2.5 px-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/60 font-mono">
              {recentInvoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-neutral-800/30 transition-colors">
                  <td className="py-3 px-3 text-cyan-400 font-semibold">{inv.id}</td>
                  <td className="py-3 px-3 font-sans text-neutral-200 font-medium">{inv.client}</td>
                  <td className="py-3 px-3 font-sans text-neutral-400 max-w-xs truncate">{inv.purpose}</td>
                  <td className="py-3 px-3 text-white font-bold">${inv.amount.toLocaleString()}</td>
                  <td className="py-3 px-3 text-amber-300 font-bold">${inv.trustShare.toLocaleString()}</td>
                  <td className="py-3 px-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      inv.status.includes('CLEARED')
                        ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40'
                        : 'bg-amber-950 text-amber-300 border border-amber-500/40'
                    }`}>
                      {inv.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showCdfiModal && (
        <CdfiModal
          onClose={() => setShowCdfiModal(false)}
          onGrantApproved={onGrantApproved}
        />
      )}
    </div>
  );
};
