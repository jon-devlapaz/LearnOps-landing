import { ArrowRight } from "lucide-react";

const APP_URL = "https://app.socratink.ai/";
const GOOGLE_URL = "https://app.socratink.ai/auth/google?return_to=/";
const PRIMARY_CTA = "Begin a starting sketch";

const loopSteps = [
  {
    title: "Bring source material.",
    body: "Articles, transcripts, notes, or your own model. The source becomes a draft route, not a learning record.",
  },
  {
    title: "Sketch your starting model.",
    body: "Parts, guesses, examples, confusions. No finished answer needed.",
  },
  {
    title: "Try from memory.",
    body: "An unscored cold attempt: your words, before any explanation. socratink uses what you wrote to find the gap.",
  },
  {
    title: "Repair, then return later.",
    body: "Study opens around the missing link after the attempt. Later, only spaced re-drill changes the record.",
  },
];

const notList = [
  "Not a quiz app: your cold attempt is unscored.",
  "Not a tutor bot: socratink does not claim to know your mind.",
  "Not a flashcard deck: recognition is not reconstruction.",
  "Not a course platform: exposure does not become a finish line.",
  "Not a content browser: the graph is a record of evidence, not a map of what is available.",
];

const exampleRows = [
  {
    label: "Starting Sketch",
    body: "A learner studying organic chemistry writes: SN1 reactions happen in two parts. The leaving group goes first, but I cannot explain why a polar solvent changes the path.",
  },
  {
    label: "first cold attempt",
    body: "Before seeing an explanation, they try from memory. The attempt names carbocation stability, but it treats the solvent as a side note.",
  },
  {
    label: "targeted repair",
    body: "socratink opens the narrow repair: polar solvent helps separated charges persist long enough for the two-step path to matter.",
  },
  {
    label: "spaced re-drill",
    body: "Later, the learner reconstructs substrate, leaving group, solvent, and rate in one chain. If it holds under spacing, the entry can move from worth revisiting to solidified.",
  },
];

const trustRows = [
  {
    label: "Recorded",
    body: "what you reconstruct from memory",
  },
  {
    label: "Not recorded",
    body: "reading or viewing an explanation",
  },
  {
    label: "Returned",
    body: "entries worth revisiting under spacing",
  },
];

function HeroSpecimen() {
  return (
    <figure className="journal-specimen" aria-label="A sample socratink field journal entry">
      <div className="journal-page">
        <div className="journal-page__header">
          <span>New Entry</span>
          <span>SN1 solvent effects</span>
        </div>
        <div className="journal-page__meta" aria-label="entry context">
          <span>source material</span>
          <span>organic chemistry notes, substitution reactions</span>
        </div>
        <div className="journal-field">
          <p className="journal-label">Starting Sketch</p>
          <p>
            SN1 reactions happen in two parts. I can name the carbocation, but
            I cannot yet explain why the solvent changes the path.
          </p>
        </div>
        <div className="journal-field journal-field--attempt">
          <p className="journal-label">Try from memory</p>
          <p>
            Polar solvent helps separated charges persist, so the leaving group
            can depart before the nucleophile arrives.
          </p>
        </div>
        <p className="journal-note">No explanation was shown before this attempt.</p>
        <div className="evidence-strip" aria-label="entry evidence states">
          <span>locked</span>
          <span>primed for study</span>
          <span>worth revisiting</span>
          <span>solidified</span>
        </div>
      </div>
    </figure>
  );
}

export default function App() {
  return (
    <main className="site-shell">
      <h1 className="sr-only">socratink</h1>

      <nav className="site-nav" aria-label="Primary navigation">
        <a className="wordmark" href="/" aria-label="socratink home">
          <img src="/favicon-192x192.png" alt="" aria-hidden="true" />
          <span>socratink</span>
        </a>
        <div className="nav-links">
          <a href="#loop">the loop</a>
          <a href="#not">what it is not</a>
          <a href="#example">example</a>
        </div>
        <a className="nav-cta" href={APP_URL}>
          {PRIMARY_CTA}
        </a>
      </nav>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">reading room for learning by reconstruction</p>
          <h2 id="hero-title">See what you can actually explain.</h2>
          <p className="hero-lede">
            socratink is a reading room for learning by reconstruction. Bring
            source material, sketch how you think it works, then try from memory
            before any explanation appears.
          </p>
          <p className="hero-note">
            The evidence map changes only when your reconstruction is on record.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={APP_URL}>
              {PRIMARY_CTA}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button button-secondary" href="#loop">
              Read the method
            </a>
          </div>
        </div>
        <HeroSpecimen />
      </section>

      <section id="loop" className="section section-loop" aria-labelledby="loop-title" data-folio="folio 01">
        <div className="section-heading">
          <p className="eyebrow">the loop</p>
          <h2 id="loop-title">How socratink works</h2>
        </div>
        <ol className="loop-list">
          {loopSteps.map((step, index) => (
            <li key={step.title}>
              <span className="step-number">{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="not" className="section section-not" aria-labelledby="not-title" data-folio="folio 02">
        <div className="section-heading">
          <p className="eyebrow">negative space</p>
          <h2 id="not-title">What socratink is not</h2>
          <p className="section-note">
            The refusals matter. They keep the map from mistaking exposure for evidence.
          </p>
        </div>
        <ul className="not-list">
          {notList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section id="example" className="section section-example" aria-labelledby="example-title" data-folio="folio 03">
        <div className="section-heading">
          <p className="eyebrow">worked example</p>
          <h2 id="example-title">An organic chemistry entry</h2>
        </div>
        <div className="example-timeline">
          {exampleRows.map((row) => (
            <article key={row.label} className="example-row">
              <h3>{row.label}</h3>
              <p>{row.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-trust" aria-labelledby="trust-title" data-folio="folio 04">
        <div>
          <p className="eyebrow">evidence map</p>
          <h2 id="trust-title">The graph says only what the record can support.</h2>
        </div>
        <p>
          A provisional graph is a draft route, not a verdict. Reading, viewing,
          or generating an explanation does not change the learning record.
          socratink records what you can actually rebuild.
        </p>
        <dl className="trust-ledger" aria-label="What the evidence map records">
          {trustRows.map((row) => (
            <div key={row.label}>
              <dt>{row.label}</dt>
              <dd>{row.body}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="section section-signin" aria-labelledby="signin-title" data-folio="folio 05">
        <div className="signin-copy">
          <p className="eyebrow">begin</p>
          <h2 id="signin-title">Begin a starting sketch.</h2>
          <p>
            Continue anonymously, or use Google when you want sync. socratink
            keeps what you write on this device until you sign in.
          </p>
        </div>
        <div className="signin-row" aria-label="Sign in choices">
          <a className="button button-primary" href={APP_URL}>
            Continue as guest
          </a>
          <a className="button button-secondary" href={GOOGLE_URL}>
            Continue with Google
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <a className="footer-wordmark" href="/" aria-label="socratink home">
          socratink
        </a>
        <p>socratink does not treat reading as evidence. It records what you can actually rebuild.</p>
        <div className="footer-links">
          <a href="#loop">about</a>
          <a href="mailto:jon@socratink.ai">contact</a>
          <a href="/privacy.html">privacy</a>
        </div>
      </footer>
    </main>
  );
}
