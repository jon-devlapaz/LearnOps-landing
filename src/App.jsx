import { useState, useEffect, useRef } from "react";
import {
  Brain, Shield, Check, ChevronRight, ChevronDown,
  Target, Clock, ArrowRight, Sparkles, Lock, X,
  Mail, User, AlertCircle, CheckCircle2, RefreshCw
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
      <stop offset="0%" stopColor={accent} stopOpacity="0.3" />
      <stop offset="100%" stopColor={accent} stopOpacity="0.05" />
    </linearGradient>
  );
}

// ─── Isometric SVG Illustrations ───
function IsoExtraction({ accent = "#c4c0ff" }) {
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

function IsoVault({ accent = "#3cddc7" }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs><GradientDef id="gv1" accent={accent} /></defs>
      <path d="M100 50 L150 75 L150 135 L100 160 L50 135 L50 75Z" fill="url(#gv1)" stroke={accent} strokeWidth="1.5" />
      <path d="M100 50 L100 110 L50 135 L50 75Z" fill={accent} fillOpacity="0.08" />
      <path d="M100 110 L150 135 L150 75 L100 50" fill={accent} fillOpacity="0.04" />
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

function IsoDrill({ accent = "#fbbf24" }) {
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

function IsoScaffold({ accent = "#a78bfa" }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs><GradientDef id="gs1" accent={accent} /></defs>
      <path d="M110 50 Q95 55 92 70 Q89 85 100 95 Q85 90 80 75 Q75 55 95 45 Q105 40 110 50Z" fill="url(#gs1)" stroke={accent} strokeWidth="1.5" />
      <circle cx="125" cy="52" r="2" fill={accent} fillOpacity="0.6" />
      <circle cx="135" cy="65" r="1.5" fill={accent} fillOpacity="0.4" />
      <circle cx="118" cy="40" r="1" fill={accent} fillOpacity="0.3" />
      <rect x="55" y="115" width="90" height="4" rx="2" fill={accent} fillOpacity="0.15" stroke={accent} strokeWidth="0.8" />
      <circle cx="70" cy="117" r="5" fill={accent} fillOpacity="0.3" stroke={accent} strokeWidth="1" />
      <text x="70" y="120" textAnchor="middle" fill={accent} fontSize="5" fontWeight="700">D1</text>
      <circle cx="100" cy="117" r="5" fill={accent} fillOpacity="0.3" stroke={accent} strokeWidth="1" />
      <text x="100" y="120" textAnchor="middle" fill={accent} fontSize="5" fontWeight="700">24h</text>
      <circle cx="130" cy="117" r="5" fill={accent} fillOpacity="0.3" stroke={accent} strokeWidth="1" />
      <text x="130" y="120" textAnchor="middle" fill={accent} fontSize="5" fontWeight="700">✓</text>
      <path d="M76 117 L93 117" stroke={accent} strokeWidth="1" />
      <path d="M106 117 L123 117" stroke={accent} strokeWidth="1" />
      <path d="M90 145 L97 153 L112 138" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

// ─── FAQ Accordion ───
function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#474551]/40">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-[#dae2fd]/80 font-medium text-base pr-4 group-hover:text-[#dae2fd] transition-colors">{question}</span>
        <ChevronDown size={18} className={`text-[#928f9d] shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-48 pb-5" : "max-h-0"}`}>
        <p className="text-[#c8c4d3] text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

// ─── Pipeline Stage Card ───
function StageCard({ number, title, subtitle, description, illustration, accentClass, delay, visible }) {
  return (
    <div
      className={`group rounded-lg border border-[#474551]/10 bg-[#131b2e] p-8 transition-all duration-300 hover:bg-[#222a3d] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms`, transitionProperty: "opacity, transform", transitionDuration: "700ms" }}
    >
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${accentClass}`}>
        <div className="w-10 h-10">{illustration}</div>
      </div>
      <h4 className="font-display font-bold text-xl text-[#dae2fd] mb-3">{number}. {title}</h4>
      <p className="text-sm text-[#c8c4d3] leading-relaxed">{description}</p>
    </div>
  );
}

// ─── Testimonial Card ───
function TestimonialCard({ name, role, quote, avatar, delay, visible }) {
  return (
    <div
      className={`glass-card p-8 rounded-lg border border-[#474551]/10 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-4 mb-6">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <p className="font-bold text-[#dae2fd]">{name}</p>
          <p className="text-xs text-[#3cddc7]">{role}</p>
        </div>
      </div>
      <p className="text-[#c8c4d3] italic mb-4">"{quote}"</p>
      <div className="flex gap-1 text-[#3cddc7]">
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
            <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z" />
          </svg>
        ))}
      </div>
    </div>
  );
}

// ─── Page Data ───
const STAGES = [
  {
    number: 1, title: "Extraction",
    description: "Drop any PDF, video, or article. AI strips the noise and isolates the high-signal concepts.",
    accentClass: "bg-[#c4c0ff]/10", delay: 0, Illustration: IsoExtraction,
  },
  {
    number: 2, title: "Vault",
    description: "Centralized knowledge storage that categorizes ideas based on cognitive patterns, not folders.",
    accentClass: "bg-[#3cddc7]/10", delay: 100, Illustration: IsoVault,
  },
  {
    number: 3, title: "Drilling",
    description: "Automated active recall sessions. Spaced repetition that adapts to your daily focus levels.",
    accentClass: "bg-amber-400/10", delay: 200, Illustration: IsoDrill,
  },
  {
    number: 4, title: "Scaffolding",
    description: "Long-term mental structure. See how every concept connects in an interactive knowledge map.",
    accentClass: "bg-violet-400/10", delay: 300, Illustration: IsoScaffold,
  },
];

const TESTIMONIALS = [
  {
    name: "Sarah Jenkins", role: "Medical Student",
    quote: "Saved 2 hours a day on note-taking. I finally feel like I'm studying the content instead of just organizing it.",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWKU1tiGaRIbCAM-Pe7MXxEumtwHaMkdbGx2SjMq8xEsn-Y42GtBTlllzlJBjRuEGO-ZUDSxIBDC_VC7haBiJYwBkjlTtsNWhABRcjrY15fnea1fcX_rKCdAdOcBF_TGUr3tZhjRI3f9eWwtCzzebZfuWsqYcf1x78YKOvqg_niTlO90KZnxhOqSYic-7YhrkQHLI-TyZHyrkps9yTTxeE93ZvItUxS3AKI3IUtPUZ50d28PfCyDyEDJzCB6pyS7sfADcSv46Gbwkp",
    delay: 0,
  },
  {
    name: "Marcus Thorne", role: "CS Undergrad",
    quote: "The active recall drills are a game changer for my ADHD. It gamifies the boring parts of learning.",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIFNm7Bvd1i1XVTPM_Bbt1U6dQWBpQWSJCF5RJuMFj5a7t5uKQi7XSRfWnTIuF6BsklvVPYNLhpEt4afhFq6LjRLBgSoeRm79UgaQ4OouHVvRwQ2ERxUKnVq7B66DONrPVawZk2d9BWDlB8HXqyGN69OrEQOu5pOPwe58l3BmZC2s8sOZWQMPN9CbgH_lbBY6F9Vx4zwlxv9UdPyS7uyYMoBvDVOLkM23eCxr8PfYXEfqZFb8J4jnFeD2v8s2u7b-h2c7Ci4gPLVUg",
    delay: 100,
  },
  {
    name: "Elena Rodriguez", role: "Law Student",
    quote: "The visual scaffolding helped me see the 'big picture' for the first time. No more getting lost in details.",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4GhXzUdmNVhKvrSuf_YhzIAvlArr25-ZlgziI0Tf0vyoayyzk3dmoejuwyKyuE6lzPEnKJr_8QQGjZF23V2JRY8zx8bmRtyKzXQWEFO1vbkZBSNiE8-uu7nzrcRHK1MIo9KtPC7lUUj1VrXwG18djiQsVt74p9_ML6fhEQVr6igc8hi6Du1MbZxWupEK9at6Nf8h3IGeSWw8XjWPsmyCSAUbR5mtjSbz2OhWsZ-T2cvzoiei_mN2hOxCMqRVrwybb1lD-ahKanLgK",
    delay: 200,
  },
];

const FAQ_ITEMS = [
  {
    question: "Do I need to install anything?",
    answer: "Hy-Feyn runs in your browser. No extensions, no desktop apps, no plugins. Paste a link or upload a transcript, and the pipeline starts immediately.",
  },
  {
    question: "Is this just fancy flashcards?",
    answer: "No. Flashcards test isolated facts. Hy-Feyn stress-tests your understanding of causal mechanisms — how and why things work, not just what they're called. The Socratic drilling adapts to your specific gaps.",
  },
  {
    question: "What if I don't have ADHD?",
    answer: "The pipeline works for any learner. The ADHD scaffolding (time-boxes, fatigue guards, re-warming protocols) simply provides extra structure. If you don't need it, it stays out of your way.",
  },
  {
    question: "What subjects does it work for?",
    answer: "Any subject with causal structure — sciences, engineering, law, economics, medicine, history. It's less suited for pure creative or artistic study, where the knowledge isn't mechanism-based.",
  },
];

const ADHD_FEATURES = [
  { Icon: Clock, label: "Automatic time-boxing", detail: "35-min sessions with built-in breaks" },
  { Icon: Shield, label: "Fatigue guardrails", detail: "Stops you before cognitive collapse" },
  { Icon: Target, label: "Zero-friction entry", detail: "No setup ritual — paste a link and go" },
  { Icon: RefreshCw, label: "Re-warming protocols", detail: "Context restoration for returning sessions" },
];

const CHAOS_ITEMS = [
  { title: "Context Switching Fatigue", detail: "Bouncing between 10 tabs, PDF readers, and Notion pages." },
  { title: "The \"Infinite Scroll\" Trap", detail: "Reading for 2 hours but retaining zero usable information." },
  { title: "Executive Dysfunction", detail: "Staring at a blank page, unable to decide where to start." },
];

const FLOW_ITEMS = [
  { title: "Isolated Focus Modes", detail: "One task at a time. Pure content extraction without noise." },
  { title: "Automated Active Recall", detail: "AI-generated drills tailored to your weak points." },
  { title: "Visual Scaffolding", detail: "Knowledge is automatically mapped into mental structures." },
];

// ─── Main App ───
export default function Hy-FeynLanding() {
  const [probRef, probVis] = useInView(0.1);
  const [pipeRef, pipeVis] = useInView(0.1);
  const [previewRef, previewVis] = useInView(0.1);
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
          subject: "Hy-Feyn Waitlist Sign-up",
          from_name: "Hy-Feyn Waitlist",
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
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd]">

      {/* ─── NAV ─── */}
      <nav className="fixed top-0 w-full z-50 bg-[#0b1326]/60 backdrop-blur-xl">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-bold tracking-tighter text-[#c4c0ff] font-display">Hy-Feyn</div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#pipeline" className="text-[#dae2fd]/70 font-display font-bold text-lg tracking-tight hover:text-[#dae2fd] transition-all duration-300">Pipeline</a>
            <a href="#results" className="text-[#dae2fd]/70 font-display font-bold text-lg tracking-tight hover:text-[#dae2fd] transition-all duration-300">Results</a>
            <a href="#waitlist" className="bg-gradient-to-r from-[#c4c0ff] to-[#8b86e4] text-[#221875] px-6 py-2 rounded-full font-bold active:scale-95 duration-200 button-glow">
              Join Waitlist
            </a>
          </div>
        </div>
        <div className="bg-gradient-to-b from-[#171f33] to-transparent h-px w-full" />
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-20 px-6 hero-gradient overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block py-1 px-4 rounded-full bg-[#2d3449] border border-[#474551]/20 text-[#3cddc7] text-xs tracking-widest uppercase">
              NEUROCOGNITIVE OPTIMIZATION
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold leading-tight tracking-tight text-[#dae2fd]">
              Turn Study Chaos into <span className="text-[#c4c0ff]">Clean Cognition.</span>
            </h1>
            <p className="text-xl text-[#c8c4d3] max-w-lg leading-relaxed">
              Designed for the ADHD brain. An AI-augmented study pipeline that isolates content, automates active recall, and builds long-term knowledge without the overwhelm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#waitlist"
                className="bg-gradient-to-r from-[#c4c0ff] to-[#8b86e4] text-[#221875] px-8 py-4 rounded-full font-display font-bold text-lg text-center button-glow transition-all"
              >
                Get Early Access
              </a>
              <div className="flex items-center gap-2 px-4 py-4 text-[#c8c4d3] text-sm font-medium">
                <Shield size={16} className="text-[#3cddc7]" />
                Be first to know when we launch
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-[#3cddc7]/10 blur-[100px] rounded-full" />
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYd6gJ1WZobAo8GiOXO-s5jmUUdzWCrVbfanMy1OKRZmTjX_qHW97B2xEuHLYAYzEDcepuqWwvX_idHvVOWaN9fRatPxGx_MxoaWP8P2QEjeK71OwZkYADRWEA4mIEIlUQoRksIjv1l1BWrc6a8_YbYSxHR3d1J37Q5MrUQFEacrkO4SE6K9sOc-kCxJP_sGPeOFIIFJce8XTJFRzKa12lB3SFLd3aP5NEQY3SrP-T1Y1rnl7xDqGwRiiFUH47Fj46hG3jOcDfBNYx"
              alt="3D isometric visualization of the Hy-Feyn study pipeline"
              className="relative z-10 w-full drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ─── PROBLEM ─── */}
      <section ref={probRef} className="py-24 px-6 bg-[#131b2e]">
        <div className="max-w-7xl mx-auto">
          <div className={`grid grid-cols-1 lg:grid-cols-2 rounded-lg overflow-hidden bg-[#1c2540] shadow-2xl transition-all duration-700 ${probVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="p-12 border-r border-[#474551]/10">
              <h3 className="font-display text-3xl font-bold mb-8 text-red-400/80">The Study Chaos</h3>
              <ul className="space-y-6">
                {CHAOS_ITEMS.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-red-500/15 flex items-center justify-center shrink-0 mt-0.5">
                      <X size={12} className="text-red-400" />
                    </div>
                    <div>
                      <p className="font-bold text-[#dae2fd]">{item.title}</p>
                      <p className="text-sm text-[#c8c4d3]">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-12 bg-[#222a3d]">
              <h3 className="font-display text-3xl font-bold mb-8 text-[#3cddc7]">The Hy-Feyn Flow</h3>
              <ul className="space-y-6">
                {FLOW_ITEMS.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#3cddc7]/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-[#3cddc7]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#dae2fd]">{item.title}</p>
                      <p className="text-sm text-[#c8c4d3]">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PIPELINE ─── */}
      <section id="pipeline" ref={pipeRef} className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-display font-extrabold mb-4 text-[#dae2fd]">The 4-Stage Study Pipeline</h2>
          <p className="text-[#c8c4d3] max-w-2xl mx-auto">
            We don't just "take notes." We process information through a neuro-optimized assembly line.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STAGES.map(({ Illustration, ...stage }) => (
            <StageCard
              key={stage.number}
              {...stage}
              illustration={<Illustration accent={stage.number === 1 ? "#c4c0ff" : stage.number === 2 ? "#3cddc7" : stage.number === 3 ? "#fbbf24" : "#a78bfa"} />}
              visible={pipeVis}
            />
          ))}
        </div>
      </section>

      {/* ─── PRODUCT PREVIEW ─── */}
      <section ref={previewRef} className="py-24 px-6 bg-[#131b2e]">
        <div className="max-w-5xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-700 ${previewVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-xs font-semibold text-[#3cddc7] tracking-widest uppercase mb-3">Live product</p>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#dae2fd] mb-4">
              See it before you commit.
            </h2>
            <p className="text-[#c8c4d3] max-w-xl mx-auto">
              This is the actual MVP — not a mockup. Click around, explore the pipeline, and decide for yourself.
            </p>
          </div>

          {/* Browser frame */}
          <div className={`transition-all duration-700 delay-200 ${previewVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="rounded-lg overflow-hidden border border-[#474551]/30 shadow-2xl">
              {/* Browser chrome */}
              <div className="bg-[#1c2540] px-4 py-3 flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 bg-[#171f33] rounded px-3 py-1 text-xs text-[#928f9d] font-mono truncate">
                  jon-devlapaz.github.io/LearnOps-tamagachi/
                </div>
                <a
                  href="https://jon-devlapaz.github.io/LearnOps-tamagachi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#3cddc7] hover:text-[#dae2fd] transition-colors whitespace-nowrap flex items-center gap-1"
                >
                  Open full screen
                  <ArrowRight size={12} />
                </a>
              </div>
              {/* iframe */}
              <iframe
                src="https://jon-devlapaz.github.io/LearnOps-tamagachi/"
                title="Hy-Feyn MVP"
                className="w-full border-0"
                style={{ height: "600px" }}
                loading="lazy"
              />
            </div>
          </div>

          <div className={`text-center mt-8 transition-all duration-700 delay-300 ${previewVis ? "opacity-100" : "opacity-0"}`}>
            <a
              href="https://jon-devlapaz.github.io/LearnOps-tamagachi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#c8c4d3] hover:text-[#3cddc7] transition-colors"
            >
              Open in a new tab for the full experience
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ─── ADHD CALLOUT ─── */}
      <section className="py-20 px-6 bg-[#131b2e]">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-lg border border-[#474551]/15 bg-[#1c2540] p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c4c0ff]/20 to-[#3cddc7]/20 border border-[#c4c0ff]/25 flex items-center justify-center shrink-0">
                <Sparkles size={22} className="text-[#c4c0ff]" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-[#dae2fd] mb-3">
                  Built for ADHD brains — not adapted from neurotypical tools.
                </h3>
                <p className="text-sm text-[#c8c4d3] leading-relaxed mb-5">
                  Hy-Feyn isn't a study app with an "ADHD mode" toggle. The entire pipeline was designed
                  around executive function constraints from the ground up.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {ADHD_FEATURES.map(({ Icon, label, detail }, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-[#3cddc7] mt-0.5"><Icon size={15} /></span>
                      <div>
                        <p className="text-sm font-semibold text-[#dae2fd]">{label}</p>
                        <p className="text-xs text-[#c8c4d3]">{detail}</p>
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
      <section id="results" ref={testRef} className="py-24 px-6 bg-[#060e20]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-display font-extrabold mb-12 text-center text-[#dae2fd]">Results from Beta Users</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} {...t} visible={testVis} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-24 px-6 bg-[#131b2e]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-[#928f9d] tracking-widest uppercase mb-3">FAQ</p>
            <h2 className="font-display font-bold text-2xl text-[#dae2fd]">Questions before you ask</h2>
          </div>
          <div>
            {FAQ_ITEMS.map((item) => (
              <FAQItem key={item.question} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── WAITLIST ─── */}
      <section id="waitlist" className="py-24 px-6 relative">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#222a3d] rounded-lg p-12 relative z-10">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-[#3cddc7]/20 border border-[#3cddc7]/40 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 size={32} className="text-[#3cddc7]" />
                </div>
                <h3 className="text-2xl font-display font-bold text-[#dae2fd] mb-2">You're on the list!</h3>
                <p className="text-[#c8c4d3] text-sm leading-relaxed max-w-sm mx-auto">
                  We'll notify <strong className="text-[#dae2fd]">{email}</strong> the moment Hy-Feyn is ready for you.
                </p>
              </div>
            ) : (
              <>
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-display font-extrabold mb-4 text-[#dae2fd]">Join the Waitlist</h2>
                  <p className="text-[#c8c4d3]">Be first to know when we launch. No spam, just signal.</p>
                </div>
                <form onSubmit={handleWaitlist} className="space-y-6">
                  {formError && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2">
                      <AlertCircle size={14} /> {formError}
                    </div>
                  )}
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#c8c4d3] mb-2">First Name</label>
                    <input
                      type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}
                      placeholder="John" required
                      className="w-full bg-[#060e20] border-none rounded focus:ring-2 focus:ring-[#3cddc7]/40 text-[#dae2fd] p-4 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#c8c4d3] mb-2">Email Address</label>
                    <input
                      type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com" required
                      className="w-full bg-[#060e20] border-none rounded focus:ring-2 focus:ring-[#3cddc7]/40 text-[#dae2fd] p-4 outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={!canSubmit || loading}
                    className="w-full bg-gradient-to-r from-[#3cddc7] to-[#00a392] text-[#00201c] py-5 rounded-full font-display font-bold text-xl button-glow transition-all mt-4 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Join the Waitlist"}
                  </button>
                  <p className="text-center text-xs text-[#c8c4d3]/60 flex items-center justify-center gap-2">
                    <Lock size={12} />
                    No spam. Unsubscribe any time.
                  </p>
                </form>
              </>
            )}
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#c4c0ff]/10 blur-[120px] rounded-full -z-0" />
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="w-full border-t border-[#dae2fd]/10 bg-[#0b1326]">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8 w-full max-w-7xl mx-auto">
          <div className="flex flex-col gap-2">
            <div className="font-display font-bold text-[#c4c0ff] text-xl">Hy-Feyn</div>
            <p className="text-sm tracking-wide text-[#dae2fd]/50">© 2026 Hy-Feyn. AI-Augmented Neurocognitive Pipelines.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#" className="text-sm tracking-wide text-[#dae2fd]/50 hover:text-[#c4c0ff] underline decoration-[#3cddc7]/30 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm tracking-wide text-[#dae2fd]/50 hover:text-[#c4c0ff] underline decoration-[#3cddc7]/30 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
