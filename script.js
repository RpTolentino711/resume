/**
 * ROMEO PAOLO L. TOLENTINO — Digital Resume & Portfolio
 * Editorial Motion, 3D Perspective Tilt, Scroll Reveal Engine & ATS PDF Export
 */

(function () {
  'use strict';

  // Toast feedback system
  let toastTimer = null;
  function showToast(message) {
    const toast = document.getElementById('toastNotification');
    const toastMsg = document.getElementById('toastMessage');
    if (!toast || !toastMsg) return;
    toastMsg.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  // Handle Official PDF Download
  function triggerPrint(e) {
    showToast('Downloading official ATS CV (TOLENTINO_CV.pdf)...');
    const target = e?.currentTarget || e?.target;
    if (!target || !target.getAttribute || !target.getAttribute('download')) {
      if (e && e.preventDefault) e.preventDefault();
      const a = document.createElement('a');
      a.href = 'TOLENTINO_CV.pdf';
      a.download = 'TOLENTINO_CV.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
  }

  // Floating Pill Nav - Handled with continuous interpolation inside setupCelestialStarNav
  function setupScrollSpy() {
    // Unified within setupCelestialStarNav for 60fps sub-pixel gliding accuracy
  }

  // Give the floating navigation a little life while the viewer moves through the page.
  function setupNavigationMotion() {
    const header = document.querySelector('.editorial-header');
    if (!header) return;

    let lastScrollY = window.scrollY;
    let scrollTimer = null;

    function updateNavigationMotion() {
      const scrollY = Math.max(0, window.scrollY);
      const delta = scrollY - lastScrollY;

      header.classList.toggle('at-page-top', scrollY < 24);

      if (Math.abs(delta) > 2) {
        header.classList.toggle('scrolling-down', delta > 0);
        header.classList.toggle('scrolling-up', delta < 0);
        header.classList.add('is-scrolling');

        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
          header.classList.remove('is-scrolling');
        }, 260);
      }

      lastScrollY = scrollY;
    }

    updateNavigationMotion();
    window.addEventListener('scroll', updateNavigationMotion, { passive: true });
  }

  // Mobile Navigation Drawer with Floating Celestial Star Tracker
  function setupMobileNav() {
    const mobileBtn = document.getElementById('btnMobileToggle');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const starTracker = document.getElementById('mobileStarTracker');
    const orbitStar = document.getElementById('mobileOrbitStar');
    const mobileLinks = Array.from(document.querySelectorAll('.mobile-drawer-link'));
    if (!mobileBtn || !mobileDrawer) return;

    const sectionIds = ['hero', 'about', 'projects', 'ecosystem', 'certifications', 'resume'];
    let currentMobileActiveIdx = 0;
    let isMobileSpinning = false;

    function determineActiveIndex() {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const scrollFocus = scrollY + 160;

      // Bottom of page check
      if ((window.innerHeight + scrollY) >= (document.documentElement.scrollHeight - 60)) {
        return sectionIds.length - 1; // resume
      }

      let activeIdx = 0;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = rect.top + scrollY;
          if (scrollFocus >= top - 20) {
            activeIdx = i;
            break;
          }
        }
      }
      return activeIdx;
    }

    function triggerMobileAggressiveSpin() {
      if (isMobileSpinning) return;
      isMobileSpinning = true;

      if (orbitStar) orbitStar.classList.add('aggressive-orbit');
      if (starTracker) starTracker.classList.add('aggressive-orbit');

      // Sparkle bursts
      for (let i = 0; i < 6; i++) {
        setTimeout(() => {
          if (!orbitStar) return;
          const rect = orbitStar.getBoundingClientRect();
          const sx = rect.left + rect.width / 2;
          const sy = rect.top + rect.height / 2;
          const spark = document.createElement('div');
          spark.className = 'falling-star-sparkle';
          spark.style.left = sx + 'px';
          spark.style.top = sy + 'px';
          const a = Math.random() * Math.PI * 2;
          const d = 14 + Math.random() * 24;
          spark.style.setProperty('--tx', `${Math.cos(a) * d}px`);
          spark.style.setProperty('--ty', `${Math.sin(a) * d}px`);
          document.body.appendChild(spark);
          setTimeout(() => spark.remove(), 550);
        }, i * 65);
      }

      setTimeout(() => {
        if (orbitStar) orbitStar.classList.remove('aggressive-orbit');
        if (starTracker) starTracker.classList.remove('aggressive-orbit');
        isMobileSpinning = false;
      }, 1200);
    }

    function positionStarTracker(activeIdx) {
      if (!mobileLinks.length) return;
      currentMobileActiveIdx = Math.max(0, Math.min(activeIdx, mobileLinks.length - 1));
      const targetLink = mobileLinks[currentMobileActiveIdx];

      mobileLinks.forEach((link, idx) => {
        if (idx === currentMobileActiveIdx) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });

      if (starTracker && targetLink && mobileDrawer.classList.contains('open')) {
        const top = targetLink.offsetTop;
        const height = targetLink.offsetHeight;
        if (height > 0) {
          starTracker.style.transform = `translate3d(0, ${top}px, 0)`;
          starTracker.style.height = `${height}px`;
          starTracker.style.opacity = '1';
        }
      }
    }

    function syncMobileActive(override = null) {
      let activeIdx = 0;
      if (typeof override === 'number') {
        activeIdx = override;
      } else if (typeof override === 'string') {
        const found = sectionIds.indexOf(override.replace('#', ''));
        activeIdx = found >= 0 ? found : determineActiveIndex();
      } else {
        activeIdx = determineActiveIndex();
      }
      positionStarTracker(activeIdx);
    }

    window.__syncMobileNav = syncMobileActive;

    // Toggle drawer open/close
    mobileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = mobileDrawer.classList.toggle('open');
      if (isOpen) {
        requestAnimationFrame(() => {
          setTimeout(() => {
            syncMobileActive();
          }, 30);
        });
      }
    });

    // Close when tapping outside
    const handleOutsideTap = (e) => {
      if (!mobileDrawer.contains(e.target) && !mobileBtn.contains(e.target)) {
        mobileDrawer.classList.remove('open');
      }
    };
    document.addEventListener('click', handleOutsideTap);
    document.addEventListener('touchstart', handleOutsideTap, { passive: true });

    // Handle clicks on mobile links
    mobileLinks.forEach((link, idx) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const href = link.getAttribute('href');
        if (!href || !href.startsWith('#')) return;

        // Check if user is ALREADY at this section:
        const currentActive = determineActiveIndex();
        const isAlreadyHere = (idx === currentActive) || (idx === currentMobileActiveIdx && link.classList.contains('active'));

        if (isAlreadyHere) {
          // If clicked again while at the content -> the star spins furiously!
          triggerMobileAggressiveSpin();
          return;
        }

        // Move floating star tracker immediately to the clicked item
        positionStarTracker(idx);

        const targetEl = document.querySelector(href);
        if (targetEl) {
          const header = document.querySelector('.editorial-header');
          const headerH = header ? header.offsetHeight : 64;
          const rect = targetEl.getBoundingClientRect();
          const scrollY = window.pageYOffset || document.documentElement.scrollTop;
          const targetTop = Math.max(0, rect.top + scrollY - headerH - 12);

          window.scrollTo({
            top: targetTop,
            behavior: 'smooth'
          });

          if (history.pushState) {
            history.pushState(null, '', href);
          }
        }

        // Close drawer after short visual confirmation so user sees the star move
        setTimeout(() => {
          mobileDrawer.classList.remove('open');
        }, 160);
      });
    });

    // Continuously update floating star as user scrolls on phone
    window.addEventListener('scroll', () => {
      syncMobileActive();
    }, { passive: true });

    // Initial sync
    setTimeout(syncMobileActive, 100);
  }

  // Celestial Star Navigation Engine:
  // 1. Falling star shoots down when any navigation item is clicked and transports viewer
  // Celestial Star Navigation Engine:
  // 1. Continuous forward/backward traveling star as you scroll up & down the resume
  // 2. Continuous orbit circling around whatever navigation item you are currently at
  // 3. Falling star: when clicking any nav item, the circling star breaks away and falls down into the viewport
  function setupCelestialStarNav() {
    const tracker = document.getElementById('navStarTracker');
    const orbitStar = document.getElementById('navOrbitStar');
    const pillNav = document.getElementById('floatingPillNav');
    const navLinks = Array.from(document.querySelectorAll('.pill-nav-link'));
    if (!tracker || !orbitStar || !pillNav || !navLinks.length) return;

    const sectionIds = ['hero', 'about', 'projects', 'ecosystem', 'certifications', 'resume'];
    let orbitAngle = 0;
    let isClickTransporting = false;
    let scrollStopTimer = null;
    let lastScrollY = window.scrollY;

    // Cache metrics for nav items
    let navMetrics = [];
    function refreshNavMetrics() {
      const pillRect = pillNav.getBoundingClientRect();
      if (pillRect.width === 0) return;
      navMetrics = navLinks.map(link => {
        const r = link.getBoundingClientRect();
        return {
          left: r.left - pillRect.left,
          top: r.top - pillRect.top,
          width: r.width,
          height: r.height,
          href: link.getAttribute('href')
        };
      });
    }
    refreshNavMetrics();
    window.addEventListener('resize', () => {
      refreshNavMetrics();
      updateStarFromScroll();
    }, { passive: true });

    // Cache section top offsets in page
    // Cache section boundaries using true absolute document coordinates
    function getSectionsData() {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      return sectionIds.map(id => {
        const el = document.getElementById(id);
        if (!el) return { id, top: 0, height: 0, bottom: 0 };
        const rect = el.getBoundingClientRect();
        const top = rect.top + scrollY;
        const height = el.offsetHeight;
        return { id, top, height, bottom: top + height };
      });
    }

    let trackerX = 0;
    let trackerW = 80;
    let trackerH = 40;
    let trackerY = 0;

    // Set tracker position directly (during smooth scroll tracking) or with transition
    function applyTrackerPosition(x, w, h, y, smooth = false) {
      trackerX = x;
      trackerW = w;
      trackerH = h;
      trackerY = y;

      if (!smooth) {
        tracker.style.transition = 'none';
      } else {
        tracker.style.transition = 'transform 0.65s cubic-bezier(0.22, 1, 0.36, 1), width 0.55s cubic-bezier(0.22, 1, 0.36, 1), height 0.55s cubic-bezier(0.22, 1, 0.36, 1)';
      }
      tracker.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      tracker.style.width = `${w.toFixed(1)}px`;
      tracker.style.height = `${h.toFixed(1)}px`;
      tracker.classList.add('ready');
    }

    // Calculate current scroll progress across sections and move star forward or backward
    function updateStarFromScroll() {
      if (isClickTransporting) return;
      if (!navMetrics.length || navMetrics[0].width === 0) refreshNavMetrics();

      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const sections = getSectionsData();
      const n = sections.length;

      // Detect scroll direction (forward / backward)
      const delta = scrollY - lastScrollY;
      if (Math.abs(delta) > 1.5) {
        if (delta > 0) {
          tracker.classList.add('traveling-down');
          tracker.classList.remove('traveling-up');
        } else {
          tracker.classList.add('traveling-up');
          tracker.classList.remove('traveling-down');
        }
        clearTimeout(scrollStopTimer);
        scrollStopTimer = setTimeout(() => {
          tracker.classList.remove('traveling-down', 'traveling-up');
        }, 180);
      }
      lastScrollY = scrollY;

      // Optical viewing focus line (240px below the sticky header)
      const scrollFocus = scrollY + 240;

      // 1. Determine active section strictly based on where the user actually is
      let activeIndex = 0;
      for (let i = 0; i < n; i++) {
        const s = sections[i];
        if (scrollFocus >= s.top && scrollFocus < s.bottom) {
          activeIndex = i;
          break;
        }
      }

      // Edge case: scrolled to bottom of document
      if ((window.innerHeight + scrollY) >= (document.documentElement.scrollHeight - 70)) {
        activeIndex = n - 1; // resume
      }

      // 2. Smooth micro-glide when approaching section boundary
      const currentSec = sections[activeIndex];
      const metricCurrent = navMetrics[activeIndex] || navMetrics[0];
      const nextIndex = Math.min(activeIndex + 1, n - 1);
      const metricNext = navMetrics[nextIndex] || metricCurrent;

      const distToBottom = currentSec.bottom - scrollFocus;
      const threshold = Math.min(220, currentSec.height * 0.35);

      let forwardGlide = 0;
      if (activeIndex < n - 1 && distToBottom < threshold && distToBottom >= 0) {
        const raw = 1 - (distToBottom / threshold);
        forwardGlide = raw * raw * (3 - 2 * raw) * 0.42;
      }

      const currentX = metricCurrent.left + (metricNext.left - metricCurrent.left) * forwardGlide;
      const currentW = metricCurrent.width + (metricNext.width - metricCurrent.width) * forwardGlide;
      const currentH = metricCurrent.height + (metricNext.height - metricCurrent.height) * forwardGlide;
      const currentY = metricCurrent.top;

      if (navMetrics.length && navMetrics[0].width > 0) {
        applyTrackerPosition(currentX, currentW, currentH, currentY, false);
      }

      // 3. Mark the active navigation link strictly
      navLinks.forEach((link, idx) => {
        if (idx === activeIndex) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });

      // 4. Synchronize mobile navigation star and active section tag
      if (typeof window.__syncMobileNav === 'function') {
        window.__syncMobileNav(sectionIds[activeIndex]);
      }
    }

    // Initialize initial position on load
    setTimeout(() => {
      refreshNavMetrics();
      updateStarFromScroll();
    }, 120);

    window.addEventListener('scroll', () => {
      updateStarFromScroll();
    }, { passive: true });

    // Orbit Animation Loop (RAF) & Aggressive Orbit Engine
    const baseOrbitSpeed = 0.045;
    let orbitSpeed = baseOrbitSpeed;
    let aggressiveTimer = null;
    let aggressiveSparksInterval = null;

    // Aggressive Orbit Mode: Triggered when user clicks the navigation tab they are ALREADY on
    function triggerAggressiveOrbit() {
      // 1. Instantly speed up orbit by ~6x into a furious spin!
      orbitSpeed = 0.28;

      orbitStar.classList.add('aggressive-orbit');
      tracker.classList.add('aggressive-orbit');

      // 2. Spray intense cosmic sparkles around the button while spinning aggressively
      clearInterval(aggressiveSparksInterval);
      const spraySpark = () => {
        const rect = orbitStar.getBoundingClientRect();
        const sx = rect.left + rect.width / 2;
        const sy = rect.top + rect.height / 2;
        const spark = document.createElement('div');
        spark.className = 'falling-star-sparkle';
        spark.style.left = sx + 'px';
        spark.style.top = sy + 'px';
        const a = Math.random() * Math.PI * 2;
        const d = 16 + Math.random() * 28;
        spark.style.setProperty('--tx', `${Math.cos(a) * d}px`);
        spark.style.setProperty('--ty', `${Math.sin(a) * d}px`);
        document.body.appendChild(spark);
        setTimeout(() => spark.remove(), 550);
      };

      spraySpark();
      aggressiveSparksInterval = setInterval(spraySpark, 65);

      // 3. Smoothly decrescendo and restore tranquil normal orbit after 1.35s
      clearTimeout(aggressiveTimer);
      aggressiveTimer = setTimeout(() => {
        clearInterval(aggressiveSparksInterval);
        orbitStar.classList.remove('aggressive-orbit');
        tracker.classList.remove('aggressive-orbit');

        const decay = setInterval(() => {
          orbitSpeed -= 0.02;
          if (orbitSpeed <= baseOrbitSpeed) {
            orbitSpeed = baseOrbitSpeed;
            clearInterval(decay);
          }
        }, 35);
      }, 1350);
    }

    // Star continuously circles around the capsule perimeter
    function animateOrbit() {
      orbitAngle += orbitSpeed;
      if (orbitAngle > Math.PI * 2) orbitAngle -= Math.PI * 2;

      const w = trackerW || 80;
      const h = trackerH || 40;
      const centerX = w / 2;
      const centerY = h / 2;
      const rx = (w / 2) + 7;
      const ry = (h / 2) + 6;

      const starX = centerX + rx * Math.cos(orbitAngle) - 11;
      const starY = centerY + ry * Math.sin(orbitAngle) - 11;

      orbitStar.style.transform = `translate3d(${starX.toFixed(2)}px, ${starY.toFixed(2)}px, 0)`;

      requestAnimationFrame(animateOrbit);
    }
    requestAnimationFrame(animateOrbit);

    // Falling Star on Click Transport Engine
    // If already at location -> spin aggressively! If navigating to new section -> star falls down and transports viewer
    function triggerCirclingStarFall(targetHref, targetElement) {
      if (!targetElement) return;

      // Check if user is ALREADY at this section:
      const activeLink = document.querySelector('.pill-nav-link.active');
      const isAlreadyHere = (targetElement === activeLink) || targetElement.classList.contains('active');

      if (isAlreadyHere) {
        // Star aggressively circles the active tab!
        triggerAggressiveOrbit();
        const r = targetElement.getBoundingClientRect();
        if (typeof window.__triggerCanvasWave === 'function') {
          window.__triggerCanvasWave(r.left + r.width / 2, r.top + r.height / 2);
        }
        return;
      }

      if (isClickTransporting) return;
      isClickTransporting = true;

      // 1. Get exact current coordinates of the circling star on screen
      const starRect = orbitStar.getBoundingClientRect();
      const startX = starRect.left + starRect.width / 2;
      const startY = starRect.top + starRect.height / 2;

      // 2. Hide the navbar star temporarily (it breaks away and falls)
      orbitStar.classList.add('star-falling-away');

      // 3. Create the falling star that plunges down from the circling star's coordinates
      const comet = document.createElement('div');
      comet.className = 'falling-star-comet';
      comet.style.left = startX + 'px';
      comet.style.top = startY + 'px';
      comet.innerHTML = `
        <div class="falling-star-trail"></div>
        <div class="falling-star-head">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="#ffffff" />
          </svg>
        </div>
      `;
      document.body.appendChild(comet);

      // Star sparkles bursting outward as it drops
      for (let i = 0; i < 10; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'falling-star-sparkle';
        sparkle.style.left = startX + 'px';
        sparkle.style.top = startY + 'px';
        const ang = (Math.PI * 2 * i) / 10;
        const dist = 18 + Math.random() * 32;
        sparkle.style.setProperty('--tx', `${Math.cos(ang) * dist}px`);
        sparkle.style.setProperty('--ty', `${Math.sin(ang) * dist + 20}px`);
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 750);
      }

      // 4. Trigger background fluid mesh canvas wave
      if (typeof window.__triggerCanvasWave === 'function') {
        window.__triggerCanvasWave(startX, startY);
      }

      // 5. Instantly slide the tracker to the clicked button with smooth transition
      const targetIndex = navLinks.indexOf(targetElement);
      if (targetIndex >= 0 && navMetrics[targetIndex]) {
        navLinks.forEach(l => l.classList.remove('active'));
        targetElement.classList.add('active');
        const m = navMetrics[targetIndex];
        applyTrackerPosition(m.left, m.width, m.height, m.top, true);
      }

      // 6. Smoothly transport viewer to the section using true document position
      if (targetHref && targetHref.startsWith('#')) {
        const targetEl = document.querySelector(targetHref);
        if (targetEl) {
          const headerOffset = 95;
          const rect = targetEl.getBoundingClientRect();
          const targetTop = rect.top + (window.pageYOffset || document.documentElement.scrollTop) - headerOffset;
          const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          window.scrollTo({
            top: Math.max(0, targetTop),
            behavior: reduceMotion ? 'auto' : 'smooth'
          });
        }
      }

      // 7. When the falling star finishes its descent (~850ms), re-land the circling star on the new active button
      setTimeout(() => {
        comet.remove();
        orbitStar.classList.remove('star-falling-away');
        orbitStar.classList.add('star-arrival');
        setTimeout(() => orbitStar.classList.remove('star-arrival'), 600);
        isClickTransporting = false;
        refreshNavMetrics();
        updateStarFromScroll();
      }, 850);
    }

    // Attach click listeners to all nav links
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        triggerCirclingStarFall(href, link);
      });
    });

    // Monogram link (Home)
    const monogram = document.querySelector('.monogram-link');
    if (monogram) {
      monogram.addEventListener('click', (e) => {
        e.preventDefault();
        const homeLink = document.querySelector('.pill-nav-link[href="#hero"]') || navLinks[0];
        triggerCirclingStarFall('#hero', homeLink);
      });
    }

    // Programming Languages & Tech Shower Easter Egg ("SYS.USER" Multi-Tap)
    const userTelemetry = document.getElementById('telemetryUser') || document.querySelector('.hero-telemetry-corner.telemetry-right');
    if (userTelemetry) {
      const userMainText = document.getElementById('telemetryUserMain');
      const userSubText = document.getElementById('telemetryUserSub');
      const userPopup = document.getElementById('codeRainPopup');

      const TECH_LANGUAGES = [
        { name: 'C#', bg: 'rgba(128, 58, 237, 0.95)', border: '#c084fc', glow: '#a855f7', color: '#ffffff' },
        { name: 'PHP', bg: 'rgba(79, 91, 147, 0.95)', border: '#818cf8', glow: '#6366f1', color: '#ffffff' },
        { name: 'JavaScript', bg: 'rgba(234, 179, 8, 0.95)', border: '#fef08a', glow: '#eab308', color: '#0f172a' },
        { name: 'Python', bg: 'rgba(2, 132, 199, 0.95)', border: '#7dd3fc', glow: '#38bdf8', color: '#fef08a' },
        { name: 'C++', bg: 'rgba(0, 89, 156, 0.95)', border: '#60a5fa', glow: '#3b82f6', color: '#ffffff' },
        { name: 'Java', bg: 'rgba(234, 88, 12, 0.95)', border: '#fdba74', glow: '#f97316', color: '#ffffff' },
        { name: 'Kotlin', bg: 'rgba(124, 58, 237, 0.95)', border: '#c084fc', glow: '#a855f7', color: '#ffffff' },
        { name: 'SQL', bg: 'rgba(14, 165, 233, 0.95)', border: '#38bdf8', glow: '#0ea5e9', color: '#ffffff' },
        { name: 'HTML5', bg: 'rgba(249, 115, 22, 0.95)', border: '#fed7aa', glow: '#ea580c', color: '#ffffff' },
        { name: 'CSS3', bg: 'rgba(37, 99, 235, 0.95)', border: '#93c5fd', glow: '#3b82f6', color: '#ffffff' },
        { name: '.NET MAUI', bg: 'rgba(81, 43, 212, 0.95)', border: '#a78bfa', glow: '#8b5cf6', color: '#ffffff' },
        { name: 'Flutter', bg: 'rgba(2, 132, 199, 0.95)', border: '#38bdf8', glow: '#0284c7', color: '#ffffff' },
        { name: 'React', bg: 'rgba(6, 182, 212, 0.95)', border: '#67e8f9', glow: '#06b6d4', color: '#ffffff' },
        { name: 'Laravel', bg: 'rgba(244, 63, 94, 0.95)', border: '#fda4af', glow: '#f43f5e', color: '#ffffff' },
        { name: 'MySQL', bg: 'rgba(0, 117, 143, 0.95)', border: '#5eead4', glow: '#14b8a6', color: '#ffffff' },
        { name: 'SQLite', bg: 'rgba(0, 59, 87, 0.95)', border: '#38bdf8', glow: '#0284c7', color: '#ffffff' },
        { name: 'Android', bg: 'rgba(22, 163, 74, 0.95)', border: '#86efac', glow: '#22c55e', color: '#ffffff' },
        { name: 'Git', bg: 'rgba(240, 80, 50, 0.95)', border: '#fca5a5', glow: '#ef4444', color: '#ffffff' },
        { name: 'Figma', bg: 'rgba(168, 85, 247, 0.95)', border: '#f472b6', glow: '#ec4899', color: '#ffffff' },
        { name: 'REST API', bg: 'rgba(13, 148, 136, 0.95)', border: '#2dd4bf', glow: '#14b8a6', color: '#ffffff' },
        { name: 'Firebase', bg: 'rgba(245, 158, 11, 0.95)', border: '#fde047', glow: '#eab308', color: '#0f172a' },
        { name: 'Next.js', bg: 'rgba(15, 23, 42, 0.98)', border: '#ffffff', glow: '#cbd5e1', color: '#ffffff' },
        { name: 'Tailwind CSS', bg: 'rgba(14, 165, 233, 0.95)', border: '#7dd3fc', glow: '#38bdf8', color: '#ffffff' },
        { name: 'Random Forest', bg: 'rgba(16, 185, 129, 0.95)', border: '#6ee7b7', glow: '#10b981', color: '#ffffff' },
        { name: 'LLM API', bg: 'rgba(147, 51, 234, 0.95)', border: '#d8b4fe', glow: '#a855f7', color: '#ffffff' }
      ];

      let userTapCount = 0;
      let userTapResetTimer = null;
      let userRevertTimer = null;

      function triggerCodeRain() {
        clearTimeout(userRevertTimer);
        userTelemetry.classList.add('is-code-rain');
        if (userMainText) userMainText.textContent = 'CODE RAIN!';
        if (userSubText) userSubText.textContent = 'ALL LANGUAGES DEPLOYED';
        if (userPopup) userPopup.setAttribute('aria-hidden', 'false');

        if (typeof showToast === 'function') {
          showToast('STACK OVERFLOW! Code rain initiated! 💻✨');
        }

        // Create falling language chips container
        let container = document.getElementById('fallingCodeContainer');
        if (!container) {
          container = document.createElement('div');
          container.id = 'fallingCodeContainer';
          container.className = 'falling-code-rain-container';
          document.body.appendChild(container);
        }

        // Spawn 45 language chips with staggered delays
        const count = 45;
        for (let i = 0; i < count; i++) {
          const lang = TECH_LANGUAGES[Math.floor(Math.random() * TECH_LANGUAGES.length)];
          const chip = document.createElement('div');
          chip.className = 'falling-lang-chip';
          chip.textContent = lang.name;

          // Randomize physics parameters
          const leftPercent = (Math.random() * 92 + 3).toFixed(1);
          const fallDelay = (Math.random() * 1.5).toFixed(2);
          const fallDuration = (Math.random() * 1.5 + 2.4).toFixed(2);
          const rotStart = (Math.random() * 40 - 20).toFixed(0);
          const rotMid1 = (Math.random() * 50 - 25).toFixed(0);
          const rotMid2 = (Math.random() * 50 - 25).toFixed(0);
          const rotEnd = (Math.random() * 90 - 45).toFixed(0);
          const sway1 = (Math.random() * 40 - 20).toFixed(0) + 'px';
          const sway2 = (Math.random() * 60 - 30).toFixed(0) + 'px';
          const sway3 = (Math.random() * 70 - 35).toFixed(0) + 'px';

          chip.style.left = `${leftPercent}%`;
          chip.style.setProperty('--fall-delay', `${fallDelay}s`);
          chip.style.setProperty('--fall-duration', `${fallDuration}s`);
          chip.style.setProperty('--chip-bg', lang.bg);
          chip.style.setProperty('--chip-border', lang.border);
          chip.style.setProperty('--chip-glow', lang.glow);
          chip.style.setProperty('--chip-color', lang.color);
          chip.style.setProperty('--rot-start', `${rotStart}deg`);
          chip.style.setProperty('--rot-mid1', `${rotMid1}deg`);
          chip.style.setProperty('--rot-mid2', `${rotMid2}deg`);
          chip.style.setProperty('--rot-end', `${rotEnd}deg`);
          chip.style.setProperty('--sway-1', sway1);
          chip.style.setProperty('--sway-2', sway2);
          chip.style.setProperty('--sway-3', sway3);

          chip.addEventListener('animationend', () => {
            chip.remove();
          });

          container.appendChild(chip);
        }

        userRevertTimer = setTimeout(() => {
          userTelemetry.classList.remove('is-code-rain');
          if (userMainText) userMainText.textContent = 'Full Stack Developer';
          if (userSubText) userSubText.textContent = 'MOBILE & WEB APPLICATIONS';
          if (userPopup) userPopup.setAttribute('aria-hidden', 'true');
        }, 4500);
      }

      userTelemetry.addEventListener('click', (e) => {
        e.stopPropagation();
        userTapCount++;
        clearTimeout(userTapResetTimer);

        if (userTapCount >= 2) {
          triggerCodeRain();
          userTapCount = 0;
        } else {
          userTapResetTimer = setTimeout(() => {
            userTapCount = 0;
          }, 650);
        }
      });

      userTelemetry.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          triggerCodeRain();
        }
      });
    }

    // Batangas Multi-Tap Easter Egg ("ALA EH AHAHHAHAH")
    const locTelemetry = document.getElementById('telemetryLocation');
    if (locTelemetry) {
      const mainText = document.getElementById('telemetryMainLoc');
      const subText = document.getElementById('telemetrySubLoc');
      const popup = document.getElementById('alaEhPopup');

      let tapCount = 0;
      let tapResetTimer = null;
      let revertTimer = null;

      function triggerAlaEh() {
        clearTimeout(revertTimer);
        locTelemetry.classList.add('is-ala-eh');
        if (mainText) mainText.textContent = 'ALA EH';
        if (subText) subText.textContent = 'AHAHHAHAH';
        if (popup) popup.setAttribute('aria-hidden', 'false');

        if (typeof showToast === 'function') {
          showToast('ALA EH AHAHHAHAH! 😂');
        }

        revertTimer = setTimeout(() => {
          locTelemetry.classList.remove('is-ala-eh');
          if (mainText) mainText.textContent = 'Batangas';
          if (subText) subText.textContent = 'PHILIPPINES';
          if (popup) popup.setAttribute('aria-hidden', 'true');
        }, 3500);
      }

      locTelemetry.addEventListener('click', (e) => {
        e.stopPropagation();
        tapCount++;
        clearTimeout(tapResetTimer);

        if (tapCount >= 2) {
          triggerAlaEh();
          tapCount = 0;
        } else {
          tapResetTimer = setTimeout(() => {
            tapCount = 0;
          }, 650);
        }
      });
    }

    // Expose update function for external triggers
    window.__updateNavStarTracker = updateStarFromScroll;
  }

  // 3D Profile Flip Card Controller (profile.jfif <-> PROFILE2.jfif)
  function setupProfileFlipCard() {
    const flipCard = document.getElementById('profileFlipCard');
    if (!flipCard) return;

    function toggleFlip() {
      flipCard.classList.toggle('flipped');
    }

    flipCard.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFlip();
    });

    flipCard.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleFlip();
      }
    });
  }

  // Active Animated Canvas Engine: Aurora Borealis (Hero) + Fluid Silk Mesh (Rest of Portfolio)
  function setupAnimatedFluidCanvas() {
    const canvas = document.getElementById('bgFluidMeshCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let animationFrameId = null;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize, { passive: true });

    // Smooth Mouse State with Viscous Easing
    const mouse = {
      x: width * 0.5,
      y: height * 0.35,
      targetX: width * 0.5,
      targetY: height * 0.35,
      velocity: 0,
      lastX: width * 0.5,
      lastY: height * 0.35
    };

    // Click Fluid Shockwave Impulses
    const clickImpulses = [];
    window.__triggerCanvasWave = function(x, y) {
      clickImpulses.push({
        x: x,
        y: y,
        startTime: performance.now(),
        duration: 1200
      });
      if (clickImpulses.length > 5) clickImpulses.shift();
    };

    window.addEventListener('mousemove', (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    }, { passive: true });

    // Polar Night Sky Stars (Hero Section)
    const starCount = 80;
    const stars = [];
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random(),
        y: Math.random() * 0.85,
        size: 0.6 + Math.random() * 1.5,
        baseAlpha: 0.25 + Math.random() * 0.65,
        twinkleSpeed: 0.002 + Math.random() * 0.005,
        phase: Math.random() * Math.PI * 2
      });
    }


    // Ambient Floating Particles / Embers for Developer Silk Mesh (36 particles)
    const particleCount = 36;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -0.2 - Math.random() * 0.45,
        radius: 0.8 + Math.random() * 1.8,
        baseAlpha: 0.15 + Math.random() * 0.35,
        phase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.015 + Math.random() * 0.02,
        isCyan: Math.random() > 0.72
      });
    }

    // Developer Silk Wave Ribbons (Used for the Rest of the Portfolio)
    const waveDefs = [
      {
        baseYFactor: 0.32,
        speed: 0.00075,
        freq: 0.0016,
        freq2: 0.0032,
        amp: 85,
        tilt: -0.12,
        thickness: 210,
        gradient: [
          [0, 'rgba(255, 255, 255, 0.15)'],
          [0.45, 'rgba(180, 205, 235, 0.07)'],
          [1, 'rgba(5, 5, 7, 0)']
        ],
        lineColor: 'rgba(255, 255, 255, 0.24)',
        accentMesh: 'rgba(255, 255, 255, 0.08)'
      },
      {
        baseYFactor: 0.48,
        speed: 0.00115,
        freq: 0.0021,
        freq2: 0.0041,
        amp: 105,
        tilt: 0.14,
        thickness: 250,
        gradient: [
          [0, 'rgba(56, 189, 248, 0.14)'],
          [0.5, 'rgba(99, 102, 241, 0.06)'],
          [1, 'rgba(5, 5, 7, 0)']
        ],
        lineColor: 'rgba(56, 189, 248, 0.30)',
        accentMesh: 'rgba(56, 189, 248, 0.10)'
      },
      {
        baseYFactor: 0.65,
        speed: 0.0006,
        freq: 0.0013,
        freq2: 0.0026,
        amp: 95,
        tilt: -0.09,
        thickness: 280,
        gradient: [
          [0, 'rgba(240, 245, 255, 0.11)'],
          [0.55, 'rgba(148, 163, 184, 0.04)'],
          [1, 'rgba(5, 5, 7, 0)']
        ],
        lineColor: 'rgba(255, 255, 255, 0.18)',
        accentMesh: 'rgba(255, 255, 255, 0.06)'
      },
      {
        baseYFactor: 0.20,
        speed: 0.0014,
        freq: 0.0026,
        freq2: 0.0052,
        amp: 65,
        tilt: 0.18,
        thickness: 160,
        gradient: [
          [0, 'rgba(168, 85, 247, 0.11)'],
          [0.45, 'rgba(56, 189, 248, 0.05)'],
          [1, 'rgba(5, 5, 7, 0)']
        ],
        lineColor: 'rgba(168, 85, 247, 0.22)',
        accentMesh: 'rgba(168, 85, 247, 0.07)'
      }
    ];

    let startTime = performance.now();

    function render(currentTime) {
      const elapsed = currentTime - startTime;

      // Calculate Scroll Transition: 1 in Hero, 0 in Rest of Portfolio
      const scrollY = window.scrollY || 0;
      const heroAlpha = Math.max(0, Math.min(1, 1 - (scrollY / (height * 0.85))));
      const silkMeshAlpha = 0.15 + 0.85 * Math.pow(1 - heroAlpha, 1.2);

      // Mouse Smooth Follow
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      const dx = mouse.x - mouse.lastX;
      const dy = mouse.y - mouse.lastY;
      mouse.velocity = Math.hypot(dx, dy);
      mouse.lastX = mouse.x;
      mouse.lastY = mouse.y;

      // Base Polar Night Background Fill
      ctx.fillStyle = '#050507';
      ctx.fillRect(0, 0, width, height);

      // =========================================================================
      // 1. HERO SECTION: DYNAMIC AURORA BOREALIS (Visible when in hero)
      // =========================================================================
      if (heroAlpha > 0.01) {
        // A. Subtle Polar Night Sky Stars
        stars.forEach((star) => {
          const starX = star.x * width;
          const starY = star.y * height;
          const starTwinkle = star.baseAlpha * heroAlpha * (0.25 + 0.50 * Math.sin(elapsed * star.twinkleSpeed + star.phase));
          ctx.beginPath();
          ctx.arc(starX, starY, star.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${starTwinkle})`;
          ctx.fill();
        });

        // B. Gentle Ethereal Aurora Atmospheric Bloom (Soft, Moody, Non-Blinding)
        const glowX1 = width * 0.58 + Math.sin(elapsed * 0.0004) * (width * 0.10);
        const glowY1 = height * 0.18 + Math.cos(elapsed * 0.0006) * (height * 0.05);
        const auroraBloom = ctx.createRadialGradient(glowX1, glowY1, 20, glowX1, glowY1, Math.max(width, height) * 0.60);
        auroraBloom.addColorStop(0, `rgba(16, 185, 129, ${0.12 * heroAlpha})`);
        auroraBloom.addColorStop(0.35, `rgba(6, 182, 212, ${0.07 * heroAlpha})`);
        auroraBloom.addColorStop(0.65, `rgba(168, 85, 247, ${0.04 * heroAlpha})`);
        auroraBloom.addColorStop(1, 'rgba(5, 5, 7, 0)');
        ctx.fillStyle = auroraBloom;
        ctx.fillRect(0, 0, width, height);

        const glowX2 = width * 0.35 + Math.cos(elapsed * 0.0005) * (width * 0.08);
        const glowY2 = height * 0.14 + Math.sin(elapsed * 0.0006) * (height * 0.04);
        const auroraBloom2 = ctx.createRadialGradient(glowX2, glowY2, 20, glowX2, glowY2, width * 0.45);
        auroraBloom2.addColorStop(0, `rgba(52, 211, 153, ${0.10 * heroAlpha})`);
        auroraBloom2.addColorStop(0.45, `rgba(147, 51, 234, ${0.05 * heroAlpha})`);
        auroraBloom2.addColorStop(1, 'rgba(5, 5, 7, 0)');
        ctx.fillStyle = auroraBloom2;
        ctx.fillRect(0, 0, width, height);

        // C. Smooth High-Altitude Flowing Aurora Curtains (Soft, Elegant Silk)
        const auroraCurtains = [
          // Main Sweeping Ethereal Emerald Curtain
          {
            baseY: height * 0.22,
            tilt: -0.10,
            speed: 0.00055,
            freq: 0.0016,
            freq2: 0.0032,
            amp: 48,
            amp2: 24,
            thickness: 160,
            colorTop: 'rgba(192, 132, 252, 0)',
            colorCrown: `rgba(192, 132, 252, ${0.14 * heroAlpha})`,
            colorMid: `rgba(16, 185, 129, ${0.24 * heroAlpha})`,
            colorBase: `rgba(52, 211, 153, ${0.30 * heroAlpha})`,
            colorTail: 'rgba(6, 182, 212, 0)',
            spineColor: `rgba(110, 231, 183, ${0.38 * heroAlpha})`,
            accentLine: `rgba(52, 211, 153, ${0.12 * heroAlpha})`
          },
          // Upper Lavender / Purple Veil
          {
            baseY: height * 0.12,
            tilt: 0.08,
            speed: 0.0004,
            freq: 0.0012,
            freq2: 0.0024,
            amp: 36,
            amp2: 18,
            thickness: 140,
            colorTop: 'rgba(216, 180, 254, 0)',
            colorCrown: `rgba(168, 85, 247, ${0.16 * heroAlpha})`,
            colorMid: `rgba(6, 182, 212, ${0.12 * heroAlpha})`,
            colorBase: `rgba(16, 185, 129, ${0.18 * heroAlpha})`,
            colorTail: 'rgba(5, 5, 7, 0)',
            spineColor: `rgba(192, 132, 252, ${0.28 * heroAlpha})`,
            accentLine: `rgba(168, 85, 247, ${0.10 * heroAlpha})`
          },
          // Soft Low-Hanging Mint Feather Wave
          {
            baseY: height * 0.32,
            tilt: -0.05,
            speed: 0.0007,
            freq: 0.0020,
            freq2: 0.0040,
            amp: 32,
            amp2: 16,
            thickness: 110,
            colorTop: 'rgba(168, 85, 247, 0)',
            colorCrown: `rgba(52, 211, 153, ${0.12 * heroAlpha})`,
            colorMid: `rgba(0, 255, 136, ${0.18 * heroAlpha})`,
            colorBase: `rgba(45, 212, 191, ${0.16 * heroAlpha})`,
            colorTail: 'rgba(5, 5, 7, 0)',
            spineColor: `rgba(52, 211, 153, ${0.25 * heroAlpha})`,
            accentLine: `rgba(45, 212, 191, ${0.08 * heroAlpha})`
          }
        ];

        // Draw Soft Flowing Curtains
        auroraCurtains.forEach((curtain) => {
          const step = 14;
          const count = Math.ceil(width / step) + 2;
          const pointsTop = [];
          const pointsBottom = [];

          for (let i = 0; i <= count; i++) {
            const x = i * step;
            const slope = (x - width * 0.5) * curtain.tilt;
            const harmonic = Math.sin(x * curtain.freq + elapsed * curtain.speed) * curtain.amp +
                             Math.cos(x * curtain.freq2 - elapsed * curtain.speed * 1.3) * curtain.amp2;

            // Subtle mouse ripple
            const distToMouse = Math.hypot(x - mouse.x, (curtain.baseY + slope) - mouse.y);
            const mouseFactor = Math.max(0, 1 - distToMouse / 260);
            const ripple = Math.sin(distToMouse * 0.035 - elapsed * 0.005) * 22 * mouseFactor;

            const yTop = curtain.baseY + slope + harmonic + ripple;
            const yBottom = yTop + curtain.thickness;

            pointsTop.push({ x, y: yTop });
            pointsBottom.push({ x, y: yBottom });
          }

          if (pointsTop.length > 1) {
            ctx.beginPath();
            ctx.moveTo(pointsTop[0].x, pointsTop[0].y);
            for (let i = 1; i < pointsTop.length; i++) {
              ctx.lineTo(pointsTop[i].x, pointsTop[i].y);
            }
            for (let i = pointsBottom.length - 1; i >= 0; i--) {
              ctx.lineTo(pointsBottom[i].x, pointsBottom[i].y);
            }
            ctx.closePath();

            const cGrad = ctx.createLinearGradient(0, curtain.baseY - 40, 0, curtain.baseY + curtain.thickness);
            cGrad.addColorStop(0, curtain.colorTop);
            cGrad.addColorStop(0.20, curtain.colorCrown);
            cGrad.addColorStop(0.55, curtain.colorMid);
            cGrad.addColorStop(0.85, curtain.colorBase);
            cGrad.addColorStop(1, curtain.colorTail);

            ctx.fillStyle = cGrad;
            ctx.fill();

            // Delicate flowing lower spine
            ctx.beginPath();
            ctx.moveTo(pointsTop[0].x, pointsTop[0].y);
            for (let i = 1; i < pointsTop.length; i++) {
              ctx.lineTo(pointsTop[i].x, pointsTop[i].y);
            }
            ctx.strokeStyle = curtain.spineColor;
            ctx.lineWidth = 1.2;
            ctx.stroke();

            // Internal organic contour wisps
            const internalOffset = 38;
            ctx.beginPath();
            ctx.moveTo(pointsTop[0].x, pointsTop[0].y + internalOffset);
            for (let i = 1; i < pointsTop.length; i++) {
              ctx.lineTo(pointsTop[i].x, pointsTop[i].y + internalOffset);
            }
            ctx.strokeStyle = curtain.accentLine;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        });
      }

      // =========================================================================
      // 2. REST OF PORTFOLIO: DEVELOPER FLUID SILK MESH & AMBIENT EMBERS
      // =========================================================================
      // Interactive Cursor Ambient Radial Glow
      const glowRadius = Math.max(width, height) * 0.6;
      const cursorGlow = ctx.createRadialGradient(mouse.x, mouse.y, 20, mouse.x, mouse.y, glowRadius);
      cursorGlow.addColorStop(0, `rgba(56, 189, 248, ${0.07 * silkMeshAlpha})`);
      cursorGlow.addColorStop(0.35, `rgba(99, 102, 241, ${0.035 * silkMeshAlpha})`);
      cursorGlow.addColorStop(0.75, `rgba(255, 255, 255, ${0.012 * silkMeshAlpha})`);
      cursorGlow.addColorStop(1, 'rgba(5, 5, 7, 0)');
      ctx.fillStyle = cursorGlow;
      ctx.fillRect(0, 0, width, height);

      // Render Developer Silk Wave Ribbons
      waveDefs.forEach((w) => {
        const baseY = height * w.baseYFactor;
        const step = 14;
        const count = Math.ceil(width / step) + 2;

        const pointsTop = [];
        const pointsBottom = [];

        for (let i = 0; i <= count; i++) {
          const x = i * step;
          const slope = (x - width * 0.5) * w.tilt;
          const harmonic = Math.sin(x * w.freq + elapsed * w.speed) * w.amp +
                           Math.cos(x * w.freq2 - elapsed * w.speed * 1.25) * (w.amp * 0.42);

          const distToMouse = Math.hypot(x - mouse.x, (baseY + slope) - mouse.y);
          const mouseFactor = Math.max(0, 1 - distToMouse / 260);
          const ripple = Math.sin(distToMouse * 0.035 - elapsed * 0.005) * 32 * mouseFactor;

          const yTop = baseY + slope + harmonic + ripple;
          const yBottom = yTop + w.thickness;

          pointsTop.push({ x, y: yTop });
          pointsBottom.push({ x, y: yBottom });
        }

        if (pointsTop.length > 1) {
          ctx.beginPath();
          ctx.moveTo(pointsTop[0].x, pointsTop[0].y);
          for (let i = 1; i < pointsTop.length; i++) {
            ctx.lineTo(pointsTop[i].x, pointsTop[i].y);
          }
          for (let i = pointsBottom.length - 1; i >= 0; i--) {
            ctx.lineTo(pointsBottom[i].x, pointsBottom[i].y);
          }
          ctx.closePath();

          const ribbonGrad = ctx.createLinearGradient(0, baseY - w.amp, 0, baseY + w.thickness);
          w.gradient.forEach(([stop, col]) => ribbonGrad.addColorStop(stop, col));
          ctx.save();
          ctx.globalAlpha = silkMeshAlpha;
          ctx.fillStyle = ribbonGrad;
          ctx.fill();

          // Top Flow Spine Contour
          ctx.beginPath();
          ctx.moveTo(pointsTop[0].x, pointsTop[0].y);
          for (let i = 1; i < pointsTop.length; i++) {
            ctx.lineTo(pointsTop[i].x, pointsTop[i].y);
          }
          ctx.strokeStyle = w.lineColor;
          ctx.lineWidth = 1.2;
          ctx.stroke();

          // Internal Topographical Mesh Lines
          const offsets = [45, 95];
          offsets.forEach((offset) => {
            ctx.beginPath();
            ctx.moveTo(pointsTop[0].x, pointsTop[0].y + offset);
            for (let i = 1; i < pointsTop.length; i++) {
              ctx.lineTo(pointsTop[i].x, pointsTop[i].y + offset);
            }
            ctx.strokeStyle = w.accentMesh;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          });
          ctx.restore();
        }
      });

      // Render Floating Embers / Dust Particles
      particles.forEach((p) => {
        p.phase += p.pulseSpeed;
        p.x += p.vx + Math.sin(p.phase) * 0.25;
        p.y += p.vy;

        const pDist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (pDist < 140) {
          const force = (140 - pDist) / 140;
          const angle = Math.atan2(p.y - mouse.y, p.x - mouse.x);
          p.x += Math.cos(angle) * force * 1.8;
          p.y += Math.sin(angle) * force * 1.8;
        }

        if (p.y < -10) { p.y = height + 10; p.x = Math.random() * width; }
        if (p.y > height + 10) { p.y = -10; p.x = Math.random() * width; }
        if (p.x < -10) { p.x = width + 10; }
        if (p.x > width + 10) { p.x = -10; }

        const alpha = p.baseAlpha * (0.65 + 0.35 * Math.sin(p.phase));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        // When in Hero, particles subtly pick up emerald/cyan aura tints
        if (heroAlpha > 0.4) {
          ctx.fillStyle = p.isCyan
            ? `rgba(52, 211, 153, ${alpha * 1.3})`
            : `rgba(220, 255, 240, ${alpha})`;
        } else {
          ctx.fillStyle = p.isCyan
            ? `rgba(56, 189, 248, ${alpha * 1.3})`
            : `rgba(255, 255, 255, ${alpha})`;
        }
        ctx.fill();
      });

      // Render Click Shockwave Wave Rings on Canvas
      for (let i = clickImpulses.length - 1; i >= 0; i--) {
        const imp = clickImpulses[i];
        const age = currentTime - imp.startTime;
        if (age > imp.duration) {
          clickImpulses.splice(i, 1);
          continue;
        }
        const progress = age / imp.duration;
        const currentRadius = progress * Math.max(width, height) * 1.35;
        const waveAlpha = (1 - progress) * 0.55;

        ctx.save();
        ctx.beginPath();
        ctx.arc(imp.x, imp.y, currentRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(56, 189, 248, ${waveAlpha})`;
        ctx.lineWidth = Math.max(1, 4 * (1 - progress));
        ctx.stroke();

        if (currentRadius > 35) {
          ctx.beginPath();
          ctx.arc(imp.x, imp.y, Math.max(0, currentRadius - 32), 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(16, 185, 129, ${waveAlpha * 0.75})`;
          ctx.lineWidth = Math.max(1, 2.5 * (1 - progress));
          ctx.stroke();
        }
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    }

    // Start loop
    animationFrameId = requestAnimationFrame(render);

    // Pause when tab is invisible to conserve CPU
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
      } else {
        startTime = performance.now();
        animationFrameId = requestAnimationFrame(render);
      }
    });
  }

  // Scroll Reveal Animation Engine (IntersectionObserver)
  function setupScrollReveal() {
    const targets = document.querySelectorAll(`
      .about-terminal-card,
      .about-bio-col,
      .editorial-project-card,
      .laptop-device-frame,
      .ecosystem-card,
      .cert-card,
      .cert-showcase-card,
      .section-title-wrap,
      .footer-cta-container,
      .resume-viewer-wrap
    `);

    targets.forEach(el => el.classList.add('reveal-on-scroll'));

    if (!('IntersectionObserver' in window)) {
      targets.forEach(el => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    targets.forEach(el => observer.observe(el));
  }

  // Interactive 3D Mouse Tilt Effect on Cards
  function setupInteractiveTilt() {
    const tiltElements = document.querySelectorAll('.profile-flip-card, .project-mockup-wrapper, .laptop-device-frame');

    tiltElements.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  function setupProjectInteractions() {
    document.querySelectorAll('.editorial-project-card').forEach(card => {
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');

      const toggleFocus = () => {
        card.classList.toggle('project-is-focused');
      };

      card.addEventListener('click', (event) => {
        if (event.target.closest('a, button')) return;
        toggleFocus();
      });

      card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          toggleFocus();
        }
      });
    });
  }

  function setupEcosystemModal() {
    const modal = document.getElementById('ecoModal');
    const title = document.getElementById('ecoModalTitle');
    const description = document.getElementById('ecoModalDescription');
    const tags = document.getElementById('ecoModalTags');
    if (!modal || !title || !description || !tags) return;

    const technologyDetails = {
      'C#': 'A strongly typed language I use for application logic, .NET MAUI projects, and structured object-oriented development.',
      'Dart': 'The language behind my Flutter work, used to build responsive cross-platform application experiences.',
      'Java': 'An object-oriented language I use for desktop application projects and core programming fundamentals.',
      'Kotlin': 'A modern language I use for Android development and concise, type-safe mobile application code.',
      'PHP': 'A server-side language I use to build database-driven web systems, authentication flows, and APIs.',
      'PHP / PDO': 'PHP with PDO gives my web applications secure, structured access to MySQL and MariaDB databases.',
      'JavaScript': 'The browser language I use for interactive interfaces, asynchronous workflows, and dynamic application behavior.',
      'SQL': 'The language I use to query, organize, relate, and analyze application data inside relational databases.',
      'HTML5': 'The semantic structure layer for the web interfaces and application screens I build.',
      'CSS3': 'The styling layer I use for responsive layouts, visual systems, motion, and polished user interfaces.',
      'Flutter': 'A cross-platform UI toolkit I use to create mobile interfaces from a shared codebase.',
      '.NET MAUI': 'A cross-platform framework I use to build mobile and desktop applications with shared C# code.',
      'Android SDK': 'The Android platform toolkit I use to create native mobile features and device experiences.',
      'Laravel': 'A PHP framework I use for organized web application structure, routing, and backend workflows.',
      'MySQL': 'A relational database system I use to store, connect, query, and manage structured application data.',
      'SQLite': 'A lightweight local database I use for offline-first applications and device-level persistence.',
      'Firebase': 'A cloud service platform I use for application data, authentication, and connected features.',
      'RESTful APIs': 'A resource-based communication style I use to connect frontends, services, databases, and integrations.',
      'Bootstrap': 'A responsive frontend toolkit I use to accelerate consistent layouts and interface components.',
      'Tailwind CSS': 'A utility-first CSS framework I use to compose responsive interfaces with precise visual control.',
      'React': 'A component-based JavaScript library I use to structure interactive web interfaces.',
      'Random Forest ML': 'A machine learning method I use for classification and decision-support experiments.',
      'Large Language Models (LLMs)': 'AI models I integrate for contextual assistance, generated guidance, and intelligent workflows.',
      'AI Decision APIs': 'External AI services I connect to applications to support intelligent recommendations and decisions.',
      'NLP Features': 'Natural language processing features that help applications interpret and work with human language.',
      'NFC Verification': 'Near-field communication workflows used for quick student identification and verification.',
      'PayMongo Payment API': 'A payment integration I use to support digital transaction and checkout workflows.',
      'Figma': 'A collaborative design tool I use for wireframes, user flows, visual systems, and interactive prototypes.',
      'Git': 'A version control system I use to track changes, experiment safely, and manage development history.',
      'GitHub': 'A platform I use to host repositories, collaborate, review code, and present development work.',
      'Visual Studio': 'An IDE I use for C#, .NET, debugging, and structured application development.',
      'VS Code': 'A flexible editor I use for web development, PHP, JavaScript, and everyday project work.',
      'Android Studio': 'The Android IDE I use to build, test, and debug native mobile applications.',
      'NetBeans': 'A Java development environment I use for desktop application and object-oriented programming projects.',
      'XAMPP': 'A local development environment I use to run and test PHP, Apache, and MySQL applications.'
    };

    const closeModal = () => {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-is-open');
    };

    const openModal = (modalTitle, modalDescription, modalTags) => {
      title.textContent = modalTitle;
      description.textContent = modalDescription;
      tags.innerHTML = modalTags || '';
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-is-open');
      modal.querySelector('.eco-modal-close').focus();
    };

    document.querySelectorAll('.eco-cat-icon').forEach(icon => {
      icon.addEventListener('click', () => {
        const card = icon.closest('.ecosystem-card');
        openModal(
          icon.dataset.ecoModalTitle || '',
          icon.dataset.ecoModalDescription || '',
          card ? card.querySelector('.eco-tags-flow').innerHTML : ''
        );
      });
    });

    document.querySelectorAll('.eco-pill').forEach(pill => {
      const technologyName = pill.textContent.trim();
      const category = pill.closest('.ecosystem-card')?.querySelector('.eco-cat-title')?.textContent.trim() || 'Development Ecosystem';
      pill.setAttribute('role', 'button');
      pill.setAttribute('tabindex', '0');
      pill.setAttribute('aria-label', `View ${technologyName} details`);

      const openTechnologyDetails = () => openModal(
        technologyName,
        technologyDetails[technologyName] || `${technologyName} is part of my ${category.toLowerCase()} toolkit.`,
        `<span class="eco-modal-context">${category}</span>`
      );

      pill.addEventListener('click', openTechnologyDetails);
      pill.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openTechnologyDetails();
        }
      });
    });

    modal.querySelectorAll('[data-eco-modal-close]').forEach(control => {
      control.addEventListener('click', closeModal);
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
    });
  }

  // Hero Background Fluid Silk Parallax on Scroll
  function setupHeroParallax() {
    const wave1 = document.querySelector('.wave-1');
    const wave2 = document.querySelector('.wave-2');
    const heroCenter = document.querySelector('.hero-center-content');

    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      if (scrolled < 900) {
        if (wave1) wave1.style.transform = `translate(-50%, calc(-20% + ${scrolled * 0.18}px)) rotate(-8deg)`;
        if (wave2) wave2.style.transform = `translate(-50%, calc(-10% + ${scrolled * 0.12}px)) rotate(12deg)`;
        if (heroCenter) heroCenter.style.transform = `translateY(${scrolled * 0.22}px)`;
      }
    }, { passive: true });
  }

  // Certificate Lightbox and Verification ID Copy Controller
  function setupCertificateModal() {
    const lightbox = document.getElementById('certLightbox');
    const lightboxImg = document.getElementById('certLightboxImg');
    const lightboxTitle = document.getElementById('certLightboxTitle');
    const lightboxMeta = document.getElementById('certLightboxMeta');
    const lightboxPdfLink = document.getElementById('certLightboxPdfLink');
    const closeBtn = document.getElementById('certLightboxClose');

    if (!lightbox) return;

    function openLightbox(imgSrc, titleText, metaText, pdfHref) {
      const scrollBody = lightbox.querySelector('.cert-lightbox-body');
      if (scrollBody) scrollBody.scrollTop = 0;
      if (lightboxImg) lightboxImg.src = imgSrc;
      if (lightboxTitle) lightboxTitle.textContent = titleText || 'Certificate Preview';
      if (lightboxMeta) lightboxMeta.textContent = metaText || '';
      if (lightboxPdfLink) {
        if (pdfHref) {
          lightboxPdfLink.href = pdfHref;
          lightboxPdfLink.style.display = 'inline-flex';
        } else {
          lightboxPdfLink.style.display = 'none';
        }
      }
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-is-open');
    }

    function closeLightbox() {
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-is-open');
    }

    document.querySelectorAll('[data-cert-preview]').forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const imgSrc = trigger.dataset.certPreview;
        const titleText = trigger.dataset.certTitle;
        const metaText = trigger.dataset.certMeta;
        const pdfHref = trigger.dataset.certPdf;
        openLightbox(imgSrc, titleText, metaText, pdfHref);
      });
    });

    closeBtn?.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.classList.contains('cert-lightbox-backdrop')) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('is-open')) {
        closeLightbox();
      }
    });

    // One-click copy credential code with visual confirmation
    document.querySelectorAll('.btn-copy-cred').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const code = btn.dataset.code;
        if (!code) return;
        navigator.clipboard.writeText(code).then(() => {
          const originalText = btn.innerHTML;
          btn.innerHTML = '✓ Copied!';
          btn.style.color = '#10b981';
          btn.style.borderColor = '#10b981';
          showToast(`Credential ID ${code} copied to clipboard!`);
          setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.color = '';
            btn.style.borderColor = '';
          }, 2000);
        }).catch(() => {
          showToast(`Credential ID: ${code}`);
        });
      });
    });
  }

  // Initialize all systems
  function init() {
    // Print triggers
    document.getElementById('btnSheetPrint')?.addEventListener('click', triggerPrint);
    document.getElementById('btnFooterPrint')?.addEventListener('click', triggerPrint);
    document.getElementById('btnMobilePrint')?.addEventListener('click', triggerPrint);

    // Systems
    setupAnimatedFluidCanvas();
    setupCelestialStarNav();
    setupProfileFlipCard();
    setupMobileNav();
    setupScrollSpy();
    setupNavigationMotion();
    setupScrollReveal();
    setupInteractiveTilt();
    setupProjectInteractions();
    setupEcosystemModal();
    setupCertificateModal();
    setupHeroParallax();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
