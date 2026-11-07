export const projectCategories = [
  "All",
  "Web Development",
  "Full Stack Development",
  "AI & Data Science",
  "Personal Projects"
];

export const projectsData = [
  {
    id: "lokha",
    slug: "lokha",
    name: "LOKHA",
    tagline: "Verified Indian Real Estate Discovery & Property Portal",
    category: "Full Stack Development",
    badge: "Featured Portal",
    featured: true,
    bentoSpan: "large",
    shortDescription: "A comprehensive real estate portal designed to help home seekers discover verified properties, apartments, villas, and plots across major Indian metros.",
    problemSolved: "Finding transparent real estate in India is hindered by unverified listings, hidden broker charges, outdated property details, and lack of city-specific search filters.",
    techStack: ["React", "JavaScript", "Modern CSS", "Vercel", "Local & Cloud Storage"],
    githubUrl: "https://github.com/luckyrajasab-sys/LOKHA-2",
    liveDemoUrl: "https://lokha-2.vercel.app/",
    hasCaseStudy: true,
    visualType: "dashboard-mock",
    caseStudy: {
      overview: "LOKHA is a modern real estate web application built to streamline the property discovery experience across key Indian cities including Bengaluru, Mumbai, Delhi NCR, Hyderabad, Pune, and Chennai. It offers intuitive search filtering, neighborhood amenity highlights, property type categorization, and responsive listing views.",
      problemStatement: "Most commercial property platforms are overcrowded with intrusive advertisements, sponsored rankings, and unverified duplicate listings that frustrate buyers, tenants, and owners.",
      objectives: [
        "Create a clean, distraction-free property search experience inspired by modern minimal product design.",
        "Implement granular filtering by city, property category (apartments, villas, plots), and budget brackets.",
        "Provide clear property dossiers detailing square footage, furnishing status, and verified seller contact points.",
        "Ensure fast load times and seamless responsiveness across mobile and desktop devices."
      ],
      roleAndContribution: "Solo Frontend & Web Developer. Conceived the project, designed the visual hierarchy, structured the property dataset, built the interactive filtering components in React, and deployed the application to Vercel.",
      techStackDetails: {
        frontend: ["React", "JavaScript (ES6+)", "Modern CSS / CSS Variables", "Lucide React Icons"],
        architecture: ["Modular Component Architecture", "Client-Side Search & Filter Algorithms"],
        tooling: ["Vite", "Git", "GitHub", "Vercel"]
      },
      process: [
        {
          phase: "1. Research & Interface Prototyping",
          detail: "Analyzed existing Indian real estate portals to identify common pain points (clutter, difficult filters). Designed a clean card-based layout prioritizing property imagery and vital specs."
        },
        {
          phase: "2. Component Architecture & State Modeling",
          detail: "Built modular property card, filter drawer, and detail modal components. Modeled property data objects with consistent attributes (bhk, city, price, type, verified status)."
        },
        {
          phase: "3. Search & Multi-Criteria Filtering",
          detail: "Engineered responsive client-side filter logic to recalculate matching listings instantly without page reloads."
        },
        {
          phase: "4. Deployment & Performance Optimization",
          detail: "Optimized image loading, responsive media queries, and deployed on Vercel with continuous GitHub integration."
        }
      ],
      features: [
        "Multi-Metro Search: City-based property discovery covering Bengaluru, Mumbai, Delhi NCR, Chennai, Hyderabad, and Pune.",
        "Dynamic Multi-Filter: Filter properties simultaneously by BHK, pricing range, property type, and furnished status.",
        "Comprehensive Property Dossiers: Direct view of pricing per sq.ft, available amenities, and verified badges.",
        "Responsive Card Grid: Clean card layout adapting seamlessly from wide desktop monitors to mobile phones."
      ],
      challenges: [
        {
          challenge: "Managing multi-parameter filter state without lag or redundant re-renders",
          solution: "Structured centralized filter state using React hooks and memoized the filtered array calculation to ensure smooth UI responsiveness."
        },
        {
          challenge: "Maintaining consistent card alignment across variable property image aspect ratios",
          solution: "Applied modern CSS Grid with fixed aspect ratio containers and object-fit cover to ensure uniform visual rhythm."
        }
      ],
      results: [
        "Successfully deployed and actively hosted on Vercel with sub-second page transitions.",
        "Showcased to peers as an example of clean property portal frontend architecture."
      ],
      lessonsLearned: [
        "Structuring realistic domain datasets early saves significant refactoring time during component authoring.",
        "User experience in directory portals is dictated by search and filter speed."
      ],
      futureRoadmap: [
        "Integrate Leaflet or Mapbox interactive map markers for neighborhood spatial exploration.",
        "Add user authentication and favorite property bookmarks with Supabase."
      ]
    }
  },
  {
    id: "aether-weather",
    slug: "aether-weather",
    name: "Aether Weather Pro",
    tagline: "Live Meteorological Dashboard & AI Weather Analytics",
    category: "AI & Data Science",
    badge: "API & Weather Dashboard",
    featured: true,
    bentoSpan: "medium",
    shortDescription: "An atmospheric meteorological dashboard featuring live geolocation weather telemetry, multi-day forecasts, air quality index, and clean visual weather dynamics.",
    problemSolved: "Traditional weather websites are plagued by invasive banner ads, sluggish geolocation detection, and confusing charts that make reading essential weather metrics difficult.",
    techStack: ["React", "JavaScript", "Weather API", "Geolocation API", "Modern CSS"],
    githubUrl: "https://github.com/luckyrajasab-sys/Aether-Weather-",
    liveDemoUrl: "https://aether-weather-khaki.vercel.app/",
    hasCaseStudy: true,
    visualType: "ai-terminal",
    caseStudy: {
      overview: "Aether Weather Pro is an Apple-inspired meteorological dashboard delivering precise real-time conditions, extended hourly/daily forecasts, wind velocity, humidity, UV index, and atmospheric pressure with dynamic visual backdrops that reflect current sky conditions.",
      problemStatement: "Most free weather websites are crowded with third-party advertising, causing visual distraction and slow load times when users simply need quick, accurate local weather information.",
      objectives: [
        "Provide instantaneous local weather detection via the HTML5 Geolocation API.",
        "Enable global city search with autocomplete suggestions and rapid API response handling.",
        "Visualize critical parameters (temperature curve, precipitation probability, humidity) with clean UI cards.",
        "Create an immersive, distraction-free aesthetic with backdrop blurs and weather-adaptive styling."
      ],
      roleAndContribution: "Full Stack Frontend Developer. Connected the live meteorological REST APIs, designed the glassmorphic dark interface, implemented dynamic weather-based theme shifting, and built error recovery states for failed geolocation permissions.",
      techStackDetails: {
        frontend: ["React", "JavaScript (ES6+)", "Backdrop Blur & CSS Keyframes", "Lucide React"],
        apis: ["Open-Meteo / Weather REST API", "HTML5 Geolocation API", "Reverse Geocoding"],
        tooling: ["Vite", "Git", "GitHub", "Vercel"]
      },
      process: [
        {
          phase: "1. API Evaluation & Schema Planning",
          detail: "Benchmarked free meteorological APIs for rate limits and payload accuracy (temperature, wind, UV index, sunrise/sunset)."
        },
        {
          phase: "2. Geolocation & Fallback Workflow",
          detail: "Implemented automatic browser geolocation on initial load with graceful fallback to default metropolitan coordinates (Chennai, India)."
        },
        {
          phase: "3. Visual System & Glassmorphism",
          detail: "Crafted semi-transparent card panels with subtle border highlights that adapt depending on clear, cloudy, rainy, or night conditions."
        },
        {
          phase: "4. Testing & Error Handling",
          detail: "Handled edge cases: offline connectivity, API rate limits, and misspelled city queries with clear feedback alerts."
        }
      ],
      features: [
        "Live Geolocation Sync: Automatically detects user coordinates to display instantaneous temperature and weather conditions.",
        "Global City Search: Quick lookup for any city worldwide with instant metric recalculation.",
        "Comprehensive Weather Metrics: Real-time display of Feels-Like temperature, Humidity, Wind Speed & Direction, UV Index, and Pressure.",
        "Adaptive Atmospheric Visuals: Ambient backdrop adjustments corresponding to real-world cloudiness and day/night cycles."
      ],
      challenges: [
        {
          challenge: "Handling user geolocation denial without crashing or showing an empty screen",
          solution: "Built a robust fallback pipeline: if the user declines location permissions, the app smoothly loads Chennai weather coordinates and provides a prominent city search bar."
        },
        {
          challenge: "Formatting and parsing diverse weather status codes into intuitive icons and human-readable text",
          solution: "Authored a deterministic weather code mapping table translating WMO weather interpretation codes into clean Lucide icons and descriptive labels."
        }
      ],
      results: [
        "Live and accessible at aether-weather-khaki.vercel.app with instant load times.",
        "Delivered a clean, ad-free weather experience that demonstrates proficient API integration and UI styling."
      ],
      lessonsLearned: [
        "Asynchronous network operations require strict loading, error, and timeout boundaries to ensure a dependable user experience.",
        "Subtle ambient design significantly enhances perceived software quality."
      ],
      futureRoadmap: [
        "Add interactive wind and radar precipitation map overlays.",
        "Incorporate small on-device ML model for predicting micro-climate rain probability."
      ]
    }
  },
  {
    id: "inavist",
    slug: "inavist",
    name: "INAVIST",
    tagline: "All-in-One India Tourism & Smart Itinerary Platform",
    category: "Full Stack Development",
    badge: "Hackathon Project",
    featured: true,
    bentoSpan: "medium",
    shortDescription: "An all-in-one Indian tourism and travel platform developed for hackathon presentation to explore iconic destinations, monitor crowd levels, and plan smart budget itineraries.",
    problemSolved: "Travelers exploring India face fragmented information across dozens of websites for monument timings, crowd congestion, transport booking, and verified local guides.",
    techStack: ["React", "JavaScript", "Modern CSS", "Itinerary Algorithms", "Vercel"],
    githubUrl: "https://github.com/luckyrajasab-sys/INAVIST",
    liveDemoUrl: "https://inavist.vercel.app/",
    hasCaseStudy: true,
    visualType: "canvas-dsa",
    caseStudy: {
      overview: "INAVIST is a comprehensive travel and tourism portal built for an engineering hackathon. It centralizes 100+ iconic and offbeat Indian destinations across states, helps travelers plan day-wise budget itineraries, provides crowd level indicators, and emphasizes safety guidelines for domestic and international explorers.",
      problemStatement: "Tourism planning in India is notoriously fragmented. Travelers waste hours hopping between travel blogs, railway apps, monument portals, and guide listings with no single cohesive platform.",
      objectives: [
        "Develop an all-in-one Indian tourism platform under strict hackathon sprint constraints.",
        "Showcase curated destinations across cultural heritage, hill stations, spiritual centers, and coastal getaways.",
        "Include practical traveler tools: budget calculator, crowd congestion indicators, and safety checklists.",
        "Demonstrate responsive, visually captivating UI highlighting India's rich cultural landmarks."
      ],
      roleAndContribution: "Hackathon Team Developer. Architected the React frontend, created the interactive destination catalog, implemented the category and state filter logic, and delivered the project demo under hackathon deadline.",
      techStackDetails: {
        frontend: ["React", "JavaScript (ES6+)", "Modern Responsive CSS", "SVG Map Icons"],
        architecture: ["Modular State Management", "Travel Directory Schema"],
        tooling: ["Git", "GitHub", "Vercel", "Canva UI/UX Wireframes"]
      },
      process: [
        {
          phase: "1. Hackathon Brainstorming & Theme Alignment",
          detail: "Identified the problem space: 'Digital Solutions for Indian Tourism & Heritage'. Outlined essential features needed for a winning prototype."
        },
        {
          phase: "2. Data Structuring & Curated Destinations",
          detail: "Curated verified data on top Indian monuments and travel hotspots (Taj Mahal, Hampi, Munnar, Varanasi, Jaipur, etc.) with accurate seasonal visiting advice."
        },
        {
          phase: "3. UI Development & Interactive Filters",
          detail: "Built category pills (Heritage, Nature, Spiritual, Adventure) and state filters enabling travelers to find destinations in seconds."
        },
        {
          phase: "4. Hackathon Presentation & Deployment",
          detail: "Deployed live on Vercel and presented live demo to hackathon jury, highlighting traveler accessibility and scalability."
        }
      ],
      features: [
        "100+ Curated Indian Destinations: Categorized across Heritage, Spiritual, Hill Stations, and Coastal Havens.",
        "Smart Itinerary & Budget Estimator: Interactive parameters helping travelers estimate daily lodging, food, and local transit costs.",
        "Crowd & Season Insights: Best months to visit with visual peak vs off-peak season tags.",
        "Traveler Safety & Companion Guide: Emergency contact directory and verified tips for solo and group travelers."
      ],
      challenges: [
        {
          challenge: "Aggregating rich destination imagery and cultural descriptions within rapid hackathon deadlines",
          solution: "Established a structured JSON content model that allowed seamless asynchronous data feeding while teammates curated verified historical facts."
        },
        {
          challenge: "Building a performant responsive layout capable of handling dozens of rich destination cards",
          solution: "Implemented CSS Grid with lazy image loading and modular card containers to maintain fast scrolling on mobile devices."
        }
      ],
      results: [
        "Presented successfully at college hackathon, receiving commendation for practical scope and patriotic theme.",
        "Hosted live on Vercel at inavist.vercel.app with continuous community interest."
      ],
      lessonsLearned: [
        "Hackathon success requires ruthless prioritization of core user flows over unnecessary complexity.",
        "Teamwork, clear component contracts, and rapid Git branching are crucial when building software under time pressure."
      ],
      futureRoadmap: [
        "Integrate live IRCTC and state transport bus booking APIs.",
        "Add multi-language localization (Tamil, Hindi, Telugu, Bengali) for local travelers."
      ]
    }
  },
  {
    id: "bitex",
    slug: "bitex",
    name: "BiteX 3.0",
    tagline: "Modern Food Ordering & Culinary Delivery Web Application",
    category: "Web Development",
    badge: "E-Commerce & Food Tech",
    featured: true,
    bentoSpan: "small",
    shortDescription: "A modern food ordering web app featuring interactive digital menus, culinary categories, dynamic cart calculations, and a smooth checkout flow.",
    problemSolved: "Restaurant ordering apps often feel bloated with ads and hidden service fees. BiteX 3.0 delivers a fast, transparent food ordering interface with instant cart synchronization.",
    techStack: ["React", "JavaScript", "Modern CSS", "State Management", "Vercel"],
    githubUrl: "https://github.com/luckyrajasab-sys/BiteX-3.0",
    liveDemoUrl: "https://bite-x-3-0.vercel.app/",
    hasCaseStudy: true,
    visualType: "chart-preview",
    caseStudy: {
      overview: "BiteX 3.0 is a modern online dining and food ordering application built with React. It provides an intuitive culinary menu with dietary tags (veg, non-veg, chef's special), portion quantity selectors, real-time cart subtotal and tax calculation, and a clean order confirmation review screen.",
      problemStatement: "Many online food ordering interfaces suffer from convoluted multi-step checkouts, sluggish cart updates, and poor mobile touch interactions.",
      objectives: [
        "Design a mouth-watering, modern culinary interface with smooth category navigation (Pizzas, Burgers, Asian, Desserts, Beverages).",
        "Implement a responsive shopping cart with add, remove, quantity update, and empty cart controls.",
        "Calculate prices, delivery fees, and tax automatically with zero page reloads.",
        "Deliver a frictionless mobile-first experience suitable for campus and local dining."
      ],
      roleAndContribution: "Frontend Developer & UI Designer. Designed the menu cards, engineered the client-side cart state management using React hooks, built quantity adjustment logic, and deployed the production app on Vercel.",
      techStackDetails: {
        frontend: ["React", "JavaScript (ES6+)", "Modern Flexbox & CSS Grid", "Lucide React"],
        architecture: ["Context API / Hook-based Cart State", "LocalStorage Order Persistence"],
        tooling: ["Vite", "Git", "GitHub", "Vercel"]
      },
      process: [
        {
          phase: "1. Menu Architecture & Item Modeling",
          detail: "Structured culinary data including item IDs, names, descriptions, pricing in INR, calorie estimates, and dietary tags."
        },
        {
          phase: "2. Cart State & Quantity Logic",
          detail: "Built robust cart manipulation functions preventing duplicate rows, updating quantities smoothly, and calculating real-time subtotals."
        },
        {
          phase: "3. Interactive UI & Feedback Toast",
          detail: "Added instant feedback when users add items to cart, with a persistent badge displaying current total items."
        },
        {
          phase: "4. Checkout Flow Simulation",
          detail: "Created delivery address and order summary modal validating user input before confirming the order."
        }
      ],
      features: [
        "Categorized Menu Navigation: Instant filtering by food genres (Starters, Main Courses, Fast Food, Drinks).",
        "Interactive Cart Drawer: Slide-out or dedicated cart with real-time price updates and quantity decrement/increment buttons.",
        "Dietary & Nutritional Badges: Clear visual indicators for vegetarian and non-vegetarian selections.",
        "Frictionless Checkout Simulation: Order summary with delivery estimate, discount coupon input, and total breakdown."
      ],
      challenges: [
        {
          challenge: "Preventing cart state loss when navigating between categories or reloading the browser",
          solution: "Synchronized cart items with browser LocalStorage, hydrating initial state automatically on component mount."
        },
        {
          challenge: "Accurate floating-point currency calculations for taxes and discounts",
          solution: "Standardized currency operations using integer cents/paise and formatted output cleanly with JavaScript `Intl.NumberFormat`."
        }
      ],
      results: [
        "Tested by college classmates for simulated campus canteen food ordering with high marks for speed.",
        "Live deployment running reliably at bite-x-3-0.vercel.app."
      ],
      lessonsLearned: [
        "E-commerce cart logic requires rigorous handling of edge cases (zero items, negative inputs, rapid double-clicks).",
        "Visual hierarchy in food apps directly drives user engagement and clarity."
      ],
      futureRoadmap: [
        "Integrate Razorpay test mode payment gateway for simulated digital payments.",
        "Connect Firebase Firestore for live order status tracking (Received, Preparing, Out for Delivery)."
      ]
    }
  },
  {
    id: "connect",
    slug: "connect",
    name: "Connect",
    tagline: "Smart Global Contact Manager & Digital Dossier Hub",
    category: "Full Stack Development",
    badge: "Productivity Utility",
    featured: true,
    bentoSpan: "small",
    shortDescription: "A smart contact management platform with international dial codes, searchable dossiers, category tags, and instant vCard QR code sharing.",
    problemSolved: "Managing personal and professional contacts across multiple apps leads to duplicated numbers, missing country codes, and slow manual contact sharing during networking events.",
    techStack: ["React", "JavaScript", "QR Code Generation", "LocalStorage / Cloud", "CSS"],
    githubUrl: "https://github.com/luckyrajasab-sys/Connect",
    liveDemoUrl: "https://connect-two-topaz.vercel.app/",
    hasCaseStudy: true,
    visualType: "code-editor",
    caseStudy: {
      overview: "Connect is an intelligent personal and professional address book application designed for streamlined contact organization, fast lookup, and instant touchless contact exchange. It features international dialing code lookups, category grouping (Work, Personal, College, Mentors), and generates scannable QR codes for each contact dossier.",
      problemStatement: "Exchanging contact details at hackathons, conferences, and student meetups is cumbersome when people have to manually type 10-digit numbers, emails, and social handles.",
      objectives: [
        "Build a clean contact hub that works reliably offline and syncs persistent contacts.",
        "Incorporate international dial code support for error-free global phone number formatting.",
        "Enable one-click QR code generation for instant camera scanning into mobile phonebooks.",
        "Provide quick search, favorites pinning, and category filtering."
      ],
      roleAndContribution: "Sole Developer. Implemented the CRUD contact management functions, integrated the QR code generator, built the search and sort pipeline, and styled the dark/light responsive interface.",
      techStackDetails: {
        frontend: ["React", "JavaScript (ES6+)", "Lucide React", "qrcode / SVG QR Generator"],
        storage: ["Browser LocalStorage with JSON schema validation", "Firebase/Supabase readiness"],
        tooling: ["Vite", "Git", "GitHub", "Vercel"]
      },
      process: [
        {
          phase: "1. Data Model & International Dialing Codes",
          detail: "Compiled an accurate dataset of world country codes and structured contact entity schema (name, phone, email, category, notes, social links)."
        },
        {
          phase: "2. Contact CRUD & State Pipeline",
          detail: "Implemented Create, Read, Update, Delete actions with confirmation modals to prevent accidental deletion."
        },
        {
          phase: "3. QR Code Digital Card Generation",
          detail: "Integrated dynamic vCard string formatting so scanning the generated QR code directly opens the user's native contacts app."
        },
        {
          phase: "4. Polishing & Search Indexing",
          detail: "Implemented debounced full-text search matching across contact names, emails, and company notes."
        }
      ],
      features: [
        "Instant vCard QR Sharing: Generates a scannable QR code on screen for any contact, allowing peers to save contact information in one second.",
        "Global Country Dial Code Picker: Automatic flag and dialing code prefixing for international phone numbers.",
        "Smart Search & Categories: Instant search by name, organization, or category tag (Friends, College, Work).",
        "Favorites & Pinning: Pin crucial mentors and frequent collaborators to the top of the contact directory."
      ],
      challenges: [
        {
          challenge: "Generating standard vCard format strings compatible with both iOS and Android camera scanners",
          solution: "Formatted the QR payload using the official MECARD / vCard 3.0 specification (`BEGIN:VCARD ... END:VCARD`) for universal native device recognition."
        },
        {
          challenge: "Validating non-standard international phone numbers without blocking legitimate numbers",
          solution: "Combined country dialing code pre-selection with flexible regex validation that accounts for variable local digit lengths."
        }
      ],
      results: [
        "Used personally to share contact details with fellow developers and organizers at college hackathons.",
        "Hosted live on Vercel at connect-two-topaz.vercel.app with zero downtime."
      ],
      lessonsLearned: [
        "Integrating standard protocols like vCard unlocks immense real-world value with very little friction.",
        "Thoughtful touch interactions make utility tools feel like native mobile apps."
      ],
      futureRoadmap: [
        "Add contact export to CSV and Google Contacts sync.",
        "Incorporate end-to-end encrypted cloud backup with Supabase auth."
      ]
    }
  },
  {
    id: "unit-converter",
    slug: "unit-converter",
    name: "Unit Converter (Unit Ledger)",
    tagline: "High-Precision Multi-Category Conversion Calculator",
    category: "Personal Projects",
    badge: "Core Engineering Tool",
    featured: true,
    bentoSpan: "small",
    shortDescription: "A fast, responsive conversion tool providing instant, high-precision calculations across length, mass, temperature, data storage, speed, and time.",
    problemSolved: "Online conversion tools are frequently clunky, ad-cluttered, and require slow page reloads between units. Unit Converter provides instant bidirectional conversion with calculation history.",
    techStack: ["React", "JavaScript", "Precision Math Algorithms", "CSS Grid", "Vercel"],
    githubUrl: "https://github.com/luckyrajasab-sys/Unit-Convertor",
    liveDemoUrl: "https://unit-convertor-two.vercel.app/",
    hasCaseStudy: true,
    visualType: "data-chart",
    caseStudy: {
      overview: "Unit Converter (Unit Ledger) is a focused, high-precision engineering utility designed for students, developers, and educators. It provides instantaneous bidirectional conversion across 7 measurement dimensions with real-time recalculation, formula explanations, and conversion history.",
      problemStatement: "Students and engineers frequently need to convert units between metric, imperial, and digital computing units. Existing web tools are often slow, ad-ridden, or struggle with floating-point precision errors.",
      objectives: [
        "Support essential engineering categories: Length, Weight/Mass, Temperature, Data Storage (Bytes to TB), Speed, Area, and Time.",
        "Implement instant bidirectional recalculation as the user types.",
        "Maintain high mathematical precision without floating-point inaccuracies.",
        "Provide a clean, keyboard-accessible calculator layout."
      ],
      roleAndContribution: "Sole Developer. Implemented the base-unit mathematical conversion formulas, built the interactive UI with clear unit selectors, created the conversion history log, and deployed on Vercel.",
      techStackDetails: {
        frontend: ["React", "JavaScript (ES6+)", "Modern CSS Grid & Flexbox", "Lucide React"],
        algorithms: ["Base-Unit Normalization Algorithm", "Floating-Point Precision Rounding"],
        tooling: ["Vite", "Git", "GitHub", "Vercel"]
      },
      process: [
        {
          phase: "1. Mathematical Formula Mapping",
          detail: "Architected a two-step conversion model: any input unit is first normalized into an SI base unit, then converted to the target unit. This avoided writing O(N^2) conversion functions."
        },
        {
          phase: "2. Precision & Rounding Logic",
          detail: "Created precision rounding functions to eliminate standard JavaScript IEEE 754 floating-point artifacts (e.g. 0.1 + 0.2 = 0.30000000000000004)."
        },
        {
          phase: "3. UI Authoring & Keyboard Accessibility",
          detail: "Designed high-contrast input boxes with clear focus rings, swap buttons, and instant copy-to-clipboard functionality."
        },
        {
          phase: "4. Deployment & Performance Verification",
          detail: "Ensured the bundle size is lightweight (< 50KB gzipped) and works offline as a progressive web tool."
        }
      ],
      features: [
        "7 Conversion Categories: Length (m, km, ft, in, miles), Mass (kg, g, lb, oz), Temperature (°C, °F, K), Digital Storage (B, KB, MB, GB, TB), Speed, Area, and Time.",
        "Two-Way Dynamic Conversion: Type into either field to see the opposite field update immediately without lag.",
        "Unit Swap Button: Single-click instant toggle reversing the source and destination units.",
        "Conversion History Log: Keeps track of recent conversions for quick reference during homework and lab work."
      ],
      challenges: [
        {
          challenge: "Temperature conversions (Celsius, Fahrenheit, Kelvin) do not follow simple multiplicative factors due to offset scales",
          solution: "Implemented customized affine transformation functions for temperature scales while using standard ratio multipliers for linear dimensions."
        },
        {
          challenge: "Preventing infinite loop re-renders during bidirectional input synchronization",
          solution: "Tracked active input focus source to trigger state updates unidirectionally depending on which field the user is editing."
        }
      ],
      results: [
        "Actively used by classmates during Physics, Engineering, and Computer Organization coursework.",
        "Live and responsive at unit-convertor-two.vercel.app."
      ],
      lessonsLearned: [
        "The base-unit normalization pattern scales infinitely better than manual pairwise unit matrices.",
        "Even simple utility tools can feel deeply satisfying when latency is zero and layout is clean."
      ],
      futureRoadmap: [
        "Add live currency exchange rate conversion using free financial APIs.",
        "Support scientific notation input for physics and chemistry calculations."
      ]
    }
  }
];
