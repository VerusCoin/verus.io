import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen bg-theme-white">
      <header className="w-full">
        <Navbar />
      </header>
      <main>{children}</main>
      <footer className="w-full bg-center bg-cover bg-footer-bg text-theme-white">
        <div className="container max-w-5xl p-3 md:p-0 md:pt-24">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default Layout;
