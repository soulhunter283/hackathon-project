"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#05030a] text-white font-sans overflow-x-hidden selection:bg-[#c0ff00] selection:text-black">
      
      {/* ================= SECTION 1: HERO (God-Level 3D Vibe) ================= */}
      <section className="relative w-full min-h-[100vh] flex flex-col items-center justify-center pt-20 px-6 overflow-hidden perspective-[1000px]">
        {/* Deep Space Background Glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#6d28d9]/20 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#10b981]/15 blur-[120px] rounded-full pointer-events-none"></div>

        {/* --- 3D FLOATING OBJECTS --- */}
        
        {/* 1. The Gold Coin (Top Left) */}
        <motion.div 
          animate={{ 
            y: [0, -30, 0], 
            rotateX: [0, 20, 0, -20, 0], 
            rotateY: [0, 360],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] left-[10%] md:left-[20%] w-24 h-24 rounded-full z-20 hidden md:block"
          style={{
            background: "linear-gradient(135deg, #fcd34d 0%, #eab308 50%, #ca8a04 100%)",
            boxShadow: "inset -4px -4px 10px rgba(0,0,0,0.5), inset 4px 4px 10px rgba(255,255,255,0.8), 0 20px 40px rgba(234,179,8,0.3)",
            border: "2px solid rgba(253,230,138,0.6)"
          }}
        >
          {/* Inner ring detail */}
          <div className="absolute inset-2 rounded-full border border-yellow-200/50"></div>
        </motion.div>

        {/* 2. The Purple Diamond (Middle Right) */}
        <motion.div 
          animate={{ 
            y: [0, 40, 0], 
            rotateX: [45, 65, 45], 
            rotateY: [45, 135, 45],
            rotateZ: [0, 20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[35%] right-[10%] md:right-[15%] w-32 h-32 rounded-3xl z-0 hidden md:block"
          style={{
            background: "linear-gradient(135deg, #e879f9 0%, #a855f7 50%, #7e22ce 100%)",
            boxShadow: "inset -6px -6px 15px rgba(0,0,0,0.6), inset 6px 6px 15px rgba(255,255,255,0.6), 0 30px 60px rgba(168,85,247,0.4)",
            border: "1px solid rgba(232,121,249,0.5)"
          }}
        ></motion.div>

        {/* 3. The Teal Pill (Bottom Left) */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0], 
            x: [0, 20, 0],
            rotateZ: [-20, -10, -20],
            rotateX: [0, 15, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[25%] left-[15%] w-16 h-32 rounded-full z-10 hidden lg:block"
          style={{
            background: "linear-gradient(135deg, #2dd4bf 0%, #14b8a6 50%, #0f766e 100%)",
            boxShadow: "inset -5px -5px 12px rgba(0,0,0,0.5), inset 5px 5px 12px rgba(255,255,255,0.7), 0 20px 40px rgba(20,184,166,0.4)",
          }}
        ></motion.div>


        {/* --- HERO CONTENT --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="text-center z-30 max-w-4xl relative"
        >
          <h1 className="text-6xl md:text-[6.5rem] font-black tracking-tighter leading-[0.95] mb-8">
            Discover your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">path to Web3</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto font-medium">
            Learn about the world's leading blockchains, build projects, and launch your career right from your browser.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(255,255,255,0.05)]">
              App Store
            </button>
            <button className="flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(255,255,255,0.05)]">
              Google Play
            </button>
          </div>
        </motion.div>

        {/* --- CENTRAL PLATFORM / PHONE (Rises from bottom) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.3, type: "spring", bounce: 0.3 }}
          className="absolute bottom-0 w-full max-w-[320px] md:max-w-[400px] h-[300px] z-20 flex justify-center"
        >
          {/* Glass Phone Mockup */}
          <div className="w-full h-full bg-black/40 backdrop-blur-3xl border-t border-l border-r border-white/20 rounded-t-[3rem] shadow-[0_-20px_60px_rgba(109,40,217,0.3)] relative overflow-hidden flex flex-col items-center pt-4">
             {/* Speaker Notch */}
             <div className="w-24 h-6 bg-black rounded-full border border-white/10 mb-6"></div>
             
             {/* Inner Glowing Screen Content */}
             <div className="w-[90%] flex-1 bg-gradient-to-b from-white/10 to-transparent rounded-t-3xl border-t border-white/20 flex flex-col items-center pt-8">
                <div className="w-16 h-16 bg-[#c0ff00] rounded-2xl shadow-[0_0_30px_rgba(192,255,0,0.5)] mb-4"></div>
                <div className="w-32 h-4 bg-white/20 rounded-full mb-2"></div>
                <div className="w-24 h-4 bg-white/10 rounded-full"></div>
             </div>
          </div>
        </motion.div>
      </section>

      {/* ================= SECTION 2: BENTO BOX FEATURES ================= */}
      <section className="w-full py-24 px-6 lg:px-20 max-w-7xl mx-auto relative z-30 bg-[#05030a]">
        <div className="flex items-center gap-4 mb-12">
          <div className="flex -space-x-4">
            {[1,2,3].map(i => (
              <div key={i} className={`w-10 h-10 rounded-full border-2 border-[#05030a] bg-gradient-to-r from-purple-500 to-indigo-500`}></div>
            ))}
          </div>
          <p className="text-gray-400 font-medium">Join <span className="text-[#c0ff00] font-bold">1,121,532</span> others building now</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <motion.div whileHover={{ y: -5 }} className="col-span-1 md:col-span-2 bg-[#0d091a] border border-white/5 rounded-[2rem] p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-emerald-500/10 blur-[80px] rounded-full"></div>
            <h3 className="text-5xl font-black mb-4 z-10 relative">Fast</h3>
            <p className="text-gray-400 text-lg max-w-sm z-10 relative">
              No time? No problem! We teach you how to build top blockchains and deploy dApps faster than you can say "WAGMI".
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div whileHover={{ y: -5 }} className="col-span-1 bg-[#0d091a] border border-white/5 rounded-[2rem] p-10 relative overflow-hidden">
            <h3 className="text-4xl font-black mb-4">In-depth</h3>
            <p className="text-gray-400 text-base">
              Learning can be tough, but we make it easy! With simple but super effective challenges, go from zero to hero.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 3: IDE / CODE PREVIEW ================= */}
      <section className="w-full py-24 px-6 lg:px-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h4 className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4">Learn By Doing</h4>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] mb-6">Read less. <br/>Build more.</h2>
          <p className="text-gray-400 text-lg mb-8">
            Spend less time reading boring docs and more time building! Learn and launch your project right from your phone.
          </p>
          
          <div className="bg-[#0d091a] border border-white/10 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-4">
              <span className="text-gray-400 font-medium">Other learning apps</span>
              <span className="text-white font-bold">1x</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-[#c0ff00] font-black text-xl">NexusAI</span>
              <span className="text-[#c0ff00] font-black text-xl">100x</span>
            </div>
          </div>
        </div>

        {/* Mock IDE Window */}
        <div className="bg-[#0d091a] border border-white/10 rounded-3xl p-6 shadow-2xl relative">
          <div className="flex gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <pre className="text-sm md:text-base font-mono text-gray-300 overflow-x-auto">
            <code className="text-pink-400">use</code> <code className="text-indigo-300">solana_program::</code>{'{'}<br/>
            {'  '}account_info::AccountInfo,<br/>
            {'  '}entrypoint::ProgramResult,<br/>
            {'  '}pubkey::Pubkey,<br/>
            {'}'};<br/><br/>
            <code className="text-emerald-400">#[entrypoint]</code><br/>
            <code className="text-pink-400">pub fn</code> <code className="text-yellow-200">process_instruction</code>(<br/>
            {'  '}program_id: &Pubkey,<br/>
            {'  '}accounts: &[AccountInfo],<br/>
            {'  '}instruction_data: &[<code className="text-pink-400">u8</code>],<br/>
            ) -{'>'} ProgramResult {'{'}<br/>
            {'  '}Ok(())<br/>
            {'}'}
          </pre>
        </div>
      </section>

      {/* ================= SECTION 4: HORIZONTAL CAROUSEL (Events) ================= */}
      <section className="w-full py-24 pl-6 lg:pl-20 overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex justify-between items-end pr-6 lg:pr-20 mb-12">
          <h2 className="text-4xl font-black">Featured Events</h2>
          <button className="text-gray-400 hover:text-white transition-colors">See all events →</button>
        </div>

        {/* Scrollable Container */}
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar pr-20">
          
          {/* Event Card 1 */}
          <div className="min-w-[350px] md:min-w-[450px] bg-[#0d091a] border border-white/10 rounded-3xl p-6 snap-center flex-shrink-0 group hover:border-indigo-500/50 transition-colors cursor-pointer">
            <div className="h-40 w-full bg-indigo-900/50 rounded-2xl mb-6 relative overflow-hidden">
               <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold border border-white/10">UPCOMING</div>
            </div>
            <div className="text-[#c0ff00] font-black text-2xl mb-2">$25,000 USD <span className="text-gray-500 text-sm font-medium">in total prizes</span></div>
            <h3 className="text-2xl font-bold mb-6">Ripple Apex Hackathon</h3>
            <button className="w-full py-3 bg-white/10 group-hover:bg-indigo-600 font-bold rounded-xl transition-colors">Register</button>
          </div>

          {/* Event Card 2 */}
          <div className="min-w-[350px] md:min-w-[450px] bg-[#0d091a] border border-white/10 rounded-3xl p-6 snap-center flex-shrink-0 group hover:border-purple-500/50 transition-colors cursor-pointer">
            <div className="h-40 w-full bg-purple-900/50 rounded-2xl mb-6 relative overflow-hidden">
               <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold border border-white/10">UPCOMING</div>
            </div>
            <div className="text-[#c0ff00] font-black text-2xl mb-2">$250,000 USD <span className="text-gray-500 text-sm font-medium">in total prizes</span></div>
            <h3 className="text-2xl font-bold mb-6">Consensus Hackathon</h3>
            <button className="w-full py-3 bg-white/10 group-hover:bg-purple-600 font-bold rounded-xl transition-colors">Register</button>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: FOOTER CTA ================= */}
      <section className="w-full py-32 px-6 flex flex-col items-center justify-center text-center relative overflow-hidden border-t border-white/10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-indigo-600/20 blur-[150px] rounded-t-full pointer-events-none"></div>
        
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 relative z-10">Download the App</h2>
        <p className="text-gray-400 text-xl max-w-xl mx-auto mb-10 relative z-10">
          Learn about the world's leading blockchains, right from your phone.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
            <button className="px-8 py-4 bg-black border border-white/20 hover:border-white text-white font-bold rounded-2xl transition-all">
              Download on App Store
            </button>
            <button className="px-8 py-4 bg-black border border-white/20 hover:border-white text-white font-bold rounded-2xl transition-all">
              Get it on Google Play
            </button>
        </div>
      </section>
    </main>
  );
}