import React, { useState } from 'react';
import { X, Globe, Zap, Clock, Shield } from 'lucide-react';
import { useApi } from '../context/ApiContext';

const ApiFormModal = ({ isOpen, onClose }) => {
  const { addApi } = useApi();
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    method: 'GET',
    interval: '60',
    headers: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    addApi({
      ...formData,
      latency: 0,
      lastChecked: 'Just now',
      status: 'PENDING'
    });
    onClose(); // Form submit hone ke baad modal band ho jaye
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="w-full max-w-xl bg-[#0a0f1d] border border-slate-800 rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="p-8 border-b border-slate-800/50 flex justify-between items-center bg-slate-900/20">
          <div>
            <h2 className="text-2xl font-black text-white tracking-tight">Configure New API</h2>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Endpoint Registration</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-800 rounded-full text-slate-500 hover:text-white transition">
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="space-y-4">
            {/* API Name */}
            <div className="relative">
              <label className="text-[10px] font-black text-slate-600 uppercase ml-4 mb-1 block tracking-widest">Service Name</label>
              <input 
                type="text" 
                required
                placeholder="e.g. Payment Gateway"
                className="w-full bg-[#050810] border border-slate-800 p-4 rounded-2xl text-white outline-none focus:ring-2 focus:ring-emerald-500 transition"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            {/* URL */}
            <div className="relative">
              <label className="text-[10px] font-black text-slate-600 uppercase ml-4 mb-1 block tracking-widest">Endpoint URL</label>
              <input 
                type="url" 
                required
                placeholder="https://api.example.com/v1/health"
                className="w-full bg-[#050810] border border-slate-800 p-4 rounded-2xl text-white outline-none focus:ring-2 focus:ring-emerald-500 transition"
                onChange={(e) => setFormData({...formData, url: e.target.value})}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Method */}
              <div>
                <label className="text-[10px] font-black text-slate-600 uppercase ml-4 mb-1 block tracking-widest">HTTP Method</label>
                <select 
                  className="w-full bg-[#050810] border border-slate-800 p-4 rounded-2xl text-white outline-none appearance-none"
                  onChange={(e) => setFormData({...formData, method: e.target.value})}
                >
                  <option>GET</option>
                  <option>POST</option>
                  <option>PUT</option>
                </select>
              </div>
              {/* Interval */}
              <div>
                <label className="text-[10px] font-black text-slate-600 uppercase ml-4 mb-1 block tracking-widest">Interval (Sec)</label>
                <input 
                  type="number" 
                  placeholder="60"
                  className="w-full bg-[#050810] border border-slate-800 p-4 rounded-2xl text-white outline-none focus:ring-2 focus:ring-emerald-500"
                  onChange={(e) => setFormData({...formData, interval: e.target.value})}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button 
              type="button" 
              onClick={onClose}
              className="flex-1 py-4 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-2xl font-black text-sm transition uppercase tracking-widest"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="flex-1 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-black text-sm transition uppercase tracking-widest shadow-xl shadow-emerald-900/20"
            >
              Deploy Monitor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApiFormModal;