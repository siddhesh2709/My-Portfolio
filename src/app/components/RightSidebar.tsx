import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Home, User, Briefcase, Code, Mail, FolderOpen, GraduationCap, Award, Trophy, ChevronRight, ChevronLeft } from "lucide-react";

const sections = [
  { id: "hero", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Code },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "certifications", label: "Certifications", icon: Award },
  { id: "achievements", label: "Achievements", icon: Trophy },
  { id: "contact", label: "Contact", icon: Mail },
];

export function RightSidebar({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (val: boolean) => void }) {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
      {/* Clean Toggle Arrow - Positioned as sibling for perfect clickability */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -left-4 top-4 w-8 h-8 rounded-full bg-white/5 backdrop-blur-3xl border border-white/10 flex items-center justify-center text-purple-400 hover:text-purple-300 hover:bg-white/10 transition-all z-50 cursor-pointer"
        title={isOpen ? "Collapse Sidebar" : "Expand Sidebar"}
      >
        {isOpen ? <ChevronRight className="w-5 h-5 pointer-events-none" /> : <ChevronLeft className="w-5 h-5 pointer-events-none" />}
      </button>

      <motion.div
        initial={false}
        animate={{ width: isOpen ? "220px" : "74px" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="rounded-[2rem] bg-[#11162A]/60 backdrop-blur-xl border border-purple-500/20 p-4 shadow-2xl shadow-purple-500/10 overflow-hidden"
      >
        <div className="space-y-1.5 mt-2">
          {sections.map((section, index) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;

            return (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                whileHover={{ scale: 1.05, x: isOpen ? -8 : 0 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative w-full flex items-center gap-3 px-2 py-2 rounded-xl transition-all duration-300 ${isActive
                  ? "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30"
                  : "hover:bg-white/5"
                  }`}
              >
                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-r-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                {/* Icon */}
                <div
                  className={`w-9 h-9 shrink-0 rounded-lg flex items-center justify-center transition-all duration-300 ${isActive
                    ? "bg-gradient-to-br from-purple-500/30 to-cyan-500/30 border border-purple-500/40"
                    : "bg-white/5 group-hover:bg-white/10"
                    }`}
                >
                  <Icon
                    className={`w-4 h-4 transition-colors ${isActive ? "text-purple-400" : "text-[#9CA3AF] group-hover:text-[#E5E7EB]"
                      }`}
                  />
                </div>

                {/* Label */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="text-sm font-medium transition-colors text-[#9CA3AF] group-hover:text-[#E5E7EB] whitespace-nowrap"
                    >
                      {section.label}
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* Hover Glow */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isActive ? "" : "bg-gradient-to-r from-purple-500/10 to-cyan-500/10"
                    }`}
                />
              </motion.button>
            );
          })}
        </div>

        {/* Progress Indicator */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-4 pt-4 border-t border-white/10"
            >
              <div className="flex items-center gap-2 px-2">
                <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"
                    style={{
                      width: `${((sections.findIndex((s) => s.id === activeSection) + 1) / sections.length) * 100}%`,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <span className="text-xs text-[#9CA3AF] font-medium">
                  {sections.findIndex((s) => s.id === activeSection) + 1}/{sections.length}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
