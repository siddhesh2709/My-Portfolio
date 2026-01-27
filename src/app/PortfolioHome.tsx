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
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="min-h-screen bg-[#0B0F1A] text-[#E5E7EB] overflow-x-hidden">
            <Navbar />
            <RightSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
            <main className={`transition-all duration-500 ease-in-out ${isSidebarOpen ? "xl:pr-[240px]" : "xl:pr-0"}`}>
                <Hero />
                <section id="about" className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-transparent via-[#0E1220]/30 to-transparent">
                    <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
                    <div className="max-w-4xl mx-auto relative z-10">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-6xl font-bold mb-6">
                                <span className="text-[#E5E7EB]">About </span>
                                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    Me
                                </span>
                            </h2>
                        </div>
                        <div className="rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-blue-500/20 p-8 md:p-12">
                            <p className="text-lg text-[#9CA3AF] leading-relaxed mb-6">
                                {personalInfo.profile}
                            </p>
                            <p className="text-lg text-[#9CA3AF] leading-relaxed">
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
