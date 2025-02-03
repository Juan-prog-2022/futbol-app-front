import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Jugadores from './pages/Jugadores';
import Equipos from './pages/Equipos';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jugadores" element={<Jugadores />} />
          <Route path="/equipos" element={<Equipos />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

