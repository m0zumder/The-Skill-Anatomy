import BodySvg from "@/components/BodySvg";
import ExportButton from "@/components/ExportButton";
import SkillSidebar from "@/components/SkillSidebar";
import SkillModal from "@/components/SkillModal";

export default function Home() {
  return (
    <main className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-white border-b py-10 px-4 mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">The Skill Anatomy</h1>
        <p className="text-slate-500 mt-3 max-w-2xl mx-auto text-lg">
          Select the skills you are aware of, learning, or have mastered to perfect your anatomy map.
        </p>
      </div>

      <div className="flex flex-col-reverse lg:flex-row gap-8 w-full max-w-7xl mx-auto px-4">
        {/* Left Side: Sidebar */}
        <div className="w-full lg:w-1/3">
          <SkillSidebar />
        </div>

        {/* Right Side: Visualizer & Export */}
        <div className="w-full lg:w-2/3 flex flex-col items-center gap-8">
          <BodySvg />
          <ExportButton />
        </div>
      </div>
      
      {/* Global Modal rendering */}
      <SkillModal />
    </main>
  );
}