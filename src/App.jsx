import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import OrderPage from "./pages/OrderPage/OrderPage";
import HeroSection from "./pages/OrderPage/KanchiOrder/KanchiOrder";
import PolicyReview from "./pages/Home/sections/PolicyReviewPage/PolicyReviewPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/b2b/gowrapalladium" element={<OrderPage />} />
        <Route path="/b2c/kanchi/kondapur" element={<HeroSection />} />
        <Route path="/policy" element={<PolicyReview />} />

      </Routes>
    </Router>
  );
}

export default App;
