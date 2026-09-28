// Realistic e-waste categories aligned with JNARDDC & Ministry of Mines critical mineral targets
export const E_WASTE_CATEGORIES = [
  {
    id: 'pcb_motherboard',
    nameEn: 'Motherboards & PCBs',
    nameHi: 'मदरबोर्ड और सर्किट प्लेट (PCBs)',
    code: 'E-PCB-01',
    ratePerKg: 460,
    unit: 'kg',
    icon: 'Cpu',
    color: 'from-emerald-500 to-teal-700',
    minerals: ['Copper (16%)', 'Gold (250ppm)', 'Silver', 'Palladium'],
    mineralYieldPerKg: { copper: 0.16, goldMg: 250, silverMg: 1000 },
    hazardLevel: 'Medium',
    safeDisposalTipEn: 'Do not burn or acid-wash. Toxic dioxin risk.',
    safeDisposalTipHi: 'खुली आग या तेज़ाब में न जलाएं। जहरीले धुएं का खतरा।'
  },
  {
    id: 'li_battery',
    nameEn: 'Lithium-Ion Batteries',
    nameHi: 'लिथियम-आयन बैटरी (मोबाइल/लैपटॉप)',
    code: 'E-LIB-02',
    ratePerKg: 340,
    unit: 'kg',
    icon: 'BatteryCharging',
    color: 'from-blue-500 to-indigo-700',
    minerals: ['Lithium (7%)', 'Cobalt (14%)', 'Nickel (12%)'],
    mineralYieldPerKg: { lithium: 0.07, cobalt: 0.14, nickel: 0.12 },
    hazardLevel: 'High (Thermal Runaway)',
    safeDisposalTipEn: 'Store in dry sand bin. Never puncture or crush.',
    safeDisposalTipHi: 'सूखी रेत में रखें। छेद या चोट न पहुंचाएं।'
  },
  {
    id: 'copper_motor',
    nameEn: 'Copper Wire & Motors',
    nameHi: 'तांबा तार और मोटर वाइंडिंग',
    code: 'E-CU-03',
    ratePerKg: 690,
    unit: 'kg',
    icon: 'Zap',
    color: 'from-amber-500 to-orange-700',
    minerals: ['Pure Copper (92-98%)'],
    mineralYieldPerKg: { copper: 0.94 },
    hazardLevel: 'Low',
    safeDisposalTipEn: 'Strip mechanically. Do not burn PVC insulation.',
    safeDisposalTipHi: 'तार को आग लगाकर न छीलें। मशीन से छीलें।'
  },
  {
    id: 'aluminium_heatsink',
    nameEn: 'Aluminium Heat Sinks & Casings',
    nameHi: 'एल्युमिनियम हीट सिंक व बॉडी (JNARDDC)',
    code: 'E-AL-04',
    ratePerKg: 185,
    unit: 'kg',
    icon: 'Boxes',
    color: 'from-slate-400 to-zinc-600',
    minerals: ['Aluminium Alloy (95%)', 'Magnesium'],
    mineralYieldPerKg: { aluminium: 0.95 },
    hazardLevel: 'Low',
    safeDisposalTipEn: 'High scrap grade. 95% energy saved over bauxite mining.',
    safeDisposalTipHi: 'बॉक्साइट खनन के मुकाबले 95% बिजली की बचत।'
  },
  {
    id: 'smartphones_tablets',
    nameEn: 'End-of-Life Mobile Devices',
    nameHi: 'पुराने स्मार्टफोन व टैबलेट',
    code: 'E-DEV-05',
    ratePerKg: 520,
    unit: 'kg',
    icon: 'Smartphone',
    color: 'from-purple-500 to-pink-700',
    minerals: ['Rare Earth Magnets (Nd)', 'Lithium', 'Gold pins', 'Tantalum'],
    mineralYieldPerKg: { rareEarthG: 15, goldMg: 350, cobalt: 0.05 },
    hazardLevel: 'Medium',
    safeDisposalTipEn: 'Remove swollen batteries first.',
    safeDisposalTipHi: 'फूली हुई बैटरी को तुरंत अलग करें।'
  },
  {
    id: 'power_transformers',
    nameEn: 'SMPS & Power Adapters',
    nameHi: 'अडैप्टर, चार्जर और SMPS',
    code: 'E-PWR-06',
    ratePerKg: 140,
    unit: 'kg',
    icon: 'Power',
    color: 'from-cyan-500 to-blue-700',
    minerals: ['Silicon Steel', 'Ferrite Core', 'Copper'],
    mineralYieldPerKg: { copper: 0.18, aluminium: 0.08 },
    hazardLevel: 'Low',
    safeDisposalTipEn: 'Discharge big capacitors safely before dismantling.',
    safeDisposalTipHi: 'कैपेसिटर को डिस्चार्ज करके ही खोलें।'
  }
];

// Initial mock transactions linking informal collectors to formal recyclers
export const INITIAL_TRANSACTIONS = [
  {
    id: 'TXN-98421',
    collectorName: 'Ramu Kabadi (ID: KC-8821)',
    collectorPhone: '+91 98765 43210',
    recyclerName: 'EcoRecycle Green Infra Ltd. (CPCB Reg: R2-MH-2023)',
    category: 'Motherboards & PCBs',
    categoryId: 'pcb_motherboard',
    weightKg: 24.5,
    baseRate: 460,
    grossAmount: 11270,
    govtBonusPercent: 10,
    govtBonusAmount: 1127,
    netPayable: 12397,
    status: 'COMPLETED',
    timestamp: '2026-09-28 14:32',
    date: 'Today, 2:32 PM',
    paymentMode: 'UPI Instant (ramu.scrap@okhdfc)',
    cpcbForm6No: 'FORM6-CPCB-2026-09-98421',
    recoveredMinerals: {
      copperKg: 3.92,
      goldGrams: 6.12,
      silverGrams: 24.5
    },
    eprCreditsIssued: 24.5,
    qrHash: 'KCC-TXN-98421-VERIFIED'
  },
  {
    id: 'TXN-98422',
    collectorName: 'Shyam Sunder Aggregator (ID: KC-1044)',
    collectorPhone: '+91 98221 11234',
    recyclerName: 'JNARDDC Partner Urban Mining Facility',
    category: 'Lithium-Ion Batteries',
    categoryId: 'li_battery',
    weightKg: 42.0,
    baseRate: 340,
    grossAmount: 14280,
    govtBonusPercent: 10,
    govtBonusAmount: 1428,
    netPayable: 15708,
    status: 'IN_TRANSIT',
    timestamp: '2026-09-28 16:15',
    date: 'Today, 4:15 PM',
    paymentMode: 'Pending Weighment',
    cpcbForm6No: 'FORM6-PENDING-WEIGH',
    recoveredMinerals: {
      lithiumKg: 2.94,
      cobaltKg: 5.88,
      nickelKg: 5.04
    },
    eprCreditsIssued: 42.0,
    qrHash: 'KCC-TXN-98422-INTRANSIT'
  },
  {
    id: 'TXN-98423',
    collectorName: 'Mohammad Farooq (ID: KC-3390)',
    collectorPhone: '+91 97110 56789',
    recyclerName: 'EcoRecycle Green Infra Ltd.',
    category: 'Copper Wire & Motors',
    categoryId: 'copper_motor',
    weightKg: 18.2,
    baseRate: 690,
    grossAmount: 12558,
    govtBonusPercent: 10,
    govtBonusAmount: 1255.8,
    netPayable: 13813.8,
    status: 'PENDING_INSPECTION',
    timestamp: '2026-09-28 17:40',
    date: 'Today, 5:40 PM',
    paymentMode: 'Pending Recycler Approval',
    cpcbForm6No: 'FORM6-CPCB-2026-09-98423',
    recoveredMinerals: {
      copperKg: 17.1
    },
    eprCreditsIssued: 18.2,
    qrHash: 'KCC-TXN-98423-WAITING'
  },
  {
    id: 'TXN-98419',
    collectorName: 'Lakshmi Scrap Kendra (ID: KC-5541)',
    collectorPhone: '+91 94500 89123',
    recyclerName: 'Bharat Critical Metals Refiners',
    category: 'Aluminium Heat Sinks & Casings',
    categoryId: 'aluminium_heatsink',
    weightKg: 85.0,
    baseRate: 185,
    grossAmount: 15725,
    govtBonusPercent: 10,
    govtBonusAmount: 1572.5,
    netPayable: 17297.5,
    status: 'COMPLETED',
    timestamp: '2026-09-27 11:20',
    date: 'Yesterday, 11:20 AM',
    paymentMode: 'Aadhaar DBT Payout',
    cpcbForm6No: 'FORM6-CPCB-2026-09-98419',
    recoveredMinerals: {
      aluminiumKg: 80.75
    },
    eprCreditsIssued: 85.0,
    qrHash: 'KCC-TXN-98419-VERIFIED'
  }
];

// District and State wise data for Ministry of Mines & JNARDDC Heatmap
export const REGIONAL_DATA = [
  { state: 'Maharashtra', city: 'Nagpur (JNARDDC Hub)', registeredKabadiwalas: 1420, eWasteMT: 184.2, formalizationRate: '78%' },
  { state: 'Maharashtra', city: 'Mumbai MMR', registeredKabadiwalas: 4890, eWasteMT: 612.5, formalizationRate: '64%' },
  { state: 'Delhi NCR', city: 'Seelampur & Mayapuri Cluster', registeredKabadiwalas: 6240, eWasteMT: 890.1, formalizationRate: '59%' },
  { state: 'Karnataka', city: 'Bengaluru Peenya & Electronics City', registeredKabadiwalas: 3810, eWasteMT: 540.8, formalizationRate: '82%' },
  { state: 'Tamil Nadu', city: 'Chennai Ambattur', registeredKabadiwalas: 2950, eWasteMT: 395.4, formalizationRate: '71%' },
  { state: 'Telangana', city: 'Hyderabad Kattedan', registeredKabadiwalas: 2410, eWasteMT: 320.0, formalizationRate: '74%' },
  { state: 'Gujarat', city: 'Ahmedabad & Alang Hub', registeredKabadiwalas: 3120, eWasteMT: 440.6, formalizationRate: '68%' }
];
