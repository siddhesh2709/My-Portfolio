import { motion } from "motion/react";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

export function Certifications() {
    const { certifications } = usePortfolio();
    return (
        <section id="certifications" className="relative py-20 px-6 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-[60%] right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest mb-6">
                        <Award className="w-4 h-4" />
                        Professional Validation
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                        <span className="text-foreground">Featured </span>
                        <span className="bg-gradient-to-r from-primary to-gradient-indigo bg-clip-text text-transparent">
                            Certifications
                        </span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="group relative rounded-[24px] bg-card border border-border backdrop-blur-xl hover:border-primary/40 transition-all duration-300 overflow-hidden flex flex-col shadow-xl shadow-primary/5"
                        >
                            {/* Certificate Image Area */}
                            <div className="relative h-44 bg-secondary border-b border-border overflow-hidden">
                                {cert.image ? (
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <Award className="w-20 h-20 text-primary/10 group-hover:text-primary/20 transition-colors duration-500" />
                                    </div>
                                )}
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-80" />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                {/* Title */}
                                <h4 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors tracking-tight">
                                    {cert.title}
                                </h4>

                                {/* Date */}
                                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary mb-4">
                                    <Calendar className="w-3.5 h-3.5" />
                                    {cert.period}
                                </div>

                                {/* Description */}
                                <p className="text-muted-foreground text-[0.85rem] leading-relaxed mb-6 flex-1">
                                    {cert.description}
                                </p>

                                {/* Footer */}
                                <div className="flex items-center justify-between pt-4 border-t border-border">
                                    <div className="flex gap-2">
                                        <span className="px-3 py-1 rounded-lg bg-primary/10 border border-primary/20 text-[9px] font-black text-primary uppercase tracking-[0.2em]">
                                            Verified
                                        </span>
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.1, rotate: 10 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-2 rounded-xl bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all border border-border"
                                    >
                                        <ExternalLink className="w-3.5 h-3.5" />
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
