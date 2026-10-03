<?php
/**
 * DevResume Studio - PHP Reset Endpoint for Romeo Paolo L. Tolentino
 */
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed.']);
    exit;
}

$defaultData = [
  "basics" => [
    "name" => "Romeo Paolo L. Tolentino",
    "label" => "Fourth-Year BSIT Student | Aspiring Software Developer & IT Intern",
    "sublabel" => "National University Lipa — College of Computing and Information Technology",
    "targetPosition" => "IT Intern / Software Developer Intern / IT OJT",
    "tagline" => "C# • Java/Kotlin • PHP • JavaScript • .NET MAUI • Android • MySQL • REST APIs • LLM APIs",
    "email" => "romeopaolotolentino@gmail.com",
    "phone" => "+63 9668257301",
    "location" => "Batangas, Philippines",
    "university" => "National University",
    "degree" => "Bachelor of Science in Information Technology",
    "specialization" => "Specialization in Mobile and Web Applications",
    "years" => "Expected 2027",
    "yearLevel" => "BSIT Student",
    "website" => "https://romeopaolotolentino.dev",
    "github" => "https://github.com/RpTolentino711",
    "facebook" => "https://www.facebook.com/romeo.tolentino.753612",
    "linkedin" => "https://linkedin.com/in/romeopaolotolentino",
    "avatar" => "profile.jfif",
    "showAvatar" => false,
    "summary" => "Information Technology student specializing in mobile and web application development, with practical experience in software development, UI/UX design, database-driven systems, artificial intelligence, and API integration. Experienced in developing academic and capstone applications using .NET MAUI, Flutter, PHP, Laravel, MySQL, and SQLite. Skilled in developing and training machine learning models using Random Forest, integrating Large Language Models (LLMs) and AI APIs, and implementing AI-assisted features into software applications. Proficient in translating system requirements into intuitive, user-centered interfaces and working across front-end, back-end, database, and AI components to deliver functional, reliable, and maintainable application solutions.",
    "aboutPersonal" => "I'm passionate about building responsive web and mobile applications that are intuitive and reliable. I enjoy learning new developer tools, working across front-end and back-end workflows, and taking projects from idea to functional implementation."
  ],
  "education" => [
    [
      "institution" => "National University",
      "degree" => "Bachelor of Science in Information Technology",
      "specialization" => "Specialization in Mobile and Web Applications",
      "period" => "Expected 2027",
      "activities" => "Society of Information Technology Students"
    ]
  ],
  "skills" => [
    [
      "category" => "Programming Languages",
      "items" => ["C#", "Java", "Kotlin", "PHP", "JavaScript", "SQL"]
    ],
    [
      "category" => "Frameworks & Platforms",
      "items" => [".NET MAUI", ".NET 9", "ASP.NET", "Android", "Laravel"]
    ],
    [
      "category" => "Databases",
      "items" => ["MySQL", "MariaDB", "SQLite"]
    ],
    [
      "category" => "Development Tools",
      "items" => ["Visual Studio", "Visual Studio Code", "Android Studio", "NetBeans", "XAMPP", "Git"]
    ],
    [
      "category" => "APIs & Integrations",
      "items" => ["REST APIs", "PayMongo", "LLM APIs", "OTP/Email services"]
    ],
    [
      "category" => "AI & Data Concepts",
      "items" => ["NLP", "Random Forest", "LLM API Integration", "AI Decision-Support Systems"]
    ],
    [
      "category" => "Architecture & Engineering Practices",
      "items" => ["NFC", "CRUD application development", "MVVM architecture", "Offline-first application development", "Role-based access control (RBAC)", "Authentication/session management"]
    ]
  ],
  "experience" => [],
  "projects" => [
    [
      "name" => "IDENTITRACK: Digital Infraction & Progressive Offense Management System",
      "role" => "Capstone Full Stack Developer",
      "client" => "National University Lipa — Student Discipline Office (SDO)",
      "technologies" => ["PHP", "MySQL/MariaDB", "JavaScript", "HTML/CSS", "NFC", "REST APIs", "LLM API", "NLP", "Random Forest", "XAMPP"],
      "highlights" => [
        "Designed and developed a centralized discipline management system for the **National University Lipa Student Discipline Office (SDO)**.",
        "Implemented NFC-based student identification and automated community service attendance tracking via student IDs, with manual login fallback.",
        "Built automated offense recording, progressive offense tracking, rule-based violation letter generation, and automated parent/student notifications.",
        "Engineered the University Panel on Case Conference (UPCC) case management module, including case scheduling, staff assignment, hearing workflows, voting, and administrative finalization.",
        "Integrated an AI-assisted decision-support feature utilizing LLM APIs and handbook-based offense retrieval to provide suggested consequences during UPCC hearings.",
        "Architected relational database structures (MySQL/MariaDB), role-based access control (RBAC), secure authentication with OTP/email verification, and comprehensive audit/notification logging."
      ]
    ],
    [
      "name" => "RentEase — Cross-Platform Item Rental Application",
      "role" => "Software Developer",
      "client" => "Academic / Personal Project",
      "technologies" => ["C#", ".NET MAUI", "SQLite", "PayMongo"],
      "highlights" => [
        "Developed a cross-platform item rental application using **C#** and **.NET MAUI** targeting desktop and mobile operating systems.",
        "Implemented item listings, rental browsing, transaction management, and robust CRUD functionality utilizing **SQLite** for local data persistence.",
        "Integrated **PayMongo API** to handle secure digital payment workflows for rental fees and transactions."
      ]
    ],
    [
      "name" => "ASRT — Web-Based Management System",
      "role" => "Software Developer",
      "client" => "Academic Project",
      "technologies" => ["PHP", "MySQL/MariaDB", "JavaScript", "HTML/CSS", "XAMPP"],
      "highlights" => [
        "Developed a database-driven web application using **PHP**, **MySQL/MariaDB**, and **XAMPP**.",
        "Implemented core system workflows, structured database operations, reliable CRUD functionality, and user-facing administrative features."
      ]
    ],
    [
      "name" => "Notiflow — Android Task Notification Application",
      "role" => "Mobile Developer",
      "client" => "Academic Project",
      "technologies" => ["Android Studio", "Java/Kotlin", "Android Notifications", "CRUD", "SQLite"],
      "highlights" => [
        "Developed a native Android application enabling professors to assign tasks and students to receive scheduled task alerts.",
        "Implemented role-based workflows (Professor & Student), task creation, viewing, editing, and deletion with robust CRUD operations.",
        "Constructed scheduled background alarm services triggering audible ringing alerts and push notifications when deadlines approach."
      ]
    ],
    [
      "name" => "WealthWise — Offline-First Financial Management Application",
      "role" => "Software Developer",
      "client" => "Personal Project",
      "technologies" => ["C#", ".NET 9 MAUI", "SQLite", "MVVM"],
      "highlights" => [
        "Developed an offline-first financial management application using **.NET 9 MAUI**, **SQLite**, and **MVVM architecture**.",
        "Engineered local data persistence, structured business logic, and modular UI bindings for seamless budgeting and transaction tracking.",
        "Designed tiered subscription feature structures (Free Starter, Pro Monthly, and Executive Annual)."
      ]
    ],
    [
      "name" => "Pasabuy — Student Marketplace Application",
      "role" => "Software Developer",
      "client" => "Academic Project",
      "technologies" => ["C#", ".NET MAUI", "SQLite", "PayMongo"],
      "highlights" => [
        "Designed and developed a student-focused marketplace application using **.NET MAUI** featuring Buyer, Seller, and Admin workflows.",
        "Implemented product listings, item browsing, in-app chat functionality, and administrative moderation tools.",
        "Integrated **PayMongo** for processing tiered posting fees (₱1 for ₱1–₱99, ₱5 for ₱100–₱999, ₱10 for ₱1,000+)."
      ]
    ],
    [
      "name" => "Pokémon Application",
      "role" => "Software Developer",
      "client" => "Academic Project",
      "technologies" => ["Java", "NetBeans", "OOP"],
      "highlights" => [
        "Developed a Java desktop application using NetBeans, applying core Object-Oriented Programming (OOP) concepts and CRUD application logic."
      ]
    ]
  ]
];

file_put_contents(__DIR__ . '/resume_data.json', json_encode($defaultData, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));

echo json_encode(['success' => true, 'data' => $defaultData]);
