import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Work_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sarah Fawson | Design",
  description: "Portfolio of Sarah Fawson, a Designer and artist based in Colorado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${workSans.variable}`}>
      <body className="antialiased">
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
