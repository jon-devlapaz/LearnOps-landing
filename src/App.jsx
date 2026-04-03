import { useState, useEffect, useRef } from "react";
import {
  Brain, Shield, Check, ChevronRight, ChevronDown,
  ArrowRight, Sparkles, Lock, AlertCircle, CheckCircle2,
  Activity
} from "lucide-react";

// ─── Constants ───
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
  }, []);
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
function StageCard({ number, title, subtitle, description, illustration, accentClass, delay, visible }) {
  return (
    <div
      className={`stage-card landing-card group rounded-2xl border border-outline-variant/20 bg-surface-container subtle-shadow p-8 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(144,103,198,0.08)] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms`, transitionProperty: "opacity, transform", transitionDuration: "700ms" }}
    >
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${accentClass}`}>
        <div className="w-10 h-10">{illustration}</div>
      </div>
      <h4 className="font-display font-medium text-xl text-ink mb-3">{number}. {title}</h4>
      <p className="text-sm text-ink-muted leading-relaxed">{description}</p>
    </div>
  );
}


// ─── Page Data ───
const STEPS = [
  {
    number: 1, title: "Bring your material",
    description: "Notes, readings, transcripts, or source text. You own the content — socraTink extracts the structure.",
    accentClass: "bg-primary/10", delay: 0, Illustration: IsoExtraction,
  },
  {
    number: 2, title: "Get a map",
    description: "socraTink identifies what depends on what and builds a knowledge graph. You can see the full territory before you start.",
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
    answer: "Self-directed learners who study from their own material and want more than summaries, streaks, and quiz cosmetics. If you care whether you actually understand something — not just whether you've seen it — socraTink was built for you.",
  },
  {
    question: "Is this just fancy flashcards?",
    answer: "No. Flashcards test recognition of isolated labels. socraTink asks you to reconstruct causal mechanisms from memory — how and why things work, not just what they're called. The AI adapts to where your reasoning actually breaks down, not to a fixed review interval.",
  },
  {
    question: "What subjects does it work for?",
    answer: "Any subject with causal structure — sciences, engineering, law, economics, medicine, history. If the material has ideas that depend on other ideas, socraTink can map and drill it.",
  },
  {
    question: "How is this different from RemNote, Anki, or Recall?",
    answer: "Anki is honest recall without structure. RemNote and Recall have structure but their graphs track notes and activity, not verified understanding. socraTink sits at the intersection: your own material, a real dependency graph, and a map that only advances when you can actually explain the ideas inside it.",
  },
  {
    question: "What about learners with ADHD?",
    answer: "socraTink wasn't designed as an ADHD tool with a general mode — it was designed around clear targets, bounded sessions, and zero-friction re-entry. Features like automatic time-boxing, fatigue guardrails, and context restoration for returning sessions are built into the core loop. If you don't need them, they stay out of your way.",
  },
];

const ILLUSION_ITEMS = [
  { title: "You read it", detail: "Highlighted, summarized, reviewed the notes. Felt like progress." },
  { title: "You recognized it", detail: "Saw the answer on a flashcard and thought — yeah, I know that." },
  { title: "Then you tried to explain it", detail: "From memory, out loud, to someone who asked why. And the floor dropped out." },
];

function UXLoopSimulator() {
  const [phase, setPhase] = useState(1);

  return (
    <div id="loop" className="prototype-simulator w-full max-w-xl mx-auto subtle-shadow relative z-10">
      <div className="prototype-simulator-frame bg-surface-container border border-outline-variant/50 rounded-2xl flex flex-col overflow-hidden relative glass-card">
        
        {/* Stepper Controls (Horizontal Tabs) */}
        <div className="prototype-stepper flex bg-surface/60 border-b border-outline-variant/40 p-2 gap-1 overflow-x-auto shrink-0 z-20 relative backdrop-blur-md">
          {[
            { n: 1, title: 'Extraction' },
            { n: 2, title: 'Vault' },
            { n: 3, title: 'reTink' },
            { n: 4, title: 'Scaffolding' },
          ].map(step => (
            <button 
              key={step.n}
              onClick={() => setPhase(step.n)} 
              className={`prototype-step flex-1 min-w-[70px] flex flex-col items-center gap-1.5 p-2 rounded-xl transition-all ${
                phase === step.n ? 'bg-surface-container border border-primary/20 shadow-[0_2px_10px_rgba(144,103,198,0.08)]' : 'border border-transparent hover:bg-surface-container/50'
              }`}
            >
              <div className={`w-6 h-6 rounded-full border flex items-center justify-center font-bold text-[11px] shrink-0 transition-colors ${
                phase === step.n ? 'bg-primary/10 border-primary text-primary' : 'bg-surface border-outline-variant text-ink-muted'
              }`}>
                {step.n}
              </div>
              <span className={`text-[9px] uppercase tracking-wider font-bold transition-colors ${
                phase === step.n ? 'text-ink' : 'text-ink-muted'
              }`}>
                {step.title}
              </span>
            </button>
          ))}
        </div>

        {/* Simulation Visualizer */}
        <div className="prototype-canvas bg-surface-container relative flex flex-col h-72 sm:h-80 w-full overflow-hidden shrink-0">
          
          {/* Header Data */}
          <div className="prototype-toolbar px-5 py-3 border-b border-outline-variant/30 flex justify-between items-center bg-surface/40 z-20 shrink-0 backdrop-blur-sm">
            <span id="sim-status" className="text-[10px] sm:text-[11px] font-mono text-primary uppercase tracking-widest truncate font-medium">
              System: {
                phase === 1 ? "Extracting Signal..." :
                phase === 2 ? "Categorizing Pattern..." :
                phase === 3 ? "Socratic Dialogue Initiated..." :
                "Knowledge Mapped..."
              }
            </span>
            <div className="flex space-x-1.5 shrink-0 ml-4">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-outline-variant"></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-outline-variant"></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-outline-variant"></div>
            </div>
          </div>

          {/* Split View Area */}
          <div className="prototype-grid flex-1 flex relative w-full h-full text-sm bg-[linear-gradient(to_right,#8D86C908_1px,transparent_1px),linear-gradient(to_bottom,#8D86C908_1px,transparent_1px)] bg-[size:24px_24px]">
            
            {/* Graph / Study View Simulator (Left/Full) */}
            <div id="sim-main-view" className={`h-full relative p-4 transition-all duration-500 ease-in-out ${phase === 3 ? 'w-1/2 sm:w-[55%] border-r border-outline-variant/30' : 'w-full'} flex items-center justify-center`}>
              {/* Graph Simulation using DOM elements */}
              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500`}>
                
                {/* Connecting Lines */}
                <div id="line-1" className={`absolute w-20 sm:w-28 h-[2px] top-1/2 left-1/2 -mt-[1px] transform origin-left -rotate-45 transition-colors duration-500 ${phase >= 4 ? 'bg-primary' : 'bg-outline-variant/50'}`}></div>
                <div id="line-2" className={`absolute w-20 sm:w-28 h-[2px] top-1/2 left-1/2 -mt-[1px] transform origin-left rotate-45 transition-colors duration-500 ${phase >= 4 ? 'bg-primary-dim' : 'bg-outline-variant/50'}`}></div>
                <div id="line-3" className={`absolute w-16 sm:w-20 h-[2px] top-1/2 right-1/2 -mt-[1px] transform origin-right rotate-12 transition-opacity duration-500 ${phase >= 4 ? 'opacity-100 bg-outline-variant/50' : 'opacity-0'}`}></div>

                {/* Nodes */}
                {/* Center Backbone */}
                <div id="node-center" className="absolute w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-surface-container border border-primary/40 shadow-[0_4px_16px_rgba(144,103,198,0.15)] flex items-center justify-center cursor-pointer z-10 transition-transform hover:scale-105">
                  <span className="text-ink font-bold text-lg font-display">B</span>
                </div>
                
                {/* Cluster 1 (Top Right) */}
                <div id="node-c1" className={`absolute w-8 h-8 sm:w-10 sm:h-10 rounded-2xl border flex items-center justify-center -translate-y-16 translate-x-16 sm:-translate-y-20 sm:translate-x-20 transition-all duration-500 z-10 ${
                  phase >= 4 ? 'bg-surface-container border-primary shadow-[0_4px_12px_rgba(144,103,198,0.2)] border-solid' : 
                  phase >= 2 ? 'bg-surface-high border-primary-dim border-dashed shadow-sm' : 
                  'bg-surface-high border-outline-variant border-dashed'
                }`}>
                  {phase >= 4 ? <Check size={14} className="text-primary" /> : <span className={`text-[10px] sm:text-xs font-bold ${phase >= 2 ? 'text-primary-dim' : 'text-outline-variant'}`}>?</span>}
                </div>

                {/* Cluster 2 (Bottom Right) */}
                <div id="node-c2" className={`absolute w-8 h-8 sm:w-10 sm:h-10 rounded-2xl border flex items-center justify-center translate-y-16 translate-x-16 sm:translate-y-20 sm:translate-x-20 transition-all duration-500 z-10 ${
                  phase >= 4 ? 'bg-surface-container border-primary-dim shadow-[0_4px_12px_rgba(141,134,201,0.2)] border-solid' : 
                  phase >= 2 ? 'bg-surface-high border-outline-variant border-dashed' :
                  'bg-surface-high border-outline-variant/50 border-dashed'
                }`}>
                  {phase >= 4 ? <Check size={14} className="text-primary-dim" /> : <span className="text-outline-variant font-bold text-[10px] sm:text-xs">?</span>}
                </div>
              </div>

              {/* Text Blur Simulation */}
              <div id="sim-text-content" className={`absolute inset-0 bg-surface-container/90 backdrop-blur-sm p-5 sm:p-6 flex flex-col justify-center pointer-events-none transition-all duration-700 z-10 ${phase >= 2 ? 'opacity-100' : 'opacity-0 z-[-1]'}`}>
                <h3 className="text-sm sm:text-base font-bold text-ink mb-2 font-display">Backbone Principle</h3>
                <p id="blur-text" className={`text-ink-muted text-[10px] sm:text-xs leading-relaxed transition-all duration-1000 select-none ${phase >= 4 ? 'blur-none opacity-100' : 'blur-[4px] opacity-40'}`}>
                  Machine learning fundamentally redefines task automation by enabling systems to learn from data rather than relying on explicit programming. This paradigm shift allows for adaptation to unseen data, forming the prerequisite foundation for advanced techniques like neural networks.
                </p>
              </div>
            </div>

            {/* Chat Sidebar Simulator (Right) */}
            <div id="sim-chat-view" className={`bg-surface-high border-l border-outline-variant/30 overflow-hidden transition-all duration-500 ease-in-out flex flex-col absolute right-0 top-0 bottom-0 ${phase === 3 ? 'w-1/2 sm:w-[45%] opacity-100' : 'w-0 opacity-0'}`}>
              <div className="p-2 sm:p-3 border-b border-outline-variant/30 bg-surface-container shrink-0">
                <span className="text-[10px] sm:text-[11px] font-semibold text-ink-muted flex items-center truncate">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2 shrink-0"></span> Socratic AI
                </span>
              </div>
              <div className="flex-1 p-3 flex flex-col justify-end space-y-3 overflow-y-auto">
                <div id="chat-msg-1" className={`bg-surface-container border border-outline-variant/40 shadow-sm p-3 rounded-2xl rounded-tl-sm text-[10px] sm:text-[11px] leading-relaxed text-ink self-start max-w-[95%] transition-all duration-500 ${phase >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  Explain the core thesis to me from memory. Apply it to weather prediction.
                </div>
                <div id="chat-msg-2" className={`bg-primary border border-primary p-3 rounded-2xl rounded-tr-sm text-[10px] sm:text-[11px] leading-relaxed text-white self-end max-w-[95%] transition-all duration-500 delay-150 shadow-[0_4px_10px_rgba(144,103,198,0.2)] ${phase >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  It's using data to predict outcomes instead of hardcoding rules. Like analyzing past weather data.
                </div>
                <div id="chat-msg-3" className={`bg-surface-container border border-tertiary/30 shadow-[0_4px_12px_rgba(77,186,138,0.1)] p-3 rounded-2xl rounded-tl-sm text-[10px] sm:text-[11px] leading-relaxed text-ink self-start max-w-[95%] transition-all duration-500 delay-300 ${phase === 3 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  Spot on! Let's lock it in. <br/><span className="text-tertiary mt-2 block font-mono bg-tertiary/10 px-1.5 py-0.5 rounded truncate text-[9px]">[&#123;"action":"UNLOCK"&#125;]</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main App ───
export default function HyFeynLanding() {
  const [probRef, probVis] = useInView(0.1);
  const [pipeRef, pipeVis] = useInView(0.1);
  const [previewRef, previewVis] = useInView(0.1);
  const [iframeRef, iframeVis] = useInView(0.05);
  const [testRef, testVis] = useInView(0.1);

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");

  const canSubmit = firstName && email && EMAIL_REGEX.test(email);

  async function handleWaitlist(e) {
    e.preventDefault();
    if (!canSubmit) return;
    setLoading(true);
    setFormError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: firstName,
          email,
          subject: "socraTink Waitlist Sign-up",
          from_name: "socraTink Waitlist",
        }),
      });
      const result = await res.json();
      if (result.success) setSubmitted(true);
      else setFormError("Something went wrong. Please try again.");
    } catch {
      setFormError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="landing-shell min-h-screen bg-surface text-ink font-body selection:bg-primary/20 selection:text-ink">

      {/* ─── NAV ─── */}
      <nav className="landing-nav fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 px-6">
        <div className="flex justify-between items-center py-4 w-full max-w-7xl mx-auto">
          <div className="text-[1.65rem] font-bold tracking-tight text-ink font-display flex items-center gap-2.5">
            <img src="/logo.png" alt="socraTink Logo" className="w-10 h-10 object-contain rounded-md shadow-sm" />
            socraTink
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-ink-muted font-display font-medium text-[15px] hover:text-primary transition-colors duration-300">How It Works</a>
            <a href="#why-different" className="text-ink-muted font-display font-medium text-[15px] hover:text-primary transition-colors duration-300">Why It's Different</a>
            <a href="#waitlist" className="btn-primary px-6 py-2.5 rounded-full font-medium text-[15px]">
              Join Waitlist
            </a>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="landing-hero relative pt-32 pb-20 px-6 hero-gradient overflow-hidden border-b border-outline-variant/20">
        <div className="landing-hero-panel max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="landing-hero-copy space-y-8 relative z-10">
            <h1 className="landing-hero-title text-5xl md:text-7xl font-display font-bold leading-tight tracking-tight text-ink">
              See what you can <span className="text-primary">actually explain.</span>
            </h1>
            <p className="landing-hero-lede text-xl text-ink-muted max-w-lg leading-relaxed font-light">
              Upload your material. socraTink turns it into a knowledge map, then asks you to rebuild one idea at a time from memory. The map only changes when understanding is real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://app.socratink.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="landing-demo-button px-8 py-4 rounded-full font-display font-semibold text-lg text-center button-glow"
              >
                Try the Demo
              </a>
              <a
                href="#how-it-works"
                className="landing-inline-link flex items-center gap-2 px-4 py-4 text-ink-muted hover:text-primary text-sm font-medium transition-colors"
              >
                See how the map works
                <ChevronRight size={16} />
              </a>
            </div>
          </div>
          <div className="landing-hero-preview relative">
            <div className="absolute -inset-4 bg-primary/10 blur-[120px] rounded-full" />
            <div className="absolute -inset-10 bg-surface-container/60 blur-[60px] rounded-full" />
            <div className="relative z-10 transition-transform hover:-translate-y-2 duration-500">
              <UXLoopSimulator />
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
              socraTink is built against that illusion.
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
          {STEPS.map(({ Illustration, ...step }) => (
            <StageCard
              key={step.number}
              {...step}
              illustration={<Illustration accent="#9067C6" />}
              visible={pipeVis}
            />
          ))}
        </div>
      </section>

      {/* ─── PRODUCT PREVIEW ─── */}
      <section ref={previewRef} className="landing-preview-section py-24 px-6 bg-surface-container border-y border-outline-variant/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-surface/10 pointer-events-none"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className={`text-center mb-12 transition-all duration-700 ${previewVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-xs font-semibold text-primary-dim tracking-widest uppercase mb-3">Live prototype</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-4 tracking-tight">
              The map is real. Try it.
            </h2>
            <p className="text-ink-muted max-w-xl mx-auto text-lg font-light">
              This is the working prototype — not a mockup. Upload material, drill a node, and see the graph respond to what you actually understand.
            </p>
          </div>

          {/* Browser frame */}
          <div className={`transition-all duration-700 delay-200 ${previewVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="preview-window landing-card rounded-2xl overflow-hidden border border-outline-variant/50 shadow-[0_20px_60px_rgba(36,32,56,0.08)] bg-surface-high">
              {/* Browser chrome */}
              <div className="preview-window__chrome bg-surface-container px-5 py-3.5 flex items-center gap-4 border-b border-outline-variant/40 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#E05C6B]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#F5A623]/80" />
                  <div className="w-3 h-3 rounded-full bg-tertiary/80" />
                </div>
                <div className="preview-window__address flex-1 bg-surface/50 rounded-md xl:rounded-lg px-4 py-1.5 text-xs text-ink-muted font-mono truncate text-center mx-auto max-w-lg border border-outline-variant/30">
                  app.socratink.ai/
                </div>
                <a
                  href="https://app.socratink.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="preview-window__link text-xs text-primary hover:text-ink transition-colors whitespace-nowrap flex items-center gap-1.5 font-medium"
                >
                  Open full screen
                  <ArrowRight size={14} />
                </a>
              </div>
              {/* iframe — only mounts once section enters viewport */}
              <div ref={iframeRef} style={{ height: "600px" }} className="preview-window__viewport bg-surface-container rounded-b-2xl overflow-hidden">
                {iframeVis && (
                  <iframe
                    src="https://app.socratink.ai/"
                    title="socraTink Prototype"
                    className="w-full h-full border-0"
                  />
                )}
              </div>
            </div>
          </div>

          <div className={`text-center mt-10 transition-all duration-700 delay-300 ${previewVis ? "opacity-100" : "opacity-0"}`}>
            <a
              href="https://app.socratink.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="preview-inline-cta inline-flex items-center gap-2 text-sm text-ink-muted font-medium hover:text-primary transition-colors bg-surface px-5 py-2.5 rounded-full border border-outline-variant/40"
            >
              Open in a new tab for the full experience
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ─── WHY IT FEELS DIFFERENT ─── */}
      <section id="why-different" className="py-24 px-6 bg-surface-high">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <p className="text-xs font-semibold text-primary-dim tracking-widest uppercase mb-3">Not another AI summary app. Not a prettier flashcard deck. Not a note graph.</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ink tracking-tight">Why It Feels Different</h2>
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
              <p className="text-[15px] text-ink-muted leading-relaxed">New territory opens when prerequisite ideas are actually solid. No shortcuts.</p>
            </div>
            <div className="feature-card landing-card rounded-2xl bg-surface-container border border-outline-variant/30 p-8 subtle-shadow hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 border border-primary/20">
                <Activity size={22} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl text-ink mb-2">Weak spots are useful</h3>
              <p className="text-[15px] text-ink-muted leading-relaxed">"Not solid yet" is not failure. It is the next place to grow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── EARLY ADOPTERS ─── */}
      <section ref={testRef} className="py-24 px-6 bg-surface-container border-y border-outline-variant/20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[40%] h-full bg-primary/5 blur-[100px] pointer-events-none rounded-full"></div>
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <div className={`transition-all duration-700 ${testVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <div className="w-14 h-14 rounded-2xl bg-surface border border-outline-variant/50 flex items-center justify-center mx-auto mb-6 subtle-shadow">
              <Sparkles size={24} className="text-primary" />
            </div>
            <h2 className="text-3xl font-display font-bold mb-4 text-ink tracking-tight">Still testing. Still learning.</h2>
            <p className="text-ink-muted leading-relaxed mb-4 text-lg font-light">
              socraTink is in active development. The map is being built the same way we ask you to build yours — one verified step at a time.
            </p>
            <p className="text-ink-muted leading-relaxed font-medium">
              To our early adopters: thank you. Your feedback is shaping every decision.
            </p>
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

      {/* ─── WAITLIST ─── */}
      <section id="waitlist" className="py-32 px-6 relative bg-surface border-t border-outline-variant/30 overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="waitlist-card landing-card bg-surface-container rounded-3xl p-10 md:p-14 border border-outline-variant/40 shadow-[0_24px_80px_rgba(144,103,198,0.12)]">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-20 h-20 rounded-full bg-tertiary/10 border border-tertiary/30 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} className="text-tertiary" />
                </div>
                <h3 className="text-3xl font-display font-bold text-ink mb-3">You're on the list!</h3>
                <p className="text-ink-muted text-lg leading-relaxed max-w-sm mx-auto">
                  We'll notify <strong className="text-primary font-medium">{email}</strong> the moment socraTink is ready for you.
                </p>
              </div>
            ) : (
              <>
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-ink tracking-tight">Build a map you can trust.</h2>
                  <p className="text-ink-muted text-lg font-light">Join the waitlist. No spam — just signal when socraTink is ready.</p>
                </div>
                <form onSubmit={handleWaitlist} className="space-y-6 max-w-lg mx-auto">
                  {formError && (
                    <div className="p-4 rounded-xl bg-[#E05C6B]/10 border border-[#E05C6B]/20 text-[#E05C6B] text-sm flex items-center gap-2">
                      <AlertCircle size={16} /> {formError}
                    </div>
                  )}
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-ink-muted mb-2 font-medium">First Name</label>
                    <input
                      type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Jane" required
                      className="waitlist-input w-full bg-surface-high border border-outline-variant/50 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 text-ink p-4 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-ink-muted mb-2 font-medium">Email Address</label>
                    <input
                      type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@example.com" required
                      className="waitlist-input w-full bg-surface-high border border-outline-variant/50 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 text-ink p-4 outline-none transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={!canSubmit || loading}
                    className="w-full btn-primary py-4 mt-2 rounded-xl font-display font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Join the Waitlist"}
                  </button>
                  <p className="text-center text-sm text-ink-muted/80 flex items-center justify-center gap-2 mt-4 font-medium">
                    <Lock size={14} />
                    No spam. Unsubscribe any time.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="landing-footer w-full border-t border-outline-variant/40 bg-surface-container">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-12 gap-8 w-full max-w-7xl mx-auto">
          <div className="flex flex-col gap-2 md:items-start items-center">
            <div className="font-display font-bold text-primary text-xl flex items-center gap-2">
              <img src="/logo.png" alt="socraTink Logo" className="w-6 h-6 object-contain rounded flex-shrink-0" />
              socraTink
            </div>
            <p className="text-sm tracking-wide text-ink-muted">© 2026 socraTink. A truthful map of what you can actually explain.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#" className="text-sm font-medium text-ink-muted hover:text-primary underline decoration-transparent hover:decoration-primary/30 transition-all duration-300">Privacy Policy</a>
            <a href="#" className="text-sm font-medium text-ink-muted hover:text-primary underline decoration-transparent hover:decoration-primary/30 transition-all duration-300">Terms of Service</a>
          </div>
        </div>
      </footer>

      <ThemeToggle />
    </div>
  );
}

// ─── ThemeToggle Component ───
function ThemeToggle() {
  const THEME_STORAGE_KEY = 'learnops-theme';
  const [themePreference, setThemePreference] = useState('light');

  const updateThemeToggleUi = (resolvedTheme) => {
    setThemePreference(resolvedTheme);
  };

  const applyThemePreference = (nextPreference, persist = true) => {
    const resolvedTheme = nextPreference === 'dark' ? 'dark' : 'light';
    document.body.classList.toggle('night', resolvedTheme === 'dark');
    document.body.dataset.theme = resolvedTheme;
    document.documentElement.dataset.theme = resolvedTheme;
    updateThemeToggleUi(resolvedTheme);
    if (persist) {
      try {
        localStorage.setItem(THEME_STORAGE_KEY, resolvedTheme);
      } catch (err) {}
    }
  };

  useEffect(() => {
    try {
      const stored = localStorage.getItem(THEME_STORAGE_KEY);
      applyThemePreference(stored === 'dark' ? 'dark' : 'light', false);
    } catch (err) {
      console.warn('Theme preference unavailable.', err);
      applyThemePreference('light', false);
    }
  }, []);

  const toggleTheme = () => {
    applyThemePreference(themePreference === 'dark' ? 'light' : 'dark');
  };

  const isDark = themePreference === 'dark';
  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <button 
      className="theme-toggle" 
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
