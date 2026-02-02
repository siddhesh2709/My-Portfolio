import { motion } from "motion/react";
import {
  Code,
  Database,
  Layout,
  Server,
  Smartphone,
  Cpu,
  Cloud,
  GitBranch,
  Palette,
  Zap,
} from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

const iconMap = {
  Code: Code,
  Layout: Layout,
  Server: Server,
  Database: Database,
  Cloud: Cloud,
  Palette: Palette,
  Smartphone: Smartphone,
  Cpu: Cpu,
  Zap: Zap,
  GitBranch: GitBranch,
};

const colorClasses = {
  purple: {
    bg: "from-purple-500/10 to-blue-500/10",
    border: "border-purple-500/20 hover:border-purple-500/40",
    text: "text-purple-400",
    bar: "from-purple-500 to-blue-500",
    glow: "shadow-purple-500/20",
  },
  blue: {
    bg: "from-blue-500/10 to-cyan-500/10",
    border: "border-blue-500/20 hover:border-blue-500/40",
    text: "text-blue-400",
    bar: "from-blue-500 to-cyan-500",
    glow: "shadow-blue-500/20",
  },
  cyan: {
    bg: "from-cyan-500/10 to-purple-500/10",
    border: "border-cyan-500/20 hover:border-cyan-500/40",
    text: "text-cyan-400",
    bar: "from-cyan-500 to-purple-500",
    glow: "shadow-cyan-500/20",
  },
  violet: {
    bg: "from-violet-500/10 to-indigo-500/10",
    border: "border-violet-500/20 hover:border-violet-500/40",
    text: "text-violet-400",
    bar: "from-violet-500 to-indigo-500",
    glow: "shadow-violet-500/20",
  },
};

export function Skills() {
  const { skillCategories, tools } = usePortfolio();

  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[150px]" />

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
            <span className="text-[#E5E7EB]">Skills & </span>
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const colors = colorClasses[category.color as keyof typeof colorClasses] || colorClasses.purple;
            const Icon = iconMap[category.iconName as keyof typeof iconMap] || Layout;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`h-full rounded-2xl bg-gradient-to-br ${colors.bg} backdrop-blur-xl border ${colors.border} p-5 hover:shadow-xl ${colors.glow} transition-all duration-300`}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colors.bg} border ${colors.border} flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${colors.text}`} />
                    </div>
                    <h3 className="text-xl font-bold text-[#E5E7EB]">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills with Progress Bars */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.id}>
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-sm text-[#E5E7EB]">{skill.name}</span>
                          <span className="text-xs text-[#9CA3AF]">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 + skillIndex * 0.1 }}
                            className={`h-full bg-gradient-to-r ${colors.bar} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Tools & Additional Skills */}
        {tools && tools.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-[#E5E7EB] mb-8">Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => {
                const Icon = iconMap[tool.iconName as keyof typeof iconMap] || Zap;
                return (
                  <motion.div
                    key={tool.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -4 }}
                    className="group"
                  >
                    <div className="px-6 py-4 rounded-2xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-purple-400 group-hover:text-cyan-400 transition-colors" />
                        <span className="text-[#E5E7EB] font-medium">{tool.name}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
