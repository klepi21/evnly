export type Locale = "el" | "en";

export const EMAIL = "hello@atrema.gr";

const el = {
  meta: {
    title: "atrema. Η senior ομάδα σου. Μόνο δική σου.",
    description:
      "Senior μηχανικοί software για εταιρείες που δεν σηκώνουν λάθη. AI, υγεία, χρηματοοικονομικά, blockchain. Από την Πάτρα, για όλο τον κόσμο.",
  },
  nav: {
    links: [
      { href: "#ti-kanoume", label: "Τι κάνουμε" },
      { href: "#pos-douleuoume", label: "Πώς δουλεύουμε" },
      { href: "#giati", label: "Γιατί atrema" },
    ],
    cta: "Ας μιλήσουμε",
    switchLabel: "EN",
    switchHref: "/en",
  },
  hero: {
    eyebrow: "Senior engineering από την Πάτρα",
    title1: "Η senior ομάδα σου.",
    title2: "Μόνο δική σου.",
    sub: "Γράφουμε software για εταιρείες που δεν σηκώνουν λάθη. 15 χρόνια εμπειρία. Κανένας junior.",
    primary: "Ας μιλήσουμε",
    secondary: "Πώς δουλεύουμε",
    levelHint: "Κούνησε το ποντίκι. Η φυσαλίδα πάντα επιστρέφει στο κέντρο.",
  },
  meaning: {
    word: "ατρέμα",
    kind: "επίρρημα, αρχαία ελληνικά",
    defs: ["Ακλόνητα.", "Με σταθερό χέρι.", "Χωρίς να τρέμει."],
    close: "Έτσι γράφουμε κώδικα.",
  },
  fears: {
    eyebrow: "Το πρόβλημα",
    title: "Ξέρουμε τι φοβάσαι.",
    intro: "Όποιος έχει δουλέψει με εξωτερικούς developers τα έχει ζήσει. Εμείς χτίσαμε τη δουλειά μας ακριβώς πάνω στο αντίθετο.",
    items: [
      { fear: "Κώδικας που πρέπει να ξαναγραφτεί.", answer: "Γράφουμε κώδικα που διαβάζεται, ελέγχεται και αντέχει. Η ομάδα σου τον παραλαμβάνει χωρίς εκπλήξεις." },
      { fear: "Developers που εξαφανίζονται.", answer: "Οι συνεργασίες μας κρατάνε χρόνια, όχι μήνες. Στέλνεις μήνυμα, απαντάμε." },
      { fear: "Deadlines που χάνονται.", answer: "Λέμε τι γίνεται, πότε και γιατί. Και τα δυσάρεστα, νωρίς." },
    ],
  },
  services: {
    eyebrow: "Τι κάνουμε",
    title: "Μπαίνουμε στην ομάδα σου.",
    titleMuted: "Όχι δίπλα της.",
    items: [
      { title: "Senior engineering", text: "Senior developers που δουλεύουν μέσα στα εργαλεία, τα standups και τον κώδικά σου, σαν κανονικά μέλη της ομάδας." },
      { title: "Αρχιτεκτονική", text: "Σχεδιάζουμε συστήματα που αντέχουν φόρτο, αλλαγές και ελέγχους. Από την πρώτη απόφαση ως την παραγωγή." },
      { title: "Tech leadership", text: "Καθοδηγούμε ομάδες, κάνουμε code review και βάζουμε διαδικασίες που δουλεύουν χωρίς γραφειοκρατία." },
      { title: "SaaS και CRM", text: "Πάνω από 40 πλατφόρμες στην παραγωγή. Ξέρουμε πού σπάνε τα συστήματα και πώς να μη σπάσουν." },
    ],
    stackLabel: "Δουλεύουμε κυρίως με",
  },
  industries: {
    eyebrow: "Κλάδοι",
    title: "Εκεί που το λάθος κοστίζει.",
    items: [
      { title: "AI", text: "Μοντέλα, agents και AI security, με τα δεδομένα σου πάντα προστατευμένα." },
      { title: "Υγεία", text: "Συστήματα με ευαίσθητα δεδομένα ασθενών, όπου η ακρίβεια δεν είναι επιλογή." },
      { title: "Χρηματοοικονομικά", text: "Πλατφόρμες όπου κάθε συναλλαγή πρέπει να είναι σωστή. Κάθε φορά." },
      { title: "Blockchain", text: "Smart contracts και υποδομές όπου ο κώδικας δεν παίρνει πίσω." },
    ],
  },
  process: {
    eyebrow: "Πώς δουλεύουμε",
    title: "Απλά. Μηνιαία.",
    titleMuted: "Μακροπρόθεσμα.",
    steps: [
      { title: "Γνωριμία", text: "Μια κουβέντα για το προϊόν, την ομάδα και το τι χρειάζεσαι. Χωρίς παρουσιάσεις." },
      { title: "Ένταξη", text: "Μπαίνουμε στα εργαλεία σου μέσα σε λίγες μέρες. Repo, Slack, standups." },
      { title: "Συνεργασία", text: "Μηνιαία, με σταθερό κόστος και καθαρή εικόνα για το τι έγινε και τι ακολουθεί." },
      { title: "Μένουμε", text: "Δεν ψάχνουμε το επόμενο project. Μένουμε όσο μας χρειάζεσαι." },
    ],
  },
  numbers: [
    { value: 15, label: "χρόνια εμπειρίας στον προγραμματισμό" },
    { value: 40, label: "SaaS και CRM συστήματα στην παραγωγή" },
    { value: 3, label: "χρόνια συνεχόμενης συνεργασίας χωρίς διακοπή" },
  ],
  exclusive: {
    eyebrow: "Γιατί atrema",
    text: "Δεν θα βρεις εδώ logos πελατών. Ούτε case studies με ονόματα. Ό,τι βλέπουμε στην εταιρεία σου μένει εκεί. Όταν δουλεύουμε για σένα, δουλεύουμε μόνο για σένα.",
  },
  values: {
    eyebrow: "Αξίες",
    title: "Πέντε πράγματα που δεν αλλάζουν.",
    items: [
      { title: "Ποιότητα", text: "Κώδικας που δεν θα χρειαστεί να ξαναγραφτεί." },
      { title: "Αφοσίωση", text: "Όταν δουλεύουμε για σένα, δουλεύουμε μόνο για σένα." },
      { title: "Παρουσία", text: "Απαντάμε. Είμαστε εκεί. Δεν εξαφανιζόμαστε." },
      { title: "Εχεμύθεια", text: "Ό,τι βλέπουμε στην εταιρεία σου μένει εκεί." },
      { title: "Συνέπεια", text: "Το deadline είναι υπόσχεση." },
    ],
  },
  contact: {
    eyebrow: "Επικοινωνία",
    title: "Ας μιλήσουμε.",
    sub: "Πες μας τι χτίζεις και τι χρειάζεσαι. Στέλνεις μήνυμα, απαντάμε.",
    fields: { name: "Όνομα", company: "Εταιρεία", email: "Email", message: "Τι χτίζεις;" },
    send: "Αποστολή",
    orWrite: "Ή γράψε μας απευθείας",
    subject: "Γνωριμία με την atrema",
  },
  footer: {
    tagline: "Senior engineering. Πάτρα, Ελλάδα.",
    rights: "Με την επιφύλαξη παντός δικαιώματος.",
    top: "Πάνω",
  },
};

export type Dict = typeof el;

const en: Dict = {
  meta: {
    title: "atrema. Your senior team. Yours alone.",
    description:
      "Senior software engineers for companies that can't afford mistakes. AI, health, finance, blockchain. Based in Patras, Greece, working worldwide.",
  },
  nav: {
    links: [
      { href: "#ti-kanoume", label: "What we do" },
      { href: "#pos-douleuoume", label: "How we work" },
      { href: "#giati", label: "Why atrema" },
    ],
    cta: "Let's talk",
    switchLabel: "ΕΛ",
    switchHref: "/",
  },
  hero: {
    eyebrow: "Senior engineering from Patras, Greece",
    title1: "Your senior team.",
    title2: "Yours alone.",
    sub: "We write software for companies that can't afford mistakes. 15 years of experience. No juniors.",
    primary: "Let's talk",
    secondary: "How we work",
    levelHint: "Move your cursor. The bubble always returns to the centre.",
  },
  meaning: {
    word: "ατρέμα",
    kind: "adverb, ancient Greek",
    defs: ["Unshaken.", "With a steady hand.", "Without trembling."],
    close: "That's how we write code.",
  },
  fears: {
    eyebrow: "The problem",
    title: "We know what keeps you up.",
    intro: "Anyone who has worked with outside developers has been there. We built our work around the exact opposite.",
    items: [
      { fear: "Code that has to be rewritten.", answer: "We write code that reads well, is tested and lasts. Your team takes it over without surprises." },
      { fear: "Developers who disappear.", answer: "Our engagements last years, not months. You send a message, we answer." },
      { fear: "Missed deadlines.", answer: "We tell you what's happening, when and why. Bad news included, early." },
    ],
  },
  services: {
    eyebrow: "What we do",
    title: "We join your team.",
    titleMuted: "Not the side of it.",
    items: [
      { title: "Senior engineering", text: "Senior developers working inside your tools, standups and codebase, as real members of the team." },
      { title: "Architecture", text: "Systems designed to handle load, change and audits. From the first decision to production." },
      { title: "Tech leadership", text: "We guide teams, review code and set up processes that work without bureaucracy." },
      { title: "SaaS and CRM", text: "More than 40 platforms in production. We know where systems break and how to keep them from breaking." },
    ],
    stackLabel: "Mostly working with",
  },
  industries: {
    eyebrow: "Industries",
    title: "Where mistakes are expensive.",
    items: [
      { title: "AI", text: "Models, agents and AI security, with your data protected at every step." },
      { title: "Health", text: "Systems handling sensitive patient data, where accuracy is not optional." },
      { title: "Finance", text: "Platforms where every transaction has to be right. Every time." },
      { title: "Blockchain", text: "Smart contracts and infrastructure where code can't take anything back." },
    ],
  },
  process: {
    eyebrow: "How we work",
    title: "Simple. Monthly.",
    titleMuted: "Long term.",
    steps: [
      { title: "Intro", text: "A conversation about your product, your team and what you need. No slide decks." },
      { title: "Onboarding", text: "We're inside your tools within days. Repo, Slack, standups." },
      { title: "Engagement", text: "Monthly, with a fixed cost and a clear picture of what was done and what's next." },
      { title: "We stay", text: "We're not chasing the next project. We stay as long as you need us." },
    ],
  },
  numbers: [
    { value: 15, label: "years of software engineering" },
    { value: 40, label: "SaaS and CRM systems in production" },
    { value: 3, label: "years of uninterrupted collaboration" },
  ],
  exclusive: {
    eyebrow: "Why atrema",
    text: "You won't find client logos here. Or case studies with names. What we see inside your company stays there. When we work for you, we work only for you.",
  },
  values: {
    eyebrow: "Values",
    title: "Five things that don't change.",
    items: [
      { title: "Quality", text: "Code that won't need to be rewritten." },
      { title: "Devotion", text: "When we work for you, we work only for you." },
      { title: "Presence", text: "We answer. We show up. We don't disappear." },
      { title: "Discretion", text: "What we see in your company stays there." },
      { title: "Consistency", text: "A deadline is a promise." },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk.",
    sub: "Tell us what you're building and what you need. You send a message, we answer.",
    fields: { name: "Name", company: "Company", email: "Email", message: "What are you building?" },
    send: "Send",
    orWrite: "Or write to us directly",
    subject: "Intro with atrema",
  },
  footer: {
    tagline: "Senior engineering. Patras, Greece.",
    rights: "All rights reserved.",
    top: "Top",
  },
};

export const dict: Record<Locale, Dict> = { el, en };
export const STACK = ["Laravel", "Next.js", "Node.js", "SQL", "TypeScript", "PHP"];
