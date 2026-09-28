# ♻️ Kabadiwala Connect (कबाड़ीवाला कनेक्ट)
### *Bringing the Informal Collector into the Formal Recycling Chain*

[![Smart India Hackathon](https://img.shields.io/badge/SIH-Problem%20ID%3A%2026229-emerald?style=for-the-badge)](https://www.sih.gov.in/)
[![Ministry of Mines](https://img.shields.io/badge/Ministry%20of%20Mines-JNARDDC-blue?style=for-the-badge)](https://mines.gov.in/)
[![Theme](https://img.shields.io/badge/Theme-Clean%20%26%20Green%20Technology-teal?style=for-the-badge)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

---

## 📌 Problem Overview (SIH 26229)
* **Organization:** Ministry of Mines (MoM)
* **Department:** Jawaharlal Nehru Aluminium Research Development and Design Centre (JNARDDC)
* **Category:** Software | Clean & Green Technology

Over **90% of India's end-of-life electronics** are collected through the informal sector (scrap dealers, waste-pickers, and aggregators) due to their extensive last-mile reach. However, backyard processing (such as open-air cable burning or acid leaching) results in severe environmental toxins and catastrophic loss of **Critical Minerals** like **Lithium (Li), Cobalt (Co), Copper (Cu), and Rare Earths (Nd)**.

**Kabadiwala Connect** bridges informal waste-pickers with formal CPCB-registered recyclers and the Ministry of Mines through transparent pricing, low-literacy vernacular tools, offline sync, and economic formalization incentives.

---

## 🌟 Key Platform Modules

### 1. 📱 Informal Collector (Kabadiwala) Mobile App
* **Low-Literacy & Vernacular:** Instant toggle between English and **हिंदी** (*कबाड़ीवाला कनेक्ट*).
* **Text-to-Speech Voice Assistant:** Speech synthesis reads current scrap MSP rates and hazardous safety advice aloud.
* **Transparent MSP Price Board:** Real-time verified market prices for Motherboards, Li-ion Batteries, Copper Motors, Aluminium Casings, and EOL Mobile Devices.
* **10% Government Green Bonus:** Ministry of Mines formalization incentive calculated and disbursed directly to UPI/Aadhaar DBT.
* **Offline-First Resilience:** Local cache queues scrap logging in field dead-zones and auto-syncs when cellular connectivity returns.
* **Digital Passbook:** Automated generation of CPCB Form-6 digital handover receipts with tamper-proof verification tokens.

### 2. 🏭 Authorized Recycler & Aggregator Hub
* **Incoming Lot Queue:** Live stream of pending scrap batches logged by local informal collectors.
* **Digital Weighbridge & Calibration:** Interactive load-cell inspection with purity and contamination grading (Grade A, Grade B, Debris).
* **Instant UPI Payout Simulator:** Dispatches instant direct-to-bank settlements with celebration animations.
* **Automated CPCB Compliance:** Issues official Form-6 manifests compliant with India's *E-Waste (Management) Rules, 2022*.

### 3. 🏛️ Ministry of Mines & JNARDDC Oversight Portal
* **Critical Minerals Yield Tracking:** Live secondary extraction models calculating recovered secondary **Lithium (Li), Cobalt (Co), Copper (Cu), Gold (Au), Aluminium (Al), and Neodymium (Nd)**.
* **Environmental Safeguards:** Quantifies toxic lead, cyanide, and dioxin emissions averted + 94.8% CO₂ reduction vs virgin mining.
* **Regional Cluster GIS Heatmap:** Analyzes formalization density across hubs including Nagpur (JNARDDC), Seelampur (Delhi), Peenya (Bengaluru), and Mumbai MMR.
* **CPCB EPR Audit Ledger:** Verifiable ledger preventing double-counting of Extended Producer Responsibility credits.

### 4. 📊 Built-In Presentation & Viva Defense Guide
* 5 interactive presentation slides built right into the app.
* 2-minute live demo script for evaluators and hackathon judges.
* Anticipated tough viva questions and answers (RBAC security, why kabadiwalas will adopt it, offline sync architecture).

---

## 🚀 Quick Start Guide

### Prerequisites
* [Node.js](https://nodejs.org/) (v18 or higher)
* [Git](https://git-scm.com/)

### Installation & Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/dev-KartikSharma/Kabadiwala-Connect.git
   cd Kabadiwala-Connect
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in your browser:**
   ```
   http://localhost:5173
   ```
   *(Or test on your mobile device via your local network IP!)*

---

## 🛠️ Technology Stack
* **Frontend:** React 19, Vite
* **Styling:** Tailwind CSS v4
* **Icons:** Lucide React
* **Speech Synthesis:** Web Speech API (`SpeechSynthesisUtterance`)
* **State & Storage:** LocalStorage + Offline Queue Sync Pattern
* **Visual Effects:** Canvas Confetti

---

## 👨‍💻 Author & Attribution
* **Developed for:** Smart India Hackathon (SIH 2026) | Problem ID: 26229
* **Sponsor:** Ministry of Mines & JNARDDC
* **Repository:** [dev-KartikSharma/Kabadiwala-Connect](https://github.com/dev-KartikSharma/Kabadiwala-Connect)
