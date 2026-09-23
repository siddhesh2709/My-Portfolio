import { motion } from "motion/react";
import { Database, Layout, Server, Cloud, Layers, Cpu } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

const iconMap: Record<string, any> = {
  Frontend: Layout,
  Backend: Server,
  Databases: Database,
  "Cloud & DevOps": Cloud,
  "Core CS": Cpu,
  Tools: Layers,
};

export function Skills() {
  const { skillCategories, tools } = usePortfolio();

  return (
    <section id="skills" className="relative py-24 px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block"
          >
            Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Technical <span className="text-gradient">Arsenal</span>
          </motion.h2>
        </div>

        {/* Responsive 3-col grid — 5 cards display as 3+2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category: any, idx: number) => {
            const Icon = iconMap[category.title] || Layers;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="glass p-7 rounded-[28px] hover:border-primary/50 transition-all group"
              >
                <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold mb-5">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill: any) => (
                    <div key={skill.id} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-medium">
                        <span className="text-muted-foreground">{skill.name}</span>
                        <span className="text-primary">{skill.level}%</span>
                      </div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.4 }}
                          viewport={{ once: true }}
                          className="h-full bg-primary rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tools */}
        <div className="mt-16 pt-16 border-t border-white/5">
          <h3 className="text-center font-mono text-sm tracking-widest uppercase text-muted-foreground mb-10">
            Workflow &amp; Infrastructure Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool: any, i: number) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="glass px-6 py-3 rounded-2xl text-sm font-medium hover:bg-white/5 transition-colors cursor-default"
              >
                {tool.name}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
