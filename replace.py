import sys
import re

with open('src/App.jsx', 'r') as f:
    content = f.read()

# Replace Checkout function
new_modal = '''// ─── Waitlist Modal ───
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

// ═══════════════════════════════════════════════'''

content = re.sub(
    r"// ─── Multi-Step Checkout ───\nfunction Checkout\(\{ onClose \}\) \{.*?\n\}\n\n// ═══════════════════════════════════════════════",
    lambda _: new_modal,
    content,
    flags=re.DOTALL
)

# Rename state variable
content = content.replace('const [showCheckout, setShowCheckout] = useState(false);', 'const [showWaitlistModal, setShowWaitlistModal] = useState(false);')
content = content.replace('setShowCheckout(true)', 'setShowWaitlistModal(true)')
content = content.replace('setShowCheckout(false)', 'setShowWaitlistModal(false)')
content = content.replace('{showCheckout && <Checkout onClose={() => setShowCheckout(false)} />}', '{showWaitlistModal && <WaitlistModal onClose={() => setShowWaitlistModal(false)} />}')

# Update CTA text
content = content.replace('Pre-order · $15/mo', 'Join the Waitlist')
content = content.replace('Secure Early Access — $15/mo', 'Join the Waitlist')
content = content.replace('Not charged until launch · Cancel in 1 click', 'Limited spots available for our private beta')

with open('src/App.jsx', 'w') as f:
    f.write(content)
print("Successfully replaced components and updated file.")
