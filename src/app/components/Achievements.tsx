import { motion } from "motion/react";
import { Trophy, Calendar, Building2, ChevronRight } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

export function Achievements() {
    const { achievements } = usePortfolio();

    return (
        <section id="achievements" className="relative py-32 px-6 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[150px]" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                        <Trophy className="w-4 h-4" />
                        Milestones
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        <span className="text-[#E5E7EB]">Notable </span>
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            Achievements
                        </span>
                    </h2>
                    <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
                        Recognition and honors received for academic and technical excellence
                    </p>
                </motion.div>

                {/* Achievements List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={achievement.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl hover:bg-cyan-500/5 hover:border-cyan-500/30 transition-all duration-300 h-full flex flex-col">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/10">
                                        <Trophy className="w-7 h-7" />
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[#9CA3AF] text-sm">
                                        <Calendar className="w-4 h-4" />
                                        {achievement.date}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-[#E5E7EB] mb-2 group-hover:text-cyan-400 transition-colors">
                                    {achievement.title}
                                </h3>

                                <div className="flex items-center gap-2 text-cyan-400/80 font-medium mb-4">
                                    <Building2 className="w-4 h-4" />
                                    {achievement.awarder}
                                </div>

                                <p className="text-[#9CA3AF] leading-relaxed flex-1">
                                    {achievement.description}
                                </p>

                                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                                    <span className="text-xs font-bold uppercase tracking-widest text-cyan-500/50">Award Recipient</span>
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-white transition-all">
                                        <ChevronRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
