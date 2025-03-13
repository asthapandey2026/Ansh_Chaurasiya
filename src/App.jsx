import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './components/Home'
import About from './Pages/About'

function App() {
  return (
    <Routes>
      {/* Routes with navbar and footer */}
      <Route path="/" element={   //route here is used to display the home page/ "/"
        <MainLayout>
          <Home />
        </MainLayout>
      } />
      <Route path="/about" element={
        <MainLayout>
          <About />
        </MainLayout>
      } />      
    </Routes>
  )
}

export default App
