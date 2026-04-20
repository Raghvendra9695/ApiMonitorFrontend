import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Zap, Loader2 } from 'lucide-react';

const RegisterPage = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Direct Backend URL
  const API_URL = "https://apimonitor-pprq.onrender.com";

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `${API_URL}/api/users/register`,
        {
          email: formData.email.trim(),
          password: formData.password.trim()
        }
      );

      console.log("✅ Register Success:", response.data);

      alert("Registration Successful! Please login now.");
      navigate("/login");

    } catch (err) {
      console.error("❌ Register Error:", err);

      alert(
        err.response?.data ||
        "Registration Failed. Please try again."
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050810] px-6">
      <div className="max-w-md w-full bg-[#0a0f1d] border border-slate-800 p-10 rounded-[3rem] shadow-2xl">

        {/* Header */}
        <div className="text-center mb-10">
          <Zap className="mx-auto text-emerald-500 mb-4" size={40} />
          <h2 className="text-3xl font-black text-white">
            Create Account
          </h2>
          <p className="text-slate-500 mt-2 text-sm">
            Register your new identity
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleRegister}>

          <input
            type="email"
            placeholder="Enter Email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value
              })
            }
            className="w-full bg-[#050810] border border-slate-800 p-4 rounded-2xl text-white outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <input
            type="password"
            placeholder="Enter Password"
            required
            value={formData.password}
            onChange={(e) =>
              setFormData({
                ...formData,
                password: e.target.value
              })
            }
            className="w-full bg-[#050810] border border-slate-800 p-4 rounded-2xl text-white outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-600 hover:bg-emerald-500 py-4 rounded-2xl font-black transition text-white"
          >
            {loading ? (
              <Loader2 className="animate-spin mx-auto" size={24} />
            ) : (
              "Sign Up"
            )}
          </button>

        </form>

        {/* Footer */}
        <p className="mt-8 text-center text-slate-500 text-sm font-bold">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-emerald-400 hover:underline"
          >
            Log in
          </Link>
        </p>

      </div>
    </div>
  );
};

export default RegisterPage;