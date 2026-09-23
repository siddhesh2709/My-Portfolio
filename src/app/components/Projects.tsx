import { motion } from "motion/react";
import { ExternalLink, Github, Code2, Cpu, Globe, Zap } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

export function Projects() {
  const { projects } = usePortfolio();

  return (
    <section id="projects" className="relative py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-20">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block"
          >
            Proof of Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Engineering <span className="text-gradient">Case Studies</span>
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: any, index: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[#050505] border border-white/5 rounded-none overflow-hidden hover:border-primary/40 transition-all duration-500 flex flex-col h-full"
            >
              {/* Technical Header */}
              <div className="px-6 py-3 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                <span className="font-mono text-[9px] uppercase tracking-widest text-white/30">System_ID: {project.id.slice(0, 8)}</span>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/20" />
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>
              </div>

              {/* Image Preview */}
              <div className="relative aspect-[16/9] overflow-hidden transition-all duration-700">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-30 transition-opacity`} />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90" />

                {/* Status Overlay */}
                <div className="absolute top-4 left-4">
                  <span className="glass px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-white/60 border border-white/10">v.1.0_deployed</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-6">
                  <h3 className="text-2xl font-black mb-2 group-hover:text-primary transition-colors tracking-tight uppercase leading-none">{project.title}</h3>
                  <p className="text-[10px] text-primary/70 font-black uppercase tracking-[0.3em] font-mono">{project.subtitle}</p>
                </div>

                <p className="text-sm text-white/50 line-clamp-3 mb-8 flex-grow leading-relaxed font-light">
                  {project.problemStatement || project.description}
                </p>

                {/* Actions & Tags */}
                <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                  <div className="flex gap-4">
                    <a href={project.github} className="text-white/40 hover:text-white transition-colors" title="Source">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.link} className="text-white/40 hover:text-primary transition-colors" title="Live">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <div className="flex gap-2">
                    {project.tags.slice(0, 2).map((tag: string, i: number) => (
                      <span key={i} className="text-[9px] font-mono text-white/30 uppercase border border-white/5 px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
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
