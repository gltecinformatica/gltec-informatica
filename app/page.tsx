"use client";

import { useEffect } from "react";
import {
  Header,
  HeroSection,
  ServicesSection,
  DiferenciaisSection,
  MVVSection,
  ClientsSection,
  TestimonialsSection,
  ContactSection,
  Footer,
} from "@/components/sections";
import { AboutSection } from "@/components/about-section";

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".section-reveal");
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observerInstance.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-white">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <DiferenciaisSection />
        <MVVSection />
        <ClientsSection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
