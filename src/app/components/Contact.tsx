import { motion } from "motion/react";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { usePortfolio } from "../context/PortfolioContext";

export function Contact() {
  const { personalInfo, addMessage } = usePortfolio();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create new message
    const newMessage = {
      id: Math.random().toString(36).substr(2, 9),
      name: formData.name,
      email: formData.email,
      message: formData.message,
      timestamp: new Date().toISOString(),
      read: false
    };

    // Save message
    addMessage(newMessage);

    // Clear form and show success
    setFormData({ name: "", email: "", message: "" });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-3 tracking-tight">
            <span className="text-foreground">Let's Build </span>
            <span className="bg-gradient-to-r from-primary to-gradient-indigo bg-clip-text text-transparent">
              Something Amazing
            </span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Connect & Reach</h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            {/* Contact Cards */}
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-[24px] bg-card border border-border p-6 hover:border-primary/30 transition-all duration-300 shadow-sm"
            >
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground mb-2">Email Me</h4>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-xl font-bold text-foreground hover:text-primary transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-[24px] bg-card border border-border p-6 hover:border-primary/30 transition-all duration-300 shadow-sm"
            >
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-indigo/10 border border-gradient-indigo/20 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-gradient-indigo" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground mb-2">Social Networking</h4>
                  <div className="flex gap-4">
                    <a
                      href={personalInfo.links.linkedin?.split('|')[0]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-foreground hover:text-primary transition-colors"
                    >
                      LinkedIn
                    </a>
                    <span className="text-border font-bold">/</span>
                    <a
                      href={personalInfo.links.github?.split('|')[0]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-foreground hover:text-primary transition-colors"
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
            className="rounded-[24px] bg-card border border-border p-6 md:p-8 shadow-xl shadow-primary/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-4 focus:ring-primary/5 transition-all text-sm"
                  placeholder="Siddhesh Avhad"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-4 focus:ring-primary/5 transition-all text-sm"
                  placeholder="siddhesh@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-5 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-4 focus:ring-primary/5 transition-all resize-none text-sm"
                  placeholder="Let's talk about your vision..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full px-8 py-4 rounded-xl overflow-hidden bg-primary shadow-lg shadow-primary/25 hover:bg-gradient-indigo transition-colors"
              >
                <span className="relative z-10 flex items-center justify-center gap-3 text-primary-foreground font-black uppercase tracking-[0.2em] text-sm">
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center p-4 rounded-2xl bg-green-500/10 border border-green-500/20"
                >
                  <p className="text-green-600 font-bold uppercase tracking-widest text-xs tracking-widest">✓ Message sent successfully!</p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
