import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Twitter,
  Instagram,
  Youtube,
  Globe,
  MessageCircle,
  Facebook,
  Figma
} from "lucide-react";
import { useState, useEffect } from "react";
import { usePortfolio } from "../context/PortfolioContext";

const iconMap: Record<string, any> = {
  github: Github,
  linkedin: Linkedin,
  leetcode: Code2,
  twitter: Twitter,
  x: Twitter,
  instagram: Instagram,
  insta: Instagram,
  youtube: Youtube,
  portfolio: Globe,
  website: Globe,
  globe: Globe,
  discord: MessageCircle,
  whatsapp: MessageCircle,
  facebook: Facebook,
  figma: Figma
};

function SocialIcon({ link }: { link: any }) {
  const [error, setError] = useState(false);

  if (link.type === 'icon') {
    return <link.icon className="w-5 h-5" />;
  }

  if (error) {
    return <Globe className="w-5 h-5" />;
  }

  return (
    <div className="relative w-5 h-5">
      <div
        className="absolute inset-0 bg-current opacity-60 group-hover:opacity-100 transition-all duration-300"
        style={{
          maskImage: `url(${link.icon})`,
          WebkitMaskImage: `url(${link.icon})`,
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
        }}
      />
      {/* Hidden img to detect load errors */}
      <img
        src={link.icon}
        className="hidden"
        onError={() => setError(true)}
        alt=""
      />
    </div>
  );
}

export function Navbar() {
  const { personalInfo } = usePortfolio();

  const socialLinks = [
    { type: 'icon', icon: Mail, href: personalInfo.email ? `mailto:${personalInfo.email}` : '' },
    ...Object.entries(personalInfo.links).map(([key, value]) => {
      const parts = value.split('|');
      const href = parts[0];

      const normalizedKey = key.toLowerCase().trim();

      // Priority 1: Lucide Map
      if (iconMap[normalizedKey]) {
        return { type: 'icon', icon: iconMap[normalizedKey], href };
      }

      // Priority 2: Simple Icons
      const brandSlug = normalizedKey.replace(/\s+/g, '-');
      return {
        type: 'logo',
        icon: `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${brandSlug}.svg`,
        href
      };
    })
  ].filter(link => link.href && link.href !== "mailto:");

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#06080F]/80 backdrop-blur-xl border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-center items-center gap-6">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target={link.href.startsWith('http') ? "_blank" : undefined}
              rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="group w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 flex items-center justify-center text-[#9CA3AF] hover:text-[#E5E7EB] hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 shadow-xl overflow-hidden"
            >
              <SocialIcon link={link} />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
