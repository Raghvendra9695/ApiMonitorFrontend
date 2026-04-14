import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Zap, Loader2 } from 'lucide-react';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      
      await axios.post('http://localhost:8080/api/users/register', formData);
      alert("Registration Successful! Now please login.");
      navigate('/login');
    } catch (err) {
      alert("Registration Failed: " + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050810] px-6">
      <div className="max-w-md w-full bg-[#0a0f1d] border border-slate-800 p-10 rounded-[3rem] shadow-2xl">
        <div className="text-center mb-10">
           <Zap className="mx-auto text-emerald-500 mb-4" size={40} />
           <h2 className="text-3xl font-black text-white">Create Account</h2>
        </div>
        <form className="space-y-4" onSubmit={handleRegister}>
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full bg-[#050810] border border-slate-800 p-4 rounded-2xl text-white outline-none focus:ring-2 focus:ring-emerald-500" 
            required 
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full bg-[#050810] border border-slate-800 p-4 rounded-2xl text-white outline-none focus:ring-2 focus:ring-emerald-500" 
            required 
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
          <button className="w-full bg-emerald-600 hover:bg-emerald-500 py-4 rounded-2xl font-black transition text-white">
            {loading ? <Loader2 className="animate-spin mx-auto" size={24} /> : "Sign Up"}
          </button>
        </form>
        <p className="mt-8 text-center text-slate-500 text-sm font-bold">Already have an account? <Link to="/login" className="text-emerald-400 hover:underline">Log in</Link></p>
      </div>
    </div>
  );
};

export default RegisterPage;