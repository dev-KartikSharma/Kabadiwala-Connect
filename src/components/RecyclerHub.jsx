import React, { useState } from 'react';
import { 
  Factory, 
  Scale, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  QrCode, 
  ShieldCheck, 
  Banknote, 
  Truck, 
  BadgeCheck, 
  FileCheck2,
  Clock,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { TRANSLATIONS } from '../translations/i18n';

export default function RecyclerHub({ 
  transactions, 
  onApproveLot, 
  language, 
  onViewReceipt 
}) {
  const t = TRANSLATIONS[language].recycler;
  const pendingLots = transactions.filter(tx => tx.status !== 'COMPLETED');
  const completedLots = transactions.filter(tx => tx.status === 'COMPLETED');

  const [selectedLot, setSelectedLot] = useState(pendingLots[0] || transactions[0]);
  const [calibratedWeight, setCalibratedWeight] = useState(selectedLot ? selectedLot.weightKg : 20);
  const [purityGrade, setPurityGrade] = useState('Grade A (95%+ Purity)');
  const [processingPayout, setProcessingPayout] = useState(false);
  const [successToast, setSuccessToast] = useState(null);

  // When selected lot changes
  const handleSelectLot = (lot) => {
    setSelectedLot(lot);
    setCalibratedWeight(lot.weightKg);
  };

  const handleApproveAndPay = () => {
    if (!selectedLot) return;
    setProcessingPayout(true);

    setTimeout(() => {
      // Trigger confetti celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.log('Confetti triggered');
      }

      onApproveLot(selectedLot.id, calibratedWeight);
      setProcessingPayout(false);
      setSuccessToast(`Paid ₹${selectedLot.netPayable.toLocaleString('en-IN')} instantly to ${selectedLot.collectorName} via UPI!`);
      setTimeout(() => setSuccessToast(null), 5000);
    }, 1000);
  };

  // Recycler KPI metrics
  const totalWeightKg = transactions.reduce((acc, curr) => acc + (curr.weightKg || 0), 0);
  const totalPayoutRupees = transactions.filter(t => t.status === 'COMPLETED').reduce((acc, curr) => acc + (curr.netPayable || 0), 0);
  const totalEprCredits = totalWeightKg;

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-12">
      {/* Toast */}
      {successToast && (
        <div className="bg-emerald-500 text-slate-950 font-bold px-4 py-3 rounded-2xl shadow-xl flex items-center justify-between gap-3 animate-in slide-in-from-top duration-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-slate-950" />
            <span>{successToast}</span>
          </div>
          <span className="text-xs font-mono bg-slate-950 text-emerald-400 px-2 py-0.5 rounded">
            UPI: SUCCESS
          </span>
        </div>
      )}

      {/* Recycler Facility Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Factory className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">
              R2 Authorized Urban Mining Facility
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            {t.hubTitle}
          </h2>
          <p className="text-xs text-slate-400">
            {t.subtext}
          </p>
        </div>

        {/* Quick Operational Metrics */}
        <div className="grid grid-cols-3 gap-3 bg-slate-950/70 p-3.5 rounded-2xl border border-slate-800 text-center">
          <div>
            <span className="text-[10px] text-slate-400 block">{t.stats.totalReceived}</span>
            <span className="text-base font-bold text-emerald-400 font-mono">
              {(totalWeightKg / 1000).toFixed(2)} MT
            </span>
          </div>
          <div className="border-x border-slate-800 px-3">
            <span className="text-[10px] text-slate-400 block">{t.stats.payoutsDisbursed}</span>
            <span className="text-base font-bold text-amber-400 font-mono">
              ₹{(totalPayoutRupees / 1000).toFixed(1)}k
            </span>
          </div>
          <div>
            <span className="text-[10px] text-slate-400 block">{t.stats.eprCreditsGenerated}</span>
            <span className="text-base font-bold text-cyan-400 font-mono">
              {totalEprCredits.toFixed(0)} Pts
            </span>
          </div>
        </div>
      </div>

      {/* Main Two-Column Layout: Queue on Left, Digital Weighbridge on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Incoming Lots Queue (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Truck className="w-4 h-4 text-emerald-400" />
              <span>{t.pendingQueue}</span>
            </h3>
            <span className="text-xs font-mono bg-emerald-950 text-emerald-300 border border-emerald-800 px-2 py-0.5 rounded-full">
              {pendingLots.length} Pending
            </span>
          </div>

          <div className="space-y-3">
            {pendingLots.length === 0 ? (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center text-slate-400 text-xs">
                All informal scrap lots verified! New submissions from collectors will appear here in real-time.
              </div>
            ) : (
              pendingLots.map((lot) => (
                <div
                  key={lot.id}
                  onClick={() => handleSelectLot(lot)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    selectedLot?.id === lot.id
                      ? 'bg-slate-800/90 border-emerald-500 shadow-md ring-1 ring-emerald-500/30'
                      : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="font-bold text-white text-sm block">{lot.category}</span>
                      <span className="text-xs text-slate-400">{lot.collectorName}</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-800/80 px-2 py-0.5 rounded">
                      {lot.weightKg} kg
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/60">
                    <span className="font-mono text-[11px] text-slate-500">{lot.id}</span>
                    <span className="font-mono text-emerald-400 font-semibold">
                      Est. ₹{lot.netPayable.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Historical Handover Section */}
          <div className="pt-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Recently Settled Lots ({completedLots.length})
            </h4>
            <div className="space-y-2">
              {completedLots.slice(0, 3).map((lot) => (
                <div 
                  key={lot.id}
                  className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3 flex items-center justify-between text-xs"
                >
                  <div>
                    <span className="font-semibold text-slate-200 block">{lot.category} ({lot.weightKg} kg)</span>
                    <span className="text-slate-500 text-[11px] font-mono">{lot.collectorName}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-mono font-bold">₹{lot.netPayable.toLocaleString('en-IN')}</span>
                    <button
                      onClick={() => onViewReceipt(lot)}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
                      title="View CPCB Form-6 Manifest"
                    >
                      <FileCheck2 className="w-3.5 h-3.5 text-emerald-400" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Digital Weighbridge & Verification Terminal (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          {selectedLot ? (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                    <Scale className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">{t.weighbridgeTitle}</h3>
                    <p className="text-xs text-slate-400">Lot ID: <strong className="font-mono text-emerald-400">{selectedLot.id}</strong></p>
                  </div>
                </div>

                <span className="bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs px-2.5 py-1 rounded-full font-medium">
                  {selectedLot.status}
                </span>
              </div>

              {/* Collector Details Box */}
              <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase font-bold">Informal Partner</span>
                  <span className="font-bold text-white text-sm">{selectedLot.collectorName}</span>
                  <span className="text-slate-400 font-mono">{selectedLot.collectorPhone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <a 
                    href={`tel:${selectedLot.collectorPhone}`}
                    className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white border border-slate-700 flex items-center gap-1.5"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Call Kabadi</span>
                  </a>
                </div>
              </div>

              {/* Weighbridge Adjustment */}
              <div className="space-y-4 bg-slate-950/50 p-5 rounded-2xl border border-slate-800">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-xs font-semibold text-slate-300 block">
                      Certified Load Cell Reading:
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Standard tare deduction applied automatically
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-black text-emerald-400 font-mono tracking-tight">
                      {calibratedWeight}
                    </span>
                    <span className="text-sm text-slate-400 ml-1">kg</span>
                  </div>
                </div>

                <input 
                  type="range"
                  min="1"
                  max="120"
                  step="0.1"
                  value={calibratedWeight}
                  onChange={(e) => setCalibratedWeight(parseFloat(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />

                {/* Material Quality Grading */}
                <div className="space-y-1.5 pt-2">
                  <span className="text-xs font-semibold text-slate-300 block">
                    Purity & Hazard Inspection Grade:
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {['Grade A (95%+ Purity)', 'Grade B (Minor Plastics)', 'Grade C (Mixed Debris)', 'Hazardous Lithium Pack'].map((grade) => (
                      <button
                        key={grade}
                        type="button"
                        onClick={() => setPurityGrade(grade)}
                        className={`p-2 rounded-xl border text-left text-[11px] transition-all ${
                          purityGrade === grade
                            ? 'bg-emerald-950/80 border-emerald-500 text-white shadow'
                            : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        {grade}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Instant Calculation Preview */}
              <div className="bg-emerald-950/20 border border-emerald-800/40 rounded-2xl p-4 text-xs space-y-2">
                <div className="flex justify-between text-slate-300">
                  <span>Base Scrap Value ({calibratedWeight} kg × ₹{selectedLot.baseRate}/kg):</span>
                  <span className="font-mono font-medium">₹{Math.round(calibratedWeight * selectedLot.baseRate).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-emerald-300">
                  <span className="flex items-center gap-1 font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    Ministry of Mines DBT Formalization Bonus (+10%):
                  </span>
                  <span className="font-mono font-bold">+₹{Math.round(calibratedWeight * selectedLot.baseRate * 0.1).toLocaleString('en-IN')}</span>
                </div>
                <div className="pt-2 border-t border-emerald-800/50 flex justify-between items-baseline text-white">
                  <span className="font-bold text-sm">Instant UPI Payout Dispatched:</span>
                  <span className="font-mono text-2xl font-black text-emerald-400">
                    ₹{Math.round(calibratedWeight * selectedLot.baseRate * 1.1).toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                {selectedLot.status === 'COMPLETED' ? (
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-center text-xs text-emerald-300 flex items-center justify-center gap-2">
                    <BadgeCheck className="w-5 h-5 text-emerald-400" />
                    <span>This lot is already formalized, paid, and audited under CPCB Form-6!</span>
                  </div>
                ) : (
                  <button
                    onClick={handleApproveAndPay}
                    disabled={processingPayout}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 transform active:scale-98"
                  >
                    {processingPayout ? (
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        <span>Transacting via UPI & Minting EPR Credits...</span>
                      </div>
                    ) : (
                      <>
                        <Banknote className="w-5 h-5" />
                        <span>{t.formalizeButton}</span>
                      </>
                    )}
                  </button>
                )}

                <button
                  onClick={() => onViewReceipt(selectedLot)}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <FileCheck2 className="w-4 h-4 text-emerald-400" />
                  <span>View CPCB Form-6 Digital Compliance Manifest</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center text-slate-400">
              {t.selectLotPrompt}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
