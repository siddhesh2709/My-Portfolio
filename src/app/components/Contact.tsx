import { motion } from "motion/react";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { usePortfolio } from "../context/PortfolioContext";

export function Contact() {
  const { personalInfo } = usePortfolio();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-[#E5E7EB]">Let's Build </span>
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Something Amazing
            </span>
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-[#E5E7EB] mb-6">Get In Touch</h3>
              <p className="text-[#9CA3AF] leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            {/* Contact Cards */}
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-3xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-xl border border-purple-500/20 p-6 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#E5E7EB] mb-1">Email</h4>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-[#9CA3AF] hover:text-purple-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-cyan-500/20 p-6 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#E5E7EB] mb-1">Social</h4>
                  <div className="flex gap-3">
                    <a
                      href={personalInfo.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#9CA3AF] hover:text-cyan-400 transition-colors"
                    >
                      LinkedIn
                    </a>
                    <span className="text-[#9CA3AF]">•</span>
                    <a
                      href={personalInfo.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#9CA3AF] hover:text-cyan-400 transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#E5E7EB] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-purple-500/20 text-[#E5E7EB] placeholder-[#9CA3AF] focus:border-purple-500/40 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#E5E7EB] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-purple-500/20 text-[#E5E7EB] placeholder-[#9CA3AF] focus:border-purple-500/40 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#E5E7EB] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-purple-500/20 text-[#E5E7EB] placeholder-[#9CA3AF] focus:border-purple-500/40 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full px-8 py-4 rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 opacity-100 group-hover:opacity-90 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                <span className="relative z-10 flex items-center justify-center gap-2 text-white font-semibold">
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
