"use client";
import { useSkills } from "@/context/SkillContext";
import { skillsData } from "@/data/skillsData";
import { X, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SkillModal() {
  const { activeModal, closeModal, selectedSkills, toggleSkill } = useSkills();

  if (!activeModal) return null;

  const data = skillsData[activeModal];
  const activeRegionSkills = selectedSkills[activeModal] || [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-100 flex justify-between items-start bg-slate-50">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">{data.label}</h2>
            <p className="text-slate-500 mt-1 text-sm">{data.description}</p>
          </div>
          <button 
            onClick={closeModal}
            className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-6 overflow-y-auto space-y-8">
          {Object.entries(data.sectors).map(([sectorName, skills]) => (
            <div key={sectorName}>
              <h3 className="font-semibold text-slate-800 mb-3 text-lg border-b pb-2">{sectorName}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {skills.map((skill) => {
                  const isSelected = activeRegionSkills.includes(skill);
                  return (
                    <button
                      key={skill}
                      onClick={() => toggleSkill(activeModal, skill)}
                      className={cn(
                        "flex items-center gap-3 p-3 text-left rounded-xl border transition-all duration-200",
                        isSelected 
                          ? "border-blue-500 bg-blue-50 text-blue-800 shadow-sm" 
                          : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:bg-slate-50"
                      )}
                    >
                      <div className={cn(
                        "w-5 h-5 rounded flex items-center justify-center border",
                        isSelected ? "bg-blue-500 border-blue-500 text-white" : "border-slate-300"
                      )}>
                        {isSelected && <Check size={14} strokeWidth={3} />}
                      </div>
                      <span className="text-sm font-medium leading-tight">{skill}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        
        {/* Modal Footer */}
        <div className="p-4 border-t bg-slate-50 flex justify-end">
          <button 
            onClick={closeModal}
            className="px-6 py-2 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}