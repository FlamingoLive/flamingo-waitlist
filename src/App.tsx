import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";
import Footer from "./components/common/Footer";
import { Toaster } from "react-hot-toast";
import Landing from "./pages/Landing";
import { useEffect } from 'react';

// Extend the Window interface to include gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void; // Adjust the type as necessary
  }
}

const TrackPageView = () => {
  const location = useLocation();

  useEffect(() => {
    window.gtag('config', 'G-HZSB8WTR6S', {
      page_path: location.pathname,
    });
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <TrackPageView />
      <div className="flex flex-col">
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
        <Footer />
      </div>
      <Toaster position="top-center" />
    </Router>
  );
}

export default App;
