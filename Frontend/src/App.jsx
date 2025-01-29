import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Register from "./pages/Regsier";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./pages/Header";
import Footer from "./pages/Footer";

const Layout = ({ children }) => {
  const location = useLocation();
  const noHeaderFooterRoutes = ["/register", "/login"];

  return (
    <>
      {/* Show Header & Footer only if not in Register/Login */}
      {!noHeaderFooterRoutes.includes(location.pathname) && <Header />}
      
      {children}
      
      {!noHeaderFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
