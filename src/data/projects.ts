import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "InsightLoop",
    shortDescription: "AI-Powered Product Intelligence Platform",
    description:
      "InsightLoop is an AI-powered platform for collecting, processing, and analyzing customer feedback from multiple data sources into structured, actionable insights using interactive dashboards.",
    tags: ["React.js", "Node.js", "Express.js", "PostgreSQL", "JWT", "Render", "Prompt Engineering"],
    featured: true,
    coverImage: "/projects/devcollab-cover.jpg",
    githubUrl: "https://github.com/aprajitakashyap/InsightLoop",
    date: "Jul 2026 – Present",
    overview:
      "InsightLoop simplifies feedback synthesis for product teams by aggregating customer inputs, running AI-based analysis, and visualizing insights in interactive dashboards.",
    problemStatement:
      "Customer feedback is usually scattered across channels and difficult to analyze manually at scale.",
    motivation:
      "Designed to leverage prompt engineering and AI-assisted workflows to generate structured product intelligence instantly.",
    architecture:
      "Modular Node.js and Express.js backend with PostgreSQL database, JWT authentication, and React frontend hosted on Render.",
    techDecisions:
      "Used PostgreSQL for reliable relational feedback querying and JWT for secure multi-tenant user authentication.",
    challenges:
      "Structuring unstructured qualitative feedback into consistent JSON categories using prompt engineering.",
    failedAttempts:
      "Initial simple keyword matching missed contextual feedback nuance. Upgraded to prompt-engineered LLM parsing.",
    tradeoffs:
      "Chose batch AI processing for aggregated feedback to balance throughput and API cost efficiency.",
    finalSolution:
      "End-to-end feedback management application featuring secure authentication, RESTful APIs, and interactive AI dashboards.",
    performanceMetrics:
      "Sub-second API response times and structured insight generation across bulk feedback items.",
    lessonsLearned:
      "Prompt engineering combined with structured output schemas vastly improves reliability in production AI applications.",
    futureImprovements:
      "Multi-platform integration plugins (Slack, Zendesk, Jira) and real-time sentiment alert notifications.",
  },
  {
    id: "2",
    title: "MarketMesh",
    shortDescription: "Hyperlocal Reverse Auction Marketplace",
    description:
      "MarketMesh is a real-time reverse auction marketplace enabling local buyers to post RFQs and connect with nearby vendors using location-based discovery and live bidding.",
    tags: ["Node.js", "Express.js", "MongoDB Atlas", "Socket.io", "JWT", "Postman", "GeoJSON"],
    featured: false,
    coverImage: "/projects/healthlens-cover.jpg",
    githubUrl: "https://github.com/aprajitakashyap/MarketMesh",
    date: "Jan 2026 – May 2026",
    overview:
      "MarketMesh empowers buyers to submit Requests for Quotation (RFQs) and receive real-time bids from local sellers sorted by geographic proximity.",
    problemStatement:
      "Traditional marketplaces lack dynamic reverse auction pricing and real-time hyperlocal vendor matching.",
    motivation:
      "Built to provide small businesses and local vendors a competitive, transparent digital bidding channel.",
    architecture:
      "Node.js/Express REST APIs with MongoDB Atlas storing GeoJSON spatial data, paired with Socket.io for WebSocket reverse auction bidding.",
    techDecisions:
      "Used MongoDB GeoJSON queries for efficient geospatial vendor discovery within specific radiuses.",
    challenges:
      "Managing concurrent live bids across multiple active reverse auctions without state drift.",
    failedAttempts:
      "Polling HTTP endpoints caused heavy server load during active auctions. Refactored to Socket.io event channels.",
    tradeoffs:
      "Sacrificed full ACID cross-collection transactions for MongoDB's fast geospatial query capabilities.",
    finalSolution:
      "High-performance real-time reverse auction system with JWT authentication and automated API verification in Postman.",
    performanceMetrics:
      "Real-time bid propagation latency under 100ms over WebSockets.",
    lessonsLearned:
      "WebSocket state synchronization requires careful disconnect handling and reconnect recovery routines.",
    futureImprovements:
      "Integrated escrow payment gateways and automated vendor rating algorithms.",
  },
];
