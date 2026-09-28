import React from 'react';
import { 
  CheckCircle2, 
  X, 
  QrCode, 
  Download, 
  Printer, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Award,
  ArrowRight
} from 'lucide-react';

export default function ReceiptModal({ transaction, onClose, language = 'en' }) {
  if (!transaction) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden text-slate-100 relative">
        {/* Modal Top Bar */}
        <div className="bg-gradient-to-r from-emerald-900 via-slate-800 to-teal-900 px-6 py-4 flex items-center justify-between border-b border-emerald-700/40">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">CPCB Form-6 Digital Handover Passbook</h3>
              <p className="text-[11px] text-emerald-300 font-mono">E-Waste Rules 2022 Compliant Receipt</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Receipt Body */}
        <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
          {/* Status Banner */}
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <div>
                <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider block">
                  Transaction Verified
                </span>
                <span className="text-xs text-slate-300">
                  Ref: {transaction.id}
                </span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-slate-400 block font-mono">Issued At</span>
              <span className="text-xs font-medium text-slate-200">{transaction.date || transaction.timestamp}</span>
            </div>
          </div>

          {/* Party Details Grid */}
          <div className="grid grid-cols-2 gap-3 text-xs bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
            <div>
              <span className="text-slate-400 block mb-0.5">Informal Collector (Kabadiwala)</span>
              <span className="font-semibold text-white block">{transaction.collectorName}</span>
              <span className="text-slate-400 text-[11px] font-mono">{transaction.collectorPhone}</span>
            </div>
            <div className="border-l border-slate-800 pl-3">
              <span className="text-slate-400 block mb-0.5">Authorized R2/CPCB Recycler</span>
              <span className="font-semibold text-emerald-300 block">{transaction.recyclerName}</span>
              <span className="text-slate-400 text-[11px] font-mono">{transaction.cpcbForm6No}</span>
            </div>
          </div>

          {/* Material & Financial Breakdown */}
          <div className="bg-slate-950/40 rounded-xl border border-slate-800 p-4 space-y-2.5 text-xs">
            <div className="flex justify-between items-center text-slate-300 pb-2 border-b border-slate-800">
              <span className="font-medium text-white">{transaction.category}</span>
              <span className="font-mono text-emerald-400">{transaction.weightKg} kg</span>
            </div>
            <div className="flex justify-between items-center text-slate-400">
              <span>Base MSP Rate:</span>
              <span className="font-mono">₹{transaction.baseRate} / kg</span>
            </div>
            <div className="flex justify-between items-center text-slate-400">
              <span>Gross Scrap Amount:</span>
              <span className="font-mono">₹{Number(transaction.grossAmount).toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between items-center text-emerald-400 bg-emerald-950/40 px-2.5 py-1.5 rounded-lg border border-emerald-800/40">
              <span className="flex items-center gap-1 font-medium">
                <Award className="w-3.5 h-3.5" />
                Ministry of Mines Green Formalization Bonus (+10%):
              </span>
              <span className="font-mono font-bold">+₹{Number(transaction.govtBonusAmount).toLocaleString('en-IN')}</span>
            </div>
            <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-sm font-bold text-white">
              <span>Net Payout to Collector:</span>
              <span className="text-emerald-400 font-mono text-base">₹{Number(transaction.netPayable).toLocaleString('en-IN')}</span>
            </div>
            <div className="text-[11px] text-slate-400 pt-1 flex items-center justify-between">
              <span>Settlement Channel:</span>
              <span className="text-amber-300 font-mono">{transaction.paymentMode || 'Instant UPI / DBT'}</span>
            </div>
          </div>

          {/* Critical Minerals Recovered Estimate (JNARDDC Formula) */}
          {transaction.recoveredMinerals && (
            <div className="bg-cyan-950/20 border border-cyan-800/30 rounded-xl p-3.5 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-300">
                <Cpu className="w-3.5 h-3.5" />
                <span>Critical Minerals Saved from Backyard Acid Burning (JNARDDC Metric)</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1 text-[11px]">
                {transaction.recoveredMinerals.copperKg && (
                  <span className="bg-slate-800 text-amber-300 px-2 py-0.5 rounded border border-slate-700">
                    Cu: {transaction.recoveredMinerals.copperKg} kg
                  </span>
                )}
                {transaction.recoveredMinerals.lithiumKg && (
                  <span className="bg-slate-800 text-cyan-300 px-2 py-0.5 rounded border border-slate-700">
                    Li: {transaction.recoveredMinerals.lithiumKg} kg
                  </span>
                )}
                {transaction.recoveredMinerals.cobaltKg && (
                  <span className="bg-slate-800 text-indigo-300 px-2 py-0.5 rounded border border-slate-700">
                    Co: {transaction.recoveredMinerals.cobaltKg} kg
                  </span>
                )}
                {transaction.recoveredMinerals.goldGrams && (
                  <span className="bg-slate-800 text-yellow-300 px-2 py-0.5 rounded border border-slate-700">
                    Au: {transaction.recoveredMinerals.goldGrams} g
                  </span>
                )}
                {transaction.recoveredMinerals.aluminiumKg && (
                  <span className="bg-slate-800 text-slate-200 px-2 py-0.5 rounded border border-slate-700">
                    Al: {transaction.recoveredMinerals.aluminiumKg} kg
                  </span>
                )}
              </div>
            </div>
          )}

          {/* QR Verification Barcode Mock */}
          <div className="flex items-center justify-between p-3 bg-slate-950 rounded-xl border border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-lg p-1 flex items-center justify-center shadow">
                <div className="w-full h-full bg-slate-950 flex flex-col items-center justify-center text-[7px] text-emerald-400 font-mono">
                  <span>[QR]</span>
                  <span>EPR</span>
                </div>
              </div>
              <div className="text-[11px]">
                <span className="text-slate-300 font-mono block font-bold">{transaction.qrHash || 'KCC-EPR-VERIFIED'}</span>
                <span className="text-slate-500">Tamper-proof CPCB Portal verification token</span>
              </div>
            </div>
            <span className="bg-emerald-950 text-emerald-300 border border-emerald-800 px-2 py-1 rounded text-[11px] font-mono">
              EPR: +{transaction.weightKg} Pts
            </span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-950 px-6 py-3 border-t border-slate-800 flex items-center justify-between text-xs">
          <span className="text-slate-500 text-[11px]">Ready for State PCB & Tax Auditing</span>
          <div className="flex gap-2">
            <button 
              onClick={() => window.print()}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Slip</span>
            </button>
            <button 
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-colors shadow-md shadow-emerald-700/30"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
