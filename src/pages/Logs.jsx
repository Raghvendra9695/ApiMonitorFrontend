import React from 'react';
import { Clock, AlertCircle, CheckCircle } from 'lucide-react';

const Logs = () => {
  // Mock Logs Data
  const logs = [
    { id: 1, time: "2026-04-05 22:10:05", service: "Auth API", status: "UP", message: "Health check passed", latency: "12ms" },
    { id: 2, time: "2026-04-05 22:08:12", service: "Payment Gateway", status: "DOWN", message: "Connection timeout at port 5432", latency: "0ms" },
  ];

  return (
    <div className="p-8 md:p-12 bg-[#050810] min-h-screen text-slate-100">
      <header className="mb-10">
        <h1 className="text-3xl font-black tracking-tight">System Logs</h1>
        <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mt-1">Timeline of all API health checks</p>
      </header>

      <div className="space-y-6">
        {logs.map((log) => (
          <div key={log.id} className="relative pl-8 border-l-2 border-slate-800 pb-8 last:border-0">
            {/* Dot indicator */}
            <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4 border-[#050810] ${log.status === 'UP' ? 'bg-emerald-500' : 'bg-rose-500'}`}></div>
            
            <div className="bg-[#0a0f1d] p-6 rounded-2xl border border-slate-800/50 hover:border-slate-700 transition">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-widest">{log.time}</span>
                <span className={`text-[10px] font-black px-2 py-1 rounded-md ${log.status === 'UP' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                  {log.status}
                </span>
              </div>
              <h4 className="font-bold text-white mb-1">{log.service}</h4>
              <p className="text-sm text-slate-400 font-medium">{log.message}</p>
              <p className="text-[10px] mt-4 font-mono text-slate-600">LATENCY: {log.latency} | TRACE_ID: {Math.random().toString(36).substring(7).toUpperCase()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logs; // YAHI LINE MISSING THI!