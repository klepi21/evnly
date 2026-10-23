import "../globals.css";
import { manrope, jetbrains } from "@/lib/fonts";
import { buildMetadata } from "@/lib/metadata";

export { viewport } from "@/lib/metadata";
export const metadata = buildMetadata("el");

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el" className={`${manrope.variable} ${jetbrains.variable}`}>
      <body className="grain">{children}</body>
    </html>
  );
}
