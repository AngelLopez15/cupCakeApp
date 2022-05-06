import Header from "../components/sections/Header";
import Home from "./pages/Home";
import CupCakes from "./pages/CupCakes";
import AboutUs from "./pages/AboutUs";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/cupcakes" element={ <CupCakes /> } />
      <Route path="/nosotros" element={ <AboutUs /> } />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
