import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <header className="w-screen bg-theme-white">
        <Navbar />
      </header>
      <main>{children}</main>
      <footer className="w-screen bg-theme-black text-theme-white">
        <div className="justify-center p-24">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default Layout;
