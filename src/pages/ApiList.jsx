import React, { useState } from 'react';
import { useApi } from '../context/ApiContext';
import { 
  Globe, Clock, MoreVertical, Plus, 
  Search, Filter, ArrowUpRight, Activity 
} from 'lucide-react';
import ApiFormModal from '../components/ApiFormModal';

const ApiList = () => {
  const { apis } = useApi();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-8 md:p-12 bg-[#050810] min-h-screen text-slate-100 font-sans">
      
      {/* --- HEADER SECTION --- */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-8 bg-emerald-500 rounded-full"></div>
            <h1 className="text-4xl font-black tracking-tight text-white uppercase">API Inventory</h1>
          </div>
          <p className="text-slate-500 text-xs font-black uppercase tracking-[0.3em] ml-5">
            Real-time Endpoint Management & Monitoring
          </p>
        </div>

        <div className="flex gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={16} />
            <input 
              type="text" 
              placeholder="Search endpoints..." 
              className="w-full bg-[#0a0f1d] border border-slate-800 p-3 pl-12 rounded-2xl text-xs font-bold outline-none focus:border-emerald-500/50 transition"
            />
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-2 transition shadow-2xl shadow-emerald-900/20 active:scale-95"
          >
            <Plus size={18} /> Register API
          </button>
        </div>
      </header>

      {/* --- QUICK STATS BAR --- */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <QuickStat label="Total Nodes" value={apis.length} color="text-blue-400" />
        <QuickStat label="Active" value={apis.filter(a => a.status === 'UP').length} color="text-emerald-400" />
        <QuickStat label="Down" value={apis.filter(a => a.status === 'DOWN').length} color="text-rose-400" />
        <QuickStat label="Avg Latency" value="42ms" color="text-amber-400" />
      </div>

      {/* --- MAIN TABLE --- */}
      <div className="bg-[#0a0f1d] rounded-[2.5rem] border border-slate-800/50 overflow-hidden shadow-2xl relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px] -z-10"></div>
        
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-900/30 text-slate-600 text-[10px] font-black uppercase tracking-[0.2em] border-b border-slate-800/50">
              <th className="p-8">Endpoint Identifier</th>
              <th className="p-8">Connectivity</th>
              <th className="p-8">Performance</th>
              <th className="p-8">Telemetry Sync</th>
              <th className="p-8 text-right">Control</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/30">
            {apis.map((api) => (
              <tr key={api.id} className="group hover:bg-emerald-500/[0.02] transition-all duration-300">
                <td className="p-8">
                  <div className="flex items-center gap-5">
                    <div className="p-4 bg-[#050810] rounded-2xl border border-slate-800 group-hover:border-emerald-500/30 transition shadow-inner">
                      <Globe size={20} className="text-slate-400 group-hover:text-emerald-400 transition" />
                    </div>
                    <div>
                      <p className="font-black text-white text-lg tracking-tight group-hover:text-emerald-400 transition">
                        {api.name}
                      </p>
                      <p className="text-[10px] font-mono text-slate-600 uppercase tracking-tighter mt-1">
                        {api.method || 'GET'} • {api.url}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-8">
                  <div className="flex items-center gap-3">
                    <div className={`w-2.5 h-2.5 rounded-full ${
                      api.status === 'UP' ? 'bg-emerald-500 shadow-[0_0_12px_#10b981]' : 
                      api.status === 'DOWN' ? 'bg-rose-500 shadow-[0_0_12px_#f43f5e]' : 
                      'bg-amber-500 animate-pulse'
                    }`} />
                    <span className={`text-[11px] font-black uppercase tracking-widest ${
                      api.status === 'UP' ? 'text-emerald-400' : 
                      api.status === 'DOWN' ? 'text-rose-400' : 'text-amber-400'
                    }`}>
                      {api.status}
                    </span>
                  </div>
                </td>
                <td className="p-8">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-blue-400 font-mono font-bold text-sm">
                      <Activity size={14} className="opacity-50" /> {api.latency > 0 ? `${api.latency}ms` : '--'}
                    </div>
                    <div className="w-20 h-1 bg-slate-800 rounded-full overflow-hidden">
                       <div className="h-full bg-blue-500 w-[60%] opacity-50"></div>
                    </div>
                  </div>
                </td>
                <td className="p-8">
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-bold">
                    <Clock size={14} /> {api.lastChecked}
                  </div>
                </td>
                <td className="p-8 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="p-3 bg-[#050810] border border-slate-800 rounded-xl text-slate-500 hover:text-white hover:border-slate-600 transition">
                      <ArrowUpRight size={16} />
                    </button>
                    <button className="p-3 bg-[#050810] border border-slate-800 rounded-xl text-slate-500 hover:text-rose-400 hover:border-rose-900/30 transition">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Empty State if no APIs */}
        {apis.length === 0 && (
          <div className="p-20 text-center">
            <p className="text-slate-600 font-black uppercase tracking-[0.3em] text-xs">No Nodes Registered in Cluster</p>
          </div>
        )}
      </div>

      {/* --- FORM MODAL INTEGRATION --- */}
      <ApiFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

// Helper Stat Component
const QuickStat = ({ label, value, color }) => (
  <div className="bg-[#0a0f1d] p-5 rounded-2xl border border-slate-800/50 flex flex-col items-center">
    <p className="text-[9px] text-slate-600 font-black uppercase tracking-widest mb-1">{label}</p>
    <p className={`text-xl font-black ${color}`}>{value}</p>
  </div>
);

export default ApiList;