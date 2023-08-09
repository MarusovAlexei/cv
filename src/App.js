import "./App.scss";

import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Main from "./pages/main/Main";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
