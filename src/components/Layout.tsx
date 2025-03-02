import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { FileText, ShoppingCart, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Layout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-orange-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-black text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FileText size={24} />
            <h1 className="text-xl font-bold">Interior Design Portal</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-medium">Welcome, Client</span>
            <button 
              onClick={handleLogout}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Logout"
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </header>
      
      {/* Sidebar and Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md">
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                    location.pathname === '/' 
                      ? 'bg-gradient-to-r from-orange-500 to-black text-white' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <FileText size={20} />
                  <span>Invoices</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/catalog" 
                  className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                    location.pathname === '/catalog' 
                      ? 'bg-gradient-to-r from-orange-500 to-black text-white' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <ShoppingCart size={20} />
                  <span>Product Catalog</span>
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;