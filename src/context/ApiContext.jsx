import React, { createContext, useState, useContext, useEffect } from 'react';

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [apis, setApis] = useState([
    { id: 1, name: "Auth Service", url: "https://auth.api.com", status: "UP", latency: 42, lastChecked: "Just now" },
    { id: 2, name: "Payment Gateway", url: "https://stripe.api.com", status: "UP", latency: 120, lastChecked: "Just now" },
    { id: 3, name: "Inventory DB", url: "https://db.internal.com", status: "DOWN", latency: 0, lastChecked: "5 mins ago" },
  ]);

  // --- REAL-TIME POLLING LOGIC ---
  useEffect(() => {
    const interval = setInterval(() => {
      setApis((prevApis) =>
        prevApis.map((api) => {
          // Sirf Demo ke liye: Randomly status aur latency badalna
          const randomLatency = Math.floor(Math.random() * 200) + 20;
          const randomStatus = Math.random() > 0.1 ? "UP" : "DOWN"; // 10% chance to go down

          return {
            ...api,
            latency: api.status === "DOWN" ? 0 : randomLatency,
            status: randomStatus,
            lastChecked: new Date().toLocaleTimeString(),
          };
        })
      );
      console.log("Real-time Sync: Active");
    }, 8000); // Har 8 seconds mein update hoga

    return () => clearInterval(interval);
  }, []);

  const addApi = (newApi) => {
    setApis([...apis, { ...newApi, id: Date.now(), status: "PENDING", latency: 0, lastChecked: "Connecting..." }]);
  };

  return (
    <ApiContext.Provider value={{ apis, addApi }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => useContext(ApiContext);