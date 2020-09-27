import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <header className="w-screen bg-theme-white">
        <Navbar />
      </header>
      <main>{children}</main>
      <footer className="w-screen bg-theme-black text-theme-white">
        <div className="container max-w-5xl p-3 md:p-0 md:pt-24">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default Layout;
