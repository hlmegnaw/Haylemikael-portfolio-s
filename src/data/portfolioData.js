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
      "Software Developer",
      "IT & Networking"
    ],
    summary: "Computer Science graduate with a strong foundation in software development, algorithms, databases, and computer systems. I have built practical web and Java applications and gained hands-on experience in networking and IT support through professional internships. My portfolio brings together my academic background, technical skills, professional experience, and projects.   ",
    location: "Ethiopia • Open to International Opportunities",
    email: "haylemikaelgurba2003@gmail.com",
    github: "https://github.com/hlmegnaw",
    linkedin: "https://www.linkedin.com/in/haylemikael-gurba-goshe-312209434",
    cvPath: "/Haylemikael_Gurba_Goshe_CV.pdf", // Path to Europass CV PDF in public folder
    aboutNarrative: {
      paragraphs: [
        "I earned a Bachelor of Science in Computer Science from Arba Minch University, where I developed a strong foundation in computational concepts, algorithms, software engineering, database systems, and computer systems.",
        "My academic foundation has been complemented by practical software development experience through university and personal projects. I have developed full-stack web applications involving frontend interfaces, backend services, databases, authentication, and application design, while strengthening my programming and problem-solving skills.",
        "Beyond software development, I have gained hands-on experience in IT and networking through professional internships, including practical work in computer maintenance, hardware and software troubleshooting, technical support, networking, and IT operations within professional environments.",
        "I am interested in continuing my academic and professional development through postgraduate study and expanding my knowledge across advanced areas of computing. I aim to build on my existing foundation, develop deeper technical expertise, and apply computer science to meaningful real-world problems."
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
    graduationYear: "2026",
    cgpa: "3.54 / 4.00",
    academicInterests: [
      "Artificial Intelligence& Machine Learning",
      "Data Engineering & Analytics",
      "Software Architecture & Systems",
      "Advanced Software Engineering",
      "Distributed & Networked Systems",
      "Cloud Computing & Web Technologies",
      "Advanced Algorithms & Computational Methods",
      "Cybersecurity & Computer Systems",
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
      description: "Gained hands-on experience supporting day-to-day IT operations in a professional banking environment, working with computer hardware, software, peripherals, network connectivity, and user support.",
      responsibilities: [
        "Diagnosed and resolved hardware malfunctions, component issues, and peripheral problems on desktop computers and workstations.",
        "Performed software maintenance, operating system configuration, driver updates, and workstation troubleshooting.",
        "Conducted printer maintenance, hardware repairs, network printer configuration, and troubleshooting.",
        "Provided technical support to staff, helping resolve day-to-day hardware, software, and application-related issues.",
        "Assisted with local network connectivity checks, structured cabling inspection, and basic network troubleshooting.",
        "Followed organizational procedures and security requirements while performing IT support and maintenance tasks."
      ],
      technologies: [
        "Hardware Diagnostics",
        "Windows OS & Systems Configuration",
        "Printer Maintenance & Networking",
        "Software Troubleshooting",
        "User Technical Support",
        "Banking IT Environment"
      ]
    }
  ],

  projects: [
  {
    id: 1,
    number: "01",
    slug: "ecms",
    total: "03",

    title: "Election Control & Management System",
    category: "Full-Stack",
    subCategory: "React / Node.js / MongoDB",

    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Redux Toolkit"
    ],

    shortDescription:
      "A full-stack web-based platform developed to support institutional election management, including user roles, voter and candidate management, election administration, voting, and result handling.",

    status: "Completed",
    isLive: true,
    deployedWithNetlify: false,

    github: "https://github.com/hlmegnaw/ECMS-FullStack",
    liveDemo: "https://ecms-delta.vercel.app/",
    linkedin: "[Add LinkedIn Post URL]",

    overview:
      "A centralized web-based election management system that brings voter management, candidate management, election administration, voting, and result handling into a single platform.",

    problem:
      "Institutional elections can involve multiple administrative tasks, user roles, voter eligibility, candidate information, voting workflows, and result management. Managing these processes separately can make coordination and data handling more difficult.",

    solution:
      "Developed a full-stack election management platform with a React frontend and Node.js/Express backend, supported by MongoDB for data persistence and JWT-based authentication for controlled access to system features.",

    technicalFocus: [
      "Role-Based Access Control",
      "JWT Authentication",
      "RESTful API Integration",
      "Database Design & Data Management",
      "Frontend State Management",
      "Voting Workflow Implementation"
    ],

    keyFeatures: [
      "Role-based access for SuperAdmin, ElectionAdmin, Candidate, and Voter",
      "User authentication and protected system access",
      "Voter and candidate management",
      "Election creation and administration",
      "Voting and eligibility workflows",
      "Election result handling",
      "Frontend–backend API communication"
    ],

    technicalChallenges:
      "Designing coordinated workflows across different user roles, maintaining secure authentication and authorization, modeling relationships between elections, voters, candidates, votes, and results, and integrating the frontend with backend APIs.",

    whatILearned:
      "Gained practical experience in full-stack application development, authentication and authorization, database modeling, REST API integration, frontend state management, and deploying a production web application."
  },

  {
    id: 2,
    number: "02",
    slug: "vital-event",
    total: "03",

    title: "Vital Event Registration System",
    category: "Full-Stack",
    subCategory: "PHP / MySQL Web Development",

    technologies: [
      "PHP",
      "MySQL",
      "JavaScript",
      "HTML",
      "CSS",
      "XAMPP",
      "Database Systems"
    ],

    shortDescription:
      "A group academic web application for registering and managing vital events, including births, deaths, marriages, divorces, and adoptions through a structured database-driven system.",

    status: "Deployed",
    isLive: true,
    deployedWithNetlify: false,

    github: "https://github.com/hlmegnaw/Vital-Event-Registration",
    liveDemo: "http://vers-eth.rf.gd/",
    linkedin: "[Add LinkedIn Post URL]",

    overview:
      "A database-driven web application developed as a group academic project to support the registration, management, and retrieval of vital event records through a centralized digital system.",

    problem:
      "Vital event records require organized data management, reliable registration workflows, secure access, and efficient retrieval of information. Manual or fragmented record-keeping can make these processes difficult to manage consistently.",

    solution:
      "Developed a web-based registration and management system that organizes vital event records within a centralized database and provides role-based access for different administrative levels.",

    technicalFocus: [
      "Full-Stack Web Development",
      "PHP Backend Development",
      "MySQL Database Management",
      "Database-Driven Application Design",
      "Role-Based Authentication",
      "CRUD Operations",
      "Web Application Deployment"
    ],

    keyFeatures: [
      "Registration and management of birth, death, marriage, divorce, and adoption records",
      "Role-based access for different administrative users",
      "Centralized MySQL database for structured record storage",
      "Administrative dashboards and record management workflows",
      "Search, retrieval, and reporting of registered records",
      "Responsive web interface for system interaction"
    ],

    technicalChallenges:
      "Designing a structured relational database for multiple types of vital events while maintaining relationships between administrative users and geographic entities. Implementing role-based workflows and adapting the application for deployment from a local XAMPP environment to a public web server.",

    whatILearned:
      "Strengthened practical experience in PHP web development, relational database design, authentication, CRUD-based application workflows, team-based software development, and deploying a database-driven application to a live hosting environment."
  },

  {
    id: 3,
    number: "03",
    slug: "amu-campus",
    total: "03",

    title: "Interactive AMU Campus Visualization",
    category: "Computer Graphics",
    subCategory: "C++ / OpenGL / FreeGLUT",

    technologies: [
      "C++",
      "OpenGL",
      "FreeGLUT",
      "GLU",
      "3D Computer Graphics",
      "Geometric Modeling"
    ],

    shortDescription:
      "An interactive computer graphics application developed in C++ using OpenGL and FreeGLUT to construct and navigate a visual representation of the Arba Minch University campus environment.",

    status: "Completed",
    isLive: false,
    deployedWithNetlify: false,

    github: "https://github.com/hlmegnaw/Amu_Demo",
    liveDemo: null,
    linkedin: "[Add LinkedIn Post URL]",

    overview:
      "An interactive computer graphics project that uses C++ with OpenGL, GLU, and FreeGLUT to construct a visual campus environment containing buildings, roads, trees, and people. The application demonstrates geometric scene construction, graphical transformations, rendering, and interactive movement through the environment.",

    problem:
      "Computer graphics projects require more than displaying individual geometric objects. A convincing interactive scene must organize multiple graphical elements, position them consistently within a shared environment, and provide a way for the user to navigate and observe the rendered scene.",

    solution:
      "Developed a modular OpenGL-based campus visualization in C++, separating major scene components such as roads, buildings, trees, and people into dedicated source files. The application combines geometric modeling, transformations, rendering techniques, and interactive movement to create a navigable university environment.",

    technicalFocus: [
      "C++ Programming for Computer Graphics",
      "OpenGL Rendering & Graphics Pipeline Concepts",
      "Geometric Modeling & Scene Construction",
      "Coordinate Systems & Object Transformations",
      "Interactive Camera / Scene Navigation",
      "Modular Graphics Programming"
    ],

    keyFeatures: [
      "Interactive visual representation of an Arba Minch University campus environment",
      "Procedurally constructed buildings, roads, trees, and people using graphical primitives",
      "Modular scene components organized across separate C++ source files",
      "OpenGL-based rendering with GLU and FreeGLUT",
      "Interactive movement through the rendered environment",
      "Real-time visualization of the constructed campus scene"
    ],

    technicalChallenges:
      "Organizing many graphical objects within a shared coordinate system while maintaining consistent positioning and visual relationships between scene components. Another challenge was structuring the graphics code into manageable modules while implementing interactive movement and rendering the complete environment in real time.",

    whatILearned:
      "Strengthened my understanding of computer graphics fundamentals, OpenGL programming, geometric modeling, coordinate transformations, scene organization, and interactive rendering. The project also improved my ability to structure a graphics application into reusable and manageable components."
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

  
  futureInterests: {
    sectionTitle: "Where I Want to Go Next",
    subtitle: "Academic Ambitions & Master's Degree Focus",
    statement: "I have built a strong foundation in Computer Science and aim to deepen it through Master's-level study and applied research in international . My goal is to strengthen my theoretical understanding while developing scalable, intelligent, and dependable computing systems that address real-world challenges.",
    areas: [
      {
        title: "Artificial Intelligence & Machine Learning",
        description: "Deepening my theoretical and practical understanding of machine learning, neural models, predictive systems, and intelligent agents.",
        relevance: "Advancing from foundational algorithms and programming toward modern statistical and learning-based computational methods."
      },
      {
        title: "Data Processing & High-Throughput Systems",
        description: "Exploring scalable data pipelines, distributed storage, and efficient real-time data processing for large and complex datasets.",
        relevance: "Developing the skills needed to address data-intensive challenges in scientific, industrial, and financial environments."
      },
      {
        title: "Software Systems & Architecture",
        description: "Advancing my expertise in software architecture, concurrent systems, cloud computing, virtualization, and dependable distributed systems.",
        relevance: "Designing scalable, fault-tolerant software platforms for demanding and mission-critical applications."
      },
      {
        title: "Natural Language Processing",
        description: "Exploring computational linguistics, text representation, transformer architectures, and information retrieval.",
        relevance: "Connecting human language with intelligent computing systems through modern language-processing and information-retrieval techniques."
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
      "Ready for International Master's-level study "
    ]
  },

  contact: {
    heading: "Get in Touch",
    subheading: "Academic inquiries, Master's program coordinators, and technical reviewers are welcome to reach out.",
    email: "haylemikaelgurba2003@gmail.com",
    location: "Gondar , Ethiopia",
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
