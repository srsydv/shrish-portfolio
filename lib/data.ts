export const site = {
  name: "Shrish Kumar",
  title: "Backend & Blockchain Developer",
  headline: "I architect the contracts, backends, and rails that move on-chain value.",
  description:
    "Backend and blockchain developer building DeFi vaults, RWA tokenization, and production-grade Web3 infrastructure. Solidity, Ethereum, Node.js.",
  email: "shrishofficial18@gmail.com",
  phone: "+91 70078 69915",
  phoneHref: "+917007869915",
  location: "India",
  url: "https://shrishkumar.dev",
  resume: "/Shrish-Resume.pdf",
  availability: "Currently at Big Ladder",
  socials: {
    github: "https://github.com/srsydv",
    linkedin: "https://www.linkedin.com/in/srsydv",
    x: "https://x.com/srsydv",
  },
} as const;

export const nav = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
] as const;

export const stats = [
  { value: "04+", label: "Years shipping Web3" },
  { value: "10", label: "Engineers mentored" },
  { value: "04", label: "Live products shipped" },
  { value: "IIIT", label: "Manipur · CSE" },
] as const;

export const about = {
  kicker: "The brief",
  paragraphs: [
    "I am a backend and blockchain developer who lives in the layer most people never see — the vaults, the settlement logic, the APIs that keep a protocol honest when real money is on the line.",
    "From ERC-4626 yield systems to RWA marketplaces and tokenized property rails, I lead architecture, write Solidity, and ship the Node.js backends that keep on-chain events in sync with the world off-chain.",
    "I currently lead Web2 and Web3 product engineering at Big Ladder, after four years at Pandora Finance building and mentoring across DeFi, RWA, and marketplace infrastructure.",
  ],
};

export const experience = [
  {
    id: "big-ladder",
    role: "Backend & Blockchain Developer",
    company: "Big Ladder",
    period: "Mar 2026 — Present",
    location: "Remote",
    current: true,
    points: [
      "Lead design, development, and deployment of Web2 and Web3 applications end to end.",
      "Own architecture across smart contracts, backend services, and production releases.",
    ],
  },
  {
    id: "pandora",
    role: "Backend & Blockchain Developer",
    company: "Pandora Finance",
    period: "Feb 2022 — Feb 2026",
    location: "Remote",
    current: false,
    points: [
      "Led design and deployment of blockchain applications, smart contracts, and decentralized systems — including backend services and a stablecoin stack.",
      "Architected secure, scalable infrastructure with Solidity, Ethereum, Hardhat, Foundry, Node.js, Express, MongoDB, PostgreSQL, and REST APIs.",
      "Managed and mentored a team of 10 developers, owning code reviews and engineering quality.",
      "Worked with product and business stakeholders to ship blockchain solutions aligned with real commercial goals.",
    ],
  },
  {
    id: "dvertex",
    role: "Full Stack Developer Intern",
    company: "Dvertex",
    period: "Oct 2021 — Jan 2022",
    location: "Noida, India",
    current: false,
    points: [
      "Designed and implemented the entire backend system for Safai Mitra.",
    ],
  },
] as const;

export const projects = [
  {
    id: "velvet",
    index: "01",
    name: "Velvet Capital",
    category: "DeFi · Vaults",
    year: "DeFi",
    blurb:
      "Velvet is a decentralized asset-management protocol. Users deposit once into an ERC-4626-style vault; strategies, oracles, and keepers allocate capital, harvest yield, and rebalance without the depositor babysitting positions. I designed and shipped the smart-contract vault system — the share accounting, strategy plugins, fee rails, and the full deposit → invest → harvest → withdraw path.",
    details: [
      "Upgradeable UUPS vault with ERC-4626 share accounting, idle capital, and TVL marked across plugged-in strategies",
      "Aave V3 lending and Uniswap V3 LP strategies, with Chainlink USD oracles, staleness checks, and 0x / whitelisted router swaps",
      "Fee module for time-prorated management fees, realized performance fees, and entry/exit fees — plus owner / manager / keeper roles",
      "Keeper-driven harvest and rebalance bots, then full E2E flows (deposit, invest, harvest, withdraw) on Hardhat mainnet forks",
    ],
    stack: ["Solidity", "Hardhat", "UUPS", "Aave V3", "Uniswap V3", "Chainlink", "ERC-4626"],
    links: [
      { label: "GitHub", href: "https://github.com/srsydv/Velvet-Capital" },
      { label: "Protocol", href: "https://velvet.capital" },
    ],
    accent: "cyan",
  },
  {
    id: "aconomy",
    index: "02",
    name: "Aconomy",
    category: "RWA · Marketplace",
    year: "RWA",
    blurb:
      "Aconomy is an RWA P2P marketplace: watches, art, and collectibles become 1:1 asset-backed Pi-NFTs after a validator inspects them and posts a liquidity bond. I owned the Solidity marketplace contracts — attestation, validation, lending, fees, royalties — and the Node.js backend that onboards assets, validators, and users so the chain and the ops layer stay in sync.",
    details: [
      "On-chain validator network: choose a validator, attest authenticity, stake a liquidity bond, and mint a Pi-NFT into the owner’s wallet",
      "Marketplace primitives for listing, bidding, lending/borrowing against NFTs, installments, default handling, and redemption of the physical asset",
      "Protocol fees, validator royalties, and ERC-20 liquidity attached to tokens — the rails that make a Pi-NFT actually liquid",
      "Express + MongoDB REST APIs for asset onboarding, validator workflows, user management, and marketplace operations behind the live app",
    ],
    stack: ["Solidity", "Hardhat", "NFTs", "Node.js", "Express", "MongoDB"],
    links: [
      { label: "Live", href: "https://aconomy-test.web.app/" },
      { label: "GitHub", href: "https://github.com/Pandora-Finance/aconomy-contract/tree/AuditFixes" },
    ],
    accent: "violet",
  },
  {
    id: "propty",
    index: "03",
    name: "Propty",
    category: "RWA · Real Estate",
    year: "Real estate",
    blurb:
      "Propty is a fractional, tokenized property marketplace — buy, sell, and trade real-estate assets on-chain while a backend keeps users, KYC, listings, and P2P requests honest off-chain. I wrote the Solidity trading contracts and the Node.js/Express API that stores listings, verifies people, and talks to webhooks so settlement is not just a happy-path demo.",
    details: [
      "Smart contracts for asset trading, buy/sell settlement, and marketplace transactions tied to tokenized property",
      "JWT auth, user management, KYC verification, and activity tracking so every actor on the marketplace is identifiable",
      "Property listings with full CRUD, filtering, sorting, pagination, plus P2P requests between buyers and sellers",
      "Dashboard analytics and webhook handlers for integrations, with off-chain state kept in sync with on-chain events",
    ],
    stack: ["Solidity", "Node.js", "Express", "MongoDB", "JWT", "REST"],
    links: [{ label: "GitHub", href: "https://github.com/srsydv/Propty-Backend" }],
    accent: "gold",
  },
  {
    id: "orderworkwear",
    index: "04",
    name: "OrderWorkWear",
    category: "Backend · Commerce",
    year: "Backend",
    blurb:
      "OrderWorkWear is a live UK branded-workwear system: a company locks its logo and placements once, then every branch and orderer can only buy inside those rules. I built the backend — tenancy, auth, catalogue, orders, payments, and fulfillment workers — so the product is an API and a database, not a brochure.",
    details: [
      "Multi-tenant Express APIs for companies, branches, invites, Cognito roles (super-admin, company admin, orderer), and onboarding",
      "Brand-locked garments, order lines, embroidery/sample approvals, rush requests, and Stripe payment + webhook handling",
      "Postgres as the system of record (Drizzle), S3 for assets, and background workers for catalogue import, fulfillment, and tracking",
      "Production on AWS — the same backend that powers the live site at orderworkwear.co.uk",
    ],
    stack: ["Node.js", "Express", "PostgreSQL", "AWS Cognito", "Stripe", "S3"],
    links: [{ label: "Live", href: "https://orderworkwear.co.uk/" }],
    accent: "signal",
  },
] as const;

export const skillGroups = [
  {
    title: "Blockchain",
    level: "Expert",
    items: [
      "Solidity",
      "Ethereum",
      "Web3.js",
      "Ethers.js",
      "Hardhat",
      "Foundry",
      "OpenZeppelin",
      "UUPS Proxy",
      "Stablecoins",
    ],
  },
  {
    title: "Backend",
    level: "Expert",
    items: ["Node.js", "Express.js", "REST APIs", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Languages",
    level: "Expert",
    items: ["JavaScript", "Node.js", "C / C++"],
  },
  {
    title: "Core",
    level: "Expert",
    items: ["Data Structures", "Algorithms", "System Design", "Mentorship"],
  },
] as const;

export const education = {
  degree: "Bachelor of Technology",
  field: "Computer Science and Engineering",
  school: "Indian Institute of Information Technology Manipur",
  period: "Aug 2017 — May 2021",
};

export const roles = [
  "Smart Contracts",
  "DeFi Vaults",
  "RWA Rails",
  "Backend Systems",
  "Protocol Architecture",
] as const;
