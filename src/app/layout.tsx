import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Slide from "./components/Slide";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Apresentation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Navbar />
        <Hero />
        <AboutMe />
        <Slide />
        <Projects />
        <Contacts />
        {children}
        <Footer />
      </body>
    </html>
  );
}
