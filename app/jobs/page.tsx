import Link from "next/link";
import { Search, MapPin, Star, Clock, ShieldCheck, ChevronDown, CheckCircle2 } from "lucide-react";

// ----------------------------------------------------------------------
// 1. REAL WORLD DATA FETCHING SIMULATION
// In production, replace this with: const jobs = await prisma.job.findMany()
// ----------------------------------------------------------------------
async function fetchActiveJobs() {
  // Simulating a database fetch delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return [
    {
      id: "job-alpha-001",
      title: "Senior AI Engineer needed to fine-tune Llama 3 for Legal SaaS",
      client: { name: "LexCorp", rating: 4.9, spent: "$120k+", verified: true, location: "United States" },
      budget: "$8,500 - $12,000",
      type: "Fixed Price",
      experience: "Expert",
      postedAt: "2 hours ago",
      description: "We are looking for an experienced Machine Learning engineer to build a custom RAG pipeline. You must have proven experience with vector databases and prompt chaining. Do not apply if you do not have production deployed AI models.",
      skills: [
        { name: "Python", color: "text-blue-400 bg-blue-400/10 border-blue-400/20" },
        { name: "PyTorch", color: "text-orange-400 bg-orange-400/10 border-orange-400/20" },
        { name: "LangChain", color: "text-green-400 bg-green-400/10 border-green-400/20" }
      ]
    },
    {
      id: "job-beta-002",
      title: "Rust Developer for Solana DeFi Protocol Core",
      client: { name: "Nova Finance", rating: 5.0, spent: "$45k+", verified: true, location: "United Kingdom" },
      budget: "$120.00/hr",
      type: "Hourly",
      experience: "Expert",
      postedAt: "5 hours ago",
      description: "Looking for a hardcore Rust developer to architect the routing logic for our new Solana-based decentralized exchange. High security clearance required; previous audit experience is a massive plus.",
      skills: [
        { name: "Rust", color: "text-red-400 bg-red-400/10 border-red-400/20" },
        { name: "Solana", color: "text-purple-400 bg-purple-400/10 border-purple-400/20" },
        { name: "Cryptography", color: "text-zinc-300 bg-zinc-300/10 border-zinc-300/20" }
      ]
    }
  ];
}

// 2. NEXT.JS SERVER COMPONENT
export default async function UpworkStyleJobBoard() {
  const jobs = await fetchActiveJobs();

  return (
    <div className="min-h-screen bg-[#05030a] text-zinc-100 font-sans selection:bg-emerald-500/30">
      {/* Navbar Minimal */}
      <header className="h-16 px-8 flex items-center border-b border-white/10 bg-[#0a0514]/80 backdrop-blur-md sticky top-0 z-40">
        <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
          Nexus <span className="text-emerald-500">Talent</span>
        </h1>
      </header>

      <main className="max-w-7xl mx-auto p-4 sm:p-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* LEFT SIDEBAR: FILTERS */}
        <aside className="hidden lg:block col-span-1 space-y-6">
          <h2 className="text-lg font-semibold text-white mb-4">Filter By</h2>
          
          <div className="space-y-3 pb-6 border-b border-white/10">
            <h3 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">Project Type</h3>
            <label className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 rounded border-zinc-700 bg-black text-emerald-500 focus:ring-emerald-500 focus:ring-offset-black" />
              <span className="text-sm text-zinc-300 group-hover:text-white">Hourly Rate</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 rounded border-zinc-700 bg-black text-emerald-500 focus:ring-emerald-500 focus:ring-offset-black" />
              <span className="text-sm text-zinc-300 group-hover:text-white">Fixed Price</span>
            </label>
          </div>

          <div className="space-y-3 pb-6 border-b border-white/10">
            <h3 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">Experience Level</h3>
            {["Entry Level", "Intermediate", "Expert"].map(level => (
              <label key={level} className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded border-zinc-700 bg-black text-emerald-500 focus:ring-emerald-500 focus:ring-offset-black" />
                <span className="text-sm text-zinc-300 group-hover:text-white">{level}</span>
              </label>
            ))}
          </div>
        </aside>

        {/* RIGHT CONTENT: JOB FEED */}
        <div className="col-span-1 lg:col-span-3">
          {/* Search Bar */}
          <div className="mb-6 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
            <input 
              type="text" 
              placeholder="Search for jobs (e.g. React, Rust, AI)..." 
              className="w-full bg-[#0d091a] border border-white/10 hover:border-emerald-500/50 focus:border-emerald-500 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white focus:outline-none transition-colors"
            />
          </div>

          {/* Job List */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-white mb-2">Jobs you might like</h2>
            
            {jobs.map((job) => (
              <Link href={`/jobs/${job.id}`} key={job.id} className="block group">
                <div className="p-6 bg-[#0d091a] border border-white/5 group-hover:border-emerald-500/50 rounded-2xl transition-all hover:bg-white/[0.02]">
                  
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-emerald-400 group-hover:text-emerald-300 transition-colors">
                      {job.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-zinc-400 mb-4">
                    <span className="text-zinc-200">{job.type} - {job.experience}</span>
                    <span>Est. Budget: <span className="text-zinc-200">{job.budget}</span></span>
                    <span>Posted {job.postedAt}</span>
                  </div>

                  <p className="text-sm text-zinc-300 line-clamp-2 mb-6 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {job.skills.map(skill => (
                      <span key={skill.name} className={`px-3 py-1 rounded-full text-[11px] font-bold border ${skill.color}`}>
                        {skill.name}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-xs text-zinc-500 border-t border-white/5 pt-4">
                    {job.client.verified && (
                      <span className="flex items-center gap-1 text-blue-400">
                        <CheckCircle2 size={14} /> Payment Verified
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star size={14} className="text-amber-400 fill-amber-400" /> {job.client.rating}
                    </span>
                    <span>{job.client.spent} spent</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} /> {job.client.location}
                    </span>
                  </div>

                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}