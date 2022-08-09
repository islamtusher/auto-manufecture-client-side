
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home/Home';
import Footer from './pages/shared/Footer';
import Parts from './pages/HomeComponents/Parts';
import Navbar from './pages/shared/Navbar';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login';
import SignUp from './pages/Signup/SignUp';
import { ToastContainer } from 'react-toastify';
import RequireAuth from './additional/RequireAuth';
import Purchase from './pages/PartsPurchase/Purchase';
import Dashboard from './pages/Dashboard/Dashboard';
import MyPurchases from './pages/Dashboard/MyPurchases';
import AddReviews from './pages/Dashboard/AddReviews';
import MyProfile from './pages/Dashboard/MyProfile';
import Payment from './pages/Dashboard/Payment/Payment';
import MakeAdmin from './pages/Dashboard/AdminAccessPages/MakeAdmin';
import RequireAdmin from './additional/RequireAdmin';
import AddNewParts from './pages/Dashboard/AdminAccessPages/AddNewParts';
import AboutUs from './pages/HomeComponents/AboutUs';
import ManageAllOrders from './pages/Dashboard/AdminAccessPages/ManageAllOrders';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div>
      <Navbar ></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/aboutus' element={<AboutUs></AboutUs>}></Route>
        <Route path='/parts' element={<Parts></Parts>}></Route>
        <Route path='/purchase/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='mypurchases' element={<MyPurchases></MyPurchases>}></Route>
          <Route path='addreviews' element={<AddReviews></AddReviews>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          {/* Admin Routes */}
          <Route path='addproduct' element={<RequireAdmin><AddNewParts></AddNewParts></RequireAdmin>}></Route>
          <Route path='manageallorders' element={<RequireAdmin><ManageAllOrders></ManageAllOrders></RequireAdmin>}></Route>
          <Route path='makeadmin' element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
