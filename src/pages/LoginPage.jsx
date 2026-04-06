import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Zap } from 'lucide-react';

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050810] px-6">
      <div className="max-w-md w-full bg-[#0a0f1d] border border-slate-800 p-10 rounded-[3rem] shadow-2xl">
        <div className="text-center mb-10">
           <Zap className="mx-auto text-emerald-500 mb-4" size={40} />
           <h2 className="text-3xl font-black text-white">Welcome Back</h2>
        </div>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); navigate('/dashboard'); }}>
          <input type="email" placeholder="Email" className="w-full bg-[#050810] border border-slate-800 p-4 rounded-2xl text-white outline-none focus:ring-2 focus:ring-emerald-500" required />
          <input type="password" placeholder="Password" className="w-full bg-[#050810] border border-slate-800 p-4 rounded-2xl text-white outline-none focus:ring-2 focus:ring-emerald-500" required />
          <button className="w-full bg-emerald-600 hover:bg-emerald-500 py-4 rounded-2xl font-black transition text-white text-lg">Sign In</button>
        </form>
        <p className="mt-8 text-center text-slate-500 text-sm font-bold">New here? <Link to="/register" className="text-emerald-400 hover:underline">Create account</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;