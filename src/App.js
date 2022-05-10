import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbars from "./component/Navbars";
import Home from "./Pages/Home";
import Footer from './component/Footer/Footer'
import About from "./Pages/About";


function App() {
  return (
    <div className="App">
      <Navbars></Navbars>

      <Routes>

        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>


      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
