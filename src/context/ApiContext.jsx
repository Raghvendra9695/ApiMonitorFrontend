import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  
  const [apis, setApis] = useState([
    { id: 'd1', name: "Auth Service Cluster", url: "https://auth.api.com", status: "UP", latency: 42, lastChecked: "Live", isDummy: true },
    { id: 'd2', name: "Global Payment Gateway", url: "https://stripe.api.com", status: "UP", latency: 120, lastChecked: "Live", isDummy: true },
    { id: 'd3', name: "Internal Inventory DB", url: "https://db.internal.com", status: "DOWN", latency: 0, lastChecked: "Live", isDummy: true },
  ]);

  const fetchRealApis = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/apis`);
      
    
      const realData = response.data.map(api => ({
        ...api,
        
        status: (api.status === 200 || api.status === "UP") ? "UP" : 
                (api.status === 0 || !api.status) ? "PENDING" : "DOWN",
        latency: api.responseTime || api.latency || 0,
        lastChecked: "Just now",
        isDummy: false
      }));

      setApis(prev => {
        const dummyData = prev.filter(a => a.isDummy);
        return [...dummyData, ...realData];
      });
    } catch (err) {
      console.error("Backend offline: Sync failed");
    }
  };

  // 3. Automated Polling (8 seconds interval)
  useEffect(() => {
    const interval = setInterval(() => {
      fetchRealApis();

  
      setApis((prevApis) =>
        prevApis.map((api) => {
          if (api.isDummy) {
            const randomLatency = Math.floor(Math.random() * 200) + 20;
            const randomStatus = Math.random() > 0.1 ? "UP" : "DOWN";
            return {
              ...api,
              latency: randomStatus === "DOWN" ? 0 : randomLatency,
              status: randomStatus,
              lastChecked: new Date().toLocaleTimeString(),
            };
          }
          return api;
        })
      );
    }, 8000); 

    return () => clearInterval(interval);
  }, []);


  const addApi = async (newApi) => {
    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/apis`, {
        url: newApi.url,
        method: newApi.method || 'GET',
        name: newApi.name
      });
      fetchRealApis();
    } catch (err) {
      alert("Registration failed. Please check Spring Boot server!");
    }
  };

  return (
    <ApiContext.Provider value={{ apis, addApi }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => useContext(ApiContext);