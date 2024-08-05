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
function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/finance" element={<Finance/>} />
          {/* <Route path="/" /> */}
        </Routes>
      </Suspense>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
