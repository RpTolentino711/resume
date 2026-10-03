# 📄 Romeo Paolo L. Tolentino — Official Software Developer Portfolio & ATS Resume (PHP)

A modern, high-performance, and executive-styled portfolio and ATS-compliant OJT resume website for **Romeo Paolo L. Tolentino**, a Fourth-Year Bachelor of Science in Information Technology (BSIT) student from **National University Lipa**.

---

## 🏛️ Design & Engineering Highlights

- **📱 Fully Responsive Mobile-First Architecture**:
  - Touch-friendly navigation with an animated slide-down mobile menu drawer.
  - Fluid typography using CSS `clamp()` ensuring headings, hero titles, and badges scale cleanly down to 320px mobile screens without horizontal clipping.
  - Interactive touch events (`touchstart`, `touchmove`, `touchend`) enabled on the falling name letters background for mobile phone users.
- **🏛️ Rich Executive Multi-Column Footer**:
  - **Column 1**: Monogram `RT`, candidate summary, National University Lipa affiliation, and Lipa City, Batangas location tag.
  - **Column 2 (Navigation)**: Quick links to Candidate Profile, Technical Stack, Projects, ATS Resume, and Back to Top.
  - **Column 3 (Connect & Contact)**: Direct email link, phone number, GitHub Profile, and LinkedIn Profile.
  - **Column 4 (Recruiter Action)**: Dedicated *"Download PDF (1-Page)"* action button.
  - **Sub-footer bar**: Copyright and official university attribution.
- **Falling Name Letters Ambient Particle Animation**:
  - The letters of your name (`R`, `O`, `M`, `E`, `O`, `P`, `A`, `O`, `L`, `O`, `T`, `O`, `L`, `E`, `N`, `T`, `I`, `N`, `O`) gently drift and sway down in the background.
  - Rendered using a lightweight 60fps HTML5 Canvas with glowing cyan, indigo, violet, and mint tones.
  - Interactive: letters glide away when your cursor or mobile touch passes near them!
- **Executive Engineering Aesthetic**:
  - Dark obsidian palette (`#07090e`), animated aurora gradient mesh, and crisp borderlines inspired by top software engineering brands (Linear, Vercel, Stripe).
  - High-contrast typography featuring Google Fonts (**Outfit**, **Inter**, and **JetBrains Mono**).
- **Academic & Candidate Credibility**:
  - **Institution**: National University Lipa — Fourth-Year BSIT Student.
  - **Academic Distinction**: Dean's List recognition.
  - **Target Position**: IT Intern / Software Developer Intern / IT OJT.
  - **Discipline & Consistency**: Demonstrates how dedicated physical training and gym discipline translate into deep focus, endurance, and persistence when solving software problems and debugging.
- **Categorized Technical Arsenal**:
  - **Languages**: C#, Java, Kotlin, PHP, JavaScript, SQL
  - **Frameworks & Platforms**: .NET MAUI, .NET 9, ASP.NET, Android, Laravel
  - **Databases**: MySQL, MariaDB, SQLite
  - **Development Tools**: Visual Studio, VS Code, Android Studio, NetBeans, XAMPP, Git
  - **APIs & Integrations**: REST APIs, PayMongo, LLM APIs, OTP/Email services
  - **AI & Data**: NLP, Random Forest, LLM API Integration, AI Decision Support
  - **Architecture**: NFC, CRUD, MVVM, Offline-First, RBAC, Authentication/Session
- **Priority-Ranked Project Architecture**:
  1. **IDENTITRACK** (*Capstone Full Stack Developer*): Digital Infraction and Progressive Offense Management System for NU Lipa Student Discipline Office (SDO) with NFC student ID integration, LLM-based AI decision support, UPCC case hearings, rule-based letters, and audit logs.
  2. **RentEase**: Cross-platform item rental app built with C#, .NET MAUI, SQLite, and PayMongo.
  3. **ASRT**: Web-based database management system built with PHP, MySQL/MariaDB, and XAMPP.
  4. **Notiflow**: Android task notification application with professor/student roles and scheduled alarm alerts.
  5. **WealthWise**: Offline-first personal finance manager using .NET 9 MAUI, SQLite, and MVVM architecture.
  6. **Pasabuy**: Student marketplace app built with .NET MAUI, featuring tiered posting fees via PayMongo.
  7. **Pokémon Application**: Java desktop application built in NetBeans demonstrating OOP principles.
- **Embedded Recruiter Document View (ATS-Compliant Paper Sheet)**:
  - Clean white document preview with full ATS compliance.
  - Dedicated **1-Click Print / Download PDF** action that triggers tailored `@media print` rules, cleanly exporting a formal 1-page paper resume without website headers, backgrounds, canvas animations, or navigation bars.

---

## 🚀 How to Run Locally

Start PHP's built-in web server in PowerShell:

```powershell
php -S localhost:8000
```

Then open your browser at:
👉 **[http://localhost:8000](http://localhost:8000)**

---

## 🖨️ PDF Export Guide

1. Click **"Download PDF"** in the top navigation, document toolbar, or footer.
2. In the print dialog:
   - **Destination**: Choose **"Save as PDF"**.
   - **Layout**: **Portrait**.
   - **Paper Size**: **A4**.
   - **Margins**: **Default** or **None**.
   - **Options**: Enable **"Background graphics"**.
3. Click **Save**!
