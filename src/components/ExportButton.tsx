"use client";
import html2canvas from "html2canvas";
import { Download } from "lucide-react";
import { useState } from "react";

export default function ExportButton() {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    setIsExporting(true);
    try {
      const element = document.getElementById("exportable-body");
      if (!element) return;

      const canvas = await html2canvas(element, {
        scale: 3, 
        useCORS: true,
        backgroundColor: "#ffffff",
        logging: false,
      });

      const dataImage = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataImage;
      link.download = "my-skill-anatomy.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Export failed", error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <button 
      onClick={handleExport}
      disabled={isExporting}
      className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all font-bold shadow-lg shadow-blue-600/20 disabled:opacity-70 disabled:cursor-not-allowed"
    >
      <Download size={22} className={isExporting ? "animate-bounce" : ""} />
      {isExporting ? "Generating Map..." : "Download My Anatomy"}
    </button>
  );
}