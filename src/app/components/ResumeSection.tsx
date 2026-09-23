import { motion } from "motion/react";
import { Download, FileText, ChevronRight } from "lucide-react";

export function ResumeSection() {
    return (
        <section className="py-20 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="glass-morphism rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 border-primary/20"
                >
                    <div className="flex-1">
                        <div className="flex items-center gap-3 text-primary mb-6">
                            <FileText className="w-6 h-6" />
                            <span className="font-mono text-sm tracking-widest uppercase">Curriculum Vitae</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-balance">
                            Looking for a <span className="text-gradient">Technical</span> deep-dive?
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8 max-w-xl">
                            Download my full resume to see a detailed breakdown of my experience, certifications, and academic background.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <motion.a
                                href="/resume.pdf" // Placeholder link
                                download
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-black hover:bg-white/90 px-8 py-4 rounded-2xl flex items-center gap-3 font-bold shadow-2xl shadow-white/20"
                            >
                                <Download className="w-5 h-5" />
                                Download PDF
                            </motion.a>
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="glass px-8 py-4 rounded-2xl text-white flex items-center gap-3 font-bold hover:bg-white/5 transition-colors border border-white/10"
                            >
                                Hire Me
                                <ChevronRight className="w-5 h-5" />
                            </motion.a>
                        </div>
                    </div>

                    <div className="relative w-full max-w-[300px] aspect-[3/4] glass rounded-2xl p-4 rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl border-white/10 hidden lg:block">
                        <div className="w-full h-full bg-slate-800/50 rounded-lg overflow-hidden relative">
                            <img src="/linkedin-profile.jpg" alt="LinkedIn Profile" className="w-full h-full object-cover object-top" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
