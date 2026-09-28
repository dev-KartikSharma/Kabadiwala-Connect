import React, { useState } from 'react';
import { 
  Landmark, 
  ShieldCheck, 
  Cpu, 
  TrendingUp, 
  MapPin, 
  FileSpreadsheet, 
  Sparkles, 
  ArrowUpRight, 
  Coins, 
  Users, 
  Flame, 
  Recycle,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { REGIONAL_DATA } from '../data/mockData';
import { TRANSLATIONS } from '../translations/i18n';

export default function MinistryDashboard({ transactions, language, onViewReceipt }) {
  const t = TRANSLATIONS[language].ministry;
  const [selectedCluster, setSelectedCluster] = useState(REGIONAL_DATA[0]);

  // Dynamic computations from current transactions
  const totalWeightKg = transactions.reduce((sum, tx) => sum + (tx.weightKg || 0), 0);
  const totalEwasteMT = (totalWeightKg / 1000) + 3180.4; // Base national aggregate + live test transactions
  const totalInformalWorkers = 24780 + transactions.length;
  const totalDbtDisbursedLakhs = ((totalWeightKg * 420 * 1.1) / 100000) + 128.5; // In Lakhs ₹

  // Cumulative Critical Minerals Yield (in kg or grams)
  const mineralsYield = {
    lithiumKg: (totalEwasteMT * 12.8).toFixed(1),
    cobaltKg: (totalEwasteMT * 18.4).toFixed(1),
    copperTonnes: (totalEwasteMT * 0.14).toFixed(2),
    goldGrams: (totalEwasteMT * 210).toFixed(0),
    aluminiumTonnes: (totalEwasteMT * 0.08).toFixed(2),
    neodymiumKg: (totalEwasteMT * 3.2).toFixed(1)
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-12">
      {/* Ministry Top Header */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950 border border-emerald-900/40 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[11px] font-mono px-2.5 py-0.5 rounded-full font-bold uppercase">
                JNARDDC E-Waste Urban Mining Directorate
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-xs text-slate-400">CPCB Portal Live Link #MOM-2026</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-black text-white tracking-tight">
              {t.dashboardTitle}
            </h2>
            <p className="text-xs text-slate-300 max-w-2xl">
              Real-time monitoring of informal waste-picker integration, critical mineral secondary recovery, and verifiable Extended Producer Responsibility (EPR) credit generation under E-Waste Rules 2022.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-slate-900/90 border border-slate-700/80 rounded-2xl p-3.5 text-center">
              <span className="text-[10px] text-slate-400 block font-medium uppercase">
                Virgin Mining Saved
              </span>
              <span className="text-xl font-black text-emerald-400 font-mono">
                94.8%
              </span>
              <span className="text-[10px] text-emerald-300/80 block">CO2 Reduction</span>
            </div>
          </div>
        </div>
      </div>

      {/* Top 4 Core KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1: Total Formalized Tonnage */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-lg relative overflow-hidden">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase">{t.formalizedTonnage}</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <Recycle className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-white font-mono">
            {totalEwasteMT.toLocaleString('en-IN', { maximumFractionDigits: 1 })} <span className="text-sm font-normal text-slate-400">MT</span>
          </div>
          <span className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1 font-medium">
            <TrendingUp className="w-3 h-3" />
            <span>+28.4% YoY via Kabadiwala Connect</span>
          </span>
        </div>

        {/* Metric 2: Informal Workers Onboarded */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-lg relative overflow-hidden">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase">{t.informalWorkersOnboarded}</span>
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-white font-mono">
            {totalInformalWorkers.toLocaleString('en-IN')}
          </div>
          <span className="text-[11px] text-amber-300 flex items-center gap-1 mt-1 font-medium">
            <ShieldCheck className="w-3 h-3" />
            <span>100% Aadhaar & UPI Verified</span>
          </span>
        </div>

        {/* Metric 3: Toxic Burning Prevented */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-lg relative overflow-hidden">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase">Hazardous Burning Averted</span>
            <div className="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-400 flex items-center justify-center">
              <Flame className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-white font-mono">
            412.6 <span className="text-sm font-normal text-slate-400">Tonnes Acid/Lead</span>
          </div>
          <span className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1 font-medium">
            <CheckCircle2 className="w-3 h-3" />
            <span>Zero Backyard Leaching</span>
          </span>
        </div>

        {/* Metric 4: Government Bonus / DBT Paid */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-lg relative overflow-hidden">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase">Direct Benefit Transfer (DBT)</span>
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
              <Coins className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-white font-mono">
            ₹{totalDbtDisbursedLakhs.toFixed(2)} <span className="text-sm font-normal text-slate-400">Lakh</span>
          </div>
          <span className="text-[11px] text-cyan-300 flex items-center gap-1 mt-1 font-medium">
            <Sparkles className="w-3 h-3" />
            <span>10% Green Bonus Disbursed</span>
          </span>
        </div>
      </div>

      {/* Critical Minerals Recovery Hub (JNARDDC Special Focus) */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-cyan-400" />
              <span>{t.criticalMineralsYield}</span>
            </h3>
            <p className="text-xs text-slate-400">{t.mineralSubtitle}</p>
          </div>
          <span className="text-xs bg-cyan-950 text-cyan-300 border border-cyan-800 px-3 py-1 rounded-full font-mono">
            Strategic Autonomy in Clean Energy Metals
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <div className="bg-slate-950/70 p-3.5 rounded-2xl border border-slate-800 text-center">
            <span className="text-xs font-bold text-cyan-300 block">Lithium (Li)</span>
            <span className="text-lg font-black text-white font-mono block mt-1">{mineralsYield.lithiumKg} kg</span>
            <span className="text-[10px] text-slate-500">From EV & Laptop Packs</span>
          </div>
          <div className="bg-slate-950/70 p-3.5 rounded-2xl border border-slate-800 text-center">
            <span className="text-xs font-bold text-indigo-300 block">Cobalt (Co)</span>
            <span className="text-lg font-black text-white font-mono block mt-1">{mineralsYield.cobaltKg} kg</span>
            <span className="text-[10px] text-slate-500">Cathode Refining</span>
          </div>
          <div className="bg-slate-950/70 p-3.5 rounded-2xl border border-slate-800 text-center">
            <span className="text-xs font-bold text-amber-300 block">Copper (Cu)</span>
            <span className="text-lg font-black text-white font-mono block mt-1">{mineralsYield.copperTonnes} MT</span>
            <span className="text-[10px] text-slate-500">Wiring & PCB Traces</span>
          </div>
          <div className="bg-slate-950/70 p-3.5 rounded-2xl border border-slate-800 text-center">
            <span className="text-xs font-bold text-yellow-300 block">Gold (Au)</span>
            <span className="text-lg font-black text-white font-mono block mt-1">{mineralsYield.goldGrams} g</span>
            <span className="text-[10px] text-slate-500">Microchips & CPU Pins</span>
          </div>
          <div className="bg-slate-950/70 p-3.5 rounded-2xl border border-slate-800 text-center">
            <span className="text-xs font-bold text-slate-300 block">Aluminium (Al)</span>
            <span className="text-lg font-black text-white font-mono block mt-1">{mineralsYield.aluminiumTonnes} MT</span>
            <span className="text-[10px] text-slate-500">Heat Sinks & Chassis</span>
          </div>
          <div className="bg-slate-950/70 p-3.5 rounded-2xl border border-slate-800 text-center">
            <span className="text-xs font-bold text-purple-300 block">Neodymium (Nd)</span>
            <span className="text-lg font-black text-white font-mono block mt-1">{mineralsYield.neodymiumKg} kg</span>
            <span className="text-[10px] text-slate-500">Rare Earth Speakers/Vibrators</span>
          </div>
        </div>
      </div>

      {/* Regional Cluster Analytics & CPCB Form-6 Audit Ledger */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Regional Clusters Table */}
        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>{t.regionalDistribution}</span>
            </h3>
            <span className="text-xs text-slate-400">7 Active Zones</span>
          </div>

          <div className="space-y-2.5">
            {REGIONAL_DATA.map((reg, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedCluster(reg)}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                  selectedCluster.city === reg.city
                    ? 'bg-slate-800 border-emerald-500 shadow-md'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs font-bold text-white block">{reg.city}</span>
                    <span className="text-[11px] text-slate-400">{reg.state}</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/80">
                    {reg.formalizationRate} Formalized
                  </span>
                </div>
                <div className="flex justify-between text-[11px] text-slate-400 pt-2 mt-1 border-t border-slate-800/80">
                  <span>Collectors: <strong className="text-slate-200 font-mono">{reg.registeredKabadiwalas.toLocaleString('en-IN')}</strong></span>
                  <span>E-Waste: <strong className="text-slate-200 font-mono">{reg.eWasteMT} MT</strong></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Live CPCB EPR Credit Audit Trail */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                <span>{t.auditLedger}</span>
              </h3>
              <p className="text-xs text-slate-400">Tamper-proof ledger preventing credit double counting</p>
            </div>
            <span className="text-[11px] bg-slate-800 text-slate-300 px-2 py-1 rounded font-mono">
              Live Feed
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950 text-slate-400 font-semibold border-b border-slate-800">
                <tr>
                  <th className="py-2.5 px-3">Form-6 Manifest</th>
                  <th className="py-2.5 px-3">Collector</th>
                  <th className="py-2.5 px-3">Category</th>
                  <th className="py-2.5 px-3">Weight</th>
                  <th className="py-2.5 px-3">EPR Credits</th>
                  <th className="py-2.5 px-3 text-right">Verification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 font-mono text-[11px]">
                {transactions.map((tx) => (
                  <tr key={tx.id} className="hover:bg-slate-800/50 transition-colors">
                    <td className="py-3 px-3 text-emerald-400 font-bold">{tx.cpcbForm6No}</td>
                    <td className="py-3 px-3 text-slate-300 font-sans">{tx.collectorName.split(' ')[0]}</td>
                    <td className="py-3 px-3 text-slate-400 font-sans">{tx.category}</td>
                    <td className="py-3 px-3 text-slate-200">{tx.weightKg} kg</td>
                    <td className="py-3 px-3 text-cyan-400">+{tx.weightKg} Pts</td>
                    <td className="py-3 px-3 text-right font-sans">
                      <button
                        onClick={() => onViewReceipt(tx)}
                        className="text-[11px] text-emerald-400 hover:text-emerald-300 underline font-medium"
                      >
                        Inspect Slip
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Compliance Guarantee Footnote */}
          <div className="bg-emerald-950/20 border border-emerald-800/30 rounded-2xl p-3.5 flex items-center justify-between text-xs text-emerald-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Full compliance with CPCB E-Waste (Management) Rules 2022 & Section 14 Guidelines</span>
            </div>
            <span className="font-mono text-[10px] text-emerald-400 font-bold">100% AUDIT READY</span>
          </div>
        </div>
      </div>
    </div>
  );
}
