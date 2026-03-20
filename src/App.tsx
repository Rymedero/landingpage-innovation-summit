import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import { Navbar } from './components/layouts/Navbar'
import FirefliesBackground from './components/background/Fireflies'
import RetoInnovation from './pages/RetoInnovation/RetoInnovation'
import InfoReto from './pages/InfoReto/InfoReto'
import RetoInnovationUniversity from './pages/RetoInnovationUniversity/RetoInnovationUniversity'
import InfoRetoUniversity from './pages/RetoInnovationUniversity/pages/InfoRetoUniversity/InfoRetoUniversity'
import Foco from './pages/InnovationSummit2026/pages/Foco/Foco'
import Salas from './pages/InnovationSummit2026/pages/Salas/Salas'
import Convocados from './pages/InnovationSummit2026/pages/Convocados/Convocados'
import GiftIdeaVzla from './pages/GiftIdeaVzla/GiftIdeaVzla'

function AppRoutes() {
  const location = useLocation();
  const isGiftIdeaPage = location.pathname === '/regalale-una-idea';

  return (
    <>
      {!isGiftIdeaPage ? <Navbar /> : null}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/reto-innovation" element={<RetoInnovation />} />
        <Route path="/info-reto" element={<InfoReto />} />
        <Route path="/reto-innovation-university" element={<RetoInnovationUniversity />} />
        <Route path="/info-reto-university" element={<InfoRetoUniversity />} />
        <Route path="/summit2026-foco" element={<Foco />} />
        <Route path="/summit2026-salas" element={<Salas />} />
        <Route path="/summit2026-convocados" element={<Convocados />} />
        <Route path="/regalale-una-idea" element={<GiftIdeaVzla />} />
      </Routes>
    </>
  );
}


function App() {

  return (

   
     <div data-theme="mytheme" className="App bg-transparent relative min-h-screen">
      <FirefliesBackground />
      <Router>
        <AppRoutes />
      </Router>
    </div>
  )
}

export default App
