import { motion } from "motion/react";
import { Server, Shield, Zap, Globe } from "lucide-react";

export function SystemDesign() {
    const principles = [
        {
            icon: <Server className="w-6 h-6" />,
            title: "Scalability First",
            description: "Designing systems that grow with demand using microservices and load balancing."
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Security by Design",
            description: "Implementing JWT, OAuth 2.0, and VPC to ensure data integrity and privacy."
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Performance Focused",
            description: "Leveraging caching strategies and CDN edge locations for sub-second latency."
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: "Cloud Native",
            description: "Utilizing AWS services for resilient, self-healing architectures."
        }
    ];

    return (
        <section id="system-design" className="py-32 px-6 relative overflow-hidden bg-background">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none">
                <svg viewBox="0 0 800 600" className="w-full h-full">
                    <path d="M100 300 Q400 100 700 300 T 100 500" fill="none" stroke="currentColor" strokeWidth="1" />
                    <circle cx="100" cy="300" r="4" fill="currentColor" />
                    <circle cx="700" cy="300" r="4" fill="currentColor" />
                    <circle cx="400" cy="180" r="4" fill="currentColor" />
                </svg>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block"
                    >
                        Engineering Philosophy
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        System Design Thinking
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        I don't just write code. I design robust infrastructures that solve complex business problems at scale.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {principles.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="glass p-8 rounded-3xl hover:border-primary/50 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="mt-20 p-1 md:p-8 rounded-[40px] bg-gradient-to-tr from-primary/10 via-background to-accent/10 border border-border overflow-hidden"
                >
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="flex-1 w-full">
                            <div className="aspect-video glass rounded-3xl overflow-hidden relative group">
                                <div className="absolute inset-0 bg-grid opacity-20" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="flex gap-4">
                                            <div className="w-16 h-16 glass rounded-xl flex items-center justify-center font-mono text-xs">VPC</div>
                                            <div className="w-16 h-16 glass rounded-xl flex items-center justify-center font-mono text-xs">EC2</div>
                                            <div className="w-16 h-16 glass rounded-xl flex items-center justify-center font-mono text-xs">RDS</div>
                                        </div>
                                        <div className="w-32 h-1 bg-primary/30 rounded-full" />
                                        <div className="w-20 h-20 glass rounded-full flex items-center justify-center font-mono text-xs border-primary/50 border-2">Gateway</div>
                                    </div>
                                </div>
                                <div className="absolute bottom-4 left-4 font-mono text-[10px] text-muted-foreground opacity-50">
                                    ARCH_DIAGRAM_V2.SVG
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-3xl font-bold mb-6">Cloud Native Expertise</h3>
                            <p className="text-muted-foreground mb-8 text-lg">
                                My approach to building is <strong>Cloud-First</strong>. By leveraging AWS's robust ecosystem, I ensure high availability with multi-AZ deployments and optimized S3 storage solutions.
                            </p>
                            <ul className="space-y-4">
                                {['Infrastructure as Code', 'Serverless Functions', 'Event-Driven Architecture', 'Container Orchestration'].map((text, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        {text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
