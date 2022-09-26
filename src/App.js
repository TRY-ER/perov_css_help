import './style.css';
import React, { Suspense } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from "./Home";
import { Predictor } from "./Predictor";
import { Reference } from "./Reference";


function App() {
  return(
    <div>
    <Routes >
      <Route exact path="/" element={<Home />} />
      <Route exact path="/predictor" element={<Predictor />} />
      <Route exact path="/reference" element={<Reference />} />
    </Routes>
    </div>
  );
}

export default App;

