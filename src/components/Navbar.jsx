import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaSearch, FaBars, FaTimes, FaUser } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(import.meta.env.VITE_SERVER_URL + '/users/logout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        navigate('/login');
      } else {
        console.error('Logout failed:', response.statusText);
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-blue-600">Bare and Best</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="/products" className="text-gray-700 hover:text-blue-600">Products</a>
            <a href="/categories" className="text-gray-700 hover:text-blue-600">Categories</a>
            <a href="/offers" className="text-gray-700 hover:text-blue-600">Offers</a>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search medicines..."
                className="w-64 px-4 py-1 rounded-full border focus:outline-none focus:border-blue-500"
              />
              <FaSearch className="absolute right-3 top-2 text-gray-400" />
            </div>
          </div>

          {/* Auth and Cart Icons */}
          <div className="flex items-center space-x-4">
            <button className="relative">
              <FaShoppingCart className="h-6 w-6 text-gray-700 hover:text-blue-600" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                0
              </span>
            </button>

            {isLoggedIn ? (
              <div className="relative">
                <button 
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
                >
                  <FaUser className="h-6 w-6" />
                </button>
                
                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
                    <Link to="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Orders</Link>
                    <button 
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link 
                to="/login" 
                className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
              >
                Login
              </Link>
            )}
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">Home</a>
              <a href="/products" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">Products</a>
              <a href="/categories" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">Categories</a>
              <a href="/offers" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">Offers</a>
              <div className="relative px-3 py-2">
                <input
                  type="text"
                  placeholder="Search medicines..."
                  className="w-full px-4 py-1 rounded-full border focus:outline-none focus:border-blue-500"
                />
                <FaSearch className="absolute right-6 top-4 text-gray-400" />
              </div>
              {!isLoggedIn && (
                <>
                  <Link 
                    to="/login" 
                    className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md"
                  >
                    Login
                  </Link>
                  <Link 
                    to="/signup" 
                    className="block px-3 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
