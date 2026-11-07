export const learningData = {
  currentGoals: [
    {
      goal: "Mastering Core Data Structures & Algorithms",
      domain: "Computer Science Core",
      status: "In Progress",
      progress: "70%",
      detail: "Strengthening command over binary trees, graph traversals (BFS, DFS), sorting algorithms, and time complexity analysis for technical interviews."
    },
    {
      goal: "Supervised Machine Learning & Model Evaluation",
      domain: "Artificial Intelligence & Data Science",
      status: "Active Study",
      progress: "65%",
      detail: "Studying linear regression, decision trees, cross-validation metrics, and preparing to build scikit-learn models integrated into web frontends."
    },
    {
      goal: "Relational Schema Normalization & Query Tuning",
      domain: "Database Systems",
      status: "Coursework Focus",
      progress: "80%",
      detail: "Mastering 1NF through BCNF normalization, entity-relationship modeling, and writing efficient SQL JOIN and indexing operations."
    }
  ],

  entries: [
    {
      id: "journal-01",
      title: "Eliminating JavaScript Floating-Point Artifacts in Unit Converter",
      date: "September 2024",
      category: "JavaScript & Mathematical Logic",
      badge: "Precision Bug Dissection",
      description: "While building the Unit Converter application, basic conversions like adding fractional meters or Celsius offsets produced strange decimals like 0.30000000000000004 due to IEEE 754 representation.",
      problemEncountered: "Direct arithmetic on floating point variables led to inaccurate figures displayed to students who needed exact conversion results for engineering homework.",
      whatILearned: "Implemented a normalization pipeline: convert input values to high-precision integers/cents where feasible, apply base SI conversion multipliers, and format output via `Number.EPSILON` rounding with `.toPrecision()` bounds.",
      whatIWouldImprove: "In larger scientific applications, I will integrate libraries like `decimal.js` or `bignumber.js` to handle arbitrary precision mathematics seamlessly.",
      evidence: "Fixed conversion formula in repository: `github.com/luckyrajasab-sys/Unit-Convertor`",
      evidenceUrl: "https://github.com/luckyrajasab-sys/Unit-Convertor"
    },
    {
      id: "journal-02",
      title: "Graceful Fallbacks for Geolocation Permission Denials in Aether Weather",
      date: "October 2024",
      category: "Browser APIs & UX Resilience",
      badge: "Resilient Architecture",
      description: "Initial testing of Aether Weather on mobile browsers revealed that when users rejected location permission, the app showed a blank white card with unhandled promise rejection.",
      problemEncountered: "Browser Geolocation API errors (PERMISSION_DENIED, POSITION_UNAVAILABLE, TIMEOUT) weren't captured gracefully, leaving users confused without a way to search manually.",
      whatILearned: "Refactored the initialization routine: wrapped `navigator.geolocation.getCurrentPosition` in a guarded promise with a 5-second timeout. If denied, it defaults gracefully to Chennai coordinates while placing keyboard focus on the search input.",
      whatIWouldImprove: "Save the user's last manually searched city into `localStorage` so repeat visits always load their preferred location even without GPS enabled.",
      evidence: "Verified code in repo: `github.com/luckyrajasab-sys/Aether-Weather-`",
      evidenceUrl: "https://github.com/luckyrajasab-sys/Aether-Weather-"
    },
    {
      id: "journal-03",
      title: "Cross-Platform vCard Formatting for Universal QR Scanning in Connect",
      date: "September 2024",
      category: "Data Formatting & Protocols",
      badge: "Standards Implementation",
      description: "When creating QR codes to share contact dossiers in Connect, scanned QR codes on some Android devices opened plain text strings instead of saving to the phone's address book.",
      problemEncountered: "Using arbitrary JSON strings inside QR codes made them unreadable by native camera app contact parsers.",
      whatILearned: "Studied the standard vCard 3.0 specification (`BEGIN:VCARD\\nVERSION:3.0\\nFN:...\\nTEL:...\\nEMAIL:...\\nEND:VCARD`). Encoding contacts in official vCard format enabled single-tap import on both iOS and Android cameras.",
      whatIWouldImprove: "Add direct vCard `.vcf` file download buttons alongside the QR display for desktop browser users.",
      evidence: "vCard QR generator component in repo: `github.com/luckyrajasab-sys/Connect`",
      evidenceUrl: "https://github.com/luckyrajasab-sys/Connect"
    },
    {
      id: "journal-04",
      title: "Managing Cart State Synchronization & Edge Cases in BiteX 3.0",
      date: "October 2024",
      category: "Frontend State Management",
      badge: "E-Commerce State",
      description: "During the development of BiteX 3.0, quickly clicking 'Add to Cart' across different menu categories caused duplicate item rows with desynchronized quantity counts.",
      problemEncountered: "Directly mutating arrays in component state caused shallow comparison failures and incorrect subtotal sums.",
      whatILearned: "Adopted immutable reducer-style update patterns using `prevCart.map(...)` and `findIndex`. Extracted cart calculations into pure utility functions and synchronized state with `localStorage` for reload persistence.",
      whatIWouldImprove: "Use React Context or Zustand for global store management in larger applications to avoid prop drilling across nested menu components.",
      evidence: "Cart management functions in repo: `github.com/luckyrajasab-sys/BiteX-3.0`",
      evidenceUrl: "https://github.com/luckyrajasab-sys/BiteX-3.0"
    }
  ],

  futureObjectives: [
    {
      title: "Targeting Summer 2025 AI / Software Engineering Internship",
      timeline: "Target: Q1 – Q2 2025",
      actionItems: "Consistent daily problem solving in DSA, contributing to open-source developer tooling, and building full-stack applications with AI API integrations."
    },
    {
      title: "Deploying End-to-End Scikit-Learn Predictive Model on the Web",
      timeline: "Target: Q2 2025",
      actionItems: "Train a real-estate price prediction model on Indian housing datasets and deploy as a live REST inference API integrated into LOKHA."
    }
  ]
};
