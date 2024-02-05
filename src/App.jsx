import './App.css'

import Header from './components/header/Header.jsx'
import '././styles/reset.css';
import '././styles/common.css';
import Promo from "./components/promo/Promo.jsx";
import Footer from './components/footer/Footer.jsx'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Fashion from "./pages/fashion/Fashion.jsx";
import Favorite from "./pages/favorite/Favorite.jsx";
import Lifestyle from "./pages/lifestile/Lifestyle.jsx";
import Login from "./pages/login/Login.jsx";
import Cart from "./pages/cart/Cart.jsx";
import Singup from "./pages/singup/Singup.jsx";
import Navbar from "./components/navigation/Navbar.jsx";


function App() {

  return (
    <>
      <Header/>
      <Navbar/>
      <Promo/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Product: id' element={<Home/>}/>
        <Route path='/Fashion' element={<Fashion/>}/>
        <Route path='/Favorite' element= {<Favorite/>}/>
        <Route path='/Lifestile' element= {<Lifestyle/>}/>
        <Route path='/Login' element= {<Login/>}/>
        <Route path='/Cart' element= {<Cart/>}/>
        <Route path='/Singup' element= {<Singup/>}/>
      </Routes>
      <Footer/>





    </>
  );
}

export default App;
