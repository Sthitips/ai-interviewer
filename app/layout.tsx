import type { Metadata } from "next";
import { Mona_Sans, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrepTalk",
  description: "An AI-powered Interviewer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "dark", monaSans.className, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col pattern">{children}
        <Toaster />
      </body>
    </html>
  );
}
