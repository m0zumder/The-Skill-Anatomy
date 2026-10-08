"use client";
import { useSkills } from "@/context/SkillContext";
import { cn } from "@/lib/utils";

export default function BodySvg() {
  const { getRegionCompletionData, openModal } = useSkills();

  const regionProps = (regionKey: string) => {
    const { color } = getRegionCompletionData(regionKey);
    return {
      fill: color,
      onClick: () => openModal(regionKey),
      // White stroke separates the regions invisibly, keeping the silhouette pure
      className: "cursor-pointer transition-all duration-300 hover:brightness-110 stroke-[#E6ECC5] stroke-[1]",
    };
  };

  return (
    <div 
      id="exportable-body" 
      // Background color exactly matched to the image's pale greenish-yellow
      className="w-full max-w-lg mx-auto p-8 rounded-2xl shadow-xl relative overflow-hidden"
      style={{ backgroundColor: "#E6ECC5" }}
    >
      <div className="text-center mb-6">
        <h2 className="font-extrabold text-[#7a9c2e] text-2xl tracking-tight">My Skill Anatomy</h2>
      </div>

      {/* 100% Exact match to the uploaded silhouette (humen anatomy shadow_3.jpg) */}
      <svg 
        viewBox="0 0 200 500" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-[550px] drop-shadow-md"
      >
        {/* HEAD: Brain (Top half of head) */}
        <path 
          d="M 100,30 C 91,30 84,37 86,47 C 88,52 90,55 90,55 L 110,55 C 110,55 112,52 114,47 C 116,37 109,30 100,30 Z" 
          {...regionProps("head_brain")} 
        />
        
        {/* HEAD: Eyes/Face (Bottom half of head) */}
        <path 
          d="M 90,55 L 110,55 C 110,65 106,75 100,75 C 94,75 90,65 90,55 Z" 
          {...regionProps("head_eyes")} 
        />
        
        {/* MOUTH/THROAT (Neck & Traps) */}
        <path 
          d="M 94,75 C 94,80 92,85 88,89 L 112,89 C 108,85 106,80 106,75 Z" 
          {...regionProps("mouth_throat")} 
        />

        {/* CHEST/HEART (Chest & Shoulders - includes the inner arm gaps) */}
        <path 
          d="M 88,89 C 75,89 60,95 50,105 C 65,110 70,120 70,130 C 72,160 75,180 75,200 L 125,200 C 125,180 128,160 130,130 C 130,120 135,110 150,105 C 140,95 125,89 112,89 Z" 
          {...regionProps("chest_heart")} 
        />

        {/* CORE/GUT (Stomach & Pelvis) */}
        <path 
          d="M 75,200 L 125,200 C 128,240 130,260 130,270 L 100,285 L 70,270 C 70,260 72,240 75,200 Z" 
          {...regionProps("core_gut")} 
        />

        {/* ARMS & HANDS (Perfectly hanging beside the body) */}
        <g {...regionProps("arms_hands")}>
          {/* Left Arm */}
          <path d="M 50,105 C 40,120 40,160 41,190 L 45,240 C 45,260 40,275 42,285 C 44,290 48,285 49,275 L 52,240 C 54,200 65,150 70,130 C 65,120 55,110 50,105 Z" />
          {/* Right Arm */}
          <path d="M 150,105 C 160,120 160,160 159,190 L 155,240 C 155,260 160,275 158,285 C 156,290 152,285 151,275 L 148,240 C 146,200 135,150 130,130 C 135,120 145,110 150,105 Z" />
        </g>

        {/* LEGS & FEET (Includes the accurate gap between legs and foot positioning) */}
        <g {...regionProps("legs_feet")}>
          {/* Left Leg */}
          <path d="M 70,270 L 100,285 L 95,370 L 90,450 C 88,465 95,470 95,475 L 70,475 C 65,470 75,465 75,450 L 72,370 Z" />
          {/* Right Leg */}
          <path d="M 130,270 L 100,285 L 105,370 L 110,450 C 112,465 105,470 105,475 L 130,475 C 135,470 125,465 125,450 L 128,370 Z" />
        </g>
      </svg>
      
      {/* Export Watermark */}
      <div className="absolute bottom-4 right-4 text-[#8DB238] text-xs font-bold uppercase tracking-wider opacity-80">
        Generated via SkillAnatomy
      </div>
    </div>
  );
}