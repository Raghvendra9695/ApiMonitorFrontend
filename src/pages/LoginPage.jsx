import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Zap, Loader2 } from 'lucide-react';
import axios from 'axios';

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // 1. Backend API call (UserController /login endpoint)
      const response = await axios.post('http://localhost:8080/api/users/login', {
        email: formData.email,
        password: formData.password
      });

      // 2. JWT Token save karna (JwtUtil se generate hua token)
      const token = response.data; 
      localStorage.setItem('token', token);
      
      // 3. Dashboard par redirect karna
      navigate('/dashboard');
    } catch (err) {
      // Error handling (Invalid credentials ya server error)
      setError(err.response?.data || "Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050810] px-6">
      <div className="max-w-md w-full bg-[#0a0f1d] border border-slate-800 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
        
        {/* Header */}
        <div className="text-center mb-10">
           <Zap className="mx-auto text-emerald-500 mb-4 animate-pulse" size={40} />
           <h2 className="text-3xl font-black text-white tracking-tight uppercase">Access Cluster</h2>
           <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-2">Authentication Required</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-rose-500/10 border border-rose-500/20 rounded-2xl text-rose-400 text-xs font-bold text-center">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form className="space-y-4" onSubmit={handleLogin}>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Email Identity" 
              className="w-full bg-[#050810] border border-slate-800 p-4 rounded-2xl text-white outline-none focus:ring-2 focus:ring-emerald-500 transition font-bold text-sm" 
              required 
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          
          <div className="relative">
            <input 
              type="password" 
              placeholder="Security Key" 
              className="w-full bg-[#050810] border border-slate-800 p-4 rounded-2xl text-white outline-none focus:ring-2 focus:ring-emerald-500 transition font-bold text-sm" 
              required 
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>

          <button 
            disabled={loading}
            className="w-full bg-emerald-600 hover:bg-emerald-500 py-4 rounded-2xl font-black transition text-white text-sm uppercase tracking-widest shadow-xl shadow-emerald-900/20 flex items-center justify-center gap-2"
          >
            {loading ? <Loader2 className="animate-spin" size={18} /> : "Initiate Login"}
          </button>
        </form>

        <p className="mt-8 text-center text-slate-500 text-[11px] font-black uppercase tracking-widest">
          New Node? <Link to="/register" className="text-emerald-400 hover:underline">Create identity</Link>
        </p>

        {/* Decorative Glow */}
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-emerald-500/10 blur-[60px] rounded-full"></div>
      </div>
    </div>
  );
};

export default LoginPage;