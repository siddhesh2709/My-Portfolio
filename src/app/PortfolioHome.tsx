import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Certifications } from "./components/Certifications";
import { Achievements } from "./components/Achievements";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { RightSidebar } from "./components/RightSidebar";
import { usePortfolio } from "./context/PortfolioContext";

import { useState } from "react";

export function PortfolioHome() {
    const { personalInfo } = usePortfolio();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Navbar />
            <RightSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
            <main className={`transition-all duration-500 ease-in-out ${isSidebarOpen ? "xl:pr-[240px]" : "xl:pr-0"}`}>
                <Hero />
                <section id="about" className="relative py-32 px-6 overflow-hidden">
                    {/* Glow from top-right */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

                    <div className="max-w-4xl mx-auto relative z-10">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-6xl font-bold mb-6">
                                <span className="text-foreground">About </span>
                                <span className="bg-gradient-to-r from-primary to-gradient-indigo bg-clip-text text-transparent">
                                    Me
                                </span>
                            </h2>
                        </div>
                        <div className="rounded-[28px] bg-card backdrop-blur-xl border border-border p-8 md:p-12 hover:border-primary/30 transition-all duration-300 shadow-xl shadow-primary/5">
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                {personalInfo.profile}
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Currently based in {personalInfo.location}, I am dedicated to building high-quality software solutions that solve real-world problems. My expertise spans across the full stack, with a particular focus on cloud-native architectures and modern development practices.
                            </p>
                        </div>
                    </div>
                </section>

                <Skills />
                <Experience />
                <Projects />
                <Education />
                <Certifications />
                <Achievements />

                <Contact />
            </main>
            <Footer />
        </div>
    );
}
