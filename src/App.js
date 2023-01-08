import Home from "./pages/Home";
import  Search  from "./pages/Search";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBuy from "./pages/SearchBuy";
import SearchSell from "./pages/SearchSell";
import Property from "./pages/Property";


const App = ()=> {
  return (
    <>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Search' element={<Search/>}/>
          <Route path='/Buyproperty' element={(<SearchBuy/>)}/>
          <Route path='/Sellproperty' element={(<SearchSell/>)}/>
          <Route path='/property' element={(<Property/>)}/>
      </Routes>
      
      
      {/* <Home/> */}
    </>
  )
  }

export default App;
