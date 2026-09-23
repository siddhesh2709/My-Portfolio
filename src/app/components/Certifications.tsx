import { motion } from "motion/react";
import { Award, Calendar, Building2, ZoomIn } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";
import { useState } from "react";

export function Certifications() {
    const { certifications } = usePortfolio();
    const [lightbox, setLightbox] = useState<string | null>(null);

    return (
        <section id="certifications" className="relative py-20 px-6 overflow-hidden">
            <div className="absolute top-[60%] right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />

            {/* Lightbox */}
            {lightbox && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 z-[9999] bg-black/92 flex items-center justify-center p-6"
                    onClick={() => setLightbox(null)}
                >
                    <motion.img
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", damping: 20 }}
                        src={lightbox}
                        alt="Certificate"
                        className="max-w-4xl w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                    <button
                        className="absolute top-6 right-8 text-white/50 hover:text-white text-5xl font-thin transition-colors leading-none"
                        onClick={() => setLightbox(null)}
                    >
                        ×
                    </button>
                </motion.div>
            )}

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
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
                    <p className="mt-3 text-muted-foreground text-sm">
                        Click any certificate to view full size
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert: any, index: number) => {
                        const hasBadge = !!cert.badge;
                        const hasImage = !!cert.image;

                        return (
                            <motion.div
                                key={cert.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -6 }}
                                transition={{ duration: 0.3, delay: index * 0.06 }}
                                className="group relative rounded-[24px] bg-card border border-border backdrop-blur-xl hover:border-primary/40 transition-all duration-300 overflow-hidden flex flex-col shadow-xl shadow-primary/5"
                            >
                                {/* Card image area */}
                                <div
                                    className={`relative border-b border-white/5 overflow-hidden ${hasImage ? "h-44 cursor-pointer" : "h-28 flex items-center justify-center bg-[#0D0D0F]"}`}
                                    onClick={() => hasImage && setLightbox(cert.image)}
                                >
                                    {hasImage ? (
                                        <>
                                            {/* Full cert as background */}
                                            <img
                                                src={cert.image}
                                                alt={cert.title}
                                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                            />
                                            {/* Dark overlay */}
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

                                            {/* Badge medal overlay (top-right) */}
                                            {hasBadge && (
                                                <div className="absolute top-3 right-3 w-16 h-16 drop-shadow-2xl">
                                                    <img
                                                        src={cert.badge}
                                                        alt={`${cert.title} badge`}
                                                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                                                        onClick={(e) => { e.stopPropagation(); setLightbox(cert.badge); }}
                                                    />
                                                </div>
                                            )}

                                            {/* Zoom icon */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="bg-black/40 backdrop-blur-sm rounded-full p-2.5">
                                                    <ZoomIn className="w-5 h-5 text-white" />
                                                </div>
                                            </div>
                                        </>
                                    ) : hasBadge ? (
                                        /* Badge-only card — show badge centered */
                                        <div
                                            className="w-full h-28 flex items-center justify-center bg-[#0D0D0F] cursor-pointer"
                                            onClick={() => setLightbox(cert.badge)}
                                        >
                                            <img
                                                src={cert.badge}
                                                alt={`${cert.title} badge`}
                                                className="h-20 w-auto object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl"
                                            />
                                        </div>
                                    ) : (
                                        <Award className="w-14 h-14 text-primary/10 group-hover:text-primary/20 transition-colors duration-500" />
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-5 flex flex-col flex-1">
                                    {/* Issuer */}
                                    {cert.issuer && (
                                        <div className="flex items-center gap-1.5 mb-1.5">
                                            <Building2 className="w-3 h-3 text-primary/70 shrink-0" />
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-primary/70">
                                                {cert.issuer}
                                            </span>
                                        </div>
                                    )}

                                    {/* Title */}
                                    <h4 className="text-sm font-bold text-white mb-2.5 group-hover:text-primary transition-colors leading-snug">
                                        {cert.title}
                                    </h4>

                                    {/* Date */}
                                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-3">
                                        <Calendar className="w-3 h-3 shrink-0" />
                                        {cert.period}
                                    </div>

                                    {/* Description */}
                                    <p className="text-[#9CA3AF] text-xs leading-relaxed line-clamp-2 mt-auto">
                                        {cert.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
