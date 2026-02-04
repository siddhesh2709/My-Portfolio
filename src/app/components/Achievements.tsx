import { motion } from "motion/react";
import { Trophy, Calendar, Building2, ChevronRight } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

export function Achievements() {
    const { achievements } = usePortfolio();

    return (
        <section id="achievements" className="relative py-20 px-6 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest mb-6">
                        <Trophy className="w-4 h-4" />
                        Milestones
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                        <span className="text-foreground">Notable </span>
                        <span className="bg-gradient-to-r from-primary to-gradient-indigo bg-clip-text text-transparent">
                            Achievements
                        </span>
                    </h2>
                    <p className="text-base text-muted-foreground max-w-2xl mx-auto">
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
                            <div className="relative p-7 rounded-[28px] bg-card border border-border backdrop-blur-xl hover:border-primary/30 transition-all duration-300 h-full flex flex-col shadow-xl shadow-primary/5">
                                <div className="flex items-start justify-between mb-8">
                                    <div className="w-14 h-14 rounded-[18px] bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-lg shadow-primary/10">
                                        <Trophy className="w-6 h-6" />
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary border border-border text-muted-foreground text-xs font-bold uppercase tracking-widest">
                                        <Calendar className="w-4 h-4" />
                                        {achievement.date}
                                    </div>
                                </div>

                                <h3 className="text-xl font-black text-foreground mb-2 group-hover:text-primary transition-colors tracking-tight">
                                    {achievement.title}
                                </h3>

                                <div className="flex items-center gap-2 text-primary font-bold mb-6">
                                    <Building2 className="w-4 h-4" />
                                    {achievement.awarder}
                                </div>

                                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                                    {achievement.description}
                                </p>

                                <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60">Award Recipient</span>
                                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all border border-border">
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
