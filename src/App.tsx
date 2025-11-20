import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import { Navbar } from './components/layouts/Navbar'
import FirefliesBackground from './components/background/Fireflies'
import RetoInnovation from './pages/RetoInnovation/RetoInnovation'


function App() {

  return (

   
     <div data-theme="mytheme" className="App bg-transparent relative min-h-screen">
      <FirefliesBackground />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/reto-innovation" element={<RetoInnovation />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
