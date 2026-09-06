/**
 * Portfolio Data Configuration for Haylemikael Gurba Goshe
 * 
 * Centralized, verifiable data layer for European Master's degree admissions committees,
 * academic evaluators, and technical reviewers.
 * 
 * Rules:
 * - Authentic information only (No fabricated stats, senior claims, or fake testimonials).
 * - Clear placeholders for customizable external URLs.
 */

export const portfolioData = {
  personal: {
    fullName: "Haylemikael Gurba Goshe",
    shortName: "Haylemikael",
    headline: "Computer Science Graduate | Software & AI Enthusiast",
    rotatingTitles: [
      "Computer Science Graduate",
      "Aspiring AI Engineer",
      "Software Developer",
      "Machine Learning Enthusiast",
      "Future Master's Student"
    ],
    summary: "Computer Science graduate with a strong academic foundation in algorithms, programming, databases, artificial intelligence, software engineering, computer networks, and operating systems. Interested in building practical software solutions and pursuing advanced study in Artificial Intelligence, Data Processing, and Software Systems.",
    location: "Ethiopia (Open to European Master's Studies)",
    email: "haylemikaelgurba2003@gmail.com",
    github: "https://github.com/hlmegnaw",
    linkedin: "https://www.linkedin.com/in/haylemikael-gurba-goshe-312209434",
    cvPath: "/Haylemikael_Gurba_Goshe_CV.pdf", // Path to Europass CV PDF in public folder
    aboutNarrative: {
      paragraphs: [
        "I hold a Bachelor of Science in Computer Science from Arba Minch University, where I built a rigorous foundation in computational theory, algorithms, software engineering principles, and database systems.",
        "My enthusiasm lies at the convergence of practical software development and intelligent data-driven systems. Throughout my undergraduate journey and personal projects, I have continually bridged theoretical concepts with real-world implementation—progressing from core Java desktop engineering to full-stack web applications and relational data modeling.",
        "During my internship at the Commercial Bank of Ethiopia, I contributed to mission-critical IT infrastructure, refining my hardware and software troubleshooting capabilities, technical support methodology, and professional communication within a secure enterprise setting.",
        "I am currently preparing for Master's degree studies in Europe focused on Artificial Intelligence, Data Processing, and Software Systems. My goal is to expand my research and technical depth to engineer reliable, scalable, and intelligent software that addresses complex real-world challenges."
      ],
      coreStrengths: [
        "Rigorous Computer Science Fundamentals",
        "Practical Project-Based Problem Solving",
        "Clean, Modular Code Architecture",
        "Continuous Technical Learning & Adaptability"
      ]
    }
  },

  education: {
    degree: "Bachelor of Science in Computer Science",
    institution: "Arba Minch University",
    location: "Arba Minch, Ethiopia",
    graduationYear: "2024",
    cgpa: "3.54 / 4.00",
    academicInterests: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Processing",
      "Software Engineering",
      "Database Systems",
      "Algorithms & Complexity",
      "Computer Systems & Networks",
      "Natural Language Processing"
    ],
    keyCourses: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java)",
      "Database Systems & SQL",
      "Artificial Intelligence Principles",
      "Software Engineering & Design Patterns",
      "Computer Networks & Protocols",
      "Operating Systems & Architecture",
      "Web Programming & Application Development"
    ]
  },

  experience: [
    {
      id: "cbe-internship",
      organization: "Commercial Bank of Ethiopia (CBE)",
      position: "IT Support & Systems Maintenance Intern",
      location: "Ethiopia",
      period: "July – September 2025",
      type: "Academic Internship",
      description: "Delivered hands-on technical support and IT systems maintenance within a demanding corporate banking environment, ensuring operational readiness of hardware, peripherals, and internal workstations.",
      responsibilities: [
        "Diagnosed and resolved hardware malfunctions, component failures, and peripheral issues across desktop computers and workstations.",
        "Performed software maintenance, operating system configuration, driver updates, and critical workstation diagnostics.",
        "Conducted printer maintenance, hardware repair, network printer configuration, and troubleshooting for branch operations.",
        "Provided direct technical support to branch staff, assisting with application workflows and resolving day-to-day software and hardware bottlenecks.",
        "Assisted with local network connectivity checks, structured cabling inspection, and basic IT network troubleshooting.",
        "Adhered strictly to enterprise compliance, security protocols, and operational standards within a high-security banking infrastructure."
      ],
      technologies: [
        "Hardware Diagnostics",
        "Windows OS & Systems Configuration",
        "Printer Maintenance & Networking",
        "Troubleshooting Tools",
        "User Technical Support",
        "Banking IT Environment"
      ]
    }
  ],

  projects: [
    {
      id: 1,
      number: "01",
      total: "03",
      title: "Student Management System",
      category: "Software Engineering",
      subCategory: "Java Application",
      technologies: ["Java", "OOP", "Application Logic", "Data Validation", "File I/O"],
      shortDescription: "A Java-based desktop application developed to systematically manage student records, demonstrate core Object-Oriented Programming principles, and ensure robust institutional data organization.",
      status: "Completed",
      isLive: false,
      deployedWithNetlify: false,
      github: "[Add GitHub URL]",
      liveDemo: null,
      linkedin: "[Add LinkedIn Post URL]",
      overview: "A desktop software application engineered in Java designed to systematically organize, track, and manage student academic records, course enrollments, and institutional information through a structured and maintainable architecture.",
      problem: "Academic departments and educational coordinators frequently encounter administrative bottlenecks when tracking student records through paper logs or unstructured spreadsheets. Common problems include duplicate data entry, indexing difficulties, and lack of systematic data validation.",
      solution: "Engineered a modular Java application adhering strictly to Object-Oriented principles. Implemented custom domain classes for Students, Courses, and Academic Records, complete with input validation and persistent storage mechanisms.",
      technicalFocus: [
        "Java Core Programming & Syntax",
        "Object-Oriented Design (Encapsulation, Inheritance, Polymorphism)",
        "Application Logic & State Management",
        "Data Validation & Error Handling",
        "Clean Software Architecture"
      ],
      keyFeatures: [
        "Student record creation, search, updates, and deletion (CRUD operations)",
        "Course enrollment tracking and academic record association",
        "Structured validation logic preventing duplicate identifiers and invalid input formats",
        "Modular class hierarchy separating user interface logic from core business logic"
      ],
      technicalChallenges: "Structuring the class hierarchy to maximize code reuse while maintaining strong encapsulation across domain entities. Ensuring that all user inputs are defensively validated before mutations are applied to stored data.",
      whatILearned: "Deepened practical mastery of Object-Oriented Programming principles, modular application design, error handling patterns, and defensive programming in Java."
    },
    {
      id: 2,
      number: "02",
      total: "03",
      title: "Full-Stack Web Application",
      category: "Full-Stack",
      subCategory: "Web Development / Full-Stack",
      technologies: ["React", "JavaScript", "Node.js", "Express", "Database / SQL", "REST API", "Tailwind CSS"],
      shortDescription: "A full-stack web application developed to demonstrate practical experience in frontend architecture, server-side API integration, database interaction, and automated deployment pipelines.",
      status: "Preparing for deployment", // Set to "Live" once deployment URL is live
      isLive: false,
      deployedWithNetlify: true, // Will show "DEPLOYED WITH NETLIFY" badge when liveDemo URL is set
      github: "[Add GitHub URL]",
      liveDemo: "[Add Netlify URL]",
      linkedin: "[Add LinkedIn Post URL]",
      overview: "A complete multi-tier web application developed across frontend and backend layers, incorporating modern component-driven UI architecture, RESTful API endpoints, and structured database querying.",
      problem: "Modern web services demand responsive, accessible user interfaces backed by performant server endpoints capable of processing asynchronous requests reliably and maintaining clean state synchronization.",
      solution: "Constructed a decoupled client-server architecture with an interactive frontend communicating via structured REST endpoints with a dedicated backend service, designed for predictable continuous deployment on Netlify.",
      technicalFocus: [
        "Frontend Component Architecture",
        "Backend RESTful API Design",
        "Database Integration & Query Processing",
        "Responsive & Accessible UI Design",
        "Asynchronous Request Handling & State Management",
        "Deployment Pipeline Configuration (Netlify)"
      ],
      keyFeatures: [
        "Modular, component-based frontend with responsive design across mobile and desktop",
        "RESTful API endpoints handling structured client requests with JSON payloads",
        "Database interaction supporting reliable data querying and persistence",
        "Optimized production build configuration tailored for automated hosting platforms"
      ],
      technicalChallenges: "Coordinating asynchronous state transitions between the client interface and server endpoints, handling network latency scenarios gracefully, and configuring cross-origin resource sharing (CORS).",
      whatILearned: "Acquired hands-on experience in architecting multi-tier web systems, designing predictable API contracts, managing client state, and orchestrating deployment workflows."
    },
    {
      id: 3,
      number: "03",
      total: "03",
      title: "Online Auction Platform",
      category: "Full-Stack",
      subCategory: "Full-Stack Web Development",
      technologies: ["React", "JavaScript", "Node.js", "Express", "Database Systems", "REST API", "Tailwind CSS"],
      shortDescription: "A full-stack online auction platform designed to provide a digital environment for listing items, tracking auction lifecycle states, and facilitating structured auction data workflows.",
      status: "Preparing for publication", // Set to "Live" once live URL is active
      isLive: false,
      deployedWithNetlify: false,
      github: "[Add GitHub URL]",
      liveDemo: "[Add hosting URL]",
      linkedin: "[Add LinkedIn Post URL]",
      overview: "A full-stack digital platform built around the domain of online auctions, facilitating structured cataloging of items, auction lifecycle status management, and organized participant workflows.",
      problem: "Auction platforms require unambiguous state management, clear item cataloging, time-bounded listing lifecycles, and structured participant feedback to maintain credibility and operational clarity.",
      solution: "Designed and engineered an auction workflow platform featuring modular item catalogs, transparent auction lifecycle indicators (Active, Completed, Pending), and reliable database persistence.",
      technicalFocus: [
        "Full-Stack Web Architecture",
        "Frontend Interface Development & Ergonomics",
        "Backend Application Logic & Routing",
        "Database Interaction & Relational Modeling",
        "Auction Lifecycle State Management",
        "Production Readiness & Web Hosting"
      ],
      keyFeatures: [
        "Item listing creation with detailed item descriptions and categorization",
        "Auction status tracking and lifecycle management",
        "Structured database persistence for listings and associated metadata",
        "Clean, responsive interface built for accessible cross-device interaction"
      ],
      technicalChallenges: "Modeling auction state progression reliably while keeping frontend views synchronized with backend records. Designing a clean relational schema to support item attributes and status transitions without redundant data.",
      whatILearned: "Strengthened practical expertise in domain-driven modeling, relational data architecture, time-sensitive application state, and comprehensive full-stack engineering."
    }
  ],

  skills: {
    categories: [
      {
        name: "Programming Languages",
        description: "Core languages utilized in coursework, problem solving, and software implementations.",
        skills: [
          { name: "Java", level: "Primary Language", note: "Object-Oriented Programming, Application Architecture, Data Structures" },
          { name: "Python", level: "Proficient", note: "Scripting, Algorithms, Machine Learning Foundations, Data Analysis" },
          { name: "JavaScript", level: "Proficient", note: "ES6+, Modern Frontend Logic, Asynchronous Programming" },
          { name: "C / C++", level: "Academic Foundation", note: "Memory Management, Low-level Systems, Algorithmic Concepts" }
        ]
      },
      {
        name: "Web Development",
        description: "Modern technologies for responsive, accessible, and structured web applications.",
        skills: [
          { name: "React", level: "Frontend Framework", note: "Component Architecture, Hooks, State Management, SPA" },
          { name: "HTML5 & CSS3", level: "Core Standards", note: "Semantic Structure, Modern Layouts (Flexbox/Grid), Accessibility" },
          { name: "Tailwind CSS", level: "Styling", note: "Utility-first Design Systems, Responsive Layouts, Dark Mode" },
          { name: "Node.js & Express", level: "Backend Logic", note: "Server-side API Development, Middleware, Routing" },
          { name: "RESTful APIs", level: "Integration", note: "API Contract Design, JSON serialization, HTTP Methods" }
        ]
      },
      {
        name: "Databases & Data Management",
        description: "Relational database modeling, query design, and data integrity.",
        skills: [
          { name: "SQL", level: "Query Language", note: "Complex Queries, Joins, Aggregations, Transactions" },
          { name: "MySQL", level: "Relational DBMS", note: "Schema Design, Primary/Foreign Keys, Indexing" },
          { name: "PostgreSQL", level: "Relational DBMS", note: "Structured Storage, Relational Integrity, Query Optimization" },
          { name: "Database Design", level: "Methodology", note: "Entity-Relationship (ER) Modeling, Normalization (1NF-BCNF)" }
        ]
      },
      {
        name: "Software Engineering",
        description: "Methodologies and tools for building maintainable, structured software.",
        skills: [
          { name: "Object-Oriented Programming", level: "Core Paradigm", note: "Encapsulation, Inheritance, Polymorphism, Abstraction" },
          { name: "Git & GitHub", level: "Version Control", note: "Repository Management, Branching, Commits, Collaboration" },
          { name: "Software Design Principles", level: "Architecture", note: "Modular Architecture, Separation of Concerns, Clean Code" },
          { name: "Testing & Debugging", level: "Quality Assurance", note: "Unit Testing, Defensive Programming, Systematic Debugging" }
        ]
      },
      {
        name: "Systems & Networking",
        description: "Operating systems, network fundamentals, and hardware diagnostics.",
        skills: [
          { name: "Computer Networks", level: "Core Foundation", note: "TCP/IP, OSI Model, Routing, Subnetting, Network Protocols" },
          { name: "Operating Systems", level: "Core Foundation", note: "Processes, Memory Allocation, Concurrency, File Systems" },
          { name: "Linux / Windows Systems", level: "Administration", note: "System Utilities, CLI Navigation, Configuration" },
          { name: "Hardware & IT Support", level: "Practical Practice", note: "Component Troubleshooting, Peripherals, Diagnostics (CBE Experience)" }
        ]
      }
    ]
  },

  certifications: [
    {
      id: "cert-1",
      title: "Full-Stack Software Development Foundations",
      organization: "Academic / Professional Training",
      date: "2024",
      credentialId: "[Add Credential ID if applicable]",
      credentialUrl: null,
      description: "Structured curriculum covering full-stack web architecture, API integration, and database management."
    },
    {
      id: "cert-2",
      title: "Object-Oriented Programming in Java",
      organization: "Arba Minch University / Computer Science Department",
      date: "2023",
      credentialId: "[Add Credential ID if applicable]",
      credentialUrl: null,
      description: "Comprehensive coursework and laboratory evaluation in advanced OOP paradigms, data structures, and algorithmic implementation."
    }
  ],

  futureInterests: {
    sectionTitle: "Where I Want to Go Next",
    subtitle: "Academic Ambitions & Master's Degree Focus",
    statement: "I have built a strong Computer Science foundation and aim to deepen it through Master's-level study and practical research in Europe. I am passionate about tackling foundational computational problems and engineering scalable, intelligent systems.",
    areas: [
      {
        title: "Artificial Intelligence & Machine Learning",
        description: "Deepening theoretical and practical foundations in neural models, predictive systems, and intelligent agent architectures.",
        relevance: "Advancing from foundational CS algorithms to modern probabilistic and statistical learning models."
      },
      {
        title: "Data Processing & High-Throughput Systems",
        description: "Exploring scalable data pipelines, distributed storage, and efficient real-time data transformation techniques.",
        relevance: "Addressing complex data challenges encountered in modern scientific, industrial, and financial environments."
      },
      {
        title: "Software Systems & Architecture",
        description: "Mastering advanced software design patterns, concurrent systems, cloud virtualization, and dependable distributed systems.",
        relevance: "Constructing high-assurance, fault-tolerant platforms for mission-critical applications."
      },
      {
        title: "Natural Language Processing",
        description: "Investigating computational linguistics, text representation, transformer architectures, and information retrieval.",
        relevance: "Building bridges between human language data and structured computing systems."
      }
    ]
  },

  cv: {
    title: "Curriculum Vitae",
    format: "Europass Standard CV",
    description: "Explore my complete academic background, course evaluations, technical projects, and institutional experiences formatted according to European standard CV guidelines.",
    downloadUrl: "/Haylemikael_Gurba_Goshe_CV.pdf", // User will place their actual PDF here
    highlights: [
      "BSc in Computer Science (CGPA: 3.54 / 4.00)",
      "Technical Internship at Commercial Bank of Ethiopia (CBE)",
      "Object-Oriented & Full-Stack Projects with Public Repositories",
      "Ready for European Master's Degree Admissions Evaluation"
    ]
  },

  contact: {
    heading: "Get in Touch",
    subheading: "Academic inquiries, Master's program coordinators, and technical reviewers are welcome to reach out.",
    email: "haylemikaelgurba2003@gmail.com",
    location: "Arba Minch / Addis Ababa, Ethiopia",
    socials: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/haylemikael-gurba-goshe-312209434",
        handle: "Haylemikael Gurba Goshe"
      },
      {
        name: "GitHub",
        url: "https://github.com/hlmegnaw",
        handle: "hlmegnaw"
      },
      {
        name: "Email",
        url: "mailto:haylemikaelgurba2003@gmail.com",
        handle: "haylemikaelgurba2003@gmail.com"
      }
    ]
  }
};
