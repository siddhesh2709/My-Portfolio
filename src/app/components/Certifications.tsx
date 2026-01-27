import { motion } from "motion/react";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

export function Certifications() {
    const { certifications } = usePortfolio();
    return (
        <section id="certifications" className="relative py-32 px-6 overflow-hidden">
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />

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
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl hover:bg-cyan-500/5 hover:border-cyan-500/30 transition-all duration-300 h-full flex flex-col"
                        >
                            <div className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
                                <Award className="w-6 h-6 text-cyan-400" />
                            </div>

                            <h4 className="text-xl font-bold text-[#E5E7EB] mb-3 pr-10">{cert.title}</h4>
                            <div className="flex items-center gap-2 text-sm text-cyan-400 mb-6">
                                <Calendar className="w-4 h-4" />
                                {cert.period}
                            </div>
                            <p className="text-[#9CA3AF] text-sm leading-relaxed mb-8 flex-1">
                                {cert.description}
                            </p>

                            <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                                <div className="flex gap-2">
                                    <span className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-bold text-cyan-400 uppercase tracking-wider">Verified</span>
                                    <span className="px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400 uppercase tracking-wider">Professional</span>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    className="text-[#9CA3AF] hover:text-cyan-400 transition-colors"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
