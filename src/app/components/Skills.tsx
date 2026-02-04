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
  black: {
    bg: "bg-primary/5 hover:bg-primary/10",
    border: "border-border hover:border-primary/40",
    text: "text-primary",
    bar: "bg-primary",
    glow: "shadow-primary/10",
  },
  dark: {
    bg: "bg-foreground/5 hover:bg-foreground/10",
    border: "border-border hover:border-foreground/40",
    text: "text-foreground",
    bar: "bg-foreground",
    glow: "shadow-foreground/10",
  },
  grey: {
    bg: "bg-muted-foreground/5 hover:bg-muted-foreground/10",
    border: "border-border hover:border-muted-foreground/40",
    text: "text-muted-foreground",
    bar: "bg-muted-foreground",
    glow: "shadow-muted-foreground/10",
  },
};

// Map old colors to monochromatic ones
const colorMap: Record<string, keyof typeof colorClasses> = {
  orange: 'black',
  purple: 'dark',
  blue: 'black',
  cyan: 'grey',
  violet: 'dark',
  indigo: 'black',
};

export function Skills() {
  const { skillCategories, tools } = usePortfolio();

  return (
    <section id="skills" className="relative py-20 px-6 overflow-hidden">
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
          <h2 className="text-3xl md:text-5xl font-bold mb-3 tracking-tight">
            <span className="text-foreground">Skills & </span>
            <span className="bg-gradient-to-r from-primary to-gradient-indigo bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const mappedColor = colorMap[category.color] || 'black';
            const colors = colorClasses[mappedColor];
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
                  className={`h-full rounded-[24px] ${colors.bg} backdrop-blur-xl border ${colors.border} p-6 hover:shadow-2xl transition-all duration-300 shadow-sm`}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center shadow-sm`}>
                      <Icon className={`w-5 h-5 ${colors.text}`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground tracking-tight">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills with Progress Bars */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.id}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-medium text-foreground/80">{skill.name}</span>
                          <span className="text-[10px] font-bold text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-1 bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 + skillIndex * 0.1 }}
                            className={`h-full ${colors.bar} rounded-full`}
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
            <h3 className="text-lg font-black uppercase tracking-widest text-primary/80 mb-8">Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
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
                    <div className="px-5 py-3 rounded-xl bg-card border border-border backdrop-blur-xl hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-primary group-hover:scale-110 transition-all" />
                        <span className="text-sm text-foreground/80 font-medium group-hover:text-primary transition-colors">{tool.name}</span>
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
