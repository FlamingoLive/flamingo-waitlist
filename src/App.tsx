import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";
import { Toaster } from "react-hot-toast";
import LandingV2 from "./pages/LandingV2";
import { useEffect } from "react";

// Extend the Window interface to include gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void; // Adjust the type as necessary
  }
}

const TrackPageView = () => {
  const location = useLocation();

  useEffect(() => {
    window.gtag("config", "G-HZSB8WTR6S", {
      page_path: location.pathname,
    });
  }, [location]);

  return null;
};

const AppContent = () => {
  // const location = useLocation();
  // const isV2 = location.pathname === "/v2";

  return (
    <div className="flex flex-col">
      <Routes>
        {/* <Route path="/v2" element={<Landing />} /> */}
        <Route path="/" element={<LandingV2 />} />
      </Routes>
      {/* {isV2 && <Footer />} */}
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <TrackPageView />
      <AppContent />
      <Toaster position="top-center" />
    </Router>
  );
}

export default App;
