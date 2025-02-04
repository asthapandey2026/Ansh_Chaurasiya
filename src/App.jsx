import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import SignUp from './components/forms/signup'
import Login from './components/forms/login'
import Home from './components/Home'
import './App.css'

function App() {
  return (
    <Routes>
      {/* Auth routes without navbar and footer */}
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      
      {/* Routes with navbar and footer */}
      <Route path="/" element={
        <MainLayout>
          <Home />
        </MainLayout>
      } />
    </Routes>
  )
}

export default App
