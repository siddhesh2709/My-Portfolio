import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

const colorClasses = {
  indigo: {
    dot: "bg-primary",
    line: "bg-primary/30",
    glow: "shadow-primary/20",
    border: "border-primary/20",
    gradient: "from-primary/10 to-gradient-indigo/5",
  },
  violet: {
    dot: "bg-gradient-purple",
    line: "bg-gradient-purple/30",
    glow: "shadow-gradient-purple/20",
    border: "border-gradient-purple/20",
    gradient: "from-gradient-purple/10 to-gradient-magenta/5",
  },
  blue: {
    dot: "bg-gradient-blue",
    line: "bg-gradient-blue/30",
    glow: "shadow-gradient-blue/20",
    border: "border-gradient-blue/20",
    gradient: "from-gradient-blue/10 to-gradient-cyan/5",
  },
  cyan: {
    dot: "bg-gradient-cyan",
    line: "bg-gradient-cyan/30",
    glow: "shadow-gradient-cyan/20",
    border: "border-gradient-cyan/20",
    gradient: "from-gradient-cyan/10 to-gradient-blue/5",
  },
};

const colorMap: Record<string, keyof typeof colorClasses> = {
  orange: 'indigo',
  purple: 'violet',
  blue: 'blue',
  cyan: 'cyan',
  violet: 'violet',
};

export function Experience() {
  const { experiences } = usePortfolio();
  return (
    <section id="experience" className="relative py-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-[20%] left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-3 tracking-tight">
            <span className="text-foreground">Professional </span>
            <span className="bg-gradient-to-r from-primary to-gradient-indigo bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            My professional journey building innovative solutions
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-border via-primary/30 to-border" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const mappedColor = colorMap[exp.color] || 'indigo';
              const colors = colorClasses[mappedColor];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                    } flex-col md:gap-8`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-20">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`w-6 h-6 rounded-full ${colors.dot} shadow-lg ${colors.glow} border-4 border-background`}
                    >
                      <div className={`w-full h-full rounded-full ${colors.dot} animate-ping opacity-30`} />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    className={`w-full md:w-[calc(50%-3rem)] ${isEven ? "md:ml-0" : "md:mr-0"
                      } ml-20 md:ml-0`}
                  >
                    <div className={`relative rounded-[24px] bg-card backdrop-blur-xl border border-border p-6 md:p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl shadow-sm ${colors.glow}`}>
                      {/* Period Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border mb-4">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{exp.period}</span>
                      </div>

                      {/* Title and Company */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0`}>
                          <Briefcase className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-0.5 tracking-tight">
                            {exp.title}
                          </h3>
                          <p className="text-muted-foreground font-medium">{exp.company}</p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div
                            key={achIndex}
                            className="flex items-start gap-3 text-sm text-muted-foreground"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
