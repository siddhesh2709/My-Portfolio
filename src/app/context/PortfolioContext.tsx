import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { initialData } from '../data';
import { PortfolioData, PersonalInfo, Project, Experience, Education, Certification, SkillCategory, Tool, Achievement, Message } from '../types';

interface PortfolioContextType extends PortfolioData {
    updatePersonalInfo: (data: PersonalInfo) => void;
    addProject: (project: Project) => void;
    updateProject: (id: string, project: Project) => void;
    deleteProject: (id: string) => void;
    addExperience: (exp: Experience) => void;
    updateExperience: (id: string, exp: Experience) => void;
    deleteExperience: (id: string) => void;
    addEducation: (edu: Education) => void;
    updateEducation: (id: string, edu: Education) => void;
    deleteEducation: (id: string) => void;
    addCertification: (cert: Certification) => void;
    updateCertification: (id: string, cert: Certification) => void;
    deleteCertification: (id: string) => void;
    addSkillCategory: (cat: SkillCategory) => void;
    updateSkillCategory: (id: string, cat: SkillCategory) => void;
    deleteSkillCategory: (id: string) => void;
    addTool: (tool: Tool) => void;
    updateTool: (id: string, tool: Tool) => void;
    deleteTool: (id: string) => void;
    addAchievement: (ach: Achievement) => void;
    updateAchievement: (id: string, ach: Achievement) => void;
    deleteAchievement: (id: string) => void;
    addMessage: (msg: Message) => void;
    markMessageAsRead: (id: string) => void;
    deleteMessage: (id: string) => void;
    resetToDefault: () => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [data, setData] = useState<PortfolioData>(() => {
        const saved = localStorage.getItem('portfolio_data');
        if (saved) {
            const parsed = JSON.parse(saved);
            // Ensure new fields exist
            return {
                ...initialData,
                ...parsed,
                personalInfo: { ...initialData.personalInfo, ...parsed.personalInfo },
                tools: parsed.tools || initialData.tools || [],
                achievements: parsed.achievements || initialData.achievements || [],
                messages: parsed.messages || []
            };
        }
        return initialData;
    });

    useEffect(() => {
        localStorage.setItem('portfolio_data', JSON.stringify(data));
    }, [data]);

    const updatePersonalInfo = (personalInfo: PersonalInfo) => setData(prev => ({ ...prev, personalInfo }));

    const addProject = (project: Project) => setData(prev => ({ ...prev, projects: [...prev.projects, project] }));
    const updateProject = (id: string, project: Project) => setData(prev => ({
        ...prev,
        projects: prev.projects.map(p => p.id === id ? project : p)
    }));
    const deleteProject = (id: string) => setData(prev => ({ ...prev, projects: prev.projects.filter(p => p.id !== id) }));

    const addExperience = (exp: Experience) => setData(prev => ({ ...prev, experiences: [...prev.experiences, exp] }));
    const updateExperience = (id: string, exp: Experience) => setData(prev => ({
        ...prev,
        experiences: prev.experiences.map(e => e.id === id ? exp : e)
    }));
    const deleteExperience = (id: string) => setData(prev => ({ ...prev, experiences: prev.experiences.filter(e => e.id !== id) }));

    const addEducation = (edu: Education) => setData(prev => ({ ...prev, education: [...prev.education, edu] }));
    const updateEducation = (id: string, edu: Education) => setData(prev => ({
        ...prev,
        education: prev.education.map(e => e.id === id ? edu : e)
    }));
    const deleteEducation = (id: string) => setData(prev => ({ ...prev, education: prev.education.filter(e => e.id !== id) }));

    const addCertification = (cert: Certification) => setData(prev => ({ ...prev, certifications: [...prev.certifications, cert] }));
    const updateCertification = (id: string, cert: Certification) => setData(prev => ({
        ...prev,
        certifications: prev.certifications.map(c => c.id === id ? cert : c)
    }));
    const deleteCertification = (id: string) => setData(prev => ({ ...prev, certifications: prev.certifications.filter(c => c.id !== id) }));

    const addSkillCategory = (cat: SkillCategory) => setData(prev => ({ ...prev, skillCategories: [...prev.skillCategories, cat] }));
    const updateSkillCategory = (id: string, cat: SkillCategory) => setData(prev => ({
        ...prev,
        skillCategories: prev.skillCategories.map(c => c.id === id ? cat : c)
    }));
    const deleteSkillCategory = (id: string) => setData(prev => ({ ...prev, skillCategories: prev.skillCategories.filter(c => c.id !== id) }));

    const addTool = (tool: Tool) => setData(prev => ({ ...prev, tools: [...prev.tools, tool] }));
    const updateTool = (id: string, tool: Tool) => setData(prev => ({
        ...prev,
        tools: prev.tools.map(t => t.id === id ? tool : t)
    }));
    const deleteTool = (id: string) => setData(prev => ({ ...prev, tools: prev.tools.filter(t => t.id !== id) }));

    const addAchievement = (ach: Achievement) => setData(prev => ({ ...prev, achievements: [...prev.achievements, ach] }));
    const updateAchievement = (id: string, ach: Achievement) => setData(prev => ({
        ...prev,
        achievements: prev.achievements.map(a => a.id === id ? ach : a)
    }));
    const deleteAchievement = (id: string) => setData(prev => ({ ...prev, achievements: prev.achievements.filter(a => a.id !== id) }));

    const addMessage = (msg: Message) => setData(prev => ({ ...prev, messages: [...prev.messages, msg] }));
    const markMessageAsRead = (id: string) => setData(prev => ({
        ...prev,
        messages: prev.messages.map(m => m.id === id ? { ...m, read: true } : m)
    }));
    const deleteMessage = (id: string) => setData(prev => ({ ...prev, messages: prev.messages.filter(m => m.id !== id) }));

    const resetToDefault = () => {
        localStorage.removeItem('portfolio_data');
        setData(initialData);
    };

    const sortedData = useMemo(() => ({
        ...data,
        projects: [...data.projects].sort((a, b) => a.order - b.order),
        experiences: [...data.experiences].sort((a, b) => a.order - b.order),
        education: [...data.education].sort((a, b) => a.order - b.order),
        certifications: [...data.certifications].sort((a, b) => a.order - b.order),
        skillCategories: [...data.skillCategories].sort((a, b) => a.order - b.order),
        achievements: [...data.achievements].sort((a, b) => a.order - b.order),
    }), [data]);

    return (
        <PortfolioContext.Provider value={{
            ...sortedData,
            updatePersonalInfo,
            addProject, updateProject, deleteProject,
            addExperience, updateExperience, deleteExperience,
            addEducation, updateEducation, deleteEducation,
            addCertification, updateCertification, deleteCertification,
            addSkillCategory, updateSkillCategory, deleteSkillCategory,
            addTool, updateTool, deleteTool,
            addAchievement, updateAchievement, deleteAchievement,
            addMessage, markMessageAsRead, deleteMessage,
            resetToDefault
        }}>
            {children}
        </PortfolioContext.Provider>
    );
};

export const usePortfolio = () => {
    const context = useContext(PortfolioContext);
    if (!context) throw new Error('usePortfolio must be used within a PortfolioProvider');
    return context;
};
