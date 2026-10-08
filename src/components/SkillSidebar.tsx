"use client";
import { skillsData } from "@/data/skillsData";
import { useSkills } from "@/context/SkillContext";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SkillSidebar() {
  const { getRegionCompletionData, openModal } = useSkills();

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-5 border-b border-slate-100 bg-slate-50">
        <h3 className="font-bold text-slate-800">Skill Regions</h3>
        <p className="text-sm text-slate-500">Select a region to add skills</p>
      </div>
      
      <div className="divide-y divide-slate-100">
        {Object.entries(skillsData).map(([key, data]) => {
          const { current, total, color } = getRegionCompletionData(key);
          const percent = Math.round((current / total) * 100);

          return (
            <button
              key={key}
              onClick={() => openModal(key)}
              className="w-full text-left p-4 hover:bg-slate-50 transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div 
                  className="w-4 h-4 rounded-full shadow-inner border border-slate-200" 
                  style={{ backgroundColor: color }}
                />
                <div>
                  <h4 className="font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">
                    {data.label}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">{current} / {total} Skills Perfected</p>
                </div>
              </div>
              <ChevronRight className="text-slate-300 group-hover:text-blue-500 transition-transform group-hover:translate-x-1" size={18} />
            </button>
          );
        })}
      </div>
    </div>
  );
}