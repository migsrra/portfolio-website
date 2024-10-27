import ReactDOM from "react-dom/client";
import React from "react";
import LandingPage from "./pages/LandingPage/index.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact/index.js";
import NotFoundPage from "./pages/NotFoundPage/index.js";
import Experience from "./pages/Experience/index.js";
import AboutMe from "./pages/AboutMe/index.js";
import Header from "./components/header/index.js";
import IndexWrapper from "./indexWrapper.js";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Experience />} />
        </Routes>
        <Routes>
          <Route path="/" element={<AboutMe />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Contact />} />
        </Routes>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <IndexWrapper />
    <App />
  </React.StrictMode>
);
