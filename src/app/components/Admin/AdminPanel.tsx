import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { motion, AnimatePresence } from 'framer-motion';
import {
    User,
    Briefcase,
    GraduationCap,
    Award,
    Code,
    Plus,
    Trash2,
    RefreshCcw,
    FolderOpen,
    LogOut,
    ChevronRight,
    ChevronLeft,
    X,
    Check,
    Layers,
    Wrench,
    Zap,
    Layout,
    Server,
    Database,
    Cloud,
    Palette,
    Smartphone,
    Cpu,
    GitBranch,
    Trophy
} from 'lucide-react';
import { Link } from 'react-router-dom';

const generateId = () => Math.random().toString(36).substr(2, 9);

const iconOptions = {
    Code: Code,
    Layout: Layout,
    Server: Server,
    Database: Database,
    Cloud: Cloud,
    Palette: Palette,
    Smartphone: Smartphone,
    Cpu: Cpu,
    Zap: Zap,
    GitBranch: GitBranch
};
export function AdminPanel() {
    const portfolio = usePortfolio();
    const [activeTab, setActiveTab] = useState('profile');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === '27@27') {
            setIsAuthenticated(true);
            setError('');
        } else {
            setError('Incorrect password. Please try again.');
            setPassword('');
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-[#06080F] flex items-center justify-center p-6 font-sans">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-md"
                >
                    <div className="p-10 rounded-[2.5rem] bg-[#0B0F1A] border border-white/10 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 blur-[80px]" />

                        <div className="relative z-10">
                            <div className="flex items-center justify-center mb-8">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
                                    <Code className="w-8 h-8 text-white" />
                                </div>
                            </div>

                            <h1 className="text-3xl font-bold text-white text-center mb-2">Admin Portal</h1>
                            <p className="text-[#9CA3AF] text-center mb-8 text-sm">Enter your password to continue</p>

                            <form onSubmit={handleLogin} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-[#9CA3AF] uppercase tracking-widest pl-1">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full px-6 py-4 rounded-2xl bg-[#06080F] border border-white/10 text-white focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/5 focus:outline-none transition-all"
                                        placeholder="Enter password..."
                                        autoFocus
                                    />
                                    {error && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -4 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-red-400 text-sm pl-1 font-medium"
                                        >
                                            {error}
                                        </motion.p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold hover:shadow-lg hover:shadow-purple-500/20 transition-all"
                                >
                                    Access Admin Panel
                                </button>
                            </form>

                            <Link
                                to="/"
                                className="mt-6 flex items-center justify-center gap-2 text-[#9CA3AF] hover:text-white transition-colors text-sm"
                            >
                                <ChevronLeft className="w-4 h-4" />
                                Back to Portfolio
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#06080F] text-[#E5E7EB] flex font-sans overflow-hidden">
            {/* Sidebar */}
            <motion.aside
                initial={false}
                animate={{ width: isSidebarOpen ? 288 : 88 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-[#0B0F1A] border-r border-white/5 flex flex-col sticky top-0 h-screen z-50 group/sidebar"
            >
                {/* Toggle Button */}
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="absolute -right-3 top-12 w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center shadow-lg shadow-purple-500/20 hover:scale-110 transition-transform z-[60]"
                >
                    {isSidebarOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>

                <div className="p-4 overflow-hidden">
                    <div className="flex items-center gap-3 mb-1">
                        <div className="w-9 h-9 shrink-0 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
                            <Code className="w-5 h-5 text-white" />
                        </div>
                        <AnimatePresence>
                            {isSidebarOpen && (
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    className="whitespace-nowrap"
                                >
                                    <h1 className="text-lg font-bold text-white tracking-tight">
                                        Admin Portal
                                    </h1>
                                    <p className="text-[9px] text-[#9CA3AF] font-medium uppercase tracking-[0.2em]">Management</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                <nav className="flex-1 px-3 space-y-0.5 overflow-y-auto overflow-x-hidden pt-2 border-t border-white/5">
                    {[
                        { id: 'profile', label: 'Profile Settings', icon: User },
                        { id: 'skills', label: 'Technical Skills', icon: Layers },
                        { id: 'experience', label: 'Work History', icon: Briefcase },
                        { id: 'projects', label: 'Project Gallery', icon: FolderOpen },
                        { id: 'education', label: 'Academic Path', icon: GraduationCap },
                        { id: 'certificates', label: 'Certifications', icon: Award },
                        { id: 'achievements', label: 'Achievements', icon: Trophy },
                        { id: 'technologies', label: 'Tools & Badges', icon: Wrench },
                    ].map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full flex items-center gap-4 px-4 py-2.5 rounded-xl transition-all duration-300 relative group ${isActive
                                    ? "bg-gradient-to-r from-purple-500/10 to-cyan-500/10 text-white border border-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.1)]"
                                    : "text-[#9CA3AF] hover:text-[#E5E7EB] hover:bg-white/5"
                                    }`}
                            >
                                <Icon className={`w-5 h-5 shrink-0 ${isActive ? "text-purple-400" : ""}`} />
                                <AnimatePresence>
                                    {isSidebarOpen && (
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="font-bold text-sm whitespace-nowrap"
                                        >
                                            {tab.label}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                                {isActive && isSidebarOpen && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_#A855F7]" />}
                            </button>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-white/5 space-y-3">
                    <button
                        onClick={() => {
                            if (window.confirm("Reset all data to default values? This cannot be undone.")) {
                                portfolio.resetToDefault();
                            }
                        }}
                        className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl bg-red-500/5 text-red-500/80 border border-red-500/10 hover:bg-red-500/20 hover:text-red-500 hover:border-red-500/30 transition-all font-black text-[10px] uppercase tracking-widest ${!isSidebarOpen && 'justify-center'}`}
                        title="Reset Data"
                    >
                        <RefreshCcw className="w-5 h-5 shrink-0" />
                        {isSidebarOpen && <span className="whitespace-nowrap">Reset Data</span>}
                    </button>
                    <Link
                        to="/"
                        className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl bg-white/5 text-white/80 border border-white/10 hover:bg-white/10 hover:text-white hover:border-white/30 transition-all font-black text-[10px] uppercase tracking-widest ${!isSidebarOpen && 'justify-center'}`}
                        title="View Site"
                    >
                        <LogOut className="w-5 h-5 shrink-0" />
                        {isSidebarOpen && <span className="whitespace-nowrap">View Site</span>}
                    </Link>
                </div>
            </motion.aside>

            {/* Content Area */}
            <main className="flex-1 h-screen overflow-y-auto bg-[#06080F]">
                <div className="max-w-5xl mx-auto p-12">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            {activeTab === 'profile' && <ProfileEditor />}
                            {activeTab !== 'profile' && <DataListEditor type={activeTab as any} />}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
}

function ProfileEditor() {
    const { personalInfo, updatePersonalInfo } = usePortfolio();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newLink, setNewLink] = useState({ platform: '', appUrl: '', accountUrl: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            updatePersonalInfo({
                ...personalInfo,
                //@ts-ignore
                [parent]: { ...personalInfo[parent], [child]: value }
            });
        } else {
            updatePersonalInfo({ ...personalInfo, [name]: value });
        }
    };

    const handleAddLink = () => {
        setIsModalOpen(true);
    };

    const confirmAddLink = () => {
        const platform = newLink.platform.trim();
        if (platform && newLink.accountUrl) {
            // Encode appUrl into the value if provided
            const value = newLink.appUrl ? `${newLink.accountUrl}|${newLink.appUrl}` : newLink.accountUrl;

            updatePersonalInfo({
                ...personalInfo,
                links: { ...personalInfo.links, [platform]: value }
            });
            setNewLink({ platform: '', appUrl: '', accountUrl: '' });
            setIsModalOpen(false);
        }
    };

    const handleDeleteLink = (key: string) => {
        if (window.confirm(`Remove ${key} link?`)) {
            const newLinks = { ...personalInfo.links };
            delete newLinks[key];
            updatePersonalInfo({ ...personalInfo, links: newLinks });
        }
    };

    return (
        <div className="grid gap-8">
            <section className="p-10 rounded-[2.5rem] bg-[#0B0F1A] border border-white/5 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 blur-[80px]" />
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                    <User className="text-purple-400 w-6 h-6" />
                    Core Identity
                </h3>
                <div className="grid grid-cols-2 gap-6 relative z-10">
                    <FormField label="Full Name" name="name" value={personalInfo.name} onChange={handleChange} />
                    <FormField label="Professional Title" name="title" value={personalInfo.title} onChange={handleChange} />
                    <div className="col-span-2 space-y-2">
                        <label className="text-sm font-bold text-[#9CA3AF] uppercase tracking-widest pl-1">Professional Biography</label>
                        <textarea
                            name="profile"
                            value={personalInfo.profile}
                            onChange={handleChange}
                            className="w-full min-h-[160px] px-6 py-4 rounded-2xl bg-[#06080F] border border-white/10 text-white focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/5 focus:outline-none transition-all resize-none leading-relaxed"
                            placeholder="Tell your professional story..."
                        />
                    </div>
                </div>
            </section>

            <section className="p-10 rounded-[2.5rem] bg-[#0B0F1A] border border-white/5 shadow-2xl">
                <div className="flex justify-between items-center mb-8">
                    <h3 className="text-2xl font-bold flex items-center gap-3 text-white">
                        <FolderOpen className="text-cyan-400 w-6 h-6" />
                        Connect & Reach
                    </h3>
                    <button
                        onClick={handleAddLink}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 hover:bg-cyan-400/20 transition-all font-bold text-xs uppercase tracking-widest"
                    >
                        <Plus className="w-4 h-4" />
                        Add Link
                    </button>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <FormField label="Email Contact" name="email" value={personalInfo.email} onChange={handleChange} />
                    <FormField label="Global Location" name="location" value={personalInfo.location} onChange={handleChange} />

                    {Object.entries(personalInfo.links).map(([key, value]) => (
                        <div key={key} className="relative group/link">
                            <FormField
                                label={`${key} URL`}
                                name={`links.${key}`}
                                value={value.split('|')[0]}
                                onChange={handleChange}
                            />
                            <button
                                onClick={() => handleDeleteLink(key)}
                                className="absolute top-0 right-0 p-2 text-red-400/50 hover:text-red-400 opacity-0 group-hover/link:opacity-100 transition-opacity"
                            >
                                <Trash2 className="w-3 h-3" />
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Custom Modal for Adding Links */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-6"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="w-full max-w-lg bg-[#0B0F1A] border border-white/10 rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px]" />

                            <div className="flex justify-between items-center mb-8">
                                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                    <Plus className="text-cyan-400 w-6 h-6" />
                                    New Connection
                                </h3>
                                <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-white/5 rounded-xl transition-all">
                                    <X className="w-6 h-6 text-[#9CA3AF]" />
                                </button>
                            </div>

                            <div className="space-y-6 relative z-10">
                                <FormField
                                    label="Platform Name"
                                    placeholder="e.g. LinkedIn, Twitter, My Blog"
                                    value={newLink.platform}
                                    onChange={(e: any) => setNewLink({ ...newLink, platform: e.target.value })}
                                />
                                <FormField
                                    label="App Website (For Logo Fetching)"
                                    placeholder="e.g. https://linkedin.com (Optional)"
                                    value={newLink.appUrl}
                                    onChange={(e: any) => setNewLink({ ...newLink, appUrl: e.target.value })}
                                />
                                <FormField
                                    label="Your Account/Profile URL"
                                    placeholder="https://..."
                                    value={newLink.accountUrl}
                                    onChange={(e: any) => setNewLink({ ...newLink, accountUrl: e.target.value })}
                                />

                                <div className="pt-4 flex gap-4">
                                    <button
                                        onClick={() => setIsModalOpen(false)}
                                        className="flex-1 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all font-sans"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={confirmAddLink}
                                        className="flex-1 px-6 py-4 rounded-2xl bg-cyan-500 text-white font-black hover:bg-cyan-600 transition-all font-sans shadow-lg shadow-cyan-500/20"
                                    >
                                        Create Link
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function FormField({ label, name, value, onChange, placeholder, type = "text" }: any) {
    return (
        <div className="space-y-2">
            <label className="text-xs font-bold text-[#9CA3AF] uppercase tracking-widest pl-1">{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full px-6 py-4 rounded-2xl bg-[#06080F] border border-white/10 text-white focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/5 focus:outline-none transition-all"
            />
        </div>
    );
}

function DataListEditor({ type }: { type: 'projects' | 'experience' | 'education' | 'certificates' | 'skills' | 'technologies' | 'achievements' }) {
    const portfolio = usePortfolio();
    const [editingId, setEditingId] = useState<string | null>(null);

    const items = type === 'projects' ? portfolio.projects
        : type === 'experience' ? portfolio.experiences
            : type === 'education' ? portfolio.education
                : type === 'skills' ? portfolio.skillCategories
                    : type === 'technologies' ? portfolio.tools
                        : type === 'achievements' ? portfolio.achievements
                            : portfolio.certifications;

    const handleDelete = (id: string) => {
        if (window.confirm("Delete this item permanently?")) {
            if (type === 'projects') portfolio.deleteProject(id);
            else if (type === 'experience') portfolio.deleteExperience(id);
            else if (type === 'education') portfolio.deleteEducation(id);
            else if (type === 'skills') portfolio.deleteSkillCategory(id);
            else if (type === 'technologies') portfolio.deleteTool(id);
            else if (type === 'achievements') portfolio.deleteAchievement(id);
            else portfolio.deleteCertification(id);
        }
    };

    const handleAdd = () => {
        const nextOrder = items.length > 0 ? (type !== 'technologies' ? Math.max(...items.map((i: any) => i.order)) + 1 : 1) : 1;
        const newId = generateId();

        if (type === 'projects') {
            portfolio.addProject({
                id: newId,
                title: "New Project",
                subtitle: "Brief Overview",
                description: "Deep dive into what this project achieves...",
                tags: ["React", "Cloud"],
                gradient: "from-purple-500 to-indigo-500",
                link: "#",
                github: "#",
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80\u0026w=1000\u0026auto=format\u0026fit=crop",
                order: nextOrder
            });
        } else if (type === 'experience') {
            portfolio.addExperience({
                id: newId,
                title: "New Role",
                company: "Innovators Inc.",
                period: "2024 - Present",
                description: "Describe your impact and responsibilities...",
                achievements: ["Successfully led development of X", "Improved Y by 20%"],
                color: "purple",
                order: nextOrder
            });
        } else if (type === 'skills') {
            portfolio.addSkillCategory({
                id: newId,
                title: "New Category",
                iconName: "Layout",
                skills: [],
                color: "purple",
                order: nextOrder
            });
        } else if (type === 'technologies') {
            portfolio.addTool({
                id: newId,
                name: "New Tool",
                iconName: "Code"
            });
        } else if (type === 'education') {
            portfolio.addEducation({
                id: newId,
                institution: "University Name",
                degree: "Degree / Course",
                period: "2020 - 2024",
                score: "4.0",
                scoreType: "CGPA",
                order: nextOrder
            });
        } else if (type === 'achievements') {
            portfolio.addAchievement({
                id: newId,
                title: "New Achievement",
                awarder: "University / Org",
                date: "2024",
                description: "Recognition details...",
                order: nextOrder
            });
        } else {
            portfolio.addCertification({
                id: newId,
                title: "New Certificate",
                period: "2024",
                description: "Credential verification details...",
                order: nextOrder
            });
        }
        setEditingId(newId);
    };

    const updateItemOrder = (id: string, requestedOrder: number) => {
        const targetOrder = Math.max(1, requestedOrder);
        const itemToMove = items.find((i: any) => i.id === id);
        if (!itemToMove) return;

        // Reactive Reordering Logic
        let otherItems = items.filter((i: any) => i.id !== id).sort((a: any, b: any) => a.order - b.order);

        const updatedOthers = otherItems.map((i: any) => {
            if (i.order >= targetOrder) {
                return { ...i, order: i.order + 1 };
            }
            return i;
        });

        const updatedTarget = { ...itemToMove, order: targetOrder };
        const allUpdated = [...updatedOthers, updatedTarget].sort((a, b) => a.order - b.order);

        allUpdated.forEach((item, idx) => {
            const normalizedItem = { ...item, order: idx + 1 };
            if (type === 'projects') portfolio.updateProject(normalizedItem.id, normalizedItem);
            else if (type === 'experience') portfolio.updateExperience(normalizedItem.id, normalizedItem);
            else if (type === 'skills') portfolio.updateSkillCategory(normalizedItem.id, normalizedItem);
            else if (type === 'education') portfolio.updateEducation(normalizedItem.id, normalizedItem);
            else if (type === 'certificates') portfolio.updateCertification(normalizedItem.id, normalizedItem);
            else if (type === 'achievements') portfolio.updateAchievement(normalizedItem.id, normalizedItem);
        });
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-end">
                <button
                    onClick={handleAdd}
                    className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-[#06080F] font-black hover:bg-purple-400 hover:scale-105 transition-all shadow-xl shadow-purple-500/10"
                >
                    <Plus className="w-5 h-5" />
                    CREATE NEW
                </button>
            </div>

            <div className="grid gap-4">
                {items.map((item: any) => (
                    <div key={item.id} className="group relative">
                        {editingId === item.id ? (
                            <div className="p-8 rounded-3xl bg-[#0B0F1A] border-2 border-purple-500/50 shadow-2xl">
                                <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/5">
                                    <h4 className="text-xl font-bold text-white uppercase tracking-tight">Edit Detail</h4>
                                    <button onClick={() => setEditingId(null)} className="p-2 rounded-xl hover:bg-white/5 text-[#9CA3AF]">
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>
                                <div className="grid gap-6">
                                    {Object.keys(item).map((key) => {
                                        if (Array.isArray(item[key]) || key === 'id' || key === 'order') return null;

                                        const handleItemChange = (e: any) => {
                                            const updatedItem = { ...item, [key]: e.target.value };
                                            if (type === 'projects') portfolio.updateProject(item.id, updatedItem as any);
                                            else if (type === 'experience') portfolio.updateExperience(item.id, updatedItem as any);
                                            else if (type === 'skills') portfolio.updateSkillCategory(item.id, updatedItem as any);
                                            else if (type === 'technologies') portfolio.updateTool(item.id, updatedItem as any);
                                            else if (type === 'education') portfolio.updateEducation(item.id, updatedItem as any);
                                            else if (type === 'achievements') portfolio.updateAchievement(item.id, updatedItem as any);
                                            else portfolio.updateCertification(item.id, updatedItem as any);
                                        };

                                        if (key === 'scoreType') {
                                            return (
                                                <div key={key} className="space-y-2">
                                                    <label className="text-xs font-bold text-[#9CA3AF] uppercase tracking-widest pl-1">Score Type</label>
                                                    <select
                                                        value={item[key]}
                                                        onChange={handleItemChange}
                                                        className="w-full px-6 py-4 rounded-2xl bg-[#06080F] border border-white/10 text-white focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/5 focus:outline-none transition-all appearance-none cursor-pointer"
                                                    >
                                                        <option value="CGPA">CGPA</option>
                                                        <option value="Percentage">Percentage</option>
                                                    </select>
                                                </div>
                                            );
                                        }

                                        if (key === 'iconName') {
                                            return (
                                                <div key={key} className="space-y-2">
                                                    <label className="text-xs font-bold text-[#9CA3AF] uppercase tracking-widest pl-1">Icon Style</label>
                                                    <select
                                                        value={item[key]}
                                                        onChange={handleItemChange}
                                                        className="w-full px-6 py-4 rounded-2xl bg-[#06080F] border border-white/10 text-white focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/5 focus:outline-none transition-all appearance-none cursor-pointer"
                                                    >
                                                        {Object.keys(iconOptions).map(opt => (
                                                            <option key={opt} value={opt}>{opt}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            );
                                        }

                                        if (key === 'image') {
                                            return (
                                                <div key={key} className="space-y-4">
                                                    <FormField
                                                        label="Image URL"
                                                        value={item[key]}
                                                        onChange={handleItemChange}
                                                    />
                                                    {item[key] && (
                                                        <div className="w-full h-32 rounded-xl overflow-hidden border border-white/10">
                                                            <img src={item[key]} alt="Preview" className="w-full h-full object-cover" />
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        }

                                        if (key === 'gradient') {
                                            return (
                                                <FormField
                                                    key={key}
                                                    label="Gradient (e.g., from-purple-500 to-indigo-500)"
                                                    value={item[key]}
                                                    onChange={handleItemChange}
                                                />
                                            );
                                        }

                                        return (
                                            <FormField
                                                key={key}
                                                label={key.replace(/([A-Z])/g, ' $1').replace(/^./, (str: string) => str.toUpperCase())}
                                                value={item[key]}
                                                onChange={handleItemChange}
                                            />
                                        );
                                    })}

                                    {type === 'skills' && (
                                        <div className="mt-8 space-y-6">
                                            <div className="flex justify-between items-center">
                                                <h5 className="text-sm font-bold uppercase tracking-widest text-purple-400">Skills List</h5>
                                                <button
                                                    onClick={() => {
                                                        const name = window.prompt("Enter skill name:");
                                                        if (name) {
                                                            const newSkill = { id: generateId(), name, level: 80 };
                                                            portfolio.updateSkillCategory(item.id, {
                                                                ...item,
                                                                skills: [...item.skills, newSkill]
                                                            });
                                                        }
                                                    }}
                                                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 hover:bg-purple-500/20 transition-all text-xs font-bold"
                                                >
                                                    <Plus className="w-4 h-4" />
                                                    Add Skill
                                                </button>
                                            </div>
                                            <div className="grid gap-3">
                                                {item.skills.map((skill: any) => (
                                                    <div key={skill.id} className="flex items-center gap-4 bg-[#06080F] p-4 rounded-2xl border border-white/5">
                                                        <div className="flex-1">
                                                            <input
                                                                className="bg-transparent text-white font-bold w-full focus:outline-none"
                                                                value={skill.name}
                                                                onChange={(e) => {
                                                                    const updatedSkills = item.skills.map((s: any) =>
                                                                        s.id === skill.id ? { ...s, name: e.target.value } : s
                                                                    );
                                                                    portfolio.updateSkillCategory(item.id, { ...item, skills: updatedSkills });
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-xs font-bold text-[#9CA3AF] uppercase">Level</span>
                                                            <input
                                                                type="number"
                                                                className="w-12 bg-white/5 text-center text-white font-bold rounded-lg py-1 px-2 border border-white/10"
                                                                value={skill.level}
                                                                onChange={(e) => {
                                                                    const updatedSkills = item.skills.map((s: any) =>
                                                                        s.id === skill.id ? { ...s, level: parseInt(e.target.value) || 0 } : s
                                                                    );
                                                                    portfolio.updateSkillCategory(item.id, { ...item, skills: updatedSkills });
                                                                }}
                                                            />
                                                        </div>
                                                        <button
                                                            onClick={() => {
                                                                const updatedSkills = item.skills.filter((s: any) => s.id !== skill.id);
                                                                portfolio.updateSkillCategory(item.id, { ...item, skills: updatedSkills });
                                                            }}
                                                            className="p-2 text-red-400 hover:bg-red-400/10 rounded-xl transition-all"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <button
                                    onClick={() => setEditingId(null)}
                                    className="mt-8 w-full py-4 rounded-2xl bg-purple-500 text-white font-bold hover:bg-purple-600 transition-all flex items-center justify-center gap-2"
                                >
                                    <Check className="w-5 h-5" />
                                    Confirm Edits
                                </button>
                            </div>
                        ) : (
                            <div className="p-6 rounded-3xl bg-[#0B0F1A] border border-white/5 flex items-center justify-between hover:border-white/20 transition-all cursor-pointer group/card"
                                onClick={() => setEditingId(item.id)}>
                                <div className="flex items-center gap-6">
                                    {type !== 'technologies' && (
                                        <div
                                            className="flex flex-col items-center justify-center px-4 py-2 bg-white/10 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all group/order"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <span className="text-[9px] uppercase font-black text-[#9CA3AF] mb-0.5 group-hover/order:text-purple-400">Pos</span>
                                            <input
                                                type="number"
                                                value={item.order}
                                                onChange={(e) => updateItemOrder(item.id, parseInt(e.target.value) || 0)}
                                                className="w-10 bg-transparent text-center text-lg font-black text-white focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                            />
                                        </div>
                                    )}
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 flex items-center justify-center overflow-hidden text-center">
                                        {type === 'projects' && item.image ? (
                                            <img src={item.image} className="w-full h-full object-cover" />
                                        ) : (
                                            <>
                                                {type === 'projects' && <FolderOpen className="text-purple-400 w-6 h-6" />}
                                                {type === 'experience' && <Briefcase className="text-blue-400 w-6 h-6" />}
                                                {type === 'education' && <GraduationCap className="text-indigo-400 w-6 h-6" />}
                                                {type === 'certificates' && <Award className="text-cyan-400 w-6 h-6" />}
                                                {type === 'achievements' && <Trophy className="text-yellow-400 w-6 h-6" />}
                                                {type === 'skills' && <Layers className="text-indigo-400 w-6 h-6" />}
                                                {type === 'technologies' && <Wrench className="text-cyan-400 w-6 h-6" />}
                                            </>
                                        )}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-0.5">{item.title || item.degree || item.institution || item.name}</h4>
                                        <p className="text-[#9CA3AF] font-medium text-sm flex items-center gap-2">
                                            {item.subtitle || item.company || item.awarder || item.period || (item.skills?.length >= 0 ? item.skills.length + " skills" : item.iconName)}
                                            <ChevronRight className="w-3 h-3 group-hover/card:translate-x-1 transition-transform" />
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={(e) => { e.stopPropagation(); handleDelete(item.id); }}
                                    className="opacity-0 group-hover/card:opacity-100 p-3 rounded-xl text-red-400 hover:bg-red-400/10 transition-all"
                                >
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
