import { motion } from "motion/react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

export function Footer() {
  const { personalInfo } = usePortfolio();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: personalInfo.links.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.links.linkedin, label: "LinkedIn" },
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
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-transparent to-[#0B0F1A]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4 inline-block"
            >
              Portfolio
            </motion.div>
            <p className="text-[#9CA3AF] leading-relaxed mb-6">
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
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 flex items-center justify-center text-[#9CA3AF] hover:text-[#E5E7EB] hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#E5E7EB] mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 h-px bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Section */}
          <div>
            <h3 className="text-lg font-semibold text-[#E5E7EB] mb-4">Let's Connect</h3>
            <p className="text-[#9CA3AF] mb-6">
              Interested in working together? Drop me a message and let's create something amazing.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 text-[#E5E7EB] hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
            >
              Get In Touch
            </motion.a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#9CA3AF] text-sm flex items-center gap-1">
            © {currentYear} Built with <Heart className="w-4 h-4 text-purple-400 fill-purple-400" /> by Your Name
          </p>
          <div className="flex gap-6 text-sm text-[#9CA3AF]">
            <a href="#" className="hover:text-[#E5E7EB] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#E5E7EB] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
    </footer>
  );
}
