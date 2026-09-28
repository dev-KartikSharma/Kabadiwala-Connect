// Bilingual translations (English and Hindi) tailored for low-literacy informal collectors
export const TRANSLATIONS = {
  en: {
    appTitle: 'Kabadiwala Connect',
    subtitle: 'Bringing Informal Waste-Pickers into the Formal Recycling Chain',
    govInitiative: 'Ministry of Mines & JNARDDC Initiative | SIH 26229',
    roles: {
      collector: 'Kabadiwala Mobile',
      recycler: 'Recycler Hub',
      ministry: 'Ministry & EPR Monitor',
      pitch: 'Presentation Deck'
    },
    collector: {
      greeting: 'Welcome, Ramu Kabadi (ID: KC-8821)',
      tagline: 'Get fair government rates & direct bank cash for your electronic scrap.',
      todayRates: "Today's Verified Minimum Scrap Prices (MSP)",
      rateNotice: 'Rates verified by Ministry of Mines / JNARDDC as per E-Waste Rules 2022',
      sellButton: 'Sell / Log E-Waste Lot',
      quickSell: 'Direct Instant Sale',
      passbook: 'My Passbook & Receipts',
      offlineActive: 'Offline Mode: Transactions will queue and sync when connected',
      onlineActive: 'Online: Live connected with JNARDDC & Local Recyclers',
      bonusTag: '+10% Govt Green Bonus on Formal Disposal',
      weightPrompt: 'Enter approx weight in Kilograms (kg):',
      selectCategory: 'Choose Material Type:',
      uploadPhoto: 'Snap / Upload Waste Photo:',
      photoPlaceholder: 'Camera / Photo captured',
      estimatedValue: 'Estimated Total Value:',
      govtIncentive: 'Govt Formalization Bonus (10%):',
      totalPayout: 'Net Amount Payable to You:',
      confirmAndSubmit: 'Confirm & Send to Recycler',
      submitting: 'Processing & Generating Receipt...',
      successMsg: 'Scrap lot logged successfully! QR receipt generated.',
      voiceAssist: 'Listen to rates & safety tips',
      speaking: 'Speaking...',
      safetyAlert: 'Safe Handling Alert:',
      recentTransactions: 'Recent Formal Handover History',
      status: {
        COMPLETED: 'Payment Received & Verified',
        IN_TRANSIT: 'In-Transit to Recycler Weighbridge',
        PENDING_INSPECTION: 'Awaiting Recycler Inspection'
      }
    },
    recycler: {
      hubTitle: 'Authorized E-Waste Aggregator & Recycler Terminal',
      subtext: 'CPCB & State Pollution Control Board Registered Facility #R2-MH-2023',
      pendingQueue: 'Incoming Lots from Informal Collectors',
      weighbridgeTitle: 'Digital Weighbridge & Quality Grading Station',
      selectLotPrompt: 'Select a lot from the queue to inspect and verify',
      formalizeButton: 'Approve, Weigh & Dispatch UPI Payment',
      rejectButton: 'Flag / Reject Lot',
      cpcbManifestTitle: 'CPCB Form-6 Manifest Generated Automatically',
      payoutSuccess: 'UPI Payout dispatched successfully with instant DBT voucher!',
      stats: {
        totalReceived: 'Total E-Waste Received',
        payoutsDisbursed: 'Direct Payouts Disbursed',
        eprCreditsGenerated: 'EPR Credits Minted'
      }
    },
    ministry: {
      dashboardTitle: 'National E-Waste Formalization & Critical Minerals Oversight Portal',
      organization: 'Ministry of Mines (MoM) & JNARDDC - Clean & Green Technology',
      formalizedTonnage: 'Total E-Waste Formalized',
      informalWorkersOnboarded: 'Informal Waste-Pickers Formalized',
      criticalMineralsYield: 'Critical Minerals Recovered & Diverted from Backyard Dumping',
      mineralSubtitle: 'High-purity secondary urban mining yields calculated via JNARDDC extraction standards',
      regionalDistribution: 'Regional Formalization Hubs & District Density',
      auditLedger: 'CPCB Form-6 & EPR Credit Audit Trail (Anti-Double Counting Ledger)'
    }
  },
  hi: {
    appTitle: 'कबाड़ीवाला कनेक्ट',
    subtitle: 'कबाड़ी भाइयों और कचरा बीनने वालों को सीधे सरकारी रिसाइक्लिंग से जोड़ना',
    govInitiative: 'खान मंत्रालय (Ministry of Mines) एवं JNARDDC की पहल | SIH 26229',
    roles: {
      collector: '📱 कबाड़ीवाला ऐप',
      recycler: '🏭 रिसाइक्लर हब',
      ministry: '🏛️ खान मंत्रालय EPR पोर्टल',
      pitch: '📊 प्रजेंटेशन गाइड'
    },
    collector: {
      greeting: 'नमस्ते, रामू कबाड़ी (ID: KC-8821)',
      tagline: 'ई-कचरे का सही सरकारी भाव पाएं और सीधा बैंक/UPI में तुरंत भुगतान पाएं।',
      todayRates: 'आज के सत्यापित सरकारी न्यूनतम भाव (MSP)',
      rateNotice: 'खान मंत्रालय और JNARDDC द्वारा ई-कचरा नियम 2022 के तहत मान्य भाव',
      sellButton: 'ई-कचरा बेचें / नया लॉट जोड़ें',
      quickSell: 'तुरंत बिक्री अनुरोध',
      passbook: 'मेरी पासबुक और रसीदें',
      offlineActive: 'ऑफ़लाइन मोड चालू: इंटरनेट न होने पर भी डाटा सुरक्षित रहेगा, नेटवर्क आने पर सिंक होगा',
      onlineActive: 'ऑनलाइन: रिसाइक्लर और JNARDDC से जुड़ा हुआ',
      bonusTag: '+10% सरकारी पर्यावरण बोनस (मुफ्त)',
      weightPrompt: 'अनुमानित वजन (किलो / kg) दर्ज करें:',
      selectCategory: 'सामान का प्रकार चुनें:',
      uploadPhoto: 'कचरे की फोटो लें / अपलोड करें:',
      photoPlaceholder: 'फोटो खींची गई',
      estimatedValue: 'अनुमानित मूल कीमत:',
      govtIncentive: 'सरकारी प्रोत्साहन बोनस (10%):',
      totalPayout: 'आपको मिलने वाली कुल राशि:',
      confirmAndSubmit: 'पुष्टि करें और रिसाइक्लर को भेजें',
      submitting: 'रसीद तैयार हो रही है...',
      successMsg: 'बधाई! आपका कचरा लॉट सफलतापूर्वक दर्ज हो गया। QR रसीद तैयार है।',
      voiceAssist: 'भाव और सुरक्षा नियम बोलकर सुनें',
      speaking: 'आवाज चल रही है...',
      safetyAlert: 'सुरक्षा नियम:',
      recentTransactions: 'मेरी पुरानी बिक्री व रसीदें',
      status: {
        COMPLETED: 'भुगतान प्राप्त व सत्यापित',
        IN_TRANSIT: 'रिसाइक्लर के धर्मकांटे पर जा रहा है',
        PENDING_INSPECTION: 'रिसाइक्लर की जांच का इंतजार'
      }
    },
    recycler: {
      hubTitle: 'अधिकृत ई-कचरा संग्रह व रिसाइक्लिंग टर्मिनल',
      subtext: 'केंद्रीय प्रदूषण नियंत्रण बोर्ड (CPCB) पंजीकृत केंद्र #R2-MH-2023',
      pendingQueue: 'कबाड़ी भाइयों से आए नए ई-कचरे के लॉट',
      weighbridgeTitle: 'डिजिटल धर्मकांटा (Weighbridge) व ग्रेडिंग',
      selectLotPrompt: 'सत्यापन के लिए सूची में से किसी एक लॉट पर क्लिक करें',
      formalizeButton: 'वजन सत्यापित करें और तुरंत UPI भुगतान भेजें',
      rejectButton: 'अस्वीकार करें',
      cpcbManifestTitle: 'CPCB फॉर्म-6 डिजिटल चालान स्वचालित रूप से तैयार',
      payoutSuccess: 'UPI द्वारा कबाड़ी भाई को तुरंत भुगतान सफल!',
      stats: {
        totalReceived: 'कुल प्राप्त ई-कचरा',
        payoutsDisbursed: 'कुल वितरित भुगतान',
        eprCreditsGenerated: 'जारी EPR क्रेडिट्स'
      }
    },
    ministry: {
      dashboardTitle: 'राष्ट्रीय ई-कचरा औपचारिकीकरण व महत्वपूर्ण खनिज निगरानी पोर्टल',
      organization: 'खान मंत्रालय (Ministry of Mines) व JNARDDC - स्वच्छ एवं हरित तकनीक',
      formalizedTonnage: 'औपचारिक तंत्र में आया कुल ई-कचरा',
      informalWorkersOnboarded: 'पंजीकृत कबाड़ी व कचरा बीनने वाले',
      criticalMineralsYield: 'बरामद किए गए महत्वपूर्ण खनिज (Critical Minerals)',
      mineralSubtitle: 'JNARDDC मानकों पर आधारित लिथियम, कोबाल्ट, तांबा और दुर्लभ धातुओं की बरामदगी',
      regionalDistribution: 'राज्यवार और जिलावार क्लस्टर घनत्व',
      auditLedger: 'CPCB फॉर्म-6 एवं EPR क्रेडिट डिजिटल लेजर (पारदर्शी ऑडिट)'
    }
  }
};

// Text-to-speech helper for low-literacy collectors
export const speakText = (text, lang = 'hi-IN') => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel(); // Stop any active speech
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
  }
};
