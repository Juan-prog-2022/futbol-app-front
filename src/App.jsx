import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Jugadores from './pages/Jugadores';
import Equipos from './pages/Equipos';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Página principal */}
          <Route path="/" element={<Home />} />

          {/* Página para mostrar los jugadores */}
          <Route path="/jugadores" element={<Jugadores />} />

          {/* Página para mostrar los equipos */}
          <Route path="/equipos" element={<Equipos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

