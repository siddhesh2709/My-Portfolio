import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

const colorClasses = {
  purple: {
    dot: "bg-purple-500",
    line: "bg-purple-500/30",
    glow: "shadow-purple-500/20",
    border: "border-purple-500/20",
    gradient: "from-purple-500/10 to-blue-500/10",
  },
  blue: {
    dot: "bg-blue-500",
    line: "bg-blue-500/30",
    glow: "shadow-blue-500/20",
    border: "border-blue-500/20",
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  cyan: {
    dot: "bg-cyan-500",
    line: "bg-cyan-500/30",
    glow: "shadow-cyan-500/20",
    border: "border-cyan-500/20",
    gradient: "from-cyan-500/10 to-purple-500/10",
  },
  violet: {
    dot: "bg-violet-500",
    line: "bg-violet-500/30",
    glow: "shadow-violet-500/20",
    border: "border-violet-500/20",
    gradient: "from-violet-500/10 to-indigo-500/10",
  },
};

export function Experience() {
  const { experiences } = usePortfolio();
  return (
    <section id="experience" className="relative py-32 px-6 overflow-hidden">
      {/* Background Elements */}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-[#E5E7EB]">Work </span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
            My professional journey building innovative solutions
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/30 via-blue-500/30 to-violet-500/30" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const colors = colorClasses[exp.color as keyof typeof colorClasses];

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
                      className={`w-6 h-6 rounded-full ${colors.dot} shadow-lg ${colors.glow} border-4 border-[#0B0F1A]`}
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
                    <div className={`relative rounded-3xl bg-gradient-to-br ${colors.gradient} backdrop-blur-xl border ${colors.border} p-6 hover:border-opacity-40 transition-all duration-300 hover:shadow-xl ${colors.glow}`}>
                      {/* Period Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
                        <Calendar className="w-4 h-4 text-[#9CA3AF]" />
                        <span className="text-sm text-[#9CA3AF]">{exp.period}</span>
                      </div>

                      {/* Title and Company */}
                      <div className="flex items-start gap-3 mb-4">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${colors.gradient} border ${colors.border} flex items-center justify-center flex-shrink-0`}>
                          <Briefcase className="w-6 h-6 text-[#E5E7EB]" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-[#E5E7EB] mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-[#9CA3AF]">{exp.company}</p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-[#9CA3AF] mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div
                            key={achIndex}
                            className="flex items-start gap-2 text-sm text-[#9CA3AF]"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 mt-2 flex-shrink-0" />
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
