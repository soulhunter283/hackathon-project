"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  FolderKanban, LayoutDashboard, Settings, Search, 
  BrainCircuit, TerminalSquare, Paintbrush, Network, Cpu, ChevronRight
} from "lucide-react";

// Our mock database of projects
export const PROJECT_DATABASE = [
  { id: "proj-alpha", name: "Atlas AI Prompt Chaining Core", client: "Acme Corp Systems", classification: "ai", securityLevel: "CLASSIFIED", baseProgress: 64, lastCommit: "Just now", milestone: "Optimize Gemini Pipeline Handshake", dueDate: "June 18, 2026" },
  { id: "proj-beta", name: "Solana High-Frequency Smart Contracts", client: "Nexus Engine Labs", classification: "coding", securityLevel: "TOP SECRET", baseProgress: 88, lastCommit: "14 mins ago", milestone: "Security Audit & Gas Minimization", dueDate: "June 24, 2026" },
  { id: "proj-gamma", name: "Cross-Chain Liquidity Routing", client: "Symmetry Network", classification: "network", securityLevel: "INTERNAL ONLY", baseProgress: 20, lastCommit: "2 days ago", milestone: "Validator Node Architecture", dueDate: "July 02, 2026" },
  { id: "proj-delta", name: "Quantum Fluid Design System v4.2", client: "Vortex Interface Group", classification: "design", securityLevel: "RESTRICTED", baseProgress: 100, lastCommit: "3 hours ago", milestone: "Figma Token Auto-Compilation", dueDate: "Completed" }
];

export const getSymbol = (classification: string, size = 18) => {
  switch(classification) {
    case "ai": return <BrainCircuit size={size} className="text-cyan-400" />;
    case "coding": return <TerminalSquare size={size} className="text-amber-400" />;
    case "network": return <Network size={size} className="text-purple-400" />;
    case "design": return <Paintbrush size={size} className="text-pink-400" />;
    default: return <Cpu size={size} className="text-gray-400" />;
  }
};

export default function GlobalDashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen w-full bg-[#05030a] text-white flex overflow-hidden selection:bg-[#c0ff00] selection:text-black font-sans">
      {/* SIDEBAR */}
      <aside className="w-20 xl:w-64 border-r border-white/5 bg-[#0a0514]/40 backdrop-blur-xl flex flex-col hidden sm:flex shrink-0">
        <div className="h-20 flex items-center justify-center xl:justify-start xl:px-6 border-b border-white/5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center font-black shadow-[0_0_25px_rgba(168,85,247,0.4)]">Ω</div>
          <span className="hidden xl:block ml-3 font-mono font-black tracking-widest text-sm text-white">NEXUS CONSOLE</span>
        </div>
        <nav className="flex-1 py-6 flex flex-col gap-1 px-3">
          <div className="w-full flex items-center gap-4 px-3 py-3.5 rounded-xl bg-[#c0ff00]/10 text-[#c0ff00]">
            <FolderKanban size={20} />
            <span className="font-bold text-sm hidden xl:block">Projects Directory</span>
          </div>
          <div className="w-full flex items-center gap-4 px-3 py-3.5 rounded-xl text-gray-600 cursor-not-allowed">
            <LayoutDashboard size={20} />
            <span className="font-bold text-sm hidden xl:block">System Metrics</span>
          </div>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto no-scrollbar w-full">
        <header className="h-20 px-8 flex items-center border-b border-white/5 bg-[#05030a]/80 backdrop-blur-md sticky top-0 z-40">
          <h1 className="text-sm font-mono uppercase tracking-widest text-gray-400">Core Architecture Directories</h1>
        </header>

        <div className="w-full max-w-[1600px] mx-auto p-4 sm:p-8 flex-1 box-border">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 w-full">
            
            {/* Search Bar */}
            <div className="flex items-center gap-4 bg-[#0d091a] border border-white/5 p-4 rounded-2xl w-full">
              <Search className="text-gray-500 ml-2" size={18} />
              <input 
                type="text" placeholder="Filter operational repository targets..." 
                className="w-full bg-transparent border-none text-sm text-white focus:outline-none placeholder:text-gray-600"
                value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* DIRECTORY LIST - USING REAL NEXT.JS LINKS */}
            <div className="border border-white/10 rounded-2xl bg-[#0d091a]/30 overflow-hidden divide-y divide-white/5 w-full">
              {PROJECT_DATABASE.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase())).map((project) => (
                <Link 
                  href={`/dashboard/${project.id}`} 
                  key={project.id} 
                  className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/[0.04] transition-all cursor-pointer group block"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/5 border border-white/10 rounded-xl group-hover:border-indigo-500/40 shadow-inner mt-0.5">
                      {getSymbol(project.classification, 22)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h2 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">{project.name}</h2>
                        <span className="text-[9px] tracking-widest font-mono font-bold uppercase px-2 py-0.5 bg-white/5 border border-white/10 text-gray-400 rounded">
                          {project.securityLevel}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 font-mono">Client: {project.client} • Cycle: {project.lastCommit}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-right hidden sm:block">
                      <span className="text-[10px] uppercase tracking-widest text-gray-500 block mb-0.5 font-mono">Objective</span>
                      <span className="text-sm font-medium text-gray-300">{project.milestone}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-sm font-bold text-gray-400">{project.baseProgress}%</span>
                      <ChevronRight size={20} className="text-gray-600 group-hover:text-[#c0ff00] transition-colors" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </motion.div>
        </div>
      </main>
    </div>
  );
}