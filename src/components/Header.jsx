import React from 'react';
import { 
  ShieldCheck, 
  Wifi, 
  WifiOff, 
  Globe, 
  Smartphone, 
  Factory, 
  Landmark, 
  Presentation,
  RefreshCw,
  Award
} from 'lucide-react';
import { TRANSLATIONS } from '../translations/i18n';

export default function Header({ 
  currentRole, 
  setCurrentRole, 
  language, 
  setLanguage, 
  isOffline, 
  setIsOffline,
  offlineQueueCount 
}) {
  const t = TRANSLATIONS[language];

  return (
    <header className="bg-slate-950/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50 transition-all">
      {/* Top Government & SIH Authority Bar */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-amber-950 px-4 py-1.5 text-xs border-b border-emerald-900/40 flex flex-wrap items-center justify-between gap-2 text-slate-300">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-emerald-300">Ministry of Mines (MoM)</span>
          <span className="text-slate-500">•</span>
          <span className="text-slate-300">JNARDDC Centre of Excellence</span>
          <span className="hidden sm:inline text-slate-500">•</span>
          <span className="hidden sm:inline bg-emerald-900/60 text-emerald-200 px-2 py-0.5 rounded text-[11px] font-mono border border-emerald-700/50">
            SIH Problem ID: 26229
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Offline Mode Simulator Toggle */}
          <button
            onClick={() => setIsOffline(!isOffline)}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium transition-all ${
              isOffline 
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' 
                : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
            }`}
            title="Click to simulate intermittent connectivity in informal scrap markets"
          >
            {isOffline ? (
              <>
                <WifiOff className="w-3.5 h-3.5 text-rose-400 animate-bounce" />
                <span>Simulated Offline</span>
                {offlineQueueCount > 0 && (
                  <span className="bg-rose-500 text-white rounded-full px-1.5 text-[10px] ml-1">
                    {offlineQueueCount} queued
                  </span>
                )}
              </>
            ) : (
              <>
                <Wifi className="w-3.5 h-3.5 text-emerald-400" />
                <span>Field Network: Online</span>
              </>
            )}
          </button>

          {/* Language Toggle */}
          <div className="flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                language === 'en' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage('hi')}
              className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                language === 'hi' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              हिंदी
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation & Role Switcher */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-amber-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 text-slate-950 font-black text-xl">
            क
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold text-white tracking-tight flex items-center gap-1.5">
                {t.appTitle}
                <span className="text-xs font-normal text-emerald-400 bg-emerald-950/70 border border-emerald-800 px-1.5 py-0.5 rounded">
                  E-Waste Connect
                </span>
              </h1>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">
              {t.subtitle}
            </p>
          </div>
        </div>

        {/* Role Selector Tabs */}
        <div className="flex items-center gap-1.5 bg-slate-900/90 p-1.5 rounded-xl border border-slate-800 shadow-inner w-full md:w-auto overflow-x-auto">
          <button
            onClick={() => setCurrentRole('collector')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
              currentRole === 'collector'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Smartphone className="w-4 h-4 text-emerald-300" />
            <span>{t.roles.collector}</span>
          </button>

          <button
            onClick={() => setCurrentRole('recycler')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
              currentRole === 'recycler'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Factory className="w-4 h-4 text-amber-300" />
            <span>{t.roles.recycler}</span>
          </button>

          <button
            onClick={() => setCurrentRole('ministry')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
              currentRole === 'ministry'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Landmark className="w-4 h-4 text-cyan-300" />
            <span>{t.roles.ministry}</span>
          </button>

          <button
            onClick={() => setCurrentRole('pitch')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
              currentRole === 'pitch'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Presentation className="w-4 h-4 text-purple-300" />
            <span>{t.roles.pitch}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
