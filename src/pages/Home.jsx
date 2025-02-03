import './Home.css';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="container mt-5">
        <h2>Descubre más sobre tus equipos favoritos</h2>
        <p>Accede a información detallada sobre jugadores, equipos y competiciones.</p>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
