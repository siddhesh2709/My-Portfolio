import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";
import { usePortfolio } from "../context/PortfolioContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { personalInfo } = usePortfolio();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Systems", href: "#system-design" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[5000] transition-all duration-300 ${scrolled ? "py-3" : "py-5"
        }`}
    >
      <div className="container">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 border transition-colors ${scrolled
            ? "bg-background/70 border-border backdrop-blur"
            : "bg-transparent border-transparent"
            }`}
        >
          <a
            href="#hero"
            className="flex items-center gap-3 font-semibold tracking-tight"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
              setMobileMenuOpen(false);
            }}
          >
            <span className="inline-flex h-9 w-9 rounded-xl overflow-hidden ring-2 ring-primary/30 shrink-0">
              <img
                src={personalInfo.avatar || "/avatar/siddhesh-avhad.jpg"}
                alt={personalInfo.name}
                className="h-full w-full object-cover object-top"
              />
            </span>
            <span className="hidden sm:block">{personalInfo.name}</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3 pr-4 border-r border-white/10">
              <a
                href={personalInfo.links.github?.split("|")[0]}
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.links.linkedin?.split("|")[0]}
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <a
              href="#contact"
              className="btn-primary hidden sm:inline-flex"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact
            </a>

            <button className="md:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-6 right-6 mt-3 card p-4 space-y-1 backdrop-blur bg-background/80"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block rounded-xl px-3 py-3 text-sm font-medium text-foreground hover:bg-secondary"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                setMobileMenuOpen(false);
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary w-full mt-2"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              setMobileMenuOpen(false);
            }}
          >
            Contact
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}

