"use client";

import { AnimatePresence, MotionConfig, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { dict, EMAIL, STACK, type Dict, type Locale } from "@/lib/content";
import { Logo } from "./Logo";
import {
  Counter,
  EASE,
  Eyebrow,
  Level,
  motion,
  ProgressLine,
  Reveal,
  ScrollProgress,
  SpotlightCard,
  StrikeIn,
  WordReveal,
} from "./motion-ui";

export function Site({ locale }: { locale: Locale }) {
  const t = dict[locale];
  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <Nav t={t} />
      <main>
        <Hero t={t} />
        <Meaning t={t} />
        <Fears t={t} />
        <Services t={t} />
        <Industries t={t} />
        <Process t={t} />
        <Numbers t={t} />
        <Exclusive t={t} />
        <Values t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </MotionConfig>
  );
}

const wrap = "mx-auto w-full max-w-[1200px] px-5 sm:px-8";

function Nav({ t }: { t: Dict }) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "border-b border-line bg-night/75 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className={`${wrap} flex h-[72px] items-center justify-between`}>
        <a href="#top" aria-label="atrema" className="text-lime">
          <Logo className="h-[22px] w-auto" />
        </a>
        <nav className="hidden items-center gap-9 text-sm text-stone md:flex">
          {t.nav.links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-lime">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={t.nav.switchHref}
            className="rounded-full border border-line px-3 py-1.5 text-xs font-medium text-stone transition-colors hover:border-ash hover:text-lime"
          >
            {t.nav.switchLabel}
          </a>
          <a
            href="#epikoinonia"
            className="hidden rounded-full bg-clay px-5 py-2.5 text-sm font-medium text-white transition-transform duration-300 hover:scale-[1.03] sm:inline-block"
          >
            {t.nav.cta}
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="relative h-10 w-10 md:hidden"
            aria-label="Menu"
            aria-expanded={open}
          >
            <span className={`absolute left-2.5 right-2.5 h-px bg-lime transition-all duration-300 ${open ? "top-1/2 rotate-45" : "top-[16px]"}`} />
            <span className={`absolute left-2.5 right-2.5 h-px bg-lime transition-all duration-300 ${open ? "top-1/2 -rotate-45" : "top-[24px]"}`} />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden md:hidden"
          >
            <div className={`${wrap} flex flex-col gap-1 pb-6`}>
              {t.nav.links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="border-b border-line py-4 text-2xl font-semibold tracking-tight">
                  {l.label}
                </a>
              ))}
              <a href="#epikoinonia" onClick={() => setOpen(false)} className="mt-5 rounded-full bg-clay px-5 py-3.5 text-center font-medium text-white">
                {t.nav.cta}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero({ t }: { t: Dict }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  return (
    <section id="top" ref={ref} className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pb-12 pt-28">
      <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-[58%] h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.10] blur-[120px]"
        style={{ background: "#c4502a" }}
        aria-hidden
      />
      <motion.div style={{ opacity: fade }} className={`${wrap} relative`}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
        >
          <Eyebrow>{t.hero.eyebrow}</Eyebrow>
        </motion.div>
        <h1 className="text-[clamp(44px,8.4vw,120px)] font-semibold leading-[0.98] tracking-[-0.045em]">
          <SplitLine text={t.hero.title1} delay={0.2} />
          <SplitLine text={t.hero.title2} delay={0.45} className="text-stone" />
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.9 }}
          className="mt-8 max-w-[560px] text-lg font-light leading-relaxed text-lime/70 sm:text-xl"
        >
          {t.hero.sub}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 1.05 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a href="#epikoinonia" className="group inline-flex items-center gap-3 rounded-full bg-clay px-7 py-4 font-medium text-white transition-transform duration-300 hover:scale-[1.03]">
            {t.hero.primary}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a href="#pos-douleuoume" className="inline-flex items-center rounded-full border border-ash px-7 py-4 font-medium text-lime transition-colors hover:border-stone">
            {t.hero.secondary}
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-14 md:mt-16"
        >
          <Level hint={t.hero.levelHint} />
        </motion.div>
      </motion.div>
    </section>
  );
}

function SplitLine({ text, delay, className = "" }: { text: string; delay: number; className?: string }) {
  return (
    <span className={`block overflow-hidden pb-[0.08em] ${className}`}>
      <motion.span
        className="block"
        initial={{ y: "105%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.1, ease: EASE, delay }}
      >
        {text}
      </motion.span>
    </span>
  );
}

function Meaning({ t }: { t: Dict }) {
  return (
    <section className="border-y border-line bg-graphite/40 py-24 sm:py-32">
      <div className={`${wrap} grid items-end gap-12 md:grid-cols-[1.1fr_1fr]`}>
        <Reveal>
          <div className="text-[clamp(64px,12vw,168px)] font-light leading-none tracking-[-0.04em]">
            {t.meaning.word}
          </div>
          <div className="mt-4 font-mono text-sm text-stone">{t.meaning.kind}</div>
        </Reveal>
        <div>
          {t.meaning.defs.map((d, i) => (
            <Reveal key={d} delay={0.12 * i} y={16}>
              <div className="border-b border-line py-4 text-2xl font-medium tracking-tight sm:text-3xl">
                <span className="mr-4 font-mono text-sm text-clay-soft">{String(i + 1).padStart(2, "0")}</span>
                {d}
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.45} y={16}>
            <p className="pt-6 text-lg text-stone">{t.meaning.close}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title, muted, intro }: { eyebrow: string; title: string; muted?: string; intro?: string }) {
  return (
    <div className="mb-14 max-w-[1000px]">
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="text-[clamp(36px,5.6vw,76px)] font-semibold leading-[1.02] tracking-[-0.04em]">
          {title}
          {muted && (
            <>
              <br />
              <span className="text-stone">{muted}</span>
            </>
          )}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-[620px] text-lg font-light text-lime/65">{intro}</p>
        </Reveal>
      )}
    </div>
  );
}

function Fears({ t }: { t: Dict }) {
  return (
    <section className="py-24 sm:py-32">
      <div className={wrap}>
        <SectionHead eyebrow={t.fears.eyebrow} title={t.fears.title} intro={t.fears.intro} />
        <div className="grid gap-5 md:grid-cols-3">
          {t.fears.items.map((f, i) => (
            <Reveal key={f.fear} delay={0.1 * i}>
              <SpotlightCard className="h-full p-8">
                <div className="mb-10 font-mono text-xs text-stone">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="text-2xl font-semibold leading-snug tracking-tight">
                  <StrikeIn delay={0.15 * i}>{f.fear}</StrikeIn>
                </h3>
                <p className="mt-6 leading-relaxed text-lime/75">{f.answer}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services({ t }: { t: Dict }) {
  return (
    <section id="ti-kanoume" className="scroll-mt-20 py-24 sm:py-32">
      <div className={wrap}>
        <SectionHead eyebrow={t.services.eyebrow} title={t.services.title} muted={t.services.titleMuted} />
        <div className="grid gap-5 md:grid-cols-2">
          {t.services.items.map((s, i) => (
            <Reveal key={s.title} delay={0.08 * (i % 2)}>
              <SpotlightCard className="h-full p-8 sm:p-10">
                <div className="flex items-start justify-between gap-6">
                  <h3 className="text-3xl font-semibold tracking-tight">{s.title}</h3>
                  <span className="mt-3 h-2.5 w-2.5 shrink-0 rounded-full bg-ash transition-colors duration-500 group-hover:bg-clay" />
                </div>
                <p className="mt-6 max-w-[460px] leading-relaxed text-lime/70">{s.text}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
      <Reveal className="mt-20">
        <div className={`${wrap} mb-5 text-xs uppercase tracking-[0.18em] text-stone`}>{t.services.stackLabel}</div>
        <Marquee items={STACK} />
      </Reveal>
    </section>
  );
}

function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-line py-7 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <motion.div
        className="flex w-max gap-14 pr-14"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {row.map((s, i) => (
          <span key={i} className="flex items-center gap-14 font-mono text-2xl text-lime/80 sm:text-3xl">
            {s}
            <span className="h-2 w-2 rounded-full bg-clay" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function Industries({ t }: { t: Dict }) {
  return (
    <section className="py-24 sm:py-32">
      <div className={wrap}>
        <SectionHead eyebrow={t.industries.eyebrow} title={t.industries.title} />
        <div className="border-t border-line">
          {t.industries.items.map((it, i) => (
            <Reveal key={it.title} delay={0.06 * i} y={20}>
              <div className="group grid items-baseline gap-3 border-b border-line py-8 transition-colors duration-500 hover:bg-graphite/50 md:grid-cols-[64px_minmax(0,1.25fr)_minmax(0,1fr)] md:gap-8 md:px-4">
                <span className="font-mono text-sm text-stone">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-[clamp(30px,3.9vw,54px)] font-semibold leading-none tracking-[-0.035em] [overflow-wrap:anywhere] transition-transform duration-500 group-hover:translate-x-2">
                  {it.title}
                  <span className="text-clay opacity-0 transition-opacity duration-500 group-hover:opacity-100">.</span>
                </h3>
                <p className="max-w-[440px] text-lime/65">{it.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process({ t }: { t: Dict }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <section id="pos-douleuoume" className="scroll-mt-20 border-y border-line bg-graphite/40 py-24 sm:py-32">
      <div className={wrap}>
        <SectionHead eyebrow={t.process.eyebrow} title={t.process.title} muted={t.process.titleMuted} />
        <div ref={ref} className="relative grid gap-12 md:grid-cols-4 md:gap-8">
          <ProgressLine target={ref} />
          {t.process.steps.map((s, i) => (
            <Reveal key={s.title} delay={0.12 * i}>
              <div className="relative">
                <span className="relative z-10 block h-[15px] w-[15px] rounded-full border-2 border-clay bg-night" />
                <div className="mt-8 font-mono text-xs text-stone">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-lime/65">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Numbers({ t }: { t: Dict }) {
  return (
    <section className="py-20 sm:py-28">
      <div className={wrap}>
        <div className="grid divide-y divide-line overflow-hidden rounded-3xl border border-line bg-graphite/40 md:grid-cols-3 md:divide-x md:divide-y-0">
          {t.numbers.map((n, i) => (
            <Reveal key={n.label} delay={0.1 * i}>
              <div className="p-10 sm:p-12">
                <div className="text-[clamp(72px,9vw,128px)] font-semibold leading-none tracking-[-0.05em]">
                  <Counter value={n.value} />
                  <span className="text-clay">+</span>
                </div>
                <p className="mt-5 max-w-[240px] text-lime/65">{n.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Exclusive({ t }: { t: Dict }) {
  return (
    <section id="giati" className="scroll-mt-20 py-24 sm:py-36">
      <div className={wrap}>
        <Reveal>
          <Eyebrow>{t.exclusive.eyebrow}</Eyebrow>
        </Reveal>
        <WordReveal
          text={t.exclusive.text}
          className="max-w-[1080px] text-[clamp(30px,4.6vw,64px)] font-semibold leading-[1.12] tracking-[-0.035em]"
        />
      </div>
    </section>
  );
}

function Values({ t }: { t: Dict }) {
  return (
    <section className="pb-24 sm:pb-32">
      <div className={`${wrap} grid gap-14 md:grid-cols-[1fr_1.4fr]`}>
        <div className="md:sticky md:top-32 md:self-start">
          <SectionHead eyebrow={t.values.eyebrow} title={t.values.title} />
        </div>
        <div className="border-t border-line">
          {t.values.items.map((v, i) => (
            <Reveal key={v.title} delay={0.05 * i} y={18}>
              <div className="group flex gap-6 border-b border-line py-8">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-ash transition-colors duration-500 group-hover:bg-clay" />
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{v.title}</h3>
                  <p className="mt-2 text-lime/65">{v.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ t }: { t: Dict }) {
  const c = t.contact;
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });
  const field =
    "w-full border-b border-ash bg-transparent py-4 text-lg text-lime placeholder:text-stone/70 outline-none transition-colors focus:border-clay";

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const body = `${form.message}\n\n${form.name}${form.company ? `, ${form.company}` : ""}\n${form.email}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(c.subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="epikoinonia" className="scroll-mt-20 relative overflow-hidden border-t border-line py-24 sm:py-32">
      <div
        className="pointer-events-none absolute -right-40 top-20 h-[480px] w-[480px] rounded-full opacity-[0.09] blur-[120px]"
        style={{ background: "#c4502a" }}
        aria-hidden
      />
      <div className={`${wrap} relative`}>
        <Reveal>
          <Eyebrow>{c.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-[clamp(56px,10vw,144px)] font-semibold leading-[0.95] tracking-[-0.05em]">
            {c.title.replace(".", "")}
            <span className="text-clay">.</span>
          </h2>
        </Reveal>
      </div>
      <div className={`${wrap} relative mt-14 grid gap-16 md:grid-cols-2`}>
        <div>
          <Reveal delay={0.1}>
            <p className="max-w-[420px] text-lg font-light text-lime/65">{c.sub}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-12 text-sm text-stone">{c.orWrite}</div>
            <a href={`mailto:${EMAIL}`} className="mt-2 inline-block text-2xl font-medium tracking-tight underline decoration-ash decoration-1 underline-offset-8 transition-colors hover:decoration-clay">
              {EMAIL}
            </a>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <form onSubmit={submit} className="flex flex-col gap-2">
            <input required className={field} placeholder={c.fields.name} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input className={field} placeholder={c.fields.company} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
            <input required type="email" className={field} placeholder={c.fields.email} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <textarea required rows={4} className={`${field} resize-none`} placeholder={c.fields.message} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            <button type="submit" className="group mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-clay px-8 py-4 font-medium text-white transition-transform duration-300 hover:scale-[1.03]">
              {c.send}
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Footer({ t }: { t: Dict }) {
  return (
    <footer className="border-t border-line pt-20 pb-10">
      <div className={wrap}>
        <Reveal y={40}>
          <Logo className="h-auto w-full text-lime" />
        </Reveal>
        <div className="mt-14 flex flex-col justify-between gap-4 text-sm text-stone sm:flex-row">
          <span>{t.footer.tagline}</span>
          <span>© 2026 atrema. {t.footer.rights}</span>
          <a href="#top" className="transition-colors hover:text-lime">{t.footer.top} ↑</a>
        </div>
      </div>
    </footer>
  );
}
