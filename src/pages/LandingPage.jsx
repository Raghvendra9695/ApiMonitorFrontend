import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import { 
  Zap, ArrowRight, Activity, ShieldCheck, Cpu, Globe, 
  Server, BarChart3, Bell, CheckCircle2, Terminal 
} from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#050810] text-slate-100 font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      
      {/* 1. STICKY NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-[#050810]/90 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-emerald-500 rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.4)]">
              <Zap size={18} className="text-white fill-current" />
            </div>
            <span className="font-black text-xl tracking-tighter uppercase">Monitor Pro</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/login" className="text-sm font-bold text-slate-400 hover:text-emerald-400 transition">Log in</Link>
            <Link to="/register" className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2.5 rounded-full text-sm font-black transition shadow-lg shadow-emerald-900/20">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="pt-56 pb-32 px-6 text-center relative">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/5 blur-[120px] -z-10"></div>
        <div className="inline-flex items-center gap-2 bg-slate-900/50 border border-slate-800 px-4 py-1.5 rounded-full mb-8 animate-bounce">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">v2.0 Live Now</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent leading-[1.1] tracking-tight">
          OBSERVE YOUR <br /> API ECOSYSTEM.
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg md:text-xl font-medium leading-relaxed">
          The ultimate observability platform for Spring Boot microservices. 
          Monitor health, trace errors, and visualize performance in real-time.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link to="/register" className="bg-white text-black px-12 py-5 rounded-full font-black text-lg hover:bg-slate-200 transition inline-flex items-center gap-2 shadow-2xl">
            Start Monitoring <ArrowRight size={20} />
          </Link>
          <button className="px-12 py-5 border border-slate-800 rounded-full font-bold text-lg hover:bg-slate-900 transition text-slate-300">
            Read Docs
          </button>
        </div>
      </section>

      {/* 3. ANIMATED DASHBOARD PREVIEW SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-600/10 blur-[120px] rounded-full -z-10"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative group bg-[#0a0f1d] border border-slate-800 rounded-[3rem] p-4 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden"
        >
          <div className="bg-[#050810] rounded-[2rem] border border-slate-900 aspect-video flex flex-col p-8 overflow-hidden relative">
            
            {/* Animated Stats Row */}
            <div className="flex gap-6 mb-10">
              {[1, 2, 3].map((i) => (
                <motion.div 
                  key={i}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  className="flex-1 h-32 bg-slate-900/50 border border-slate-800 rounded-3xl p-6 relative overflow-hidden"
                >
                  <div className="w-12 h-1 bg-emerald-500 mb-4 rounded-full shadow-[0_0_10px_#10b981]"></div>
                  <div className="w-3/4 h-4 bg-slate-800 rounded-lg mb-2"></div>
                  <div className="w-1/2 h-3 bg-slate-800/50 rounded-lg"></div>
                  <motion.div 
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent skew-x-12"
                  />
                </motion.div>
              ))}
            </div>

            {/* Graph Layout */}
            <div className="flex gap-8 flex-1">
              <div className="w-20 space-y-4">
                {[1, 2, 3, 4].map(i => <div key={i} className="w-12 h-12 bg-slate-900 rounded-2xl border border-slate-800"></div>)}
              </div>
              <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-[2.5rem] p-8 flex items-end gap-3 relative">
                {[60, 40, 85, 30, 95, 50, 70, 45, 80, 20].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ duration: 1.5, delay: i * 0.1 }}
                    className={`flex-1 rounded-t-xl ${i % 2 === 0 ? 'bg-emerald-500/30' : 'bg-blue-500/20'}`}
                  />
                ))}
              </div>
            </div>

            {/* Central Glass Badge Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                className="bg-white/5 backdrop-blur-xl px-10 py-5 rounded-[2rem] border border-white/10 shadow-2xl z-20 pointer-events-auto"
              >
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping"></div>
                  <span className="text-lg font-black tracking-widest uppercase text-white">Live Platform Teaser</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. PROCESS SECTION */}
      <section className="py-32 bg-[#0a0f1d]/30 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <ProcessStep number="01" title="Connect API" desc="Simply register your Spring Boot actuator endpoints in the cluster." />
            <ProcessStep number="02" title="Auto-Diagnostic" desc="Our engine automatically starts polling and tracing your microservices." />
            <ProcessStep number="03" title="Get Alerts" desc="Receive instant notifications if any node drops below SLA requirements." />
          </div>
        </div>
      </section>

      {/* 5. DETAILED FEATURES */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-20 items-center mb-32">
          <div className="flex-1">
            <div className="p-3 bg-blue-500/10 border border-blue-500/20 w-fit rounded-2xl mb-6">
              <BarChart3 className="text-blue-500" size={32} />
            </div>
            <h2 className="text-4xl font-black mb-6">Deep Analytics & <br/> Performance Graphs</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Visualize latency spikes and uptime percentages with our integrated Recharts engine. 
            </p>
            <ul className="space-y-4">
              {['P99 Latency Tracking', 'Error Rate Heatmaps', 'Historical Data Export'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-bold text-slate-300">
                  <CheckCircle2 size={18} className="text-emerald-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full bg-slate-900/50 rounded-[3rem] p-10 border border-slate-800">
             <div className="space-y-6">
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-emerald-500 w-4/5 animate-pulse"></div></div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-blue-500 w-2/5"></div></div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-rose-500 w-3/5"></div></div>
             </div>
          </div>
        </div>

        {/* Feature 2: Debugger */}
        <div className="flex flex-col md:flex-row-reverse gap-20 items-center">
          <div className="flex-1">
            <div className="p-3 bg-rose-500/10 border border-rose-500/20 w-fit rounded-2xl mb-6">
              <Terminal className="text-rose-500" size={32} />
            </div>
            <h2 className="text-4xl font-black mb-6">Built-in Trace <br/> Debugger</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              No more digging through server logs. Captures the stack trace instantly.
            </p>
            <button className="text-emerald-400 font-black flex items-center gap-2 hover:gap-4 transition-all">
              Learn about diagnostics <ArrowRight size={18} />
            </button>
          </div>
          <div className="flex-1 w-full bg-black rounded-3xl p-6 border border-slate-800 font-mono text-xs shadow-2xl">
             <p className="text-emerald-500">[System] Analyzing incident #4021...</p>
             <p className="text-rose-400 mt-2">Critical: java.sql.SQLException: Pool exhausted</p>
             <p className="text-slate-600 mt-1 pl-4">at com.monitor.db.ConnectionPool.get(Line 42)</p>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION SECTION */}
      <section className="py-32 px-6">
        <div className="bg-gradient-to-br from-emerald-600 to-teal-900 max-w-6xl mx-auto rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-20 opacity-10"><Zap size={300} /></div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-white">Join the future of <br/> API Monitoring</h2>
          <Link to="/register" className="bg-black text-white px-12 py-5 rounded-full font-black text-xl hover:bg-slate-900 transition-all hover:scale-105 inline-block">
            Get Started Now
          </Link>
        </div>
      </section>

      {/* 7. PROFESSIONAL FOOTER */}
      <footer className="py-20 border-t border-slate-900 text-center px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-2">
            <Zap size={20} className="text-emerald-500" />
            <span className="font-black uppercase tracking-widest text-xs opacity-50">Monitor Pro © 2026</span>
          </div>
          <div className="flex gap-10 text-slate-500 text-sm font-bold">
            <a href="#" className="hover:text-white transition">Twitter</a>
            <a href="#" className="hover:text-white transition">GitHub</a>
          </div>
          <p className="text-slate-600 text-xs">Built with React & Spring Boot</p>
        </div>
      </footer>
    </div>
  );
};

// Helper Component
const ProcessStep = ({ number, title, desc }) => (
  <div className="relative group">
    <div className="text-8xl font-black text-slate-900 absolute -top-12 -left-4 group-hover:text-emerald-500/10 transition-colors">{number}</div>
    <div className="relative">
      <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-tight">{title}</h3>
      <p className="text-slate-500 leading-relaxed font-medium">{desc}</p>
    </div>
  </div>
);

export default LandingPage;