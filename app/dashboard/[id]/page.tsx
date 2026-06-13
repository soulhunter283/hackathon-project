"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, Bell, Mail, CheckCircle2, Circle, 
  Settings, BrainCircuit, Cpu, Layers, ShieldCheck
} from "lucide-react";

// Import the database and symbol helper from the main dashboard page
import { PROJECT_DATABASE, getSymbol } from "../page";

export default function ProjectDashboardConsole() {
  const params = useParams();
  const router = useRouter();
  const projectId = params.id as string;
  
  // Find the specific project based on the URL
  const selectedProject = PROJECT_DATABASE.find(p => p.id === projectId);

  // Live Telemetry States
  const [isWorkspaceExpanded, setIsWorkspaceExpanded] = useState(true);
  const [liveXp, setLiveXp] = useState(482190);
  const [systemStability, setSystemStability] = useState(99.4);
  const [tasks, setTasks] = useState([
    { id: 1, text: "Execute automated prompt testing matrix", completed: true },
    { id: 2, text: "Mount state management inside Monaco instance", completed: false },
    { id: 3, text: "Perform structural security evaluation", completed: false },
  ]);

  // Telemetry Engine (Keeps it alive!)
  useEffect(() => {
    const streamInterval = setInterval(() => {
      setLiveXp(prev => prev + Math.floor(Math.random() * 4) + 1);
      setSystemStability(prev => {
        const adjustment = (Math.random() * 0.16 - 0.08);
        return parseFloat(Math.min(100, Math.max(94, prev + adjustment)).toFixed(2));
      });
    }, 3500);
    return () => clearInterval(streamInterval);
  }, []);

  const toggleTask = (taskId: number) => {
    setTasks(tasks.map(t => t.id === taskId ? { ...t, completed: !t.completed } : t));
  };

  // If URL doesn't match a project, show error
  if (!selectedProject) {
    return (
      <div className="min-h-screen bg-[#05030a] text-white flex flex-col items-center justify-center">
        <h1 className="text-2xl font-mono text-red-500 mb-4">Error 404: Node Not Found</h1>
        <button onClick={() => router.push('/dashboard')} className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-xl font-mono">Return to Hub</button>
      </div>
    );
  }

  // Calculate dynamic progress
  const completedTaskWeight = tasks.filter(t => t.completed).length * 5;
  const liveProgressCalculated = Math.min(100, selectedProject.baseProgress + completedTaskWeight);

  return (
    <div className="min-h-screen w-full bg-[#05030a] text-white flex flex-col font-sans selection:bg-[#c0ff00] selection:text-black">
      
      {/* HEADER */}
      <header className="h-20 px-4 sm:px-8 flex items-center justify-between border-b border-white/5 bg-[#05030a]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="p-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 text-gray-300 transition-colors">
            <ArrowLeft size={16} />
          </Link>
          <h1 className="text-xs md:text-sm font-mono uppercase tracking-widest text-gray-400">
            Active Environment // {selectedProject.name}
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <Mail size={18} className="text-gray-400 hover:text-white cursor-pointer hidden sm:block" />
          <Bell size={18} className="text-gray-400 hover:text-white cursor-pointer" />
        </div>
      </header>

      {/* DASHBOARD GRID */}
      <main className="w-full max-w-[1600px] mx-auto p-4 sm:p-6 lg:p-8 flex-1 box-border">
        <motion.div initial={{ opacity: 0, scale: 0.99 }} animate={{ opacity: 1, scale: 1 }} className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-12 gap-6 items-start w-full">
          
          {/* RANK & PERFORMANCE */}
          <div className="xl:col-span-4 bg-[#0d091a] border border-white/10 rounded-3xl p-6 relative overflow-hidden flex flex-col min-h-[300px]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl pointer-events-none"></div>
            <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase font-mono mb-6">Telemetry Analytics</h2>
            <div className="flex items-center justify-between gap-6 my-auto">
              <div className="relative w-28 h-28 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,0.03)" strokeWidth="7" fill="none" />
                  <circle cx="50" cy="50" r="42" stroke="url(#live-gradient)" strokeWidth="7" fill="none" 
                    strokeDasharray="264" strokeDashoffset={264 - (264 * systemStability) / 100} strokeLinecap="round" className="transition-all duration-700 ease-out" />
                  <defs>
                    <linearGradient id="live-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#c0ff00" /><stop offset="100%" stopColor="#2dd4bf" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute text-center">
                  <div className="text-2xl font-black text-white font-mono">{systemStability}%</div>
                </div>
              </div>
              <div className="flex-1 bg-gradient-to-b from-indigo-500/10 to-transparent border border-white/5 rounded-2xl p-4">
                <span className="text-[10px] font-mono tracking-widest text-indigo-400 uppercase block mb-1">XP Matrix</span>
                <div className="text-3xl font-black text-white mb-1.5 font-mono">{liveXp.toLocaleString()}</div>
              </div>
            </div>
          </div>

          {/* DYNAMIC WORKSPACE SCOPE */}
          <div className="xl:col-span-4 bg-[#0d091a] border border-white/10 rounded-3xl p-6 flex flex-col min-h-[300px] justify-between">
            <div className="flex justify-between items-center">
              <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase font-mono">Workspace Scope Matrix</h2>
            </div>
            <div className="space-y-4 my-auto pt-2">
              <div>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono block mb-0.5">Target Scope</span>
                <div className="text-xl font-black text-white">{selectedProject.client}</div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-mono text-gray-400 mb-1.5">
                  <span>Mutating Progress Engine</span>
                  <span className="text-[#c0ff00] font-bold">{liveProgressCalculated}%</span>
                </div>
                <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden border border-white/10">
                  <div className="h-full bg-gradient-to-r from-purple-500 via-cyan-400 to-[#c0ff00] transition-all duration-500" style={{ width: `${liveProgressCalculated}%` }}></div>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-white/5">
              <Link href="/codespace" className="block w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold text-center rounded-xl transition-all">
                Access Codespace IDE
              </Link>
            </div>
          </div>

          {/* TASK MANAGEMENT */}
          <div className="xl:col-span-4 bg-[#0d091a] border border-white/10 rounded-3xl p-6 w-full flex flex-col min-h-[300px]">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase font-mono">Reactive Tasks</h2>
            </div>
            <div className="space-y-3 my-auto w-full">
              {tasks.map((task) => (
                <div key={task.id} onClick={() => toggleTask(task.id)} className={`flex items-start gap-3.5 p-4 rounded-xl border cursor-pointer transition-all ${task.completed ? 'bg-indigo-500/5 border-indigo-500/20' : 'bg-black/20 border-white/5 hover:bg-white/5'}`}>
                  <div className="mt-0.5 shrink-0">
                    {task.completed ? <CheckCircle2 className="text-[#c0ff00]" size={17} /> : <Circle className="text-gray-600" size={17} />}
                  </div>
                  <span className={`text-sm font-medium transition-colors ${task.completed ? 'text-gray-500 line-through' : 'text-gray-200'}`}>
                    {task.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </motion.div>
      </main>
    </div>
  );
}