import React, { Suspense, lazy } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Routes,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
const LandingPage = lazy(() => import("./Components/LandingPage"));
const Finance = lazy(()=>import('./Components/Finance'))
const Logistics = lazy(()=>import('./Components/Logistics'))
const Technology = lazy(()=>import('./Components/Technology'))
function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/finance" element={<Finance/>} />
          <Route path="/Logistics" element={<Logistics/>} />
          <Route path="/Technology" element = {<Technology/>}/>
        </Routes>
      </Suspense>
      {/* <Footer /> */}
    </Router>
  );
}
export default App;
