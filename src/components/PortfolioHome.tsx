"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, MotionValue, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, FileText, MapPin, Terminal } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";
import CvModal from "@/components/CvModal";
import ProjectModal from "@/components/ProjectModal";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

const featuredProjects = projects.filter((project) => project.featured);
const signalSteps = [
  { code: "01 / FIND", action: "Query", detail: "the mess" },
  { code: "02 / FIX", action: "Automate", detail: "the boring bits" },
  { code: "03 / SHIP", action: "Ship", detail: "something useful" },
  { code: "04 / CARE", action: "Keep", detail: "it human" },
];

const wordRevealContainer = {
  hidden: {},
  visible: { transition: { delayChildren: 0.06, staggerChildren: 0.075 } },
};

const wordRevealItem = {
  hidden: { opacity: 0, y: "0.42em", rotateX: -28 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring" as const, stiffness: 175, damping: 28, mass: 0.82 },
  },
};

function WordReveal({
  lines,
  accentWords = [],
  loading,
}: {
  lines: string[];
  accentWords?: string[];
  loading?: boolean;
}) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <motion.span
      className="word-reveal"
      variants={wordRevealContainer}
      initial={reduceMotion ? false : "hidden"}
      animate={reduceMotion ? "visible" : loading ? "hidden" : undefined}
      whileInView={reduceMotion || loading ? undefined : "visible"}
      viewport={{ once: false, amount: 0.55, margin: "-8% 0px -8% 0px" }}
    >
      {lines.map((line, lineIndex) => {
        const words = line.split(" ");
        return (
          <span className="word-reveal-line" key={`${lineIndex}-${line}`}>
            {words.map((word, wordIndex) => (
              <motion.span
                className={`word-reveal-word${accentWords.includes(word) ? " word-reveal-accent" : ""}`}
                variants={wordRevealItem}
                key={`${lineIndex}-${wordIndex}-${word}`}
              >
                {word}{wordIndex < words.length - 1 ? "\u00a0" : ""}
              </motion.span>
            ))}
          </span>
        );
      })}
    </motion.span>
  );
}

function ProjectArtwork({ projectId }: { projectId: string }) {
  if (projectId === "local-land-cordyline") {
    return (
      <div className="project-artwork artwork-local-land" aria-hidden="true">
        <div className="land-orbit land-orbit-one" />
        <div className="land-orbit land-orbit-two" />
        <div className="land-dashboard">
          <div className="land-windowbar"><span>CORDYLINE <i>/</i> LOCAL LAND</span><span>ADMIN DASHBOARD</span></div>
          <div className="land-dash-layout">
            <div className="land-dash-rail"><b>L</b><span className="land-rail-active">⌂</span><span>⌖</span><span>◎</span><span>▦</span></div>
            <div className="land-dash-content">
              <div className="land-dash-heading"><div><small>REAL ESTATE / OVERVIEW</small><b>Property workspace</b></div><span>CORDYLINE <ArrowUpRight size={11} /></span></div>
              <div className="land-stat-row"><div><small>Properties</small><b>—</b><i>Listing management</i></div><div><small>Enquiries</small><b>—</b><i>Buyer interest</i></div><div><small>Users</small><b>—</b><i>Account directory</i></div></div>
              <div className="land-map-row"><div className="land-map-preview"><div className="land-map-street land-street-a" /><div className="land-map-street land-street-b" /><div className="land-map-street land-street-c" /><div className="land-map-park" /><span className="land-map-pin">⌖</span><span className="land-map-label">PROPERTY MAP</span></div><div className="land-activity-preview"><small>WORKSPACE</small><b>Buyer app</b><span>Property discovery</span><b>Admin panel</b><span>Listings and enquiries</span><b>Shared backend</b><span>Supabase</span></div></div>
            </div>
          </div>
        </div>
        <div className="artwork-note">Illustrative interface</div>
      </div>
    );
  }

  if (projectId === "al-qalam-app") {
    return (
      <div className="project-artwork artwork-alqalam" aria-hidden="true">
        <div className="alqalam-orbit" />
        <div className="alqalam-web-preview">
          <div className="alqalam-web-head"><span className="alqalam-crest">A</span><span><b>AL-QALAM</b><small>PUBLIC SCHOOL</small></span><span>ADMISSIONS&nbsp;&nbsp; ACADEMICS&nbsp;&nbsp; NOTICES</span></div>
          <div className="alqalam-web-hero"><small>LEARNING · CHARACTER · COMMUNITY</small><b>A place to learn<br />and grow together.</b><span>School information, academics, and notices for our community.</span><i>Explore the school <ArrowRight size={11} /></i></div>
          <div className="alqalam-web-links"><span>ACADEMICS <b>↗</b></span><span>ADMISSIONS <b>↗</b></span><span>NOTICES <b>↗</b></span></div>
        </div>
        <div className="alqalam-phone"><div className="alqalam-phone-notch" /><div className="alqalam-phone-top"><span>9:41</span><span>● ◕ ▰</span></div><div className="alqalam-app-brand"><span className="alqalam-crest">A</span><span><b>AL-QALAM</b><small>PUBLIC SCHOOL</small></span><i>•••</i></div><div className="alqalam-app-greeting"><small>YOUR SCHOOL, IN ONE PLACE</small><b>Welcome to<br />Al-Qalam</b></div><div className="alqalam-app-card"><small>SCHOOL PORTAL</small><b>Stay close to school life.</b><span>Academics, notices, and community updates.</span></div><div className="alqalam-app-links"><span>Academics <b>↗</b></span><span>Notices <b>↗</b></span><span>My dashboard <b>↗</b></span></div><div className="alqalam-app-nav"><span>⌂<small>Home</small></span><span>▤<small>Notices</small></span><span>◉<small>Profile</small></span></div></div>
        <div className="artwork-note">Illustrative interface</div>
      </div>
    );
  }

  if (projectId === "radiant-hms") {
    return (
      <div className="project-artwork artwork-health" aria-hidden="true">
        <div className="mock-window">
          <div className="mock-topline"><span>◦ &nbsp; Radiant / Overview</span><i>Today, 09:42</i></div>
          <div className="mock-health-layout">
            <div className="mock-rail"><b>R</b><span className="rail-active">⌂</span><span>▦</span><span>◷</span><span>⌕</span></div>
            <div className="mock-health-content">
              <div className="mock-health-heading"><span>Hospital overview</span><b>+ Add patient</b></div>
              <div className="mock-stat-grid"><div><small>Patients today</small><strong>—</strong><em>Daily activity</em></div><div><small>Beds occupied</small><strong>—</strong><em>Ward overview</em></div><div><small>Pending reports</small><strong>—</strong><em>Review queue</em></div></div>
              <div className="mock-chart"><div className="mock-chart-copy"><small>Patient admissions</small><b>Weekly activity</b></div><svg viewBox="0 0 480 96" preserveAspectRatio="none"><path d="M0 73 C 34 68, 43 56, 73 62 S 117 74, 145 48 S 190 51, 215 39 S 257 63, 285 43 S 325 49, 350 24 S 394 40, 420 19 S 458 28, 480 8" /><path className="chart-fill" d="M0 73 C 34 68, 43 56, 73 62 S 117 74, 145 48 S 190 51, 215 39 S 257 63, 285 43 S 325 49, 350 24 S 394 40, 420 19 S 458 28, 480 8 L480 96 L0 96 Z" /></svg></div>
            </div>
          </div>
        </div>
        <div className="artwork-note">Illustrative interface</div>
      </div>
    );
  }

  if (projectId === "kosi-voter-digitalize") {
    return (
      <div className="project-artwork artwork-kosi" aria-hidden="true">
        <div className="kosi-sidebar"><b>KOSI<span> / DATA</span></b><span className="kosi-selected">District overview</span><span>Voter directory</span><span>Field progress</span><div className="kosi-side-foot">13 districts<br />Regional coverage</div></div>
        <div className="kosi-main"><div className="kosi-heading"><span>Graduate constituency</span><b>Regional view <span>⌄</span></b></div><div className="kosi-summary"><div><small>Districts covered</small><strong>13</strong><span>Across the Kosi region</span></div><div><small>Data tools</small><strong>Clean</strong><span className="kosi-positive">Directory + reporting</span></div></div><div className="kosi-data-card"><div className="kosi-table-title"><b>District directory</b><span>Illustrative interface</span></div><div className="kosi-table-row kosi-table-head"><span>District</span><span>Data readiness</span><span>View</span></div>{[["District 01", "82"], ["District 02", "68"], ["District 03", "54"]].map(([name, width]) => <div className="kosi-table-row" key={name}><span>{name}</span><span className="kosi-bar"><i style={{ width: `${width}%` }} /></span><span>↗</span></div>)}</div></div>
      </div>
    );
  }

  return (
    <div className="project-artwork artwork-preptake" aria-hidden="true">
      <div className="prep-note"><span>PREPTAKE / PRACTICE MODE</span><b>Small steps.<br />Better scores.</b><i>Prepare for your next teaching exam.</i><div className="prep-progress"><span><b>Practice progress</b><b>Illustrative</b></span><i><em /></i></div></div>
      <div className="prep-phone"><div className="phone-notch" /><div className="phone-top"><span>PREP</span><span>•••</span></div><div className="phone-tag">EXAMPLE QUESTION</div><b className="phone-question">Which principle supports learning through experience?</b><div className="phone-answer phone-correct"><span>A</span> Constructivism <b>✓</b></div><div className="phone-answer"><span>B</span> Essentialism</div><div className="phone-answer"><span>C</span> Perennialism</div><div className="phone-answer"><span>D</span> Behaviorism</div><div className="phone-next">Check answer <ArrowRight size={13} /></div></div>
    </div>
  );
}

function HeroPortrait({
  reduceMotion,
  isBooting,
  heroPortraitY,
  heroPortraitScale,
}: {
  reduceMotion: boolean;
  isBooting: boolean;
  heroPortraitY: MotionValue<number>;
  heroPortraitScale: MotionValue<number>;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for 3D card tilt
  const tiltSpring = { stiffness: 160, damping: 20, mass: 0.6 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8.5, -8.5]), tiltSpring);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8.5, 8.5]), tiltSpring);

  // Holographic internal photo parallax shift (counter-drifts slightly inside the frame for true 3D depth)
  const photoParallaxX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), tiltSpring);
  const photoParallaxY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-7, 7]), tiltSpring);

  // Dynamic specular glare sheen coordinates that follow cursor
  const glareX = useSpring(useTransform(mouseX, [-0.5, 0.5], [10, 90]), tiltSpring);
  const glareY = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, 90]), tiltSpring);
  const glareOpacity = useSpring(0, { stiffness: 120, damping: 22 });

  const glareBackground = useTransform(
    [glareX, glareY],
    ([gx, gy]) =>
      `radial-gradient(circle 280px at ${gx}% ${gy}%, rgba(255, 255, 255, 0.42) 0%, transparent 65%)`
  );

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseEnter = () => {
    if (!reduceMotion) {
      setIsHovered(true);
      glareOpacity.set(0.35);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
    glareOpacity.set(0);
  };

  return (
    <motion.div
      className="hero-portrait-wrap"
      style={reduceMotion ? undefined : { y: heroPortraitY, scale: heroPortraitScale }}
      initial={false}
      animate={reduceMotion || !isBooting ? { opacity: 1, x: 0, rotate: 0 } : { opacity: 0, x: 96, rotate: 3 }}
      transition={{ type: "spring", stiffness: 100, damping: 27, mass: 0.9, delay: isBooting ? 0 : 0.12 }}
    >
      {/* Interactive 3D Frame with Ambient Float */}
      <motion.div
        className="portrait-frame"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        animate={
          reduceMotion || isHovered
            ? undefined
            : {
                y: [0, -7, 0],
                transition: {
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                },
              }
        }
        style={
          reduceMotion
            ? undefined
            : {
                rotateX,
                rotateY,
                transformPerspective: 1000,
                transformStyle: "preserve-3d",
              }
        }
        whileHover={reduceMotion ? undefined : { scale: 1.025 }}
        whileTap={reduceMotion ? undefined : { scale: 0.985 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
      >
        {/* Shutter Reveal Wipe */}
        <motion.span
          className="portrait-shutter"
          aria-hidden="true"
          initial={false}
          animate={{ x: "108%" }}
          whileInView={reduceMotion || isBooting ? undefined : { x: ["0%", "108%"] }}
          viewport={{ once: false, amount: 0.28, margin: "-4% 0px -4% 0px" }}
          transition={{ type: "spring", stiffness: 120, damping: 19, mass: 0.9 }}
        />

        {/* Photo Container with Parallax & Hover Zoom */}
        <motion.div
          className="relative w-full h-full overflow-hidden"
          style={
            reduceMotion
              ? undefined
              : {
                  x: photoParallaxX,
                  y: photoParallaxY,
                  scale: isHovered ? 1.06 : 1.02,
                }
          }
          transition={{ type: "spring", stiffness: 160, damping: 22 }}
        >
          <Image
            src="/nadeem-alam.jpg"
            alt="Portrait of Nadeem Alam"
            fill
            priority
            sizes="(max-width: 760px) 82vw, 36vw"
            className="hero-portrait"
            style={{
              filter: isHovered
                ? "grayscale(0) contrast(1.08) brightness(1.02)"
                : "grayscale(0.55) contrast(1.04)",
              transition: "filter 450ms cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
        </motion.div>

        {/* Dynamic Specular Light Glare Sheen */}
        {!reduceMotion && (
          <motion.div
            className="pointer-events-none absolute inset-0 z-10 mix-blend-overlay"
            style={{
              opacity: glareOpacity,
              background: glareBackground,
            }}
          />
        )}
      </motion.div>

      {/* Caption */}
      <div className="portrait-caption">
        <span>NADEEM ALAM</span>
        <span>BASED IN PATNA, INDIA</span>
      </div>

      {/* Interactive Floating Stamp with Spring Hover */}
      <motion.div
        className="portrait-stamp hero-enter-stamp"
        whileHover={reduceMotion ? undefined : { rotate: 20, scale: 1.12 }}
        animate={
          reduceMotion
            ? undefined
            : {
                rotate: [8, 12, 8],
                transition: {
                  repeat: Infinity,
                  duration: 6.5,
                  ease: "easeInOut",
                },
              }
        }
        transition={{ type: "spring", stiffness: 280, damping: 18 }}
      >
        <span>DATA</span>
        <span>×</span>
        <span>SYSTEMS</span>
      </motion.div>
    </motion.div>
  );
}

export default function PortfolioHome() {
  const siteRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const { scrollY, scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 110, damping: 26, restDelta: 0.001 });
  const heroTextY = useTransform(scrollY, [0, 760], [0, -48]);
  const heroTextOpacity = useTransform(scrollY, [0, 660], [1, 0.58]);
  const heroPortraitY = useSpring(useTransform(scrollY, [0, 760], [0, 50]), { stiffness: 105, damping: 25, mass: 0.8 });
  const heroPortraitScale = useSpring(useTransform(scrollY, [0, 760], [1.045, 0.975]), { stiffness: 105, damping: 25, mass: 0.8 });
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [isBooting, setIsBooting] = useState(true);
  const selectedProject = selectedProjectId
    ? projects.find((project) => project.id === selectedProjectId) ?? null
    : null;

  useEffect(() => {
    const bootDuration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 2250;
    const bootTimer = window.setTimeout(() => setIsBooting(false), bootDuration);
    return () => window.clearTimeout(bootTimer);
  }, []);

  useLayoutEffect(() => {
    const site = siteRef.current;
    if (!site || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = Array.from(site.querySelectorAll<HTMLElement>("[data-reveal]"));
    site.dataset.motion = "ready";

    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("is-visible", entry.isIntersecting);
      });
    }, { rootMargin: "-12% 0px -12% 0px", threshold: 0.04 });

    targets.forEach((target) => {
      const rect = target.getBoundingClientRect();
      const revealBandTop = window.innerHeight * 0.12;
      const revealBandBottom = window.innerHeight * 0.88;
      target.classList.toggle("is-visible", rect.bottom > revealBandTop && rect.top < revealBandBottom);
      observer.observe(target);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="portfolio-site" ref={siteRef} data-booting={isBooting}>
      {isBooting && <div className="boot-screen" role="status" aria-label="Starting Nadeem Alam's portfolio">
        <div className="boot-grid" aria-hidden="true" />
        <div className="boot-content">
          <div className="boot-round-robin" aria-hidden="true"><span /><i /><b /></div>
          <div className="boot-mark">
            <svg viewBox="0 0 72 48" fill="none" aria-hidden="true">
              <path className="boot-path boot-path-one" d="M3 10h10c9 0 9 14 18 14h7c10 0 10-15 20-15h11" />
              <path className="boot-path boot-path-two" d="M3 24h8c8 0 9 0 17 0h10c10 0 10 15 20 15h11" />
              <path className="boot-path boot-path-three" d="M3 38h10c8 0 8-14 18-14h7" />
              <circle cx="4" cy="10" r="2" /><circle cx="4" cy="24" r="2" /><circle cx="4" cy="38" r="2" />
              <circle className="boot-node" cx="68" cy="9" r="2.5" /><circle className="boot-node" cx="68" cy="39" r="2.5" />
            </svg>
            <span>untangle();</span>
          </div>
          <p className="boot-kicker">INDEPENDENT DATA & SOFTWARE PRACTICE</p>
          <div className="boot-lines" aria-hidden="true">
            <p><i>01</i><span>loading workbench<span className="boot-dots">...</span></span><b>OK</b></p>
            <p><i>02</i><span>connecting useful ideas<span className="boot-dots">...</span></span><b>OK</b></p>
            <p><i>03</i><span>preparing the good stuff<span className="boot-dots">...</span></span><b className="boot-live">READY</b></p>
          </div>
          <div className="boot-progress"><span /></div>
          <button className="boot-skip" onClick={() => setIsBooting(false)}>Skip intro <ArrowRight size={13} /></button>
        </div>
        <span className="boot-coordinate">PATNA · INDIA / 25.5941° N</span>
      </div>}
      <a className="skip-link" href="#main-content">Skip to content</a>
      <motion.div className="scroll-progress" style={{ scaleX: smoothProgress, transformOrigin: "left center" }} aria-hidden="true" />
      <header className="portfolio-header">
        <div className="portfolio-container header-inner">
          <a className="wordmark" href="#top" aria-label="Nadeem Alam home"><span className="wordmark-name">Nadeem Alam<small>Data · Automation · Software</small></span></a>
          <nav className="site-nav" aria-label="Main navigation"><a href="#work">Work</a><a href="#approach">Approach</a><a href="#experience">Experience</a></nav>
          <a className="header-contact" href="#contact">Let’s talk <ArrowUpRight size={15} /></a>
        </div>
      </header>

      <main id="main-content">
        <section className="hero-section" id="top">
          <div className="portfolio-container hero-grid">
            <motion.div className="hero-copy" style={reduceMotion ? undefined : { y: heroTextY, opacity: heroTextOpacity }}>
              <div className="eyebrow hero-enter hero-enter-1"><span className="eyebrow-dot" /> INDEPENDENT DATA & SOFTWARE PRACTICE</div>
              <h1 className="hero-enter hero-enter-2" aria-label="Making data work better"><WordReveal lines={["Making data", "work better."]} accentWords={["work"]} loading={isBooting} /></h1>
              <p className="hero-intro hero-enter hero-enter-3">I turn scattered data and repetitive processes into clear reporting, thoughtful automation, and useful software.</p>
              <div className="hero-terminal hero-enter hero-enter-terminal" aria-label="A playful workbench note">
                <div className="terminal-chrome"><span className="terminal-lights" aria-hidden="true"><i /><i /><i /></span><span>workbench.sql</span><span className="terminal-label">FIELD NOTES</span></div>
                <div className="terminal-command"><span className="terminal-prompt">$</span><span className="terminal-type">SELECT clarity FROM messy_data;</span><span className="terminal-caret" aria-hidden="true" /></div>
                <div className="terminal-result"><span>-- result</span><strong>clean reports <i>+</i> useful apps</strong></div>
              </div>
              <div className="hero-actions hero-enter hero-enter-4"><a className="button-primary" href="#work">Explore selected work <ArrowDown size={15} /></a><button className="button-text" onClick={() => setIsCvOpen(true)}><FileText size={15} /> View my CV</button></div>
              <div className="hero-meta hero-enter hero-enter-5"><span><MapPin size={14} /> {profile.location}</span><a href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight size={13} /></a></div>
            </motion.div>
            <HeroPortrait
              reduceMotion={reduceMotion}
              isBooting={isBooting}
              heroPortraitY={heroPortraitY}
              heroPortraitScale={heroPortraitScale}
            />
            <div className="hero-index"><span>01</span><span>SCROLL TO EXPLORE</span><i /></div>
          </div>
        </section>

        <section className="signal-strip" aria-label="Areas of work">
          <span className="sr-only">Operational analytics, workflow automation, and full-stack applications.</span>
          <div className="signal-shell">
            <div className="signal-caption">
              <span className="signal-kicker"><i /> FIELD NOTES / 04</span>
              <strong>From mess<br />to <em>momentum.</em></strong>
              <span className="signal-caption-foot">THE WORKING LOOP</span>
            </div>
            <div className="signal-stream">
              <div className="signal-stream-head">
                <span><i className="signal-status-dot" /> OPERATIONAL LOOP / RUNNING</span>
                <span className="signal-stream-meta">PATNA · IN <b>25.5941° N</b></span>
              </div>
              <motion.div
                className="signal-marquee"
                initial={reduceMotion ? false : { opacity: 0.82, y: 14, scale: 0.99 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.22, margin: "-5% 0px -5% 0px" }}
                transition={{ type: "spring", stiffness: 118, damping: 21, mass: 0.82 }}
                aria-hidden="true"
              >
                <div className="signal-track">
                  {[0, 1].map((copy) => <div className="signal-group" key={copy}>
                    {signalSteps.map((step) => <span className="signal-item" key={step.code}>
                      <small>{step.code}</small>
                      <strong>{step.action} <em>{step.detail}</em></strong>
                      <i aria-hidden="true">↗</i>
                    </span>)}
                  </div>)}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="portfolio-container">
            <motion.div className="section-heading work-heading" initial={reduceMotion ? false : { opacity: 0, x: -28, y: 14 }} whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, y: 0 }} viewport={{ once: false, amount: 0.3, margin: "-8% 0px -8% 0px" }} transition={{ type: "spring", stiffness: 120, damping: 28, mass: 0.85 }}><div><span className="section-number">01 / SELECTED WORK</span><h2 aria-label="Built around real working problems"><WordReveal lines={["Built around real", "working problems."]} /></h2></div><p>From client software to a regional data platform, each project starts with a practical bottleneck and works toward a clearer way forward.</p></motion.div>
            <div className="project-grid">{featuredProjects.map((project, index) => <motion.article
              className={`work-card work-card-${index + 1}`}
              key={project.id}
              initial={reduceMotion ? false : { opacity: 0, x: index % 2 === 0 ? -30 : 30, y: 20, rotate: index % 2 === 0 ? -0.7 : 0.7, scale: 0.99 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.14, margin: "-6% 0px -6% 0px" }}
              whileHover={reduceMotion ? undefined : { y: -8, rotateX: 1, scale: 1.012, transition: { type: "spring", stiffness: 150, damping: 25, mass: 0.9 } }}
              whileTap={reduceMotion ? undefined : { scale: 0.985, transition: { type: "spring", stiffness: 240, damping: 26 } }}
              transition={{ type: "spring", stiffness: 125, damping: 29, mass: 0.82, delay: index * 0.045 }}
            >
              <motion.button className="project-art-button" onClick={() => setSelectedProjectId(project.id)} aria-label={`Quick view ${project.title}`} whileHover={reduceMotion ? undefined : { scale: 1.02 }} whileTap={reduceMotion ? undefined : { scale: 0.98 }} transition={{ type: "spring", stiffness: 160, damping: 26, mass: 0.9 }}><ProjectArtwork projectId={project.id} /><span className="art-open"><ArrowUpRight size={18} /></span></motion.button>
              <div className="work-card-meta"><span>{project.category}</span><span>{String(index + 1).padStart(2, "0")} / {String(featuredProjects.length).padStart(2, "0")}</span></div>
              <h3><Link href={`/projects/${project.id}`}>{project.title}</Link></h3>
              <p>{project.summary}</p>
              <div className="work-card-footer"><div className="project-tags">{project.tags.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}</div><Link className="case-link" href={`/projects/${project.id}`}>Read case study <ArrowUpRight size={15} /></Link></div>
            </motion.article>)}</div>
            <div className="more-work"><span>More experiments, tools and open-source work</span><a href={profile.github} target="_blank" rel="noreferrer">Browse GitHub <ArrowUpRight size={15} /></a></div>
          </div>
        </section>

        <motion.section className="approach-section section-pad" id="approach" initial={reduceMotion ? false : { opacity: 0.8, y: 30, scale: 0.995 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }} viewport={{ once: false, amount: 0.16, margin: "-8% 0px -8% 0px" }} transition={{ type: "spring", stiffness: 118, damping: 29, mass: 0.84 }}>
          <div className="portfolio-container approach-grid">
            <div className="approach-intro"><span className="section-number">02 / HOW I WORK</span><h2 aria-label="Find the friction. Fix the flow."><WordReveal lines={["Find the friction.", "Fix the flow."]} accentWords={["Fix", "the", "flow."]} /></h2><p>Good systems make the day-to-day easier. I bring together analysis, automation, and software to help teams spend less time chasing information and more time using it.</p><button className="button-outline" onClick={() => setIsCvOpen(true)}>More about my background <ArrowUpRight size={15} /></button></div>
            <div className="practice-list">{profile.corePillars.map((pillar, index) => <article className="practice-item" key={pillar.title}><span>0{index + 1}</span><div><h3>{pillar.title}</h3><p>{pillar.description}</p></div><ArrowUpRight size={17} className="practice-arrow" /></article>)}</div>
          </div>
          <div className="portfolio-container toolkit-row" data-reveal><span>TOOLS I WORK WITH</span><p>SQL <i>·</i> Python <i>·</i> Google Apps Script <i>·</i> Excel <i>·</i> Looker Studio <i>·</i> TypeScript <i>·</i> Next.js <i>·</i> PostgreSQL <i>·</i> Supabase <i>·</i> Flutter</p></div>
        </motion.section>

        <section className="experience-section section-pad" id="experience">
          <motion.div className="portfolio-container experience-layout" initial={reduceMotion ? false : { opacity: 0.8, y: 24 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.12, margin: "-8% 0px -8% 0px" }} transition={{ type: "spring", stiffness: 120, damping: 30, mass: 0.84 }}>
            <header className="experience-title">
              <span className="section-number">03 / EXPERIENCE LOG</span>
              <div className="experience-intro-row">
                <h2 aria-label="Built through real work"><WordReveal lines={["Built through", "real work."]} accentWords={["real", "work."]} /></h2>
                <div className="experience-intro-note"><p>Roles where analysis, operations, and better systems meet.</p><span><b>{String(profile.experience.length).padStart(2, "0")}</b> roles <i>·</i> Patna, India</span></div>
              </div>
            </header>
            <div className="experience-list">
              {profile.experience.map((item, index) => <motion.article
                className="experience-item"
                key={`${item.organization}-${item.role}`}
                initial={reduceMotion ? false : { opacity: 0, x: index % 2 === 0 ? -22 : 22, y: 14 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.18, margin: "-8% 0px -8% 0px" }}
                transition={{ type: "spring", stiffness: 130, damping: 30, mass: 0.82, delay: index * 0.05 }}
              >
                <div className="experience-marker" aria-hidden="true"><span>0{index + 1}</span><i /></div>
                <div className="experience-entry">
                  <div className="experience-period">{item.period}<span><MapPin size={11} /> {item.location}</span></div>
                  <div className="experience-content">
                    <div className="experience-heading"><h3>{item.role}</h3><span>{item.type}</span></div>
                    <p className="experience-org">{item.organization}</p>
                    <ul>{item.description.slice(0, 3).map((description) => <li key={description}>{description}</li>)}</ul>
                    <div className="experience-tags">{item.skills.slice(0, 5).map((skill) => <span key={skill}>{skill}</span>)}</div>
                  </div>
                </div>
              </motion.article>)}
            </div>
          </motion.div>
        </section>

        <section className="contact-section" id="contact"><motion.div className="portfolio-container contact-inner" initial={reduceMotion ? false : { opacity: 0.8, y: 30, scale: 0.995 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }} viewport={{ once: false, amount: 0.18, margin: "-8% 0px -8% 0px" }} transition={{ type: "spring", stiffness: 118, damping: 30, mass: 0.84 }}><span className="section-number">04 / NEXT STEP</span><div className="contact-grid"><h2 aria-label="Have a problem worth untangling"><WordReveal lines={["Have a problem", "worth untangling?"]} accentWords={["untangling?"]} /></h2><div className="contact-copy"><p>I’m open to opportunities in analytics, automation, and application development. Tell me what your team is working through.</p><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight size={20} /></a><div className="social-links"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a></div></div></div><div className="contact-foot"><span><span className="eyebrow-dot" /> {profile.availability}</span><span>{profile.location}</span></div></motion.div></section>
      </main>

      <footer className="portfolio-footer"><div className="portfolio-container footer-inner"><a className="footer-mark" href="#top" aria-label="Back to top"><Terminal size={18} strokeWidth={1.8} /></a><span>© 2026 {profile.name}</span><span>Made with care in Patna, India</span><a href="#top">Back to top ↑</a></div></footer>
      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProjectId(null)} />
    </div>
  );
}
