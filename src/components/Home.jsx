import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Home() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const fetchUserProfile = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setLoading(false);
      setUserData(null);
      return;
    }

    try {
      const response = await fetch(import.meta.env.VITE_SERVER_URL + '/users/profile', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      // console.log('Profile data:', data);
      setUserData(data);
    } catch (error) {
      console.error('Error fetching profile:', error);
      setUserData(null);
      if (error.message.includes('401')) {
        localStorage.removeItem('token');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch profile whenever component mounts or location changes
    fetchUserProfile();
  }, [location.key]); // This will re-run when navigation occurs

  return (
    <div className="min-h-screen pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center my-8">Welcome to Bare and Best</h1>
        
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : userData ? (
          <div className="bg-white shadow rounded-lg p-6 mt-4">
            <h2 className="text-2xl font-semibold mb-4">Welcome, {userData.data.user.name.firstName}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Email: {userData.data.user.email}</p>
                <p className="text-gray-600">Role: {userData.data.user.role}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-gray-600 mb-4">Please log in to view your profile</p>
            <Link 
              to="/login" 
              className="inline-block bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
