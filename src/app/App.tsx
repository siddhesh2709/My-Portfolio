import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PortfolioProvider } from "./context/PortfolioContext";
import { PortfolioHome } from "./PortfolioHome";
import { AdminPanel } from "./components/Admin/AdminPanel";

import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.title = "Siddhesh";
  }, []);

  return (
    <PortfolioProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PortfolioHome />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </Router>
    </PortfolioProvider>
  );
}