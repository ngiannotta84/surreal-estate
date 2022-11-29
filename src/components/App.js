import React from "react";
import { Routes, Route } from "react-router-dom";
import "../styles/app.css";
import AddProperty from "./AddProperty";
import Navbar from "./Navbar";
import Properties from "./Properties";

const App = () => {
  return (
    <div className="App">
      <h2>Surreal Estate</h2>
      <Navbar />
      <Routes>
        <Route path="/" element={<Properties />} />
        <Route path="add-property" element={<AddProperty />} />
      </Routes>
    </div>
  );
};
/* it is Navabar that is displaying the links the Routes are just defing the paths that they need 
to follow and then diaplyin the actual components */

export default App;
