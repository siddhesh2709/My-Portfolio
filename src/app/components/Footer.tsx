import { motion } from "motion/react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

export function Footer() {
  const { personalInfo } = usePortfolio();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: personalInfo.links.github?.split('|')[0], label: "GitHub" },
    { icon: Linkedin, href: personalInfo.links.linkedin?.split('|')[0], label: "LinkedIn" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
  ];

  const links = [
    { title: "About", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Experience", href: "#experience" },
    { title: "Education", href: "#education" },
    { title: "Skills", href: "#skills" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold bg-gradient-to-r from-primary to-gradient-indigo bg-clip-text text-transparent mb-3 inline-block"
            >
              {personalInfo.name.split(' ')[0]}
            </motion.div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Building exceptional digital experiences with modern technologies and creative solutions.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold text-foreground mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Section */}
          <div>
            <h3 className="text-base font-semibold text-foreground mb-3">Let's Connect</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Interested in working together? Drop me a message and let's create something amazing.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-2.5 rounded-[15px] bg-primary text-primary-foreground font-bold hover:bg-gradient-indigo transition-all duration-300 shadow-lg shadow-primary/20 text-sm"
            >
              Get In Touch
            </motion.a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © {currentYear} Built with <Heart className="w-4 h-4 text-primary fill-primary" /> by {personalInfo.name}
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
