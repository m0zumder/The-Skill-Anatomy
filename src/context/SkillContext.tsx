"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { skillsData } from "@/data/skillsData";

type SkillState = Record<string, string[]>;

interface SkillContextType {
  selectedSkills: SkillState;
  toggleSkill: (region: string, skill: string) => void;
  getRegionCompletionData: (region: string) => { current: number; total: number; color: string };
  activeModal: string | null;
  openModal: (region: string) => void;
  closeModal: () => void;
}

export const SkillContext = createContext<SkillContextType | undefined>(undefined);

export function SkillProvider({ children }: { children: ReactNode }) {
  const [selectedSkills, setSelectedSkills] = useState<SkillState>({});
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const toggleSkill = (region: string, skill: string) => {
    setSelectedSkills((prev) => {
      const regionSkills = prev[region] || [];
      const isSelected = regionSkills.includes(skill);
      const updatedRegion = isSelected 
        ? regionSkills.filter((s) => s !== skill) 
        : [...regionSkills, skill];
      
      return { ...prev, [region]: updatedRegion };
    });
  };

  const getRegionCompletionData = (region: string) => {
    const data = skillsData[region];
    if (!data) return { current: 0, total: 1, color: "#d1d5db" };

    const totalSkills = Object.values(data.sectors).flat().length;
    const currentSkills = selectedSkills[region]?.length || 0;
    
    // Exact colors from humen anatomy shadow_2.jpg
    let color = "#cbd5b5"; // Empty (হালকা সবুজ, ব্যাকগ্রাউন্ডের সাথে মানানসই)
    if (currentSkills > 0) color = "#a9c46c"; // Learning (মাঝারি সবুজ)
    if (currentSkills >= totalSkills * 0.5) color = "#8DB238"; // Proficient (আপনার ছবির হুবহু রঙ)
    if (currentSkills === totalSkills) color = "#7a9c2e"; // Mastered (একটু গাঢ় সবুজ)

    return { current: currentSkills, total: totalSkills, color };
  };
  
  return (
    <SkillContext.Provider value={{ 
      selectedSkills, 
      toggleSkill, 
      getRegionCompletionData,
      activeModal,
      openModal: setActiveModal,
      closeModal: () => setActiveModal(null)
    }}>
      {children}
    </SkillContext.Provider>
  );
}

export const useSkills = () => {
  const context = useContext(SkillContext);
  if (!context) throw new Error("useSkills must be used within a SkillProvider");
  return context;
};