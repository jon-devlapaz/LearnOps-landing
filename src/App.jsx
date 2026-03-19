import { useState, useEffect, useRef, useCallback } from "react";
import {
  Brain, Zap, Shield, Moon, Sun, Check, ChevronRight, ChevronDown,
  BookOpen, Target, Clock, ArrowRight, Sparkles, Lock, X, CreditCard,
  Mail, User, Eye, EyeOff, AlertCircle, CheckCircle2, Layers,
  Search, MessageSquare, BarChart3, RefreshCw
} from "lucide-react";

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

// ─── Isometric SVG Illustrations ───
function IsoExtraction({ accent = "#818cf8" }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="ge1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={accent} stopOpacity="0.3" />
          <stop offset="100%" stopColor={accent} stopOpacity="0.05" />
        </linearGradient>
      </defs>
      {/* Document stack */}
      <path d="M60 130 L100 110 L140 130 L100 150Z" fill="url(#ge1)" stroke={accent} strokeWidth="1.5" />
      <path d="M60 130 L60 115 L100 95 L100 110Z" fill={accent} fillOpacity="0.15" stroke={accent} strokeWidth="1" />
      <path d="M100 110 L100 95 L140 115 L140 130Z" fill={accent} fillOpacity="0.1" stroke={accent} strokeWidth="1" />
      {/* Second doc */}
      <path d="M65 118 L100 100 L135 118 L100 136Z" fill="url(#ge1)" stroke={accent} strokeWidth="1" strokeOpacity="0.5" />
      {/* Arrow up = extraction */}
      <path d="M100 90 L100 55" stroke={accent} strokeWidth="2" strokeLinecap="round" />
      <path d="M92 63 L100 55 L108 63" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Knowledge nodes */}
      <circle cx="80" cy="42" r="6" fill={accent} fillOpacity="0.25" stroke={accent} strokeWidth="1.5" />
      <circle cx="100" cy="35" r="6" fill={accent} fillOpacity="0.25" stroke={accent} strokeWidth="1.5" />
      <circle cx="120" cy="42" r="6" fill={accent} fillOpacity="0.25" stroke={accent} strokeWidth="1.5" />
      <line x1="86" y1="42" x2="94" y2="37" stroke={accent} strokeWidth="1" strokeOpacity="0.6" />
      <line x1="106" y1="37" x2="114" y2="42" stroke={accent} strokeWidth="1" strokeOpacity="0.6" />
      {/* Tiny labels */}
      <text x="80" y="45" textAnchor="middle" fill={accent} fontSize="5" fontWeight="600">WHY</text>
      <text x="100" y="38" textAnchor="middle" fill={accent} fontSize="5" fontWeight="600">HOW</text>
      <text x="120" y="45" textAnchor="middle" fill={accent} fontSize="5" fontWeight="600">→</text>
    </svg>
  );
}

function IsoVault({ accent = "#2dd4bf" }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="gv1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={accent} stopOpacity="0.3" />
          <stop offset="100%" stopColor={accent} stopOpacity="0.05" />
        </linearGradient>
      </defs>
      {/* Isometric cube/vault */}
      <path d="M100 50 L150 75 L150 135 L100 160 L50 135 L50 75Z" fill="url(#gv1)" stroke={accent} strokeWidth="1.5" />
      <path d="M100 50 L100 110 L50 135 L50 75Z" fill={accent} fillOpacity="0.08" />
      <path d="M100 110 L150 135 L150 75 L100 50" fill={accent} fillOpacity="0.04" />
      <path d="M100 50 L100 110" stroke={accent} strokeWidth="1" strokeOpacity="0.4" />
      <path d="M50 75 L100 110 L150 75" stroke={accent} strokeWidth="1" strokeOpacity="0.3" />
      {/* Grid lines on face */}
      <path d="M70 87 L70 125" stroke={accent} strokeWidth="0.5" strokeOpacity="0.3" />
      <path d="M85 80 L85 118" stroke={accent} strokeWidth="0.5" strokeOpacity="0.3" />
      <path d="M60 95 L95 112" stroke={accent} strokeWidth="0.5" strokeOpacity="0.3" />
      <path d="M55 108 L90 125" stroke={accent} strokeWidth="0.5" strokeOpacity="0.3" />
      {/* Sections label */}
      <rect x="75" y="90" width="20" height="12" rx="2" fill={accent} fillOpacity="0.2" stroke={accent} strokeWidth="0.8" />
      <text x="85" y="99" textAnchor="middle" fill={accent} fontSize="6" fontWeight="600">§</text>
    </svg>
  );
}

function IsoDrill({ accent = "#f59e0b" }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="gd1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={accent} stopOpacity="0.3" />
          <stop offset="100%" stopColor={accent} stopOpacity="0.05" />
        </linearGradient>
      </defs>
      {/* Brain outline */}
      <ellipse cx="100" cy="85" rx="40" ry="35" fill="url(#gd1)" stroke={accent} strokeWidth="1.5" />
      <path d="M80 75 Q90 60 100 70 Q110 60 120 75" stroke={accent} strokeWidth="1" strokeOpacity="0.5" fill="none" />
      <path d="M75 90 Q85 80 100 85 Q115 80 125 90" stroke={accent} strokeWidth="1" strokeOpacity="0.5" fill="none" />
      {/* Question marks = drilling */}
      <text x="90" y="88" fill={accent} fontSize="14" fontWeight="700" fillOpacity="0.7">?</text>
      <text x="105" y="82" fill={accent} fontSize="10" fontWeight="700" fillOpacity="0.5">?</text>
      {/* Lightning = generation effect */}
      <path d="M98 120 L94 135 L102 132 L98 148" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Gap markers */}
      <circle cx="72" cy="100" r="4" fill={accent} fillOpacity="0.15" stroke={accent} strokeWidth="1" />
      <text x="72" y="103" textAnchor="middle" fill={accent} fontSize="5" fontWeight="700">S</text>
      <circle cx="128" cy="100" r="4" fill={accent} fillOpacity="0.15" stroke={accent} strokeWidth="1" />
      <text x="128" y="103" textAnchor="middle" fill={accent} fontSize="5" fontWeight="700">D</text>
    </svg>
  );
}

function IsoScaffold({ accent = "#a78bfa" }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="gs1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={accent} stopOpacity="0.3" />
          <stop offset="100%" stopColor={accent} stopOpacity="0.05" />
        </linearGradient>
      </defs>
      {/* Moon/sleep */}
      <path d="M110 50 Q95 55 92 70 Q89 85 100 95 Q85 90 80 75 Q75 55 95 45 Q105 40 110 50Z" fill="url(#gs1)" stroke={accent} strokeWidth="1.5" />
      {/* Stars */}
      <circle cx="125" cy="52" r="2" fill={accent} fillOpacity="0.6" />
      <circle cx="135" cy="65" r="1.5" fill={accent} fillOpacity="0.4" />
      <circle cx="118" cy="40" r="1" fill={accent} fillOpacity="0.3" />
      {/* Timeline/spacing bar */}
      <rect x="55" y="115" width="90" height="4" rx="2" fill={accent} fillOpacity="0.15" stroke={accent} strokeWidth="0.8" />
      <circle cx="70" cy="117" r="5" fill={accent} fillOpacity="0.3" stroke={accent} strokeWidth="1" />
      <text x="70" y="120" textAnchor="middle" fill={accent} fontSize="5" fontWeight="700">D1</text>
      <circle cx="100" cy="117" r="5" fill={accent} fillOpacity="0.3" stroke={accent} strokeWidth="1" />
      <text x="100" y="120" textAnchor="middle" fill={accent} fontSize="5" fontWeight="700">24h</text>
      <circle cx="130" cy="117" r="5" fill={accent} fillOpacity="0.3" stroke={accent} strokeWidth="1" />
      <text x="130" y="120" textAnchor="middle" fill={accent} fontSize="5" fontWeight="700">✓</text>
      {/* Arrows */}
      <path d="M76 117 L93 117" stroke={accent} strokeWidth="1" />
      <path d="M106 117 L123 117" stroke={accent} strokeWidth="1" />
      {/* Check = verified */}
      <path d="M90 145 L97 153 L112 138" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

// ─── FAQ Accordion ───
function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-700/50">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-slate-200 font-medium text-base pr-4 group-hover:text-white transition-colors">{q}</span>
        <ChevronDown
          size={18}
          className={`text-slate-500 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-48 pb-5" : "max-h-0"}`}
      >
        <p className="text-slate-400 text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

// ─── Pipeline Stage Card ───
function StageCard({ number, title, subtitle, description, illustration, accentClass, delay, visible }) {
  return (
    <div
      className={`relative rounded-2xl border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm p-6 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Stage number */}
      <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold tracking-wide mb-4 ${accentClass}`}>
        Stage {number}
      </div>
      {/* Illustration */}
      <div className="w-full h-40 mb-4 flex items-center justify-center">
        {illustration}
      </div>
      <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
      <p className="text-sm text-slate-400 italic mb-3">{subtitle}</p>
      <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}

// ─── Testimonial Card ───
function TestimonialCard({ name, role, quote, metric, delay, visible }) {
  return (
    <div
      className={`rounded-2xl border border-slate-700/40 bg-slate-800/30 p-6 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#f59e0b">
            <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z" />
          </svg>
        ))}
      </div>
      <p className="text-slate-300 text-sm leading-relaxed mb-4">"{quote}"</p>
      {metric && (
        <div className="rounded-lg bg-indigo-500/10 border border-indigo-500/20 px-3 py-2 mb-4">
          <p className="text-indigo-300 text-xs font-semibold">{metric}</p>
        </div>
      )}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500/30 to-teal-500/30 border border-slate-600 flex items-center justify-center text-xs font-bold text-slate-300">
          {name.split(" ").map(n => n[0]).join("")}
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{name}</p>
          <p className="text-xs text-slate-500">{role}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Waitlist Modal ───
function WaitlistModal({ onClose }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const canSubmit = email && name && emailValid;

  async function handleSubmit(e) {
    e.preventDefault();
    if (!canSubmit) return;
    
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
          name: name,
          email: email,
          subject: "New LearnOps Waitlist Sign-up",
          from_name: "LearnOps Waitlist",
        }),
      });
      
      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 size={32} className="text-emerald-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">You're on the list!</h3>
          <p className="text-slate-400 text-sm mb-6 leading-relaxed">
            Keep an eye on <strong className="text-slate-300">{email}</strong>. We'll send you an invite as soon as a spot opens up in the private beta.
          </p>
          <button onClick={onClose} className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors">
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="bg-slate-800 border border-slate-700 rounded-2xl max-w-sm w-full overflow-hidden">
        <div className="flex items-center justify-between p-5 border-b border-slate-700/50">
          <div>
            <h3 className="text-lg font-bold text-white">Join the Waitlist</h3>
            <p className="text-xs text-slate-500 mt-0.5">Secure your spot for early access</p>
          </div>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-300 transition-colors">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          {error && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2">
              <AlertCircle size={14} /> {error}
            </div>
          )}
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1.5">First name</label>
            <div className="relative">
              <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane"
                className="w-full bg-slate-900/70 border border-slate-600 rounded-lg px-9 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1.5">Email address</label>
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@university.edu"
                className="w-full bg-slate-900/70 border border-slate-600 rounded-lg px-9 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={!canSubmit || loading}
            className="w-full py-3 mt-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-700 disabled:text-slate-500 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2"
          >
            {loading ? "Joining..." : "Join Waitlist"}
            {!loading && <ChevronRight size={14} />}
          </button>
          <p className="text-[10px] text-slate-500 text-center leading-relaxed">
            No spam. Unsubscribe anytime.
          </p>
        </form>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════
// ─── MAIN APP ─────────────────────────────────
// ═══════════════════════════════════════════════
export default function LearnOpsLanding() {
  const [darkMode, setDarkMode] = useState(true);
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);

  // Scroll visibility refs
  const [probRef, probVis] = useInView(0.1);
  const [pipeRef, pipeVis] = useInView(0.1);
  const [testRef, testVis] = useInView(0.1);
  const [ctaRef, ctaVis] = useInView(0.1);

  const bg = darkMode ? "bg-slate-950" : "bg-slate-50";
  const textP = darkMode ? "text-slate-300" : "text-slate-600";
  const textH = darkMode ? "text-white" : "text-slate-900";
  const cardBg = darkMode ? "bg-slate-800/40 border-slate-700/50" : "bg-white/80 border-slate-200";
  const sectionAlt = darkMode ? "bg-slate-900/50" : "bg-slate-100/50";

  return (
    <div className={`min-h-screen ${bg} transition-colors duration-500`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap');
        * { font-family: 'DM Sans', sans-serif; }
        h1, h2, h3, .font-display { font-family: 'Outfit', sans-serif; }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        @keyframes pulse-ring { 0% { transform: scale(1); opacity: 0.5; } 100% { transform: scale(1.8); opacity: 0; } }
        .float-anim { animation: float 4s ease-in-out infinite; }
        .float-anim-d { animation: float 4s ease-in-out infinite 0.5s; }
        .pulse-dot::after { content: ''; position: absolute; inset: -4px; border-radius: 9999px; border: 2px solid currentColor; animation: pulse-ring 2s ease-out infinite; }
        @keyframes grain { 0%,100% { transform: translate(0,0); } 10% { transform: translate(-2%,-2%); } 30% { transform: translate(3%,1%); } 50% { transform: translate(-1%,3%); } 70% { transform: translate(2%,-1%); } 90% { transform: translate(-3%,2%); } }
        .grain::before { content: ''; position: fixed; top: -100%; left: -100%; width: 300%; height: 300%; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.025'/%3E%3C/svg%3E"); animation: grain 8s steps(10) infinite; pointer-events: none; z-index: 0; }
      `}</style>

      <div className="grain" />

      {/* ─── NAV ─── */}
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-lg bg-slate-950/70 border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-teal-400 flex items-center justify-center">
              <Brain size={16} className="text-white" />
            </div>
            <span className="font-display font-bold text-white text-lg tracking-tight">LearnOps</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <button
              onClick={() => setShowWaitlistModal(true)}
              className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors"
            >
              Join the Waitlist
            </button>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative pt-28 pb-20 px-5 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
        <div className="absolute top-40 right-1/4 w-80 h-80 rounded-full bg-teal-500/8 blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 px-4 py-1.5 mb-6">
            <span className="relative flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-emerald-400 relative pulse-dot text-emerald-400"></span>
            </span>
            <span className="text-xs text-indigo-300 font-medium">Early access — Limited to 100 founding members</span>
          </div>

          <h1 className={`font-display font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight ${textH} mb-6`}>
            Your ADHD brain isn't broken.
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent">
              Your study system is.
            </span>
          </h1>

          <p className={`text-lg sm:text-xl ${textP} max-w-2xl mx-auto mb-8 leading-relaxed`}>
            LearnOps is the first AI study system built on cognitive neuroscience — not productivity theater.
            It doesn't ask you to "just focus harder." It replaces willpower with architecture.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setShowWaitlistModal(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-bold text-base shadow-lg shadow-indigo-500/25 transition-all hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-0.5"
            >
              Join the Waitlist
              <ArrowRight size={16} className="inline ml-2" />
            </button>
            <p className="text-xs text-slate-500 flex items-center gap-1.5">
              <Shield size={12} />
              Limited spots available for our private beta
            </p>
          </div>
        </div>
      </section>

      {/* ─── PROBLEM / AGITATION ─── */}
      <section ref={probRef} className={`py-20 px-5 ${sectionAlt}`}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-indigo-400 tracking-widest uppercase mb-3">The problem</p>
            <h2 className={`font-display font-bold text-3xl sm:text-4xl ${textH} mb-4`}>
              You don't need another app. You need a system.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* BEFORE */}
            <div
              className={`rounded-2xl border p-6 transition-all duration-700 ${
                probVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${darkMode ? "bg-red-500/5 border-red-500/20" : "bg-red-50 border-red-200"}`}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-red-500/15 flex items-center justify-center">
                  <X size={16} className="text-red-400" />
                </div>
                <span className="text-sm font-bold text-red-400">The Franken-stack</span>
              </div>
              <ul className="space-y-3">
                {[
                  "Notion, Anki, Quizlet, YouTube — none of them talk to each other",
                  "Re-reading highlighted PDFs and calling it \"studying\"",
                  "3 hours of setup for 20 minutes of actual learning",
                  "No way to know if you actually understand something",
                  "Executive function collapse before you even start",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <X size={10} className="text-red-400" />
                    </span>
                    <span className={`text-sm ${textP}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* AFTER */}
            <div
              className={`rounded-2xl border p-6 transition-all duration-700 delay-200 ${
                probVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${darkMode ? "bg-emerald-500/5 border-emerald-500/20" : "bg-emerald-50 border-emerald-200"}`}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center">
                  <Check size={16} className="text-emerald-400" />
                </div>
                <span className="text-sm font-bold text-emerald-400">The LearnOps Pipeline</span>
              </div>
              <ul className="space-y-3">
                {[
                  "One system. Four stages. Each one feeds the next automatically.",
                  "AI extracts the causal architecture — not just keywords",
                  "Socratic drilling finds what you think you know but don't",
                  "24-hour consolidation checks verify real retention",
                  "Built-in ADHD scaffolding: time-boxes, fatigue guards, focus rituals",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={10} className="text-emerald-400" />
                    </span>
                    <span className={`text-sm ${textP}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4-STAGE PIPELINE ─── */}
      <section ref={pipeRef} className="py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-teal-400 tracking-widest uppercase mb-3">How it works</p>
            <h2 className={`font-display font-bold text-3xl sm:text-4xl ${textH} mb-4`}>
              Four stages. Zero guesswork.
            </h2>
            <p className={`${textP} max-w-xl mx-auto text-base`}>
              Each stage is designed around a specific neurocognitive mechanism —
              not productivity heuristics, but how your brain actually forms durable knowledge.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <StageCard
              number={1}
              title="Extract"
              subtitle="Architecture, not highlights"
              description="AI reads your source material and builds a causal knowledge map — how things work and why, not just what they're called."
              illustration={<IsoExtraction accent={darkMode ? "#818cf8" : "#6366f1"} />}
              accentClass="bg-indigo-500/15 text-indigo-300"
              delay={0}
              visible={pipeVis}
            />
            <StageCard
              number={2}
              title="Present"
              subtitle="Calm, segmented surfaces"
              description="Your knowledge map becomes a navigable study dashboard — one section at a time, no cognitive overload."
              illustration={<IsoVault accent={darkMode ? "#2dd4bf" : "#14b8a6"} />}
              accentClass="bg-teal-500/15 text-teal-300"
              delay={100}
              visible={pipeVis}
            />
            <StageCard
              number={3}
              title="Drill"
              subtitle="Socratic stress-testing"
              description="AI interrogates your understanding node by node. You explain, it probes, weak links surface. Gaps get classified and repaired in real-time."
              illustration={<IsoDrill accent={darkMode ? "#fbbf24" : "#d97706"} />}
              accentClass="bg-amber-500/15 text-amber-300"
              delay={200}
              visible={pipeVis}
            />
            <StageCard
              number={4}
              title="Consolidate"
              subtitle="Sleep-gated verification"
              description="After 24 hours, the system re-tests what you drilled. If it survived a sleep cycle, it's durable. If not, surgical remediation targets the exact weak point."
              illustration={<IsoScaffold accent={darkMode ? "#a78bfa" : "#8b5cf6"} />}
              accentClass="bg-violet-500/15 text-violet-300"
              delay={300}
              visible={pipeVis}
            />
          </div>
        </div>
      </section>

      {/* ─── ADHD SCAFFOLDING CALLOUT ─── */}
      <section className={`py-16 px-5 ${sectionAlt}`}>
        <div className="max-w-4xl mx-auto">
          <div className={`rounded-2xl border p-8 sm:p-10 ${cardBg}`}>
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-teal-500/20 border border-indigo-500/30 flex items-center justify-center shrink-0">
                <Sparkles size={22} className="text-indigo-400" />
              </div>
              <div>
                <h3 className={`font-display font-bold text-xl ${textH} mb-3`}>
                  Built for ADHD brains — not adapted from neurotypical tools.
                </h3>
                <p className={`text-sm ${textP} leading-relaxed mb-5`}>
                  LearnOps isn't a study app with an "ADHD mode" toggle. The entire pipeline was designed
                  around executive function constraints from the ground up.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { icon: <Clock size={15} />, label: "Automatic time-boxing", detail: "35-min sessions with built-in breaks" },
                    { icon: <Shield size={15} />, label: "Fatigue guardrails", detail: "Stops you before cognitive collapse" },
                    { icon: <Target size={15} />, label: "Zero-friction entry", detail: "No setup ritual — paste a link and go" },
                    { icon: <RefreshCw size={15} />, label: "Re-warming protocols", detail: "Context restoration for returning sessions" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-teal-400 mt-0.5">{item.icon}</span>
                      <div>
                        <p className={`text-sm font-semibold ${textH}`}>{item.label}</p>
                        <p className={`text-xs ${textP}`}>{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section ref={testRef} className="py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-amber-400 tracking-widest uppercase mb-3">Early users</p>
            <h2 className={`font-display font-bold text-3xl sm:text-4xl ${textH} mb-3`}>
              Real students. Real results.
            </h2>
            <p className={`${textP} text-sm`}>From our private beta cohort of 24 students.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <TestimonialCard
              name="Maya Chen"
              role="Pre-med · UC Berkeley"
              quote="I went from re-reading notes for 4 hours to drilling in 35 minutes. My biochem exam score jumped from a B- to an A-. The drilling caught gaps I didn't even know I had."
              metric="Exam score: B- → A- in one semester"
              delay={0}
              visible={testVis}
            />
            <TestimonialCard
              name="James Okafor"
              role="CS Major · Georgia Tech"
              quote="As someone with ADHD, the time-boxing alone is worth it. But the real magic is the 24-hour re-test — it's the first system that actually checks if I retained anything."
              metric="Setup time: 2 hours → under 5 minutes"
              delay={100}
              visible={testVis}
            />
            <TestimonialCard
              name="Sarah Lindgren"
              role="Law Student · NYU"
              quote="I used to panic before exams because I couldn't tell what I actually knew. The gap classification — Shallow, Deep, Misconception — gave me a precise study plan for the first time."
              metric="Study anxiety reduced by self-report 60%"
              delay={200}
              visible={testVis}
            />
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className={`py-20 px-5 ${sectionAlt}`}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-slate-500 tracking-widest uppercase mb-3">FAQ</p>
            <h2 className={`font-display font-bold text-2xl ${textH}`}>Questions before you commit</h2>
          </div>
          <div>
            <FAQItem
              q="When will my card be charged?"
              a="Your card will not be charged until LearnOps officially launches. We'll send you an email 7 days before billing begins, giving you full opportunity to cancel if you change your mind."
            />
            <FAQItem
              q="How do I cancel?"
              a="You can cancel your subscription online in one click from your account dashboard — no phone calls, no email chains, no retention offers. This is guaranteed under the FTC Negative Option Rule."
            />
            <FAQItem
              q="Do I need to install anything?"
              a="LearnOps runs in your browser. No extensions, no desktop apps, no plugins. Paste a link or upload a transcript, and the pipeline starts immediately."
            />
            <FAQItem
              q="Is this just fancy flashcards?"
              a="No. Flashcards test isolated facts. LearnOps stress-tests your understanding of causal mechanisms — how and why things work, not just what they're called. The Socratic drilling adapts to your specific gaps."
            />
            <FAQItem
              q="What if I don't have ADHD?"
              a="The pipeline works for any learner. The ADHD scaffolding (time-boxes, fatigue guards, re-warming protocols) simply provides extra structure. If you don't need it, it stays out of your way."
            />
            <FAQItem
              q="What subjects does it work for?"
              a="Any subject with causal structure — sciences, engineering, law, economics, medicine, history. It's less suited for pure creative or artistic study, where the knowledge isn't mechanism-based."
            />
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section ref={ctaRef} className="py-24 px-5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-teal-500/5 pointer-events-none" />
        <div
          className={`max-w-2xl mx-auto text-center relative z-10 transition-all duration-700 ${
            ctaVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className={`font-display font-bold text-3xl sm:text-4xl ${textH} mb-5`}>
            Stop studying harder.
            <br />
            Start studying <span className="text-indigo-400">architecturally.</span>
          </h2>
          <p className={`${textP} text-base mb-8 max-w-lg mx-auto`}>
            Join 100 founding members getting early access to the first
            neurocognitive study pipeline built for how your brain actually works.
          </p>
          <button
            onClick={() => setShowWaitlistModal(true)}
            className="px-10 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-bold text-lg shadow-lg shadow-indigo-500/25 transition-all hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-0.5"
          >
            Join the Waitlist
          </button>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-5 text-xs text-slate-500">
            <span className="flex items-center gap-1"><Shield size={12} /> No spam guarantee</span>
            <span className="hidden sm:inline">·</span>
            <span className="flex items-center gap-1"><Target size={12} /> Limited beta seats</span>
            <span className="hidden sm:inline">·</span>
            <span className="flex items-center gap-1"><Lock size={12} /> FTC compliant</span>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-slate-800/50 py-8 px-5">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-teal-400 flex items-center justify-center">
              <Brain size={12} className="text-white" />
            </div>
            <span className="font-display font-semibold text-slate-500 text-sm">LearnOps</span>
          </div>
          <div className="flex items-center gap-5 text-xs text-slate-600">
            <span>© 2026 LearnOps</span>
            <span className="cursor-pointer hover:text-slate-400 transition-colors">Privacy</span>
            <span className="cursor-pointer hover:text-slate-400 transition-colors">Terms</span>
            <span className="cursor-pointer hover:text-slate-400 transition-colors">Privacy Policy</span>
          </div>
        </div>
        {/* FTC compliance footer */}
        <div className="max-w-5xl mx-auto mt-4 pt-4 border-t border-slate-800/30">
          <p className="text-[10px] text-slate-700 text-center leading-relaxed max-w-2xl mx-auto">
            This landing page is part of our private beta waitlist campaign. We respect your inbox and will only contact you regarding your waitlist status and official LearnOps launch updates.
          </p>
        </div>
      </footer>

      {/* ─── CHECKOUT MODAL ─── */}
      {showCheckout && <Checkout onClose={() => setShowWaitlistModal(false)} />}
    </div>
  );
}
