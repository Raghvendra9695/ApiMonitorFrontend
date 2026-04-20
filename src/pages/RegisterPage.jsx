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

  const API_URL = "https://apimonitor-pprq.onrender.com";

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        `${API_URL}/api/users/register`,
        formData
      );

      console.log("REGISTER SUCCESS:", res.data);

      alert("Registration Successful!");
      navigate("/login");

    } catch (err) {
      console.error(err);
      alert("Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return <div>Your JSX same</div>;
};

export default RegisterPage;