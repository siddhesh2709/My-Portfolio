import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

export function Hero() {
  const { personalInfo } = usePortfolio();
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Mesh */}
      <div className="absolute inset-0">
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px]" />
      </div>

      {/* Noise Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-5 leading-[1.1] tracking-tight">
              <span className="text-foreground block">Hi, I'm</span>
              <span className="bg-gradient-to-r from-primary via-gradient-indigo to-gradient-purple bg-clip-text text-transparent block">
                {personalInfo.name}
              </span>
              <span className="text-foreground/90 block text-3xl md:text-5xl lg:text-6xl mt-2">
                Full-Stack Developer with Cloud (AWS)
              </span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0 mb-10 leading-relaxed">
              {personalInfo.profile}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-3 rounded-[18px] overflow-hidden shadow-lg shadow-primary/20"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                <div className="absolute inset-0 bg-primary transition-transform duration-500 group-hover:scale-110" />
                <span className="relative z-10 flex items-center gap-2 text-primary-foreground font-black uppercase tracking-widest text-sm">
                  View My Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-3 rounded-[18px] bg-secondary border border-border text-foreground backdrop-blur-sm hover:border-primary/50 hover:bg-background transition-all duration-300 shadow-sm"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span className="flex items-center gap-2 font-black uppercase tracking-widest text-sm">
                  Get In Touch
                </span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Profile Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex-shrink-0"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Decorative Background Rings */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-gradient-purple/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -inset-4 bg-gradient-to-bl from-gradient-indigo/10 to-transparent rounded-full blur-xl" />

            {/* The Image Container */}
            <div className="relative w-full h-full rounded-full border-4 border-background shadow-2xl overflow-hidden z-10">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
              {/* Subtle Overlay to match theme */}
              <div className="absolute inset-0 bg-primary/5" />
            </div>


          </div>
        </motion.div>
      </div>
    </section >
  );
}
