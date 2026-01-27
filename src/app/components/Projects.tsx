import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { usePortfolio } from "../context/PortfolioContext";

const projectGradients = [
  "from-purple-500 to-blue-500",
  "from-cyan-500 to-blue-500",
  "from-magenta-500 to-violet-500",
  "from-violet-500 to-indigo-500",
];

export function Projects() {
  const { projects } = usePortfolio();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-32 px-6 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in building modern, scalable applications
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Glassmorphic Card */}
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative h-full rounded-3xl bg-gradient-to-br from-[#11162A]/80 to-[#0E1220]/80 backdrop-blur-xl border border-white/10 overflow-hidden hover:border-purple-500/30 transition-all duration-300"
              >
                {/* Gradient Glow Effect */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${project.gradient} blur-xl -z-10`}
                  style={{ transform: "scale(1.1)" }}
                />

                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-[#0B0F1A]/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </motion.a>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-[#E5E7EB] mb-2 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#9CA3AF] mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2.5 py-1 rounded-full text-xs bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 text-[#9CA3AF] hover:border-purple-500/40 hover:text-[#E5E7EB] transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2.5 py-1 rounded-full text-xs bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 text-[#9CA3AF]">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Gradient Line */}
                <div className={`h-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}