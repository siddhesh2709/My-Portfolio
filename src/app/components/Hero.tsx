import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

export function Hero() {
  const { personalInfo } = usePortfolio();
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse delay-500" />
      </div>

      {/* Noise Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="text-[#E5E7EB]">Hi, I'm </span>
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
          <br />
          <span className="text-[#E5E7EB]">Full-Stack </span>
          <span className="bg-gradient-to-r from-magenta-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
            Developer
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-[#9CA3AF] max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          {personalInfo.profile}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 rounded-2xl overflow-hidden"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 opacity-100 group-hover:opacity-90 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
            <span className="relative z-10 flex items-center gap-2 text-white font-semibold">
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>

          {/* Secondary CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 rounded-2xl bg-transparent border-2 border-purple-500/30 hover:border-purple-500/60 text-[#E5E7EB] backdrop-blur-sm hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span className="flex items-center gap-2 font-semibold">
              Get In Touch
            </span>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
