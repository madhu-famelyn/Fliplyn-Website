import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import OrderPage from "./pages/OrderPage/OrderPage";
import HeroSection from "./pages/OrderPage/KanchiOrder/KanchiOrder";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/b2b/gowrapalladium" element={<OrderPage />} />
        <Route path="/b2c/kanchi/kondapur" element={<HeroSection />} />

      </Routes>
    </Router>
  );
}

export default App;
