import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail, MapPin, GraduationCap, Cpu, Briefcase } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

export function Hero() {
  const { personalInfo } = usePortfolio();

  const stackBadges = ["MERN", "Spring Boot", "FastAPI", "AWS", "Docker", "PostgreSQL"];

  const infoCards = [
    {
      icon: MapPin,
      label: "Location",
      value: "Nashik, India",
      sub: undefined as string | undefined,
    },
    {
      icon: GraduationCap,
      label: "Education",
      value: "VIT · B.Tech CSE (Cloud & Automation)",
      sub: "2023 - 2027",
    },
    {
      icon: Cpu,
      label: "Core Stack",
      value: "React · Node · Spring Boot · FastAPI",
      sub: "AWS · Docker · PostgreSQL",
    },
    {
      icon: Briefcase,
      label: "Availability",
      value: "Open to Internships & Full-Time",
      sub: "Graduating May 2027",
    },
  ];

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[680px] max-h-[1000px] overflow-hidden bg-background flex flex-col justify-center"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-[0.025]" />
        <div className="absolute top-[-10%] left-[20%] h-[500px] w-[600px] rounded-full bg-primary/8 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[10%] h-[400px] w-[500px] rounded-full bg-accent/8 blur-[100px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/60" />
      </div>

      <div className="relative z-10 container w-full">
        <div className="grid items-center gap-8 lg:gap-12 lg:grid-cols-12">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 flex flex-col"
          >
            <motion.p
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="eyebrow"
            >
              Software Developer · Cloud Computing &amp; Automation
            </motion.p>

            <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02]">
              {personalInfo.name}
            </h1>

            {/* Accent underline */}
            <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-accent" />

            {/* Stack badges */}
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-sm font-semibold text-primary whitespace-nowrap">
                Full‑Stack Developer
              </span>
              {stackBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center rounded-full border border-border bg-secondary/80 px-3 py-1 text-sm text-muted-foreground whitespace-nowrap"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Bio */}
            <p className="mt-5 text-muted-foreground text-[15px] leading-relaxed max-w-[540px]">
              {personalInfo.profile}
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap gap-3">
              <button
                className="btn-primary"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </button>
              <button
                className="btn-secondary"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact Me
              </button>
            </div>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-4 text-muted-foreground">
              <a
                className="inline-flex items-center gap-2 text-sm hover:text-foreground transition-colors"
                href={personalInfo.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <span className="h-4 w-px bg-border" />
              <a
                className="inline-flex items-center gap-2 text-sm hover:text-foreground transition-colors"
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <span className="h-4 w-px bg-border" />
              <a
                className="inline-flex items-center gap-2 text-sm hover:text-foreground transition-colors"
                href={`mailto:${personalInfo.email}`}
              >
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
          </motion.div>

          {/* RIGHT — info cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-5 hidden lg:flex flex-col gap-3"
          >
            {infoCards.map(({ icon: Icon, label, value, sub }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card/60 backdrop-blur-sm px-5 py-4 hover:border-primary/30 transition-colors group"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/15 transition-colors">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</p>
                  <p className="mt-0.5 text-sm font-medium leading-snug">{value}</p>
                  {sub && <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-25"
      >
        <div className="w-5 h-9 border-2 border-slate-500 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-slate-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
