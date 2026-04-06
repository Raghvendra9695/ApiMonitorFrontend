import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050810] px-6">
      <div className="max-w-md w-full bg-[#0a0f1d] border border-slate-800 p-10 rounded-[3rem] shadow-2xl">
        <h2 className="text-4xl font-black text-white mb-2 text-center tracking-tight">Join Pro</h2>
        <p className="text-slate-500 text-center mb-10 font-bold">Start monitoring your nodes today</p>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); navigate('/login'); }}>
          <input type="text" placeholder="Full Name" className="w-full bg-[#050810] border border-slate-800 p-4 rounded-2xl text-white outline-none" required />
          <input type="email" placeholder="Work Email" className="w-full bg-[#050810] border border-slate-800 p-4 rounded-2xl text-white outline-none" required />
          <input type="password" placeholder="Create Password" className="w-full bg-[#050810] border border-slate-800 p-4 rounded-2xl text-white outline-none" required />
          <button className="w-full bg-blue-600 hover:bg-blue-500 py-4 rounded-2xl font-black transition text-white text-lg">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;