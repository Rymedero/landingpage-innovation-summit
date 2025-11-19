import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import { Navbar } from './components/layouts/Navbar'
import FirefliesBackground from './components/background/Fireflies'


function App() {

  return (

   
     <div data-theme="mytheme" className="App bg-transparent relative min-h-screen">
      <FirefliesBackground />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
