
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Blogs from './pages/HomeComponents/Blogs';
import Business from './pages/HomeComponents/Business';
import Footer from './pages/shared/Footer';
import Parts from './pages/HomeComponents/Parts';
import Reviews from './pages/HomeComponents/Reviews';
import Navbar from './pages/shared/Navbar';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <Navbar ></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/parts' element={<Parts></Parts>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/business' element={<Business></Business>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/contact' element={<Footer></Footer>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
