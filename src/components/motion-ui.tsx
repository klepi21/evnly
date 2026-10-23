"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-stone">
      <span className="h-2 w-2 rounded-full bg-clay" />
      {children}
    </div>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-clay"
      aria-hidden
    />
  );
}

/** Counts up to `value` once it scrolls into view. */
export function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = useReducedMotion();
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      count.set(value);
      return;
    }
    const controls = animate(count, value, { duration: 1.8, ease: EASE });
    return () => controls.stop();
  }, [inView, value, reduce, count]);
  return <motion.span ref={ref}>{rounded}</motion.span>;
}

/** Each word brightens as the paragraph scrolls through the viewport. */
export function WordReveal({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const words = text.split(" ");
  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
          {w}
        </Word>
      ))}
    </p>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block whitespace-pre">
      {children}{" "}
    </motion.span>
  );
}

/**
 * The spirit level. The bubble settles into the centre on load,
 * follows the cursor a little, and always returns to the centre.
 */
export function Level({ hint }: { hint: string }) {
  const reduce = useReducedMotion();
  const target = useMotionValue(reduce ? 0 : -320);
  const x = useSpring(target, { stiffness: 70, damping: 7, mass: 1 });
  const cx = useTransform(x, (v) => 500 + v);
  const glow = useTransform(x, [-320, 0, 320], [0.15, 0.55, 0.15]);
  const idle = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (reduce) return;
    const t = setTimeout(() => target.set(0), 450);
    const onMove = (e: PointerEvent) => {
      const rel = e.clientX / window.innerWidth - 0.5;
      target.set(rel * 2 * 260);
      if (idle.current) clearTimeout(idle.current);
      idle.current = setTimeout(() => target.set(0), 700);
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      clearTimeout(t);
      if (idle.current) clearTimeout(idle.current);
      window.removeEventListener("pointermove", onMove);
    };
  }, [reduce, target]);

  return (
    <div className="relative w-full">
      <svg viewBox="0 0 1000 80" className="w-full overflow-visible" aria-hidden>
        <defs>
          <radialGradient id="bubbleGlow">
            <stop offset="0%" stopColor="#c4502a" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#c4502a" stopOpacity="0" />
          </radialGradient>
        </defs>
        <motion.line
          x1="0"
          y1="40"
          x2="1000"
          y2="40"
          stroke="#f4f2ee"
          strokeOpacity="0.28"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, ease: EASE }}
        />
        <line x1="462" y1="22" x2="462" y2="58" stroke="#8a8782" strokeOpacity="0.6" strokeWidth="1.5" />
        <line x1="538" y1="22" x2="538" y2="58" stroke="#8a8782" strokeOpacity="0.6" strokeWidth="1.5" />
        <motion.circle cx={cx} cy="40" r="70" fill="url(#bubbleGlow)" style={{ opacity: glow }} />
        <motion.circle cx={cx} cy="40" r="22" fill="#0a0a0a" stroke="#c4502a" strokeWidth="6" />
      </svg>
      <p className="mt-4 hidden text-center text-xs text-stone/70 md:block">{hint}</p>
    </div>
  );
}

/** Card with a soft clay light that follows the cursor. */
export function SpotlightCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      onPointerMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r || !ref.current) return;
        ref.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
        ref.current.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
      className={`group relative overflow-hidden rounded-3xl border border-line bg-graphite/60 transition-colors duration-500 hover:border-ash ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(196,80,42,0.14), transparent 60%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}

/** Horizontal line that fills as the section scrolls past. */
export function ProgressLine({ target }: { target: React.RefObject<HTMLElement | null> }) {
  const { scrollYProgress } = useScroll({ target, offset: ["start 75%", "end 60%"] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });
  return (
    <div className="absolute left-0 right-0 top-[7px] hidden h-px bg-line md:block">
      <motion.div style={{ scaleX }} className="h-px origin-left bg-clay" />
    </div>
  );
}

export function StrikeIn({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.span
      className="text-stone [box-decoration-break:clone] [-webkit-box-decoration-break:clone]"
      style={{
        backgroundImage: "linear-gradient(#c4502a, #c4502a)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0 58%",
      }}
      initial={{ backgroundSize: "0% 2px" }}
      whileInView={{ backgroundSize: "100% 2px" }}
      viewport={{ once: true, margin: "0px 0px -20% 0px" }}
      transition={{ duration: 0.9, ease: EASE, delay: delay + 0.3 }}
    >
      {children}
    </motion.span>
  );
}

export { motion, EASE };
