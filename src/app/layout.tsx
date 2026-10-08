import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SkillProvider } from "../context/SkillContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skill Anatomy | Map Your Knowledge",
  description: "Visualize and build your human skill map.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SkillProvider>
          {children}
        </SkillProvider>
      </body>
    </html>
  );
}