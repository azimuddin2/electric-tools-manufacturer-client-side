import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import ReviewProducts from './Pages/ReviewProducts/ReviewProducts';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='reviews' element={<ReviewProducts></ReviewProducts>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;


// https://github.com/programming-hero-web-course1/manufacturer-website-client-side-azimuddin2
