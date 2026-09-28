import React, { useState } from 'react';
import { 
  Presentation, 
  Lightbulb, 
  Target, 
  Zap, 
  Cpu, 
  ShieldCheck, 
  HelpCircle, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Smartphone,
  Factory,
  Landmark,
  Layers
} from 'lucide-react';

export default function PresentationGuide({ onSwitchRole }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "1. The Ground Reality: India's E-Waste Paradox",
      badge: "Problem Statement SIH 26229",
      content: (
        <div className="space-y-4 text-sm text-slate-300">
          <p className="leading-relaxed">
            Over <strong className="text-white">90% of India's end-of-life electronics</strong> are collected by informal scrap dealers (<em className="text-emerald-400">kabadiwalas</em>) and waste-pickers because of their unmatched last-mile reach and low collection cost.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            <div className="bg-rose-950/30 border border-rose-800/40 p-3.5 rounded-2xl">
              <span className="font-bold text-rose-300 block mb-1">🚨 Severe Health & Hazard Risks</span>
              <p className="text-xs text-rose-200/80">
                Backyard dismantling, open-air cable burning, and cyanide/acid leaching release toxic dioxins, lead, and mercury directly into local slums and groundwater.
              </p>
            </div>
            <div className="bg-amber-950/30 border border-amber-800/40 p-3.5 rounded-2xl">
              <span className="font-bold text-amber-300 block mb-1">📉 Catastrophic Critical Mineral Loss</span>
              <p className="text-xs text-amber-200/80">
                India imports over 90% of its Lithium, Cobalt, and Rare Earth Elements. Inefficient crude informal processing recovers less than 20% of these metals, discarding the rest.
              </p>
            </div>
          </div>
          <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800 text-xs text-slate-400">
            <strong className="text-white">Why have past apps failed?</strong> Most apps cater to urban households, ignoring the informal kabadiwala who has low literacy, intermittent internet, and requires instant cash in hand.
          </div>
        </div>
      )
    },
    {
      title: "2. The Innovation: Kabadiwala Connect Solution",
      badge: "Ministry of Mines & JNARDDC Architecture",
      content: (
        <div className="space-y-4 text-sm text-slate-300">
          <p className="leading-relaxed">
            <strong className="text-emerald-400">Kabadiwala Connect</strong> does not attempt to replace informal waste-pickers—it <strong className="text-white">empowers and formalizes them</strong> through economic incentives and low-barrier digital tools.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
            <div className="bg-slate-950/70 border border-slate-800 p-3.5 rounded-2xl space-y-1.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">1</div>
              <h4 className="font-bold text-white text-xs">Vernacular & Voice-First</h4>
              <p className="text-[11px] text-slate-400">
                High-contrast visual cards, Hindi/vernacular language support, and text-to-speech audio guidance tailored for low-literacy users.
              </p>
            </div>
            <div className="bg-slate-950/70 border border-slate-800 p-3.5 rounded-2xl space-y-1.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">2</div>
              <h4 className="font-bold text-white text-xs">MSP + 10% Green Bonus</h4>
              <p className="text-[11px] text-slate-400">
                Guaranteed Fair Scrap Minimum Support Price (MSP) + 10% direct government green bonus paid via instant UPI/DBT upon formal delivery.
              </p>
            </div>
            <div className="bg-slate-950/70 border border-slate-800 p-3.5 rounded-2xl space-y-1.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold">3</div>
              <h4 className="font-bold text-white text-xs">Offline-Tolerant Engine</h4>
              <p className="text-[11px] text-slate-400">
                Local storage queue architecture allows recording collections deep in scrap yards without network, auto-syncing upon reconnection.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "3. Three-Pillar Stakeholder Ecosystem",
      badge: "Full Value Chain",
      content: (
        <div className="space-y-4 text-sm text-slate-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-emerald-950/20 border border-emerald-800/40 rounded-2xl p-4 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <Smartphone className="w-4 h-4" />
                <span>1. Kabadiwala App</span>
              </div>
              <p className="text-xs text-slate-400">
                Fair market rates, 1-tap lot logging, offline sync, voice assistance, and digital passbook receipts.
              </p>
              <button
                onClick={() => onSwitchRole('collector')}
                className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-semibold pt-1"
              >
                <span>Try Collector App</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-amber-950/20 border border-amber-800/40 rounded-2xl p-4 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <Factory className="w-4 h-4" />
                <span>2. Recycler Hub</span>
              </div>
              <p className="text-xs text-slate-400">
                Digital weighbridge integration, quality grading, instant UPI payout dispatch, and automatic CPCB Form-6 manifest creation.
              </p>
              <button
                onClick={() => onSwitchRole('recycler')}
                className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1 font-semibold pt-1"
              >
                <span>Try Recycler Hub</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-cyan-950/20 border border-cyan-800/40 rounded-2xl p-4 space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                <Landmark className="w-4 h-4" />
                <span>3. Ministry & JNARDDC</span>
              </div>
              <p className="text-xs text-slate-400">
                Secondary urban mining oversight, Lithium/Cobalt yield metrics, GIS cluster maps, and anti-double counting EPR audit ledger.
              </p>
              <button
                onClick={() => onSwitchRole('ministry')}
                className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold pt-1"
              >
                <span>Try Ministry Dashboard</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "4. Demo Script: What to Show the Evaluators Tomorrow",
      badge: "2-Minute Winning Demo Flow",
      content: (
        <div className="space-y-3 text-xs text-slate-300">
          <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800 space-y-1">
            <span className="font-bold text-emerald-400 block text-xs">Step 1: The Collector Perspective (30 seconds)</span>
            <p className="text-slate-400">
              Open the <strong>Kabadiwala Mobile</strong> tab. Switch to <strong>हिंदी</strong>. Click the <strong>speaker icon</strong> on any material card to show voice synthesis reading rates aloud. Point out the guaranteed MSP rates and 10% government green bonus.
            </p>
          </div>
          <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800 space-y-1">
            <span className="font-bold text-amber-400 block text-xs">Step 2: Resilient Offline Logging (30 seconds)</span>
            <p className="text-slate-400">
              Click the <strong>Simulate Offline</strong> button in the top bar. Click "Sell / Log E-Waste", choose Lithium-Ion Batteries, select 20kg, and submit. Show that the transaction is safely queued offline without dropping data. Re-enable online to demonstrate seamless sync!
            </p>
          </div>
          <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800 space-y-1">
            <span className="font-bold text-cyan-400 block text-xs">Step 3: Recycler Verification & Instant UPI (30 seconds)</span>
            <p className="text-slate-400">
              Switch to the <strong>Recycler Hub</strong>. Select the incoming lot, adjust the digital weighbridge slider, and click <strong>Approve & Pay</strong>. The system fires confetti and issues an instant UPI settlement and compliant CPCB Form-6 manifest with QR verification.
            </p>
          </div>
          <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800 space-y-1">
            <span className="font-bold text-purple-400 block text-xs">Step 4: Ministry of Mines & JNARDDC Impact (30 seconds)</span>
            <p className="text-slate-400">
              Switch to the <strong>Ministry & EPR Monitor</strong> tab. Show the real-time recovery metrics for <strong>Lithium, Cobalt, Copper, and Gold</strong>, the cluster formalization map, and the transparent audit ledger.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "5. Anticipated Questions from Professors / Judges",
      badge: "Viva & Defense Preparation",
      content: (
        <div className="space-y-3 text-xs text-slate-300">
          <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
            <span className="font-bold text-white block mb-0.5">Q: Why will an informal kabadiwala adopt this app instead of cash?</span>
            <p className="text-slate-400">
              <strong className="text-emerald-400">A: Economic incentive alignment.</strong> We offer a 10% direct government green formalization bonus paid directly to their UPI/Aadhaar DBT on top of transparent MSP rates, making the formal channel yield more profit than the informal grey market.
            </p>
          </div>
          <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
            <span className="font-bold text-white block mb-0.5">Q: How do you handle low internet access in remote scrap markets?</span>
            <p className="text-slate-400">
              <strong className="text-emerald-400">A: Offline-first architecture.</strong> Transactions and price logs are cached locally using IndexedDB/LocalStorage and batch-synced once within cellular or Wi-Fi range.
            </p>
          </div>
          <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
            <span className="font-bold text-white block mb-0.5">Q: Why is JNARDDC and the Ministry of Mines specifically interested?</span>
            <p className="text-slate-400">
              <strong className="text-emerald-400">A: Critical Minerals Mission.</strong> India's clean energy transition requires massive Lithium, Cobalt, Nickel, and Copper. Urban mining through formalized e-waste collection provides a domestic, circular supply chain that reduces import dependence.
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      {/* Slide Navigation Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">
                Mini Project Presentation Deck
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-xs text-slate-400 font-mono">Slide {activeSlide + 1} of {slides.length}</span>
            </div>
            <h2 className="text-2xl font-black text-white tracking-tight mt-1">
              {slides[activeSlide].title}
            </h2>
          </div>

          <span className="bg-purple-950/60 text-purple-300 border border-purple-800/80 px-3 py-1 rounded-full text-xs font-mono">
            {slides[activeSlide].badge}
          </span>
        </div>

        {/* Slide Content */}
        <div className="py-2">
          {slides[activeSlide].content}
        </div>

        {/* Slide Controls */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
          <button
            onClick={() => setActiveSlide(Math.max(0, activeSlide - 1))}
            disabled={activeSlide === 0}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-semibold text-slate-200 transition-colors"
          >
            ← Previous Slide
          </button>

          <div className="flex gap-1.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  activeSlide === idx 
                    ? 'w-7 bg-purple-500' 
                    : 'bg-slate-700 hover:bg-slate-600'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setActiveSlide(Math.min(slides.length - 1, activeSlide + 1))}
            disabled={activeSlide === slides.length - 1}
            className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-semibold text-white transition-colors shadow-md shadow-purple-600/30"
          >
            Next Slide →
          </button>
        </div>
      </div>
    </div>
  );
}
