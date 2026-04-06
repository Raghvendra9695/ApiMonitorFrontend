import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, LineChart, Line 
} from 'recharts';

// Mock Data: Real project mein ye backend se aayega
const data = [
  { time: '10:00', ms: 45, uptime: 100 },
  { time: '12:00', ms: 52, uptime: 99 },
  { time: '14:00', ms: 110, uptime: 98 },
  { time: '16:00', ms: 65, uptime: 100 },
  { time: '18:00', ms: 48, uptime: 100 },
  { time: '20:00', ms: 55, uptime: 100 },
  { time: '22:00', ms: 40, uptime: 100 },
];

export const ResponseTimeChart = () => (
  <div className="h-80 w-full bg-[#0a0f1d] p-8 rounded-[2.5rem] border border-slate-800/50 shadow-2xl">
    <div className="flex justify-between items-center mb-6">
      <h4 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">Response Latency (ms)</h4>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
        <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Live Stream</span>
      </div>
    </div>
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorMs" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
        <XAxis 
          dataKey="time" 
          stroke="#475569" 
          fontSize={10} 
          tickLine={false} 
          axisLine={false} 
          dy={10}
        />
        <YAxis 
          stroke="#475569" 
          fontSize={10} 
          tickLine={false} 
          axisLine={false} 
        />
        <Tooltip 
          contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', fontSize: '12px' }}
          itemStyle={{ color: '#10b981', fontWeight: 'bold' }}
        />
        <Area 
          type="monotone" 
          dataKey="ms" 
          stroke="#10b981" 
          strokeWidth={3}
          fillOpacity={1} 
          fill="url(#colorMs)" 
          animationDuration={2000}
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);