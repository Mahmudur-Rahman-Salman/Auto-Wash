import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Price from './components/Price/Price';
import Services from './components/Services/Services';
import WashingPoints from './components/WashingPoints/WashingPoints';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/price" element={<Price></Price>}></Route>
        <Route path="/service" element={<Services></Services>}></Route>
        <Route path="/washingPoints" element={<WashingPoints></WashingPoints>}></Route>

      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
