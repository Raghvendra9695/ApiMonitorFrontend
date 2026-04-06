import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Server, Binary, Zap, LogOut } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { icon: <LayoutDashboard size={20}/>, label: "Dashboard", path: "/" },
    { icon: <Server size={20}/>, label: "API List", path: "/apis" },
    { icon: <Binary size={20}/>, label: "Logs Viewer", path: "/logs" },
  ];

  return (
    <aside className="w-72 bg-[#0a0f1d] border-r border-slate-800/50 p-8 hidden lg:flex flex-col h-screen sticky top-0">
      <div className="flex items-center gap-3 mb-12">
        <div className="p-2 bg-emerald-500 rounded-xl shadow-lg shadow-emerald-500/20">
          <Zap size={20} className="text-white fill-current" />
        </div>
        <span className="font-black text-xl tracking-tighter text-white">MONITOR PRO</span>
      </div>

      <nav className="space-y-2 flex-1">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
              location.pathname === item.path 
              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-600/20 font-black shadow-xl shadow-emerald-900/10' 
              : 'text-slate-600 hover:bg-slate-800/50 hover:text-slate-300 font-bold'
            }`}
          >
            {item.icon} <span className="text-sm uppercase tracking-tight">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto">
        <button className="flex items-center gap-3 text-slate-600 hover:text-rose-400 font-bold text-sm transition">
          <LogOut size={18} /> SIGN OUT
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;