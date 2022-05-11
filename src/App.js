import { Route, Routes } from "react-router-dom";
import "./App.css";

import "aos/dist/aos.css";
import AOS from "aos";


import Navbars from "./component/Navbars";
import Home from "./Pages/Home";
import Footer from './component/Footer/Footer'
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog"
import Notfound from "./Pages/NotFoun";

import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"

import RequireAuth from "./component/RequireAuth/RequireAuth"
import CheckOut from "./Pages/CheckOut"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function App() {
  AOS.init();
  return (
    <div className="App">
      <Navbars></Navbars>

      <Routes>

        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>

        <Route path="/checkout" element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>

        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>


      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;