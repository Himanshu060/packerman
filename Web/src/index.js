import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Op from "./op";
import LogPage from "./components/Log";
import Home from "./Home";

ReactDOM.render(
  <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="app" element={<App />} />
        <Route path="operation" element={<Op />} />
        <Route path="result" element={<Result />} />
        <Route path="history" element={<LogPage />} />
      </Routes>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
