import { motion } from "motion/react";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

export function Certifications() {
    const { certifications } = usePortfolio();
    return (
        <section id="certifications" className="relative py-32 px-6 overflow-hidden">
            {/* Background Elements */}

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                        <Award className="w-4 h-4" />
                        Professional Validation
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold">
                        <span className="text-[#E5E7EB]">Featured </span>
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
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
                            whileHover={{ y: -8 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="group relative rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-300 overflow-hidden flex flex-col"
                        >
                            {/* Certificate Image */}
                            <div className="relative h-48 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 overflow-hidden">
                                {cert.image ? (
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <Award className="w-16 h-16 text-cyan-400/30" />
                                    </div>
                                )}
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-transparent to-transparent opacity-60" />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                {/* Title */}
                                <h4 className="text-xl font-bold text-[#E5E7EB] mb-3 group-hover:text-cyan-400 transition-colors">
                                    {cert.title}
                                </h4>

                                {/* Date */}
                                <div className="flex items-center gap-2 text-sm text-cyan-400 mb-4">
                                    <Calendar className="w-4 h-4" />
                                    {cert.period}
                                </div>

                                {/* Description */}
                                <p className="text-[#9CA3AF] text-sm leading-relaxed mb-6 flex-1">
                                    {cert.description}
                                </p>

                                {/* Footer */}
                                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                    <div className="flex gap-2">
                                        <span className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-bold text-cyan-400 uppercase tracking-wider">
                                            Verified
                                        </span>
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-2 rounded-lg text-[#9CA3AF] hover:text-cyan-400 hover:bg-cyan-500/10 transition-all"
                                    >
                                        <ExternalLink className="w-5 h-5" />
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
