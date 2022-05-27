import React from "react";
import "./App.css";
import HomePage from "./pages/homepage";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "./pages/login";
import { Navigate } from "react-router-dom";

const App: React.FC = () => {
  const isLogin = localStorage.getItem('login-status');
  return (
    <div id="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={isLogin ? <Navigate to={'/home'} replace /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
