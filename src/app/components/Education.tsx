import { motion } from "motion/react";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

export function Education() {
    const { education } = usePortfolio();
    return (
        <section id="education" className="relative py-32 px-6 overflow-hidden">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                        <GraduationCap className="w-4 h-4" />
                        Academic Journey
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold">
                        <span className="text-[#E5E7EB]">Educational </span>
                        <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
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
                            className="relative pl-8 border-l-2 border-purple-500/20 group hover:border-purple-500/50 transition-colors"
                        >
                            {/* Timeline Bullet */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#0B0F1A] border-2 border-purple-500 group-hover:scale-125 transition-transform" />

                            <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-500/5 to-transparent border border-white/5 backdrop-blur-sm group-hover:border-purple-500/20 group-hover:bg-purple-500/10 transition-all duration-300">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-[#E5E7EB] mb-2">{edu.degree}</h3>
                                        <p className="text-lg text-purple-400 font-medium flex items-center gap-2">
                                            <BookOpen className="w-5 h-5" />
                                            {edu.institution}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-[#9CA3AF] flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            {edu.period}
                                        </span>
                                        <span className="px-4 py-2 rounded-2xl bg-purple-500/20 border border-purple-500/30 text-purple-300 font-bold">
                                            {edu.scoreType}: {edu.score}{edu.scoreType === 'Percentage' ? '%' : ''}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-[#9CA3AF] max-w-3xl leading-relaxed italic">
                                    Specializing in cloud architecture and automation.
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
