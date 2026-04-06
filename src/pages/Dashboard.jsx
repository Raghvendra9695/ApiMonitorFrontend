import React from 'react';
import { ResponseTimeChart } from '../components/AnalyticsChart';
// Yahan Bell ko add kar diya gaya hai
import { 
  Activity, Clock, ShieldCheck, Cpu, Zap, Bell, AlertCircle 
} from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="p-8 md:p-12 bg-[#050810] min-h-screen text-slate-100">
      <header className="mb-12">
        <h1 className="text-4xl font-black tracking-tight">Global Analytics</h1>
        <p className="text-slate-500 text-xs font-black uppercase tracking-[0.3em] mt-1">Real-time Performance Metrics</p>
      </header>

      {/* 1. Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <MetricCard label="Uptime" value="99.9%" icon={<ShieldCheck size={20} className="text-emerald-500"/>} />
        <MetricCard label="Avg Response" value="42ms" icon={<Clock size={20} className="text-blue-500"/>} />
        <MetricCard label="Incidents" value="0" icon={<Activity size={20} className="text-rose-500"/>} />
        <MetricCard label="Load" value="12%" icon={<Cpu size={20} className="text-amber-500"/>} />
      </div>

      {/* 2. Main Chart Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <div className="lg:col-span-2">
          <ResponseTimeChart />
        </div>

        
<div className="bg-[#0a0f1d] p-8 rounded-[2.5rem] border border-slate-800/50 mt-10">
  <div className="flex justify-between items-center mb-6">
    <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
      <Bell size={14} className="text-rose-500" /> Critical System Alerts
    </h4>
    <button className="text-[10px] font-bold text-blue-400 hover:underline">Clear All</button>
  </div>
  
  <div className="space-y-3">
    <div className="bg-rose-500/5 border border-rose-500/20 p-4 rounded-2xl flex justify-between items-center">
       <div className="flex items-center gap-4">
          <div className="w-2 h-2 bg-rose-500 rounded-full animate-ping"></div>
          <p className="text-sm font-bold text-slate-200">Alert: Inventory DB is UNREACHABLE</p>
       </div>
       <span className="text-[10px] font-mono text-slate-600 uppercase">2 mins ago</span>
    </div>
    
    <div className="bg-emerald-500/5 border border-emerald-500/20 p-4 rounded-2xl flex justify-between items-center opacity-60">
       <div className="flex items-center gap-4">
          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
          <p className="text-sm font-bold text-slate-200">Resolved: Auth Service Latency Stable</p>
       </div>
       <span className="text-[10px] font-mono text-slate-600 uppercase">1 hour ago</span>
    </div>
  </div>
</div>
        
        {/* Right Panel: Quick Insights */}
        <div className="bg-[#0a0f1d] p-8 rounded-[2.5rem] border border-slate-800/50">
          <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-6">Service Distribution</h4>
          <div className="space-y-6">
            <ProgressMetric label="Database Nodes" percent={85} color="bg-emerald-500" />
            <ProgressMetric label="Auth Clusters" percent={40} color="bg-blue-500" />
            <ProgressMetric label="Payment Gateway" percent={95} color="bg-purple-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper Components
const MetricCard = ({ label, value, icon }) => (
  <div className="bg-[#0a0f1d] p-6 rounded-3xl border border-slate-800/50 flex items-center gap-5">
    <div className="p-3 bg-slate-900 rounded-2xl">{icon}</div>
    <div>
      <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">{label}</p>
      <h3 className="text-xl font-black text-white">{value}</h3>
    </div>
  </div>
);

const ProgressMetric = ({ label, percent, color }) => (
  <div>
    <div className="flex justify-between text-[10px] font-black uppercase mb-2">
      <span className="text-slate-400">{label}</span>
      <span className="text-white">{percent}%</span>
    </div>
    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
      <div className={`h-full ${color}`} style={{ width: `${percent}%` }}></div>
    </div>
  </div>
);

export default Dashboard;