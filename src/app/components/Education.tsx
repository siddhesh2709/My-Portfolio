import { motion } from "motion/react";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

export function Education() {
    const { education } = usePortfolio();
    return (
        <section id="education" className="relative py-20 px-6 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-[40%] left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest mb-6">
                        <GraduationCap className="w-4 h-4" />
                        Academic Journey
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                        <span className="text-foreground">Educational </span>
                        <span className="bg-gradient-to-r from-primary to-gradient-indigo bg-clip-text text-transparent">
                            Background
                        </span>
                    </h2>
                </motion.div>

                <div className="space-y-12">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative pl-8 border-l border-border group hover:border-primary/50 transition-colors"
                        >
                            {/* Timeline Bullet */}
                            <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-background border-2 border-primary group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(79,70,229,0.3)]" />

                            <div className="p-6 md:p-8 rounded-[24px] bg-card border border-border backdrop-blur-xl group-hover:border-primary/20 transition-all duration-300 shadow-sm">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                                    <div className="flex-1">
                                        <h3 className="text-xl md:text-2xl font-black text-foreground mb-1 tracking-tight">{edu.degree}</h3>
                                        <p className="text-base text-primary font-bold flex items-center gap-2">
                                            <BookOpen className="w-4 h-4" />
                                            {edu.institution}
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-3">
                                        <span className="px-4 py-2 rounded-xl bg-secondary border border-border text-muted-foreground font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {edu.period}
                                        </span>
                                        <span className="px-4 py-2 rounded-xl bg-primary text-primary-foreground font-black text-xs uppercase tracking-widest shadow-xl shadow-primary/10">
                                            {edu.scoreType}: {edu.score}{edu.scoreType === 'Percentage' ? '%' : ''}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                                    <p className="text-sm text-muted-foreground leading-relaxed italic">
                                        Focused on building a strong foundation in software engineering, problem solving, and modern technology.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
