import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "DevCollab",
    shortDescription: "A real-time collaborative platform for developer teams",
    description:
      "DevCollab is a full-stack collaborative workspace built for engineering teams. It enables real-time code sharing, project management, and async communication — all within a single, unified interface.",
    tags: ["Next.js", "TypeScript", "Spring Boot", "PostgreSQL", "WebSockets", "Redis"],
    featured: true,
    coverImage: "/projects/devcollab-cover.jpg",
    githubUrl: "https://github.com/aprajitakashyap/devcollab",
    liveUrl: "https://devcollab.example.com",
    date: "2025",
    overview:
      "DevCollab was born out of frustration with fragmented developer tooling. Teams use too many disconnected tools — chat, issue trackers, code review, documentation — and the context-switching hurts productivity. DevCollab unifies these workflows into a single platform.",
    problemStatement:
      "Developer teams lose significant time switching between multiple disconnected tools. There was no single platform combining real-time collaboration, task management, and code discussion in a cohesive way.",
    motivation:
      "Having experienced this fragmentation first-hand during internship and side projects, I wanted to build a tool that I would genuinely want to use every day.",
    architecture:
      "The system uses a Next.js frontend with a Spring Boot microservices backend. WebSockets (via Socket.IO) handle real-time features. PostgreSQL stores structured data, Redis manages sessions and caching.",
    techDecisions:
      "Chose Spring Boot for the backend due to its maturity for enterprise-grade reliability. Next.js was chosen for its server-side rendering capabilities which improve initial load performance.",
    challenges:
      "The hardest challenge was implementing conflict-free real-time editing. I explored OT (Operational Transformation) before settling on a simpler append-only CRDT approach that worked well for our use case.",
    failedAttempts:
      "Initially tried building on top of Firestore for real-time sync, but the query limitations made it unworkable for complex filtering. Migrated to PostgreSQL + custom WebSocket layer.",
    tradeoffs:
      "Chose reliability over bleeding-edge technology. WebSockets over WebRTC for simplicity. PostgreSQL over a document store for structured relational data integrity.",
    finalSolution:
      "A clean microservices architecture where each service owns its domain. The frontend connects via a single API gateway that routes to the appropriate service.",
    performanceMetrics:
      "p99 latency under 150ms for real-time events. Frontend LCP under 1.8 seconds on a 4G connection. Supports 500 concurrent WebSocket connections per server instance.",
    lessonsLearned:
      "Building real-time systems is significantly more complex than batch systems. Testing becomes harder when time is a variable. Invest heavily in observability from day one.",
    futureImprovements:
      "AI-powered code review suggestions, GitHub/GitLab integration, and a mobile companion app.",
  },
  {
    id: "2",
    title: "HealthLens",
    shortDescription: "AI-powered medical image analysis for early detection",
    description:
      "HealthLens uses computer vision and deep learning to assist radiologists in early detection of anomalies in chest X-rays. Built with a Python/FastAPI backend and React frontend.",
    tags: ["Python", "FastAPI", "TensorFlow", "React", "PostgreSQL", "Docker"],
    featured: false,
    coverImage: "/projects/healthlens-cover.jpg",
    githubUrl: "https://github.com/aprajitakashyap/healthlens",
    date: "2024",
    overview:
      "HealthLens assists medical professionals by flagging potential anomalies in chest X-rays using a fine-tuned convolutional neural network. The tool is designed as a second opinion, not a replacement for expert radiologists.",
    problemStatement:
      "Radiologist shortages in rural regions mean X-rays often go unreviewed for days. HealthLens provides an automated preliminary screening to prioritize urgent cases.",
    motivation:
      "Inspired by a hackathon challenge focused on AI in healthcare. The project evolved from a weekend prototype into a fully deployable system.",
    architecture:
      "Python FastAPI backend serves the inference API. The CNN model (based on DenseNet-121) was fine-tuned on the NIH Chest X-ray dataset. A React frontend displays results with heatmap overlays using Grad-CAM.",
    techDecisions:
      "FastAPI over Flask for async capabilities and automatic OpenAPI documentation. Docker for reproducible deployment across different environments.",
    challenges:
      "Class imbalance in the training data was severe — healthy X-rays vastly outnumber anomalous ones. Addressed with weighted loss functions and data augmentation.",
    failedAttempts:
      "First attempt used a simple VGG-16 architecture which had poor sensitivity on rare conditions. Switched to DenseNet-121 after reviewing the CheXNet paper.",
    tradeoffs:
      "Model accuracy vs. inference speed. Chose a slightly less accurate but 3x faster model variant for real-time clinical use.",
    finalSolution:
      "End-to-end system with automated preprocessing, inference, and Grad-CAM explanation generation. Deployed as a Docker container.",
    performanceMetrics:
      "AUC of 0.87 on the NIH test set. Inference time under 2 seconds per image on CPU. Grad-CAM overlay generation in under 500ms.",
    lessonsLearned:
      "Model performance metrics alone don't capture clinical utility. Working closely with domain experts is essential when building AI tools for high-stakes domains.",
    futureImprovements:
      "DICOM format support, integration with hospital PACS systems, and a federated learning approach to improve the model without sharing patient data.",
  },
  {
    id: "3",
    title: "Cartify",
    shortDescription: "High-performance e-commerce API with intelligent inventory management",
    description:
      "Cartify is a robust RESTful e-commerce backend built with Spring Boot. It handles high-throughput order processing, real-time inventory updates, and integrates with Stripe for payments.",
    tags: ["Spring Boot", "Java", "PostgreSQL", "Redis", "Stripe", "Docker", "AWS"],
    featured: false,
    coverImage: "/projects/cartify-cover.jpg",
    githubUrl: "https://github.com/aprajitakashyap/cartify",
    date: "2024",
    overview:
      "Cartify provides a production-grade e-commerce API that can handle flash sale events — the hardest use case for inventory systems. It ensures consistency under high concurrency without sacrificing throughput.",
    problemStatement:
      "Flash sales create thundering herd problems: thousands of concurrent users attempting to purchase limited inventory simultaneously. Most simple implementations fail under this load.",
    motivation:
      "I wanted to deeply understand distributed systems concepts like optimistic locking, cache-aside patterns, and event-driven architecture by building something realistic.",
    architecture:
      "Spring Boot monolith with clear domain boundaries. Redis for inventory caching with write-through. PostgreSQL with row-level locking for consistent stock updates. Stripe webhooks for payment confirmation.",
    techDecisions:
      "Redis over Memcached for its richer data structures (sorted sets for leaderboards). Optimistic locking over pessimistic locking to improve throughput under normal load.",
    challenges:
      "Ensuring inventory never goes negative under concurrent load without creating a bottleneck. Solved with Redis atomic operations (DECR) as the first line of defense with database-level constraint as a safety net.",
    failedAttempts:
      "First used database-only pessimistic locking which caused lock contention and dramatic throughput drops under load. Introduced Redis as the hot path which improved things significantly.",
    tradeoffs:
      "Consistency vs. availability. Chose eventual consistency for product listings (cached, possibly stale) but strict consistency for stock reservation and payment processing.",
    finalSolution:
      "Two-phase inventory reservation: Redis reserve → payment processing → PostgreSQL commit. If payment fails, the Redis reservation is released.",
    performanceMetrics:
      "10,000 concurrent requests handled without overselling. p95 order placement under 300ms. 99.9% inventory accuracy during load tests.",
    lessonsLearned:
      "Cache invalidation is genuinely hard. Designing for failure (what happens if Redis is unavailable?) is as important as designing for success.",
    futureImprovements:
      "Event sourcing for order history, GraphQL API layer, and a vendor dashboard frontend.",
  },
  {
    id: "4",
    title: "FlowBoard",
    shortDescription: "A minimal Kanban app with AI-powered task prioritization",
    description:
      "FlowBoard is a clean, minimal Kanban-style project management tool. It uses the OpenAI API to intelligently suggest task priorities and detect blocked work items based on description analysis.",
    tags: ["React", "TypeScript", "Node.js", "OpenAI API", "MongoDB", "TailwindCSS"],
    featured: false,
    coverImage: "/projects/flowboard-cover.jpg",
    githubUrl: "https://github.com/aprajitakashyap/flowboard",
    liveUrl: "https://flowboard.example.com",
    date: "2025",
    overview:
      "FlowBoard reduces project management overhead by automatically surfacing the most important tasks. The AI layer reads task descriptions and dependencies to suggest priority ordering — no manual triaging needed.",
    problemStatement:
      "Teams spend too much time in backlog grooming meetings. A well-designed AI layer can automate much of the prioritization logic, freeing engineers to focus on actual work.",
    motivation:
      "After spending an embarrassing number of hours in sprint planning meetings, I decided to build something that would make the process faster and more data-driven.",
    architecture:
      "React SPA with a Node.js/Express backend. MongoDB stores board state. OpenAI API integration runs server-side with structured output parsing.",
    techDecisions:
      "MongoDB for flexible document storage (task schema evolves frequently). OpenAI function calling for structured AI responses rather than free-form text parsing.",
    challenges:
      "AI suggestions needed to feel helpful rather than annoying. Added a confidence score threshold — only show AI suggestions when confidence is above 0.75.",
    failedAttempts:
      "Initially showed AI suggestions inline in the task card which cluttered the UI. Moved to a sidebar panel that users can collapse.",
    tradeoffs:
      "Real-time AI vs. on-demand. Chose on-demand (triggered by user) to control costs and latency.",
    finalSolution:
      "A clean Kanban interface with an opt-in AI sidebar that provides priority suggestions and identifies blocked tasks based on dependency analysis.",
    performanceMetrics:
      "AI suggestion generation under 1.5 seconds. Zero-downtime drag-and-drop with optimistic updates.",
    lessonsLearned:
      "AI features need to earn user trust gradually. Start with suggestions, not automatic actions. User control is paramount.",
    futureImprovements:
      "GitHub Issues sync, team velocity tracking, and sprint planning automation.",
  },
];
