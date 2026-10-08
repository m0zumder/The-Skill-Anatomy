"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { skillsData } from "@/data/skillsData";

type SkillState = Record<string, string[]>;

interface SkillContextType {
  selectedSkills: SkillState;
  toggleSkill: (region: string, skill: string) => void;
  getRegionCompletionData: (region: string) => { current: number; total: number; color: string; opacity: number };
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
    // Default state: 15% visible
    if (!data) return { current: 0, total: 1, color: "#8DB238", opacity: 0.15 };

    const totalSkills = Object.values(data.sectors).flat().length;
    const currentSkills = selectedSkills[region]?.length || 0;
    
    // Apnar deya chobir exact base olive green color
    const color = "#8DB238"; 

    // Dynamic Opacity: 0 skill e 15% opacity, full skill e 100% (1.0) opacity
    let opacity = 0.15;
    if (currentSkills > 0) {
      opacity = 0.15 + (0.85 * (currentSkills / totalSkills));
    }

    return { current: currentSkills, total: totalSkills, color, opacity };
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