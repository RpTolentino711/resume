/**
 * DevResume Studio - Default Resume Data
 * Profile: Romeo Paolo L. Tolentino (Fourth-Year BSIT Student, National University Lipa)
 */
const DEFAULT_RESUME_DATA = {
  basics: {
    name: "Romeo Paolo L. Tolentino",
    label: "Fourth-Year BSIT Student | Aspiring Software Developer & IT Intern",
    sublabel: "National University Lipa — College of Computing and Information Technology",
    targetPosition: "IT Intern / Software Developer Intern / IT OJT",
    tagline: "C# • Java/Kotlin • PHP • JavaScript • .NET MAUI • Android • MySQL • REST APIs • LLM APIs",
    email: "romeopaolotolentino@gmail.com",
    phone: "+63 9668257301",
    location: "Batangas, Philippines",
    university: "National University - Lipa",
    degree: "Bachelor of Science in Information Technology",
    specialization: "Specialization in Mobile and Web Applications",
    years: "Expected 2027",
    yearLevel: "BSIT Student",
    website: "https://iamrpt.site/",
    github: "https://github.com/RpTolentino711",
    facebook: "https://www.facebook.com/romeo.tolentino.753612",
    linkedin: "https://linkedin.com/in/romeopaolotolentino",
    avatar: "profile.jfif",
    showAvatar: false,
    summary: "Information Technology student specializing in mobile and web application development, with practical experience in software development, UI/UX design, database-driven systems, artificial intelligence, and API integration. Experienced in developing academic and capstone applications using .NET MAUI, Flutter, PHP, Laravel, MySQL, and SQLite. Skilled in developing and training machine learning models using Random Forest, integrating Large Language Models (LLMs) and AI APIs, and implementing AI-assisted features into software applications. Proficient in translating system requirements into intuitive, user-centered interfaces and working across front-end, back-end, database, and AI components to deliver functional, reliable, and maintainable application solutions.",
    aboutPersonal: "I'm passionate about building responsive web and mobile applications that are intuitive and reliable. I enjoy learning new developer tools, working across front-end and back-end workflows, and taking projects from idea to functional implementation."
  },
  education: [
    {
      institution: "National University - Lipa",
      degree: "Bachelor of Science in Information Technology",
      specialization: "Specialization in Mobile and Web Applications",
      period: "Expected 2027",
      activities: "Society of Information Technology Students"
    }
  ],
  skills: {
    languages: ["C#", "C++", "Java", "Kotlin", "PHP", "JavaScript", "HTML", "CSS", "SQL"],
    frameworksDevelopment: [".NET MAUI", "ASP.NET", "Flutter", "Laravel", "Android Development"],
    frontend: ["React", "Next.js", "React Native", "Expo", "Tailwind CSS", "Bootstrap", "Framer Motion"],
    database: ["MySQL", "SQLite", "MariaDB", "Firebase"],
    developerTools: ["Visual Studio Code", "Antigravity", "Git", "GitHub"],
    devopsCloud: ["GitHub Actions"],
    apisIntegration: ["REST APIs", "PayMongo API", "Groq API", "Webhooks"],
    aiData: ["NLP", "Random Forest", "LLM/API Integration"],
    designPrototyping: ["Figma"],
    mobileDevelopment: ["Flutter", "Dart", "C#", ".NET MAUI", "Kotlin", "Android"],
    webDevelopment: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind CSS", "React", "PHP", "Laravel"],
    backendDatabase: ["PHP/PDO", "MySQL", "SQLite", "Firebase"],
    aiApi: ["Random Forest machine learning", "LLM integration", "NLP-based features", "AI API integration", "REST API concepts"],
    uiUx: ["Figma", "wireframes", "user flows", "prototypes", "responsive interface design"],
    tools: ["Git/GitHub", "Visual Studio", "Visual Studio Code", "Android Studio", "NetBeans", "XAMPP"],
    programmingLanguages: ["C#", "Dart", "Java", "Kotlin", "PHP", "JavaScript", "SQL"],
    frameworksPlatforms: [".NET MAUI", "Flutter", "React", "Laravel", "Bootstrap", "Tailwind CSS", "Android"],
    databases: ["MySQL", "MariaDB", "SQLite", "Firebase"],
    devTools: ["Git/GitHub", "Visual Studio", "Visual Studio Code", "Android Studio", "NetBeans", "XAMPP", "Figma"]
  },
  projects: [
    {
      id: "identitrack",
      name: "IDENTITRACK",
      role: "Capstone Full Stack Developer",
      client: "National University Lipa",
      featured: true,
      technologies: ["PHP", "JavaScript", "MySQL", "Hostinger", "NFC", "FLUTTER", "REST API", "Groq API", "Random Forest"],
      shortDescription: "Developed a digital infraction and progressive offense management system for National University Lipa with NFC-enabled student tracking and AI-assisted consequence analysis.",
      highlights: [
        "Developed a digital infraction and progressive offense management system for National University Lipa.",
        "Implemented NFC-enabled student identification, offense tracking, community service monitoring, notifications, and violation letter generation.",
        "Integrated AI-assisted offense analysis using REST APIs, NLP, Random Forest, and LLM capabilities to provide handbook-based consequence suggestions for UPCC personnel."
      ]
    },
    {
      id: "rentease",
      name: "RentEase — Cross-Platform Item Rental Application",
      role: "Software Developer",
      client: "Academic / Personal Project",
      featured: true,
      technologies: ["C#", ".NET MAUI", "SQLite", "MySQL", "PayMongo API", "REST APIs"],
      shortDescription: "Cross-platform mobile and desktop rental application allowing users to publish rental listings, browse catalogs, track transactions, and execute secure digital payments.",
      highlights: [
        "Developed a cross-platform item rental application using .NET MAUI with a MySQL database for data storage and management.",
        "Implemented item listing, rental management, user authentication, and role-based buyer/seller functionality.",
        "Integrated PayMongo for secure payment processing and transaction handling."
      ]
    },
    {
      id: "asrt",
      name: "ASRT — Web-Based Management System",
      role: "Software Developer",
      client: "Academic Project",
      featured: true,
      technologies: ["PHP", "JavaScript", "MySQL", "Hostinger"],
      shortDescription: "Database-driven administrative management web application handling record tracking, data queries, and user operations.",
      highlights: [
        "Developed a web-based system using PHP and MySQL to automate administrative processes and improve record management.",
        "Implemented CRUD operations, database-driven workflows, authentication, and role-based system functionality.",
        "Designed responsive interfaces and integrated backend validation for reliable data management."
      ]
    },
    {
      id: "notiflow",
      name: "Notiflow — Android Task Notification Application",
      role: "Mobile Developer",
      client: "Academic Project",
      featured: true,
      technologies: ["Android Studio", "Java/Kotlin", "Android Notifications", "CRUD", "SQLite"],
      shortDescription: "Native Android mobile application facilitating task assignment between professors and students with scheduled alarm-based notification alerts.",
      highlights: [
        "Developed a native Android application enabling professors to assign tasks and students to receive scheduled task alerts.",
        "Implemented role-based workflows (Professor & Student), task creation, viewing, editing, and deletion with robust CRUD operations.",
        "Constructed scheduled background alarm services triggering audible ringing alerts and push notifications when deadlines approach."
      ]
    },
    {
      id: "wealthwise",
      name: "WealthWise — Offline-First Financial Management Application",
      role: "Software Developer",
      client: "Personal Project",
      featured: false,
      technologies: ["C#", ".NET 9 MAUI", "SQLite", "MVVM Architecture"],
      shortDescription: "Offline-first personal finance tracking application built with .NET 9 MAUI, SQLite, and MVVM design architecture with multi-tier subscription plans.",
      highlights: [
        "Developed an offline-first financial management application using **.NET 9 MAUI**, **SQLite**, and **MVVM architecture**.",
        "Engineered local data persistence, structured business logic, and modular UI bindings for seamless budgeting and transaction tracking.",
        "Designed tiered subscription feature structures (Free Starter, Pro Monthly, and Executive Annual)."
      ]
    },
    {
      id: "pasabuy",
      name: "Pasabuy — Student Marketplace Application",
      role: "Software Developer",
      client: "Academic Project",
      featured: false,
      technologies: ["C#", ".NET MAUI", "SQLite", "PayMongo"],
      shortDescription: "Student-focused marketplace application facilitating face-to-face transactions, role management, live messaging, and automated posting fees.",
      highlights: [
        "Designed and developed a student-focused marketplace application using **.NET MAUI** featuring Buyer, Seller, and Admin workflows.",
        "Implemented product listings, item browsing, in-app chat functionality, and administrative moderation tools.",
        "Integrated **PayMongo** for processing tiered posting fees (₱1 for ₱1–₱99, ₱5 for ₱100–₱999, ₱10 for ₱1,000+)."
      ]
    },
    {
      id: "pokemon",
      name: "Pokémon Application",
      role: "Software Developer",
      client: "Academic Project",
      featured: false,
      technologies: ["Java", "NetBeans", "OOP"],
      shortDescription: "Java desktop application demonstrating object-oriented programming principles, battle/inventory application logic, and CRUD operations.",
      highlights: [
        "Developed a Java desktop application using NetBeans, applying core Object-Oriented Programming (OOP) concepts and CRUD application logic."
      ]
    }
  ],
  certifications: [
    {
      id: "ic3-gs6",
      title: "IC3 Digital Literacy Certification (Global Standard Six - Level 1)",
      issuer: "Certiport (A Pearson VUE Business)",
      year: "2024",
      issueDate: "November 14, 2024",
      credentialId: "wAmNX-2FLL",
      pdfFile: "CERTI.pdf",
      previewImage: "cert_ic3_preview.png",
      standards: ["ACE", "ISTE Seal (2025-2027)", "DigComp", "Global Digital Literacy Council"],
      description: "Demonstrated comprehensive proficiency in Technology Basics, Digital Citizenship, Information Management, Content Creation, Digital Communication, Collaboration, and Safety & Security through the successful completion of the IC3 Digital Literacy exam.",
      competencies: [
        "Technology Basics & Computing Hardware/Software",
        "Digital Citizenship & Online Reputation Protection",
        "Information Management & Advanced Search",
        "Digital Content Creation & Media",
        "Communication & Collaborative Etiquette",
        "Cybersecurity, Privacy & Threat Prevention"
      ]
    },
    {
      id: "its-networking",
      title: "Information Technology Specialist: Networking",
      issuer: "Certiport (A Pearson VUE Business) / CertNexus",
      year: "2025",
      issueDate: "October 17, 2025",
      validity: "Valid through October 2030 (5-Year Expiration)",
      credentialId: "wNnKq-2F9s",
      pdfFile: "networking.pdf",
      previewImage: "cert_networking_preview.png",
      standards: ["Pearson VUE", "CertNexus", "ITS"],
      description: "Successfully completed certification requirements for IT Specialist in Networking, validating network infrastructure, architecture, protocols, troubleshooting, and security principles.",
      competencies: [
        "Network Infrastructure & Topologies (LAN / WAN)",
        "Internet Protocol (IPv4 / IPv6) Addressing & Subnetting",
        "OSI 7-Layer Reference Model & TCP/IP Protocol Suite",
        "Network Security Protocols, Firewalls & Encryption",
        "Wired (Ethernet) & Wireless (802.11) Network Operations",
        "Network Diagnostics, Troubleshooting & Packet Analysis"
      ]
    }
  ]
};
