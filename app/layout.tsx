import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { DemoModalProvider } from "@/components/demo-modal-provider";
import { ScrollFX } from "@/components/scroll-fx";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

// const outfit = Outfit({
//   variable: "--font-sans",
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "800", "900"],
// });


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Otto — Won in the field. Lost in the follow-up.",
  description:
    "Otto is an AI sales coordinator that field reps call after every visit. Your CRM stays current, quotes keep moving, and nothing slips.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` ${inter.variable}`} suppressHydrationWarning>
      <body style={{ fontFamily: "var(--font-inter), system-ui, -apple-system, sans-serif" }} className="bg-background text-foreground">
        {/* <div className="" /> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <DemoModalProvider>{children}</DemoModalProvider>
          <ScrollFX />
          <Toaster position="top-center" richColors theme="light" />
        </ThemeProvider>
      </body>
    </html>
  );
}
