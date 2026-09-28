import React, { useState } from 'react';
import { 
  Cpu, 
  BatteryCharging, 
  Zap, 
  Boxes, 
  Smartphone, 
  Power, 
  Plus, 
  Volume2, 
  Camera, 
  CheckCircle, 
  Clock, 
  AlertTriangle, 
  QrCode, 
  FileText, 
  TrendingUp, 
  ArrowUpRight,
  Sparkles,
  WifiOff,
  Info
} from 'lucide-react';
import { E_WASTE_CATEGORIES } from '../data/mockData';
import { TRANSLATIONS, speakText } from '../translations/i18n';

// Mapping for dynamic icons
const ICON_MAP = {
  Cpu,
  BatteryCharging,
  Zap,
  Boxes,
  Smartphone,
  Power
};

export default function CollectorView({ 
  transactions, 
  onAddNewLot, 
  language, 
  isOffline, 
  onViewReceipt 
}) {
  const t = TRANSLATIONS[language].collector;
  const [selectedCategory, setSelectedCategory] = useState(E_WASTE_CATEGORIES[0]);
  const [weightKg, setWeightKg] = useState(15);
  const [showLogModal, setShowLogModal] = useState(false);
  const [photoCaptured, setPhotoCaptured] = useState(true);
  const [activeVoicePrompt, setActiveVoicePrompt] = useState(null);

  // Calculations
  const baseRate = selectedCategory.ratePerKg;
  const grossAmount = weightKg * baseRate;
  const govtBonusAmount = grossAmount * 0.10; // 10% MoM formalization incentive
  const netPayable = grossAmount + govtBonusAmount;

  const handleSpeakCategory = (cat) => {
    const textToSpeak = language === 'hi'
      ? `${cat.nameHi}। सरकारी भाव है ${cat.ratePerKg} रुपये प्रति किलो। ध्यान दें: ${cat.safeDisposalTipHi}`
      : `${cat.nameEn}. Government benchmark rate is ${cat.ratePerKg} rupees per kilogram. Safety warning: ${cat.safeDisposalTipEn}`;
    
    speakText(textToSpeak, language === 'hi' ? 'hi-IN' : 'en-US');
    setActiveVoicePrompt(cat.id);
    setTimeout(() => setActiveVoicePrompt(null), 3500);
  };

  const handleSubmitLot = (e) => {
    e.preventDefault();
    if (!weightKg || weightKg <= 0) return;

    const newLot = {
      id: `TXN-${Math.floor(10000 + Math.random() * 90000)}`,
      collectorName: 'Ramu Kabadi (ID: KC-8821)',
      collectorPhone: '+91 98765 43210',
      recyclerName: 'EcoRecycle Green Infra Ltd. (CPCB Reg: R2-MH-2023)',
      category: language === 'hi' ? selectedCategory.nameHi : selectedCategory.nameEn,
      categoryId: selectedCategory.id,
      weightKg: parseFloat(weightKg),
      baseRate: selectedCategory.ratePerKg,
      grossAmount: Math.round(grossAmount),
      govtBonusPercent: 10,
      govtBonusAmount: Math.round(govtBonusAmount),
      netPayable: Math.round(netPayable),
      status: isOffline ? 'OFFLINE_QUEUED' : 'PENDING_INSPECTION',
      timestamp: new Date().toISOString(),
      date: 'Just now',
      paymentMode: 'Instant UPI (ramu.scrap@okhdfc)',
      cpcbForm6No: `FORM6-CPCB-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
      recoveredMinerals: {
        copperKg: selectedCategory.mineralYieldPerKg.copper ? +(selectedCategory.mineralYieldPerKg.copper * weightKg).toFixed(2) : null,
        lithiumKg: selectedCategory.mineralYieldPerKg.lithium ? +(selectedCategory.mineralYieldPerKg.lithium * weightKg).toFixed(2) : null,
        cobaltKg: selectedCategory.mineralYieldPerKg.cobalt ? +(selectedCategory.mineralYieldPerKg.cobalt * weightKg).toFixed(2) : null,
        goldGrams: selectedCategory.mineralYieldPerKg.goldMg ? +((selectedCategory.mineralYieldPerKg.goldMg * weightKg) / 1000).toFixed(2) : null,
        aluminiumKg: selectedCategory.mineralYieldPerKg.aluminium ? +(selectedCategory.mineralYieldPerKg.aluminium * weightKg).toFixed(2) : null
      },
      eprCreditsIssued: parseFloat(weightKg),
      qrHash: `KCC-TXN-${Math.floor(100000 + Math.random() * 900000)}`
    };

    onAddNewLot(newLot);
    setShowLogModal(false);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-12">
      {/* Offline Alert Banner */}
      {isOffline && (
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 flex items-center gap-3 text-amber-300">
          <WifiOff className="w-5 h-5 text-amber-400 shrink-0" />
          <div className="text-xs">
            <span className="font-bold block">{t.offlineActive}</span>
            <span className="text-amber-200/80">
              Low-connectivity tolerant architecture: You can record scrap collections anytime; they will automatically sync when network is restored.
            </span>
          </div>
        </div>
      )}

      {/* Collector Profile & Action Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700/60 rounded-3xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 relative z-10">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 bg-emerald-950/80 border border-emerald-600/40 text-emerald-300 px-3 py-1 rounded-full text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>MoM Registered Informal Aggregator</span>
            </div>
            <h2 className="text-2xl font-black text-white tracking-tight">
              {t.greeting}
            </h2>
            <p className="text-sm text-slate-300 max-w-xl">
              {t.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setShowLogModal(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold px-6 py-3.5 rounded-2xl shadow-lg shadow-emerald-500/25 transition-all transform active:scale-95 text-sm"
            >
              <Plus className="w-5 h-5 stroke-[2.5]" />
              <span>{t.sellButton}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Verified Price Board (MSP) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              <span>{t.todayRates}</span>
            </h3>
            <p className="text-xs text-slate-400">{t.rateNotice}</p>
          </div>
          <div className="text-right">
            <span className="text-xs bg-amber-500/10 text-amber-300 border border-amber-500/30 px-2.5 py-1 rounded-full font-medium">
              {t.bonusTag}
            </span>
          </div>
        </div>

        {/* Category Cards Grid with audio helper for low-literacy */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {E_WASTE_CATEGORIES.map((cat) => {
            const IconComponent = ICON_MAP[cat.icon] || Cpu;
            const isSpeaking = activeVoicePrompt === cat.id;

            return (
              <div 
                key={cat.id}
                className="bg-slate-900/90 border border-slate-800 hover:border-emerald-600/50 rounded-2xl p-5 transition-all shadow-md group relative overflow-hidden flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    
                    {/* Voice Read Aloud Button */}
                    <button
                      onClick={() => handleSpeakCategory(cat)}
                      className={`p-2 rounded-xl border transition-all ${
                        isSpeaking 
                          ? 'bg-emerald-500 text-slate-950 border-emerald-400 scale-105' 
                          : 'bg-slate-800/80 text-slate-300 hover:text-emerald-400 border-slate-700 hover:bg-slate-700'
                      }`}
                      title="Click to hear rate & safety tips in voice"
                    >
                      <Volume2 className={`w-4 h-4 ${isSpeaking ? 'animate-pulse' : ''}`} />
                    </button>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-slate-500 tracking-wider uppercase block">
                      {cat.code}
                    </span>
                    <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {language === 'hi' ? cat.nameHi : cat.nameEn}
                    </h4>
                  </div>

                  <div className="bg-slate-950/60 rounded-xl p-2.5 border border-slate-800/80 flex items-baseline justify-between">
                    <span className="text-xs text-slate-400 font-medium">MSP Rate:</span>
                    <div className="text-right">
                      <span className="text-xl font-black text-emerald-400 font-mono">₹{cat.ratePerKg}</span>
                      <span className="text-xs text-slate-400 ml-1">/ {cat.unit}</span>
                    </div>
                  </div>

                  {/* Critical Minerals Highlight */}
                  <div className="space-y-1">
                    <span className="text-[10px] text-slate-400 font-semibold block uppercase">
                      Yield Target (JNARDDC):
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {cat.minerals.map((m, idx) => (
                        <span key={idx} className="text-[10px] bg-slate-800 text-cyan-300 px-2 py-0.5 rounded border border-slate-700/60 font-mono">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Safety Advice */}
                  <div className="text-[11px] text-amber-200/90 bg-amber-950/20 border border-amber-900/30 p-2 rounded-lg flex items-start gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{language === 'hi' ? cat.safeDisposalTipHi : cat.safeDisposalTipEn}</span>
                  </div>
                </div>

                <div className="pt-4 mt-2 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">Hazard: {cat.hazardLevel}</span>
                  <button
                    onClick={() => {
                      setSelectedCategory(cat);
                      setShowLogModal(true);
                    }}
                    className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>{language === 'hi' ? 'यह बेचें' : 'Sell This'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Collector's Passbook / Handover History */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-400" />
              <span>{t.recentTransactions}</span>
            </h3>
            <p className="text-xs text-slate-400">
              Verified CPCB manifests and direct payment status
            </p>
          </div>
          <span className="text-xs text-slate-400 font-mono">
            {transactions.length} Records
          </span>
        </div>

        <div className="divide-y divide-slate-800">
          {transactions.map((tx) => (
            <div 
              key={tx.id} 
              className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-850 px-2 rounded-xl transition-colors"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white text-sm">{tx.category}</span>
                  <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                    {tx.weightKg} kg
                  </span>
                  {tx.status === 'COMPLETED' ? (
                    <span className="text-[11px] bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      {t.status.COMPLETED}
                    </span>
                  ) : tx.status === 'OFFLINE_QUEUED' ? (
                    <span className="text-[11px] bg-amber-500/10 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Queued (Offline)
                    </span>
                  ) : (
                    <span className="text-[11px] bg-blue-500/10 text-blue-300 border border-blue-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {t.status.PENDING_INSPECTION}
                    </span>
                  )}
                </div>
                <div className="text-xs text-slate-400 flex items-center gap-3">
                  <span>ID: <strong className="text-slate-300 font-mono">{tx.id}</strong></span>
                  <span>•</span>
                  <span>{tx.date || tx.timestamp}</span>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-4">
                <div className="text-right">
                  <div className="text-base font-bold text-emerald-400 font-mono">
                    ₹{Number(tx.netPayable).toLocaleString('en-IN')}
                  </div>
                  <div className="text-[10px] text-emerald-300/80">
                    Incl. ₹{Number(tx.govtBonusAmount).toLocaleString('en-IN')} MoM Bonus
                  </div>
                </div>

                <button
                  onClick={() => onViewReceipt(tx)}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 hover:text-white border border-slate-700 flex items-center gap-1.5 transition-colors"
                >
                  <QrCode className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Passbook</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal: Log Scrap Lot Flow */}
      {showLogModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-700 w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden relative">
            <div className="bg-gradient-to-r from-emerald-900 to-slate-800 px-6 py-4 border-b border-emerald-700/40 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-white text-lg">
                  {t.sellButton}
                </h3>
                <p className="text-xs text-emerald-300">
                  Direct formal handoff to CPCB registered recyclers
                </p>
              </div>
              <button 
                onClick={() => setShowLogModal(false)}
                className="text-slate-400 hover:text-white text-lg font-bold p-1"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmitLot} className="p-6 space-y-5">
              {/* Category Selector */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 block">
                  {t.selectCategory}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {E_WASTE_CATEGORIES.map((c) => (
                    <button
                      type="button"
                      key={c.id}
                      onClick={() => setSelectedCategory(c)}
                      className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                        selectedCategory.id === c.id
                          ? 'bg-emerald-950/80 border-emerald-500 text-white shadow'
                          : 'bg-slate-950/50 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <span className="font-bold block truncate">
                        {language === 'hi' ? c.nameHi : c.nameEn}
                      </span>
                      <span className="text-emerald-400 font-mono text-[11px]">
                        ₹{c.ratePerKg}/kg
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Weight Input & Slider */}
              <div className="space-y-2 bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-300">{t.weightPrompt}</span>
                  <span className="font-mono text-lg font-bold text-emerald-400">{weightKg} kg</span>
                </div>
                <input 
                  type="range"
                  min="1"
                  max="150"
                  step="0.5"
                  value={weightKg}
                  onChange={(e) => setWeightKg(parseFloat(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>1 kg</span>
                  <span>50 kg</span>
                  <span>100 kg</span>
                  <span>150 kg</span>
                </div>
              </div>

              {/* Camera Photo Mock */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 block">
                  {t.uploadPhoto}
                </label>
                <div className="bg-slate-950 border border-dashed border-slate-700 rounded-2xl p-4 text-center flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-emerald-500 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                    <Camera className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-slate-300 font-medium">
                    {photoCaptured ? '✓ Photo captured (Lot #982 Verification Image)' : 'Tap to snap photo with GPS timestamp'}
                  </span>
                  <span className="text-[10px] text-slate-500">
                    Provides tamper-proof evidence for CPCB digital audit
                  </span>
                </div>
              </div>

              {/* Financial Calculation Summary */}
              <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-4 space-y-2 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>{t.estimatedValue}</span>
                  <span className="font-mono font-medium">₹{Math.round(grossAmount).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-emerald-400 font-medium">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    {t.govtIncentive}
                  </span>
                  <span className="font-mono font-bold">+₹{Math.round(govtBonusAmount).toLocaleString('en-IN')}</span>
                </div>
                <div className="pt-2 border-t border-emerald-900/50 flex justify-between items-baseline text-white">
                  <span className="font-bold text-sm">{t.totalPayout}</span>
                  <span className="font-mono text-xl font-black text-emerald-400">
                    ₹{Math.round(netPayable).toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Submission Button */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowLogModal(false)}
                  className="flex-1 py-3 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-2 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>{t.confirmAndSubmit}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
