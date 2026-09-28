import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CollectorView from './components/CollectorView';
import RecyclerHub from './components/RecyclerHub';
import MinistryDashboard from './components/MinistryDashboard';
import PresentationGuide from './components/PresentationGuide';
import ReceiptModal from './components/ReceiptModal';
import { INITIAL_TRANSACTIONS } from './data/mockData';

export default function App() {
  const [currentRole, setCurrentRole] = useState('collector');
  const [language, setLanguage] = useState('en');
  const [isOffline, setIsOffline] = useState(false);
  const [transactions, setTransactions] = useState(() => {
    try {
      const saved = localStorage.getItem('kcc_transactions');
      return saved ? JSON.parse(saved) : INITIAL_TRANSACTIONS;
    } catch (e) {
      return INITIAL_TRANSACTIONS;
    }
  });
  const [offlineQueue, setOfflineQueue] = useState([]);
  const [activeReceiptModal, setActiveReceiptModal] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Sync transactions to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('kcc_transactions', JSON.stringify(transactions));
    } catch (e) {
      console.error(e);
    }
  }, [transactions]);

  // Handle re-connection when toggling from offline to online
  useEffect(() => {
    if (!isOffline && offlineQueue.length > 0) {
      // Auto-flush queued offline items
      const syncedItems = offlineQueue.map(item => ({
        ...item,
        status: 'PENDING_INSPECTION',
        date: 'Just now (Synced)'
      }));

      setTransactions(prev => [...syncedItems, ...prev]);
      setOfflineQueue([]);
      setToastMessage(`✓ Restored network connection! ${syncedItems.length} offline transactions synced to CPCB hub.`);
      setTimeout(() => setToastMessage(null), 5000);
    }
  }, [isOffline, offlineQueue]);

  const handleAddNewLot = (newLot) => {
    if (isOffline) {
      setOfflineQueue(prev => [newLot, ...prev]);
      setToastMessage('⚠️ Stored locally in offline queue. Will auto-sync when network is available.');
      setTimeout(() => setToastMessage(null), 4000);
    } else {
      setTransactions(prev => [newLot, ...prev]);
      setToastMessage('✓ E-Waste lot logged and broadcast to local authorized recyclers!');
      setTimeout(() => setToastMessage(null), 4000);
    }
  };

  const handleApproveLot = (lotId, calibratedWeight) => {
    setTransactions(prev => prev.map(item => {
      if (item.id === lotId) {
        const finalWeight = calibratedWeight || item.weightKg;
        const gross = finalWeight * item.baseRate;
        const bonus = gross * 0.10;
        const net = gross + bonus;

        return {
          ...item,
          weightKg: finalWeight,
          grossAmount: Math.round(gross),
          govtBonusAmount: Math.round(bonus),
          netPayable: Math.round(net),
          status: 'COMPLETED',
          paymentMode: 'Instant UPI (Settled)',
          date: 'Just now (Verified)',
          eprCreditsIssued: finalWeight
        };
      }
      return item;
    }));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-slate-950">
      {/* Sticky Main Header */}
      <Header
        currentRole={currentRole}
        setCurrentRole={setCurrentRole}
        language={language}
        setLanguage={setLanguage}
        isOffline={isOffline}
        setIsOffline={setIsOffline}
        offlineQueueCount={offlineQueue.length}
      />

      {/* Global Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-500 text-slate-950 font-bold px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-emerald-300 animate-in slide-in-from-bottom duration-300 text-xs">
          <span>{toastMessage}</span>
          <button 
            onClick={() => setToastMessage(null)}
            className="text-slate-950 hover:opacity-75 font-black text-sm"
          >
            ✕
          </button>
        </div>
      )}

      {/* Role-Specific Views */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 pt-6">
        {currentRole === 'collector' && (
          <CollectorView
            transactions={[...offlineQueue, ...transactions]}
            onAddNewLot={handleAddNewLot}
            language={language}
            isOffline={isOffline}
            onViewReceipt={(tx) => setActiveReceiptModal(tx)}
          />
        )}

        {currentRole === 'recycler' && (
          <RecyclerHub
            transactions={transactions}
            onApproveLot={handleApproveLot}
            language={language}
            onViewReceipt={(tx) => setActiveReceiptModal(tx)}
          />
        )}

        {currentRole === 'ministry' && (
          <MinistryDashboard
            transactions={transactions}
            language={language}
            onViewReceipt={(tx) => setActiveReceiptModal(tx)}
          />
        )}

        {currentRole === 'pitch' && (
          <PresentationGuide
            onSwitchRole={(role) => setCurrentRole(role)}
          />
        )}
      </main>

      {/* CPCB Form-6 Digital Handover Modal */}
      {activeReceiptModal && (
        <ReceiptModal
          transaction={activeReceiptModal}
          onClose={() => setActiveReceiptModal(null)}
          language={language}
        />
      )}

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/80 py-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>
            SIH Problem ID: 26229 • Ministry of Mines (MoM) & JNARDDC
          </span>
          <span className="font-mono text-[11px] text-slate-400">
            Kabadiwala Connect • Clean & Green Technology Prototype
          </span>
        </div>
      </footer>
    </div>
  );
}
