import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import OrderPage from "./pages/OrderPage/OrderPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/b2b/gowrapalladium" element={<OrderPage />} />
      </Routes>
    </Router>
  );
}

export default App;
