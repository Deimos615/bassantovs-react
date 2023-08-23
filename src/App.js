import './App.css';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import logo from "./assets/common/logo.png";
import Homepage from './pages/Homepage';
import Product from './pages/Product';
import Service from './pages/Service';
import About from './pages/About';
import Error404 from './pages/Error404';
import { Routes, Route } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast'

function App() {
  return (
    // __________________________TODO: ____________________
    // Add Montserrat font to everything (body)

    <div className="box-border">
      <div className="flex flex-col">

        <Navbar logo={logo} />
        <div className='min-50vw'>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/product" element={<Product />} />
            <Route path="/service" element={<Service />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
        <Footer/>
      </div>
      {/* <Toaster /> */}
    </div>
  );
}

export default App;
