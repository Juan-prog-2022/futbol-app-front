import PropTypes from 'prop-types';
import Navbar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

// Validación de propiedades
Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
