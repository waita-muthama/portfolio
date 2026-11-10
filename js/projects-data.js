/**
 * Portfolio Projects Database - Jeremiah Muthama Waita
 * Categorized by: powerbi, tableau, excel, spss, research, software, marketing, tutoring
 * Every project includes high-resolution screenshots / visual assets
 */

const projectsData = [
  {
    id: "powerbi-superstore",
    title: "Global Superstore Commercial Sales & Profit Intelligence Dashboard",
    category: "powerbi",
    categoryLabel: "Power BI & Business Intelligence",
    badge: "Power BI Commercial Suite",
    shortDescription: "Interactive multi-market commercial dashboard visualizing $1.40M in sales, profit margins, product category profitability, and regional VP rankings.",
    longDescription: "Developed an executive-grade commercial intelligence dashboard analyzing global retail transactions across Africa, APAC, EMEA, EU, LATAM, and US markets. Features dynamic drill-downs by product category (Technology, Furniture, Office Supplies), market return rates, country-level profit treemaps, and regional VP sales quotas with interactive cross-filtering.",
    thumbnail: "assets/images/powerbi-global-superstore.png",
    technologies: ["Power BI", "DAX", "Data Modeling", "Business Intelligence", "Excel Advanced", "SQL"],
    metrics: [
      { label: "Global Sales", value: "$1.40M" },
      { label: "Profit Margin", value: "12.30%" },
      { label: "Markets Analyzed", value: "6 Continents" }
    ],
    features: [
      "Dynamic market slicing enabling instant cross-filtering across 6 global retail territories",
      "Sales vs. Profit category comparison revealing Technology as the highest margin driver ($0.5M+)",
      "Market return rate breakdown highlighting APAC and EMEA reverse logistics",
      "Profit by Country hierarchical treemap pinpointing regional profit density",
      "Key Performance Indicator (KPI) cards displaying real-time commercial health metrics"
    ],
    architecture: "Multi-table relational data model -> Cleaned and transformed in Power Query -> Calculated DAX measures for profit margin and growth -> Interactive Power BI visual canvas.",
    liveUrl: "https://www.linkedin.com/in/waita-muthama-a40769188/",
    githubUrl: "https://github.com/waita-muthama",
    featured: true
  },
  {
    id: "spss-reliability-analysis",
    title: "Academic Research Statistical Analysis & Reliability Modeling",
    category: "spss",
    categoryLabel: "SPSS Statistical Analysis",
    badge: "SPSS & Statistical Modeling",
    shortDescription: "Quantitative academic research study evaluating descriptive statistics, scale reliability (Cronbach's Alpha > 0.70), and behavioral cyber security scores.",
    longDescription: "Authored and executed rigorous statistical analysis for academic research examining user security behaviors and risk perceptions. Computed descriptive metrics (mean, standard deviation, variance) across N=150 subjects. Developed custom SPSS reliability syntax (/SCALE('0.70') ALL /MODEL=ALPHA) to validate survey constructs across awareness, permission concerns, and trust complacency.",
    thumbnail: "assets/images/spss-reliability-descriptives.png",
    technologies: ["SPSS", "Cronbach's Alpha", "Descriptive Statistics", "Survey Methodology", "Scale Reliability", "Thesis Consulting"],
    metrics: [
      { label: "Reliability Threshold", value: "α > 0.70" },
      { label: "Sample Size", value: "N = 150" },
      { label: "Scale Constructs", value: "8 Variables" }
    ],
    features: [
      "Computed parametric descriptive statistics (Mean, Std. Dev, Min, Max) across 8 research indices",
      "Formulated SPSS syntax automation for Cronbach's Alpha construct reliability testing",
      "Evaluated app installation volume (Mean = 55.29) against perceived trust complacency scores",
      "Standardized multi-item Likert questionnaire responses into validated aggregate indices",
      "Prepared publication-ready academic summary tables compliant with APA formatting guidelines"
    ],
    architecture: "Raw survey questionnaire ingestion -> Variable transformation & reverse-coding -> Internal consistency reliability testing via SPSS -> Interpretation & academic thesis documentation.",
    liveUrl: "assets/docs/Jeremiah_Muthama_Research_Paper.html",
    githubUrl: "https://github.com/waita-muthama",
    featured: true
  },
  {
    id: "spss-oneway-anova",
    title: "One-Way ANOVA & Hypothesis Testing for Behavioral Cybersecurity",
    category: "spss",
    categoryLabel: "SPSS Statistical Analysis",
    badge: "Inferential Statistics",
    shortDescription: "Inferential statistical analysis testing variance across demographics with statistically significant findings (F=61.25, p < 0.001) for trust complacency.",
    longDescription: "Conducted inferential statistical hypothesis testing using One-Way Analysis of Variance (ANOVA). Tested demographic group variance across AwarenessScore (F=21.87, p < .001), PermissionConcernScore (F=24.43, p < .001), RiskPerceptionScore (F=15.13, p < .001), and TrustComplacencyScore (F=61.25, p < .001), establishing empirical foundation for dissertation defense.",
    thumbnail: "assets/images/spss-oneway-anova.jpg",
    technologies: ["SPSS", "ANOVA", "Hypothesis Testing", "F-Distribution", "p-value Validation", "Quantitative Research"],
    metrics: [
      { label: "Significance", value: "p < 0.001" },
      { label: "F-Statistic", value: "F = 61.25" },
      { label: "Degrees Freedom", value: "df = 149" }
    ],
    features: [
      "Executed One-Way ANOVA partitioning Sum of Squares between and within groups",
      "Confirmed statistically significant demographic divergence across cybersecurity awareness (p = .000)",
      "Proved gender invariance (F = 1.499, p = .227) contrasted with significant behavioral variance",
      "Assessed homogeneity of variances using Levene's test and applied post-hoc Tukey HSD comparisons",
      "Structured comprehensive analytical findings for university thesis defense and peer review"
    ],
    architecture: "Formulation of null & alternative hypotheses -> Normality & variance check -> One-Way ANOVA computation in SPSS -> Post-hoc pairwise analysis -> Dissertation chapter drafting.",
    liveUrl: "assets/docs/Jeremiah_Muthama_Research_Paper.html",
    githubUrl: "https://github.com/waita-muthama",
    featured: true
  },
  {
    id: "tableau-sales-analytics",
    title: "Tableau Desktop Sales Performance & Market Segmentation Suite",
    category: "tableau",
    categoryLabel: "Tableau Data Visualization",
    badge: "Tableau Architecture",
    shortDescription: "Interactive multi-dimensional sales segmentation dashboard engineered in Tableau Desktop featuring scatter regression, customer segments, and market share.",
    longDescription: "Designed an interactive sales analytics application in Tableau Desktop. Features customer segment breakdown (Consumer 51.48%, Corporate 30.25%, Home Office 18.27%), profit-versus-sales scatter plots with outlier identification, and horizontal bar rankings by country (United States leading with $2M+ volume). Built with custom parameters, calculated fields, and responsive container layouts.",
    thumbnail: "assets/images/tableau-sales-dashboard.png",
    technologies: ["Tableau Desktop", "Data Visualization", "Market Segmentation", "Scatter Plots", "Calculated Fields", "Excel"],
    metrics: [
      { label: "Top Market Volume", value: "$2.0M+" },
      { label: "Customer Segments", value: "3 Tiers" },
      { label: "Dashboard Layout", value: "Interactive" }
    ],
    features: [
      "Engineered Tableau Desktop layout container architecture optimized for executive reporting",
      "Segment market share visualization highlighting Consumer category dominance (51.48%)",
      "Scatter plot correlation analysis mapping Sales vs. Profit margin across global transactions",
      "Country market ranking bar chart comparing US, Australia, France, China, and Germany performance",
      "Interactive filtering parameter controls enabling on-the-fly regional and segment slice-and-dice"
    ],
    architecture: "Data connection to transactional records -> Schema validation & relationship mapping -> Calculated fields for segment margin -> Tableau dashboard container assembly -> PDF/Server publish.",
    liveUrl: "https://www.linkedin.com/in/waita-muthama-a40769188/",
    githubUrl: "https://github.com/waita-muthama",
    featured: true
  },
  {
    id: "stem-tutoring-mentorship",
    title: "Online STEM Tutoring Platform (Mathematics, Physics & CS)",
    category: "tutoring",
    categoryLabel: "Academic Tutoring & Mentorship",
    badge: "Online STEM Tutor",
    shortDescription: "Specialized online tutoring and step-by-step problem-solving in Calculus, Linear Algebra, Mechanics, Electromagnetism, and Programming.",
    longDescription: "Delivering one-on-one and group STEM tutoring for high school, undergraduate, and postgraduate students worldwide. Specializing in Pure & Applied Mathematics (Calculus I, II, III, Linear Algebra, Probability & Differential Equations) and Physics (Classical Mechanics, Thermodynamics, Electromagnetism, Optics). Built interactive digital whiteboards, custom problem sets, and helped over 200 students achieve top academic grades.",
    thumbnail: "assets/images/project-iot-consensus.svg",
    technologies: ["Pure Mathematics", "Applied Calculus", "Classical Mechanics", "Electromagnetism", "Digital Whiteboard", "Python for STEM"],
    metrics: [
      { label: "Students Mentored", value: "200+" },
      { label: "STEM Subjects", value: "Maths & Physics" },
      { label: "Pass Rate", value: "98%" }
    ],
    features: [
      "Step-by-step breakdown of advanced calculus, integration techniques, and differential equations",
      "Physics problem-solving frameworks for Newtonian mechanics, circuit analysis, and wave optics",
      "Interactive digital whiteboard sessions tailored to each student's pace and learning style",
      "Exam preparation strategies, homework guidance, and continuous formative assessment",
      "Integration of Python and MATLAB to visualize mathematical surfaces and physical simulations"
    ],
    architecture: "Diagnostic assessment of student baseline -> Customized concept syllabus -> Interactive live problem-solving sessions -> Practical homework drills & progress tracking.",
    liveUrl: "https://wa.me/254705297607",
    githubUrl: "https://github.com/waita-muthama",
    featured: true
  },
  {
    id: "ipoa-enterprise-systems",
    title: "IPOA Enterprise Operations, Security & Network Infrastructure",
    category: "software",
    categoryLabel: "Enterprise Systems & Security",
    badge: "Enterprise Infrastructure",
    shortDescription: "Enterprise system support and software operations for the Independent Policing Oversight Authority, securing remote access and mission-critical applications.",
    longDescription: "Engineered and maintained mission-critical enterprise systems and network infrastructure at the Independent Policing Oversight Authority (IPOA). Configured and monitored secure remote access via Cisco Secure Client and Cisco Identity Services Engine (ISE). Administered network security using Cisco Firepower Threat Defense and Firepower Management Center (FMC), managed IP communication through Cisco Unified Communications Manager (CUCM), and maintained reliable relational database backups and operational inventories.",
    thumbnail: "assets/images/project-omnisphere.svg",
    technologies: ["Cisco ISE", "Cisco Firepower", "CUCM", "PostgreSQL", "MySQL", "Enterprise Systems", "Linux"],
    metrics: [
      { label: "Uptime Reliability", value: "99.9%" },
      { label: "Security Enforcement", value: "Cisco ISE" },
      { label: "IP Telephony", value: "Cisco CUCM" }
    ],
    features: [
      "Configured and managed secure remote access using Cisco Secure Client and Cisco Identity Services Engine (ISE)",
      "Monitored organizational network security utilizing Cisco Firepower Threat Defense and Firepower Management Center",
      "Maintained institutional relational databases (PostgreSQL/MySQL), scheduled automated backups, and ensured disaster recovery",
      "Supported enterprise voice and IP telephony through Cisco Unified Communications Manager and Unity Connection",
      "Investigated application, system, and connectivity escalations, maintaining operational technology inventories"
    ],
    architecture: "Enterprise multi-tier architecture: Cisco ASA/Firepower perimeter defense -> Cisco ISE 802.1X policy enforcement -> Core switches & CUCM IP telephony -> Virtualized application servers with automated PostgreSQL backups.",
    liveUrl: "https://www.linkedin.com/in/waita-muthama-a40769188/",
    githubUrl: "https://github.com/waita-muthama",
    featured: false
  },
  {
    id: "techbrand-fullstack-apps",
    title: "Techbrand Full-Stack Web Applications & REST API Engine",
    category: "software",
    categoryLabel: "Software Development",
    badge: "Full-Stack Development",
    shortDescription: "Scalable multi-tier applications and secure REST APIs built with React.js, Node.js, PHP, Java, and optimized PostgreSQL/MySQL databases.",
    longDescription: "Spearheaded full-stack feature development and database architecture at Techbrand. Translated business requirements into clean, performant applications utilizing React.js on the frontend with Node.js, PHP, and Java microservices on the backend. Designed relational database schemas in PostgreSQL and MySQL, tuned complex SQL queries for maximum throughput, and integrated secure payment and authentication endpoints with Git-based CI/CD workflows.",
    thumbnail: "assets/images/project-nexus.svg",
    technologies: ["React.js", "Node.js", "PHP", "Java", "PostgreSQL", "MySQL", "REST APIs", "Git/GitHub"],
    metrics: [
      { label: "API Latency", value: "< 95ms" },
      { label: "Database Tuning", value: "Indexed SQL" },
      { label: "Version Control", value: "Git Workflow" }
    ],
    features: [
      "Developed responsive, modular user interfaces with React.js and modern state management",
      "Engineered secure REST APIs in Node.js and PHP with JWT authentication and input sanitization",
      "Designed and normalized MySQL and PostgreSQL schemas, optimizing query execution plans",
      "Identified and resolved software defects, memory leaks, and backend performance bottlenecks",
      "Implemented version control, code review standards, and continuous integration via GitHub"
    ],
    architecture: "React.js Single Page Application (SPA) -> Nginx Gateway -> Node.js / PHP Application Services -> PostgreSQL & MySQL databases with pooled connections.",
    liveUrl: "https://github.com/waita-muthama",
    githubUrl: "https://github.com/waita-muthama",
    featured: false
  },
  {
    id: "customer-acquisition-growth",
    title: "Business Banking Customer Acquisition & Growth Analytics",
    category: "marketing",
    categoryLabel: "Growth & Marketing",
    badge: "Growth & Acquisition",
    shortDescription: "Data-driven marketing analytics framework combining customer acquisition funnels, technical SEO, and business banking lending insights.",
    longDescription: "Bridging analytical rigor and commercial growth, this framework models business customer acquisition journeys, loan applicant conversion funnels, and organic search acquisition. Combines Google Analytics 4, customer lifetime value modeling, and programmatic technical SEO to identify high-value commercial prospects and optimize digital onboarding experiences.",
    thumbnail: "assets/images/project-pulsegrow.svg",
    technologies: ["Google Analytics 4", "Technical SEO", "Conversion Optimization", "Power BI", "SQL", "Excel Modeling"],
    metrics: [
      { label: "Conversion Lift", value: "+28.5%" },
      { label: "Organic Clicks", value: "+140%" },
      { label: "Lighthouse SEO", value: "100/100" }
    ],
    features: [
      "Built customer acquisition funnel models identifying friction points in commercial onboarding",
      "Designed predictive customer value scorecards to evaluate prospective business lending profiles",
      "Executed technical SEO audits achieving 100/100 Google Lighthouse Core Web Vitals",
      "Analyzed multi-touch attribution models to allocate marketing and outreach resources efficiently",
      "Prepared data-backed visual presentations for corporate stakeholders and decision makers"
    ],
    architecture: "Web interaction events tracked via GA4 & Google Tag Manager -> Cleaned via Python/SQL -> Modeled in Power BI -> Insights translated into high-converting UI landing experiences.",
    liveUrl: "https://github.com/waita-muthama",
    githubUrl: "https://github.com/waita-muthama",
    featured: false
  },
  {
    id: "eap-employee-assistance-survey",
    title: "Employee Assistance Programme (EAP) Likert Scale Survey Analysis",
    category: "spss",
    categoryLabel: "SPSS Statistical Analysis",
    badge: "Survey & Means Analysis",
    shortDescription: "Quantitative Likert-scale survey analysis measuring mean scores for 9 EAP programme items including training support (4.08) and performance contribution (4.30).",
    longDescription: "Conducted descriptive quantitative analysis of employee perceptions of an Employee Assistance Programme using Likert-scale survey data. Computed item-level mean scores across 9 EAP dimensions, visualized as a horizontal bar chart ranging from 1–5. Findings revealed Training support (M=4.08) and Contributes to performance (M=4.30) as highest-rated items, while Childcare facilities (M=2.19) scored lowest, informing targeted programme improvement recommendations for HR leadership.",
    thumbnail: "assets/images/eap-survey-evaluation-means.png",
    technologies: ["SPSS", "Likert Scale Analysis", "Descriptive Statistics", "Survey Methodology", "HR Analytics", "Data Visualization"],
    metrics: [
      { label: "Survey Items", value: "9 EAP Dims" },
      { label: "Top Score", value: "M = 4.30" },
      { label: "Scale Range", value: "1 – 5 Likert" }
    ],
    features: [
      "Computed item-level descriptive mean scores across 9 Employee Assistance Programme dimensions",
      "Identified top-performing EAP items: Training support (4.08) and Contributes to performance (4.30)",
      "Flagged underperforming programme areas: Childcare facilities (2.19) and Counselling support (3.22)",
      "Visualized findings as a publication-ready horizontal bar chart for dissertation Chapter 4",
      "Translated statistical findings into actionable programme recommendations for HR management"
    ],
    architecture: "Likert survey instrument design -> SPSS data entry & cleaning -> Item mean computation -> Horizontal bar visualization -> APA-formatted dissertation chapter integration.",
    liveUrl: "assets/docs/Jeremiah_Muthama_Research_Paper.html",
    githubUrl: "https://github.com/waita-muthama",
    featured: true
  },
  {
    id: "econometric-rent-trend-analysis",
    title: "Econometric Rent Trend Analysis: 14-Year Housing Market Time Series",
    category: "excel",
    categoryLabel: "Excel Data Analytics",
    badge: "Econometric Time Series",
    shortDescription: "14-year econometric visualization of average percent change in rental prices (2011–2025) using Alaska Department of Labor and Alaska Housing Finance Corporation data.",
    longDescription: "Produced an econometric time-series visualization analyzing annual percent changes in rental housing prices from 2011 to 2025. The analysis draws on authoritative data from the Alaska Department of Labor and Workforce Development and the Alaska Housing Finance Corporation. Key findings include a long-run average annual rent increase of 2.7%, a sharp post-pandemic acceleration peaking at 7%+ in 2023, and a brief deflation episode in 2019 (-0.5%). The annotated bar chart communicates above-average and below-average years against the long-run mean baseline.",
    thumbnail: "assets/images/econometric-rent-trends-2011-2025.png",
    technologies: ["Econometric Analysis", "Time Series Visualization", "Excel Advanced", "Data Storytelling", "Housing Economics", "Policy Analytics"],
    metrics: [
      { label: "Years Tracked", value: "2011–2025" },
      { label: "Long-Run Avg", value: "2.7% p.a." },
      { label: "Peak Growth", value: "7%+ (2023)" }
    ],
    features: [
      "Compiled 14-year longitudinal rent price change dataset from official labor and housing finance sources",
      "Annotated a reference mean line (2.7%) enabling immediate above/below average period identification",
      "Highlighted the 2019 rent deflation anomaly (-0.5%) and the 2022–2023 post-pandemic surge",
      "Designed a publication-quality bar chart with directional color coding for policy presentation",
      "Framed econometric insights for academic dissertations and real-estate market policy papers"
    ],
    architecture: "Government dataset acquisition (Alaska DOL + AHFC) -> Annual percent change computation -> Time series bar chart with mean reference line -> Policy interpretation & academic reporting.",
    liveUrl: "https://github.com/waita-muthama",
    githubUrl: "https://github.com/waita-muthama",
    featured: false
  },
  {
    id: "multiple-regression-employee-performance",
    title: "Multiple Regression Model: Flexible Work Arrangements & Employee Performance",
    category: "spss",
    categoryLabel: "SPSS Statistical Analysis",
    badge: "Multiple Regression Model",
    shortDescription: "Full multiple regression model (R²=0.23, F(3,33)=3.293, p=.033) predicting Employee Performance from FWAs, EAPs, and Leave Policy, with VIF multicollinearity diagnostics.",
    longDescription: "Designed and executed a multiple regression study examining how three workplace policy predictors — Flexible Working Arrangements (FWAs), Employee Assistance Programmes (EAPs), and Leave Policy — jointly predict Employee Performance (EP). The regression model achieved statistical significance (F(3,33)=3.293, p=.033). Leave Policy emerged as the only significant individual predictor (β=.387, p=.036). Reported Durbin-Watson=1.929 confirming no autocorrelation, and VIF values all below 2.0 confirming multicollinearity absence — enabling robust academic defense.",
    thumbnail: "assets/images/thesis-multiple-regression-model.png",
    technologies: ["SPSS", "Multiple Regression", "ANOVA for Regression", "VIF Diagnostics", "Durbin-Watson Test", "APA Reporting"],
    metrics: [
      { label: "Model Fit", value: "R² = 0.230" },
      { label: "Significance", value: "p = 0.033" },
      { label: "Durbin-Watson", value: "1.929" }
    ],
    features: [
      "Formulated a theoretically grounded multiple regression model with 3 policy predictors",
      "Computed and interpreted Model Summary (R=0.480, R²=0.230, Adjusted R²=0.160, SE=0.434)",
      "Validated omnibus statistical significance via ANOVA for regression (F(3,33)=3.293, p=.033)",
      "Reported standardized and unstandardized beta coefficients per APA Publication Manual guidelines",
      "Diagnosed multicollinearity using Variance Inflation Factor (VIF < 2) and Tolerance > 0.5",
      "Confirmed independence of residuals using Durbin-Watson statistic (1.929 — acceptable range)"
    ],
    architecture: "Theoretical model specification (FWAs, EAPs, Leave -> EP) -> Assumption testing -> SPSS multiple regression -> Coefficient table extraction -> APA-compliant dissertation chapter writing.",
    liveUrl: "assets/docs/Jeremiah_Muthama_Research_Paper.html",
    githubUrl: "https://github.com/waita-muthama",
    featured: true
  },
  {
    id: "tableau-sp500-market-caps",
    title: "S&P 500 Market Capitalization Analysis (2008–2015) — Tableau",
    category: "tableau",
    categoryLabel: "Tableau Data Visualization",
    badge: "Tableau Financial Analytics",
    shortDescription: "Multi-year scatter visualization of S&P 500 corrected market capitalizations (2008–2015) built in Tableau Desktop with interactive year and company name filters.",
    longDescription: "Engineered an interactive Tableau Desktop dashboard visualizing corrected market capitalization data for S&P 500 constituent companies across eight years (2008–2015). The scatter plot reveals distribution density and outliers (with select companies reaching $600,000M+) across individual years. Built with dynamic year-color encoding, company name search filters, and a tiled dashboard layout — enabling financial analysts and researchers to identify market recovery patterns post the 2008 financial crisis.",
    thumbnail: "assets/images/tableau-sp500-market-caps.jpg",
    technologies: ["Tableau Desktop", "Financial Data Analysis", "Scatter Plot Visualization", "S&P 500 Data", "Interactive Filters", "Market Cap Analytics"],
    metrics: [
      { label: "Companies Tracked", value: "500+ S&P" },
      { label: "Years Covered", value: "2008–2015" },
      { label: "Peak MCap", value: "$600,000M+" }
    ],
    features: [
      "Imported and modeled S&P 500 constituent historical market capitalization dataset in Tableau",
      "Constructed multi-year scatter plot with year-based color encoding across 8 fiscal years",
      "Implemented interactive company name and year filter panels for drill-down exploration",
      "Identified market cap outliers and distribution recovery patterns post the 2008 financial crisis",
      "Designed a tiled desktop dashboard layout (1000x800) optimized for executive financial presentations"
    ],
    architecture: "S&P 500 MCap CSV dataset -> Tableau data connection & schema mapping -> Scatter plot with color encoding -> Interactive parameter controls -> Dashboard layout publish.",
    liveUrl: "https://www.linkedin.com/in/waita-muthama-a40769188/",
    githubUrl: "https://github.com/waita-muthama",
    featured: false
  },
  {
    id: "tableau-gapminder-animation",
    title: "Gapminder World Indicators Animated Bubble Chart — Tableau",
    category: "tableau",
    categoryLabel: "Tableau Data Visualization",
    badge: "Tableau Animation",
    shortDescription: "Animated Tableau bubble chart visualizing global Birth Rate vs. Female Life Expectancy with population-size encoding and regional color coding across years (Gapminder dataset).",
    longDescription: "Recreated Hans Rosling's iconic Gapminder visualization in Tableau Desktop using the World Indicators dataset. The animated bubble chart plots average Birth Rate (X-axis) against average Female Life Expectancy (Y-axis), with bubble size encoding total population and bubble color encoding global region (Africa, Asia, Europe, Middle East, Oceania, The Americas). The year animation (1960–2015) reveals development convergence trends — as countries develop, birth rates fall and life expectancy rises. Built with AVG calculated fields, animation pages, and a Data Guide annotation.",
    thumbnail: "assets/images/tableau-gapminder-life-expectancy.png",
    technologies: ["Tableau Desktop", "Gapminder World Data", "Animated Bubble Charts", "Global Health Analytics", "Population Encoding", "Data Storytelling"],
    metrics: [
      { label: "Countries Plotted", value: "140+ Nations" },
      { label: "Regions Encoded", value: "6 Global" },
      { label: "Max Population", value: "1.35B+" }
    ],
    features: [
      "Connected Tableau Desktop to the World Indicators dataset and mapped Country, Region, Year, Birth Rate, Life Expectancy, and Population",
      "Configured AVG(Birth Rate) vs. AVG(Life Expectancy Female) as X and Y axis measures",
      "Encoded total population as bubble size with a legend spanning 27,363 to 1.35 billion",
      "Applied regional color coding (6 global regions) for immediate geographic pattern recognition",
      "Created page-based year animation enabling Gapminder-style temporal development storytelling",
      "Added a Data Guide annotation for viz description and accessibility compliance"
    ],
    architecture: "World Indicators data connection -> Calculated AVG fields -> Circle mark type with Size (population) + Color (region) -> Pages shelf (Year) for animation -> Tableau Public / Desktop export.",
    liveUrl: "https://www.linkedin.com/in/waita-muthama-a40769188/",
    githubUrl: "https://github.com/waita-muthama",
    featured: false
  },
  {
    id: "excel-consolidated-financial-statements",
    title: "Consolidated Financial Statements — Intercompany Elimination (Excel)",
    category: "excel",
    categoryLabel: "Excel Financial Modeling",
    badge: "Excel Consolidation Model",
    shortDescription: "Full intercompany consolidation worksheet for Company A & B, with elimination entries (E, I, D, S) producing a clean consolidated Income Statement and Retained Earnings schedule.",
    longDescription: "Built a professional Excel consolidation model combining the financial statements of Company A and Company B into a single consolidated entity. Applied standard intercompany elimination adjustments — Depreciation adjustment (E: $2,000), Intercompany income elimination (I: $66,000), Dividend elimination (D: $40,000), and Opening retained earnings adjustment (S: $40,000). The consolidated Income Statement reports Revenue of ($675,000), Net Income of ($261,000), and Retained Earnings of ($694,500), consistent with GAAP/IFRS consolidation principles. Formatted with color-coded debit/credit cells for audit-ready presentation.",
    thumbnail: "assets/images/excel-consolidated-financials.png",
    technologies: ["Microsoft Excel", "Financial Consolidation", "GAAP / IFRS Accounting", "Intercompany Eliminations", "Income Statement Modeling", "Retained Earnings Schedule"],
    metrics: [
      { label: "Consolidated Revenue", value: "$675,000" },
      { label: "Net Income", value: "$261,000" },
      { label: "Retained Earnings", value: "$694,500" }
    ],
    features: [
      "Built a multi-column Excel consolidation worksheet with Company A, Company B, Ref. Debit, Ref. Credit, and Consolidated columns",
      "Applied elimination entry E ($2,000) for depreciation and amortization adjustment between entities",
      "Eliminated intercompany investment income of $66,000 (Entry I) to prevent double-counting",
      "Eliminated intercompany dividends paid of $40,000 (Entry D) and opening retained earnings (Entry S)",
      "Computed final Consolidated Net Income ($261,000) and Retained Earnings Dec 31 ($694,500)",
      "Formatted with green parentheses for credits and blue values for debits — GAAP-compliant audit-ready layout"
    ],
    architecture: "Individual trial balance import (Co. A + Co. B) -> Elimination journal entry identification -> Worksheet column construction -> Formula-driven consolidation totals -> Audit-ready formatting.",
    liveUrl: "https://github.com/waita-muthama",
    githubUrl: "https://github.com/waita-muthama",
    featured: true
  },
  {
    id: "excel-national-park-visitor-analytics",
    title: "National Park Service 2021 Visitor Analytics — Excel Dashboard",
    category: "excel",
    categoryLabel: "Excel Data Analytics",
    badge: "Excel Data Dashboard",
    shortDescription: "NPS 2021 Fiscal Year visitor analytics dashboard: 11.6M total visits categorized by visitor type and top 5 national parks, with a bar chart visualization built in Excel.",
    longDescription: "Engineered an Excel analytics dashboard analyzing 2021 National Park Service (NPS) visitor data sourced from the official NPS Fiscal Year Visitation Report. The dashboard presents two summary pivot tables: Visitor Category breakdown (Recreation Visits: 10,214,621; Concessioner Lodging Overnights: 363,978; Backcountry Overnights: 332,108 — totaling 11,606,109 All Categories) and Top 5 Park ranking (Grand Canyon NP: 5,321,314; Acadia NP: 4,181,850; Death Valley NP: 1,304,946), complemented by a clean green column bar chart titled '2021 Visitors by Park'. Data sourced from: irma.nps.gov/Stats/SSRSReports.",
    thumbnail: "assets/images/excel-national-park-visitors.png",
    technologies: ["Microsoft Excel", "PivotTable Analytics", "Excel Bar Charts", "Government Open Data", "Tourism Analytics", "Data Storytelling"],
    metrics: [
      { label: "Total 2021 Visits", value: "11.6M" },
      { label: "Top Park", value: "Grand Canyon" },
      { label: "Parks Analyzed", value: "5 Top NPS" }
    ],
    features: [
      "Processed NPS 2021 Fiscal Year visitation dataset from official government source (irma.nps.gov)",
      "Built dual-table layout: Visitor Category breakdown table and Top 5 National Parks ranking table",
      "Categorized 9 distinct visit types including Recreation Visits, Backcountry, Concessioner, and Overnight stays",
      "Created a professional bar chart titled '2021 Visitors by Park' with green series color and formatted axes",
      "Structured tabular data with bold totals row and professional typography for executive reporting",
      "Source-cited data from National Park Service 2021 Fiscal Year Visitation Report for academic credibility"
    ],
    architecture: "NPS open dataset ingestion -> Excel table structuring -> Visitor category aggregation -> Park-level ranking sort -> Bar chart visualization with axis labels -> Executive report layout.",
    liveUrl: "https://github.com/waita-muthama",
    githubUrl: "https://github.com/waita-muthama",
    featured: false
  },
  {
    id: "excel-sales-inventory-retail",
    title: "Sales & Inventory Retail Analytics Dashboard — Excel",
    category: "excel",
    categoryLabel: "Excel Data Analytics",
    badge: "Excel Retail Dashboard",
    shortDescription: "Retail analytics dashboard tracking 10,820 units sold across 11 product categories with $2.74M estimated inventory value, featuring a Sales Volume by Product bar chart.",
    longDescription: "Designed a comprehensive retail sales and inventory analytics dashboard in Microsoft Excel. The dashboard tracks 10,820 total units sold and 60,690 inventory units across 11 clothing categories (Boots, Sweaters, Sweatshirts, Hats, Jackets, Scarfs, Shorts, T-Shirts, Sandals, Tank Tops, Polo Shirts). Estimated inventory value is computed as Price/Unit × Inventory Units, yielding a total of $2,744,993.10. The KPI header row displays Total Units Sold, Inventory Units, Estimated Inventory Value, and Items Analyzed. A bar chart (Sales Volume by Product) reveals T-Shirts as the top-selling item (2,250 units) and Boots as lowest (130 units).",
    thumbnail: "assets/images/excel-sales-inventory-retail.png",
    technologies: ["Microsoft Excel", "Retail Analytics", "Inventory Modeling", "KPI Dashboards", "Excel Bar Charts", "Sales Performance Tracking"],
    metrics: [
      { label: "Units Sold", value: "10,820" },
      { label: "Inventory Value", value: "$2.74M" },
      { label: "Products Analyzed", value: "11 Items" }
    ],
    features: [
      "Built a KPI header row showing Total Units Sold (10,820), Inventory Units (60,690), Est. Inventory Value ($2,744,993.10), and Items Analyzed (11)",
      "Constructed a product table with Sales Units, Inventory Units, Price/Unit, and calculated Inventory Value columns",
      "Applied formula: Inventory Value = Listed Unit Price × Inventory Units across all 11 product rows",
      "Identified T-Shirts as top seller (2,250 units, $224,887.50 value) and Jackets as highest-value inventory ($779,940.00)",
      "Created a professional Sales Volume by Product bar chart with product labels on X-axis and Units Sold on Y-axis",
      "Applied branded red-maroon header palette and conditional bold totals row for executive-grade reporting"
    ],
    architecture: "Product sales & inventory data entry -> Unit price lookup integration -> Inventory value formula computation -> KPI metric extraction -> Bar chart generation -> Dashboard formatting.",
    liveUrl: "https://github.com/waita-muthama",
    githubUrl: "https://github.com/waita-muthama",
    featured: true
  },
  {
    id: "portfolio-website-fullstack",
    title: "Professional Portfolio Website — Full-Stack Development (This Site)",
    category: "software",
    categoryLabel: "Software Development",
    badge: "Full-Stack Web Development",
    shortDescription: "Designed and built this entire professional portfolio from scratch using HTML5, CSS3, Vanilla JavaScript, and Node.js — featuring dynamic project filtering, modal views, and a live server.",
    longDescription: "Architected and developed this full-stack professional portfolio website end-to-end. The frontend features a custom design system with Outfit + Plus Jakarta Sans typography, CSS custom properties, animated scroll interactions, smooth section spy navigation, and a dynamic project grid with category filtering and full-text search. The backend uses a lightweight Node.js HTTP server serving static assets with proper MIME types. Projects are managed through a centralized JavaScript data module enabling easy additions without touching HTML. Responsive across all screen sizes.",
    thumbnail: "assets/images/jeremiah-profile.jpg",
    technologies: ["HTML5 & CSS3", "Vanilla JavaScript (ES6+)", "Node.js HTTP Server", "CSS Custom Properties", "Responsive Design", "Git & GitHub"],
    metrics: [
      { label: "Pages Built", value: "2 (Portfolio + CV)" },
      { label: "Projects Showcased", value: "16+ Projects" },
      { label: "Performance", value: "100 Lighthouse" }
    ],
    features: [
      "Custom CSS design system with white-background aesthetic, gradient accents, and Outfit display typography",
      "Dynamic project grid powered by a JavaScript data module — filter by category, search by keyword",
      "Modal project deep-dive with tech badges, metrics, features list, and architecture overview",
      "Scroll-spy active navigation, animated counters, and smooth section transitions",
      "Responsive mobile-first layout with hamburger menu and touch-optimized interactions",
      "Node.js static file server with MIME type handling for local and deployment hosting",
      "ATS-optimized HTML resume page (resume.html) with print-friendly CSS"
    ],
    architecture: "HTML5 semantic layout -> CSS custom property design system -> JS modules (main.js, projects.js, projects-data.js) -> Node.js HTTP server -> Git version control with commit history.",
    liveUrl: "http://localhost:3000",
    githubUrl: "https://github.com/waita-muthama",
    featured: true
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = projectsData;
}
