import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ApiProvider } from './context/ApiContext';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import ApiList from './pages/ApiList';
import Logs from './pages/Logs';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

// Ye chota sa component check karega ki Sidebar dikhana hai ya nahi
const LayoutWrapper = ({ children }) => {
  const location = useLocation();
  // In pages par Sidebar NAHI dikhega
  const noSidebarPages = ["/", "/login", "/register"];
  const showSidebar = !noSidebarPages.includes(location.pathname);

  return (
    <div className="flex bg-[#050810] min-h-screen">
      {showSidebar && <Sidebar />} 
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <ApiProvider>
      <Router>
        <LayoutWrapper>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/apis" element={<ApiList />} />
            <Route path="/logs" element={<Logs />} />
          </Routes>
        </LayoutWrapper>
      </Router>
    </ApiProvider>
  );
}