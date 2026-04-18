import { createElement, useEffect, useRef, useState } from "react";
import {
  Brain, Shield, ChevronRight, ChevronDown,
  ArrowRight, Sparkles, Lock,
  Activity
} from "lucide-react";

// ─── Constants ───
const APP_LOGIN_URL = "https://app.socratink.ai/login";
const DISCORD_INVITE_URL = "https://discord.gg/ZEHqpC6vMx";

function DiscordIcon({ size = 20, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M19.5 5.2A17.4 17.4 0 0 0 15.2 4l-.2.4c1.5.4 2.8 1.1 3.9 2.1a12.8 12.8 0 0 0-4.7-1.5 13.8 13.8 0 0 0-4.5 0A12.8 12.8 0 0 0 5 6.5c1.1-1 2.4-1.7 3.9-2.1L8.8 4a17.4 17.4 0 0 0-4.3 1.2C1.8 9.2 1 13 1.4 16.8A17.1 17.1 0 0 0 6.7 19c.4-.6.8-1.2 1.1-1.8-.6-.2-1.2-.5-1.8-.9l.4-.3a12.4 12.4 0 0 0 11.2 0l.4.3c-.6.4-1.2.7-1.8.9.3.6.7 1.2 1.1 1.8a17.1 17.1 0 0 0 5.3-2.2c.5-4.4-.8-8.1-3.1-11.6ZM8.6 14.6c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Zm6.8 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Z" />
    </svg>
  );
}

// ─── Animation Hook ───
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ─── Shared SVG Gradient ───
function GradientDef({ id, accent }) {
  return (
    <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor={accent} stopOpacity="0.25" />
      <stop offset="100%" stopColor={accent} stopOpacity="0.05" />
    </linearGradient>
  );
}

// ─── Isometric SVG Illustrations ───
function IsoExtraction({ accent = "#9067C6" }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs><GradientDef id="ge1" accent={accent} /></defs>
      <path d="M60 130 L100 110 L140 130 L100 150Z" fill="url(#ge1)" stroke={accent} strokeWidth="1.5" />
      <path d="M60 130 L60 115 L100 95 L100 110Z" fill={accent} fillOpacity="0.15" stroke={accent} strokeWidth="1" />
      <path d="M100 110 L100 95 L140 115 L140 130Z" fill={accent} fillOpacity="0.1" stroke={accent} strokeWidth="1" />
      <path d="M65 118 L100 100 L135 118 L100 136Z" fill="url(#ge1)" stroke={accent} strokeWidth="1" strokeOpacity="0.5" />
      <path d="M100 90 L100 55" stroke={accent} strokeWidth="2" strokeLinecap="round" />
      <path d="M92 63 L100 55 L108 63" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="80" cy="42" r="6" fill={accent} fillOpacity="0.25" stroke={accent} strokeWidth="1.5" />
      <circle cx="100" cy="35" r="6" fill={accent} fillOpacity="0.25" stroke={accent} strokeWidth="1.5" />
      <circle cx="120" cy="42" r="6" fill={accent} fillOpacity="0.25" stroke={accent} strokeWidth="1.5" />
      <line x1="86" y1="42" x2="94" y2="37" stroke={accent} strokeWidth="1" strokeOpacity="0.6" />
      <line x1="106" y1="37" x2="114" y2="42" stroke={accent} strokeWidth="1" strokeOpacity="0.6" />
      <text x="80" y="45" textAnchor="middle" fill={accent} fontSize="5" fontWeight="600">WHY</text>
      <text x="100" y="38" textAnchor="middle" fill={accent} fontSize="5" fontWeight="600">HOW</text>
      <text x="120" y="45" textAnchor="middle" fill={accent} fontSize="5" fontWeight="600">→</text>
    </svg>
  );
}

function IsoVault({ accent = "#8D86C9" }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs><GradientDef id="gv1" accent={accent} /></defs>
      <path d="M100 50 L150 75 L150 135 L100 160 L50 135 L50 75Z" fill="url(#gv1)" stroke={accent} strokeWidth="1.5" />
      <path d="M100 50 L100 110 L50 135 L50 75Z" fill={accent} fillOpacity="0.12" />
      <path d="M100 110 L150 135 L150 75 L100 50" fill={accent} fillOpacity="0.06" />
      <path d="M100 50 L100 110" stroke={accent} strokeWidth="1" strokeOpacity="0.4" />
      <path d="M50 75 L100 110 L150 75" stroke={accent} strokeWidth="1" strokeOpacity="0.3" />
      <path d="M70 87 L70 125" stroke={accent} strokeWidth="0.5" strokeOpacity="0.3" />
      <path d="M85 80 L85 118" stroke={accent} strokeWidth="0.5" strokeOpacity="0.3" />
      <path d="M60 95 L95 112" stroke={accent} strokeWidth="0.5" strokeOpacity="0.3" />
      <path d="M55 108 L90 125" stroke={accent} strokeWidth="0.5" strokeOpacity="0.3" />
      <rect x="75" y="90" width="20" height="12" rx="2" fill={accent} fillOpacity="0.2" stroke={accent} strokeWidth="0.8" />
      <text x="85" y="99" textAnchor="middle" fill={accent} fontSize="6" fontWeight="600">§</text>
    </svg>
  );
}

function IsoreFeyn({ accent = "#9067C6" }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs><GradientDef id="gd1" accent={accent} /></defs>
      <ellipse cx="100" cy="85" rx="40" ry="35" fill="url(#gd1)" stroke={accent} strokeWidth="1.5" />
      <path d="M80 75 Q90 60 100 70 Q110 60 120 75" stroke={accent} strokeWidth="1" strokeOpacity="0.5" fill="none" />
      <path d="M75 90 Q85 80 100 85 Q115 80 125 90" stroke={accent} strokeWidth="1" strokeOpacity="0.5" fill="none" />
      <text x="90" y="88" fill={accent} fontSize="14" fontWeight="700" fillOpacity="0.7">?</text>
      <text x="105" y="82" fill={accent} fontSize="10" fontWeight="700" fillOpacity="0.5">?</text>
      <path d="M98 120 L94 135 L102 132 L98 148" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="72" cy="100" r="4" fill={accent} fillOpacity="0.15" stroke={accent} strokeWidth="1" />
      <text x="72" y="103" textAnchor="middle" fill={accent} fontSize="5" fontWeight="700">S</text>
      <circle cx="128" cy="100" r="4" fill={accent} fillOpacity="0.15" stroke={accent} strokeWidth="1" />
      <text x="128" y="103" textAnchor="middle" fill={accent} fontSize="5" fontWeight="700">D</text>
    </svg>
  );
}

// ─── FAQ Accordion ───
function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-outline-variant/40">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-ink font-medium text-base pr-4 group-hover:text-primary transition-colors">{question}</span>
        <ChevronDown size={18} className={`text-primary shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-48 pb-5" : "max-h-0"}`}>
        <p className="text-ink-muted text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

// ─── Pipeline Stage Card ───
function StageCard({ number, title, description, illustration, accentClass, delay, visible }) {
  return (
    <div
      className={`stage-card landing-card group rounded-2xl border border-outline-variant/20 bg-surface-container subtle-shadow p-8 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(144,103,198,0.08)] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms`, transitionProperty: "opacity, transform", transitionDuration: "700ms" }}
    >
      <div className={`stage-illustration relative rounded-xl mb-6 h-44 border border-outline-variant/20 overflow-hidden flex items-center justify-center ${accentClass}`}>
        <span className="absolute top-3 left-3 w-7 h-7 rounded-full bg-primary text-white text-xs font-display font-bold flex items-center justify-center shadow-md">{number}</span>
        <div className="w-32 h-32">{illustration}</div>
      </div>
      <h4 className="font-display font-medium text-xl text-ink mb-3">{title}</h4>
      <p className="text-sm text-ink-muted leading-relaxed">{description}</p>
    </div>
  );
}


// ─── Page Data ───
const STEPS = [
  {
    number: 1, title: "Bring your material",
    description: "Notes, readings, transcripts, or source text. You own the content — socratink extracts the structure.",
    accentClass: "bg-primary/10", delay: 0, Illustration: IsoExtraction,
  },
  {
    number: 2, title: "Get a map",
    description: "socratink identifies what depends on what and builds a knowledge graph. You can see the full territory before you start.",
    accentClass: "bg-primary-dim/10", delay: 150, Illustration: IsoVault,
  },
  {
    number: 3, title: "Clear rooms",
    description: "Drill one node at a time. The explanation disappears. You reconstruct from memory. The graph changes only when your answer holds up.",
    accentClass: "bg-primary/10", delay: 300, Illustration: IsoreFeyn,
  },
];


const FAQ_ITEMS = [
  {
    question: "Who is this for?",
    answer: "Self-directed learners who study from their own material and want more than summaries, streaks, and quiz cosmetics. If you care whether you actually understand something — not just whether you've seen it — socratink was built for you.",
  },
  {
    question: "Is this just fancy flashcards?",
    answer: "No. Flashcards test recognition of isolated labels. socratink asks you to reconstruct causal mechanisms from memory — how and why things work, not just what they're called. The AI adapts to where your reasoning actually breaks down, not to a fixed review interval.",
  },
  {
    question: "What subjects does it work for?",
    answer: "Any subject with causal structure — sciences, engineering, law, economics, medicine, history. If the material has ideas that depend on other ideas, socratink can map and drill it.",
  },
  {
    question: "How is this different from RemNote, Anki, or Recall?",
    answer: "Anki is honest recall without structure. RemNote and Recall have structure but their graphs track notes and activity, not verified understanding. socratink sits at the intersection: your own material, a real dependency graph, and a map that only advances when you can actually explain the ideas inside it.",
  },
  {
    question: "What about learners with ADHD?",
    answer: "socratink wasn't designed as an ADHD tool with a general mode — it was designed around clear targets, bounded sessions, and zero-friction re-entry. Features like automatic time-boxing, fatigue guardrails, and context restoration for returning sessions are built into the core loop. If you don't need them, they stay out of your way.",
  },
];

const ILLUSION_ITEMS = [
  { title: "You read it", detail: "Highlighted, summarized, reviewed the notes. Felt like progress." },
  { title: "You recognized it", detail: "Saw the answer on a flashcard and thought — yeah, I know that." },
  { title: "Then you tried to explain it", detail: "From memory, out loud, to someone who asked why. And the floor dropped out." },
];

const HERO_LOOP_MS = 16000;
const HERO_RESPONSE = "Momentum is what force produces over time. If I can explain how a force applied for an interval changes motion, the map can open Energy.";

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return undefined;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = (event) => {
      setPrefersReducedMotion(event.matches);
    };

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  return prefersReducedMotion;
}

function HeroProductVignette() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [elapsedMs, setElapsedMs] = useState(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return 0;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 13000 : 0;
  });

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    const startedAt = performance.now();
    const intervalId = window.setInterval(() => {
      setElapsedMs((performance.now() - startedAt) % HERO_LOOP_MS);
    }, 50);

    return () => window.clearInterval(intervalId);
  }, [prefersReducedMotion]);

  const after = (time) => elapsedMs >= time;
  const between = (start, end) => elapsedMs >= start && elapsedMs < end;

  const statusText = between(0, 2500)
    ? "SYSTEM: EXTRACTING SIGNAL..."
    : between(2500, 4500)
      ? "SYSTEM: KNOWLEDGE MAP READY"
      : between(4500, 8000)
        ? "ACTIVE TARGET: EXPLAIN B IN YOUR OWN WORDS"
        : between(8000, 10500)
          ? "EVALUATING RECONSTRUCTION..."
          : "GRAPH UPDATED: UNDERSTANDING VERIFIED";

  const activePhase = between(0, 2500) ? 1 : between(2500, 4500) ? 2 : between(4500, 10500) ? 3 : 4;
  const responseProgress = prefersReducedMotion
    ? 1
    : Math.max(0, Math.min(1, (elapsedMs - 4500) / (8000 - 4500)));
  const typedCount = Math.floor(HERO_RESPONSE.length * responseProgress);
  const typedResponse = after(4500) ? HERO_RESPONSE.slice(0, typedCount) : "";

  const nodesVisible = {
    core: after(450),
    a: after(850),
    c: after(1200),
    b: after(2750),
    d: after(3150),
    unknown: after(3450),
  };

  const showDrillPanel = after(2500);
  const focusDrillPanel = after(4500);
  const showEvaluation = after(10500);
  const showCaption = after(13000);
  const showRipple = between(10500, 11750);

  return (
    <>
      <div className="hero-demo-frame">
        <div className="demo-window glass-card">
          <div className="demo-topbar">
            <div className="demo-brand">
              <span className="demo-brand__mark" aria-hidden="true" />
              <span>socratink</span>
            </div>
            <div className="demo-phases" aria-hidden="true">
              {[
                { number: 1, label: "Extraction" },
                { number: 2, label: "Vault" },
                { number: 3, label: "Retink" },
                { number: 4, label: "Scaffolding" },
              ].map((phase) => (
                <div
                  key={phase.number}
                  className={`demo-phase-pill ${activePhase === phase.number ? "is-active" : ""}`}
                >
                  <span className="demo-phase-pill__number">{phase.number}</span>
                  <span className="demo-phase-pill__label">{phase.label}</span>
                </div>
              ))}
            </div>
            <div className="demo-window-controls" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="demo-body">
            <div className="demo-status-strip">
              <span>{statusText}</span>
            </div>

            <div className="demo-stage">
              <div className="demo-graph-panel">
                <div className={`graph-grid-bg ${after(300) ? "is-visible" : ""}`} />
                <svg className="graph-edges" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  <line className={`graph-edge ${nodesVisible.core && nodesVisible.a ? "is-visible" : ""}`} x1="34" y1="52" x2="23" y2="26" />
                  <line className={`graph-edge ${nodesVisible.core && nodesVisible.c ? "is-visible" : ""}`} x1="34" y1="52" x2="25" y2="75" />
                  <line className={`graph-edge ${nodesVisible.core && nodesVisible.b ? "is-visible" : ""}`} x1="34" y1="52" x2="50" y2="52" />
                  <line className={`graph-edge ${nodesVisible.b && nodesVisible.d ? "is-visible" : ""} ${after(8000) ? "is-highlighted" : ""}`} x1="50" y1="52" x2="74" y2="28" />
                  <line className={`graph-edge ${nodesVisible.b && nodesVisible.unknown ? "is-visible" : ""}`} x1="50" y1="52" x2="74" y2="74" />
                </svg>

                <div className="graph-nodes" aria-hidden="true">
                  <div className={`graph-node graph-node--a ${nodesVisible.a ? "is-visible is-solidified" : ""}`}>
                    <span className="graph-node__label">Force</span>
                  </div>
                  <div className={`graph-node graph-node--core ${nodesVisible.core ? "is-visible is-solidified" : ""}`}>
                    <span className="graph-node__label">Motion</span>
                  </div>
                  <div className={`graph-node graph-node--c ${nodesVisible.c ? "is-visible is-drilled" : ""}`}>
                    <span className="graph-node__label">Mass</span>
                  </div>
                  <div className={`graph-node graph-node--b ${nodesVisible.b ? "is-visible" : ""} ${after(10500) ? "is-solidified" : after(2500) ? "is-active" : ""}`}>
                    <span className={`graph-node__ripple ${showRipple ? "is-visible" : ""}`} />
                    <span className="graph-node__label">Momentum</span>
                  </div>
                  <div className={`graph-node graph-node--d ${nodesVisible.d ? "is-visible" : ""} ${after(10500) ? "is-open" : "is-locked"}`}>
                    <span className="graph-node__label">Energy</span>
                  </div>
                  <div className={`graph-node graph-node--unknown ${nodesVisible.unknown ? "is-visible is-locked" : ""}`}>
                    <span className="graph-node__label">?</span>
                  </div>
                </div>

                <div className="graph-legend-minimal" aria-hidden="true">
                  <span className="graph-legend-dot graph-legend-dot--solid" />
                  <span className="graph-legend-dot graph-legend-dot--active" />
                  <span className="graph-legend-dot graph-legend-dot--open" />
                </div>
              </div>

              <div className={`demo-drill-panel ${showDrillPanel ? "is-visible" : ""} ${focusDrillPanel ? "is-focused" : ""}`}>
                <div className="drill-kicker">Socratic Drill</div>
                <div className={`drill-prompt ${after(4500) ? "is-visible" : ""}`}>Explain why Momentum matters in this system.</div>
                <div className={`drill-response ${after(4500) ? "is-visible" : ""}`}>
                  <span>{typedResponse}</span>
                  <span className={`drill-cursor ${between(4500, 8000) ? "is-visible" : ""}`} aria-hidden="true" />
                </div>
                <div className={`drill-evaluation ${showEvaluation ? "is-visible" : ""}`}>Solid understanding detected</div>
              </div>
            </div>

            <div className={`demo-footer-caption ${showCaption ? "is-visible" : ""}`}>
              The map changes only when understanding is real.
            </div>
          </div>
        </div>
      </div>
      <p className="sr-only">
        Animated socratink vignette showing extraction, a knowledge map resolving, node B selected for recall, a learner explanation, evaluation, and one truthful graph update.
      </p>
    </>
  );
}

// ─── Main App ───
export default function HyFeynLanding() {
  const [probRef, probVis] = useInView(0.1);
  const [pipeRef, pipeVis] = useInView(0.1);
  const [testRef, testVis] = useInView(0.1);

  const heroShellRef = useRef(null);
  const [heroScale, setHeroScale] = useState(1);

  useEffect(() => {
    if (!heroShellRef.current) return;
    const observer = new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect;
      // Synthesize exact scaling regardless of scrollbars or mystery paddings based on a 760px source window
      setHeroScale(Math.min(1, width / 760));
    });
    observer.observe(heroShellRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="landing-shell min-h-screen bg-surface text-ink font-body selection:bg-primary/20 selection:text-ink">

      {/* ─── NAV ─── */}
      <nav className="landing-nav fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 px-6">
        <div className="flex justify-between items-center py-4 w-full max-w-7xl mx-auto">
          <div
            className="text-[1.65rem] font-bold tracking-tight text-ink font-display flex items-center gap-2.5"
            title="socratink — sō·krə·tink (Socrates + think + ink)"
          >
            <img src="/logo.png" alt="socratink Logo" className="w-10 h-10 object-contain rounded-md shadow-sm" />
            <span>socra<span className="text-primary">tink</span></span>
          </div>
          <div className="flex items-center gap-3 md:gap-5">
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-ink-muted font-display font-medium text-[15px] hover:text-primary transition-colors duration-300">How It Works</a>
              <a href="#why-different" className="text-ink-muted font-display font-medium text-[15px] hover:text-primary transition-colors duration-300">Why It's Different</a>
              <a
                href={DISCORD_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join the socratink Discord"
                className="discord-icon-link"
              >
                <DiscordIcon size={21} />
              </a>
            </div>
            <ThemeToggle variant="inline" />
            <a
              href={APP_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-6 py-2.5 rounded-full font-medium text-[15px] hidden md:inline-flex"
            >
              tink it
            </a>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="landing-hero relative pt-32 pb-20 px-6 hero-gradient overflow-hidden border-b border-outline-variant/20">
        <div className="landing-hero-panel max-w-[86rem] mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] gap-8 xl:gap-10 items-center">
          <div className="landing-hero-copy min-w-0 space-y-8 relative z-10">
            <div className="space-y-3">
              <p className="landing-hero-eyebrow font-display text-[0.72rem] md:text-sm tracking-[0.18em] uppercase text-primary/80 font-semibold">
                A study tool for deep understanding through reconstruction
              </p>
              <h1 className="landing-hero-title text-[clamp(3.85rem,5.2vw,5.6rem)] font-display font-bold leading-[0.92] tracking-tight text-ink">
                See what you can <span className="text-primary">actually explain.</span>
              </h1>
            </div>
            <p className="landing-hero-lede text-[1.03rem] md:text-[1.1rem] text-ink-muted max-w-[29rem] leading-relaxed font-light">
              Paste in what you are studying. socratink builds a map. You rebuild one idea from memory. The map only moves when your understanding does.
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
              <a
                href={APP_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="landing-demo-button px-7 py-3.5 rounded-full font-display font-semibold text-[0.98rem] text-center button-glow"
              >
                tink it
              </a>
              <a
                href={DISCORD_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="landing-inline-link flex items-center gap-2 px-4 py-4 text-ink-muted hover:text-primary text-sm font-medium transition-colors"
              >
                <DiscordIcon size={18} />
                Join Discord
              </a>
              <a
                href="#how-it-works"
                className="landing-inline-link flex items-center gap-2 px-4 py-4 text-ink-muted hover:text-primary text-sm font-medium transition-colors"
              >
                See how the map works
                <ChevronRight size={16} />
              </a>
            </div>
            <p className="landing-hero-meta text-xs md:text-sm text-ink-muted/80 font-medium -mt-2">
              Start your first drill with your own material · free during beta · no credit card
            </p>
          </div>
          <div className="landing-hero-preview relative min-w-0">
            <div className="absolute -inset-4 bg-primary/10 blur-[120px] rounded-full" />
            <div className="absolute -inset-10 bg-surface-container/60 blur-[60px] rounded-full" />
            <div
              ref={heroShellRef}
              style={{ "--hero-demo-scale": heroScale }}
              className="hero-demo-scale-shell relative z-10 transition-transform hover:-translate-y-2 duration-500"
            >
              <HeroProductVignette />
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUE STRIP ─── */}
      <section className="landing-value-strip py-12 px-6 bg-surface-container border-b border-outline-variant/20">
        <div className="landing-value-strip__inner max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="landing-value-item">
            <p className="font-display font-semibold text-lg text-ink mb-1">One room at a time</p>
            <p className="text-sm text-ink-muted">Know exactly what you are working on.</p>
          </div>
          <div className="landing-value-item">
            <p className="font-display font-semibold text-lg text-ink mb-1">No fake progress</p>
            <p className="text-sm text-ink-muted">The map updates only when you actually get it.</p>
          </div>
          <div className="landing-value-item">
            <p className="font-display font-semibold text-lg text-ink mb-1">Your weak spots stay visible</p>
            <p className="text-sm text-ink-muted">Unfinished ideas stay return-worthy, not shameful.</p>
          </div>
        </div>
      </section>

      {/* ─── PROBLEM ─── */}
      <section ref={probRef} className="py-24 px-6 bg-surface-high">
        <div className="max-w-3xl mx-auto">
          <div className={`transition-all duration-700 ${probVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-ink text-center tracking-tight">
              Most study tools reward exposure.
            </h2>
            <p className="text-lg text-ink-muted text-center mb-12 max-w-2xl mx-auto leading-relaxed">
              socratink is built against that illusion.
            </p>
            <div className="space-y-6">
              {ILLUSION_ITEMS.map((item, i) => (
                <div key={i} className="illusion-card landing-card flex items-start gap-5 rounded-2xl bg-surface-container border border-outline-variant/30 p-6 subtle-shadow hover:shadow-[0_8px_30px_rgba(144,103,198,0.06)] transition-shadow">
                  <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary font-bold text-sm">{i + 1}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-ink text-[17px] mb-1 font-display">{item.title}</p>
                    <p className="text-[15px] text-ink-muted">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section id="how-it-works" ref={pipeRef} className="py-24 px-6 bg-surface relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-outline-variant/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
          <h2 className="text-4xl font-display font-bold mb-4 text-ink tracking-tight">How It Works</h2>
          <p className="text-ink-muted max-w-2xl mx-auto text-lg font-light">
            Three steps. Your material, your map, your understanding — verified.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {STEPS.map((step) => (
            <StageCard
              key={step.number}
              {...step}
              illustration={createElement(step.Illustration, { accent: "#9067C6" })}
              visible={pipeVis}
            />
          ))}
        </div>
      </section>

      {/* ─── WHY IT FEELS DIFFERENT ─── */}
      <section id="why-different" className="py-24 px-6 bg-surface-high">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <p className="text-xs font-semibold text-primary-dim tracking-widest uppercase mb-3">Not another AI summary app. Not a prettier flashcard deck. Not a note graph.</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ink tracking-tight">Why It's Different</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            <div className="feature-card landing-card rounded-2xl bg-surface-container border border-outline-variant/30 p-8 subtle-shadow hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 border border-primary/20">
                <Shield size={22} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl text-ink mb-2">The graph tells the truth</h3>
              <p className="text-[15px] text-ink-muted leading-relaxed">It is not a browser. It is not a checklist. It is a record of verified understanding.</p>
            </div>
            <div className="feature-card landing-card rounded-2xl bg-surface-container border border-outline-variant/30 p-8 subtle-shadow hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary-dim/10 flex items-center justify-center mb-5 border border-primary-dim/20">
                <Brain size={22} className="text-primary-dim" />
              </div>
              <h3 className="font-display font-semibold text-xl text-ink mb-2">Drill protects recall</h3>
              <p className="text-[15px] text-ink-muted leading-relaxed">When it is time to answer, explanation disappears. You generate first.</p>
            </div>
            <div className="feature-card landing-card rounded-2xl bg-surface-container border border-outline-variant/30 p-8 subtle-shadow hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center mb-5 border border-tertiary/20">
                <Lock size={22} className="text-tertiary" />
              </div>
              <h3 className="font-display font-semibold text-xl text-ink mb-2">Progression is earned</h3>
              <p className="text-[15px] text-ink-muted leading-relaxed">Advanced nodes stay locked until the prerequisite ideas hold up under drill. Skip ahead and the map quietly returns you.</p>
            </div>
            <div className="feature-card landing-card rounded-2xl bg-surface-container border border-outline-variant/30 p-8 subtle-shadow hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 border border-primary/20">
                <Activity size={22} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl text-ink mb-2">Weak spots are useful</h3>
              <p className="text-[15px] text-ink-muted leading-relaxed">&ldquo;Not solid yet&rdquo; is the marker for your next session — visible on the map, not hidden under a streak.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOUNDER NOTE ─── */}
      <section ref={testRef} className="py-24 px-6 bg-surface-container border-y border-outline-variant/20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[40%] h-full bg-primary/5 blur-[100px] pointer-events-none rounded-full"></div>
        <div className="max-w-2xl mx-auto relative z-10">
          <div className={`transition-all duration-700 ${testVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <div className="flex items-center justify-center mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-outline-variant/50 text-xs font-semibold tracking-widest uppercase text-primary">
                <Sparkles size={12} />
                A note from the founder
              </span>
            </div>
            <h2 className="text-3xl font-display font-bold mb-6 text-ink tracking-tight text-center">Still testing. Still learning.</h2>
            <div className="space-y-4 text-ink-muted leading-relaxed text-lg font-light">
              <p>
                socratink started because I kept fooling myself. Highlighter sure one minute, floored the next when someone asked why. I wanted a system that refused to let me hide.
              </p>
              <p>
                What&rsquo;s here today is the first honest version of that. It&rsquo;s rough in places. The map you drill tomorrow will be sharper than today&rsquo;s because you tested today&rsquo;s.
              </p>
              <p>
                If you&rsquo;re reading this early, you&rsquo;re not just a user. You&rsquo;re building it with me. Every session you run and every place the map feels wrong shapes what ships next. Tell me when it breaks.
              </p>
            </div>
            <p className="mt-8 text-sm font-display font-semibold text-ink">— Jon, founder</p>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-24 px-6 bg-surface-high">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-primary-dim tracking-widest uppercase mb-3">FAQ</p>
            <h2 className="font-display font-bold text-3xl text-ink tracking-tight">Questions before you ask</h2>
          </div>
          <div className="faq-shell landing-card bg-surface-container rounded-2xl p-6 border border-outline-variant/30 shadow-sm">
            {FAQ_ITEMS.map((item) => (
              <FAQItem key={item.question} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-28 px-6 relative bg-surface border-t border-outline-variant/30 overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="waitlist-card landing-card bg-surface-container rounded-3xl p-10 md:p-14 border border-outline-variant/40 shadow-[0_24px_80px_rgba(144,103,198,0.12)]">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-ink tracking-tight">Find out what you can actually explain.</h2>
              <p className="text-ink-muted text-lg font-light max-w-xl mx-auto mb-8">
                Paste notes or a transcript you are actually trying to learn. Rebuild one idea from memory. Then decide whether the map tells the truth.
              </p>
              <a
                href={APP_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-display font-semibold text-lg"
              >
                tink it
                <ArrowRight size={18} />
              </a>
              <p className="text-xs md:text-sm text-ink-muted/80 font-medium mt-5">
                Free during beta · no credit card · your notes stay yours
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="landing-footer w-full border-t border-outline-variant/40 bg-surface-container">
        <div className="flex flex-col items-center gap-6 px-12 py-12 w-full max-w-7xl mx-auto">
          <div className="flex flex-col gap-2 items-center text-center">
            <div
              className="font-display font-bold text-ink text-xl flex items-center gap-2"
              title="socratink — sō·krə·tink (Socrates + think + ink)"
            >
              <img src="/logo.png" alt="socratink Logo" className="w-6 h-6 object-contain rounded flex-shrink-0" />
              <span>socra<span className="text-primary">tink</span></span>
            </div>
            <p className="text-xs tracking-widest uppercase text-ink-muted/70 font-medium">sō·krə·tink</p>
            <a
              href={DISCORD_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-discord-link"
            >
              <DiscordIcon size={17} />
              Join the Discord
            </a>
            <p className="text-sm tracking-wide text-ink-muted">© 2026 socratink. A truthful map of what you can actually explain.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-ink-muted">
            <a href="/privacy.html" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#how-it-works" className="hover:text-primary transition-colors">How it works</a>
            <a href="#why-different" className="hover:text-primary transition-colors">Why it&rsquo;s different</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ─── ThemeToggle Component ───
function ThemeToggle({ variant = "floating" }) {
  const THEME_STORAGE_KEY = 'learnops-theme';
  const readStoredThemePreference = () => {
    try {
      return localStorage.getItem(THEME_STORAGE_KEY) === 'dark' ? 'dark' : 'light';
    } catch (error) {
      console.warn('Theme preference unavailable.', error);
      return 'light';
    }
  };
  const [themePreference, setThemePreference] = useState(readStoredThemePreference);

  const applyThemePreference = (resolvedTheme) => {
    document.body.classList.toggle('night', resolvedTheme === 'dark');
    document.body.dataset.theme = resolvedTheme;
    document.documentElement.dataset.theme = resolvedTheme;
  };

  useEffect(() => {
    applyThemePreference(themePreference);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, themePreference);
    } catch (error) {
      console.warn('Theme preference unavailable.', error);
    }
  }, [themePreference]);

  const toggleTheme = () => {
    setThemePreference(themePreference === 'dark' ? 'light' : 'dark');
  };

  const isDark = themePreference === 'dark';
  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <button
      className={`theme-toggle ${variant === "inline" ? "theme-toggle--inline" : ""}`}
      onClick={toggleTheme}
      data-theme={themePreference}
      aria-label={label}
      aria-pressed={String(isDark)}
      title={label}
      type="button"
    >
      <span className="theme-toggle-icon theme-toggle-icon-sun" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4.5"></circle>
          <path d="M12 2.5v3"></path>
          <path d="M12 18.5v3"></path>
          <path d="M4.9 4.9l2.1 2.1"></path>
          <path d="M17 17l2.1 2.1"></path>
          <path d="M2.5 12h3"></path>
          <path d="M18.5 12h3"></path>
          <path d="M4.9 19.1L7 17"></path>
          <path d="M17 7l2.1-2.1"></path>
        </svg>
      </span>
      <span className="theme-toggle-track" aria-hidden="true">
        <span className="theme-toggle-thumb"></span>
      </span>
      <span className="theme-toggle-icon theme-toggle-icon-moon" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.5 15.2A8.8 8.8 0 1 1 12.8 3.5a7.2 7.2 0 0 0 7.7 11.7z"></path>
          <path d="M18 5.2v2.1"></path>
          <path d="M16.95 6.25h2.1"></path>
        </svg>
      </span>
    </button>
  );
}
