import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white text-center py-3">
      <p>&copy; {new Date().getFullYear()} Fútbol App. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
