import "./globals.css";
import type { Metadata } from "next";
import { manrope } from "@/lib/fonts";
import Link from "next/link";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = { title: "404. evnly" };

export default function GlobalNotFound() {
  return (
    <html lang="el" className={manrope.variable}>
      <body className="grain flex min-h-screen flex-col items-center justify-center gap-8 px-6 text-center">
        <Logo className="h-10 w-auto text-lime" />
        <p className="text-stone">Αυτή η σελίδα δεν υπάρχει. This page doesn&apos;t exist.</p>
        <Link href="/" className="rounded-full bg-clay px-6 py-3 text-sm font-medium text-white">evnly.</Link>
      </body>
    </html>
  );
}
