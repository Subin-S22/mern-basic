import React from "react";
import "./App.css";
import HomePage from "./pages/homepage";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "./pages/login";

const App: React.FC = () => {
  return (
    <div id="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
