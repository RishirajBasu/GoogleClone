import "./App.css";
import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
              <Route path="/search">
                </Route>
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
