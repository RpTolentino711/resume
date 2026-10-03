<?php
/**
 * Romeo Paolo L. Tolentino — Official Portfolio & OJT Digital Resume
 * Fourth-Year BSIT Student | National University Lipa
 */

$dataFile = __DIR__ . '/resume_data.json';
$resume = [];

if (file_exists($dataFile)) {
    $jsonContent = file_get_contents($dataFile);
    $resume = json_decode($jsonContent, true);
}

if (empty($resume) || !is_array($resume)) {
    include_once __DIR__ . '/reset_resume.php';
    $resume = $defaultData ?? [];
}

$basics = $resume['basics'] ?? [];
$name = htmlspecialchars($basics['name'] ?? 'Romeo Paolo L. Tolentino');
$label = htmlspecialchars($basics['label'] ?? 'Fourth-Year BSIT Student | Aspiring Software Developer');
$email = htmlspecialchars($basics['email'] ?? 'romeopaolotolentino@gmail.com');
$phone = htmlspecialchars($basics['phone'] ?? '09668257301');
$location = htmlspecialchars($basics['location'] ?? 'Lipa City, Batangas, Philippines');
$github = htmlspecialchars($basics['github'] ?? 'https://github.com/RpTolentino711');
$facebook = htmlspecialchars($basics['facebook'] ?? 'https://www.facebook.com/romeo.tolentino.753612');
$linkedin = htmlspecialchars($basics['linkedin'] ?? 'https://linkedin.com/in/romeopaolotolentino');
?>
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?= $name ?> — Software Developer &amp; OJT Candidate</title>
  <meta name="description" content="<?= $name ?>. Fourth-Year BSIT Student at National University Lipa. Candidate for IT / Software Developer Internship (OJT).">
  
  <!-- Premium Google Fonts: Inter, Playfair Display (Editorial Luxury Serif), JetBrains Mono -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap" rel="stylesheet">
  
  <!-- Stylesheet -->
  <link rel="stylesheet" href="styles.css">
  <!-- Devicon Developer Icons -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css">

</head>
<body class="editorial-theme">

  <!-- Active Monochrome Fluid Wave Animated Canvas Background -->
  <canvas id="bgFluidMeshCanvas" class="bg-fluid-mesh-canvas" aria-hidden="true"></canvas>

  <!-- Floating Capsule Navigation (matches reference screenshot) -->
  <header class="editorial-header">
    <div class="nav-monogram">
      <a href="#hero" class="monogram-link">ROMEO TOLENTINO</a>
    </div>

    <!-- Centered Glass Pill Navbar -->
    <nav class="floating-pill-nav" id="floatingPillNav" aria-label="Main Navigation">
      <ul class="pill-nav-list">
        <li><a href="#hero" class="pill-nav-link active"><span class="pill-nav-text">Home</span></a></li>
        <li><a href="#about" class="pill-nav-link"><span class="pill-nav-text">About</span></a></li>
        <li><a href="#projects" class="pill-nav-link"><span class="pill-nav-text">Projects</span></a></li>
        <li><a href="#ecosystem" class="pill-nav-link"><span class="pill-nav-text">Tech Stack</span></a></li>
        <li><a href="#certifications" class="pill-nav-link"><span class="pill-nav-text">Certifications</span></a></li>
        <li><a href="#resume" class="pill-nav-link pill-resume-highlight"><span class="pill-nav-text">Resume</span></a></li>
      </ul>

      <!-- Traveling & Orbiting Celestial Star Tracker -->
      <div class="nav-star-tracker" id="navStarTracker" aria-hidden="true">
        <div class="nav-orbit-star" id="navOrbitStar">
          <svg class="star-svg-icon" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="#ffffff" />
          </svg>
          <span class="star-aura-glow"></span>
        </div>
      </div>
    </nav>

    <!-- Right Action Group -->
    <div class="nav-right-cluster">
      <button type="button" class="mobile-nav-toggle" id="btnMobileToggle" aria-label="Toggle navigation menu">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </div>

    <!-- Mobile Drawer -->
    <div class="mobile-menu-drawer" id="mobileDrawer">
      <a href="#hero" class="mobile-drawer-link">Home</a>
      <a href="#about" class="mobile-drawer-link">About</a>
      <a href="#projects" class="mobile-drawer-link">Projects</a>
      <a href="#ecosystem" class="mobile-drawer-link">Tech Stack</a>
      <a href="#certifications" class="mobile-drawer-link">Certifications</a>
      <a href="#resume" class="mobile-drawer-link" style="font-weight: 700; color: #38bdf8;">★ Official ATS Resume</a>
      <div style="margin-top: 15px;">
        <button type="button" class="btn btn-primary" id="btnMobilePrint" style="width: 100%;">Print / Save PDF (A4)</button>
      </div>
    </div>
  </header>

  <!-- ==========================================================================
       Hero Section (Matches Image 1: Monochromatic Fluid Smoky Silk Aesthetics)
       ========================================================================== -->
  <section class="editorial-hero" id="hero">
    
    <!-- Smoky Silk Monochrome Ambient Lighting -->
    <div class="hero-ambient-fluid" aria-hidden="true">
      <div class="fluid-wave wave-1"></div>
      <div class="fluid-wave wave-2"></div>
      <div class="fluid-light-orb"></div>
    </div>

    <!-- Center Hero Typography -->
    <div class="hero-center-content">
      <h1 class="hero-giant-name"><?= $name ?></h1>
      <div class="hero-statement-block">
        <p class="hero-eyebrow-kicker">I BUILD WEB AND MOBILE APPLICATIONS POWERED BY</p>
        <p class="hero-editorial-italic">logic, driven by discipline.</p>
      </div>
    </div>

    <!-- Bottom Left Telemetry (Image 1 replica) -->
    <div class="hero-telemetry-corner telemetry-left" id="telemetryLocation" role="button" tabindex="0" title="Batangas, Philippines (Tap multiple times!)" aria-label="Current Location: Batangas, Philippines">
      <span class="telemetry-label" id="telemetryLabelLoc">◎ CURRENT.LOC</span>
      <span class="telemetry-main" id="telemetryMainLoc">Batangas</span>
      <span class="telemetry-sub" id="telemetrySubLoc">PHILIPPINES</span>
      <div class="ala-eh-popup" id="alaEhPopup" aria-hidden="true">ALA EH AHAHHAHAH</div>
    </div>

    <!-- Bottom Right Telemetry (Image 1 replica) -->
    <div class="hero-telemetry-corner telemetry-right" id="telemetryUser" role="button" tabindex="0" title="Full Stack Developer (Tap multiple times!)" aria-label="Developer: Full Stack Developer">
      <span class="telemetry-label" id="telemetryUserLabel">SYS.USER</span>
      <span class="telemetry-main" id="telemetryUserMain">Full Stack Developer</span>
      <span class="telemetry-sub" id="telemetryUserSub">MOBILE &amp; WEB APPLICATIONS</span>
      <div class="code-rain-popup" id="codeRainPopup" aria-hidden="true">CODE RAIN ACTIVATED! 💻</div>
    </div>
  </section>

  <!-- Main Content Wrapper -->
  <main class="editorial-main-wrapper">

    <!-- ==========================================================================
         About Section (Zero Images - High-Tech Developer Terminal Card)
         ========================================================================== -->
    <section class="editorial-section" id="about">
      <div class="about-grid-layout">
        
        <!-- Left: 3D Interactive Flip Photo Card (profile.jfif & PROFILE2.jfif) -->
        <div class="about-photo-col">
          <div class="profile-flip-card" id="profileFlipCard" role="button" tabindex="0" title="Click to flip photo">
            <div class="flip-card-inner">
              <!-- Front Face: Student & Developer (profile.jfif) -->
              <div class="flip-card-front">
                <div class="photo-frame">
                  <img src="profile.jfif" alt="Romeo Paolo L. Tolentino" class="flip-img">
                  <div class="photo-vignette"></div>
                  <div class="flip-badge top-badge">
                    <span class="badge-dot"></span>
                    <span>NU Lipa • BSIT 4th Year</span>
                  </div>
                  <div class="flip-badge bottom-badge">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.3"/>
                    </svg>
                    <span>Click to flip photo</span>
                  </div>
                </div>
              </div>

              <!-- Back Face: Gym & Fitness Discipline (PROFILE2.jfif) -->
              <div class="flip-card-back">
                <div class="photo-frame">
                  <img src="PROFILE2.jfif" alt="Romeo Paolo L. Tolentino - Gym Discipline" class="flip-img">
                  <div class="photo-vignette"></div>
                  <div class="flip-badge top-badge badge-warm">
                    <span class="badge-dot"></span>
                    <span>Discipline &amp; Consistency</span>
                  </div>
                  <div class="flip-badge bottom-badge">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.3"/>
                    </svg>
                    <span>Click to flip back</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Editorial Bio & Quick Links -->
        <div class="about-bio-col">
          <span class="section-mono-kicker">ABOUT.ME</span>
          <h2 class="editorial-serif-heading">Driven by <span class="editorial-italic">discipline</span></h2>

          <div class="about-paragraphs">
            <p>
              Hi! My name is <strong>Romeo Paolo Tolentino</strong>, also known online as <strong>RpTolentino711</strong>. I am currently in my fourth year of college, pursuing a Bachelor of Science in Information Technology (BSIT) at <strong>National University Lipa</strong> with recognized Dean's List honors.
            </p>
            <p>
              I build web and mobile applications powered by logic and driven by discipline. I focus on creating practical, user-friendly applications and improving how they work and feel in real use—specializing in .NET MAUI, Flutter, PHP, Laravel, MySQL, SQLite, and integrating modern AI services.
            </p>
            <p>
              I'm passionate about building responsive web and mobile applications that are intuitive and reliable. I enjoy learning new developer tools and taking projects from idea to functional implementation.
            </p>
          </div>

          <!-- Bottom Icons Row (CV, Email, GitHub, LinkedIn, Facebook, Phone) -->
          <div class="about-social-strip">
            <a href="#resume" class="about-icon-link" title="View Official ATS Resume" aria-label="Official Resume">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </a>
            <a href="mailto:<?= $email ?>" class="about-icon-link" title="Send Email" aria-label="Email">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
            <a href="<?= $github ?>" target="_blank" rel="noopener" class="about-icon-link" title="GitHub Profile" aria-label="GitHub">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
              </svg>
            </a>
            <a href="<?= $linkedin ?>" target="_blank" rel="noopener" class="about-icon-link" title="LinkedIn Profile" aria-label="LinkedIn">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </a>
            <a href="<?= $facebook ?>" target="_blank" rel="noopener" class="about-icon-link" title="Facebook Profile" aria-label="Facebook">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>

    <!-- ==========================================================================
         Featured Projects
         ========================================================================== -->
    <section class="editorial-section" id="projects">
      <div class="section-title-wrap">
        <span class="section-mono-kicker">MY.WORK</span>
        <h2 class="editorial-serif-heading">Featured <span class="editorial-italic">Projects</span></h2>
      </div>

      <div class="projects-showcase-list">
        
        <!-- PROJECT 1: IDENTITRACK (Capstone Project) -->
        <article class="editorial-project-card project-align-left">
          
          <!-- Mockup Display Side (Warm Earthy Studio Backdrop) -->
          <div class="project-mockup-wrapper bg-identitrack">
            <div class="laptop-device-frame identitrack-portal-frame">
              <div class="screen-top-bar">
                <span class="s-dot s-red"></span>
                <span class="s-dot s-yellow"></span>
                <span class="s-dot s-green"></span>
                <span class="s-title">Identitrack Portal — Discipline Management System</span>
              </div>
              <div class="device-screen-inner identitrack-screen-wrapper">
                <img src="IDENTI/IDEINTIAPP.png" alt="Identitrack student discipline management dashboard" class="identitrack-portal-img">
              </div>
            </div>
            <div class="mockup-floating-badge badge-warm">Identitrack Portal Dashboard</div>
          </div>

          <!-- Project Details Side -->
          <div class="project-details-content">
            <span class="project-category-kicker">CAPSTONE PROJECT</span>
            <h3 class="editorial-proj-name">Identitrack</h3>
            <p class="editorial-proj-desc">
              A comprehensive Digital Infraction and Progressive Offense Management System developed for National University Lipa Student Discipline Office (SDO), combining AI-assisted decision support, NFC identification, and mobile workflow tracking.
            </p>
            <div class="editorial-pill-badges">
              <span class="pill-tag">PHP</span>
              <span class="pill-tag">MYSQL</span>
              <span class="pill-tag">REST API</span>
              <span class="pill-tag">NFC</span>
              <span class="pill-tag">LLM API</span>
              <span class="pill-tag">RANDOM FOREST</span>
              <span class="pill-tag">FIGMA</span>
            </div>
          </div>

        </article>

        <!-- PROJECT 2: RENTEASE (Alternating: Content Left, Mockup Right - Deep Indigo Backdrop) -->
        <article class="editorial-project-card project-align-right">
          
          <!-- Project Details Side -->
          <div class="project-details-content">
            <span class="project-category-kicker">PERSONAL / ACADEMIC PROJECT</span>
            <h3 class="editorial-proj-name">RentEase</h3>
            <p class="editorial-proj-desc">
              Cross-platform item rental application engineered with C# and .NET MAUI, featuring local SQLite persistence, full CRUD listing management, role-based workflows, and PayMongo payment integration.
            </p>
            <div class="editorial-pill-badges">
              <span class="pill-tag">C#</span>
              <span class="pill-tag">.NET MAUI</span>
              <span class="pill-tag">SQLITE</span>
              <span class="pill-tag">PAYMONGO</span>
              <span class="pill-tag">REST API</span>
              <span class="pill-tag">MVVM</span>
            </div>
            <div class="project-actions-row">
              <a href="#resume" class="editorial-arrow-btn">
                <span>CROSS-PLATFORM APP</span>
                <span class="arrow-glyph">→</span>
              </a>
            </div>
          </div>

          <!-- Mockup Display Side (Deep Midnight Navy Studio Backdrop) -->
          <div class="project-mockup-wrapper bg-rentease">
            <div class="device-mockup-frame rentease-phone-frame">
              <div class="device-screen-inner rentease-screen-inner">
                <img src="rentease.jfif" alt="RentEase cross-platform item rental mobile application interface" class="rentease-screen-img" loading="lazy">
              </div>
            </div>
            <div class="mockup-floating-badge badge-blue">RentEase Mobile App</div>
          </div>

        </article>

        <!-- PROJECT 3: ASRT (Web Application - Deep Forest Emerald Backdrop) -->
        <article class="editorial-project-card project-align-left">
          
          <!-- Mockup Display Side -->
          <div class="project-mockup-wrapper bg-asrt">
            <div class="laptop-device-frame asrt-portal-frame">
              <div class="screen-top-bar">
                <span class="s-dot s-red"></span>
                <span class="s-dot s-yellow"></span>
                <span class="s-dot s-green"></span>
                <span class="s-title">ASRT Commercial — Unit &amp; Maintenance Management</span>
              </div>
              <div class="device-screen-inner asrt-screen-wrapper">
                <img src="ASRT.png" alt="ASRT Commercial web application system interface" class="asrt-portal-img" loading="lazy">
              </div>
            </div>
            <div class="mockup-floating-badge badge-green">ASRT Commercial Portal</div>
          </div>

          <!-- Project Details Side -->
          <div class="project-details-content">
            <span class="project-category-kicker">ACADEMIC PROJECT</span>
            <h3 class="editorial-proj-name">ASRT System</h3>
            <p class="editorial-proj-desc">
              Database-driven administrative management system handling structured record tracking, relational queries, audit trails, and multi-user administrative workflows.
            </p>
            <div class="editorial-pill-badges">
              <span class="pill-tag">PHP / PDO</span>
              <span class="pill-tag">MYSQL</span>
              <span class="pill-tag">JAVASCRIPT</span>
              <span class="pill-tag">HTML/CSS</span>
              <span class="pill-tag">XAMPP</span>
            </div>
          </div>

        </article>

      </div>
    </section>

    <!-- ==========================================================================
         Development Ecosystem (Requested: "development ecostem all the language i learn")
         ========================================================================== -->
    <section class="editorial-section" id="ecosystem">
      <div class="section-title-wrap">
        <span class="section-mono-kicker">DEVELOPMENT.ECOSYSTEM</span>
        <h2 class="editorial-serif-heading">Languages &amp; <span class="editorial-italic">Architecture</span></h2>
        <p class="section-subtitle-text">
          A comprehensive breakdown of all programming languages, frameworks, database architectures, and engineering tools mastered during academic and capstone development.
        </p>
      </div>

      <div class="ecosystem-grid">
        
        <!-- Category 1: Programming Languages -->
        <div class="ecosystem-card">
          <div class="ecosystem-card-header">
            <button type="button" class="eco-cat-icon" data-eco-modal-title="Programming Languages" data-eco-modal-description="The languages I use to build application logic, interfaces, data workflows, and full-stack features." aria-label="View Programming Languages details">&lt;/&gt;</button>
            <h3 class="eco-cat-title">Programming Languages</h3>
          </div>
          <div class="eco-tags-flow">
            <span class="eco-pill"><i class="devicon-csharp-plain colored"></i> C#</span>
            <span class="eco-pill"><i class="devicon-dart-plain colored"></i> Dart</span>
            <span class="eco-pill"><i class="devicon-java-plain colored"></i> Java</span>
            <span class="eco-pill"><i class="devicon-kotlin-plain colored"></i> Kotlin</span>
            <span class="eco-pill"><i class="devicon-php-plain colored"></i> PHP</span>
            <span class="eco-pill"><i class="devicon-javascript-plain colored"></i> JavaScript</span>
            <span class="eco-pill"><i class="devicon-azuresqldatabase-plain colored"></i> SQL</span>
            <span class="eco-pill"><i class="devicon-html5-plain colored"></i> HTML5</span>
            <span class="eco-pill"><i class="devicon-css3-plain colored"></i> CSS3</span>
          </div>
        </div>

        <!-- Category 2: Mobile Application Development -->
        <div class="ecosystem-card">
          <div class="ecosystem-card-header">
            <button type="button" class="eco-cat-icon" data-eco-modal-title="Mobile Development" data-eco-modal-description="The mobile technologies I use to create cross-platform and native application experiences." aria-label="View Mobile Development details">&#x1F4F1;</button>
            <h3 class="eco-cat-title">Mobile Development</h3>
          </div>
          <div class="eco-tags-flow">
            <span class="eco-pill"><i class="devicon-flutter-plain colored"></i> Flutter</span>
            <span class="eco-pill"><i class="devicon-dart-plain colored"></i> Dart</span>
            <span class="eco-pill"><i class="devicon-dot-net-plain colored"></i> .NET MAUI</span>
            <span class="eco-pill"><i class="devicon-kotlin-plain colored"></i> Kotlin</span>
            <span class="eco-pill"><i class="devicon-android-plain colored"></i> Android SDK</span>
            <span class="eco-pill">Cross-Platform MVVM</span>
          </div>
        </div>

        <!-- Category 3: Web, Backend & Database -->
        <div class="ecosystem-card">
          <div class="ecosystem-card-header">
            <button type="button" class="eco-cat-icon" data-eco-modal-title="Backend &amp; Database" data-eco-modal-description="The server-side, persistence, and API tools behind reliable database-driven applications." aria-label="View Backend and Database details">&#x1F5C4;&#xFE0F;</button>
            <h3 class="eco-cat-title">Backend &amp; Database</h3>
          </div>
          <div class="eco-tags-flow">
            <span class="eco-pill"><i class="devicon-php-plain colored"></i> PHP / PDO</span>
            <span class="eco-pill"><i class="devicon-laravel-original colored"></i> Laravel</span>
            <span class="eco-pill"><i class="devicon-mysql-plain colored"></i> MySQL</span>
            <span class="eco-pill"><i class="devicon-sqlite-plain colored"></i> SQLite</span>
            <span class="eco-pill"><i class="devicon-firebase-plain colored"></i> Firebase</span>
            <span class="eco-pill">RESTful APIs</span>
            <span class="eco-pill"><i class="devicon-bootstrap-plain colored"></i> Bootstrap</span>
            <span class="eco-pill"><i class="devicon-tailwindcss-original colored"></i> Tailwind CSS</span>
            <span class="eco-pill"><i class="devicon-react-original colored"></i> React</span>
          </div>
        </div>

        <!-- Category 4: AI & API Integration -->
        <div class="ecosystem-card">
          <div class="ecosystem-card-header">
            <button type="button" class="eco-cat-icon" data-eco-modal-title="AI &amp; API Integration" data-eco-modal-description="The AI, machine learning, device, and payment integrations used to extend application capabilities." aria-label="View AI and API Integration details">&#x26A1;</button>
            <h3 class="eco-cat-title">AI &amp; API Integration</h3>
          </div>
          <div class="eco-tags-flow">
            <span class="eco-pill">Random Forest ML</span>
            <span class="eco-pill">Large Language Models (LLMs)</span>
            <span class="eco-pill">AI Decision APIs</span>
            <span class="eco-pill">NLP Features</span>
            <span class="eco-pill">NFC Verification</span>
            <span class="eco-pill">PayMongo Payment API</span>
          </div>
        </div>

        <!-- Category 5: UI/UX & Design Architecture -->
        <div class="ecosystem-card">
          <div class="ecosystem-card-header">
            <button type="button" class="eco-cat-icon" data-eco-modal-title="UI/UX &amp; Prototyping" data-eco-modal-description="The design practices I use to shape clear user flows, responsive interfaces, and usable product experiences." aria-label="View UI and UX details">&#x1F3A8;</button>
            <h3 class="eco-cat-title">UI/UX &amp; Prototyping</h3>
          </div>
          <div class="eco-tags-flow">
            <span class="eco-pill"><i class="devicon-figma-plain colored"></i> Figma</span>
            <span class="eco-pill">Wireframing</span>
            <span class="eco-pill">User Flows</span>
            <span class="eco-pill">Interactive Prototypes</span>
            <span class="eco-pill">Responsive Design</span>
          </div>
        </div>

        <!-- Category 6: Developer Environments & Tools -->
        <div class="ecosystem-card">
          <div class="ecosystem-card-header">
            <button type="button" class="eco-cat-icon" data-eco-modal-title="Developer Tooling" data-eco-modal-description="The tools I use for source control, development, debugging, local environments, and delivery." aria-label="View Developer Tooling details">&#x1F6E0;&#xFE0F;</button>
            <h3 class="eco-cat-title">Developer Tooling</h3>
          </div>
          <div class="eco-tags-flow">
            <span class="eco-pill"><i class="devicon-git-plain colored"></i> Git</span>
            <span class="eco-pill"><i class="devicon-github-original colored"></i> GitHub</span>
            <span class="eco-pill"><i class="devicon-visualstudio-plain colored"></i> Visual Studio</span>
            <span class="eco-pill"><i class="devicon-vscode-plain colored"></i> VS Code</span>
            <span class="eco-pill"><i class="devicon-androidstudio-plain colored"></i> Android Studio</span>
            <span class="eco-pill">NetBeans</span>
            <span class="eco-pill">XAMPP</span>
          </div>
        </div>

      </div>
    </section>

    <div class="eco-modal" id="ecoModal" aria-hidden="true">
      <div class="eco-modal-backdrop" data-eco-modal-close></div>
      <section class="eco-modal-panel" role="dialog" aria-modal="true" aria-labelledby="ecoModalTitle">
        <button type="button" class="eco-modal-close" data-eco-modal-close aria-label="Close technology details">&times;</button>
        <span class="section-mono-kicker">CAPABILITY.NODE</span>
        <h2 class="eco-modal-title" id="ecoModalTitle"></h2>
        <p class="eco-modal-description" id="ecoModalDescription"></p>
        <div class="eco-modal-tags" id="ecoModalTags"></div>
      </section>
    </div>



    <!-- ==========================================================================
         Professional Certifications Showcase Section
         ========================================================================== -->
    <section class="editorial-section" id="certifications">
      <div class="section-title-wrap">
        <span class="section-mono-kicker">CREDENTIALS.VERIFIED</span>
        <h2 class="editorial-serif-heading">Professional <span class="editorial-italic">Certifications</span></h2>
        <p class="section-subtitle-text">
          Industry-standard credentials issued by Certiport (Pearson VUE) validating computer literacy, digital safety, and enterprise networking architecture.
        </p>
      </div>

      <div class="certifications-editorial-grid">
        
        <!-- Certificate 1: IC3 GS6 Level 1 -->
        <article class="cert-showcase-card">
          <div class="cert-preview-frame" data-cert-preview="cert_ic3_preview.png" data-cert-title="IC3 Digital Literacy Certification — Global Standard Six (Level 1)" data-cert-meta="Certiport (A Pearson VUE Business) • Issue Date: November 14, 2024 • ID: wAmNX-2FLL" data-cert-pdf="CERTI.pdf" title="Click to view full certificate">
            <img src="cert_ic3_preview.png" alt="IC3 Digital Literacy Certification - Global Standard Six Level 1 Certificate" class="cert-preview-img" loading="lazy">
            <div class="cert-preview-overlay">
              <span class="cert-zoom-cue">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                Zoom Full Certificate
              </span>
            </div>
          </div>

          <div class="cert-card-body">
            <div class="cert-meta-header">
              <span class="cert-badge-issuer">Certiport • Pearson VUE</span>
              <span class="cert-badge-verified"><span class="verified-dot-pulse"></span> Verified Credential</span>
            </div>

            <h3 class="cert-title-editorial">IC3 Digital Literacy — GS6 Level 1</h3>
            <div class="cert-date-validity">
              <span>📅 Issued: November 14, 2024</span>
              <span style="opacity: 0.4;">•</span>
              <span>Global Standard Six</span>
            </div>

            <p class="cert-description-text">
              Demonstrated verified mastery of Computing Fundamentals, Technology Basics, Digital Citizenship, Information Management, Content Creation, and Safety &amp; Cybersecurity.
            </p>

            <div class="cert-credential-strip">
              <span class="cert-cred-label">Credential Verification ID</span>
              <div class="cert-cred-code-wrap">
                <span class="cert-cred-code">wAmNX-2FLL</span>
                <button type="button" class="btn-copy-cred" data-code="wAmNX-2FLL" aria-label="Copy verification code wAmNX-2FLL">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  Copy
                </button>
              </div>
            </div>

            <div class="cert-competencies-grid">
              <span class="cert-skill-pill">Technology Basics</span>
              <span class="cert-skill-pill">Digital Citizenship</span>
              <span class="cert-skill-pill">Cybersecurity &amp; Safety</span>
              <span class="cert-skill-pill">Information Management</span>
              <span class="cert-skill-pill">Content Creation</span>
              <span class="cert-skill-pill">ACE College Credit</span>
              <span class="cert-skill-pill">ISTE Seal (2025–2027)</span>
            </div>

            <div class="cert-action-cluster">
              <a href="CERTI.pdf" target="_blank" rel="noopener" class="btn-cert-primary">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                View PDF Document
              </a>
              <a href="https://verify.certiport.com" target="_blank" rel="noopener" class="btn-cert-secondary" title="Verify on official Certiport verification portal">
                Verify on Certiport ↗
              </a>
            </div>
          </div>
        </article>

        <!-- Certificate 2: IT Specialist - Networking -->
        <article class="cert-showcase-card">
          <div class="cert-preview-frame" data-cert-preview="cert_networking_preview.png" data-cert-title="Information Technology Specialist: Networking" data-cert-meta="Certiport (A Pearson VUE Business) / CertNexus • Awarded: October 17, 2025 • ID: wNnKq-2F9s • Valid 5 Years" data-cert-pdf="networking.pdf" title="Click to view full certificate">
            <img src="cert_networking_preview.png" alt="IT Specialist Networking Certificate" class="cert-preview-img" loading="lazy">
            <div class="cert-preview-overlay">
              <span class="cert-zoom-cue">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                Zoom Full Certificate
              </span>
            </div>
          </div>

          <div class="cert-card-body">
            <div class="cert-meta-header">
              <span class="cert-badge-issuer">Certiport • CertNexus • Pearson</span>
              <span class="cert-badge-verified"><span class="verified-dot-pulse"></span> Verified Credential</span>
            </div>

            <h3 class="cert-title-editorial">IT Specialist: Networking</h3>
            <div class="cert-date-validity">
              <span>📅 Awarded: October 17, 2025</span>
              <span style="opacity: 0.4;">•</span>
              <span>Valid 5 Years (Through 2030)</span>
            </div>

            <p class="cert-description-text">
              Demonstrated validated proficiency in TCP/IP networking, IPv4 &amp; IPv6 subnetting, local and wide area network architectures, routing, network security protocols, and hardware troubleshooting.
            </p>

            <div class="cert-credential-strip">
              <span class="cert-cred-label">Credential Verification ID</span>
              <div class="cert-cred-code-wrap">
                <span class="cert-cred-code">wNnKq-2F9s</span>
                <button type="button" class="btn-copy-cred" data-code="wNnKq-2F9s" aria-label="Copy verification code wNnKq-2F9s">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  Copy
                </button>
              </div>
            </div>

            <div class="cert-competencies-grid">
              <span class="cert-skill-pill">TCP/IP Protocol Suite</span>
              <span class="cert-skill-pill">IPv4 / IPv6 Subnetting</span>
              <span class="cert-skill-pill">OSI 7-Layer Reference</span>
              <span class="cert-skill-pill">LAN / WAN Infrastructure</span>
              <span class="cert-skill-pill">Network Security &amp; Firewalls</span>
              <span class="cert-skill-pill">Wired &amp; Wireless (802.11)</span>
              <span class="cert-skill-pill">Packet Diagnostics</span>
            </div>

            <div class="cert-action-cluster">
              <a href="networking.pdf" target="_blank" rel="noopener" class="btn-cert-primary">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                View PDF Document
              </a>
              <a href="https://verify.certiport.com" target="_blank" rel="noopener" class="btn-cert-secondary" title="Verify on official Certiport verification portal">
                Verify on Certiport ↗
              </a>
            </div>
          </div>
        </article>

      </div>
    </section>

    <!-- ==========================================================================
         Official ATS 1-Page Resume (Matches TOLENTINO_CV.pdf)
         ========================================================================== -->
    <section class="editorial-section" id="resume">
      <div class="section-title-wrap">
        <span class="section-mono-kicker">OFFICIAL.DOCUMENT</span>
        <h2 class="editorial-serif-heading">ATS 1-Page <span class="editorial-italic">Resume</span></h2>
        <p class="section-subtitle-text">
          Standardized single-page recruiter curriculum vitae matching TOLENTINO_CV.pdf with exact letter alignment and clean printability.
        </p>
      </div>

      <div class="resume-viewer-wrap">
        
        <div class="viewer-toolbar">
          <span class="viewer-label">Document: Romeo_Paolo_Tolentino_Resume.pdf (A4 / 1-Page)</span>
          <button type="button" class="btn btn-primary burning-pdf-button" id="btnSheetPrint">Print / Download PDF</button>
        </div>

        <article class="paper-sheet" id="printablePaperSheet">
          
          <!-- Header -->
          <header class="sheet-header">
            <h1 class="sheet-name">Romeo Paolo L. Tolentino</h1>
            <div class="sheet-contact-line">
              <span>+63 9668257301</span>
              <span class="sheet-pipe">|</span>
              <a href="mailto:romeopaolotolentino@gmail.com" class="sheet-contact-link">romeopaolotoletino@gmail.com</a>
              <span class="sheet-pipe">|</span>
              <span>Batangas, Philippines</span>
              <span class="sheet-pipe">|</span>
              <a href="https://github.com/RpTolentino711" target="_blank" rel="noopener" class="sheet-contact-link">https://github.com/RpTolentino711</a>
            </div>
          </header>

          <!-- Education -->
          <section class="sheet-section">
            <h2 class="sheet-section-title">EDUCATION</h2>
            <div class="sheet-edu-block">
              <div class="sheet-flex-row">
                <span class="sheet-bold-title">National University</span>
                <span class="sheet-right-badge">Expected 2027</span>
              </div>
              <div class="sheet-sub-text">Bachelor of Science in Information Technology - Specialization in Mobile and Web Applications</div>
              <div class="sheet-meta-text">Society of Information Technology Students</div>
            </div>
          </section>

          <!-- Technical Skills -->
          <section class="sheet-section">
            <h2 class="sheet-section-title">TECHNICAL SKILLS</h2>
            <div class="sheet-skills-list">
              <div class="sheet-skill-row"><span class="sheet-skill-label">Languages:</span> <span class="sheet-skill-value">C#, C++, Java, Kotlin, PHP, JavaScript, HTML, CSS, SQL</span></div>
              <div class="sheet-skill-row"><span class="sheet-skill-label">Frameworks &amp; Development:</span> <span class="sheet-skill-value">.NET MAUI, ASP.NET, Flutter, Laravel, Android Development</span></div>
              <div class="sheet-skill-row"><span class="sheet-skill-label">Frontend:</span> <span class="sheet-skill-value">React, Next.js, React Native, Expo, Tailwind CSS, Bootstrap, Framer Motion</span></div>
              <div class="sheet-skill-row"><span class="sheet-skill-label">Database:</span> <span class="sheet-skill-value">MySQL, SQLite, MariaDB, Firebase</span></div>
              <div class="sheet-skill-row"><span class="sheet-skill-label">Developer Tools:</span> <span class="sheet-skill-value">Visual Studio Code, Antigravity, Git, GitHub</span></div>
              <div class="sheet-skill-row"><span class="sheet-skill-label">DevOps &amp; Cloud:</span> <span class="sheet-skill-value">GitHub Actions</span></div>
              <div class="sheet-skill-row"><span class="sheet-skill-label">APIs &amp; Integration:</span> <span class="sheet-skill-value">REST APIs, PayMongo API, Groq API, Webhooks</span></div>
              <div class="sheet-skill-row"><span class="sheet-skill-label">AI &amp; Data:</span> <span class="sheet-skill-value">NLP, Random Forest, LLM/API Integration</span></div>
              <div class="sheet-skill-row"><span class="sheet-skill-label">Design &amp; Prototyping:</span> <span class="sheet-skill-value">Figma</span></div>
            </div>
          </section>

          <!-- Projects -->
          <section class="sheet-section">
            <h2 class="sheet-section-title">PROJECTS</h2>

            <!-- RentEase -->
            <div class="sheet-project-block">
              <div class="sheet-proj-heading">
                <span class="sheet-proj-name-bold">RentEase</span>
                <span class="sheet-pipe">|</span>
                <span class="sheet-proj-tech">C#, .NET MAUI, SQLite, PayMongo API</span>
              </div>
              <ul class="sheet-proj-list">
                <li>Developed a cross-platform item rental application using .NET MAUI with an offline-first SQLite database.</li>
                <li>Implemented item listing, rental management, user authentication, and role-based buyer/seller functionality.</li>
                <li>Integrated PayMongo for secure payment processing and transaction handling.</li>
              </ul>
            </div>

            <!-- IDENTITRACK -->
            <div class="sheet-project-block">
              <div class="sheet-proj-heading">
                <span class="sheet-proj-name-bold">IDENTITRACK</span>
                <span class="sheet-pipe">|</span>
                <span class="sheet-proj-tech">PHP, JavaScript, MySQL, XAMPP, NFC, FLUTTER, REST API, Groq API, Random Forest</span>
              </div>
              <ul class="sheet-proj-list">
                <li>Developed a digital infraction and progressive offense management system for National University Lipa.</li>
                <li>Implemented NFC-enabled student identification, offense tracking, community service monitoring, notifications, and violation letter generation.</li>
                <li>Integrated AI-assisted offense analysis using REST APIs, NLP, Random Forest, and LLM capabilities to provide handbook-based consequence suggestions for UPCC personnel.</li>
              </ul>
            </div>

            <!-- ASRT -->
            <div class="sheet-project-block">
              <div class="sheet-proj-heading">
                <span class="sheet-proj-name-bold">ASRT</span>
                <span class="sheet-pipe">|</span>
                <span class="sheet-proj-tech">PHP, JavaScript, MySQL, XAMPP</span>
              </div>
              <ul class="sheet-proj-list">
                <li>Developed a web-based system using PHP and MySQL to automate administrative processes and improve record management.</li>
                <li>Implemented CRUD operations, database-driven workflows, authentication, and role-based system functionality.</li>
                <li>Designed responsive interfaces and integrated backend validation for reliable data management.</li>
              </ul>
            </div>

            <!-- Notiflow -->
            <div class="sheet-project-block">
              <div class="sheet-proj-heading">
                <span class="sheet-proj-name-bold">Notiflow</span>
                <span class="sheet-pipe">|</span>
                <span class="sheet-proj-tech">Java, Android Studio, SQLite</span>
              </div>
              <ul class="sheet-proj-list">
                <li>Developed an Android notification and task reminder application for professors and students.</li>
                <li>Implemented CRUD functionality for creating and managing scheduled academic tasks and notifications.</li>
                <li>Integrated time-based notifications and device alarms to automatically alert students when assigned tasks reach their scheduled time.</li>
              </ul>
            </div>
          </section>

          <!-- Courses and Certifications -->
          <section class="sheet-section">
            <h2 class="sheet-section-title">COURSES AND CERTIFICATIONS</h2>

            <div class="sheet-cert-block">
              <div class="sheet-flex-row">
                <span class="sheet-bold-title">Certiport (Pearson VUE) — IC3 Digital Literacy GS6 Level 1</span>
                <span class="sheet-right-badge">Nov 2024</span>
              </div>
              <div class="sheet-meta-text">Credential ID: <strong>wAmNX-2FLL</strong> &bull; verify.certiport.com &bull; Accredited by ACE &amp; ISTE</div>
              <p class="sheet-cert-desc">Technology Basics, Digital Citizenship, Information Management, Content Creation, Collaboration Etiquette, and Cybersecurity &amp; Safety.</p>
            </div>

            <div class="sheet-cert-block">
              <div class="sheet-flex-row">
                <span class="sheet-bold-title">Certiport (Pearson VUE / CertNexus) — IT Specialist in Networking</span>
                <span class="sheet-right-badge">Oct 2025</span>
              </div>
              <div class="sheet-meta-text">Credential ID: <strong>wNnKq-2F9s</strong> &bull; verify.certiport.com &bull; 5-Year Industry Credential (Through 2030)</div>
              <p class="sheet-cert-desc">TCP/IP Protocol Suite, IPv4 &amp; IPv6 Addressing and Subnetting, Network Architecture (LAN/WAN), Routing &amp; Switching, OSI 7-Layer Model, Network Security, and Troubleshooting.</p>
            </div>
          </section>

        </article>

      </div>
    </section>

  </main>

  <!-- ==========================================================================
      High-Impact Editorial Footer
       ========================================================================== -->
  <footer class="editorial-footer">
    <div class="footer-cta-container">
      <span class="footer-mono-kicker">OFFICIAL RESUME</span>
      <h2 class="footer-giant-heading">Built with <span class="editorial-italic">logic.</span><br>Driven by discipline.</h2>
      <p class="footer-sub-text">
        “I build with logic, work with discipline, and keep improving until the result speaks for itself.”
      </p>

      <div class="footer-action-buttons">
        <a href="mailto:<?= $email ?>" class="editorial-primary-btn">
          <span>Get in Touch (<?= $email ?>)</span>
          <span class="arrow-glyph">↗</span>
        </a>
      </div>
    </div>

    <!-- Bottom Directory & Copyright Strip -->
    <div class="footer-bottom-strip">
      <div class="footer-bottom-container">
        <div class="footer-brand-mono">ROMEO PAOLO TOLENTINO &nbsp;•&nbsp; BSIT NU LIPA</div>
        <div class="footer-location-mono">◎ LIPA CITY, BATANGAS, PHILIPPINES</div>
        <div class="footer-copyright-mono">&copy; <?= date('Y') ?> ROMEO PAOLO L. TOLENTINO. ALL RIGHTS RESERVED.</div>
      </div>
    </div>
  </footer>

  <!-- Certificate Lightbox Modal -->
  <div class="cert-lightbox" id="certLightbox" aria-hidden="true" role="dialog" aria-labelledby="certLightboxTitle">
    <div class="cert-lightbox-container">
      <div class="cert-lightbox-header">
        <h3 class="cert-lightbox-title" id="certLightboxTitle">Certificate Preview</h3>
        <button type="button" class="cert-lightbox-close" id="certLightboxClose" aria-label="Close certificate preview">&times;</button>
      </div>
      <div class="cert-lightbox-body">
        <img src="" alt="Certificate High-Resolution Preview" id="certLightboxImg" class="cert-lightbox-img">
      </div>
      <div class="cert-lightbox-footer">
        <div class="cert-lightbox-meta" id="certLightboxMeta"></div>
        <a href="#" target="_blank" rel="noopener" class="btn-cert-primary" id="certLightboxPdfLink">
          <span>Open Full Original PDF Document</span>
          <span class="arrow-glyph">↗</span>
        </a>
      </div>
    </div>
  </div>

  <!-- Toast Feedback -->
  <div class="toast" id="toastNotification">
    <span id="toastMessage">Ready</span>
  </div>

  <!-- Scripts -->
  <script src="script.js"></script>
</body>
</html>
