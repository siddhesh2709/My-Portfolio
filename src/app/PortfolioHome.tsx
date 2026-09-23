import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Certifications } from "./components/Certifications";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { SystemDesign } from "./components/SystemDesign";
import { ResumeSection } from "./components/ResumeSection";
import { usePortfolio } from "./context/PortfolioContext";
import { motion } from "motion/react";

export function PortfolioHome() {
    const { personalInfo } = usePortfolio();

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
            <Navbar />
            <main>
                <Hero />

                <section id="about" className="section">
                    <div className="container">
                        <div className="grid gap-10 lg:grid-cols-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="lg:col-span-7"
                            >
                                <p className="eyebrow">About</p>
                                <h2 className="section-title">
                                    Building scalable products with clean code and cloud-native architecture.
                                </h2>
                                <p className="section-lead">
                                    {personalInfo.profile}
                                </p>
                                <div className="mt-8 grid grid-cols-3 gap-4">
                                    {[
                                        { k: "3", v: "Companies worked at" },
                                        { k: "3+", v: "Full-stack projects" },
                                        { k: "7.98", v: "CGPA at VIT" },
                                    ].map((s) => (
                                        <div key={s.v} className="card px-5 py-4">
                                            <div className="text-2xl font-semibold tracking-tight">{s.k}</div>
                                            <div className="text-sm text-muted-foreground">{s.v}</div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: 0.05 }}
                                className="lg:col-span-5 flex justify-center lg:justify-end"
                            >
                                <div className="card overflow-hidden p-0 w-full max-w-[320px]">
                                    <div className="aspect-square bg-secondary relative">
                                        <img
                                            src={personalInfo.avatar}
                                            alt={`${personalInfo.name} portrait`}
                                            className="absolute inset-0 h-full w-full object-cover object-top"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <SystemDesign />
                <Skills />
                <Projects />
                <Experience />
                <Certifications />
                <Education />
                <ResumeSection />
                <Contact />
                <Footer />
            </main>
        </div>
    );
}


